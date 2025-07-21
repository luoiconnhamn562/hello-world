import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { addPost, getAllPosts, deletePost } from '../services/postService';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  const fetchPosts = async () => {
    const data = await getAllPosts();
    setPosts(data);
  };

  const fetchCategories = async () => {
    const snapshot = await getDocs(collection(db, 'categories'));
    setCategories(snapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name })));
  };

  const handleAddPost = async () => {
    if (!title || !categoryId) return alert('Hãy nhập đầy đủ tiêu đề và danh mục');
    await addPost({ title, description, date, categoryId });
    setTitle(''); setDescription(''); setDate(''); setCategoryId('');
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Danh Sách Bài Viết</h1>

      {/* Form nhập bài viết */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Diễn giải"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full col-span-2"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <button
          onClick={handleAddPost}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          ➕ Thêm bài viết
        </button>
      </div>

      {/* Danh sách bài viết */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="card">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p className="mt-2">{post.description}</p>
            <p className="mt-1 text-xs text-gray-500">📂 Mã danh mục: {post.categoryId}</p>
            <button
              onClick={() => handleDelete(post.id!)}
              className="text-red-500 mt-2 text-sm"
            >
              🗑️ Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
