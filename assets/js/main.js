$(document).ready(function () {
    // =================================================
    // code for navbar
    // =================================================
    const navbar = $("nav .navbar");

    $("nav .fa-bars").click(function () {
        navbar.slideDown();
    })

    $("nav .fa-xmark").click(function () {
        navbar.slideUp();
    })

    $('nav #dropdown-icon').click(function () {
        $('nav #dropdown-list').toggleClass('hidden');
        $('nav #dropdown-icon').toggleClass('fa-angle-up');
    })

    $('nav #dropdown-nested-icon').click(function () {
        $('nav #dropdown-nested-list').toggleClass('hidden');
        $('nav #dropdown-nested-icon').toggleClass('fa-angle-up');
    })
    $('nav a').click(function () {
        navbar.slideUp();
    })

    // =================================================
    // End code for navbar
    // =================================================

})