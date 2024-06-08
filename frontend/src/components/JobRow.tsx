import SecondaryButton from "./button/SecondaryButton";

function JobRow() {
  return (
    <>
      <tr>
        <td>John Doe</td>
        <td>Plumbing</td>
        <td>Scheduled</td>
        <td>2024-06-15T09:00:00Z</td>
        <td>Jane Smith</td>
        <td>
          <SecondaryButton text="Edit" className="me-1" />
          <SecondaryButton text="Delete" className="btn-danger" />
        </td>
      </tr>
    </>
  );
}

export default JobRow;
