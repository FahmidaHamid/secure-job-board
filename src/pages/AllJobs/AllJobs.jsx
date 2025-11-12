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
    <div className="w-screen mt-5 grid sm:grid-cols-1 md:grid-cols-3">
      <div className="w-1/5 col-span-1 flex-1">
        <Categories
          categories={categories}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        ></Categories>
      </div>
      <div className="w-4/5 col-span-2 flex-1">
        <CategoryWiseCollection cat={selectedCat}></CategoryWiseCollection>
      </div>
    </div>
  );
};

export default AllJobs;
