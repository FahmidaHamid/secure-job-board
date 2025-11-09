import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard/JobCard";
import Categories from "../../components/Categories/Categories";
import CategoryWiseCollection from "../CategoryWiseCollection/CategoryWiseCollection";

const categoryPromise = fetch("http://localhost:3000/all-categories").then(
  (res) => res.json()
);

const AllJobs = () => {
  const alljobs = useLoaderData();
  const categories = use(categoryPromise);
  console.log(categories);
  const [selectedCat, setSelectedCat] = useState("");

  return (
    <>
      <aside>
        <Categories
          categories={categories}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        ></Categories>
      </aside>
      <main>
        <CategoryWiseCollection
          cat={selectedCat}
          data={alljobs}
        ></CategoryWiseCollection>
      </main>
      {/* <div className="m-8 mx-auto  flex flex-col justify-items items-center">
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alljobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default AllJobs;
