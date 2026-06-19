import {
  FaUsers,
  FaCalendarAlt,
  FaLaptop,
  FaRupeeSign,
  FaRocket,
} from "react-icons/fa";

const workshopDetails = [
  {
    icon: <FaUsers />,
    title: "Age Group",
    value: "8 - 14 Years",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Duration",
    value: "4 Weeks",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaLaptop />,
    title: "Mode",
    value: "Online",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaRupeeSign />,
    title: "Fee",
    value: "₹2,999",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaRocket />,
    title: "Starts On",
    value: "15 July 2026",
    color: "bg-cyan-100 text-cyan-600",
  },
];

function WorkshopDetails() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Workshop Details
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Everything You Need to Know
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Join our exciting AI & Robotics Summer Workshop specially designed
            for young innovators to learn, build and explore future
            technologies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {workshopDetails.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${item.color}`}
              >
                {item.icon}
              </div>

              <p className="text-gray-500 font-medium">{item.title}</p>

              <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl text-white p-10 md:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Limited Seats Available!
            </h2>

            <p className="mt-3 text-teal-100">
              Enroll today and secure your child's place in our AI & Robotics
              Summer Workshop.
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;