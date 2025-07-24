// src/services/categoryService.ts
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';
import type Category from '../types/Topics';
import Topics from '../types/Topics';


const topicsRef = collection(db, 'topics');

// Thêm danh mục
export const addTopics = async (cat: Omit<Topics, 'id'>) => {
  const docRef = await addDoc(topicsRef, cat);
  return docRef.id;
};

// Lấy danh sách danh mục
export const getTopics = async (): Promise<Topics[]> => {
  const snapshot = await getDocs(topicsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Topics));
};

// Xoá danh mục theo id
export const deleteTopics = async (id: string) => {
  await deleteDoc(doc(db, 'topics', id));
};
