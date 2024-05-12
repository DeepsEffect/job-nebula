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
        </div>
      </div>
      <section className="hidden lg:flex">
        <div className="absolute lg:-top-5 lg:-right-3">
          <IconButton className="rounded-full">edit</IconButton>
        </div>
        <div className="absolute lg:top-10 lg:-right-3">
          <IconButton className="rounded-full">D</IconButton>
        </div>
      </section>
    </div>
  );
};

export default MyJobCard;
