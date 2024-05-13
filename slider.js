// слайдер був зроблений на основі https://kenwheeler.github.io/slick/ тобто була взята основа js з цього сайту
$(document).ready(function(){
    var phrases = [
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Драма</span> <span class="m-dot" aria-hidden="true">·</span>Дивіться на Apple TV+.</p>',  
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Кримінальний</span> <span class="m-dot" aria-hidden="true">·</span>Дивіться на Apple TV+.</p>',   
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Драма</span> <span class="m-dot" aria-hidden="true">·</span> Деякі чоловіки — суцільна загадка.</p>',   
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Бойовик</span> <span class="m-dot" aria-hidden="true">·</span> Новий шпигунський трилер від режисера МетьюВона.</p>',    
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Драма</span> <span class="m-dot" aria-hidden="true">·</span> Усе вирішують ваші звʼязки. І ваші таємниці.</p>',  
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Комедія</span> <span class="m-dot" aria-hidden="true">·</span>  Добродушний тренер повертається.</p>', 
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Драма</span> <span class="m-dot" aria-hidden="true">·</span>Від Стівена Спілберґа, Тома Генкса та Ґері Ґецмана.</p>',  
        '<div class="custom-button" aria-label="Дивіться Палм-Рояль"><img class="image-slider" src="imgs/play-button-svgrepo-com.svg">Дивіться</div> <p class="typography-shows-genre"><span class="genre">Драма</span> <span class="m-dot" aria-hidden="true">·</span> Зміни в прямому ефірі.</p>',  
    ];  
    function addCaptionsToSlides() {
        $('.slick-slide').each(function(index) {
            var phraseIndex = index % phrases.length;
            var phrase = phrases[phraseIndex];
            $(this).find('.caption').remove(); 
            $(this).append('<div class="caption">' + phrase + '</div>'); 
        });
    }

    $('.slider').on('init afterChange', function(event, slick, currentSlide){
        addCaptionsToSlides();
    });

    var autoplayStatus = false;

    $('.autoplay-toggle').click(function() {
        if (autoplayStatus) {
            $('.slider').slick('slickPause');
            autoplayStatus = false;
            $(this).html('<img class="play" src="imgs/fa6-regular--circle-play.svg" alt="dont-work">');
        } else {
            $('.slider').slick('slickPlay');
            autoplayStatus = true;
            $(this).html('<img src="imgs/zondicons--pause-outline.svg" alt="dont-work">');
        }
    });

    $('.slider').slick({
        autoplay: false,
        infinite: true,
        autoplaySpeed: 3000, 
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slick-next').removeClass('slick-next slick-arrow');
});
