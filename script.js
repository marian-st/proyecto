
const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonResumen = document.getElementById('resumen');
const botonBorrar = document.getElementById('borrar');
const pimporteTotal = document.getElementById('pimporteTotal');

function totalPagar(){
    let totalValor = (cantidad.value) * valorTicket;
    if(categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    } 
    else if(categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if(categoria.value == 3){
	    totalValor = totalValor - (totalValor * descuentoJunior);  
    } 
    pimporteTotal.innerHTML = `Total a pagar : $` + totalValor;
}

botonResumen.addEventListener('click',totalPagar);
 
botonBorrar.addEventListener('click',()=>{
    pimporteTotal.innerHTML = `Total a pagar:`
})