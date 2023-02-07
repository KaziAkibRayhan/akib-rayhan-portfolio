import React from "react";

const About = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold text-violet-500">
                About Me
              </h3>
              <span className="text-sm font-bold tracking-wider dark:text-gray-400">
                Experience is the name everyone gives to their mistakes.
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  My Intro
                </h3>
                <p className="mt-3">
                  Hey, This is Akib Rayhan, I am 23 years old.I live in Dhaka in
                  Bangladesh. I completed my 4 years diploma course in computer
                  science & engineering from Comilla Polytechnic Institute in
                  2021. I am currently learning web development. I am a
                  front-end web developer. I have worked on many of my projects.
                  Every project is different and works front-end, back-end, and
                  design done by me. I request you to see my projects.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  My Passion
                </h3>
                <p className="mt-3">
                  I am a freedom-loving person. I enjoy web development work.
                  The only difference between me and those who upgrade the world
                  is a skill. I work to improve myself daily. I have a dream of
                  giving something new to the world one day!
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  My Web Development Knowledge
                </h3>
                <p className="mt-3">
                  I am an expert with HTML, CSS, JavaScript, Bootstrap,
                  React.js, React Bootstrap, Tailwind CSS, DaisyUI, Node JS
                  Express.js, Firebase Authentication, and MongoDB and I used
                  many tools (Github, Netlify, Vercel, Figma, React Icons, React
                  Router Dom, React Hot Toast, Tanstack Query, React Photo View,
                  React Hook Form, Context API, etc). I consider myself a
                  self-motivated, responsible, and disciplined person. I am
                  always ready to face any problem and try my best to solve it
                  with my analogical knowledge and new technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
