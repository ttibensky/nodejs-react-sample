import JobBoardRow from "./JobBoardRow";
import { Job } from "../../types/Job";
import { useQuery } from "@tanstack/react-query";
import { Image } from "react-bootstrap";
import * as cat from "./assets/cat.png";

function JobBoardTable() {
  const { isFetching, error, data } = useQuery<Record<"jobs", Job[]>>({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/jobs`).then((res) =>
        res.json()
      ),
  });

  if (error) return ""; // @TODO toast

  const jobs = data?.jobs ?? [];

  return !isFetching && jobs.length === 0 ? (
    <div className="">
      <p className="fw-bold">There are no jobs yet!</p>
      <p>Here's a cat:</p>
      <Image src={cat.default} />
    </div>
  ) : (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">Appointment</th>
          <th scope="col">Technician</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      {isFetching ? (
        <tbody className="table-group-divider">
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex} className="placeholder-glow">
              {[...Array(6)].map((_, colIndex) => (
                <td key={colIndex}>
                  <span className="placeholder p-2 w-100"></span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className="table-group-divider">
          {jobs.map((job) => (
            <JobBoardRow key={job.id} job={job} />
          ))}
        </tbody>
      )}
    </table>
  );
}

export default JobBoardTable;
