(function($, undefined){
    $(function(){

		/*--------------------------------------------------------------*/
		// wow animation
		new WOW().init({live:false});
		/*--------------------------------------------------------------*/
    	// typed animation
		var typed = new Typed('#typed', {
			// stringsElement: '#typed-strings',
			strings: [' прирост целевого трафика', ' получение заявок', ' комплексное развитие сайта', ' реальные продажи' , '  расширение видимости в сети'],
			typeSpeed: 60,
			startDelay: 400,
			backSpeed: 20,
			backDelay: 1000,
			loop: true
		});
		/*--------------------------------------------------------------*/
		//animation on scroll to icons
		$('#scrollIcons').enllax();
		/*--------------------------------------------------------------*/
		// глобальная переменная которая передается в валидацю
		let dataSlider = 5;
		$(".js-range-slider").ionRangeSlider({
			skin: "round",
			min: 5,
			max: 25,
			from: 5,

			onChange: function (data) {
				// value слайдера
				dataSlider = data.from;
			},
		});
		/*--------------------------------------------------------------*/
    	// sidenav
		$('.open-sidenav').on('click',function (e) {
			e.preventDefault();
			$('.sidenav').addClass('active');
			$('.sidenav-overlay').addClass('active');
			$('body').addClass('o-h');
		});

		$('.close-sidenav').on('click',function (e) {
			close(e);
		});

		$('.sidenav-list').on('click',function (e) {
			close(e);
		});

		$('.sidenav-overlay').on('click',function (e) {
			close(e);
		});

		function close(e) {
			e.preventDefault();
			$('.sidenav-overlay').removeClass('active');
			$('.sidenav').removeClass('active');
			$('body').removeClass('o-h');
		}

		/*----------click card----------------------------------------------------*/
		$('.card').on('click',function (e) {
			$(this).toggleClass('active');
		});

		// hover event card
		$('.card').hover(function() {
			$(this).addClass('hovered');
		}, function() {
			$(this).removeClass('hovered');
		});
		/*----------end click card----------------------------------------------------*/

		/*---------- lightning ----------------------------------------------------*/
		// animation
		if(window.innerWidth > 768) {
			let banner = $(".why-create");
			let imgs = $(".lightning");

			function showAllObjects (object) {
				object.fadeIn(500);
			}
			function moving (object, speed) {
				banner.on('mousemove', function(event) {
					let X = Math.floor((event.pageX)/speed-20) + "px";
					let Y = Math.floor((event.pageY)/speed-180) + "px";
					object.css('transform', 'translate('+X+' , '+Y+')');
				});
			}
			function moveAll (object) {
				moving($(object[0]),35);
			}
			showAllObjects(imgs);
			moveAll(imgs);
		}

		/*--------- end lightning-----------------------------------------------------*/

		/*----------form tabs----------------------------------------------------*/
		let next = $('.btn-continue'), prev = $('.btn-back'), n = 1, form = $('.form-body'),
			indexOfTab;

		// получаем индекс активной вкладки
		indexOfTab = $('.tab.show').data('tab');
		// состояние кнопки назад
		statusPrev();

		// события при изменеии формы
		form.on('change', function () {
			// получаем индекс активной вкладки
			indexOfTab = $('.tab.show').data('tab');

		});

		// при клике на кнопку далее
		next.on('click', function () {
			// получаем индекс активной вкладки
			indexOfTab = $('.tab.show').data('tab');

			// валидация активной вкладки
			validation();

			// состояние кнопки назад
			statusPrev();
		});

		// при клике на кнопку назад
		prev.on('click', function () {
			indexOfTab = $('.tab.show').data('tab');

			// переходим на предидущую
			toPrev();

			// cостояние кнопки назад
			statusPrev();

			// функция перехода на предидущую вкладку
			function toPrev() {
				// находим активный элемент
				let active = $('.tab.show'), status = $('#indexOfTab'), timeOut;
				// скрываем все табы
				form.find('.tab').removeClass('show');

				// показываем предидущий
				active.prev().addClass('show');

				// получаем индекс активной вкладки после перехода
				indexOfTab = $('.tab.show').data('tab');

				// меняем индекс таба в шапке формы
				if(indexOfTab >= 1) {
					// очищаем таймаут
					clearTimeout(timeOut);

					// включаем анимацию
					status.addClass('bounce-animating');
					// меняем значение
					status.text(`${indexOfTab}/7`);

					// убираем анимацию через время
					timeOut = setTimeout(function () {
						status.removeClass('bounce-animating');
					},1500);
				}
				if(indexOfTab < 8) {
					status.removeClass('d-n').addClass('d-b');
				}
			}
		});

		// состояние кнопки назад
		function statusPrev() {
			if(indexOfTab == 1) {
				prev.prop('disabled', true);
			} else {
				prev.prop('disabled', false);
			}
		}

		// функция валидации
		function validation() {
			// получаем индекс активной вкладки
			indexOfTab = $('.tab.show').data('tab');

			// получаем контейнер с элементами активной формы
			let formControl = $(`.tab.show[data-tab='${indexOfTab}']`);

			// валидация первой вкладки
			if (indexOfTab == 1) {
				let radio1 = $(".tab-first .radio");

				if(radio1.is(":checked")) {
					// выбранное значение
					console.log($("input[name='typesite']:checked").val());

					toNext();
				} else {
					formControl.addClass('no-validate');
				}
			}

			// валидация второй вкладки
			if (indexOfTab == 2) {
				let radio2 = $(".tab-second .radio");

				if(radio2.is(":checked")) {
					// выбранное значение
					console.log($("input[name='style']:checked").val());

					formControl.removeClass('no-validate');

					toNext();
				} else {
					formControl.addClass('no-validate');
				}
			}

			// валидация третей вкладки
			if (indexOfTab == 3) {
				let input = $(".tab-third input");

				if(input.val()) {
					console.log(input.val());
				} else {
					console.log('не заполнено')
				}

				toNext();
			}

			// валидация четвертой вкладки
			if (indexOfTab == 4) {
				let checkboxes = $(".tab-fourth .checkbox");
				let a = [];

				checkboxes.each(function(index, elem) {
					if($(elem).is(":checked")) {
						console.log($(elem).val());
						a.push(1);
					} else {
						flag = false;
						a.push(0);
					}
				});

				if($.inArray( 1, a ) == -1) {
					formControl.addClass('no-validate');
				} else {
					formControl.removeClass('no-validate');
					toNext();
				}
			}

			// валидация пятой вкладки
			if (indexOfTab == 5) {
				console.log(dataSlider);
				toNext();
			}

			// валидация шестой вкладки
			if (indexOfTab == 6) {
				let checkboxes2 = $(".tab-sixth .checkbox");

				checkboxes2.each(function(index, elem) {
					if($(elem).is(":checked")) {
						console.log($(elem).val());
					}
				});
				toNext();
			}

			// валидация седьмой вкладки
			if (indexOfTab == 7) {
				let textarea = $(".tab-seventh .textarea");

				if(textarea.val()) {
					console.log(textarea.val());
				} else {
					console.log('не заполнено')
				}


				toNext();
			}

			// сменить текст кнопки при заполнении формы
			if (n > 7) {
				next.text('Получить расчёт');
			} else {
				next.text('Далее');
			}

			// узнаем индекс вкладки на которую произошел переход.
			indexOfTab = $('.tab.show').data('tab');

			//функция перехода на следуйщую вкладку
			function toNext() {
				form.find('.tab').removeClass('show');
				$(`.tab:eq(${indexOfTab})`).addClass('show');

				// меняем индекс таба в шапке формы
				let indexOfTabH = $('.tab.show').data('tab'), status = $('#indexOfTab');
				if(indexOfTabH <= 7) {
					status.removeClass('d-n').addClass('d-b');
					let timeOut;
					clearTimeout(timeOut);

					status.addClass('bounce-animating');
					status.text(`${indexOfTabH}/7`);

					timeOut = setTimeout(function () {
						status.removeClass('bounce-animating');
					},1500);
				} else {
					status.removeClass('d-b').addClass('d-n');
				}
			}
		}

		/*----------end form tabs----------------------------------------------------*/


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

	});
})(jQuery);
