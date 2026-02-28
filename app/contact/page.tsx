
"use client";

import { Instagram, Linkedin } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Page = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✨ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("⚠️ Server Error");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen text-white py-28 px-6 relative overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]  blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let’s Build Something
            <br />
            <span className="text-blue-400">Amazing Together</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind? Fill out the form and I’ll get back to you soon.
          </p>

          <div className="flex gap-5 text-gray-400">
            <Instagram className="hover:text-blue-400 transition cursor-pointer" />
            <Linkedin className="hover:text-blue-400 transition cursor-pointer" />
          </div>
        </div>

        {/* Form */}
        <div className=" backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <form className="space-y-10" onSubmit={handleSubmit}>

            {/* Floating Input */}
            <div className="relative">
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 focus:border-blue-400 focus:outline-none transition"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400 ">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 focus:border-blue-400 focus:outline-none transition"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-400">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 focus:border-blue-400 focus:outline-none transition resize-none"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-400">
                Project Details
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-lg 
              bg-gradient-to-r from-blue-600 to-blue-400 
              hover:scale-105 transition-all duration-300 shadow-lg 
              disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-sm mt-4 text-green-400">
                {status}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Page;