import React from "react";
import ProjectCard from "./ProjectCard";
import authorImage from "../../../images/Akib Images.png";
import projectImage1 from "../../../images/About Me 2.742965362b443ef9dba7.jpg";
import projectImage2 from "../../../images/slider-3.455f0c0b9d9a589e5580.jpg";
import projectImage3 from "../../../images/banner-1.png";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Monika's Therapy",
      title: "This website is a service review website.",
      projectImage: projectImage1,
      authorImage: authorImage,
    },
    {
      id: 2,
      name: "New Network Resale",
      title: "This is a used laptop buy and sell website.",
      projectImage: projectImage2,
      authorImage: authorImage,
    },
    {
      id: 3,
      name: "The School Web",
      title: "This website is a IT course buying website.",
      projectImage: projectImage3,
      authorImage: authorImage,
    },
  ];
  return (
    <section className="my-10">
      <h3 className="text-3xl text-center py-3 text-violet-500 font-medium">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
