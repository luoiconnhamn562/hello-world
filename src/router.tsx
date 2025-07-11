// router.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BubbleSort from './pages/sorting/BubbleSort';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/sorting/bubble" element={<BubbleSort />} />
    </Routes>
  </Router>
);

export default AppRouter;
