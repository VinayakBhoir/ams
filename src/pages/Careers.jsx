import React from 'react';
import sampleImage2 from "../assets/images/sample-2.jpeg";
import one from "../../public/assets/images/careers/Great learning exposure.jpg"
import two from "../../public/assets/images/careers/Work hard, party harder.jpg"
import three from "../../public/assets/images/careers/Equal opportunity employer.jpg"
import four from "../../public/assets/images/careers/Regular training & seminars.jpg"
import five from "../../public/assets/images/careers/Speak up culture.jpg"
import six from "../../public/assets/images/careers/Fun workplace vibes.jpg"

const careerBenefits = [
  { image: one, caption: 'Great learning exposure' },
  { image: two, caption: 'Work hard, party harder' },
  { image: three, caption: 'Equal opportunity employer' },
  { image: four, caption: 'Regular training & seminars' },
  { image: five, caption: 'Speak up culture' },
  { image: six, caption: 'Fun workplace vibes' },
];

const jobOpenings = [
  {
    title: 'Sr. Manager - Sourcing',
    description: 'Coming soon Coming soon Coming soon',
    location: 'Pune',
    apply: '#',
  },
];

const Careers = () => {
  return (
    <div className="bg-light text-dark">

      {/* Work With Us Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="mb-10">
          <h2 className="text-4xl font-heading italic text-primary mb-4">
            Work <span className="not-italic">with us</span>
          </h2>
          <hr className="border-t border-dark/30 mb-6" />
          <p className="text-xl text-dark/70 leading-relaxed font-light max-w-3xl">
            Join the most happening team in construction chemicals where we learn, earn and have a lot of fun.
          </p>
        </div>
        <img
          src={sampleImage2}
          alt="Team"
          className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
        />
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl text-primary italic font-heading mb-4">
            Why <span className="not-italic">work</span> with us?
          </h3>
          <p className="text-dark/70 text-lg max-w-3xl mx-auto font-light mb-12">
            Not just any other construction chemical company — get great pay, amazing work culture, and numerous benefits. A safe working environment & excellent learning exposure.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {careerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={benefit.image}
                    alt={benefit.caption}
                    className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-dark mt-3 text-base font-medium">{benefit.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="bg-accent py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl text-center font-heading italic text-primary mb-4">
            Current <span className="not-italic">Openings</span>
          </h3>
          <p className="text-center text-dark/70 font-light mb-10">
            Please look at the current openings and apply if you find one that suits you. We're happy to onboard you ASAP!
          </p>

          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
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
                  <tr key={idx} className="hover:bg-accent/40 transition-all">
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
          </div>

          <div className="mt-4 text-sm text-dark/50 text-right">Page 1 of 1</div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
  