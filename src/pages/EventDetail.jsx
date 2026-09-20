import { useParams, Link } from 'react-router-dom';
import { DUMMY_EVENTS } from './Events';

export default function EventDetail() {
  const { id } = useParams();
  const event = DUMMY_EVENTS.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="container section text-center">
        <h2>Event not found</h2>
        <Link to="/events" className="btn btn-primary">Back to Events</Link>
      </div>
    );
  }

  return (
    <div>
      <header className="page-header" style={{ borderBottom: `8px solid ${event.color === 'var(--color-pure-white)' ? 'var(--color-green)' : event.color}` }}>
        <div className="container text-center">
          <h1 className="text-gradient-gl" style={{ marginBottom: '1rem' }}>{event.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', margin: '0 auto', maxWidth: '800px' }}>{event.date} • {event.location}</p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-text)', marginBottom: '3rem' }}>
            {event.summary}
          </p>
          
          <div style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <p>
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
            </p>
            <p>
              Quisque vehicula, urna sed bibendum posuere, massa risus tempus felis, quis ornare massa tellus dignissim libero. Curabitur vel sapien libero. In hac habitasse platea dictumst. Curabitur vel sapien libero.
            </p>
          </div>

          <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: '#000000', color: 'var(--color-pure-white)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Inspired by our work?</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Join the movement and help us organize the next event on the ground.</p>
            <Link to="/join" className="btn btn-secondary">Get Involved</Link>
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/events" style={{ color: 'var(--color-green)', fontWeight: '600', textDecoration: 'underline' }}>
              ← Back to all events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
