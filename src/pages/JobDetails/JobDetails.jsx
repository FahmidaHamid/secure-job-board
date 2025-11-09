//import React, { useEffect, useState } from "react";
//import { useParams } from "react-router";

import { Link, useLocation } from "react-router";

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};

  return (
    <div className="m-10 mx-auto">
      <div className="grid grid-cols-2">
        <img
          className="w-1/2 h-[350px] object-cover mx-auto"
          src={job.coverImage}
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
          <Link
            className="btn btn-secondary btn-soft"
            // onClick={() => navigate("../collections")}
          >
            <strong>Back to Collections</strong>
          </Link>
          <button
            className="btn btn-accent btn-soft"
            // onClick={() => setShowMyModal(true)}
          >
            <strong>Leave a review</strong>
          </button>
          {/* {submittedValue && <p>Submitted Value: {submittedValue}</p>} */}
          {/* showMyModal &&{" "}
          <MyModal setSubmittedValue={setSubmittedValue}></MyModal> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
