import { FaCheckCircle } from "react-icons/fa";

const outcomes = [
  "Build exciting AI-powered mini projects.",
  "Understand Robotics fundamentals with real-world examples.",
  "Learn Machine Learning concepts in a fun and interactive way.",
  "Develop coding skills using Scratch and Python.",
  "Improve logical thinking, creativity, and problem-solving abilities.",
];

function LearningOutcomes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side Image */}

        <div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Learning AI"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Side Content */}

        <div>

          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Learning Outcomes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            What Your Child Will Learn
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Our AI & Robotics Summer Workshop is designed to inspire curiosity,
            creativity, and innovation. By the end of the course, every student
            will have practical experience building projects and understanding
            future technologies.
          </p>

          <div className="mt-10 space-y-5">

            {outcomes.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:bg-teal-50 hover:shadow-lg transition duration-300"
              >
                <div className="text-teal-500 text-2xl mt-1">
                  <FaCheckCircle />
                </div>

                <p className="text-gray-700 text-lg">
                  {item}
                </p>
              </div>

            ))}

          </div>

          <button className="mt-10 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
            Start Learning Today
          </button>

        </div>

      </div>
    </section>
  );
}

export default LearningOutcomes;