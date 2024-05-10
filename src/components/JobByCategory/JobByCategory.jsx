import { Button } from "@material-tailwind/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const JobByCategory = () => {
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
      <div className="mx-auto lg:px-24 mt-4 font-medium ">
        <Tabs>
          <TabList>
            <Tab>
              <Button
                variant="text"
                size="lg"
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                All Jobs
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                On-Site Job
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                Remote Job
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="text"
                size="lg"
                className="hover:bg-transparent active:bg-transparent border-none"
              >
                Part-time
              </Button>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>All Jobs</h2>
          </TabPanel>
          <TabPanel>
            <h2>on site</h2>
          </TabPanel>
          <TabPanel>
            <h2>Remote</h2>
          </TabPanel>
          <TabPanel>
            <h2>hybrid</h2>
          </TabPanel>
          <TabPanel>
            <h2>part time</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default JobByCategory;
