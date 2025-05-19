export default function Publications() {
  return (
    <section className="container my-5">
      <h2 className="mb-4">Selected Articles</h2>
      <div className="row g-4">
        
        {/* RAG Basics */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">AI Made Simple – RAG Basics</h5>
              <p className="card-text flex-grow-1">
                As a conversation designer, it’s important to understand some of the techniques used to optimize large language models (LLMs). This article helps designers understand RAG.
              </p>
              <a
                href="https://uxplanet.org/ai-made-simple-what-every-conversation-designer-should-know-series-rag-basics-b360ffd667f7"
                target="_blank"
                rel="noopener"
                className="btn btn-outline-primary mt-3"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>

        {/* Designing Voice Experience */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Designing Voice Experience</h5>
              <p className="card-text flex-grow-1">
                In this article, I share my experience on what to consider when designing for voice, from prototyping to usability best practices.
              </p>
              <a
                href="https://medium.com/user-experience-design-1/voice-user-experience-design-and-prototyping-for-mere-mortals-ef080c843640"
                target="_blank"
                rel="noopener"
                className="btn btn-outline-primary mt-3"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>

        {/* Voice UX Process Under 5 Mins */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Voice UX Process Under 5 Mins</h5>
              <p className="card-text flex-grow-1">
                A quick guide to the essential steps and considerations for designing voice user experiences when you only have five minutes.
              </p>
              <a
                href="https://medium.com/ux-planet/voice-ux-process-81812c8ccf70"
                target="_blank"
                rel="noopener"
                className="btn btn-outline-primary mt-3"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
