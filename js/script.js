$(document).ready(function()  {
        var scrolling=false;
        $(".button-collapse").sideNav();
        $('.slider').slider({
            indicators: 'false',
            transition: 600,
            interval: 4000
        });
        $('ul.tabs').tabs({
            swipeable: 'true'
        });
        $('.parallax').parallax();
        $(window).scroll(function() { // check if scroll event happened
            if ($(document).scrollTop() > 350 & $(document).scrollTop() < 700 ) { // check if user scrolled more than 50 from top of the browser window
                $('#adn').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
                $('#nosotros').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#servicios').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#clientes').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#equipo').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#contacto').css({'border-bottom': '', 'border-bottom-color': ''});
            } else if($(document).scrollTop() > 700 & $(document).scrollTop() < 1150) {
                $('#adn').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#nosotros').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
                $('#servicios').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#clientes').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#equipo').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#contacto').css({'border-bottom': '', 'border-bottom-color': ''});
            } else if($(document).scrollTop() > 1150 & $(document).scrollTop() < 1600) {
                $('#adn').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#nosotros').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#servicios').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
                $('#clientes').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#equipo').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#contacto').css({'border-bottom': '', 'border-bottom-color': ''});
            } else if($(document).scrollTop() > 1600 & $(document).scrollTop() < 2900) {
                $('#adn').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#nosotros').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#servicios').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#clientes').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
                $('#equipo').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#contacto').css({'border-bottom': '', 'border-bottom-color': ''});
            } else if($(document).scrollTop() > 2900 & $(document).scrollTop() < 3500) {
                $('#adn').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#nosotros').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#servicios').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#clientes').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#equipo').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
                $('#contacto').css({'border-bottom': '', 'border-bottom-color': ''});
            } else if($(document).scrollTop() > 3500 & $(document).scrollTop() < 4000) {
                $('#adn').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#nosotros').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#servicios').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#clientes').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#equipo').css({'border-bottom': '', 'border-bottom-color': ''});
                $('#contacto').css({'border-bottom': '7px solid', 'border-bottom-color': '#d8d9de', 'height': '4em'});
            } 
          }); 
    
        $("#adn").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-adn").offset().top},
                'slow');
        });
    
        $("#nosotros").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-nosotros").offset().top},
                'slow');
        });
    
        $("#servicios").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-servicios").offset().top},
                'slow');
        });
    
        $("#clientes").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-colombia").offset().top},
                'slow');
        });
    
        $("#equipo").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-equipo").offset().top},
                'slow');
        });
    
        $("#contacto").click(function() {
            $('html,body').animate({
                scrollTop: $("#show-contacto").offset().top},
                'slow');
        });

});  