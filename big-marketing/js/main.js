(function($, undefined){
    $(function(){

    	// menu
    	$('#toggle').click(function() {
		   $(this).toggleClass('active');
		   $('#overlay').toggleClass('open');
	    });

	    $('.button_container').on('click', function() {
		   if ($(this).hasClass('active')) {
		   	$('body').css({"overflow-y":"hidden"});
		   } else {
		   	$('body').css({"overflow-y":"auto"});
		   }
	    });

	    $('.overlay-menu').find('a').on('click', function() {
	    	$('.button_container').removeClass("active");
	    	$('#overlay').removeClass("open");
	    	$('body').css({"overflow-y":"auto"});
	    });
	    

	// label animation up
	document
		.querySelectorAll('.field')
		.forEach(function (item) {
		  item
			.querySelector('input')
			.addEventListener('change', function (event) {
				if (event.target.value.length > 0) {
					item.classList.add('focused');
				} else {
					item.classList.remove('focused');
				}
			});
		});


	// input masks
	    // phone input
	    $(".mask-tel").mask("+38 (999) 999-99-99");
	    $(".mask-tel").blur( function () {
	    	if($(this).val() != '') {
	    		$(this).parent().addClass('focused');
	    	} else {
	    		$(this).parent().removeClass('focused');
	    	}
	    })

	// modal initializing
		// group modals
		  $(".modais").iziModal({
		  	background: '#4c4c4c',
		  	radius: 8,
		    fullscreen: true,
    		group: 'group1'
		  });
		  // second group modals
		  $(".modais-2").iziModal({
		  	background: '#4c4c4c',
		  	radius: 8,
		    fullscreen: true,
    		group: 'group2'
		  });
		  // third group modals
		  $(".modais-3").iziModal({
		  	background: '#4c4c4c',
		  	radius: 8,
		    fullscreen: true,
    		group: 'group3'
		  });
		// end modal initializing


		// Slider carousel rotate


		// slider
		    var flag = 2;
		    var item = 1;

		    $('.next').on('click', function() {
		    	next();
		    });		    
			
		    $('.prev').on('click', function() {
		    	prev();
		    });

		    function next () {
		    	flag++;

		    	if (flag > 3) { flag = 1; }
		    	
		    	$(".item-wrapper-md").each(function(indx, element){
				  $(element).css("transform","scale(1) translateX(-125%)").css("z-index","0")
				});

				$('#item-'+ flag).css("transform","scale(1.3)").css("z-index","1000").css("left","20%");

		    	if (item > 3) { item = 1; }
				$("#item-"+item).css("left","95%").css("transform","translateX(0)")
				item++;
				
		    };

		    function prev () {
		    	flag--;

		    	if(flag <= 0 ) { flag = 3; }	

		    	$(".item-wrapper-md").each(function(indx, element){
				  $(element).css("transform","scale(1) translateX(125%)").css("z-index","0")
				});

		    	$('#item-'+ flag).css({"transform": "scale(1.3)","z-index":"1000","left":"20%"});

		    	if (flag-1 <= 0) { item = 3; } else { item = flag-1; }
				$("#item-"+ item).css("left","-55%").css("transform","translateX(0)");
		    };
		// end of slider md

	});
})(jQuery);