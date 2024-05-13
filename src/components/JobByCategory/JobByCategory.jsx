import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard/JobCard";
import { Link } from "react-router-dom";

const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_API_URL}/jobs`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="lg:mt-10">
      <div className="text-center ">
        <h2 className="text-xl lg:text-3xl font-bold ">
          Search your desired job by these categories
        </h2>
        <p className="text-base">
          go through these categories and find the perfect job that fits your
          needs
        </p>
      </div>
      {/* tabs*/}
      <div className="mx-auto lg:px-24 mt-6 lg:mt-14 font-medium ">
        <Tabs>
          <TabList>
            <Tab>
              <Button
                variant="text"
                size="lg"
                ripple={false}
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                All Jobs
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                ripple={false}
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                On-Site Job
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                ripple={false}
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                Remote Job
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                ripple={false}
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                Part-time
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                ripple={false}
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                Hybrid
              </Button>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {jobs.slice(0, 6).map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {jobs
                .filter((job) => job.jobCategory === "On-Site")
                .map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {jobs
                .filter((job) => job.jobCategory === "remote")
                .map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {jobs
                .filter((job) => job.jobCategory === "Part-Time")
                .map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {jobs
                .filter((job) => job.jobCategory === "hybrid")
                .map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* all jobs button */}
      <div>
        {jobs.length > 6 && (
          <Link to={"/allJobs"}>
            <Button
              size="sm"
              variant="outlined"
              className=" mx-auto flex items-center justify-center lg:mt-6 border-secondary text-secondary"
            >
              view all jobs
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default JobByCategory;
