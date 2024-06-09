import Modal from "react-bootstrap/Modal";
import { Job } from "../../types/Job";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";

type P = {
  jobId: string;
  show: boolean;
  setShow: CallableFunction;
};

function JobShowModal({ jobId, show, setShow }: P) {
  const handleClose = () => setShow(false);

  const {
    isFetching,
    error,
    data: job,
  } = useQuery<Job>({
    queryKey: ["job"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/jobs/${jobId}`).then(
        (res) => res.json()
      ),
    enabled: show,
  });

  if (error) return "Something went wrong."; // @TODO toast

  return job !== undefined ? (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          Job for "{job.customerName}" on{" "}
          {format(job.appointmentDate, "yyyy-MM-dd")}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex mb-1">
          <div className="col-3">ID:</div>
          <div className="col-9">#{job.id}</div>
        </div>
        <div className="d-flex mb-1">
          <div className="col-3">Customer Name:</div>
          <div className="col-9">{job.customerName}</div>
        </div>
        <div className="d-flex mb-1">
          <div className="col-3">Type:</div>
          <div className="col-9">{job.type}</div>
        </div>
        <div className="d-flex mb-1">
          <div className="col-3">Status:</div>
          <div className="col-9">{job.status}</div>
        </div>
        <div className="d-flex mb-1">
          <div className="col-3">Appointment Date:</div>
          <div className="col-9">
            {format(job.appointmentDate, "yyyy-MM-dd' at 'hh:mm")}
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="col-3">Technician:</div>
          <div className="col-9">{job.technician}</div>
        </div>
      </Modal.Body>
    </Modal>
  ) : isFetching ? (
    <>fetching...</>
  ) : null;
}

export default JobShowModal;
