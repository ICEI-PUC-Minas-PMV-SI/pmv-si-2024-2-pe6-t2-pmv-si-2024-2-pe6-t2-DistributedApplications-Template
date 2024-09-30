import 'dotenv/config'
import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';
import {getAuth as getAdminAuth} from 'firebase-admin/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from'firebase/auth';

admin.initializeApp({
  credential: admin.credential.cert('classe-a-firebase-adm.json'),
});

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);

getAdminAuth().projectConfigManager().updateProjectConfig(
  {
    emailPrivacyConfig: {
      enableImprovedEmailPrivacy: false,
    },
  }
);

export {
  admin,
  firebase,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
};