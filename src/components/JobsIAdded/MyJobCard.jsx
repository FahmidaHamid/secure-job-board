import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyJobCard = ({ job, addedJobs, setAddedJobs }) => {
  console.log(job);
  const instance = useAxiosSecure();
  const handleDeleteJob = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance
          .delete(`/all-jobs/${_id}`)
          // fetch(`https://career-bridge-server-fh-asgn10.vercel.app/all-jobs/${_id}`, {
          //   method: "DELETE",
          // })
          //   .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your posted job has been deleted.",
                icon: "success",
              });

              //
              const remainingJobs = addedJobs.filter((job) => job._id !== _id);
              setAddedJobs(remainingJobs);
            }
          });
      }
    });
  };
  return (
    <div className="flex basis-full sm:basis-1/3">
      <div className="card card-side bg-gradient-to-r from-green-200 to-blue-200 shadow-lg border-0 border-blue-100">
        <figure>
          <img
            src={
              job.coverImage
                ? job.coverImage
                : "https://i.postimg.cc/23pKdgQk/dummy-category.jpg"
            }
            alt="Movie"
            className="w-[220px] h-[220px]"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{job.title}</h3>
          <p>{job.category}</p>
          <p>${job.expectedSalary} per year</p>
          <p>{job["remote/not"]}</p>
          <div className="card-actions justify-end flex flex-col gap-2">
            <button className="btn btn-primary">Update the Job</button>

            <button
              className="btn btn-primary"
              onClick={() => handleDeleteJob(job._id)}
            >
              Delete the Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobCard;
