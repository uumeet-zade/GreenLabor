export default function About() {

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="text-gradient-gl">About Us</h1>
        </div>
      </header>

      {/* History Section */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }} className="text-gradient-gl">Our History</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            The <strong>Green Labor</strong> alliance was born from a historic coalition between the Democratic Greens of Caprica and the Alternative Labor Party. As stated in our founding alliance letter, the governing powers of Caprica have a responsibility to be <em>"capable and competent, but visionary."</em>
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            It is the intent of Green Labor to work cooperatively in the interests of the betterment of Caprica and the common wealth and prosperity of its people. We unite fierce environmental advocacy with an unyielding crusade for workers' rights.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', marginTop: '4rem' }} className="text-gradient-gl">Our Mission</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-pure-white)' }}>
              To forge a Caprica where the economy serves the people and the environment is protected for future generations. We are committed to universal civil rights, powerful labor unions, public healthcare, and a Land Value Tax (LVT) that returns the wealth of Caprica back to its citizens.
            </p>
          </div>

          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '4rem', color: 'var(--color-white)' }}>Leadership Timeline</h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.7)' }}>The historical careers of our alliance leaders.</p>
          </div>

          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Mandy's Timeline */}
            <div>
              <h3 style={{ color: 'var(--color-red)', fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-red)', paddingBottom: '1rem' }}>Mandy Trottier</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-pure-white)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Jan 2044 – Apr 2045</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Supreme Court Justice</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Apr 2045 – Mar 2049</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Senator</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Jul 2046 – Apr 2055</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Deputy Leader of the ALP</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Nov 2046 – Mar 2049</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Prime Minister of Caprica</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Mar 2049 – Feb 2057</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Vice President of Caprica</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Apr 2055 – Present</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Leader of the ALP</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-red)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-red)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Feb 2057 – Feb 2061</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>President of Caprica</span>
                </li>
              </ul>
            </div>

            {/* Adriana's Timeline */}
            <div>
              <h3 style={{ color: 'var(--color-green)', fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-green)', paddingBottom: '1rem' }}>Adriana Flash</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-pure-white)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ borderLeft: '4px solid var(--color-green)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-green)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Nov 2060 – Present</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Member of Parliament for Costa Blanca</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-green)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-green)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Jun 2061 – May 2065</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Prime Minister of Caprica</span>
                </li>
                <li style={{ borderLeft: '4px solid var(--color-green)', paddingLeft: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-green)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Jul 2065 – Present</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Founder & Leader of DGC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
