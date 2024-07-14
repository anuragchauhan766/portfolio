import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/3dPinContainer";
import { projects } from "@/data/projects";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My <span className="text-purple">Projects</span>
      </h1>
      <div className="mt-10 grid grid-cols-1 place-items-center gap-16 p-4 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            className="flex h-[30rem] w-[80vw] items-center justify-center sm:h-[25rem] sm:w-96 lg:min-h-[30rem]"
            key={project.id}
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative mb-10 flex aspect-video w-[80vw] items-center justify-center overflow-hidden sm:w-96">
                <Image
                  src={project.imageSrc}
                  alt="cover"
                  fill
                  className="rounded-3xl"
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {project.name}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light text-gray-400 lg:text-lg lg:font-normal"
                style={{
                  margin: "1vh 0",
                }}
              >
                {project.description}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {project.skillsUsed.map((Icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Icon className="fill-white p-2 text-white" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
