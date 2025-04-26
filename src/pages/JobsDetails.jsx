import { useLoaderData } from "react-router-dom";

function JobsDetails() {
  const { title, company } = useLoaderData();
  return (
    <div>
      <h2>title: {title}</h2>
      <h2>{company}</h2>
    </div>
  );
}

export default JobsDetails;
