import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface DashboardIframeProps {
  externalLoginUrlProp?: string;
  allowedOriginsProp?: string;
}

interface RouteCreds {
  username?: string;
  password?: string;
  orgId?: number;
}

interface MessagePayload {
  type?: string;
  error?: string;
}

export default function DashboardIframe({
  externalLoginUrlProp,
  allowedOriginsProp,
}: DashboardIframeProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const routeCreds = (location.state as RouteCreds) || {};

  const stored: RouteCreds = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("EMBED_LOGIN") || "{}");
    } catch {
      return {};
    }
  })();

  const username = routeCreds.username || stored.username || "";
  const password = routeCreds.password || stored.password || "";
  const orgIdFromStorage = routeCreds.orgId || stored.orgId || 34;

  useEffect(() => {
    if (routeCreds.username && routeCreds.password) {
      try {
        sessionStorage.setItem(
          "EMBED_LOGIN",
          JSON.stringify({
            username: routeCreds.username,
            password: routeCreds.password,
            orgId: orgIdFromStorage,
          }),
        );
      } catch {}
    }
  }, [routeCreds, orgIdFromStorage]);

  const externalLoginUrl =
    externalLoginUrlProp ||
    import.meta.env.VITE_EXTERNAL_LOGIN_URL ||
    import.meta.env.VITE_EXTERNAL_EMBED_URL ||
    "";

  const iframeOrigin = useMemo(() => {
    try {
      return new URL(externalLoginUrl).origin;
    } catch {
      return "";
    }
  }, [externalLoginUrl]);

  const allowedOrigins = useMemo(() => {
    const raw =
      allowedOriginsProp ||
      import.meta.env.VITE_ALLOWED_IFRAME_ORIGINS ||
      iframeOrigin ||
      "";

    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [iframeOrigin, allowedOriginsProp]);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [childReady, setChildReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "failed" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [showParentUI, setShowParentUI] = useState(true);

  useEffect(() => {
    function onMessage(ev: MessageEvent<MessagePayload>) {
      console.log("allowed origins:", allowedOrigins);
      console.log("received message:", {
        origin: ev?.origin,
        source: ev?.source,
        data: ev?.data,
      });
      const msg = ev?.data || {};

      const isFromIframeWindow =
        iframeRef.current && ev?.source === iframeRef.current.contentWindow;

      const originAllowed =
        allowedOrigins.length === 0 ||
        (ev?.origin && allowedOrigins.includes(ev.origin));

      if (!originAllowed && !isFromIframeWindow) {
        return;
      }

      if (msg.type === "child-ready") {
        setChildReady(true);
        return;
      }

      if (msg.type === "login-success") {
        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch {}

        navigate("/dashboard", {
          replace: true,
          state: { loginSuccess: true },
        });

        return;
      }

      if (msg.type === "login-failed") {
        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch {}

        navigate("/", {
          replace: true,
          state: {
            openLogin: true,
            loginError: msg.error || "Invalid credentials",
          },
        });

        return;
      }

      if (msg.type === "child-logged-out") {
        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch {}

        try {
          navigate("/", { replace: true });
        } catch {
          try {
            window.location.replace("/");
          } catch {}
        }

        setShowParentUI(true);
        setStatus("idle");
        return;
      }
    }

    window.addEventListener("message", onMessage, false);

    return () => {
      window.removeEventListener("message", onMessage, false);
    };
  }, [allowedOrigins, navigate]);

  useEffect(() => {
    if (!iframeLoaded) return;

    try {
      const win = iframeRef.current?.contentWindow;

      if (win) {
        win.postMessage({ type: "parent-handshake" }, iframeOrigin || "*");
      }
    } catch {}

    const fallback = setTimeout(() => {
      if (username && password) {
        try {
          iframeRef.current?.contentWindow?.postMessage(
            {
              type: "parent-login",
              username,
              password,
              orgId: orgIdFromStorage,
            },
            iframeOrigin || "*",
          );

          setStatus("sent");
        } catch {
          setStatus("error");
          setError("postMessage failed (fallback)");
        }
      }
    }, 250);

    return () => clearTimeout(fallback);
  }, [iframeLoaded, username, password, iframeOrigin, orgIdFromStorage]);

  useEffect(() => {
    if (!username || !password) return;

    try {
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "parent-login",
          username,
          password,
          orgId: orgIdFromStorage,
        },
        iframeOrigin || "*",
      );

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("postMessage failed");
    }
  }, [username, password, iframeOrigin, orgIdFromStorage]);

  useEffect(() => {
    if (status !== "sent") return;

    const timeout = setTimeout(() => {
      setStatus("failed");
      setError((prev) => prev || "No response from embedded app");
    }, 10000);

    return () => clearTimeout(timeout);
  }, [status]);

  if (!externalLoginUrl) {
    return (
      <p className="text-red-600">
        Configuration error: missing external login URL
      </p>
    );
  }

  return (
    <div>
      <div className="w-full h-screen">
        <iframe
          ref={iframeRef}
          src={externalLoginUrl}
          title="Embedded App"
          onLoad={() => setIframeLoaded(true)}
          className="w-full h-full border border-gray-300"
          allow="camera; microphone; geolocation; fullscreen"
        />
      </div>
    </div>
  );
}
