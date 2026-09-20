import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import dglLogo from '../assets/GreenLabor_Logo.png';
import dgcFullLogo from '../assets/DGClogomark.png';
import alpFullLogo from '../assets/Altenative_ALP_Logo.png';
import { DUMMY_EVENTS } from './Events';

export default function Home() {
  const words = [
    { text: 'Greener', color: 'var(--color-green)' }, 
    { text: 'Fairer', color: 'var(--color-red)' }, 
    { text: 'Resilient', color: 'var(--color-green)' }, 
    { text: 'Prosperous', color: 'var(--color-red)' }
  ];
  const images = [
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1920&h=1080', // Greener (Forest)
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1920&h=1080', // Fairer (People)
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lifeboat.17-31.underway.arp.jpg/1280px-Lifeboat.17-31.underway.arp.jpg', // Resilient (Lifeboat)
    'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1920&h=1080', // Prosperous (City)
  ];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const wordRefs = useRef([]);

  // Interval to increment index and roll to the next word
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((current) => current + 1);
    }, 3500); // Slowed down slightly so users can appreciate the images
    return () => clearInterval(interval);
  }, []);

  // When we reach the cloned first word at the end, wait for the transition to finish,
  // then silently snap back to the actual first word at the top without animation.
  useEffect(() => {
    if (index === words.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 600); // Wait the exact duration of the CSS transition (600ms)
      return () => clearTimeout(timeout);
    }
  }, [index, words.length]);

  // Adjust container width to exactly match the active word
  useEffect(() => {
    if (wordRefs.current[index]) {
      setContainerWidth(wordRefs.current[index].offsetWidth);
    }
  }, [index]);

  // Clone the first word to the end to create a seamless infinite loop
  const displayWords = [...words, words[0]];
  const displayImages = [...images, images[0]];

  return (
    <div>
      <section className="hero">
        {/* Background Image Slider */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none',
            transform: `translateY(calc(-${index} * 100%))`
          }}>
            {displayImages.map((img, i) => (
              <div key={i} style={{
                flexShrink: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            ))}
          </div>
          {/* Dark Overlay for Text Legibility */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to right, rgba(8, 6, 13, 0.95) 0%, rgba(8, 6, 13, 0.4) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span>A</span>
              {/* Slot-machine wheel container with dynamic width */}
              <span style={{
                display: 'inline-flex',
                flexDirection: 'column',
                height: '1.05em', /* Exactly one line of text visible, slightly taller for underline gap */
                width: containerWidth ? `${containerWidth}px` : 'auto',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                color: 'var(--color-pure-white)',
                borderBottom: '12px solid var(--color-pure-white)',
                transition: isTransitioning ? 'width 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none'
              }}>
                <span style={{
                  display: 'flex',
                  flexDirection: 'column',
                  transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none',
                  transform: `translateY(calc(-${index} * 1.05em))`
                }}>
                  {displayWords.map((wordObj, i) => (
                    <span 
                      key={`${wordObj.text}-${i}`} 
                      ref={(el) => (wordRefs.current[i] = el)}
                      style={{ 
                        display: 'block', 
                        height: '1.05em', 
                        lineHeight: '0.9', 
                        paddingBottom: '0.15em',
                        whiteSpace: 'nowrap',
                        width: 'max-content',
                        color: wordObj.color
                      }}
                    >
                      {wordObj.text}
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div style={{ fontSize: '7rem', color: 'var(--color-pure-white)', fontWeight: '800' }}>
              CAPRICA.
            </div>
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '3rem' }}>
            The Green Labor alliance unites environmental justice, grassroots democracy, and workers' rights to build a sustainable future for all Capricans.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/join" className="btn btn-secondary">Get Involved</Link>
            <Link to="/platform" className="btn btn-outline">Read Our Platform</Link>
          </div>
        </div>
      </section>

      {/* DGL Alliance Announcement */}
      <section className="section section-light">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--color-white)', border: '2px solid rgba(8, 6, 13, 0.05)' }}>
            <h2 style={{ marginBottom: '1rem', letterSpacing: '-0.02em', fontSize: '3.5rem' }} className="text-gradient-gl">A Historic Alliance</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              The Green Labor alliance stands as a united front across Caprica.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', margin: '4rem 0' }}>
              <img src={dgcFullLogo} alt="Democratic Greens Full Logo" style={{ height: '80px', width: 'auto' }} />
              <span style={{ fontSize: '4rem', color: 'var(--color-text-muted)', fontWeight: '800' }}>+</span>
              <img src={alpFullLogo} alt="Alternative Labor Full Logo" style={{ height: '80px', width: 'auto' }} />
            </div>
            
            <p style={{ marginTop: '2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)', fontSize: '1.2rem' }}>
              The Green Labor alliance is a dedicated coalition committed to advancing comprehensive progressive policy across Caprica. We merge fierce environmental advocacy with an unyielding crusade for workers' rights.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '5rem', color: 'var(--color-pure-white)' }}>Our Joint Platform</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-pure-white)' }}>The ideological foundation of the Green Labor alliance.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-green)' }}>Eco-Liberalism</h3>
              <p>We believe in harnessing market mechanisms alongside composed fiscal and monetary policy to drive profound environmental and economic stewardship.</p>
            </div>
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-red)' }}>Workers' Rights</h3>
              <p>An uncompromising dedication to union strength, universal healthcare, and sweeping social justice reform for all Caprican workers.</p>
            </div>
            <div className="card card-neutral">
              <h3 style={{ color: 'var(--color-green)' }}>Georgism</h3>
              <p>We assert that land is a common birthright. We champion a Land Value Tax (LVT) to curb speculation, fund public infrastructure, and radically reduce inequality.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '5rem', color: 'var(--color-text)' }}>On the Ground</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)' }}>See what Green Labor has been doing in communities across Caprica.</p>
          </div>
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
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/events" className="btn btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)', borderBottom: 'none' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '5rem' }}>Ready to make a difference?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.5rem' }}>Our movement relies on people like you. Stand with us to build a sustainable Caprica.</p>
          <Link to="/donate" className="btn btn-primary">Support Our Campaign</Link>
        </div>
      </section>
    </div>
  );
}
