import {
  Avatar,
  Button,
  Card,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProver";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const [jobCategory, setJobCategory] = useState("");
  //getting the data from DB
  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_API_URL}/applicants/${user.email}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user.email]);

  const TABLE_HEAD = [
    "Banner Image",
    "Job Title",
    "Job Posting Date",
    "Applied Date",
    "Salary Range (yearly)",
    "Status",
  ];

  // filter by job category
  const filteredJobs = jobCategory
    ? jobs.filter((job) => job.jobCategory === jobCategory)
    : jobs;
  return (
    <div>
      <div className="bg-primary min-h-[400px] text-center text-white flex flex-col justify-center items-center">
        <h2 className=" text-3xl lg:text-4xl font-bold font-heading">Applied Jobs</h2>
        <p>Find all the jobs you applied for in one place</p>
        <div className="w-72 mt-4">
          <Select
            variant="standard"
            label="Filter by job category"
            color="purple"
            className="text-white"
            value={jobCategory}
            onChange={(val) => setJobCategory(val)}
          >
            <Option value="">All</Option>
            <Option value="On-Site">On-SIte</Option>
            <Option value="Remote">Remote</Option>
            <Option value="Part-Time">Part-Time</Option>
            <Option value="Hybrid">Hybrid</Option>
          </Select>
        </div>
      </div>
      <Card className="h-full w-full overflow-scroll lg:overflow-hidden  mt-10">
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
            {filteredJobs?.map((job) => (
              <tr key={job._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Avatar
                    src={job.bannerImg}
                    alt={job.jobTitle}
                    variant="rounded"
                  />
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal "
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
                    {new Date(
                      job.applicantsInfo.appliedDate
                    ).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {`$${job.salaryRange.minSalary}-$${job.salaryRange.maxSalary}`}
                  </Typography>
                </td>
                <td className="p-4">
                  <Button
                    variant="outlined"
                    size="sm"
                    color="amber"
                    ripple={false}
                    className="font-medium rounded-full"
                  >
                    Pending...
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AppliedJobs;
