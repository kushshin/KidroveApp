import { FaRobot, FaCertificate, FaUsers } from "react-icons/fa";
import { MdOnlinePrediction } from "react-icons/md";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 text-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            🚀 Summer 2026 Batch Now Open
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            AI & Robotics
            <br />
            Summer Workshop
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-100">
            Introduce your child to Artificial Intelligence, Robotics,
            Programming, and Problem Solving through exciting live online
            classes taught by industry experts.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Enroll Now
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition">
              Learn More
            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

            <div className="border border-white rounded-lg p-2">
              <FaUsers className="text-3xl mb-2" />
              <h2 className="font-bold text-2xl">500+</h2>
              <p className="text-sm">Students</p>
            </div>

            <div className="border border-white rounded-lg p-2">
              <FaRobot className="text-3xl mb-2" />
              <h2 className="font-bold text-2xl">25+</h2>
              <p className="text-sm">Projects</p>
            </div>

            <div className="border border-white rounded-lg p-2">
              <FaCertificate className="text-3xl mb-2" />
              <h2 className="font-bold text-2xl">100%</h2>
              <p className="text-sm">Certificate</p>
            </div>

            <div className="border border-white rounded-lg p-2">
              <MdOnlinePrediction className="text-3xl mb-2" />
              <h2 className="font-bold text-2xl">Live</h2>
              <p className="text-sm">Online Classes</p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900"
            alt=""
            className="rounded-[40px] shadow-2xl"
          />

          <div className="absolute -bottom-6 left-6 bg-white text-gray-800 rounded-2xl p-5 shadow-xl">
            <h3 className="font-bold text-lg">
              Starts on
            </h3>

            <p className="text-teal-600 text-xl font-bold">
              15 July 2026
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;