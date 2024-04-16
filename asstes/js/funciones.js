$(document).ready(function() {
    $('#b1').click(function() {
        $('.carousel-item:nth-child(1)').addClass('active');
        $('.carousel-item:nth-child(2)').removeClass('active');
    });
    $('#b2').click(function() {
        $('.carousel-item:nth-child(2)').addClass('active');
        $('.carousel-item:nth-child(1)').removeClass('active');
    });
});
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});
$(document).ready(function(){
    $("#enviarFavoritos").click(function(){
        alert("Fue añadido a tus favoritos...");
    });
});

$(document).ready(function(){
    $("h4:contains('INGREDIENTES'), h4:contains('PREPARACIÓN')").on("dblclick", function(){
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    $(".card-title").click(function() {
        $(this).siblings(".card-text").toggle();
    });

    
    $(".card-img-top").dblclick(function() {
        $(this).siblings(".card-body").find(".card-text").show();
    });
});