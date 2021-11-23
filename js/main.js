
function mostrarTotal(cantidad, totalidad, subtotalidad, precio, nombreDeMemoria){
    if(cantidad.value < 0){
        totalidad.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalidad = cantidad.value*precio;
        totalidad.innerHTML = `<span> Total: $ </span> <b id="subtotal1"> ${subtotalidad}</b>`;
        sessionStorage.setItem(nombreDeMemoria, subtotalidad);
    }
}


//Card vino tinto
const cantTintos = document.getElementById('cantVT');
const agregarCarritoTintos = document.getElementById('carritoVT');
const totalDeTintos = document.getElementById('totalTintos');
let subtotalTintos = cantTintos.value*450;
let nombreDeMemoriaT = 'stTintos';

//al hacer click
agregarCarritoTintos.addEventListener('click', function(){
    mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, 450, nombreDeMemoriaT);
})

//al hacer enter
cantTintos.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, 450, nombreDeMemoriaT);
    }
})



//Card vino blanco
const cantBlancos = document.getElementById('cantVB');
const agregarCarritoBlancos = document.getElementById('carritoVB');
const totalDeBlancos = document.getElementById('totalBlancos');
let subtotalBlancos = cantBlancos.value*350;
let nombreDeMemoriaB = 'stBlancos';

agregarCarritoBlancos.addEventListener('click', function(){
    mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, 350,  nombreDeMemoriaB);
})
cantBlancos.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, 350,  nombreDeMemoriaB);
    }
})



//Card vino rosado
const cantRosados = document.getElementById('cantVR');
const agregarCarritoRosados = document.getElementById('carritoVR');
const totalDeRosados = document.getElementById('totalRosados');
let subtotalRosados = cantRosados.value*400;
let nombreDeMemoriaR = 'stRosados';

agregarCarritoRosados.addEventListener('click', function(){
    mostrarTotal(cantRosados, totalDeRosados, subtotalRosados, 400,  nombreDeMemoriaR);
})
cantRosados.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantRosados, totalDeRosados, subtotalRosados, 400,  nombreDeMemoriaR);
    }
})



//Card vino espumante
const cantEspumante = document.getElementById('cantVE');
const agregarCarritoEspumantes = document.getElementById('carritoVE');
const totalDeEspumantes = document.getElementById('totalEspumantes');
let subtotalEspumantes = cantEspumante.value*625;
let nombreDeMemoriaE = 'stEspumantes'

agregarCarritoEspumantes.addEventListener('click', function(){
    mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, 600, nombreDeMemoriaE);
})
cantEspumante.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, 600, nombreDeMemoriaE);
    }
})



//Card combo 1
const cantCombo1 = document.getElementById('cantC1');
const agregarCarritoCombo1 = document.getElementById('carritoC1');
const totalCombo1 = document.getElementById('totalCombo1');
let subtotalCombo1 = cantCombo1.value*750;
let nombreDeMemoriaC1 = 'stCombo1'

agregarCarritoCombo1.addEventListener('click', function(){
    mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, 750, nombreDeMemoriaC1);
})
cantCombo1.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, 750, nombreDeMemoriaC1);
    }
})



//Card combo 2
const cantCombo2 = document.getElementById('cantC2');
const agregarCarritoCombo2 = document.getElementById('carritoC2');
const totalCombo2 = document.getElementById('totalCombo2');
let subtotalCombo2 = cantCombo2.value*700;
let nombreDeMemoriaC2 = 'stCombo2';

agregarCarritoCombo2.addEventListener('click', function(){
    mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, 700, nombreDeMemoriaC2);
})
cantCombo2.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, 700, nombreDeMemoriaC2);
    }
})



//Card combo 3
const cantCombo3 = document.getElementById('cantC3');
const agregarCarritoCombo3 = document.getElementById('carritoC3');
const totalCombo3 = document.getElementById('totalCombo3');
let subtotalCombo3 = cantCombo3.value*1400;
let nombreDeMemoriaC3 = 'stCombo3';

agregarCarritoCombo3.addEventListener('click', function(){
    mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, 1400, nombreDeMemoriaC3);
})
cantCombo3.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, 1400, nombreDeMemoriaC3);
    }
})



//Card combo 4
let cantCombo4 = document.getElementById('cantC4');
let agregarCarritoCombo4 = document.getElementById('carritoC4');
let totalCombo4 = document.getElementById('totalCombo4');
let subtotalCombo4 = cantCombo4.value*1100;
let nombreDeMemoriaC4 = 'stCombo4'

agregarCarritoCombo4.addEventListener('click', function(){
    mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, 1100, nombreDeMemoriaC4);
})
cantCombo4.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, 1100, nombreDeMemoriaC4);
    }
})


//Cantidad total
const totalTotal = document.getElementById("total");
function total(T, B, R, E, c1, c2, c3, c4) {
    return (T+B+R+E+c1+c2+c3+c4);
}

//Descuento
const descQuince = document.getElementById("totalQuince");
function descuentoQuince (resultado){
    return (resultado*0.85);
}

//Mostrar el total al hacer click
totalTotal.addEventListener('click', function(){
    const totalTinto = parseInt(sessionStorage.getItem('stTintos'))||0;
    const totalBlanco = parseInt(sessionStorage.getItem('stBlancos'))||0;
    const totalRosado = parseInt(sessionStorage.getItem('stRosados'))||0;
    const totalEspumante = parseInt(sessionStorage.getItem('stEspumantes'))||0;
    const totalComboUno = parseInt(sessionStorage.getItem('stCombo1'))||0;
    const totalComboDos = parseInt(sessionStorage.getItem('stCombo2'))||0;
    const totalComboTres = parseInt(sessionStorage.getItem('stCombo3'))||0;
    const totalComboCuatro = parseInt(sessionStorage.getItem('stCombo4'))||0;  
    const resultado = total ((totalTinto), (totalBlanco), (totalRosado), (totalEspumante), (totalComboUno), (totalComboDos), (totalComboTres), (totalComboCuatro) );

    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = `<img src="https://img.icons8.com/material-outlined/000000/shopping-cart--v1.png"/> Total de la compra: $ ${resultado}`;
   
    const descuento15 = descuentoQuince (resultado); 

    if(resultado > 3000){
        descQuince.innerHTML = `<img src="https://img.icons8.com/fluency-systems-regular/000000/discount.png"/> Total con descuento: $ ${descuento15}`;
    } 

    //Borrar los valores luego de hacer click
    sessionStorage.clear();
})

