import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import MyProjects from "../MyProjects/MyProjects";

const Home = () => {
  return (
    <div>
      <Banner />
      <MyProjects />
      <Contact/>
    </div>
  );
};

export default Home;
