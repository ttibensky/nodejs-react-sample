import JobRow from "./JobRow";

function JobBoard() {
  return (
    <>
      <div className="container py-4 px-3 mx-auto mb-4">
        <h2>Job Board</h2>
        <p>
          At the moment you can view, create, update and delete job postings.
        </p>
        <button className="btn btn-primary mb-5">Create new job</button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Appointment</th>
              <th scope="col">Technician</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <JobRow />
            <JobRow />
            <JobRow />
            <JobRow />
            <JobRow />
            <JobRow />
            <JobRow />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobBoard;
