import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import CategoryWiseCollection from "../CategoryWiseCollection/CategoryWiseCollection";

const AllJobs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null); //initially

  useEffect(() => {
    try {
      fetch("http://localhost:3000/all-categories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
        <CategoryWiseCollection cat={selectedCat}></CategoryWiseCollection>
      </main>
    </div>
  );
};

export default AllJobs;
