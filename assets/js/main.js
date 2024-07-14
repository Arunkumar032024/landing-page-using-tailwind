$(document).ready(function(){
    const barsIcon = $("nav .fa-bars");
    const xmarkIcon = $("nav .fa-xmark");
    const navbar = $("nav .navbar");
    barsIcon.click(function(){
        navbar.slideDown();
    })
    xmarkIcon.click(function(){
        navbar.slideUp();
    })

})