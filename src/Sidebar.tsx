// src/Sidebar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
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
