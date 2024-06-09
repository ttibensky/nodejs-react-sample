import { Button } from "react-bootstrap";
import { useState } from "react";
import { Job } from "../../types/Job";
import JobDeleteModal from "./JobDeleteModal";

type P = {
  job: Job;
  className?: string;
};

function JobDeleteButton({ job, className = "" }: P) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className={className} onClick={handleShow}>
        Delete
      </Button>

      <JobDeleteModal job={job} show={show} setShow={setShow} />
    </>
  );
}

export default JobDeleteButton;
