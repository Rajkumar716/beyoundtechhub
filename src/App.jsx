import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Section animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-gray-900">
      {/* ================= FULL-PAGE ANIMATED BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E0A3C] via-[#4B2A99] to-[#3A0CA3] opacity-95"></div>

        {/* Moving blur blobs */}
        <motion.div
          className="absolute top-0 -left-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute top-10 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{ x: [0, -50, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        {/* ================= HEADER ================= */}
        <header className="fixed w-full bg-black/30 backdrop-blur-lg border-b border-white/10 z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo + Company Name */}
            <div className="flex items-center space-x-3">
              <motion.img
                src="https://rajkumar716.github.io/companylogo.png"
                alt="BeyoundTechHub Logo"
                className="w-20 h-10 object-contain"
                whileHover={{
                  rotateY: 20,
                  rotateX: 10,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                style={{ perspective: 600 }}
              />
              <h1
                className="text-2xl font-bold text-transparent drop-shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF006E, #8338EC, #3A86FF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                BeyoundTechHub
              </h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 font-medium text-white">
              {["About", "Services", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-purple-400 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-black/30 backdrop-blur-lg px-6 py-4 space-y-4 text-white">
              {["About", "Services", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block hover:text-purple-400 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="h-20"></div>

        {/* ================= HERO ================= */}
        <motion.section
          className="relative z-10 py-24 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-300 drop-shadow-[0_0_20px_rgb(139,92,246)]">
            Building Digital Excellence
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-80 text-white/90 mb-6">
            We create innovative solutions that transform businesses and deliver
            exceptional digital experiences.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px #9f7aea",
              boxShadow: "0 0 20px #7f5af0",
            }}
            className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Get Started
          </motion.button>
        </motion.section>

        {/* ================= ABOUT ================= */}
        <motion.section
          id="about"
          className="relative z-10 py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-black/30 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-xl hover:scale-105 transition-all duration-500">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-purple-300 drop-shadow-lg">
                About Our Company
              </h3>
              <p className="opacity-80 leading-relaxed text-white/90">
                We are a passionate team delivering cutting-edge web, mobile,
                and branding solutions. Our goal is to build scalable digital
                products that help businesses grow.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="About"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.section>

        {/* ================= SERVICES ================= */}
        <motion.section
          id="services"
          className="relative z-10 py-20 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-12 text-purple-300 drop-shadow-lg">
            Our Services
          </h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {["Web Development", "Mobile Apps", "UI/UX Design"].map(
              (service, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px #7f5af0",
                    textShadow: "0 0 5px #d8b4fe",
                  }}
                  className="bg-black/30 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg transition"
                >
                  <h4 className="text-xl font-semibold mb-4 text-purple-200">
                    {service}
                  </h4>
                  <p className="opacity-80 text-white/90">
                    High-quality, scalable and modern digital solutions tailored
                    to your business.
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </motion.section>

        {/* ================= TEAM ================= */}
        <motion.section
          id="team"
          className="relative z-10 py-20 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-12 text-purple-300 drop-shadow-lg">
            Meet Our Team
          </h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {["John Doe", "Jane Smith", "Michael Lee"].map((name, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px #7f5af0",
                  textShadow: "0 0 5px #d8b4fe",
                }}
                className="bg-black/30 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-white/20"
                />
                <h4 className="font-semibold text-purple-200">{name}</h4>
                <p className="text-sm opacity-80 text-white/80">
                  Senior Developer
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= CONTACT ================= */}
        <motion.section
          id="contact"
          className="relative z-10 py-20 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-8 text-purple-300 drop-shadow-lg">
              Contact Us
            </h3>

            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/20 border border-white/20 rounded-lg px-4 py-3 placeholder-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/20 border border-white/20 rounded-lg px-4 py-3 placeholder-white focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-black/20 border border-white/20 rounded-lg px-4 py-3 placeholder-white focus:outline-none"
              ></textarea>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px #9f7aea",
                  boxShadow: "0 0 20px #7f5af0",
                }}
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* ================= FOOTER ================= */}
        <footer className="relative z-10 text-center py-6 bg-black/30 backdrop-blur-lg border-t border-white/10">
          <p className="text-white/80">
            © 2026 YourCompany. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
