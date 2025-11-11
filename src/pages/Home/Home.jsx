import React from "react";
//import myBackgroundImage from "../../assets/marten-bjork-6dW3xyQvcYE-unsplash.jpg";
import { LoremPicsum } from "react-lorem-picsum";
import MySlider from "../MySlider/MySlider";
import IntroduceOurselves from "../../components/IntroduceOurselves/IntroduceOurselves";
import transparentLogo from "../../assets/transparent-logo.png";
//import ShinyText from "../../components/ShinyText/ShinyText";
import PixelTransition from "../../components/PixelTransition/PixelTransition";
import LoginAndSignup from "../../components/LoginAndSignup/LoginAndSignup";

const Home = () => {
  return (
    <div className="w-screen flex flex-col flex-1">
      <div className="w-screen flex flex-1 sm:flex-col md:flex-row flex-wrap justify-center items-center">
        <section className="sm:w-screen md:w-1/2 ">
          <PixelTransition
            firstContent={
              <img
                src={transparentLogo}
                alt="default pixel logo!"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "scale-down",
                }}
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
                    fontWeight: 600,
                    fontSize: "2.1rem",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Bridge Your Career Gaps with Us Today! <br />
                  There is no-one to stop you! <br />
                </p>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  You can search and apply for as many positions as you like!{" "}
                  <br />
                  At the same time you can post opportunitis so others can
                  benefit.
                </p>
              </div>
            }
            gridSize={32}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.5}
            className="custom-pixel-card"
          />
        </section>
        <section className="sm:w-screen md:w-1/2">
          <LoginAndSignup></LoginAndSignup>
        </section>
      </div>
      <div className="w-screen flex flex-col flex-1">
        <IntroduceOurselves></IntroduceOurselves>
      </div>
      <div className="w-screen flex flex-col flex-1">
        <MySlider></MySlider>
      </div>
    </div>
  );
};

export default Home;
