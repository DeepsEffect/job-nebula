import Banner from "../../components/Banner/Banner";
import DreamJobBanner from "../../components/DreamJobBanner/DreamJobBanner";
import Features from "../../components/Features/Features";
import JobByCategory from "../../components/JobByCategory/JobByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <Features></Features>
      <DreamJobBanner></DreamJobBanner>
    </div>
  );
};

export default Home;
