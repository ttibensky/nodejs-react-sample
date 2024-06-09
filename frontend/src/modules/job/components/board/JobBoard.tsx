import JobCreateModal from "../create/JobCreateButton";
import JobBoardTable from "./JobBoardTable";

function JobBoard() {
  return (
    <>
      <div className="container py-4 px-3 mx-auto mb-4 border-bottom">
        <h2>Job Board</h2>
        <p>
          At the moment you can view, create, update and delete job postings.
        </p>
        <JobCreateModal />
      </div>

      <div className="container py-4 px-3 mx-auto mb-4">
        <JobBoardTable />
      </div>
    </>
  );
}

export default JobBoard;
