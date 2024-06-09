import { Button } from "react-bootstrap";
import { useState } from "react";
import JobEditModal from "./JobEditModal";
import { Job } from "../../types/Job";

type P = {
  job: Job;
  className?: string;
  fetchJobs: CallableFunction;
};

function JobEditButton({ job, fetchJobs, className = "" }: P) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" className={className} onClick={handleShow}>
        Edit
      </Button>

      <JobEditModal
        job={job}
        show={show}
        setShow={setShow}
        fetchJobs={fetchJobs}
      />
    </>
  );
}

export default JobEditButton;
