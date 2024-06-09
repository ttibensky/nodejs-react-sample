import { format, formatISO } from "date-fns";
import { BaseSyntheticEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { FormJob } from "../../types/FormJob";

type P = {
  formId: string;
  formJob: FormJob;
  setJob: React.Dispatch<React.SetStateAction<FormJob>>;
  handleSubmit: CallableFunction;
};

function JobForm({ formId, formJob, setJob, handleSubmit }: P) {
  const [validated, setValidated] = useState(false);

  return (
    <Form
      noValidate
      id={formId}
      validated={validated}
      onSubmit={(e: BaseSyntheticEvent) => {
        e.preventDefault();
        setValidated(true);

        const form = e.currentTarget;
        if (form.checkValidity() === true) {
          handleSubmit();
        }
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Customer</Form.Label>
        <Form.Control
          type="text"
          name="customerName"
          placeholder="John Doe"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...formJob, customerName: e.target.value })
          }
          value={formJob.customerName}
          autoFocus
          required
        />
        <Form.Control.Feedback type="invalid">
          Customer Name is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Select
          name="type"
          className="mb-3"
          aria-label="Type"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...formJob, type: e.target.value })
          }
          value={formJob.type}
          required
        >
          <option value="Plumbing">Plumbing</option>
          <option value="Heating">Heating</option>
          <option value="Electrical">Electrical</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Type is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          name="status"
          className="mb-3"
          aria-label="Status"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...formJob, status: e.target.value })
          }
          value={formJob.status}
          required
        >
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Status is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Appointment</Form.Label>
        <Form.Control
          type="datetime-local"
          name="appointmentDate"
          placeholder="2024-06-15T09:00:00Z"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...formJob, appointmentDate: formatISO(e.target.value) })
          }
          value={format(formJob.appointmentDate, "yyyy-MM-dd'T'hh:mm")}
          autoFocus
          required
        />
        <Form.Control.Feedback type="invalid">
          Appointment Date is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Technician</Form.Label>
        <Form.Control
          type="text"
          name="technician"
          placeholder="Jane Smith"
          onChange={(e: BaseSyntheticEvent) =>
            setJob({ ...formJob, technician: e.target.value })
          }
          value={formJob.technician}
          autoFocus
          required
        />
        <Form.Control.Feedback type="invalid">
          Technician is required.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
}

export default JobForm;
