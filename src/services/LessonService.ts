// src/services/categoryService.ts
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';
import Lesson from '../types/Lesson';


const lessonRef = collection(db, 'lessons');

// Thêm danh mục
export const addLesson = async (cat: Omit<Lesson, 'id'>) => {
  const docRef = await addDoc(lessonRef, cat);
  return docRef.id;
};

// Lấy danh sách danh mục
export const getLessons = async (): Promise<Lesson[]> => {
  const snapshot = await getDocs(lessonRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Lesson));
};

// Xoá danh mục theo id
export const deleteLesson = async (id: string) => {
  await deleteDoc(doc(db, 'lessons', id));
};
