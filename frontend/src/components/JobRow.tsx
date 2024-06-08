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
          <button className="btn btn-sm btn-secondary me-1">Edit</button>
          <button className="btn btn-sm btn-secondary">Delete</button>
        </td>
      </tr>
    </>
  );
}

export default JobRow;
