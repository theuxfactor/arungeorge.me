export default function Resume() {
  return (
    <section className="container my-5">
      <h2 className="mb-4">Experience</h2>

      {/* Download Resume Button */}
      <div className="text-center mb-5">
        <a
          href="https://iz6nfzsevxdwxfxk.public.blob.vercel-storage.com/Arun%20George_Conversation_Designer_Architect-IeR39IZNXLTdnyatgv8dqFD8Nj847Q.pdf"
          className="btn btn-outline-primary"
          download
        >
          Download Resume
        </a>
      </div>

      <div className="row">
        {/* HCLTech */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Senior Conversation Designer</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                HCLTech <span className="fw-normal">January 2025 – Present | Remote</span>
              </h6>
              <ul className="mb-0">
                <li>Architecting enterprise-wide AI assistant using Microsoft Copilot Studio and Nuance Mix Conversation Platform</li>
                <li>Leading cross-functional teams in multiple time zones to deliver conversational AI solutions</li>
                <li>Implementing generative AI capabilities for dynamic response generation and context-aware interactions</li>
                <li>Establishing conversation design standards and best practices for global implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Microsoft */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Senior Conversation Designer</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                Microsoft <span className="fw-normal">May 2023 – January 2025 | Remote (via Nuance)</span>
              </h6>
              <ul className="mb-0">
                <li>Trained 50+ designers across multiple time zones on Copilot Studio implementation, resulting in faster onboarding and project delivery</li>
                <li>Developed comprehensive training curriculum covering generative actions, NLU optimization, and intent classification</li>
                <li>Collaborated with product team to improve platform features</li>
                <li>Recruited to work on an internal innovation hub to help with AI Agentic future</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nuance Communications */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Principal Conversation Designer</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                Nuance Communications <span className="fw-normal">March 2018 – May 2023 | Remote</span>
              </h6>

              <h6 className="fw-bold">Telecom Industry Impact</h6>
              <ul className="mb-0">
                <li>
                  Redesigned conversation flows for Fortune 100 telecommunications client, achieving:
                  <ul className="ms-3">
                    <li>21% reduction in incomprehension rates (47% → 37%)</li>
                    <li>24% decrease in live chat escalations (11.2% → 8.5%)</li>
                  </ul>
                </li>
              </ul>

              <h6 className="fw-bold mt-3">Platform Innovation</h6>
              <ul>
                <li>Developed automated design tool using .NET framework, improving team efficiency – what used to take 10–15 minutes now can be done within seconds</li>
              </ul>

              <h6 className="fw-bold mt-3">Strategic Leadership</h6>
              <ul>
                <li>Led 100+ intent discovery workshops for Fortune 500 clients across telecommunications, finance, and utilities sectors</li>
              </ul>

              <h6 className="fw-bold mt-3">Enterprise Implementation</h6>
              <ul>
                <li>Owned end-to-end dialog strategy for accounts with millions of chat sessions per month</li>
              </ul>

              <h6 className="fw-bold mt-3">Knowledge Transfer</h6>
              <ul className="mb-0">
                <li>Conducted training sessions and office hours on Mix platform for internal teams and enterprise clients</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VoxGen */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Voice UX Consultant</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                VoxGen <span className="fw-normal">June 2015 – March 2018 | Remote</span>
              </h6>
              <ul className="mb-0">
                <li>Helped secure $2M contract with a major US retail pharmacy by leading all design needs</li>
                <li>Conducted 50+ usability testing sessions, improving task completion rates by 30%</li>
                <li>Partnered with engineering teams across US and UK to ensure on-time delivery</li>
                <li>Led script translation and localization for 3 languages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Founder</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                CGRNet (Computer Games’ Reviews Network) <span className="fw-normal">2000 – 2004</span>
              </h6>
              <ul className="mb-0">
                <li>Built and scaled gaming review platform to hundreds of monthly active users (pre‑YouTube era)</li>
                <li>Developed content strategy and community engagement protocols</li>
                <li>Managed a small team of remote contributors across multiple time zones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
