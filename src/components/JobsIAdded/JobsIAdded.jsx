import React, { useEffect, useState } from "react";
import { useAuth } from "../../provider/AuthProvider";
import Loader from "../Loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyJobCard from "./MyJobCard";
import { Link } from "react-router";

const JobsIAdded = () => {
  const { currentUser, loading } = useAuth();
  const [addedJobs, setAddedJobs] = useState([]);
  const [error, setError] = useState(null);
  const instance = useAxiosSecure();

  useEffect(() => {
    console.log(currentUser);
    instance.get(`/jobs-added?email=${currentUser.email}`).then((data) => {
      console.log(data);
      setAddedJobs(data.data);
    });
  }, [currentUser, instance]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-20 flex flex-1 flex-col m-10 p-2">
      <h1 className="text-3xl">
        {currentUser.displayName}, you have added {addedJobs.length} jobs.
      </h1>
      <div className="flex flex-1 flex-row flex-wrap gap-3 m-5">
        {addedJobs.map((job) => (
          <MyJobCard
            key={job._id}
            job={job}
            addedJobs={addedJobs}
            setAddedJobs={setAddedJobs}
          />
        ))}
      </div>
      <div>
        <Link to="/add-a-job">
          <button className="btn btn-primary">Add Another Job</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsIAdded;
