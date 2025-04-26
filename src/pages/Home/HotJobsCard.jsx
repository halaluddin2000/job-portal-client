import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

function HotJobsCard({ job }) {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="flex gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h2 className="text-xl">{company}</h2>
          <h4 className="flex gap-1 items-center">
            <IoLocation /> {location}
          </h4>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill) => (
            <p className="border rounded-md text-center px-2 hover:bg-gray-400">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end mt-4 items-center">
          <p>
            Salary : {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotJobsCard;
