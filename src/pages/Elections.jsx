import dgcIcon from '../assets/Greenelectionsymbol.png';
import alpIcon from '../assets/ALiconnew.png';
import mandyImg from '../assets/mandy.png';
import adrianaImg from '../assets/adriana.png';

export default function Elections() {
  const constituencyCandidates = [
    { region: "Ambrosia", candidate: "Alina Charliennes", party: "ALP", icon: alpIcon, color: "var(--color-red)" },
    { region: "Chasmia", candidate: "Harry Balls", party: "ALP", icon: alpIcon, color: "var(--color-red)" },
    { region: "Kiskehewin", candidate: "Apollo Cailet", party: "ALP", icon: alpIcon, color: "var(--color-red)" },
    { region: "Myrati", candidate: "Morgan Edelstein-Powell", party: "ALP", icon: alpIcon, color: "var(--color-red)" },
    { region: "Moeras", candidate: "Benito Mussolini", party: "DGC", icon: dgcIcon, color: "var(--color-green)" },
    { region: "Ventura", candidate: "Erika Hasumi Inaba", party: "DGC", icon: dgcIcon, color: "var(--color-green)" }
  ];

  return (
    <div>
      <header className="page-header">
        <div className="container text-center">
          <h1 className="text-gradient-gl">Elections 2068</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '800px', margin: '0 auto' }}>
            The historic Green Labor ticket to reclaim Caprica's future.
          </p>
        </div>
      </header>

      {/* Presidential Ticket Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-text)' }}>Presidential Ticket</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>The united leadership of the Green Labor alliance.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* President */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: '#000000', borderTop: '6px solid var(--color-red)' }}>
              <img src={mandyImg} alt="Mandy Trottier" style={{ width: '180px', height: '180px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid var(--color-red)' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '0.25rem', color: 'var(--color-pure-white)' }}>Mandy Trottier</h3>
              <p style={{ fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-red)' }}>Chairwoman of the ALP, MP & Former President</p>
              <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>Candidate for President</p>
            </div>

            {/* Vice President */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: '#000000', borderTop: '6px solid var(--color-green)' }}>
              <img src={adrianaImg} alt="Adriana Flash" style={{ width: '180px', height: '180px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid var(--color-green)' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '0.25rem', color: 'var(--color-pure-white)' }}>Adriana Flash</h3>
              <p style={{ fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-green)' }}>Chairwoman of the DGC, MP & Former PM</p>
              <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>Candidate for Vice-President</p>
            </div>

          </div>
        </div>
      </section>

      {/* Constituency Candidates Section */}
      <section className="section" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-pure-white)' }}>Constituency Candidates</h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.7)' }}>Our joint grassroots candidates running for the 2068 general assembly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {constituencyCandidates.map((race, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-pure-white)', borderTop: `6px solid ${race.color}` }}>
                <img src={race.icon} alt={`${race.party} Icon`} style={{ width: '60px', height: '60px', objectFit: 'contain', margin: '0 auto 1.5rem' }} />
                
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>{race.candidate}</h3>
                <p style={{ color: race.color, fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{race.party} Nominee</p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginTop: '0.5rem', fontWeight: '500' }}>{race.region}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
