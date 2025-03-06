import { db, storage } from "@/firebase/config";
import { 
  collection, 
  query, 
  orderBy, 
  getDocs, 
  doc, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp,
  Timestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { format } from "date-fns";

// Collection name
const COLLECTION_NAME = "blogPosts";

// Type definitions
export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date?: string;
  createdAt?: Date;
  updatedAt?: Date;
  published: boolean;
}

// Get all blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const postsQuery = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(postsQuery);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convert Firestore timestamps to JavaScript Date objects
      const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : null;
      const updatedAt = data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : null;
      
      return {
        id: doc.id,
        ...data,
        createdAt: createdAt,
        updatedAt: updatedAt
      } as BlogPost;
    });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convert Firestore timestamps to JavaScript Date objects
      const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : null;
      const updatedAt = data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : null;
      
      return {
        id: docSnap.id,
        ...data,
        createdAt: createdAt,
        updatedAt: updatedAt
      } as BlogPost;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting blog post:", error);
    throw error;
  }
};

// Create a new blog post
export const createBlogPost = async (blogPost: BlogPost): Promise<BlogPost> => {
  try {
    // Format date for display
    const formattedDate = format(new Date(), "MMMM dd, yyyy");
    
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
    console.error("Error creating blog post:", error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlogPost = async (id: string, blogPost: Partial<BlogPost>): Promise<void> => {
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
    if (blogPost.date !== undefined) updateData.date = blogPost.date;
    
    // Always add the updatedAt timestamp
    updateData.updatedAt = serverTimestamp();
    
    await updateDoc(docRef, updateData);
    
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};

export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const posts = await getBlogPosts();
    return posts.filter(post => post.published);
  } catch (error) {
    console.error("Error getting published blog posts:", error);
    throw error;
  }
};

// Toggle the publish status of a blog post
export const togglePublishStatus = async (id: string, currentStatus: boolean): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const newStatus = !currentStatus;
    
    await updateDoc(docRef, {
      published: newStatus,
      updatedAt: serverTimestamp()
    });
    
    return newStatus;
  } catch (error) {
    console.error("Error toggling publish status:", error);
    throw error;
  }
};

// Upload an image to Firebase Storage and return the download URL
export const uploadImage = async (file: File): Promise<string> => {
  try {
    // Create a unique filename
    const filename = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `blog-images/${filename}`);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
