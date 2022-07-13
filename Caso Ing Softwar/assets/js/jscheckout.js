let contador = 0;

const valor = document.querySelectorAll('#valor');
const boton = document.querySelectorAll('.boton');

botones.forEach(boton =>{
    boton.addEventListener('click', function(e) {

        if(estilos.contains('entry value-minus')){
            contador--;
        }
        else if(estilos.contains('entry value-plus active')){
            contador++;
        }
        else{
            contador=0;
        }
            valor.textContent =contador;
    })
})
