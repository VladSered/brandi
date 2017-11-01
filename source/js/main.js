$(document).ready(function(){
    $('#some-slider-one').owlCarousel({
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            700:{
                items:2
            },
            1170:{
                items: 3
            }
        } 
    });
    $('#some-slider-two').owlCarousel({
        loop:true,
        items: 4,
        margin:30,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:2
            },
            1170:{
                items:4
            }
        }
    });
    $('#some-slider-three').owlCarousel({
        loop:true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 4000,
    });
   

    
    /*---change color---*/ 
    // $('.team__content').on('mouseover', function() {
    //     $(this).closest('.team__list').find('.team__name').css('color','#4ec8b0')
    //     });

    //  $('.team__content').on('mouseleave', function() {
    //     $(this).closest('.team__list').find('.team__name').css('color','#062033')
    //     });
});