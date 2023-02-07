import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { authorImage, projectImage, title, name, id } = project;
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-14 h-14 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={authorImage}
        />
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {name}
      </h2>
      <div className="p-2">
        <img className="rounded-md" src={projectImage} alt="" />
      </div>
      <p className="mt-2 text-xl text-gray-600 dark:text-gray-200">{title}</p>

      <div className="flex items-center justify-between mt-4">
        <Link to={`/details/${id}`}>
          <button className="btn btn-info">See Details</button>
        </Link>
        <p className="text-sm text-blue-600 dark:text-blue-300">
          <small>Akib Rayhan</small>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
