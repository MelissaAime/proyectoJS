$(document).ready(function(){

//Filtrado de productos:

    //Ver todos los productos
    $('#verTodo').click(function(){
        $('#cardOne.col').fadeIn();
        $('#cardTwo.col').fadeIn();
        $('#cardThree.col').fadeIn();
        $('#cardFour.col').fadeIn();
        $('#cardFive.col').fadeIn();
        $('#cardSix.col').fadeIn();
        $('#cardSeven.col').fadeIn();
        $('#cardEight.col').fadeIn();
    })

    //Ver tintos
    $('#verTinto').click(function(){
        $('#cardOne.col').fadeIn();
        $('#cardTwo.col').fadeOut();
        $('#cardThree.col').fadeOut();
        $('#cardFour.col').fadeOut();
        $('#cardFive.col').fadeIn();
        $('#cardSix.col').fadeOut();
        $('#cardSeven.col').fadeOut();
        $('#cardEight.col').fadeIn();
    })

    //Ver blancos
    $('#verBlanco').click(function(){
        $('#cardOne.col').fadeOut();
        $('#cardTwo.col').fadeIn();
        $('#cardThree.col').fadeOut();
        $('#cardFour.col').fadeOut();
        $('#cardFive.col').fadeIn();
        $('#cardSix.col').fadeIn();
        $('#cardSeven.col').fadeOut();
        $('#cardEight.col').fadeIn();
    })

    //Ver rosados
    $('#verRosado').click(function(){
        $('#cardOne.col').fadeOut();
        $('#cardTwo.col').fadeOut();
        $('#cardThree.col').fadeIn();
        $('#cardFour.col').fadeOut();
        $('#cardFive.col').fadeOut();
        $('#cardSix.col').fadeIn();
        $('#cardSeven.col').fadeOut();
        $('#cardEight.col').fadeIn();
    })

    //Ver Espumantes
    $('#verEspumante').click(function(){
        $('#cardOne.col').fadeOut();
        $('#cardTwo.col').fadeOut();
        $('#cardThree.col').fadeOut();
        $('#cardFour.col').fadeIn();
        $('#cardFive.col').fadeOut();
        $('#cardSix.col').fadeOut();
        $('#cardSeven.col').fadeIn();
        $('#cardEight.col').fadeOut();
    })

    //Ver solo los combos
    $('#verCombo').click(function(){
        $('#cardOne.col').fadeOut();
        $('#cardTwo.col').fadeOut();
        $('#cardThree.col').fadeOut();
        $('#cardFour.col').fadeOut();
        $('#cardFive.col').fadeIn();
        $('#cardSix.col').fadeIn();
        $('#cardSeven.col').fadeIn();
        $('#cardEight.col').fadeIn();
    })


//Fin del ready
})