
//Card vino tinto
const cantTintos = document.getElementById('cantVT');
const agregarCarritoTintos = document.getElementById('carritoVT');
const totalDeTintos = document.getElementById('totalTintos');
let subtotalTintos = cantTintos.value*450;

//al hacer click
agregarCarritoTintos.addEventListener('click', function(){
    if (cantTintos.value < 0){
        totalDeTintos.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalTintos = cantTintos.value*450;
        totalDeTintos.innerHTML= `<span> Total: $ </span> <b id="subtotal1"> ${subtotalTintos}</b>`;
        sessionStorage.setItem('stTintos', subtotalTintos);
    }
})
//al hacer enter
cantTintos.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantTintos.value < 0){
            totalDeTintos.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalTintos = cantTintos.value*450;
            totalDeTintos.innerHTML= `<span> Total: $ </span> <b id="subtotal1"> ${subtotalTintos}</b>`;
            sessionStorage.setItem('stTintos', subtotalTintos);
        }
    }
})



//Card vino blanco
const cantBlancos = document.getElementById('cantVB');
const agregarCarritoBlancos = document.getElementById('carritoVB');
const totalDeBlancos = document.getElementById('totalBlancos');
let subtotalBlancos = cantBlancos.value*350;

agregarCarritoBlancos.addEventListener('click', function(){
    if (cantBlancos.value < 0){
        totalDeBlancos.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalBlancos = cantBlancos.value*350;
        totalDeBlancos.innerHTML= `<span> Total: $ </span> <b id="subtotal2"> ${subtotalBlancos}</b>`;
        sessionStorage.setItem('stBlancos', subtotalBlancos);
    }
})

cantBlancos.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantBlancos.value < 0){
            totalDeBlancos.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalBlancos = cantBlancos.value*350;
            totalDeBlancos.innerHTML= `<span> Total: $ </span> <b id="subtotal2"> ${subtotalBlancos}</b>`;
            sessionStorage.setItem('stBlancos', subtotalBlancos);
        }
    }
})



//Card vino rosado
const cantRosados = document.getElementById('cantVR');
const agregarCarritoRosados = document.getElementById('carritoVR');
const totalDeRosados = document.getElementById('totalRosados');
let subtotalRosados = cantRosados.value*400;

agregarCarritoRosados.addEventListener('click', function(){
    if (cantRosados.value < 0){
        totalDeRosados.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalRosados = cantRosados.value*400;
        totalDeRosados.innerHTML= `<span> Total: $ </span> <b id="subtotal3"> ${subtotalRosados}</b>`;
        sessionStorage.setItem('stRosados', subtotalRosados);
    }
})
cantRosados.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantRosados.value < 0){
            totalDeRosados.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalRosados = cantRosados.value*400;
            totalDeRosados.innerHTML= `<span> Total: $ </span> <b id="subtotal3"> ${subtotalRosados}</b>`;
            sessionStorage.setItem('stRosados', subtotalRosados);
        }
    }
})



//Card vino espumante
const cantEspumante = document.getElementById('cantVE');
const agregarCarritoEspumantes = document.getElementById('carritoVE');
const totalDeEspumantes = document.getElementById('totalEspumantes');
let subtotalEspumantes = cantEspumante.value*625;

agregarCarritoEspumantes.addEventListener('click', function(){
    if (cantEspumante.value < 0){
        totalDeEspumantes.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalEspumantes = cantEspumante.value*625;
        totalDeEspumantes.innerHTML= `<span> Total: $ </span> <b id="subtotal4"> ${subtotalEspumantes}</b>`;
        sessionStorage.setItem('stEspumantes', subtotalEspumantes);
    }
})
cantEspumante.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantEspumante.value < 0){
            totalDeEspumantes.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalEspumantes = cantEspumante.value*625;
            totalDeEspumantes.innerHTML= `<span> Total: $ </span> <b id="subtotal4"> ${subtotalEspumantes}</b>`;
            sessionStorage.setItem('stEspumantes', subtotalEspumantes);
        }
    }
})



//Card combo 1
const cantCombo1 = document.getElementById('cantC1');
const agregarCarritoCombo1 = document.getElementById('carritoC1');
const totalCombo1 = document.getElementById('totalCombo1');
let subtotalCombo1 = cantCombo1.value*750;

agregarCarritoCombo1.addEventListener('click', function(){
    if (cantCombo1.value < 0){
        totalCombo1.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalCombo1 = cantCombo1.value*750;
        totalCombo1.innerHTML= `<span> Total: $ </span> <b id="subtotal5"> ${subtotalCombo1}</b>`;
        sessionStorage.setItem('stCombo1', subtotalCombo1);
    }
})
cantCombo1.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantCombo1.value < 0){
            totalCombo1.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalCombo1 = cantCombo1.value*750;
            totalCombo1.innerHTML= `<span> Total: $ </span> <b id="subtotal5"> ${subtotalCombo1}</b>`;
            sessionStorage.setItem('stCombo1', subtotalCombo1);
        }
    }
})



