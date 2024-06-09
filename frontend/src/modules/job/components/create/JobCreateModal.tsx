import axios from "axios";
import { formatISO } from "date-fns";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import JobForm from "../common/JobForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type P = {
  show: boolean;
  setShow: CallableFunction;
};

type FormJob = {
  customerName: string;
  type: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

function JobCreateModal({ show, setShow }: P) {
  const defaultJob: FormJob = {
    customerName: "",
    type: "Plumbing",
    status: "Scheduled",
    appointmentDate: formatISO(new Date()),
    technician: "",
  };

  const formId = "jobCreateForm";
  const [formJob, setFormJob] = useState<FormJob>(defaultJob);

  const handleClose = () => setShow(false);

  const queryClient = useQueryClient();
  const { mutate: createJob } = useMutation({
    mutationFn: (formJob: FormJob) => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/jobs`,
        formJob
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      handleClose();
      // @TODO toast
    },
    onError: () => {
      // @TODO toast
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new job</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <JobForm
          formId={formId}
          formJob={formJob}
          setJob={setFormJob}
          handleSubmit={() => createJob(formJob)}
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

export default JobCreateModal;
