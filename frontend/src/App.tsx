import JobBoard from "./modules/job/components/board/JobBoard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <a
                className="nav-link"
                href="https://github.com/ttibensky/nodejs-react-sample"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/tomastibensky/"
                target="_blank"
              >
                About Author
              </a>
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

      <div className="position-fixed bottom-0 w-100">
        <div className="container">
          <footer className="d-flex justify-content-end">
            <p>
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/tomastibensky/"
                target="_blank"
              >
                @ttibensky
              </a>
            </p>
          </footer>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
