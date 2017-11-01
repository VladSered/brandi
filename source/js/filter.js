/*---mixitup---*/ 
var portfolioEl = document.querySelector('.portfolio');
var mixer = mixitup(portfolioEl);

/*---content active---*/ 
$(".controls button").click(function() {
    $(".controls button").removeClass("control--active");
    $(this).addClass("control--active");
});