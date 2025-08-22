// src/services/LessonService.ts
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where   // 👈 thêm 2 cái này
} from 'firebase/firestore';
import Lesson from '../types/Lesson';

const lessonRef = collection(db, 'lessons');

// Thêm lesson
export const addLesson = async (cat: Omit<Lesson, 'id'>) => {
  const docRef = await addDoc(lessonRef, cat);
  return docRef.id;
};

// Lấy tất cả lesson
export const getLessons = async (): Promise<Lesson[]> => {
  const snapshot = await getDocs(lessonRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Lesson));
};

// Xoá lesson theo id
export const deleteLesson = async (id: string) => {
  await deleteDoc(doc(db, 'lessons', id));
};

// Cập nhật lesson theo id
export const updateLesson = async (id: string, lesson: Omit<Lesson, 'id'>) => {
  const lessonDoc = doc(db, 'lessons', id);
  await updateDoc(lessonDoc, lesson);
  return id;
};

// 👇 Thêm hàm mới: lấy lesson theo topicId
export const getLessonsByTopic = async (topicId: string): Promise<Lesson[]> => {
  const q = query(lessonRef, where('topicId', '==', topicId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Lesson));
};
