import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9hUg2JaTHDpGlHdq4YJCJXBVJqaXPixg",
    authDomain: "cloud-messaging-b16a8.firebaseapp.com",
    projectId: "cloud-messaging-b16a8",
    storageBucket: "cloud-messaging-b16a8.appspot.com",
    messagingSenderId: "898992925581",
    appId: "1:898992925581:web:6fcd25e9a15e7f5ca0abc4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase