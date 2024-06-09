import { useCallback, useEffect, useState } from "react";
import JobBoardRow from "./JobBoardRow";
import JobCreateModal from "../create/JobCreateButton";
import axios from "axios";
import { Job } from "../../types/Job";

function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/jobs");
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }, []);

  // @TODO fix useEffect being called twice
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      <div className="container py-4 px-3 mx-auto mb-4">
        <h2>Job Board</h2>
        <p>
          At the moment you can view, create, update and delete job postings.
        </p>
        <JobCreateModal className="mb-5" fetchJobs={fetchJobs} />

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
          <tbody className="table-group-divider">
            {jobs.map((job) => (
              <JobBoardRow key={job.id} job={job} fetchJobs={fetchJobs} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobBoard;
