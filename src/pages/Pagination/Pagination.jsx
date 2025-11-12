import React from "react";

const Pagination = ({
  totalPages,
  postsPerPage,
  setCurrenPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pages.push(i);
  }
  //console.log(pages);
  return (
    <div className="pagination flex gap-2 ">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`btn small-button ${page === currentPage ? "active" : ""}`}
          onClick={() => setCurrenPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
