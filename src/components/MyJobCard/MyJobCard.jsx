import { Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProver";
import axios from "axios";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
Modal.setAppElement("#root");
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
const MyJobCard = ({ job, setMyJobs, myJobs }) => {
  // modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  //modal toggle
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  // handle update
  const handleUpdateJob = (e) => {
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
    const updateJob = {
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
    // send data to the backend
    axios
      .put(`${import.meta.env.VITE_SERVER_API_URL}/jobs/${job._id}`, updateJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          return toast.success("Job Updated Successfully");
        }
        toast("No modification has been made");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.code);
      });
  };

  //handle delete
  const handleDeleteJob = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_SERVER_API_URL}/jobs/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Job has been deleted.",
                icon: "success",
              });
            }
            const remaining = myJobs?.filter((j) => j._id !== _id);
            setMyJobs(remaining);
          })
          .catch((err) => {
            console.error(err);
            toast.error(err.code);
          });
      }
    });
  };

  return (
    <div className="m-5 relative border max-w-fit mx-auto">
      {/* modal */}
      <div className="relative z-10">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Button size="sm" color="red" onClick={closeModal}>
            close
          </Button>
          <form
            onSubmit={handleUpdateJob}
            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
          >
            {/* job title */}
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Job Title
              </label>
              <input
                defaultValue={job.jobTitle}
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
                defaultValue={job.bannerImg}
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
                defaultValue={job.jobCategory}
                name="category"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="On-Site">On-Site</option>
                <option value="remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
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
                  defaultValue={job.salaryRange.minSalary}
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
                  defaultValue={job.salaryRange.maxSalary}
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
                defaultValue={job.jobDescription}
                maxLength={400}
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
              <span className=" mx-auto">Update</span>
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
        </Modal>
      </div>
      {/* modal end */}
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
              <IconButton
                onClick={openModal}
                className="rounded-full bg-blue-400"
              >
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
              <IconButton
                onClick={() => handleDeleteJob(job._id)}
                className="rounded-full bg-red-400"
              >
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
