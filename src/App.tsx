// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PythonMiniLab from './pages/PythonMiniLab';
import LinearSearch from './pages/searching/LinearSearch';
import BinarySearch from './pages/searching/BinarySearch';
import JumpSearch from './pages/searching/JumpSearch';
import InterpolationSearch from './pages/searching/InterpolationSearch';
import ExponentialSearch from './pages/searching/ExponentialSearch';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import Topics from './pages/Topics';
import Lesson from './pages/Lesson';
import TopicPage from './pages/TopicPage';
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: '240px', padding: '20px' , backgroundColor: '#91fcd3ff' , boxShadow: '0 2px 4px rgba(197, 97, 97, 0.1)',height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/python-lab" element={<PythonMiniLab />} />
          <Route path="/searching/linear" element={<LinearSearch />} />
          <Route path="/searching/binary" element={<BinarySearch />} />
          <Route path="/searching/jump" element={<JumpSearch />} />
          <Route path="/searching/interpolation" element={<InterpolationSearch />} />
          <Route path="/searching/exponential" element={<ExponentialSearch />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/topic" element={<TopicPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
