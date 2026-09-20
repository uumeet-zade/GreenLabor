import { Link } from 'react-router-dom';
import dgcLogo from '../assets/Greenelectionsymbol.png';
import alpLogo from '../assets/ALiconnew.png';

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: 'none', position: 'relative' }}>
      {/* Symmetrical Dual Border */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '6px', backgroundColor: 'var(--color-green)' }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '6px', backgroundColor: 'var(--color-red)' }}></div>

      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
              <img src={dgcLogo} alt="DGC Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <img src={alpLogo} alt="ALP Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h4 className="text-gradient-gl" style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', fontWeight: '800' }}>Green Labor</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Building a fairer, greener future for all Capricans.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
              Advancing ecological wisdom, social justice, and grassroots democracy across Caprica.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/platform">Platform</Link></li>
              <li><Link to="/elections">Elections 2068</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/members">Members</Link></li>
            </ul>
          </div>
          <div>
            <h4>Take Action</h4>
            <ul>
              <li><Link to="/join">Get Involved</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Green Labor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
