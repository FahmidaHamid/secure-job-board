import React, { useEffect, useState } from "react";
import ShinyText from "../ShinyText/ShinyText";
import TiltedCard from "./TiltedCard";

const IntroduceOurselves = () => {
  const [topThreeJobs, setTopThreeJobs] = useState([]);
  useEffect(() => {
    try {
      fetch(`http://localhost:3000/top-jobs`)
        .then((res) => res.json())
        .then((data) => {
          setTopThreeJobs(data);
          console.log(topThreeJobs);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-9/12 m-10 p-3 mx-auto flex flex-col flex-1">
      <h1 className="text-4xl subtitle-text">
        <ShinyText
          text="We have job advertisements of all sorts, all ranges, all experties"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </h1>
      <div className=" mt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
        {topThreeJobs.map((job) => (
          <TiltedCard
            imageSrc={
              job.coverImage
                ? job.coverImage
                : "https://i.postimg.cc/23pKdgQk/dummy-category.jpg"
            }
            altText="Job Cover"
            captionText={job.title}
            containerHeight="280px"
            containerWidth="380px"
            imageHeight="280px"
            imageWidth="380px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p
                className="text-3xl font-bold text-cyan-700 mt-20 ml-3 p-2"
                style={{
                  textShadow:
                    "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
                }}
              >
                {job.category + " $" + job.expectedSalary}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default IntroduceOurselves;
