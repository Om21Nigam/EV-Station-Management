import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_APIKEY,
  authDomain: import.meta.env.VITE_BASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_BASE_PROJECTID,
  storageBucket: import.meta.env.VITE_BASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_MESSAGESENDERID,
  appId: import.meta.env.VITE_BASE_APPID,
  measurementId: import.meta.env.VITE_BASE_MEASUREMENTID
};

export default firebaseConfig;


// Initialize Firebase
export const app = initializeApp(firebaseConfig);