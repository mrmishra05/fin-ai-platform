// frontend/firebaseConfig.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔁 Replace these with your own Firebase project credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...include other config properties as needed
};

// ✅ Prevent multiple initializations during Hot Reload
const app = !getApps().length ? initializeApp(firebaseConfig)

