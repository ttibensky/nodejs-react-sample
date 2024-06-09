import axios from "axios";
import { format, formatISO } from "date-fns";
import { BaseSyntheticEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

type P = {
  show: boolean;
  setShow: CallableFunction;
};

type Job = {
  customerName: string;
  type: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

function JobCreateModal({ show, setShow }: P) {
  const [job, setValue] = useState<Job>({
    customerName: "",
    type: "Plumbing",
    status: "Scheduled",
    appointmentDate: formatISO(new Date()),
    technician: "",
  });

  const handleClose = () => setShow(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // @TODO validation
    try {
      await axios.post("http://localhost:3001/jobs", job);
      handleClose();
      // @TODO display success message
    } catch (error) {
      // @TODO display error message
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new job</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="jobCreateForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              placeholder="John Doe"
              onChange={(e: BaseSyntheticEvent) =>
                setValue({ ...job, customerName: e.target.value })
              }
              value={job.customerName}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              className="mb-3"
              aria-label="Type"
              onChange={(e: BaseSyntheticEvent) =>
                setValue({ ...job, type: e.target.value })
              }
              value={job.type}
            >
              <option value="Plumbing">Plumbing</option>
              <option value="Heating">Heating</option>
              <option value="Electic">Electic</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              className="mb-3"
              aria-label="Status"
              onChange={(e: BaseSyntheticEvent) =>
                setValue({ ...job, status: e.target.value })
              }
              value={job.status}
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Done">Done</option>
              <option value="Canceled">Canceled</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Appointment</Form.Label>
            <Form.Control
              type="datetime-local"
              name="appointmentDate"
              placeholder="2024-06-15T09:00:00Z"
              onChange={(e: BaseSyntheticEvent) =>
                setValue({ ...job, appointmentDate: formatISO(e.target.value) })
              }
              value={format(job.appointmentDate, "yyyy-MM-dd'T'hh:mm")}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Technician</Form.Label>
            <Form.Control
              type="text"
              name="technician"
              placeholder="Jane Smith"
              onChange={(e: BaseSyntheticEvent) =>
                setValue({ ...job, technician: e.target.value })
              }
              value={job.technician}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" form="jobCreateForm" variant="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobCreateModal;
