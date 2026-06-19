import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {
    name: "",
    email: "",
    phone: "",
  };

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    newErrors.email = "Invalid Email";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(form.phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  setError(newErrors);

  if (
    newErrors.name ||
    newErrors.email ||
    newErrors.phone
  ) {
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:3000/api/enquiry",
      form
    );
console.log(res.data)
    toast.success(res.data);

    setForm({name: "",email: "",phone: "",});
    setError({name: "",email: "",phone: "",});

  } catch (error) {
    toast.error(res.data)
  }
};

  return (
    <section className="py-24 bg-linear-to-r from-teal-500 to-cyan-500">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}

        <div className="text-white">
          <span className="bg-white/20 px-4 py-2 rounded-full">
            Register Today
          </span>

          <h2 className="text-5xl font-bold mt-6">Reserve Your Child's Seat</h2>

          <p className="mt-6 text-lg leading-8">
            Limited seats available for our AI & Robotics Summer Workshop.
            Register now and begin an exciting journey into the world of
            Artificial Intelligence.
          </p>

          <div className="mt-10 space-y-4">
            <div>✅ Live Interactive Classes</div>
            <div>✅ Hands-on AI Projects</div>
            <div>✅ Industry Expert Mentors</div>
            <div>✅ Completion Certificate</div>
          </div>
        </div>

        {/* Right */}

        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Registration Form
          </h2>

          <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
            <div className="relative">
              <FaUser className="absolute left-4 top-5 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-teal-500 outline-none ${
                  error.name ? "border-red-500" : "focus:ring-2 focus:ring-teal-500"
                }`}
              />
            </div>
            {error.name && <p className="text-red-500 text-sm mt-2">{error.name}</p>}

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                 className={`w-full border rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-teal-500 outline-none ${
                  error.email ? "border-red-500" : "focus:ring-2 focus:ring-teal-500"
                }`}
              />
            </div>
              {error.email && <p className="text-red-500 text-sm mt-2">{error.email}</p>}

            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-5 text-gray-400" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-teal-500 outline-none ${
                  error.phone ? "border-red-500" : "focus:ring-2 focus:ring-teal-500"
                }`}
              />
            </div>
                {error.phone && <p className="text-red-500 text-sm mt-2">{error.phone}</p>}

            <button
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl text-lg font-semibold transition"
              type='submit'
            >
              Register Now →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
