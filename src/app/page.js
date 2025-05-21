import Resume from "./resume/page";
import Publications from "./publications/page";
import Portfolio from "./portfolio/page";

export default function HomePage() {
  return (
    <>
     <div style={{ marginTop: '8rem', fontSize: '0.79em' }} />

      <h1>I am Arun George.</h1>
       <p className="fs-2 fw-normal">
       I design and architect conversational experiences that seamlessly connect humans and AI in natural, intuitive ways by leveraging language and technology.
        </p> <br />
  <p className="fs-2 fw-normal">I&apos;ve worked with Fortune 100 companies to build AI-driven chatbots and voice apps @ Nuance, Microsoft, and HCLTech.</p> <br />
  <p className="fs-2 fw-normal"> I&apos;m currently exploring the shift from intent‑based designs to contextually aware semantic search, along with researching Neural AI Interfaces such as Brain-Computer Interfaces (BCIs).</p>      

     

      {/* Buttons */}
   <div className="mt-3">
  <button
    type="button"
    className="btn btn-outline-primary mt-3 me-3"
    data-bs-toggle="modal"
    data-bs-target="#resumeModal"
  >
    Resume
  </button>

  <button
    type="button"
    className="btn btn-outline-primary mt-3 me-3"
    data-bs-toggle="modal"
    data-bs-target="#portfolioModal"
  >
    Portfolio
  </button>

  <button
    type="button"
    className="btn btn-outline-primary mt-3"
    data-bs-toggle="modal"
    data-bs-target="#publicationsModal"
  >
    Publications
  </button>
</div>

        <hr />

      {/* Resume Modal */}
      <div
        className="modal fade"
        id="resumeModal"
        tabIndex="-1"
        aria-labelledby="resumeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="resumeModalLabel">
                My Resume
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              
           <Resume />

            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Modal */}
      <div
        className="modal fade"
        id="portfolioModal"
        tabIndex="-1"
        aria-labelledby="portfolioModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="portfolioModalLabel">
                Portfolio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
            <Portfolio />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Modal */}
      <div
        className="modal fade"
        id="publicationsModal"
        tabIndex="-1"
        aria-labelledby="publicationsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="publicationsModalLabel">
                Publications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
             <Publications />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        
        </div>
  
      </div>
    </>
  );
}
