//import React, { useEffect, useState } from "react";
//import { useParams } from "react-router";

import { Link, useLocation } from "react-router";
import { useAuth } from "../../provider/AuthProvider";

const JobDetails = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const { job } = location.state || {};

  return (
    <div className="p-10 m-auto">
      <div className="mt-20 grid grid-cols-2">
        <img
          className="w-1/2 h-[350px] object-cover mx-auto"
          src={
            job.coverImage
              ? job.coverImage
              : "https://i.postimg.cc/23pKdgQk/dummy_category.jpg"
          }
          alt=""
        />
        <div className="w-1/2 flex flex-col gap-2 text-black">
          <h2 className="text-2xl">
            <strong>Title: </strong>
            {job.title}
          </h2>
          <h3 className="text-md">
            <strong>Category: </strong>
            {job.category}
          </h3>
          <p>
            <strong>Brief Description:</strong> {job.summary}
          </p>
          <p>
            <strong>Seller:</strong> {job.postedBy}
          </p>
          <p>
            <strong>Expected Salary: $</strong>
            {job.expectedSalary}
          </p>
          <p>
            <strong>Last date to Apply: </strong>
            {job.lastDayToApply}
          </p>
          <p>
            <strong>Remote? </strong>
            {job["remote/not"] === "Remote" ? "yes" : "no"}
          </p>
          <button className="btn btn-primary">
            <Link to="/all-jobs">Back to Collections</Link>
          </button>
          <button
            disabled={!currentUser}
            className="btn btn-primary disabled:cursor-not-allowed"
          >
            <Link to="/">Apply for this job</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
