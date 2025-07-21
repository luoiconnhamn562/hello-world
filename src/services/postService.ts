import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Post } from '../types/Post';

const postCollection = collection(db, 'posts');

export const addPost = async (post: Post) => {
  await addDoc(postCollection, post);
};

export const getAllPosts = async () => {
  const snapshot = await getDocs(postCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[];
};

export const deletePost = async (id: string) => {
  await deleteDoc(doc(postCollection, id));
};
