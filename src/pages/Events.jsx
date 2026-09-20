import { Link } from 'react-router-dom';

export const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet Rallies",
    date: "October 12, 2068",
    location: "Montiablo City Center",
    summary: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    color: "var(--color-green)"
  },
  {
    id: 2,
    title: "Excepteur Sint Occaecat Town Hall",
    date: "October 18, 2068",
    location: "Costa Blanca Community Center",
    summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    color: "var(--color-red)"
  },
  {
    id: 3,
    title: "Sunt In Culpa Qui Officia Mobilization",
    date: "November 2, 2068",
    location: "Caprica City Square",
    summary: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    color: "var(--color-pure-white)"
  }
];

export default function Events() {
  return (
    <div>
      <header className="page-header">
        <div className="container text-center">
          <h1 className="text-gradient-gl">On the Ground</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            Green Labor is a grassroots movement. Look back at our recent rallies, town halls, and mobilization efforts across Caprica.
          </p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {DUMMY_EVENTS.map(event => (
              <div key={event.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: `6px solid ${event.color === 'var(--color-pure-white)' ? 'var(--color-text)' : event.color}`, backgroundColor: '#000000', color: 'var(--color-pure-white)' }}>
                <p style={{ color: event.color === 'var(--color-pure-white)' ? 'rgba(255,255,255,0.6)' : event.color, fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {event.date} • {event.location}
                </p>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{event.title}</h3>
                <p style={{ flexGrow: 1, color: 'rgba(255,255,255,0.8)' }}>{event.summary}</p>
                <Link to={`/events/${event.id}`} className="btn btn-secondary" style={{ marginTop: '2rem', width: '100%' }}>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
