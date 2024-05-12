import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyJobCard = ({ job }) => {
  return (
    <div className="m-5 relative border max-w-fit mx-auto">
      <div className="group mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <div className="order-2 col-span-1 mt-4 -ml-14 text-left sm:-order-1 sm:ml-4">
          <Link to={`/jobDetails/${job._id}`}>
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <img
                src={job?.bannerImg}
                alt={job.jobTitle}
                className="h-full w-full object-cover text-gray-700 box-border"
              />
            </div>
          </Link>
        </div>
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">{job?.jobCategory}</h3>
          <Link to={`/jobDetails/${job._id}`}>
            <div className="overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {job.jobTitle}
            </div>
          </Link>
          <p className="mb-3 overflow-hidden pr-7 text-sm font-base sm:text-sm">
            Posted By: {job?.user}
          </p>
          <p className="overflow-hidden pr-7 text-sm text-gray-500">
            {job.jobDescription.substring(0, 200)}...
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <section className="space-y-2">
              <div>
                Posting Date:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {new Date(job.postingDate).toLocaleDateString()}
                </span>
              </div>
              <div>
                Application Deadline:
                <span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-red-900">
                  {new Date(job.applicationDeadline).toLocaleDateString()}
                </span>
              </div>
            </section>
            <section className="space-y-2">
              <div>
                Salary:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  {`${job.salaryRange.minSalary}-${job.salaryRange.maxSalary}`}
                </span>
              </div>
              <div>
                Applicants Number:
                <span className="ml-2 mr-3 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900">
                  {0}
                </span>
              </div>
            </section>
          </div>
          <section className="flex mt-4 gap-4">
            <div className="lg:absolute lg:-top-5 lg:-right-3">
              <IconButton className="rounded-full bg-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="lg:absolute lg:top-10 lg:-right-3">
              <IconButton className="rounded-full bg-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </IconButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyJobCard;
