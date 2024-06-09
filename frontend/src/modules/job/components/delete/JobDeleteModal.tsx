import axios from "axios";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Job } from "../../types/Job";
import { format } from "date-fns";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type P = {
  job: Job;
  show: boolean;
  setShow: CallableFunction;
};

function JobDeleteModal({ job, show, setShow }: P) {
  const handleClose = () => setShow(false);

  const queryClient = useQueryClient();
  const { mutate: deleteJob } = useMutation({
    mutationFn: (job: Job) => {
      return axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/jobs/${job.id}`
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
        <Button variant="danger" onClick={() => deleteJob(job)}>
          Yes, Delete the job
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobDeleteModal;
