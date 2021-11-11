import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCoN8Fl4UKuGY09Wo8OWZWz0obRCvohPp0',
  authDomain: 'tesla-clone-53ae6.firebaseapp.com',
  projectId: 'tesla-clone-53ae6',
  storageBucket: 'tesla-clone-53ae6.appspot.com',
  messagingSenderId: '708411300205',
  appId: '1:708411300205:web:9da906bc2effc486b3a264',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
