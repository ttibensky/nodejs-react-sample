import axios from "axios";
import { formatISO } from "date-fns";
import { FormEvent, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import JobForm from "../common/JobForm";
import { Job } from "../../types/Job";

type P = {
  job: Job;
  show: boolean;
  setShow: CallableFunction;
  fetchJobs: CallableFunction;
};

type FormJob = {
  customerName: string;
  type: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

function JobEditModal({ job, show, setShow, fetchJobs }: P) {
  const defaultJob: FormJob = {
    customerName: job.customerName,
    type: job.type,
    status: job.status,
    appointmentDate: formatISO(job.appointmentDate),
    technician: job.technician,
  };

  const formId = "jobEditForm";
  const [formJob, setJob] = useState<FormJob>(defaultJob);

  const handleClose = () => setShow(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // @TODO validation
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/jobs/${job.id}`,
        formJob
      );
      setJob(defaultJob);
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
        <Modal.Title>Edit job</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <JobForm
          id={formId}
          job={formJob}
          setJob={setJob}
          handleSubmit={handleSubmit}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" form={formId} variant="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobEditModal;
