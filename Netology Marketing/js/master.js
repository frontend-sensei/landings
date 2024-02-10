	(function($, undefined) {
		$(function(){

			$('.base').on('click', function(){

				var arrow = $(this);
				var item = $(this).parent('.learn-item-bottom').parent('.learn-item-left').parent('.parent-base').next('.more');
				
				
				if(item.hasClass('show')){
					item.slideUp('slow', function(e){
					$(this).removeClass('show');
					arrow.children('.moreOpen').show();
					arrow.children('.moreClose').hide();
				});

				}else{
					item.slideDown('slow', function(e){
						
						$(this).addClass('show');
						arrow.children('.moreOpen').hide();
						arrow.children('.moreClose').show();
					});
				}
				
				
			});


			// checkboxes in register form
			$('#treaty').on('click', function() {
		      $('#treaty-checkbox').toggleClass('changed');
		    });

			$('#articles').on('click', function() {
		      $('#articles-checkbox').toggleClass('changed');
		    });

		    $('#credit').on('click', function() {
		      $('#credit-checkbox').toggleClass('changed');
		    });

			$('#legal').on('click', function() {
		      $('#legal-checkbox').toggleClass('changed');
		    });


		    // promocode
		    $('.promocode-wrapper').on('click', function() {
		      $('.promocode-text').addClass('d-none');
		      $('.promocode-input').addClass('d-block');
		    });

		    // slider number 3
		    // переменная для присваивания свойств 
		    // для активной вкладки слайдера
		    var flag = 1;

		    $('.next').on('click', function(e) {
		    	// переход на следуйщую вкладку слайдера
		    	flag++;

		    	// условие что всего 3 картинки,
		    	// чтобы не появлялся 4-ый елемент 
		    	if (flag > 3) { flag = 1; }
		    	
		    	// перебирает все вкладки слайдера и задает им свойство
		    	$(".item-wrapper").each(function(indx, element){
				  $(element).css("opacity","0")
				});
				
				// присваеваем id-шке значение переменной
		        // flag тем самым меняем айдишку
				$('#item-'+ flag).css("opacity","1");
				
		    })		    
			
		    $('.prev').on('click', function(e) {
		    	// переход на предидущую вкладку слайдера
		    	flag--;

		    	// ксловие что всего 3 картинки,
		    	// чтобы не появлялся 4-ый елемент
		    	if(flag <= 0 ) { flag = 3; }	

		    	// перебирает все вкладки слайдера и задает им свойство
		    	$(".item-wrapper").each(function(indx, element){
				  $(element).css("opacity","0")
				});

		    	// присваеваем id-шке значение переменной
		        // flag тем самым меняем айдишку
				$('#item-'+ flag).css("opacity","1");
		    })
			// end of slider number 3


			// slider number 2
			var flagAuto = 1;

			var timerId = setInterval(function() {
			 
				
		    	// переход на следуйщую вкладку слайдера
		    	flagAuto++;

		    	//условие что всего 3 картинки,
		    	// чтобы не появлялся 4-ый елемент 
		    	if (flagAuto > 3) { flagAuto = 1; }
		    	
		    	// перебирает все вкладки слайдера и задает им свойство
		    	$(".item-auto").each(function(indx, element){
				  $(element).css("opacity","0")
				});
				
				// присваеваем id-шке значение переменной
		        // flagAuto тем самым меняем айдишку
				$('#item-auto-'+ flagAuto).css("opacity","1");
				
				$(".dot").each(function(){
					$(".dot").removeClass('dot-active');
				})

				$('#dot-' + flagAuto).addClass('dot-active');
		    

			}, 2500);
			// end of slider number 2

					

		});
	})(jQuery);


	