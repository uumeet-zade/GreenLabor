import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Members from './pages/Members';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Elections from './pages/Elections';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';

// GitHub Pages URLs are case-insensitive, but React Router's basename is strictly case-sensitive.
// This dynamically matches the casing of the URL so the app doesn't crash on a white screen!
const basePath = '/DGCaprica';
const dynamicBasename = window.location.pathname.toLowerCase().startsWith(basePath.toLowerCase())
  ? window.location.pathname.substring(0, basePath.length)
  : basePath;

function App() {
  return (
    <Router basename={dynamicBasename}>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/members" element={<Members />} />
            <Route path="/join" element={<Join />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/elections" element={<Elections />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
