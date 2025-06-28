import { useState } from "react";
import projectsData from "../../assets/projects.json";
import { FaGlobe, FaGithub, FaCode } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-12 px-4">
      <div className="w-1/2 mx-auto">
        <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
        <h2>My Projects</h2>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md border border-primary/30 hover:shadow-2xl transition-all"
          >
            <figure>
              <img
                src={project.thumb_img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold text-primary space-grotesk-font">{project.title}</h3>
              <p className="text-sm text-secondary/80">{project.about}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-base-100"
                >
                  <FaGlobe className="mr-1" /> Live
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary"
                >
                  <FaGithub /> Client
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary"
                >
                  <FaGithub /> Server
                </a>
              </div>
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary btn-outline btn-accent"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
{selectedProject && (
  <dialog
    id="project_modal"
    className="modal modal-open"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="modal-box max-w-3xl"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="font-bold text-2xl mb-4 text-primary">
        {selectedProject.title}
      </h3>

      {/* Thumbnail Image */}
      <img
        src={selectedProject.thumb_img}
        alt={selectedProject.title}
        className="w-full h-110 object-cover rounded-xl mb-4 border border-base-300"
      />

      {/* About */}
      <p className="mb-4 text-sm text-secondary/80">{selectedProject.about}</p>

      {/* Description */}
      <p className="mb-4 text-secondary">{selectedProject.description}</p>

      {/* Challenges */}
      <p className="mb-4 text-secondary">
        <span className="font-semibold text-secondary">Challenges:</span>{" "}
        {selectedProject.challenges}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <span className="font-semibold">Technologies:</span>{" "}
        {selectedProject.technology.join(", ")}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 text-sm mb-4">
        <a
          href={selectedProject.live}
          className="btn btn-sm btn-primary"
          target="_blank"
        >
          <FaGlobe className="mr-2" /> Live
        </a>
        <a
          href={selectedProject.client}
          className="btn btn-sm btn-outline"
          target="_blank"
        >
          <FaCode className="mr-2" /> Client
        </a>
        <a
          href={selectedProject.server}
          className="btn btn-sm btn-outline"
          target="_blank"
        >
          <FaGithub className="mr-2" /> Server
        </a>
      </div>

      {/* Close Button */}
      <div className="modal-action">
        <button
          className="btn btn-error btn-outline"
          onClick={() => setSelectedProject(null)}
        >
          Close
        </button>
      </div>
    </div>
  </dialog>
)}

    </section>
  );
};

export default Projects;
