$(document).ready(function(){
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
    // tooltip init
    $('[data-toggle="tooltip"]').tooltip();
})
