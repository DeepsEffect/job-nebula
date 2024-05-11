import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProver";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  // handler
  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.title.value;
    const bannerImg = form.image.value;
    const user = form.name.value;
    const email = form.email.value;
    const jobCategory = form.category.value;
    const minSalary = parseFloat(form.minSalary.value);
    const maxSalary = parseFloat(form.maxSalary.value);
    const salaryRange = { minSalary, maxSalary };
    const jobDescription = form.description.value;
    const postingDate = startDate;
    const applicationDeadline = endDate;
    const job = {
      jobTitle,
      bannerImg,
      user,
      email,
      jobCategory,
      salaryRange,
      jobDescription,
      postingDate,
      applicationDeadline,
    };
    // console.table(job);

    //send job data to the backend
    axios
      .post(`${import.meta.env.VITE_SERVER_API_URL}/jobs`, job)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Job posted successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code);
      });
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-primary min-h-[400px] text-center text-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Add A Job</h2>
        <p>Please fill the form below to post a job</p>
      </div>
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1615195627275-48660e9cd84f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Fill the form to post a job right away.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal profile
              and begin posting a job.
            </p>
            <div className="mt-6"></div>
            <form
              onSubmit={handlePostJob}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              {/* job title */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="what kind of job?"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* job banner */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Job Banner Image
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Https://bannerImage.jpg"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* username */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Username
                </label>
                <input
                  type="name"
                  name="name"
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder="logged in Username"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* email */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="logged in user email"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* Job category */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Job Category
                </label>
                <select
                  name="category"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="onSite">On Site</option>
                  <option value="remote">Remote</option>
                  <option value="partTime">Part-Time</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              {/* min/max salary section */}
              <section className="flex gap-2">
                {/* min salary */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Minimum Salary
                  </label>
                  <input
                    type="number"
                    name="minSalary"
                    placeholder="min salary"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {/* max salary */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Maximum Salary
                  </label>
                  <input
                    type="number"
                    name="maxSalary"
                    placeholder="max salary"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </section>

              {/* job description */}
              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-500 dark:text-gray-300">
                  Job Description
                </label>
                <textarea
                  name="description"
                  placeholder="describe your job..."
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-primary"
                ></textarea>
              </div>

              {/* posting date */}
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-300">
                  Posting Date
                </label>
                <DatePicker
                  readOnly
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-primary"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              {/* deadline */}
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-300">
                  Application Deadline
                </label>
                <DatePicker
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-primary"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
              {/* post job */}
              <button
                type="submit"
                className="flex items-center font-bold lg:col-span-2 justify-between w-full px-6 py-3 text-sm tracking-wide text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <span className=" mx-auto">Post Job</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
