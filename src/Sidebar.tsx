// src/Sidebar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [sortOpen, setSortOpen] = useState<boolean>(false); // điều khiển menu con "Sắp xếp"

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const toggleSortMenu = () => setSortOpen(prev => !prev);

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          

          {/* Menu Sắp xếp có submenu */}
          <li>
            <button className="submenu-toggle" onClick={toggleSortMenu}>
              {sortOpen ? '▼' : '▶'} Sắp xếp
            </button>
            {sortOpen && (
              <ul className="submenu">
                <li><Link to="/sorting/bubble">Bubble Sort</Link></li>
                <li><Link to="/sorting/selection">Selection Sort</Link></li>
                <li><Link to="/sorting/insertion">Insertion Sort</Link></li>
                <li><Link to="/sorting/merge">Merge Sort</Link></li>
                <li><Link to="/sorting/quick">Quick Sort</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </div>

      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '←' : '≡'}
      </button>
    </div>
  );
};

export default Sidebar;
