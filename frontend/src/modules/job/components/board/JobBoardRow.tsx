import { Job } from "../../types/Job";
import JobEditButton from "../edit/JobEditButton";
import JobDeleteButton from "../delete/JobDeleteButton";
import JobShowButton from "../show/JobShowButton";
import { format } from "date-fns";

type P = {
  job: Job;
};

function JobBoardRow({ job }: P) {
  return (
    <tr>
      <td>{job.customerName}</td>
      <td>{job.type}</td>
      <td>{job.status}</td>
      <td>{format(job.appointmentDate, "yyyy-MM-dd' at 'hh:mm")}</td>
      <td>{job.technician}</td>
      <td>
        <JobShowButton className="btn-sm me-1" jobId={job.id} />
        <JobEditButton className="btn-sm me-1" job={job} />
        <JobDeleteButton className="btn-sm" job={job} />
      </td>
    </tr>
  );
}

export default JobBoardRow;
