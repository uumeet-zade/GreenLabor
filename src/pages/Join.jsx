export default function Join() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="text-gradient-gl">Get Involved</h1>
        </div>
      </header>
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '600px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
              <input type="text" style={{ width: '100%', padding: '1rem', border: '2px solid var(--color-text)', fontSize: '1.1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '1rem', border: '2px solid var(--color-text)', fontSize: '1.1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>How would you like to help?</label>
              <select style={{ width: '100%', padding: '1rem', border: '2px solid var(--color-text)', fontSize: '1.1rem' }}>
                <option>Become a Member</option>
                <option>Volunteer for Campaigns</option>
                <option>Host an Event</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1.5rem', fontSize: '1.25rem', marginTop: '1.5rem' }}>Join the Movement</button>
          </form>
        </div>
      </section>
    </div>
  );
}
