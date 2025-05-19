import Image from 'next/image';

export default function Portfolio() {
  const companies = [
    {
      name: 'HCLTech',
      logo: 'https://iz6nfzsevxdwxfxk.public.blob.vercel-storage.com/hcl-r6yJjobOuSZB43DQY72Ut54C2eBMMC.png',
    },
    {
      name: 'Microsoft',
      logo: 'https://iz6nfzsevxdwxfxk.public.blob.vercel-storage.com/msft-K97DdrUKhb3XgID5IcgK7HID8mLf21.png',
    },
    {
      name: 'Nuance Communications',
      logo: 'https://iz6nfzsevxdwxfxk.public.blob.vercel-storage.com/nuance-VYjcpaR8oho50QKNlMGicXitzw8uhk.png',
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="mb-4">Selected Companies</h2>
      <p className="mb-4">
        Due to confidentiality, I’m unable to share most projects publicly, but I’m happy to present selected work on request or during a private video call.  
        Feel free to contact me on{' '}
        <a href="https://www.linkedin.com/in/linkarungeorge/" target="_blank" rel="noopener">
          LinkedIn
        </a>.
      </p>

      <div className="row g-4">
        {companies.map((company) => (
          <div key={company.name} className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body d-flex flex-column">
                <div className="mx-auto mb-3" style={{ maxWidth: 120, position: 'relative', height: 60 }}>
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text flex-grow-1">
                  Selected work at {company.name} is available upon request or during a private video call.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
