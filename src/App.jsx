import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
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

            <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
