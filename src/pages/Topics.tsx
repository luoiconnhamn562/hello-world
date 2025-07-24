import { useEffect, useState } from 'react';

import './Topics.css';
import Topics from '../types/Topics';
import { addTopics, deleteTopics, getTopics } from '../services/TopicsService';

const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<Topics[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [ten, setTen] = useState('');
  const [dienGiai, setDienGiai] = useState('');

  const fetch = async () => {
    const data = await getTopics();
    setTopics(data);
  };

  const handleAdd = async () => {
    if (ten.trim()) {
      await addTopics({ ten, noidung: dienGiai });
      setTen('');
      setDienGiai('');
      setModalOpen(false);
      fetch();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTopics(id);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="topics-page">
      <div className="topics-header">
        <h2>📋 Chủ đề</h2>
        <button className="add-btn" onClick={() => setModalOpen(true)}>+ Thêm chủ đề</button>
      </div>

      <table className="topics-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Diễn giải</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(cat => (
            <tr key={cat.id}>
              <td>{cat.ten}</td>
              <td>{cat.noidung}</td>
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
            <h3>➕ Thêm chủ đề</h3>
            <input
              type="text"
              placeholder="Tên chủ đề"
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

export default TopicsPage;