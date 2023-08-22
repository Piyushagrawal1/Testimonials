import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data"

const App = () => {
  return (
    <div>
      <div className=" flex flex-col w-[100vw] h-[100vh] justify-center bg-gray-300 items-center overflow-x-hidden text-center ">
        <h1 className=" text-4xl font-bold ">Our Testimonials</h1>
        <div className=" bg-violet-400 h-1 w-44 mt-1 mx-auto"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
