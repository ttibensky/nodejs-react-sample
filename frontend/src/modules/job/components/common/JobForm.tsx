import { format, formatISO } from "date-fns";
import { BaseSyntheticEvent, FormEvent } from "react";
import { Form } from "react-bootstrap";

type P = {
  id: string;
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
  handleSubmit: (e: FormEvent) => Promise<void>;
};

type Job = {
  customerName: string;
  type: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

function JobForm({ id, job, setJob, handleSubmit }: P) {
  return (
    <Form id={id} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Customer</Form.Label>
        <Form.Control
          type="text"
          name="customerName"
          placeholder="John Doe"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...job, customerName: e.target.value })
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
            setJob({ ...job, type: e.target.value })
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
            setJob({ ...job, status: e.target.value })
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
            setJob({ ...job, appointmentDate: formatISO(e.target.value) })
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
            setJob({ ...job, technician: e.target.value })
          }
          value={job.technician}
          autoFocus
        />
      </Form.Group>
    </Form>
  );
}

export default JobForm;
