import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_API_URL}/jobs`).then((res) => {
      setJobs(res.data);
    });
  }, []);

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
            {jobs.map((job) => (
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
