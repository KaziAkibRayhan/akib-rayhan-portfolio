import React from "react";
import { Link, useParams } from "react-router-dom";
import projectImage1 from "../../../images/screenshot-monikas-therapy-auth.web.app-2023.02.07-21_38_34.png";
import projectImage2 from "../../../images/screenshot-new-network-resale.web.app-2023.02.07-21_41_11.png";
import projectImage3 from "../../../images/screenshot-the-school-web.web.app-2023.02.07-21_42_05.png";

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
    },
    {
      id: 2,
      name: "New Network Resale",
      title: "This is a used laptop buy and sell website.",
      projectImage: projectImage2,
    },
    {
      id: 3,
      name: "The School Web",
      title: "This website is a IT course buying website.",
      projectImage: projectImage3,
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
              <Link to={project.liveSite} className="text-blue-500 font-bold btn btn-outline rounded-full" target={'_blank'}>Live Site</Link>|
              <Link to={project.clientCode} className="text-blue-500 font-bold btn btn-outline rounded-full" target={'_blank'}>Client Side Code</Link>|
              <Link to={project.serverCode} className="text-blue-500 font-bold btn btn-outline rounded-full" target={'_blank'}>Server Side Code</Link>
            </div>
          </div>
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    Project Features
                  </h3>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-500 dark:text-gray-100">
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
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Cibo augue offendit has ad
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          An per velit appellantur, ut utinam minimum nominavi
                          sit, odio nostro habemus ne nec. Ne sonet regione
                          contentiones est.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-500 dark:text-gray-100">
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
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          At eum ferri luptatum lobortis
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Te per quidam maiorum ocurreret, etiam delicatissimi
                          usu ad. Ne has quod periculis. Te sit primis iisque
                          efficiantur.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-500 dark:text-gray-100">
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
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Dicunt verterem evertitur eu sea
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Audire principes rationibus eam an, autem nominavi
                          luptatum per te. Sumo fabulas vim eu, sonet saperet
                          eleifend ut vix.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src={project.projectImage}
                    alt=""
                    className="mx-auto rounded-lg h-[500px] w-1/2 shadow-lg dark:bg-gray-500"
                  />
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
