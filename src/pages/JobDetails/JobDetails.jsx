import { Button } from "@material-tailwind/react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  return (
    <section className="bg-white dark:bg-gray-900">
      <ScrollRestoration></ScrollRestoration>
      <div className="bg-primary min-h-[400px] text-center text-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Job Details for: {jobs.jobTitle}</h2>
        <p>
          See the details view of this job, hit Apply button if it suits your
          style.
        </p>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={jobs.bannerImg}
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-lg font-bold text-accent uppercase">
              <Button
                variant="outlined"
                size="sm"
                className="rounded-full border-secondary"
              >
                {jobs.jobCategory}
              </Button>
            </p>

            <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
              {jobs.jobTitle}
            </h2>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {jobs.jobDescription}
            </p>

            {/* <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a> */}
            <div className="mt-2 lg:font-medium">
              Salary:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {`${jobs.salaryRange.minSalary}-${jobs.salaryRange.maxSalary}`}
              </span>
            </div>
            <section className="space-y-2 mt-2 lg:font-medium ">
              <div>
                Posting Date:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {new Date(jobs.postingDate).toLocaleDateString()}
                </span>
              </div>
              <div>
                Application Deadline:
                <span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-red-900">
                  {new Date(jobs.applicationDeadline).toLocaleDateString()}
                </span>
              </div>
            </section>
            <div className="mt-2 lg:font-medium mb-4">
              Applicants Number:
              <span className="ml-2 mr-3 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900">
                {0}
              </span>
            </div>
            <Link>
              <Button className="bg-primary hover:bg-secondary">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
