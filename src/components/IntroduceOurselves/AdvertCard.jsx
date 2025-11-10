import React from "react";
import "./AdvertCard";

const AdvertCard = ({ job }) => {
  console.log(job);
  return (
    <div class="relative flex flex-col my-6 bg-white border border-slate-200 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-300  rounded-xl w-96 shadow-2xl">
      <div class="relative h-[900] m-2.5 overflow-hidden text-white rounded-md">
        <figure>
          <img
            src={job.coverImage}
            alt="Movie"
            className="w-[360px] h-[300px] mx-auto rounded xl"
          />
        </figure>
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">{job.title}</h6>
          <p class="text-slate-600 leading-normal font-light">{job.category}</p>
          <p class="text-slate-600 leading-normal font-light">
            ${job.expectedSalary} per year
          </p>
          <p class="text-slate-600 leading-normal font-light">
            {job["remote/not"]}
          </p>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button
              class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
