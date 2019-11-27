$(document).ready(function () {
    /*$('p:last').insertBefore('p:first');
    $('#slider').css({marginLeft:'-100%'});
    $('#despues').on('click',function(){
        $('#slider').animate({marginLeft:'-200%'},2000,function(){
            $('p:first').insertAfter('p:last');
            $('#slider').css({marginLeft:'-100%'});
        });
    });
    $('#antes').on('click',function(){
        $('#slider').animate({marginLeft:'0%'},2000,function(){
            $('p:last').insertBefore('p:first');
            $('#slider').css({marginLeft:'-100%'});
        });
    });*/
    $('#slider p:last').prependTo('#slider');
    $('#slider').css({marginLeft:'-100%'});

    $('#despues').on('click',function(){
        $('#slider').animate({marginLeft:'-200%'},2000,function(){
            $('#slider p:first').appendTo('#slider');
            $('#slider').css({marginLeft:'-100%'});
        });
    });
    $('#antes').on('click',function(){
        $('#slider').animate({marginLeft:'0%'},2000,function(){
            $('#slider p:last').prependTo('#slider');
            $('#slider').css({marginLeft:'-100%'});
        });
    });
});