import axios from "axios";
import { SyntheticEvent } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Job } from "../../types/Job";
import { format } from "date-fns";

type P = {
  job: Job;
  show: boolean;
  setShow: CallableFunction;
  fetchJobs: CallableFunction;
};

function JobDeleteModal({ job, show, setShow, fetchJobs }: P) {
  const handleClose = () => setShow(false);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // @TODO validation
    try {
      await axios.delete(`http://localhost:3001/jobs/${job.id}`); // @TODO move to .env
      fetchJobs();
      handleClose();
      // @TODO display success message
    } catch (error) {
      // @TODO display error message
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete job</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Are you sure you want to delete this job for "{job.customerName}" on{" "}
          {format(job.appointmentDate, "yyyy-MM-dd")}?
        </p>
        <p>This action cannot be taken back.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          Yes, Delete the job
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobDeleteModal;
