import React, { useEffect, useState } from "react";
import { useAuth } from "../../provider/AuthProvider";
import axios from "axios";
import Loader from "../Loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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

  /*
    {
      headers: {
        authorization: `Bearer ${currentUser.accessToken}`,
      },
    }
  */
  // useEffect(() => {
  //   fetch(`http://localhost:3000/jobs-added?email=${currentUser.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAddedJobs(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [currentUser]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/jobs-added?email=${currentUser.email}"
  //       ); // Replace with your actual API endpoint
  //       setAddedJobs(response.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  // ... rest of your component

  return (
    <div className="mt-20 flex flex-1 flex-col">
      <h1>So far, I have added {addedJobs.length}</h1>
    </div>
  );
};

export default JobsIAdded;
