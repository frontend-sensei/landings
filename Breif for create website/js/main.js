(function($, undefined){
    $(function(){	

		/*--------------------------------------------------------------*/
		// sctoll to anchor
		$('a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        }, 1700);
		    }
		});
		/*--------------------------------------------------------------*/

	
		/*--------------------------------------------------------------*/
		// input masks
		    // phone input
		    $(".mask-tel").mask("+38(999) 999-99-99");
		/*--------------------------------------------------------------*/

		/*--------------------------------------------------------------*/

		  $(function(){
		      $(".typed").typed({
		        strings: ["Корпоративного сайта", "Интернет-магазина", "Сайта-каталога", "Landing-Page", "Сайта визитки"],
		        typeSpeed: 10,
		        backDelay: 1000,
		        loop: true
		      });
		  });
		/*--------------------------------------------------------------*/
		
		/*--------------------------------------------------------------*/
		// открытие выпадающего
		$('.question').on('click', function() {
			let a = $(this);

			a.children().children('.collapse-btn').toggleClass('collapse-btn-active');
			$(this).next('.answer').slideToggle();
		});

		// эффект наведения на кейсы
		$('.case-wrapper').hover(function() {
			let b = $(this);

			b.find('.case-img').css({'transform':'scale(1.1)'});
			b.find('.case-overlay').css({'opacity':'.5'});
		}, function ()  {
			let b = $(this);
			b.find('.case-img').css({'transform':'scale(1)'});
			b.find('.case-overlay').css({'opacity':'1'});
		});
	});
})(jQuery);


// slider
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();