import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import JobByCategory from "../../components/JobByCategory/JobByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <Features></Features>
    </div>
  );
};

export default Home;
