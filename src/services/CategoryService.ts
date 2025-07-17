// src/services/categoryService.ts
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';
import type Category from '../types/Category';


const categoryRef = collection(db, 'categories');

// Thêm danh mục
export const addCategory = async (cat: Omit<Category, 'id'>) => {
  const docRef = await addDoc(categoryRef, cat);
  return docRef.id;
};

// Lấy danh sách danh mục
export const getCategories = async (): Promise<Category[]> => {
  const snapshot = await getDocs(categoryRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Category));
};

// Xoá danh mục theo id
export const deleteCategory = async (id: string) => {
  await deleteDoc(doc(db, 'categories', id));
};
