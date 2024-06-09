import { Button } from "react-bootstrap";
import { useState } from "react";
import JobShowModal from "./JobShowModal";

type P = {
  jobId: string;
  className?: string;
};

function JobShowButton({ jobId, className = "" }: P) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" className={className} onClick={handleShow}>
        Show
      </Button>

      <JobShowModal jobId={jobId} show={show} setShow={setShow} />
    </>
  );
}

export default JobShowButton;
