import AdvancedTherapies from './pages/treatment-features/AdvancedTherapies';import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ96xz32U5hkvvWw8qklaZZqgoO5rVSu8",
  authDomain: "healthwith-ai.firebaseapp.com",
  projectId: "healthwith-ai",
  storageBucket: "healthwith-ai.firebasestorage.app",
  messagingSenderId: "999509799563",
  appId: "1:999509799563:web:c0e88324b5388b76145a8e",
  measurementId: "G-5VLKSCGR0N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);