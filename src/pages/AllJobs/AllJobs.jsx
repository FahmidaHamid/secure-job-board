import React, { use, useState } from "react";
//import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard/JobCard";
import Categories from "../../components/Categories/Categories";
import CategoryWiseCollection from "../CategoryWiseCollection/CategoryWiseCollection";

const categoryPromise = fetch("http://localhost:3000/all-categories").then(
  (res) => res.json()
);

const AllJobs = () => {
  //const alljobs = useLoaderData();
  const categories = use(categoryPromise);
  console.log(categories);
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <div className="flex flex-1 flex-wrap sm:flex-col md:flex-row lg:flex-row">
      <aside className="flex flex-col justify-center items-center m-2">
        <Categories
          categories={categories}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        ></Categories>
      </aside>
      <main className="m-8 sm:w-full md:w-3/4 flex flex-col justify-items items-center">
        <CategoryWiseCollection
          cat={selectedCat}
          //data={alljobs}
        ></CategoryWiseCollection>
      </main>
      {/* <div className="m-8 mx-auto  flex flex-col justify-items items-center">
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alljobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AllJobs;
