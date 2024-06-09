import { Job } from "../../types/Job";
import JobEditButton from "../edit/JobEditButton";
import JobDeleteButton from "../delete/JobDeleteButton";
import JobShowButton from "../show/JobShowButton";

type P = {
  job: Job;
  fetchJobs: CallableFunction;
};

function JobBoardRow({ job, fetchJobs }: P) {
  return (
    <tr>
      <td>{job.customerName}</td>
      <td>{job.type}</td>
      <td>{job.status}</td>
      <td>{job.appointmentDate}</td>
      <td>{job.technician}</td>
      <td>
        <JobShowButton className="me-1" job={job} />
        <JobEditButton className="me-1" job={job} fetchJobs={fetchJobs} />
        <JobDeleteButton job={job} fetchJobs={fetchJobs} />
      </td>
    </tr>
  );
}

export default JobBoardRow;
