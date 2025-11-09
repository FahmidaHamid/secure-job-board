import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="flex-grow flex-shrink-0 basis-full sm:basis-1/3">
      <div className="card card-side bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 shadow-lg border-2 border-blue-100">
        <figure>
          <img
            src={job.coverImage}
            alt="Movie"
            className="w-[250px] h-[250px] mx-auto"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{job.title}</h3>
          <p>{job.category}</p>
          <p>${job.expectedSalary} per year</p>
          <p>{job["remote/not"]}</p>
          <div className="card-actions justify-end">
            <Link to={`/job-details/${job._id}`} state={{ job: job }}>
              <p className="btn btn-primary">Show Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
