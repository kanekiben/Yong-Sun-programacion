let firebaseConfig = {
    apiKey: "AIzaSyCjS4ZV5nVuGXyCe6MxMXOsTZ-qcfk9Ijc",
  authDomain: "yongsun-blog.firebaseapp.com",
  projectId: "yongsun-blog",
  storageBucket: "yongsun-blog.firebasestorage.app",
  messagingSenderId: "132300563258",
  appId: "1:132300563258:web:fa1714d4a459b9fd5ea603"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();