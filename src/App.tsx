// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BubbleSort from './pages/sorting/BubbleSort';
const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: '240px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sorting/bubble" element={<BubbleSort />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
