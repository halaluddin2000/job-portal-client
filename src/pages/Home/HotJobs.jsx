import { useState } from "react";
import { useEffect } from "react";
import HotJobsCard from "./HotJobsCard";

function HotJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl text-[#ffffff] font-bold my-2">
          Jobs of the day
        </h2>
        <p className="text-[#7485A2] mb-10">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {jobs.map((job) => (
          <HotJobsCard job={job} key={job._id}></HotJobsCard>
        ))}
      </div>
    </div>
  );
}

export default HotJobs;
