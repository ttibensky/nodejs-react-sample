import { Button } from "react-bootstrap";
import { Job } from "../types/Job";

type P = {
  job: Job;
};

function JobBoardRow({ job }: P) {
  return (
    <tr>
      <td>{job.customerName}</td>
      <td>{job.type}</td>
      <td>{job.status}</td>
      <td>{job.appointmentDate}</td>
      <td>{job.technician}</td>
      <td>
        <Button variant="secondary" className="me-1">
          Show
        </Button>
        <Button variant="secondary" className="me-1">
          Edit
        </Button>
        <Button variant="secondary" className="btn-danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JobBoardRow;
