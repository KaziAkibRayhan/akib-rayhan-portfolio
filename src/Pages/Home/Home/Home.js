import React from "react";
import Contact from "../../Contact/Contact";
import MySkills from "../../MySkills/MySkills";
import Banner from "../Banner/Banner";
import MyProjects from "../MyProjects/MyProjects";

const Home = () => {
  return (
    <div>
      <Banner />
      <MyProjects />
      <MySkills />
      <Contact />
    </div>
  );
};

export default Home;
