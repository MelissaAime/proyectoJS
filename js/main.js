
$(document).ready(function(){

    //Precios actuales:
    const precioTinto = 450;
    const precioBlanco = 350;
    const precioRosado = 400;
    const precioEspumante = 625;
    const precioC1 = 750;
    const precioC2 = 700;
    const precioC3 = 1400;
    const precioC4 = 1100;
    const descuentoAPartirDe = 3000;

    
    //Funcion para cada subtotal:
    function mostrarTotal(cantidad, totalidad, subtotalidad, precio, nombreDeMemoria){
        if(cantidad.val() < 0){
            totalidad.html('');
            totalidad.append(`Ingrese una cantidad válida`);

            //Animacion
            totalidad.fadeIn().delay(1000).fadeOut();
        }else{
            //Mostrar el subtotal
            subtotalidad = cantidad.val() * precio;
            totalidad.html('');
            totalidad.append(`<span> Total: $ </span> <b id="subtotal1"> ${subtotalidad}</b>`);

            //Mostrar cartel si la cant es mayor a cero
            if (cantidad.val()>0){
                $('#toast').html('Se agregó un elemento al carrito');
                $('#toast').fadeIn(500).delay(1000).fadeOut(2000);
            }

            //Animacion
            totalidad.fadeIn().delay(1000).fadeOut();

            //Guardar en memoria
            sessionStorage.setItem(nombreDeMemoria, subtotalidad);
        }
    }

    //Tintos
    const cantTintos = $('#cantVT');
    const agregarCarritoTintos = $('#carritoVT');
    const totalDeTintos = $('#totalTintos');
    const subtotalTintos = cantTintos.val()*precioTinto;
    const nombreDeMemoriaT = 'stTintos';

    agregarCarritoTintos.click(function(){
        mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, precioTinto, nombreDeMemoriaT );
    })
    cantTintos.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, precioTinto, nombreDeMemoriaT );
        }
    })


    //Blancos
    const cantBlancos = $('#cantVB');
    const agregarCarritoBlancos = $('#carritoVB');
    const totalDeBlancos = $('#totalBlancos');
    const subtotalBlancos = cantBlancos.val()*precioBlanco;
    const nombreDeMemoriaB = 'stBlancos';

    agregarCarritoBlancos.click(function(){
        mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, precioBlanco, nombreDeMemoriaB);
    })
    cantBlancos.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, precioBlanco, nombreDeMemoriaB);
        }
    })

    //Rosados
    const cantRosados = $('#cantVR');
    const agregarCarritoRosados = $('#carritoVR');
    const totalDeRosados = $('#totalRosados');
    const subtotalRosados = cantRosados.val()*precioRosado;
    const nombreDeMemoriaR = 'stRosados';

    agregarCarritoRosados.click(function(){
        mostrarTotal(cantRosados,totalDeRosados, subtotalRosados, precioRosado, nombreDeMemoriaR);
    })
    cantRosados.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantRosados,totalDeRosados, subtotalRosados, precioRosado, nombreDeMemoriaR);
        }
    })

    //Espumante
    const cantEspumante = $('#cantVE');
    const agregarCarritoEspumantes = $('#carritoVE');
    const totalDeEspumantes = $('#totalEspumantes');
    const subtotalEspumantes = cantEspumante.val()*precioEspumante;
    const nombreDeMemoriaE = 'stEspumantes';

    agregarCarritoEspumantes.click(function(){
        mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, precioEspumante, nombreDeMemoriaE);
    })
    cantEspumante.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, precioEspumante, nombreDeMemoriaE);
        }
    })

    //Combo1
    const cantCombo1 = $('#cantC1');
    const agregarCarritoCombo1 = $('#carritoC1');
    const totalCombo1 = $('#totalCombo1');
    const subtotalCombo1 = cantCombo1.val()*precioC1;
    const nombreDeMemoriaC1 = 'stCombo1';

    agregarCarritoCombo1.click(function(){
        mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, precioC1, nombreDeMemoriaC1);
    })
    cantCombo1.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, precioC1, nombreDeMemoriaC1);
        }
    })

    //Combo2
    const cantCombo2 = $('#cantC2');
    const agregarCarritoCombo2 = $('#carritoC2');
    const totalCombo2 = $('#totalCombo2');
    const subtotalCombo2 = cantCombo2.val()*precioC2;
    const nombreDeMemoriaC2 = 'stCombo2';

    agregarCarritoCombo2.click(function(){
        mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, precioC2, nombreDeMemoriaC2);
    })
    cantCombo2.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, precioC2, nombreDeMemoriaC2);
        }
    })

    //Combo3
    const cantCombo3 = $('#cantC3');
    const agregarCarritoCombo3 = $('#carritoC3');
    const totalCombo3 = $('#totalCombo3');
    const subtotalCombo3 = cantCombo3.val()*precioC3;
    const nombreDeMemoriaC3 = 'stCombo3';

    agregarCarritoCombo3.click(function(){
        mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, precioC3, nombreDeMemoriaC3);
    })
    cantCombo3.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, precioC3, nombreDeMemoriaC3);
        }
    })

    //Combo4
    const cantCombo4 = $('#cantC4');
    const agregarCarritoCombo4 = $('#carritoC4');
    const totalCombo4 = $('#totalCombo4');
    const subtotalCombo4 = cantCombo4.val()*precioC4;
    const nombreDeMemoriaC4 = 'stCombo4';

    agregarCarritoCombo4.click(function(){
        mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, precioC4, nombreDeMemoriaC4);
    })
    cantCombo4.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, precioC4, nombreDeMemoriaC4);
        }
    })



    //TOTAL:
    //Cantidad total
    function total(T, B, R, E, c1, c2, c3, c4) {
        return (T+B+R+E+c1+c2+c3+c4);
    }
    //Total con descuento
    const descQuince = $('#totalQuince');
    function descuentoQuince (resultado){
        return (resultado*0.85);
    }

    $('#botonOcultar').hide();
    $('#finalizarCompra').hide();
    $('#comprado').hide();

    //Boton Mostrar total
    const totalTotal = $('#total');
    totalTotal.click(function(){
        $('#subNav').css("background-color", "white");
        $('#subNav').show();
        $('#total').hide();
        $('#botonTerminar').append(`<div id="finCompra"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Finalizar compra:</button></div>`);


        $('#botonOcultar').show();

            //Boton Vaciar carrito:
            $('#estiloBotonOcultar').click(function(){

                $('#subNav').hide();
                $('#finCompra').hide();
                $('#botonTerminar').show();
                $('#total').show();
                $('#total').html('');
                $('#total').append(`<div id="total">Mostrar total:</div>`);
            })

        //Cantidad que se selecciona
        const totalTinto = parseInt(sessionStorage.getItem('stTintos'))||0;
        const totalBlanco = parseInt(sessionStorage.getItem('stBlancos'))||0;
        const totalRosado = parseInt(sessionStorage.getItem('stRosados'))||0;
        const totalEspumante = parseInt(sessionStorage.getItem('stEspumantes'))||0;
        const totalComboUno = parseInt(sessionStorage.getItem('stCombo1'))||0;
        const totalComboDos = parseInt(sessionStorage.getItem('stCombo2'))||0;
        const totalComboTres = parseInt(sessionStorage.getItem('stCombo3'))||0;
        const totalComboCuatro = parseInt(sessionStorage.getItem('stCombo4'))||0;  

        //Resultado: precio total
        const resultado = total ((totalTinto), (totalBlanco), (totalRosado), (totalEspumante), (totalComboUno), (totalComboDos), (totalComboTres), (totalComboCuatro) );

        $('#precioTotal').html('');
        $('#precioTotal').append(`<div><img src="https://img.icons8.com/material-outlined/000000/shopping-cart--v1.png"/> Total de la compra: $ ${resultado}</div>`);
    
        const descuento15 = descuentoQuince (resultado); 

        //Ver si aplica el descuento o no
        if(resultado > descuentoAPartirDe){
            descQuince.html('');
            descQuince.append(`<div><img src="https://img.icons8.com/fluency-systems-regular/000000/discount.png"/> Total con descuento: $ ${descuento15}</div>`);
        } else{
            descQuince.html('')
        }

        
        //Finalizar compra:
        $('#finCompra').click(function(){
            $('#finalizarCompra').show();
            
            function resumenDeCompra(totalAValidar, cant, agregarcant, precio, agregarprecio, borrar){
                if (totalAValidar > 0){
                    cant.append(`${agregarcant}`);
                    precio.append(`${agregarprecio}`);
                } else{
                    borrar.hide();
                }
            }

            resumenDeCompra(totalTinto, $('#cantP1'), cantTintos.val(), $('#precioP1'), totalTinto, $('#tinto'));
            resumenDeCompra(totalBlanco, $('#cantP2'), cantBlancos.val(), $('#precioP2'), totalBlanco, $('#blanco'));
            resumenDeCompra(totalRosado, $('#cantP3'), cantRosados.val(), $('#precioP3'), totalRosado, $('#rosado'));
            resumenDeCompra(totalEspumante, $('#cantP4'), cantEspumante.val(), $('#precioP4'), totalEspumante, $('#espumante'));
            resumenDeCompra(totalComboUno, $('#cantP5'), cantCombo1.val(), $('#precioP5'), totalComboUno, $('#combouno'));
            resumenDeCompra(totalComboDos, $('#cantP6'), cantCombo2.val(), $('#precioP6'), totalComboDos, $('#combodos'));
            resumenDeCompra(totalComboTres, $('#cantP7'), cantCombo3.val(), $('#precioP7'), totalComboTres, $('#combotres'));
            resumenDeCompra(totalComboCuatro, $('#cantP8'), cantCombo4.val(), $('#precioP8'), totalComboCuatro, $('#combocuatro'));

            $('#totalFinal').append(resultado);

            if(resultado > descuentoAPartirDe){
                $('#totalAPagar').append(descuento15);
               
            } else{
                $('#totalConDescuento').hide();
            }

        
            //Boton Comprar deshabilitado
            if (resultado <= 0){
                $('#compraFinalizada').prop('disabled', true);
            }
            
        })

            //Comprar:
            $('#compraFinalizada').click(function(){
                $('.modal-title').html('');
                $('.modal-title').prepend('Compra realizada con éxito');
                $('#compraFinalizada').hide();
                $('#cerrar').html('');
                $('#cerrar').append('<p id="cerrarCompra">Cerrar</p>');

                    //Boton Cerrar: recargar página
                    $('#cerrarCompra').click(function(){
                        location.reload();
                    })

            })
        
        
        //Borrar los valores luego de hacer click
        totalDeTintos.html('');
        totalDeBlancos.html('');
        totalDeRosados.html('');
        totalDeEspumantes.html('');
        totalCombo1.html('');
        totalCombo2.html('');
        totalCombo3.html('');
        totalCombo4.html('');
        
        //Borrar el session storage
        sessionStorage.clear();
    })



//Fin del ready
})