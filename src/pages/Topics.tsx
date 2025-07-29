import { useEffect, useState } from 'react';
import './Topics.css';
import Topic from '../types/Topic';
import { addTopic, deleteTopic, getTopics } from '../services/TopicService';

const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [ten, setTen] = useState('');
  const [dienGiai, setDienGiai] = useState('');

  const fetch = async () => {
    const data = await getTopics();
    setTopics(data);
  };

  const handleAdd = async () => {
    if (ten.trim()) {
      await addTopic({ ten, noidung: dienGiai });
      setTen('');
      setDienGiai('');
      setModalOpen(false);
      fetch();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTopic(id);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="topics-page bg-white rounded-lg shadow">
      <div className="topics-header">
        <h2>📋 Chủ đề</h2>
        <button
          className="add-btn hover:scale-105 active:scale-95"
          onClick={() => setModalOpen(true)}
        >
          + Thêm chủ đề
        </button>
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
          {topics.map((cat) => (
            <tr key={cat.id} className="row-hover">
              <td>{cat.ten}</td>
              <td>{cat.noidung}</td>
              <td>
                <button
                  className="del-btn hover:rotate-[-10deg] active:rotate-0"
                  onClick={() => handleDelete(cat.id)}
                  title="Xóa chủ đề"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-backdrop fade-in">
          <div className="modal slide-down">
            <h3>➕ Thêm chủ đề</h3>
            <input
              type="text"
              placeholder="Tên chủ đề"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder="Diễn giải"
              value={dienGiai}
              onChange={(e) => setDienGiai(e.target.value)}
              className="textarea-field"
            />
            <div className="modal-actions">
              <button className="btn-primary" onClick={handleAdd}>
                Lưu
              </button>
              <button
                className="btn-secondary"
                onClick={() => setModalOpen(false)}
              >
                Huỷ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicsPage;
