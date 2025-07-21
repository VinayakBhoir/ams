import React from 'react';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <div className="bg-accent min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Completed & Ongoing Projects
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto font-light">
            A showcase of our collaborations with renowned developers across landmark projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image container to preserve size */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.logo}
                  alt={project.name}
                  title={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-colors duration-300">
                <div className="absolute bottom-0 w-full text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-semibold">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
