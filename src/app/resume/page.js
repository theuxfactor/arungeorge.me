export default function Resume() {
  return (
    <section className="container my-5">
      <h2 className="mb-4">Experience</h2>

      <div className="row">
        {/* HCLTech */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Senior Conversation Designer</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                HCLTech <span className="fw-normal">2025 – Present</span>
              </h6>
              <ul className="list-unstyled mb-0">
                <li>Assigned to a high‑visibility project to design an internal AI bot using generative AI with Microsoft’s Copilot Studio.</li>
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
        Microsoft (via Nuance) <span className="fw-normal">2023 – 2025</span>
      </h6>

      <ul className="mb-0">
        <li>
          Trained design teams on Copilot Studio, including:
          <ul>
            <li>Using generative actions effectively</li>
            <li>Leveraging NLU for intent classification</li>
          </ul>
        </li>
        <li>
          Have been identified as a “key employee,” critical to Microsoft’s long‑term success
        </li>
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
                Nuance Communications <span className="fw-normal">2018 – 2023</span>
              </h6>

              <h6 className="fw-bold">Conversational AI Strategy &amp; Consulting</h6>
              <ul className="mb-0">
                <li>Senior Consultant for Fortune 100 brands</li>
                <li>Improved bot strategy for a major telecommunications company, reducing:
                  <ul className="ms-3">
                    <li>Incomprehension (No Match) rate from 47% → 37%</li>
                    <li>Live Chat Requests from 11.2% → 8.5%</li>
                  </ul>
                </li>
              </ul>

              <h6 className="fw-bold mt-3">Process &amp; Efficiency Improvements</h6>
              <ul>
                <li>Developed an internal software tool using Microsoft’s .NET framework to enhance design processes</li>
                <li>Led intent discovery & content workshops across various industries (telecommunications, finance, utilities)</li>
                <li>Owned implementation of key dialog elements, including business intents, incomprehension handling, and dialog strategy</li>
              </ul>

              <h6 className="fw-bold mt-3">Training &amp; Enablement</h6>
              <ul className="mb-0">
                <li>Conducted training sessions for internal teams and external clients on Nuance’s Conversational AI Platform – Mix</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VoxGen + Founder */}
        <div className="col-md-6 mb-4">
          {/* VoxGen Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-body pb-0">
              <h5 className="card-title">Voice UX Consultant</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                VoxGen <span className="fw-normal">2015 – 2018</span>
              </h6>
              <p className="mb-2"><em>Client: Major US Retail Pharmacy</em></p>
              <ul className="mb-0">
                <li>Helped secure a $2 M contract by leading all VUI deliverables for the client</li>
                <li>Recorded scripts, translated prompts, and ran usability tests</li>
                <li className="mb-0">Moderated Wizard of Oz testing and managed persona development</li>
              </ul>
            </div>
          </div>
          {/* Founder Card */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Founder</h5>
              <h6 className="card-subtitle mb-3 text-muted">
                CGRNet (Computer Games’ Reviews Network) <span className="fw-normal">2000 – 2004</span>
              </h6>
              <ul className="mb-0">
                <li>Created a game review platform with a growing user base using CodeIgniter (PHP Framework)</li>
                <li>Gained early traction with over 1000+ games listed (pre‑YouTube era)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center mt-4">
        <a
          href="https://iz6nfzsevxdwxfxk.public.blob.vercel-storage.com/AI%20Conversation%20Design%20-%20ArunG_v3-94QejKHvetfWmnzDcuEXmxplx8k9dv.pdf"
          className="btn btn-outline-primary mt-3"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
