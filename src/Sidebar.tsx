// src/Sidebar.tsx
import { useState } from 'react';
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
          <li>Trang chủ</li>
          <li>Giới thiệu</li>
          <li>Liên hệ</li>
        </ul>
      </div>

      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '←' : '≡'}
      </button>
    </div>
  );
};

export default Sidebar;
