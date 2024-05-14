import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const DreamJobBanner = () => {
  return (
    <div className="lg:mt-24">
      <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:px-24 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5 ">
              <h2 className="mb-6 max-w-lg text-5xl font-heading font-light leading-snug tracking-tight text-primary dark:text-text sm:text-8xl">
                Find Your <br />
                <span className="my-1 inline-block border-b-8 border-secondary font-bold text-secondary">
                  Dream Job
                </span>
                Now
              </h2>
              <p className="text-base text-gray-700 dark:text-text">
                Discover the path to your ideal career with our comprehensive
                job search platform. Find your dream job today and step into a
                brighter future.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <Link to={"/allJobs"}>
                <Button
                  size="lg"
                  className="text-sm tracking-wider text-white uppercase duration-300 transform bg-secondary lg:rounded-lg lg:w-auto hover:-translate-y-1 transition ease-in-out focus:outline-none hover:shadow-secondary hover:shadow-2xl mr-4"
                >
                  Apply Now
                </Button>
              </Link>
              <ScrollLink
                to="scrollToHowItWorks"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="underline-offset-2 inline-flex items-center font-semibold text-primary dark:text-text underline transition-colors duration-200 hover:underline hover:text-secondary cursor-pointer"
              >
                See how it works
              </ScrollLink>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-10 -top-20 h-28 w-28 rounded-xl bg-white dark:bg-background text-primary dark:text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-white dark:bg-background text-primary dark:text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <img
                className="-mb-20"
                src="https://plus.unsplash.com/premium_photo-1661255448611-dc6d2c837ec7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJobBanner;
