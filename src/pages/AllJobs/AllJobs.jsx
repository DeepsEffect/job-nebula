import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //getting the data from DB
  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_API_URL}/jobs`).then((res) => {
      setJobs(res.data);
    });
  }, []);

  //search functionality
  const handleSearchJobs = (e) => {
    setSearchQuery(e.target.value);
  };

  //filter jobs by jobTitle
  const filteredJobs = jobs.filter((job) => {
    return job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const TABLE_HEAD = [
    "Job Title",
    "Job Posting Date",
    "Application Deadline",
    "Salary Range (min-max)",
    "View Details",
  ];

  console.log(jobs);
  return (
    <div>
      <div className="bg-primary min-h-[400px] text-center text-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Job Listing</h2>
        <p>Find all your desired job in one place</p>
        {/* search field */}
        <div className="relative mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            onChange={handleSearchJobs}
            value={searchQuery}
            type="text"
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-secondary dark:focus:border-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
            placeholder="Search Jobs"
          />
        </div>
      </div>
      <Card className="h-full w-full overflow-scroll lg:px-24 mt-10">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job.jobTitle}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {new Date(job.postingDate).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {`$${job.salaryRange.minSalary}-${job.salaryRange.maxSalary}`}
                  </Typography>
                </td>
                <td className="p-4">
                  <Link to={job._id}>
                    <Button
                      size="sm"
                      className="font-medium bg-primary hover:bg-secondary"
                    >
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AllJobs;
