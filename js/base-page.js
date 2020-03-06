$(document).ready(function(){
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
    // tooltip init
    $('[data-toggle="tooltip"]').tooltip();
})

$(".card-btn").click(function(e){
    var cardOpenClass = "fas fa-plus ml-auto"
    var cardClosedClass = "fas fa-plus ml-auto"
    var currentClass = $(this).find("i").attr("class")
    if (currentClass == cardOpenClass){
        $(this).find("i").attr("class", cardClosedClass)
    } else {
        $(this).find("i").attr("class", cardOpenClass)
    }
});


