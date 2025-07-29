// src/services/categoryService.ts
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';
const topicsRef = collection(db, 'topics');
import type Topic from '../types/Topic';
// Thêm danh mục
export const addTopic = async (cat: Omit<Topic, 'id'>) => {
  const docRef = await addDoc(topicsRef, cat);
  return docRef.id;
};

// Lấy danh sách danh mục
export const getTopics = async (): Promise<Topic[]> => {
  const snapshot = await getDocs(topicsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Topic));
};

// Xoá danh mục theo id
export const deleteTopic = async (id: string) => {
  await deleteDoc(doc(db, 'topics', id));
};
