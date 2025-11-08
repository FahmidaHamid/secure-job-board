import React, { use } from "react";
import { Link } from "react-router";

const LeftSidePanel = ({ categoryPromise }) => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div className="sticky top-0 z-1 min-w-[15vw] m-2 mt-10 ml-3 flex flex-col">
      <ul></ul>
      {categories.map((category) => (
        <li
          type="button"
          class="text-black sm:text-xs md:text-md bg-gradient-to-r from-cyan-400 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link>{category.super_category}</Link>
        </li>
      ))}
    </div>
  );
};

export default LeftSidePanel;
