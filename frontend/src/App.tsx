import JobBoard from "./modules/job/components/board/JobBoard";

function App() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Node.js + React.js Sample App</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" title="Comming soon">
                Features
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" title="Comming soon">
                About
              </span>
            </li>
          </ul>
        </header>
      </div>

      <div className="container py-4 px-3 mx-auto mb-4 border-bottom">
        <h1>Hello, welcome to the sample app!</h1>
        <p className="mb-0">
          This app is a showcase of various technologies, architectonal
          principles and libraries.
        </p>
      </div>

      <JobBoard />
    </>
  );
}

export default App;
