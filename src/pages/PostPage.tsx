import { useEffect, useState } from 'react';
import './PostPage.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS cho trình soạn thảo
import './PostPage.css';

import { getAllPosts, addPost, deletePost } from '../services/postService';
import { getCategories } from '../services/CategoryService';

import { Post } from '../types/Post';
import Category from '../types/Category';


const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const fetch = async () => {
    const [postData, categoryData] = await Promise.all([getAllPosts(), getCategories()]);
    setPosts(postData);
    setCategories(categoryData);
  };

  const handleAdd = async () => {
    if (title.trim() && categoryId) {
      await addPost({ title, description, date: new Date() .toString(), categoryId });
      setTitle('');
      setDescription('');
      setDate('');
      setCategoryId('');
      setModalOpen(false);
      fetch();
    }
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    fetch();
  };

  const getCategoryName = (id: string): string => {
    const found = categories.find(cat => cat.id === id);
    return found ? found.ten : 'Không rõ';
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="category-page">
      <div className="category-header">
        <h2>📝 Danh sách bài viết</h2>
        <button className="add-btn" onClick={() => setModalOpen(true)}>+ Thêm bài viết</button>
      </div>

      <table className="category-table">
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
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.description}</td>
              <td>
                <div
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
              </td>
              <td>{post.date}</td>
              <td>{getCategoryName(post.categoryId)}</td>
              <td>
                <button className="del-btn" onClick={() => handleDelete(post.id!)}>🗑️ Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal thêm bài viết */}
      {isModalOpen && (
        <div className="modal-backdrop card shadow-lg border-0 p-4 mb-5">
          <div className="modal">
            <h3>➕ Thêm bài viết</h3>
            <input
              type="text"
              placeholder="Tiêu đề"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Diễn giải"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
           
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              <option value="">-- Chọn danh mục --</option>
              {categories.map(cat => (
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

export default PostPage;
