/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Hero = ({ title, description, imageUrl }) => {
  return (
    <header className="bg-white dark:bg-gray-900 ">
      <div className="lg:px-24 py-6 lg:py-16 mx-auto">
        <div className="items-center lg:flex ">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                {title}
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {description}
              </p>

              <Link to={"/addAJob"}>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-secondary focus:outline-none focus:bg-primary">
                  Post Now
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
