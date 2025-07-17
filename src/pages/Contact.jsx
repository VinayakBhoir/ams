import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#fde9e1] text-gray-800">
      {/* Header Section */}
      <section className="bg-[#d6470b] text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif italic mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Whether you have a question about our products, need a technical consultation, or want to collaborate — we’re here for you.
        </p>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#d6470b] mb-6">Head Office</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            INFRABOND Construction Chemicals Pvt. Ltd. <br />
            401, Summit Building, Industrial Zone, <br />
            Pune, Maharashtra, India – 411001
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> info@infrabond.in
          </p>
          <p className="mb-4">
            <span className="font-semibold">Support:</span> support@infrabond.in
          </p>

          {/* Google Map Embed */}
          <div className="mt-8">
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4543612701744!2d73.85674331532837!3d18.52043077558771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0b4a4f1e4a1%3A0xd8e4b2fdb3f2c6b3!2sPune!5e0!3m2!1sen!2sin!4v1615999999999!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-serif text-[#d6470b] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d6470b]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d6470b]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d6470b]"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d6470b]"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#d6470b] hover:bg-[#b23c09] text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="text-center py-16 bg-[#fff1ec]">
        <h3 className="text-2xl md:text-3xl font-serif text-[#d6470b] mb-4">
          Let's build better concrete chemistry together.
        </h3>
        <p className="text-lg text-gray-700">
          We're ready to collaborate on your next infrastructure solution.
        </p>
      </section>
    </div>
  );
};

export default Contact;
