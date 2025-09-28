(function(){
   const cambiar = [...document.querySelectorAll('.cambio')];
    const buttonNext = document.querySelector('#new');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.cambio--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        cambiar[Number(currentTestimony)-1].classList.remove('cambio--show');
        if(value === cambiar.length+1 || value === 0){
            value = value === 0 ? cambiar.length  : 1;
        }

        cambiar[value-1].classList.add('cambio--show');

    }

})();
    