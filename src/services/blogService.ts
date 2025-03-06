
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
  serverTimestamp,
  Timestamp
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
  createdAt?: Timestamp | Date;
  updatedAt?: Timestamp | Date;
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
      title: blogPost.title,
      excerpt: blogPost.excerpt,
      content: blogPost.content,
      image: blogPost.image,
      category: blogPost.category,
      author: blogPost.author,
      published: blogPost.published,
      date: formattedDate,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), postData);
    
    // Return the new post with the generated ID and JS Date objects for client use
    const returnData: BlogPost = {
      title: blogPost.title,
      excerpt: blogPost.excerpt,
      content: blogPost.content,
      image: blogPost.image,
      category: blogPost.category,
      author: blogPost.author,
      published: blogPost.published,
      id: docRef.id,
      date: formattedDate,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return returnData;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlogPost = async (id: string, blogPost: Partial<BlogPost>) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    // Create update data object without spread operator
    const updateData: any = {};
    
    // Only add fields that are present in blogPost
    if (blogPost.title !== undefined) updateData.title = blogPost.title;
    if (blogPost.excerpt !== undefined) updateData.excerpt = blogPost.excerpt;
    if (blogPost.content !== undefined) updateData.content = blogPost.content;
    if (blogPost.image !== undefined) updateData.image = blogPost.image;
    if (blogPost.category !== undefined) updateData.category = blogPost.category;
    if (blogPost.author !== undefined) updateData.author = blogPost.author;
    if (blogPost.published !== undefined) updateData.published = blogPost.published;
    
    // Always add the updatedAt timestamp
    updateData.updatedAt = serverTimestamp();
    
    await updateDoc(docRef, updateData);
    
    // Return the updated post data with JS Date for client use
    const returnData: BlogPost = {
      ...blogPost as BlogPost,
      id,
      updatedAt: new Date()
    };
    
    return returnData;
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
