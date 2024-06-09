import axios from "axios";
import { formatISO } from "date-fns";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import JobForm from "../common/JobForm";
import { Job } from "../../types/Job";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormJob } from "../../types/FormJob";

type P = {
  job: Job;
  show: boolean;
  setShow: CallableFunction;
};

function JobEditModal({ job, show, setShow }: P) {
  const defaultJob: FormJob = {
    customerName: job.customerName,
    type: job.type,
    status: job.status,
    appointmentDate: formatISO(job.appointmentDate),
    technician: job.technician,
  };

  const formId = "jobEditForm";
  const [formJob, setFormJob] = useState<FormJob>(defaultJob);

  const handleClose = () => setShow(false);

  const queryClient = useQueryClient();
  const { mutate: editJob } = useMutation({
    mutationFn: ({ jobId, formJob }: { jobId: string; formJob: FormJob }) => {
      return axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/jobs/${jobId}`,
        formJob
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      handleClose();
      setFormJob(defaultJob);
      // @TODO toast
    },
    onError: () => {
      // @TODO toast
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit job</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <JobForm
          formId={formId}
          formJob={formJob}
          setJob={setFormJob}
          handleSubmit={() => editJob({ jobId: job.id, formJob })}
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
