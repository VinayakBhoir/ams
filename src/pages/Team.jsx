import React from "react";
import profile from "../assets/images/profile.jpg";
import sampleImage1 from "../assets/images/sample-2.jpeg";
// import sampleImage1 from "../assets/images/sample-1.jpeg";

const teamData = {
  intro: {
    heading: "The Team",
    description:
      "A varied and multifaceted team comprising engineers, architects, and professionals from a spectrum of other disciplines.",
    image: sampleImage1,
  },
  founder: {
    name: "Mr. John Doe",
    title: "Founder & Managing Director",
    description: `With over two decades of experience in construction and infrastructure, John has led the company's transformation from a small chemical supplier to a nationwide solution provider.\n\nPassionate about innovation and sustainability, he has been instrumental in delivering high-quality, scientifically formulated construction chemical products across various sectors.`,
    image: profile,
  },
  managementTeam: [
    {
      name: "Jane Smith",
      role: "Head of Operations",
      image: sampleImage1,
    },
    {
      name: "David Lee",
      role: "Business Development",
      image: sampleImage1,
    },
    {
      name: "Emily Brown",
      role: "Product Innovation",
      description:
        "Emily leads our innovation lab, driving new material development with cutting-edge chemistry and practical application testing.",
      image: sampleImage1,
    },
    {
      name: "Michael Patel",
      role: "Architectural Advisor",
      description:
        "Michael brings a creative edge to our structural solutions with his deep experience in architectural design and urban planning.",
      image: sampleImage1,
    },
  ],
  leadershipTeam: [
    {
      name: "Sarah Thomas",
      title: "VP | Engineering & R&D",
      image: sampleImage1,
    },
    {
      name: "Ravi Nair",
      title: "VP | Strategy & Compliance",
      image: sampleImage1,
    },
  ],
};

const Team = () => {
  return (
    <div className="bg-light text-dark">
      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2 font-heading">
            <span className="italic">{teamData.intro.heading.split(" ")[0]}</span>{" "}
            {teamData.intro.heading.split(" ").slice(1).join(" ")}
          </h2>
          <hr className="border-t border-gray-400 mb-6" />
        </div>
        <p className="text-lg text-dark/70 mb-8 leading-relaxed max-w-3xl">{teamData.intro.description}</p>
        <img
          src={teamData.intro.image}
          alt="Team"
          className="w-full h-[400px] object-cover rounded-xl shadow-xl"
        />
      </section>

      {/* Founder Section */}
      <section className="bg-primary text-white py-20 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <img
            src={teamData.founder.image}
            alt={teamData.founder.name}
            className="rounded-xl shadow-xl w-[356px] h-[485px] object-cover"
          />

          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-heading italic mb-2">{teamData.founder.name}</h3>
            <p className="text-lg italic mb-4">{teamData.founder.title}</p>
            <p className="whitespace-pre-line text-base leading-relaxed mb-6">{teamData.founder.description}</p>
            <button className="bg-white text-primary px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition">
              Know more
            </button>
          </div>
        </div>
      </section>


      {/* Management Team */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-heading text-dark mb-12">Management Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {teamData.managementTeam.map((member, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-primary text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-dark text-base mb-1">{member.role}</p>
                {member.description && (
                  <p className="text-sm text-dark/70 italic">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Leadership Team */}
      {/* <section className="bg-white py-20 px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-heading text-primary mb-12">Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {teamData.leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col bg-light rounded-xl shadow-md overflow-hidden">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-primary text-2xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-dark text-base">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Team;
