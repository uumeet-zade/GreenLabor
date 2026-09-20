import adrianaImg from '../assets/Adriannaflashportrait2.png';
import asterImg from '../assets/Asterskye.png';
import henrikImg from '../assets/Heinrikofficialportrait.png';
import dgcIcon from '../assets/Greenelectionsymbol.png';
import alpIcon from '../assets/ALiconnew.png';

export default function Members() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="text-gradient-gl">Our Members</h1>
        </div>
      </header>

      {/* Constituency MPs Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-pure-white)' }}>General Assembly Candidates</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-pure-white)' }}>Our joint grassroots candidates running for the 2068 general assembly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))', justifyContent: 'center', gap: '2rem' }}>
            
            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={alpIcon} alt="ALP" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Alina Charliennes</h3>
              <p style={{ color: 'var(--color-red)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALP Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Ambrosia</p>
            </div>
            
            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={alpIcon} alt="ALP" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Harry Balls</h3>
              <p style={{ color: 'var(--color-red)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALP Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Chasmia</p>
            </div>

            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={alpIcon} alt="ALP" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Apollo Cailet</h3>
              <p style={{ color: 'var(--color-red)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALP Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Kiskehewin</p>
            </div>

            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={alpIcon} alt="ALP" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Morgan Edelstein-Powell</h3>
              <p style={{ color: 'var(--color-red)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALP Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Myrati</p>
            </div>

            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={dgcIcon} alt="DGC" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Benito Mussolini</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DGC Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Moeras</p>
            </div>

            <div className="card card-neutral" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={dgcIcon} alt="DGC" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Erika Hasumi Inaba</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DGC Candidate</p>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>Ventura</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Governors Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Governors</h2>
            <p style={{ fontSize: '1.25rem' }}>Our official party leadership at the regional level.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))', justifyContent: 'center', gap: '2rem' }}>
            <div className="card card-neutral text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={henrikImg} alt="Henrik Vasmer" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--color-pure-white)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Henrik Vasmer</h3>
              <p style={{ color: 'var(--color-pure-white)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Governor</p>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Cambria</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
