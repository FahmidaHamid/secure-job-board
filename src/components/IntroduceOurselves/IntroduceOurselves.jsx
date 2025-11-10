import React, { useEffect, useState } from "react";
import AdvertCard from "./AdvertCard";
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
      <h1 className="text-4xl title-text">
        We have job advertisements of all sorts, all ranges, all experties
      </h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {topThreeJobs.map((job) => (
          <AdvertCard key={job._id} job={job}></AdvertCard>
        ))}
      </div>
    </div>
  );
};

export default IntroduceOurselves;
