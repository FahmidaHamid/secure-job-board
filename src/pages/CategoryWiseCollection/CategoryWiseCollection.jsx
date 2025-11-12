import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import JobCard from "../../components/JobCard/JobCard";

const CategoryWiseCollection = ({ cat }) => {
  console.log("category: ", cat);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    if (!cat) {
      try {
        fetch(`http://localhost:3000/all-jobs`)
          .then((res) => res.json())
          .then((data) => {
            setFilteredData(data);

            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        fetch(`http://localhost:3000/jobs-by-cat/${cat._id}`)
          .then((res) => res.json())
          .then((data) => {
            setFilteredData(data);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    setPage(1);
  }, [cat]);
  //console.log(filteredData);
  let lastPageIndex = page * postsPerPage;
  let firstPageIndex = lastPageIndex - postsPerPage;
  let currentPoll = filteredData.slice(firstPageIndex, lastPageIndex);

  return (
    <div className=" mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-3">
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
