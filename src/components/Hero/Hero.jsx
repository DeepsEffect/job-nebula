/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Hero = ({ title, description, imageUrl }) => {
  return (
    <header className="bg-primary dark:bg-primary lg:px-24">
      <div className="lg:px-24 py-6 lg:py-16 mx-auto">
        <div className="items-center lg:flex ">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-white dark:text-white lg:text-4xl font-heading">
                {title}
              </h1>

              <p className="mt-3 text-white dark:text-gray-400 text-base">
                {description}
              </p>

              <Link to={"/allJobs"}>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-secondary lg:rounded-lg lg:w-auto hover:-translate-y-1 hover:transition hover:ease-in-out focus:outline-none">
                  Find Now
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 ">
            <img src={imageUrl} alt="slider image" className="h-[300px] lg:h-[600px] box-border object-cover"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
