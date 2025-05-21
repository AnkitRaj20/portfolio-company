import React from "react";
// import { useNavigate } from "react-router-dom";  // Importing React Router's useNavigate
import Card from "./shared/Cards";
import { Button } from "./ui/moving-border";
import { projects } from "@/constants/projects";

const FeaturedProjects = () => {
  const filteredProjects = projects.filter((p) => p.isFeatured);

  return (
    <div className="bg-white dark:bg-black py-5">
      <div className="text-center mt-3">
       
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center py-8">
          Projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 text-center">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            //    onClick={() => detailsPage(project.id)}
          >
            <Card
              id={project.id}
              name={project.name}
              description={project.description}
              languagesUsed={project.languagesUsed}
              github={project.github}
              url={project.url}
              image={project.image}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-8">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 max-w-lg text-center mx-auto"
          //   onClick={() => navigate("/projects")}
        >
          Show All Projects
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
