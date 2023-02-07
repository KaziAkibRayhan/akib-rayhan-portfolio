import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/Akib Images.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h4 className="text-2xl py-3">Hey There 👋 I am</h4>
          <h1 className="text-5xl font-bold">Akib Rayhan</h1>
          <h3 className="text-3xl py-4 font-bold">
            I am{" "}
            <span style={{ color: "#0096FF", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  " a Frontend Developer",
                  " a Web Developer",
                  " a MERN Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="py-3">
            I am a web developer with an astonishing faculty to develop websites
            that are both functional and aesthetically gratifying. I have a
            vigorous understanding of web standards and best practices, and I am
            zealous about engendering websites that users will find facile to
            utilize and visually appealing.
          </p>
          <div>
            <Link to={"/contact"}>
              <button className="btn btn-outline btn-info mr-2 rounded-full">
                Contact Me
              </button>
            </Link>
            <Link to={"/"}>
              <button className="btn btn-outline btn-accent rounded-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
