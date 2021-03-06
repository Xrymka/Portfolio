$(function() {
    
    /* Filter
    ====================== */
    
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault(); 
        
        let cat = $(this).data('filter');
        
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        }
        
        else {
            
            $("[data-cat]").each(function() {
            
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                }

                else {
                    $(this).removeClass('hide');
                }
            }); 
            
        }
        
    }); 
    
    
    /* Smooth Scroll
    ====================== */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 140;

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
        
    });

    /* Print
    ====================== */
    $('#print').on("click", function() {
        
        let body = $('body').html(),
            el = $('.print');

        $('body').html(el);
        window.print();

        $('body').html(body);

    });
    
    
    /* Modal
    ====================== */
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault(); 
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)" 
        }); 
        }, 300);
        
        $('[data-slider="slick"]').slick('setPosition');

    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParents = $this.parents('.modal');
        
        modalParents.find(".modal__dialog").css({
            transform: "rotateX(90deg)" 
        }); 
        
        setTimeout(function() {
            modalParents.removeClass('show');
            $("body").removeClass('no-scroll'); 
        }, 300);

    });
    
    $(".modal").on("click", function(event) {
        let $this = $(this);
        
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)" 
        }); 
        
        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll'); 
        }, 300);

    });
    
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    
    /* Slider: https://kenwheeler.github.io/slick/
    ====================== */

    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
    
    $('.slickPrev').on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickPrev");
    });
    
    $('.slickNext').on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickNext");
    });
    
    
    /* Mobile Nav
    ====================== */
    
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        nav.toggleClass("show");
    });
    
    $("body").on("click", function(event) {
    
        if (! navToggle.is(event.target) && navToggle.has(event.target).length === 0 &&
            ! nav.is(event.target) && nav.has(event.target).length === 0)
            {
                navToggle.removeClass("active");
                nav.removeClass("show");
            };
    });
        
    
    /* Load more
    ====================== */
    
    if ($(window).width() > 765) {
        $('.portfolio__col').slice(0, 3).show();
        $('#loadMore').on('click', function(event) {
            event.preventDefault();

            $('.portfolio__col:hidden').slice(0, 3).slideDown();
            if ($('.portfolio__col:hidden').length == 0) {
                $('#loadMore').hide();
            };
        });
    };
    
    if ($(window).width() < 765) {
        $('.portfolio__col').slice(0, 2).show();
        $('#loadMore').on('click', function(event) {
            event.preventDefault();

            
            $('.portfolio__col:hidden').slice(0, 2).slideDown();
            if ($('.portfolio__col:hidden').length == 0) {
                $('#loadMore').hide();
            };
        });
    };
});

