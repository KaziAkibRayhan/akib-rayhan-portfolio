import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
