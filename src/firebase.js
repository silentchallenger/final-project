import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ7t-N1FXAniuXiE6PYYwoaHCB69V4GpY",
  authDomain: "lilys-garden-shop.firebaseapp.com",
  projectId: "lilys-garden-shop",
  storageBucket: "lilys-garden-shop.appspot.com",
  messagingSenderId: "78133306519",
  appId: "1:78133306519:web:cbccfec30872f8783035d2"
};

const app = initializeApp(firebaseConfig);

export default app;