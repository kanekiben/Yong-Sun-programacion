
function menu(){
     const bontonlenu = document.querySelector(".nav_img");
     const loco = document.querySelector(".nav_a");
     const bontonsalir = document.querySelector(".nav_salir")

    bontonlenu.addEventListener("click",()=>{
        loco.classList.add('nav_a--show');
     });

     bontonsalir.addEventListener("click",()=>{
        loco.classList.remove('nav_a--show')
     });
};

 


menu();