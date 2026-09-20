export default function Platform() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="text-gradient-gl">Our Platform</h1>
        </div>
      </header>

      {/* Light Section -> Dark Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Founding Principles</h2>
            <p style={{ fontSize: '1.25rem' }}>A return to radical liberal and reformist roots.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-dark">
              <h3 style={{ color: 'var(--color-pure-white)' }}>Governance-Wide Sustainability</h3>
              <p>Sustainability must extend beyond environmental policy into fiscal, infrastructure, and social policy as a fundamental duty of the state.</p>
            </div>
            <div className="card card-alp">
              <h3 style={{ color: 'var(--color-pure-white)' }}>Pro-Labor Governance</h3>
              <p>Policy must be grounded in the lived experiences of Caprican workers. We fight for unyielding union protections, fair wages, and corporate accountability.</p>
            </div>
            <div className="card card-dark">
              <h3 style={{ color: 'var(--color-pure-white)' }}>Land as a Birthright</h3>
              <p>Eco-friendly development and reduced inequality driven by a Land Value Tax and similar taxes on harmful activity and speculation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section -> Light Cards */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)' }}>Economic & Social Vision</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-pure-white)' }}>Building a fairer, greener future for all Capricans.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-green)' }}>Green-Liberal Economics</h3>
              <p>Market mechanisms alongside composed fiscal and monetary policy, directed toward environmental and economic stewardship.</p>
            </div>
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-red)' }}>Civil & Labor Rights</h3>
              <p>Uncompromising dedication to union empowerment, universal healthcare, feminism, and sweeping social justice reform.</p>
            </div>
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-pure-white)' }}>Political Renewal</h3>
              <p>A definitive corrective to the ailing Caprican political environment that currently fails to reflect the character of the people it governs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
