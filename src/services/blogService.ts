
import { db, storage } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  orderBy, 
  where,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export type BlogPost = {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date?: string;
  published: boolean;
  createdAt?: any;
  updatedAt?: any;
};

const COLLECTION_NAME = 'blogPosts';

// Get all blog posts
export const getBlogPosts = async (publishedOnly: boolean = false) => {
  try {
    let q;
    if (publishedOnly) {
      q = query(
        collection(db, COLLECTION_NAME), 
        where('published', '==', true),
        orderBy('createdAt', 'desc')
      );
    } else {
      q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc')
      );
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogPost = async (id: string) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost;
    } else {
      throw new Error('Blog post not found');
    }
  } catch (error) {
    console.error('Error getting blog post:', error);
    throw error;
  }
};

// Create a new blog post
export const createBlogPost = async (blogPost: BlogPost) => {
  try {
    // Format today's date as a string
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Add timestamps and formatted date
    const postData = {
      ...blogPost,
      date: formattedDate,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), postData);
    return {
      id: docRef.id,
      ...postData
    };
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlogPost = async (id: string, blogPost: Partial<BlogPost>) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...blogPost,
      updatedAt: serverTimestamp()
    });
    
    return {
      id,
      ...blogPost
    };
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id: string) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

// Toggle publish status
export const togglePublishStatus = async (id: string, currentStatus: boolean) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      published: !currentStatus,
      updatedAt: serverTimestamp()
    });
    return !currentStatus;
  } catch (error) {
    console.error('Error toggling publish status:', error);
    throw error;
  }
};

// Upload an image to Firebase Storage and get the URL
export const uploadImage = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
