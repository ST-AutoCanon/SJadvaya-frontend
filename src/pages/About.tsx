export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-12 py-16 md:py-4 flex flex-col md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="flex-1">
        <img
          src="/about2.png" // place your uploaded image in public folder
          alt="Electric Vehicles"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-3">
        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          About SJ Advaya Motors
        </span>

        <h2 className="text-3xl md:text-4xl font-bold">
          Pioneering the Electric Revolution
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          EcoVolt Motors is at the forefront of sustainable transportation,
          combining cutting-edge technology with environmental responsibility.
          We specialize in two critical areas: retrofitting existing vehicles
          with electric powertrains and developing indigenous electric vehicles
          from the ground up.
          <br />
          <br />
          With a team of experienced engineers, designers, and sustainability
          experts, we're committed to making electric transportation accessible,
          affordable, and superior in performance. Our mission is to accelerate
          the transition to zero-emission mobility while creating local jobs and
          driving innovation.
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
            <h3 className="text-2xl font-bold text-green-500">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
            <h3 className="text-2xl font-bold text-green-500">100+</h3>
            <p className="text-gray-600">Expert Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
