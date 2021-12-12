$(document).ready(function(){
    
//Descripcion de cada producto:

    //No funciona:

    // function verDescrip(id, lugar){
    //     $.getJSON('../productos.json', function(respuesta, status){
    //         if(status === 'success'){
    //             respuesta.forEach((productos=>{
    //                 if(`${productos.id}`== id){
    //                     lugar.html('');
    //                     lugar.append(`Descripcion del producto: ${productos.descripcion}`);
    //                     lugar.fadeIn().delay(5000).fadeOut();
    //                 } 
    //             }))
    //         }
    //     })
    // }

    // const lugarDesc = $('#mostrarDescripT');
    // $('#descripT').click(verDescrip(1, lugarDesc));

    $('#descripT').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '1'){
                        $('#mostrarDescripT').html('');
                        $('#mostrarDescripT').append(`${productos.descripcion}`);
                        $('#mostrarDescripT').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripB').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '2'){
                        $('#mostrarDescripB').html('');
                        $('#mostrarDescripB').append(`${productos.descripcion}`);
                        $('#mostrarDescripB').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripR').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '3'){
                        $('#mostrarDescripR').html('');
                        $('#mostrarDescripR').append(`${productos.descripcion}`);
                        $('#mostrarDescripR').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripE').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '4'){
                        $('#mostrarDescripE').html('');
                        $('#mostrarDescripE').append(`${productos.descripcion}`);
                        $('#mostrarDescripE').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC1').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '5'){
                        $('#mostrarDescripC1').html('');
                        $('#mostrarDescripC1').append(`${productos.descripcion}`);
                        $('#mostrarDescripC1').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC2').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '6'){
                        $('#mostrarDescripC2').html('');
                        $('#mostrarDescripC2').append(`${productos.descripcion}`);
                        $('#mostrarDescripC2').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC3').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '7'){
                        $('#mostrarDescripC3').html('');
                        $('#mostrarDescripC3').append(`${productos.descripcion}`);
                        $('#mostrarDescripC3').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC4').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '8'){
                        $('#mostrarDescripC4').html('');
                        $('#mostrarDescripC4').append(`${productos.descripcion}`);
                        $('#mostrarDescripC4').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })
})