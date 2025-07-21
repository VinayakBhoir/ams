import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <div className="bg-light text-dark overflow-hidden">

      {/* Header Section */}
      <motion.section
        className="bg-primary text-white py-20 px-6 md:px-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-heading italic mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
          Whether you have a question about our products, need a technical consultation, or want to collaborate — we’re here for you.
        </p>
      </motion.section>

      {/* Contact Info & Form */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">
            Head Office
          </h2>
          <p className="text-lg leading-relaxed text-dark/70 mb-4 font-light">
            AMS Construction Chemicals Pvt. Ltd. <br />
            401, Summit Building, Industrial Zone, <br />
            Pune, Maharashtra, India – 411001
          </p>
          <p className="mb-4 font-light">
            <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
          <p className="mb-4 font-light">
            <span className="font-medium">Email:</span> info@ams.in
          </p>
          <p className="mb-4 font-light">
            <span className="font-medium">Support:</span> support@ams.in
          </p>

          {/* Map */}
          <motion.div
            className="mt-10 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <iframe
              title="Google Map"
              className="w-full h-64 border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4543612701744!2d73.85674331532837!3d18.52043077558771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0b4a4f1e4a1%3A0xd8e4b2fdb3f2c6b3!2sPune!5e0!3m2!1sen!2sin!4v1615999999999!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {[
              { label: "Full Name", type: "text", placeholder: "Your Name" },
              { label: "Email Address", type: "email", placeholder: "you@example.com" },
              { label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            ].map((field, i) => (
              <motion.div key={field.label} custom={i} variants={fadeUp}>
                <label className="block text-sm font-medium text-dark/80 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium text-dark/80 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              ></textarea>
            </motion.div>
            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-16 bg-accent px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl md:text-3xl font-heading text-primary mb-4">
          Let's build better concrete chemistry together.
        </h3>
        <p className="text-lg text-dark/70 font-light">
          We're ready to collaborate on your next infrastructure solution.
        </p>
      </motion.section>
    </div>
  );
};

export default Contact;
