import { useEffect, useState } from 'react';
import './Lesson.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addLesson, getLessons, deleteLesson } from '../services/LessonService';
import { getTopics } from '../services/TopicService';

import Lesson from '../types/Lesson';
import Topic from '../types/Topic';

const LessonPage: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [example, setExanple] = useState('');
  const [date, setDate] = useState('');
  const [topicId, setTopicId] = useState('');

  const fetch = async () => {
  const [lessonData, topicData] = await Promise.all([
    getLessons(),
    getTopics()
  ]);
  setLessons(lessonData);
  setTopics(topicData);
};


  const handleAdd = async () => {
    if (title.trim() && topicId && date) {
      await addLesson({ title, content, example, date: new Date().toString(), topicId });
      setTitle('');
      setContent('');
      setExanple('');
      setDate('');
      setTopicId('');
      setModalOpen(false);
      fetch();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteLesson(id);
    fetch();
  };

  const getLessonName = (id: string): string => {
    const found = lessons.find(cat => cat.id === id);
    return found ? found.topicId : 'Không rõ';
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className=" lesson-page bg-white rounded-lg shadow">
      <div className="lesson-header">
        <h2>📘 Danh sách bài học</h2>
        <button className="add-btn" onClick={() => setModalOpen(true)}>+ Thêm bài học</button>
      </div>

      <table className="lesson-table">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Diễn giải</th>
            <th>Ngày</th>
            <th>Danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.title}</td>
              <td>
                <div
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                />
              </td>
              <td>{lesson.date}</td>
              <td>{getLessonName(lesson.topicId)}</td>
              <td>
                <button className="del-btn" onClick={() => handleDelete(lesson.id!)}>🗑️ Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-backdrop card shadow-lg border-0 p-4 mb-5">
          <div className="modal">
            <h3>➕ Thêm bài học</h3>
            <input
              type="text"
              placeholder="Tiêu đề"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Diễn giải"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            
            <select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
              <option value="">-- Chọn danh mục --</option>
              {topics.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.ten}</option>
              ))}
            </select>
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

export default LessonPage;
