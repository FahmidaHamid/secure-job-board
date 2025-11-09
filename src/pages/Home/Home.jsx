import React from "react";
import myBackgroundImage from "../../assets/marten-bjork-6dW3xyQvcYE-unsplash.jpg";
import { LoremPicsum } from "react-lorem-picsum";
import MySlider from "../MySlider/MySlider";
import IntroduceOurselves from "../../components/IntroduceOurselves/IntroduceOurselves";
import transparentLogo from "../../assets/transparent-logo.png";
const Home = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full flex flex-1 p-10 flex-wrap justify-center items-center">
        <section className="w-1/2">
          <img src={transparentLogo} alt="" />
        </section>
        <section
          style={{
            backgroundImage: `url(${myBackgroundImage})`,
            backgroundSize: "cover", // Optional: adjust as needed
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Optional: adjust as needed
            height: "50vh", // Example: set a height for the div
            width: "w-screen", // Example: set a width for the div
          }}
          className=" w-1/2 flex flex-col justify-center items-center"
        >
          <h1 className="title-text sm:text-3xl md:text-6xl font-bold">
            Why wait? Join ASAP!
          </h1>
          {/* <h2 className="subtitle-text sm:text-lg md:text-3xl font-bold">
            Your Truested Place To Unlock the Next Career Jump
          </h2> */}
          <section className="flex flex-col justify-center items-center gap-2 m-2">
            <button className="btn btn-success">Login</button>
            <button className="btn btn-warning">Register Yourself</button>
          </section>
        </section>
      </div>
      <IntroduceOurselves />
      <MySlider></MySlider>
    </div>
  );
};

export default Home;
