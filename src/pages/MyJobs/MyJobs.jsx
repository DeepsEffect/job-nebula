import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProver";
import MyJobCard from "../../components/MyJobCard/MyJobCard";
import { Button, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(`${import.meta.env.VITE_SERVER_API_URL}/myJobs/${user.email}`)
      .then((res) => {
        setMyJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user.email]);
  return (
    <div>
      <div className="bg-primary min-h-[400px] text-center text-white flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-heading">My Added Jobs</h2>
        <p>
          Browse the job you have added. You can also edit and delete them from
          here.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:mt-10">
        {loading ? (
          <Spinner className="flex mx-auto" />
        ) : myJobs.length > 0 ? (
          myJobs.map((myJob) => (
            <MyJobCard
              key={myJob._id}
              job={myJob}
              myJobs={myJobs}
              setMyJobs={setMyJobs}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center mt-4 lg:mt-10">
            <p>You haven&apos;t added any jobs yet.</p>
            <Link to={"/addAJob"}>
              <Button className="bg-primary hover:bg-secondary">Add Job</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
