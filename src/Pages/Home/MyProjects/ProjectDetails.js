import React from "react";
import { Link, useParams } from "react-router-dom";
import projectImage1 from "../../../images/screenshot-monikas-therapy-auth.web.app-2023.02.07-21_38_34.png";
import projectImage2 from "../../../images/screenshot-new-network-resale.web.app-2023.02.07-21_41_11.png";
import projectImage3 from "../../../images/screenshot-the-school-web.web.app-2023.02.07-21_42_05.png";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectDetails = () => {
  const router = useParams();
  const detailsId = parseInt(router.id);
  console.log(detailsId);

  const projects = [
    {
      id: 1,
      name: "Monika's Therapy",
      title: "This website is a service review website.",
      projectImage: projectImage1,
      liveSite: "https://monikas-therapy-auth.web.app/",
      clientCode: "https://github.com/KaziAkibRayhan/monika-s-therapy-client",
      serverCode: "https://github.com/KaziAkibRayhan/monika-s-therapy-server",
      feature:
        "Technology I Used To Make This Website : React JS | React Router Dom | Firebase Authentication | Express JS | Tailwind CSS | MongoDB.",
      feature1:
        "This is a single page web application. It works for a therapist for service review.",
      feature2:
        "The patient can visit this site and know the therapist review. And he/she can give a review.",
      feature3:
        "It makes a firebase auth, sign in, sign up, private route, and so on...",
    },
    {
      id: 2,
      name: "New Network Resale",
      title: "This is a used laptop buy and sell website.",
      projectImage: projectImage2,
      liveSite: "https://new-network-resale.web.app/",
      clientCode: "https://github.com/KaziAkibRayhan/new-network-resale-client",
      serverCode: "https://github.com/KaziAkibRayhan/new-network-resale-server",
      feature:
        "Technology I Used To Make This Website : React JS | React Router Dom | Firebase Authentication | Express JS | Tailwind CSS | MongoDB.",
      feature1:
        "This is a single page web application. It works for a used laptop buy and resale.",
      feature2:
        "This web site three functionality, One is admin, Two is Seller, Three is Buyer. Seller can post and Admin can delete user.",
      feature3:
        "Use Mongodb and create api user, seller, buyer, route. Admin can delete Buyer and Seller.",
    },
    {
      id: 3,
      name: "The School Web",
      title: "This website is a IT course buying website.",
      projectImage: projectImage3,
      liveSite: "https://the-school-web.web.app/",
      clientCode: "https://github.com/KaziAkibRayhan/the-school-web-client",
      serverCode: "https://github.com/KaziAkibRayhan/the-school-web-server",
      feature:
        "Technology I Used To Make This Website : React JS | React Router Dom | Firebase Authentication | Bootstrap.",
      feature1:
        "This is simple web course site. When the visitor come this web site, they seen top header and middle right side course ",
      feature2:
        "The visitor clicked course details button they go course details page. They all so download there course details.",
      feature3:
        "All so added authentication system login and registration. Like Google , github, email-password",
    },
  ];

  const filtered = projects.filter((pj) => pj.id === detailsId);
  console.log(filtered);

  return (
    <section>
      {filtered.map((project) => (
        <div key={project.id} className="dark:bg-gray-800 dark:text-gray-100">
          <div className="text-center py-5">
            <h3 className="text-3xl font-bold">
              Name Of Website:
              <span className="text-pink-400">{project.name}</span>
            </h3>
            <div className="mt-5">
              <Link
                to={project.liveSite}
                className="text-blue-500 font-bold btn btn-outline rounded-full"
                target={"_blank"}
              >
                Live Site
              </Link>
              |
              <Link
                to={project.clientCode}
                className="text-blue-500 font-bold btn btn-outline rounded-full"
                target={"_blank"}
              >
                Client Side Code
              </Link>
              |
              <Link
                to={project.serverCode}
                className="text-blue-500 font-bold btn btn-outline rounded-full"
                target={"_blank"}
              >
                Server Side Code
              </Link>
            </div>
          </div>
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    Project <span className="text-pink-500">Features</span>
                  </h3>
                  <p className="my-4">{project.feature}</p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-pink-500 dark:text-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="dark:text-gray-400">{project.feature1}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-pink-500 dark:text-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="dark:text-gray-400">{project.feature2}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-pink-500 dark:text-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="dark:text-gray-400">{project.feature3}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <PhotoProvider>
                    <div className="foo">
                      <PhotoView src={project.projectImage}>
                        <img
                          className="mx-auto cursor-pointer rounded-lg h-[500px] w-1/2 shadow-lg dark:bg-gray-500"
                          src={project.projectImage}
                          alt=""
                        />
                      </PhotoView>
                    </div>
                  </PhotoProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectDetails;
