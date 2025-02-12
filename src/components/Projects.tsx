import Image from 'next/image';
import { PROJECTS } from '../utils/constants';
import { GithubIcon, ViewProjectIcon } from './icons';

type ProjectsProps = {
  projects: Array<string>;
};

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-x-7 gap-y-9">
      {projects.map(projectSlug => {
        const project = PROJECTS[projectSlug];
        return (
          <div className="space-y-4" key={projectSlug}>
            <a href={`/work/${projectSlug}`} className="block border">
              <Image
                src={`/assets/${project.image.small}`}
                alt={`image for project ${project.name}`}
                width={1830}
                height={910}
              />
            </a>
            <div className="space-y-2">
              <div className="flex-cb">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <div className="font-medium flex-c gap-x-2">
                  {project.codeLink && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.codeLink}
                      aria-label="View project on GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.viewLink && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.viewLink}
                      aria-label="View project"
                    >
                      <ViewProjectIcon />
                    </a>
                  )}
                </div>
              </div>
              <ul className="flex-c text-sm gap-x-[3px]">
                {project.skills.slice(0, 3).map(skill => {
                  return (
                    <li
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 rounded-full text-primary"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
