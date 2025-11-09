import React from "react";
import isEqual from "react-fast-compare";
import CategoryButtons from "./CategoryButtons";

const Categories = ({ categories, selectedCat, setSelectedCat }) => {
  const handleCategorySelection = (cat_item) => {
    if (cat_item !== null) setSelectedCat(cat_item);
  };

  return (
    <>
      <div className="sticky top-20 m-10 flex flex-col space-x-1 space-y-1">
        {categories.map((cat_item) => (
          //<CategoryButtons categoryTitle={cat_item.super_category} />
          <button
            key={cat_item._id}
            onClick={() => handleCategorySelection(cat_item)}
            className={`btn btn-soft btn-secondary w-[240px] ${
              isEqual(selectedCat, cat_item) ? "active" : ""
            } `}
          >
            <p className="text-blue-600">{cat_item.super_category}</p>
          </button>
        ))}
        <button
          key={categories.length + 1}
          onClick={() => handleCategorySelection("")}
          className={`btn btn-soft btn-secondary bg-blue-200 w-[240px] ${
            selectedCat === null ? "active" : ""
          }`}
        >
          <p className="text-blue-600">Show All of Them</p>
        </button>
      </div>
    </>
  );
};

export default Categories;
