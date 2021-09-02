import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZZ4c-gmeJEh9VE7M9loiUsHrL5eDp24A",
  authDomain: "movie-library-e5012.firebaseapp.com",
  databaseURL: "https://movie-library-e5012-default-rtdb.firebaseio.com",
  projectId: "movie-library-e5012",
  storageBucket: "movie-library-e5012.appspot.com",
  messagingSenderId: "987123764512",
  appId: "1:987123764512:web:b7bacf3e0eb2f85fce5b45",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
