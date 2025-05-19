import Resume from "./resume/page";
import Publications from "./publications/page";
import Portfolio from "./portfolio/page";

export default function HomePage() {
  return (
    <>
      <div style={{ marginTop: '6rem' }} />

      <h1>I am Arun George.</h1>
      <h1 className="display-6">
        I design meaningful conversational experiences that connect humans and AI in natural, intuitive ways.
        </h1> <br />
<h1 className="display-6">      I&apos;m currently exploring the shift from intent-based systems to embedding-driven models, along with researching Neural AI Interfaces such as Brain-Computer Interfaces (BCIs).</h1>      

      <div style={{ marginTop: '6rem' }} />

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
