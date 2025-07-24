// src/Sidebar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [sortOpen, setSortOpen] = useState<boolean>(false); // điều khiển menu con "Sắp xếp"
  const [searchOpen, setSearchOpen] = useState<boolean>(false); // điều khiển menu con "Tìm kiếm"

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const toggleSortMenu = () => setSortOpen(prev => !prev);
  const toggleSearchMenu = () => setSearchOpen(prev => !prev);

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          
          <li>
            <button className="submenu-toggle" onClick={toggleSearchMenu}>
              {searchOpen ? '▼' : '▶'} Tìm kiếm
            </button>
            {searchOpen && (
              <ul className="submenu">
                <li><Link to="/searching/linear">Linear Search</Link></li>
                <li><Link to="/searching/binary">Binary Search</Link></li>
                <li><Link to="/searching/jump">Jump Search</Link></li>
                <li><Link to="/searching/interpolation">Interpolation Search</Link></li>
                <li><Link to="/searching/exponential">Exponential Search</Link></li>
              </ul>
            )}
          </li>

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
          <li><Link to="/category">Danh mục</Link></li>
          <li><Link to="/post">bài viết</Link></li>
          <li><Link to="/topics">Chủ đề</Link></li>
          <li><Link to="/python-lab">Python Mini Lab</Link></li>
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
