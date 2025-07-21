import React from "react";
import { motion } from "framer-motion";
import sampleImage2 from "../assets/images/sample-2.jpeg";

// Benefit images (from public folder)
const benefits = [
  { title: "Fun workplace vibes", image: "/assets/images/careers/Fun workplace vibes.jpg" },
  { title: "Work life balance", image: "/assets/images/careers/Work life balance.jpg" },
  { title: "Supportive environment", image: "/assets/images/careers/Speak up culture.jpg" },
  { title: "Great learning exposurer", image: "/assets/images/careers/Great learning exposure.jpg" },
  { title: "Equal opportunity employer", image: "/assets/images/careers/Equal opportunity employer.jpg" },
  { title: "Regular training & seminars", image: "/assets/images/careers/Regular training & seminars.jpg" },
];

const jobOpenings = [
  {
    title: "Sr. Manager - Sourcing",
    description: "Coming soon Coming soon Coming soon",
    location: "Pune",
    apply: "#",
  },
];

export default function Careers() {
  return (
    <div className="bg-light text-dark">
      {/* Work With Us Section */}
      <section className="py-24 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-heading italic text-primary mb-4">
            Work <span className="not-italic">with us</span>
          </h2>
          <hr className="border-t border-dark/30 mb-6" />
          <p className="text-xl text-dark/70 leading-relaxed font-light max-w-3xl">
            Join the most happening team in construction chemicals where we learn, earn and have a lot of fun.
          </p>
        </motion.div>

        <motion.img
          src={sampleImage2}
          alt="Team"
          className="w-full h-[400px] object-cover rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            className="text-3xl md:text-4xl text-primary italic font-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why <span className="not-italic">work</span> with us?
          </motion.h3>

          <motion.p
            className="text-dark/70 text-lg max-w-3xl mx-auto font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Not just any other construction chemical company — get great pay, amazing work culture, and numerous benefits. A safe working environment & excellent learning exposure.
          </motion.p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-dark mt-3 text-base font-medium">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="bg-accent py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl text-center font-heading italic text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Current <span className="not-italic">Openings</span>
          </motion.h3>

          <motion.p
            className="text-center text-dark/70 font-light mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Please look at the current openings and apply if you find one that suits you. We're happy to onboard you ASAP!
          </motion.p>

          <motion.div
            className="overflow-x-auto bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <table className="min-w-full text-left border border-gray-300">
              <thead>
                <tr className="bg-white text-dark text-base">
                  <th className="py-4 px-6 border-b border-gray-300 font-semibold">Job Title</th>
                  <th className="py-4 px-6 border-b border-gray-300 font-semibold">Job Description</th>
                  <th className="py-4 px-6 border-b border-gray-300 font-semibold">Location</th>
                  <th className="py-4 px-6 border-b border-gray-300 font-semibold">Apply Here</th>
                </tr>
              </thead>
              <tbody>
                {jobOpenings.map((job, idx) => (
                  <tr key={idx} className="hover:bg-accent/40 transition-all duration-300">
                    <td className="py-4 px-6 border-b border-gray-300">{job.title}</td>
                    <td className="py-4 px-6 border-b border-gray-300">{job.description}</td>
                    <td className="py-4 px-6 border-b border-gray-300">{job.location}</td>
                    <td className="py-4 px-6 border-b border-gray-300">
                      <a
                        href={job.apply}
                        className="text-primary underline hover:text-primary-dark transition-colors"
                      >
                        Apply
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-4 text-sm text-dark/50 text-right">Page 1 of 1</div>
        </div>
      </section>
    </div>
  );
}
