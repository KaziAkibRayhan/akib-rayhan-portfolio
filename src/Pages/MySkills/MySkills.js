import React from "react";

const MySkills = () => {
  return (
    <div data-aos="zoom-in" className="my-10 p-8">
      <h3 className="text-3xl py-10 font-bold text-violet-500 text-center">
        My Skills
      </h3>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2">
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>HTML</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 85 }}
          >
            85%
          </div>
          <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>React JS</p>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 85 }}
          >
            85%
          </div>
          <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 80 }}
          >
            80%
          </div>
          <p>Node JS</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 80 }}
          >
            80%
          </div>
          <p>Express JS</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 80 }}
          >
            80%
          </div>
          <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>JWT</p>
          </div>
          <div className="flex flex-col items-center">
          <div
            className="mb-3 radial-progress bg-accent text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <p>Node Mailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
