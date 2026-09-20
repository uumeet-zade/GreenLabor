import { Link, useLocation } from 'react-router-dom';
import glLogo from '../assets/GreenLabor_Logo.png';

export default function Navbar() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={scrollToTop}>
          <img src={glLogo} alt="Green Labor Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/about" onClick={scrollToTop} style={{ color: location.pathname === '/about' ? 'var(--color-pure-white)' : '' }}>About</Link></li>
          <li><Link to="/platform" onClick={scrollToTop} style={{ color: location.pathname === '/platform' ? 'var(--color-pure-white)' : '' }}>Platform</Link></li>
          <li><Link to="/events" onClick={scrollToTop} style={{ color: location.pathname.startsWith('/events') ? 'var(--color-pure-white)' : '' }}>Events</Link></li>
          <li><Link to="/elections" onClick={scrollToTop} style={{ color: location.pathname === '/elections' ? 'var(--color-pure-white)' : '' }}>Elections 2068</Link></li>
        </ul>
      </div>
    </nav>
  );
}
