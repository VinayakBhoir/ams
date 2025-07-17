import React from 'react';
import sampleImage1 from "../assets/images/sample-3.jpg";
import sampleImage2 from "../assets/images/sample-2.jpeg";

const careerBenefits = [
    {
        image: sampleImage1,
        caption: 'Great learning exposure',
    },
    {
        image: sampleImage1,
        caption: 'Work hard, party harder',
    },
    {
        image: sampleImage1,
        caption: 'Equal opportunity employer',
    },
    {
        image: sampleImage1,
        caption: 'Regular training & seminars',
    },
    {
        image: sampleImage1,
        caption: 'Speak up culture',
    },
    {
        image: sampleImage1,
        caption: 'Fun workplace vibes',
    },
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
        <div className="bg-[#fde9e1] text-gray-800">
            {/* Work With Us Section */}
            {/* Careers Intro Section */}
            <section className="py-12 px-4 md:px-8 lg:px-12">
                <div className="text-left mb-6">
                    <h2 className="text-3xl font-light mb-2">
                        <span className="italic">Work</span> with us
                    </h2>
                    <hr className="border-t border-gray-400 mb-6" />
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed text-justify">
                    Join the most happening team in construction chemicals where we learn, earn and have a lot of fun.
                </p>
                <img
                    src={sampleImage2} // Replace with your image variable if different
                    alt="Team"
                    className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                />
            </section>


            {/* Why Work With Us Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h3 className="text-2xl text-orange-600 italic font-medium text-center mb-4">
                    Why <span className="not-italic">work</span> with us?
                </h3>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Not just any other construction chemical company — get great pay, amazing work culture, and numerous benefits. A safe working environment & excellent learning exposure.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {careerBenefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={benefit.image}
                                    alt={benefit.caption}
                                    className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <p className="text-gray-700 mt-2">{benefit.caption}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Job Openings Section */}
            <section className="bg-[#f9b798] py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-2xl text-center font-medium italic mb-6 text-orange-700">
                        Current <span className="not-italic">Openings</span>
                    </h3>
                    <p className="text-center text-gray-700 mb-6">
                        Please look at the current openings and apply if you find one that suits you. We're happy to onboard you ASAP!
                    </p>

                    <div className="overflow-x-auto bg-[#fde9e1] rounded-md shadow-md">
                        <table className="min-w-full text-left border border-gray-300">
                            <thead>
                                <tr className="bg-[#fde9e1] text-gray-700">
                                    <th className="py-3 px-6 border-b border-gray-300 font-semibold">Job Title</th>
                                    <th className="py-3 px-6 border-b border-gray-300 font-semibold">Job Description</th>
                                    <th className="py-3 px-6 border-b border-gray-300 font-semibold">Location</th>
                                    <th className="py-3 px-6 border-b border-gray-300 font-semibold">Apply Here</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobOpenings.map((job, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffe7db] transition-all">
                                        <td className="py-4 px-6 border-b">{job.title}</td>
                                        <td className="py-4 px-6 border-b">{job.description}</td>
                                        <td className="py-4 px-6 border-b">{job.location}</td>
                                        <td className="py-4 px-6 border-b">
                                            <a
                                                href={job.apply}
                                                className="text-orange-600 underline hover:text-orange-800"
                                            >
                                                Apply
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 text-right">Page 1 of 1</div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