//Card combo 2
const cantCombo2 = document.getElementById('cantC2');
const agregarCarritoCombo2 = document.getElementById('carritoC2');
const totalCombo2 = document.getElementById('totalCombo2');
let subtotalCombo2 = cantCombo2.value*700;

agregarCarritoCombo2.addEventListener('click', function(){
    if (cantCombo2.value < 0){
        totalCombo2.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalCombo2 = cantCombo2.value*700;
        totalCombo2.innerHTML= `<span> Total: $ </span> <b id="subtotal6"> ${subtotalCombo2}</b>`;
        sessionStorage.setItem('stCombo2', subtotalCombo2);
    }
})
cantCombo2.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantCombo2.value < 0){
            totalCombo2.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalCombo2 = cantCombo2.value*700;
            totalCombo2.innerHTML= `<span> Total: $ </span> <b id="subtotal6"> ${subtotalCombo2}</b>`;
            sessionStorage.setItem('stCombo2', subtotalCombo2);
        }
    }
})



//Card combo 3
const cantCombo3 = document.getElementById('cantC3');
const agregarCarritoCombo3 = document.getElementById('carritoC3');
const totalCombo3 = document.getElementById('totalCombo3');
let subtotalCombo3 = cantCombo3.value*1400;

agregarCarritoCombo3.addEventListener('click', function(){
    if (cantCombo3.value < 0){
        totalCombo3.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalCombo3 = cantCombo3.value*1400;
        totalCombo3.innerHTML= `<span> Total: $ </span> <b id="subtotal7"> ${subtotalCombo3}</b>`;
        sessionStorage.setItem('stCombo3', subtotalCombo3);
    }
})
cantCombo3.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantCombo3.value < 0){
            totalCombo3.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalCombo3 = cantCombo3.value*1400;
            totalCombo3.innerHTML= `<span> Total: $ </span> <b id="subtotal7"> ${subtotalCombo3}</b>`;
            sessionStorage.setItem('stCombo3', subtotalCombo3);
        }
    }
})



//Card combo 4
let cantCombo4 = document.getElementById('cantC4');
let agregarCarritoCombo4 = document.getElementById('carritoC4');
let totalCombo4 = document.getElementById('totalCombo4');
let subtotalCombo4 = cantCombo4.value*1100;

agregarCarritoCombo4.addEventListener('click', function(){
    if (cantCombo4.value < 0){
        totalCombo4.innerHTML= 'Ingrese una cantidad válida';
    }else{
        subtotalCombo4 = cantCombo4.value*1100;
        totalCombo4.innerHTML= `<span> Total: $ </span> <b id="subtotal8"> ${subtotalCombo4}</b>`;
        sessionStorage.setItem('stCombo4', subtotalCombo4);
    }
})
cantCombo4.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        if (cantCombo4.value < 0){
            totalCombo4.innerHTML= 'Ingrese una cantidad válida';
        }else{
            subtotalCombo4 = cantCombo4.value*1100;
            totalCombo4.innerHTML= `<span> Total: $ </span> <b id="subtotal8"> ${subtotalCombo4}</b>`;
            sessionStorage.setItem('stCombo4', subtotalCombo4);
        }
    }
})



//Gastos totales como números
const totalTinto = parseInt(sessionStorage.getItem('stTintos'));
const totalBlanco = parseInt(sessionStorage.getItem('stBlancos'));
const totalRosado = parseInt(sessionStorage.getItem('stRosados'));
const totalEspumante = parseInt(sessionStorage.getItem('stEspumantes'));
const totalComboUno = parseInt(sessionStorage.getItem('stCombo1'));
const totalComboDos = parseInt(sessionStorage.getItem('stCombo2'));
const totalComboTres = parseInt(sessionStorage.getItem('stCombo3'));
const totalComboCuatro = parseInt(sessionStorage.getItem('stCombo4'));



//Cantidad total
function total(T, B, R, E, c1, c2, c3, c4) {
    return (T+B+R+E+c1+c2+c3+c4);
}
const resultado = total ((totalTinto), (totalBlanco), (totalRosado), (totalEspumante), (totalComboUno), (totalComboDos), (totalComboTres), (totalComboCuatro) );
console.log(typeof resultado);//Chequeo: número

const totalTotal = document.getElementById("total");
const precioTotal = document.getElementById("precioTotal");


//Descuento del 15%
function descuentoQuince (resultado){
    return (resultado*0.85);
}
const descuento15 = descuentoQuince (resultado); 
const descQuince = document.getElementById("totalQuince");



//Mostrar el total al hacer click en el boton Total
totalTotal.addEventListener('click', function(){
    precioTotal.innerHTML = `<img src="https://img.icons8.com/material-outlined/000000/shopping-cart--v1.png"/> Total de la compra: $ ${resultado}`;
    if(resultado > 3000){
        descQuince.innerHTML = `<img src="https://img.icons8.com/fluency-systems-regular/000000/discount.png"/> Total con descuento: $ ${descuento15}`;
    } 
})





