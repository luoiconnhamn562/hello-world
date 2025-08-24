import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Topic from './types/Topic';
import { getTopics } from './services/TopicService';
import { getCategories } from './services/CategoryService';
import Category from './types/Category';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [sortOpen, setSortOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
 
  const fetch = async () => {
    const data = await getTopics();
    setTopics(data);
    const catData = await getCategories();
    setCategories(catData);
  };
 
  const toggleSidebar = () => setIsOpen(prev => !prev);
  const toggleSortMenu = () => setSortOpen(prev => !prev);
  const toggleSearchMenu = () => setSearchOpen(prev => !prev);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          
          <li>
            <button className="submenu-toggle" onClick={toggleSearchMenu}>
              {searchOpen ? '▼' : '▶'} Bài Học
            </button>
            {searchOpen && (
              <ul className="submenu">
                {topics.map((cat) => (
                  <li key={cat.id}><Link to={`/topic?id=${cat.id}`}>{cat.ten}</Link></li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button className="submenu-toggle" onClick={toggleSortMenu}>
              {sortOpen ? '▼' : '▶'} Bài Viết
            </button>
            {sortOpen && (
              <ul className="submenu">
                {categories.map((cat) => (
                  <li key={cat.id}><Link to="#">{cat.ten}</Link></li>
                ))}
              </ul>
            )}
          </li>
          
          <li><Link to="/category">Danh mục</Link></li>
          <li><Link to="/post">Bài viết</Link></li>
          <li><Link to="/topics">Chủ đề</Link></li>
          <li><Link to="/lesson">Bài học</Link></li>
          <li><Link to="/python-lab">Python Mini Lab</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>

          {/* Thêm nút đăng nhập */}
          <li><Link to="/login">🔐 Đăng nhập</Link></li>
        </ul>
      </div>

      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '←' : '≡'}
      </button>
    </div>
  );
};

export default Sidebar;
