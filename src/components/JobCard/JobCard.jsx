import React from "react";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="flex-grow flex-shrink-0 basis-full sm:basis-1/3">
      <div className="card card-side bg-base-100 shadow-lg">
        <figure className="object-scale-down">
          <img src={job.coverImage} alt="Movie" width="240px" height="240px" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.title}</h2>
          <p>{job.category}</p>
          <p>{job.expectedSalary}</p>
          <p>{job["remote/not"]}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
