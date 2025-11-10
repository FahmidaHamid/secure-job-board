import React from "react";
import myBackgroundImage from "../../assets/marten-bjork-6dW3xyQvcYE-unsplash.jpg";
import { LoremPicsum } from "react-lorem-picsum";
import MySlider from "../MySlider/MySlider";
import IntroduceOurselves from "../../components/IntroduceOurselves/IntroduceOurselves";
import transparentLogo from "../../assets/transparent-logo.png";
import ShinyText from "../../components/ShinyText/ShinyText";
import PixelTransition from "../../components/PixelTransition/PixelTransition";

const Home = () => {
  return (
    <div className="w-screen flex flex-col flex-1">
      <div className="w-full flex flex-1 flex-wrap justify-center items-center">
        <section className="w-1/2">
          <PixelTransition
            firstContent={
              <img
                src={transparentLogo}
                alt="default pixel logo!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "#ffffff",
                  }}
                >
                  Bridge Your Career with Us!
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </section>
        <section
          style={{
            backgroundImage: `url(${myBackgroundImage})`,
            backgroundSize: "cover", // Optional: adjust as needed
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Optional: adjust as needed
            height: "94vh", // Example: set a height for the div
            width: "w-screen", // Example: set a width for the div
          }}
          className=" w-1/2 flex flex-col justify-center items-center"
        >
          <h1 className="title-text sm:text-3xl md:text-6xl font-bold">
            <ShinyText
              text="Why wait? Join ASAP!"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>

          <section className="flex flex-col justify-center items-center gap-2 m-2">
            <button className="btn btn-success">Login</button>
            <button className="btn btn-warning">Register Yourself</button>
          </section>
        </section>
      </div>
      <IntroduceOurselves></IntroduceOurselves>
      <MySlider></MySlider>
    </div>
  );
};

export default Home;
