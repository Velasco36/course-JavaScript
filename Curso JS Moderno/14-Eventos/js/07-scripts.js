
const carDiv = document.querySelector('.card');


carDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en TItulo');
    }
    
    if(e.target.classList.contains('precio')){
        console.log('Diste click en Precio');
    }
    
    if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
    
});
