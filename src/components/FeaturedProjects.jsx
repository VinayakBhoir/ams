import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function FeaturedProjects() {
  return (
    <section className="bg-neutral-light py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-dark mb-14">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full h-64 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-40 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold italic text-dark mt-4">
                {project.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/projects"
            className="inline-block bg-dark text-white font-medium text-lg px-6 py-3 rounded-full shadow hover:bg-primary transition-colors duration-300"
          >
            Explore all our projects
          </Link>
        </div>
      </div>
    </section>
  );
}
