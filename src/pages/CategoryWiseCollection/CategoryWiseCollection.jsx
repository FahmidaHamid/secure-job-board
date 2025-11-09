import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import JobCard from "../../components/JobCard/JobCard";

const CategoryWiseCollection = ({ cat, data }) => {
  // console.log("category: ", cat);
  // console.log("category data: ", data);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    if (cat === "") setFilteredData([...data]);
    else {
      const temp = data.filter((d) => d.subCategory === cat);
      setFilteredData([...temp]);
    }
    setPage(1);
  }, [cat, data]);
  //console.log(filteredData);
  let lastPageIndex = page * postsPerPage;
  let firstPageIndex = lastPageIndex - postsPerPage;
  let currentPoll = filteredData.slice(firstPageIndex, lastPageIndex);

  return (
    <div className="w-full grid grid-cols-2 gap-3">
      {currentPoll.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
      <div>
        <Pagination
          totalPages={filteredData.length}
          postsPerPage={postsPerPage}
          setCurrenPage={setPage}
          currentPage={page}
        ></Pagination>
      </div>
    </div>
  );
};

export default CategoryWiseCollection;
