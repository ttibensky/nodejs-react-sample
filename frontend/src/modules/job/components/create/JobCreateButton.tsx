import { Button } from "react-bootstrap";
import JobCreateModal from "./JobCreateModal";
import { useState } from "react";

type P = {
  className?: string;
};

function JobCreateButton({ className = "" }: P) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className={className} onClick={handleShow}>
        Create new job
      </Button>

      <JobCreateModal show={show} setShow={setShow} />
    </>
  );
}

export default JobCreateButton;
