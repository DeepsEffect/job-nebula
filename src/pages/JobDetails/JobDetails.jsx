import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import { AuthContext } from "../../providers/AuthProver";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80%",
    overflowY: "auto",
  },
};

const JobDetails = () => {
  const jobs = useLoaderData();
  const { user } = useContext(AuthContext);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //handle apply
  // const handleApplyJob = () => {};
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Button variant="outlined" size="sm" color="red" onClick={closeModal}>
          close
        </Button>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Username
              </label>
              <input
                defaultValue={user.displayName}
                readOnly
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                defaultValue={user.email}
                readOnly
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                CV link
              </label>
              <input
                type="url"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
      {/* modal end */}

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
            <Button
              onClick={openModal}
              type="button"
              className="bg-primary hover:bg-secondary"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
