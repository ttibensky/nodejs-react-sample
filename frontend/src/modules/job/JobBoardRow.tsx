import { Button } from "react-bootstrap";

function JobBoardRow() {
  return (
    <tr>
      <td>John Doe</td>
      <td>Plumbing</td>
      <td>Scheduled</td>
      <td>2024-06-15T09:00:00Z</td>
      <td>Jane Smith</td>
      <td>
        <Button variant="secondary" className="me-1">
          Show
        </Button>
        <Button variant="secondary" className="me-1">
          Edit
        </Button>
        <Button variant="secondary" className="btn-danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JobBoardRow;
