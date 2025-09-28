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



const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}