import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getLessonsByTopic } from "../services/LessonService";
import Lesson from "../types/Lesson";

const TopicPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("id"); // lấy id từ URL
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topicId) {
      getLessonsByTopic(topicId).then((data) => {
        setLessons(data);
        setLoading(false);
      });
    }
  }, [topicId]);

  if (!topicId) {
    return <p>❌ Không tìm thấy topicId trên URL</p>;
  }

  if (loading) {
    return <p>⏳ Đang tải dữ liệu...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Danh sách bài học: </h2>
      {lessons.length === 0 ? (
        <p>Không có bài học nào trong topic này.</p>
      ) : (
        <table border={1} cellPadding={10} style={{ marginTop: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th>Ngày</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td>{lesson.title}</td>
                <td>{lesson.content}</td>
                <td>{new Date(lesson.date).toLocaleDateString("vi-VN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopicPage;
