import { Button } from "react-bootstrap";
import { useState } from "react";
import { Job } from "../../types/Job";
import JobShowModal from "./JobShowModal";

type P = {
  job: Job;
  className?: string;
};

function JobShowButton({ job, className = "" }: P) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" className={className} onClick={handleShow}>
        Show
      </Button>

      <JobShowModal job={job} show={show} setShow={setShow} />
    </>
  );
}

export default JobShowButton;
