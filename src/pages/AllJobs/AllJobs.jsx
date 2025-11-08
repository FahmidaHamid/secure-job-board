import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard/JobCard";

const AllJobs = () => {
  const alljobs = useLoaderData();
  console.log(alljobs);
  return (
    <div className="m-8 mx-auto  flex flex-col justify-items items-center">
      {/* <h1 className="m-2 p-2">All Jobs: {alljobs.length}</h1> */}
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alljobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
