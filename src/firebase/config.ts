
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6JL-H1rP2_W-IA7VXqSm0F-UoR0IoRRk",
  authDomain: "agenticnex-website.firebaseapp.com",
  projectId: "agenticnex-website",
  storageBucket: "agenticnex-website.appspot.com",
  messagingSenderId: "412394559923",
  appId: "1:412394559923:web:e3d3bcaa18eee5e8ed5f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
export default app;
