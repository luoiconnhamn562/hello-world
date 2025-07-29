import { useEffect, useState } from 'react';

import './CategoryPage.css';
import Category from '../types/Category';
import { addCategory, deleteCategory, getCategories } from '../services/CategoryService';

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [ten, setTen] = useState('');
  const [dienGiai, setDienGiai] = useState('');

  const fetch = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleAdd = async () => {
    if (ten.trim()) {
      await addCategory({ ten, dienGiai });
      setTen('');
      setDienGiai('');
      setModalOpen(false);
      fetch();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
     <div className=" category-page bg-white rounded-lg shadow">
      <div className="category-header">
        <h2>📋 Danh mục bài viết</h2>
        <button className="add-btn" onClick={() => setModalOpen(true)}>+ Thêm danh mục</button>
      </div>

      <table className="category-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Diễn giải</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td>{cat.ten}</td>
              <td>{cat.dienGiai}</td>
              <td>
                <button className="del-btn" onClick={() => handleDelete(cat.id)}>🗑️ Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal thêm danh mục */}
      {isModalOpen && (
        <div className="modal-backdrop  card shadow-lg border-0 p-4 mb-5">
          <div className="modal">
            <h3>➕ Thêm danh mục</h3>
            <input
              type="text"
              placeholder="Tên danh mục"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
            <textarea
              placeholder="Diễn giải"
              value={dienGiai}
              onChange={(e) => setDienGiai(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleAdd}>Lưu</button>
              <button className="cancel" onClick={() => setModalOpen(false)}>Huỷ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
