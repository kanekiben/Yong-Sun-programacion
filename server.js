const express = require('express');
const  path = require('path');
const fileupload = require('express-fileupload')
const port = process.env.PORT || 4000 

//firebase
var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firebase();

//
let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req,res)=>{
    res.sendFile(path.join(initial_path, "view/index.html"));
});

app.get('/editar', (red, res)=>{
    res.sendFile(path.join(initial_path, "view/editar.html"));
});

//descargar link
app.post('/upload', (req, res)=>{
    let file = req.files.image;
    let date = new Date();
    //nombre img
    let imagename = date.getDate() + date.getTime() + file.name;
    //img descargada path
    let path = 'public/uploads/' + imagename;

    //crear descarga
    file.mv(path, (err, result)=>{
        if(err){
            throw err;
        }else{
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get("/:blog", (req, res)=>{
    res.sendFile(path.join(initial_path, "view/blogs.html"));
} )

app.use((req, res) =>{
    res.json("404");
})

/*app.listen("3000", () => {*/
    console.log("conexion existosa");

});

