// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import BubbleSort from './pages/sorting/BubbleSort';
import SelectionSort from './pages/sorting/SelectionSort';
import InsertionSort from './pages/sorting/InsertionSort';
import MergeSort from './pages/sorting/MergeSort';
import QuickSort from './pages/sorting/QuickSort';
import Contact from './pages/Contact';
import PythonMiniLab from './pages/PythonMiniLab';
import LinearSearch from './pages/searching/LinearSearch';
import BinarySearch from './pages/searching/BinarySearch';
import JumpSearch from './pages/searching/JumpSearch';
import InterpolationSearch from './pages/searching/InterpolationSearch';
import ExponentialSearch from './pages/searching/ExponentialSearch';
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
          <Route path="/sorting/selection" element={<SelectionSort />} />
          <Route path="/sorting/insertion" element={<InsertionSort />} />
          <Route path="/sorting/merge" element={<MergeSort />} />
          <Route path="/sorting/quick" element={<QuickSort />} />
          <Route path="/python-lab" element={<PythonMiniLab />} />
          <Route path="/searching/linear" element={<LinearSearch />} />
          <Route path="/searching/binary" element={<BinarySearch />} />
          <Route path="/searching/jump" element={<JumpSearch />} />
          <Route path="/searching/interpolation" element={<InterpolationSearch />} />
          <Route path="/searching/exponential" element={<ExponentialSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
