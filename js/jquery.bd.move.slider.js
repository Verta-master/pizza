//* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/**
 * @name jQuery move slider 
 * ©copyright - http://bdeveloper.ru/
 *
 * depend on jQuery
*/
(function($) {
	$(document).data('bd_resize_reinit', true);
	
	$.fn.bdmoveSlider = function(options) {
		if( !options ) options = {};
		
		// список элементов по умолчанию
		options = $.extend({
			innerPrefix: false, // задаёт префикс элементов которые будут искатся внутри слайдера
			adaptive: false, // Параметр устанавливает адаптивность слайдер
							 // если true то слайдер резиновый и элементы слайда растягиваются
							 // на всю ширину content box слайдера
			start: 0, // парпметр задает с какого элемента начнется слайдшоу
					  // по умолчанию 0(1)
			prev: (options.innerPrefix || this.selector)+"__prev", // кнопка которая ведет на
																   // прдыдущий слайд
			next: (options.innerPrefix || this.selector)+"__next", // кнопка которая ведет на
																   // следующий слайд
			changeByBtn: true, // устанавливает будут ли кнопки prev, next
			list: (options.innerPrefix || this.selector)+"__list", // блок обертка всех слайдов
			listWidth: false, // Ширина списка слайдеров
			item: (options.innerPrefix || this.selector)+"__item", // блок слайд
			itemWidth: false, // ширина элемента слайда
			step: 1, // количество прокручиваемых слайдов одновременно
			info: false, // Если указать то сначала будет исчезать онфо блок
						 // а после перелистваться слайдер
						 // можно указать класс инфо блока или
						 // true - тогда будет взят элемент "*__item__info" — БЭМ.
			infoHideDuration: 300, // продолжильность исчезновения доп. блока
			infoShowDuration: 300, // продолжильность появления доп. блока
			easingInfo: "swing", // динамика исчезновения и появления инфоблока
			durationMove: 500, // задает время прокрутки слайдов
							   // ( Задержка перехода на следующий слайд )
			slidenator: false, // Параметр определяет слайденатор
							   // можно указать класс слайденатора
							   // или true тогда класс будет задан в стиле БЭМ
			slidenatorItem: (options.innerPrefix || this.selector)+"__slidenator__item", // задаем
																			   // slidenator__item
			slidenatorItemIn: '', // устанавливает внутренее HTML содержимое элемента слайденатора
			slidenatorActive: (options.innerPrefix || this.selector)+"__slidenator__item_active",
														  // активный класс элемента слайденатора
			slidenatorAfter: false, // Вставляем что либо после слайденатора
			insertSlidenatorAfter: false, // Параметр указывает после чего вставить слайденатор 
			insertBtnTo: false, // Параметр указывает в какой блок вставить кнопки 
			timer: false, // если true то включается таймер
			interval: 10000, // задержка таймера
			timerToggle: (options.innerPrefix || this.selector)+"__toggle", // кнопка включения
																			// и отключения
																			// таймера
			toggleHTML: 'Старт:Стоп', // Текст или элемент который замещается при клике на переключатель
							   // таймера, синтаксис "Неактивный:Активный"
			easingMove: "swing", // динамика передвижения слайдов
			crop: false, // если true то последняя позиция определяется по ширине (content box)
						 // "*__crop",
						 // если селектор последня позиция определяется от ширины (content box)
						 // этого селектор
						 // по умолчанию последняя позиция определяется по
						 // ширине контейнера
			clickBtn: false, // событие клика на кнопки next, prev
			endMove: false, // события окончания прокрутки слайда
			slidenatorIndexes: '', // если устанавить true то в slidenator__item'ы будут
									 // добавлены числовые индексы
			count: false // если передать селектор добавит туда щетчик "активный элемент/количество элементив"
		}, options);
		
		var $container = this,
			$list = $container.find(options.list),
			$item = $container.find(options.item);
		
		// определяем область видимости сайдов
		if(options.crop && options.crop === true)
			var $crop = $container.find( (options.innerPrefix || this.selector)+"__crop" );
		else if(options.crop === false)
			$crop = $container;
		else
			$crop = options.crop;
			
		if( $item.length == 1 || $item.length <= Math.round($crop.width()/$item.outerWidth(true)) )
			return false;
		
		if(options.adaptive) {
			// определяем ширину item
			if(options.crop && options.crop !== true)
				var itemWidth = $container.find(options.crop).width();
			else
				itemWidth = $crop.width();
			
			$item.outerWidth(itemWidth);
			options.bd_resize_reinit = true;
			
			$(window).on('resize', function() {
				if(options.bd_resize_reinit) {
					options.bd_resize_reinit = false;
					
					// #timer
					if(options.timer && timerId) {
						clearInterval(timerId);
					};
					
					setTimeout(function() {
						// определяем ширину item
						if(options.crop && options.crop !== true)
							itemWidth = $container.find(options.crop).width();
						else
							itemWidth = $crop.width();
						
						$item.outerWidth(itemWidth);
						
						// устанавливаем ширину списка слайдеров и css position
						$list
						.width( options.listWidth || (itemWidth*($item.length+3)) )
						.css({
							left: -(-(Math.round(( parseInt($list.css("left")) / itemWidth ))) * itemWidth)
						});
						
						// #timer
						if(options.timer && timerId) {
							timerId = setInterval(checkArr, options.interval);
						};
						
						options.bd_resize_reinit = true;
					}, 25);
				}
			});
		} else {
			itemWidth = options.itemWidth || $item.eq(1).outerWidth(true);
		}
		
		// устанавливаем ширину списка слайдеров и css position
		$list
		.width( options.listWidth || (itemWidth*($item.length+3)) )
		.css({position: "relative", left: -(options.start * itemWidth) });
		
		// если своиство установлено задаем ширину элементам слайдера
		if( options.itemWidth ) {
			$item.outerWidth( itemWidth );
		}
			
		// #info скрываем блоки с информацией
		if(options.info) {
			var info_elems = options.info !== true ? $container.find(options.info) :
					$container.find((options.innerPrefix || this.selector)+"__info");
			
			info_elems.hide().eq(options.start).show();
		};
		
		// #slidenator
		if(options.slidenator) {
			var slidenatorName = options.slidenator !== true ?
												options.slidenator:
												(options.innerPrefix || this.selector)+"__slidenator",
			$slidenator = $('<span class="'+slidenatorName.slice(1)+'"></span>'),
			
			// переменная определяющая множественный слайдер или нет
			is_multiple = $crop.width() > $item.outerWidth(true);
			
			if(is_multiple)
				var item_length = $item.length/Math.round($crop.width()/$item.outerWidth());
			else
				item_length = $item.length;
			
			// вставка slidenator__item
			for(var i = 0; i < item_length; i++) {
				$slidenator.append('<span class="'+options.slidenatorItem.slice(1)+'">'+
										options.slidenatorItemIn +
										(options.slidenatorIndexes && (i+1))
								   +'</span>')
			};
				
			// вставляем что либо после слайденатора
			if(options.slidenatorAfter)
				$slidenator.after( options.slidenatorAfter);
			
			$slidenator.find( options.slidenatorItem )
			 .eq(options.start).addClass( options.slidenatorActive.slice(1) );
			
			// #slidenator обработчик события клика на элементах слайденатора
			$slidenator.on("click", options.slidenatorItem,  slideToMove);
			
			if(options.insertSlidenatorAfter)
				$(options.insertSlidenatorAfter).after( $slidenator )
			else
				$container.append( $slidenator );
		}
		
		if(options.count) {
			var count_block = '<div class="gallery__controls">\
								<div class="gallery__count"><span>'+ '1/'+ $item.length+'</span></div>\
							  </div>'
			$container.append(count_block)
		}
		
		// #prev, #next вспомогательные переменные
		if(options.changeByBtn) {
			var $prev = $('<span class="'+options.prev.slice(1)+'"></span>'),
				$next = $('<span class="'+options.next.slice(1)+'"></span>');
				
			// вешаем функции обработчики события на кнопки вправо и влево
			$prev.on("click", checkArr);
			$next.on("click", checkArr);
			
			if (options.insertBtnTo) {
				$(options.insertBtnTo).append($prev).append($next);
			} else{
				$container.append($prev).append($next);
			}
		}
		
		// #timer
		if(options.timer) {
			var timerId = setInterval(checkArr, options.interval),
				toggleHTML = options.toggleHTML,
				$timerBtn = $('<span class="'+options.timerToggle.slice(1)+'">'+
								toggleHTML.slice(toggleHTML.indexOf(':')+1)
							+'</span>');
			$container.append($timerBtn);
			
			// вешаем функцию обработчик на кнопку options.timerToggle
			$timerBtn.toggle(function() {
				clearInterval(timerId);
				timerId = false;
				
				$(this).html(toggleHTML.slice(0, toggleHTML.indexOf(':')));
			}, function() {
				timerId = setInterval(checkArr, options.interval);
				
				$(this).html(toggleHTML.slice(toggleHTML.indexOf(':')+1));
			});
		};
		
		// функция обработчик клика по стрелочкам (options.prev, options.next)
		function checkArr(param) {
			if( options.clickBtn )
				options.clickBtn();
			
			//вспомогательные переменные
			var currentPos = parseInt( $list.css("left") ),
				maxVisibleItems = Math.round( $crop.width() / itemWidth ),
				crop_rest = (itemWidth*maxVisibleItems) - $crop.width(),
				crop_rest = (crop_rest > 10) ? crop_rest: 0,
				maxPos = -((itemWidth*($item.length-maxVisibleItems))+crop_rest),
				minPos = 0,
				isLeft = false;
				
			// if #slidenator = true and is_multiple
			if(options.slidenator && is_multiple)
				var widthMove = $crop.width()+parseInt($item.css('margin-right'));
			else
				widthMove = itemWidth * options.step;
			
			if(this.className) {
				var prevClassArr = this.className.split(" ");
				
				for(var i=0; i<prevClassArr.length ; i++) {
					if(prevClassArr[i] == options.prev.slice(1)) {
						isLeft = prevClassArr[i];
						break;
					};
				};
			};
			
			// если нажали на prev (предыдущий слайд)
			if(isLeft) {
				// если текущая позиция равна минимальной позиции
				if(currentPos >= minPos) {
					toMove(maxPos);
				} else {
					// если текущая позиция больше либо равна
					// 2-ой позиции ( предпоследней с начала )
					if(currentPos >= -(widthMove) )
						toMove(0);
					else
						toMove("+="+widthMove);
				};
			} else {
				// если текущая позиция больше чем максимальной позиции
				if(currentPos > maxPos) {
					// если текущая позиция будет меньше либо
					// равна предпоследней позиции ( с конца )
					if(currentPos <= maxPos+widthMove)
						toMove(maxPos);
					else
						toMove("-="+widthMove);
				} else {
					toMove(0);
				};
			};
		};
		
		// Функция непосредственного движения слайдов ( анимации слайдов )
		// @param leftValue {number} - левая позиция списка слайдов
		// @param duration {number} - время смены слайда
		function toMove(leftValue) {
			// #info, #slidenator вычисляем индекс текущего элемента слайденатора
			if(options.info || options.slidenator)
				var	currentElem = Math.round( -(parseInt( $list.css("left"))) / itemWidth );
				
			if(options.info) {
				// #info скрываем блок с информацией
				$($item.get(currentElem))
				.find(info_elems)
				.fadeOut(options.infoHideDuration, options.easingInfo , function() {
					// #info очищаем очередь функция у блока с информацией
					$(this).stop(true);
					
					// #slidenator удоляем класс активности у элемента слайденатора
					if(options.slidenator)
						$slidenator.find(options.slidenatorItem)
						  .removeClass(options.slidenatorActive.slice(1));
					
					move();
				});
			} // if
			else {
				// #slidenator удоляем класс активности у элемента слайденатора
				if(options.slidenator)
					$slidenator.find(options.slidenatorItem)
					  .removeClass(options.slidenatorActive.slice(1));
					  
				move();
			}
			
			// вспомогательная функция
			function move() {
				// сдвигаем до нужного слайда
				$list.animate({
					left: leftValue
				}, options.durationMove, options.easingMove, function () {
					// очищаем очередь эффектов у блока списка слайдов
					$(this).stop(true);
					
					// #timer очищаем таймер и заного его активируем
					if(options.timer && timerId) {
						clearInterval(timerId);
						timerId = setInterval(checkArr, options.interval);
					};
					
					// #info обратно вычисляем индекс слайда на который перешли
					// if #slidenator = true and is_multiple
					if(options.slidenator && is_multiple)
						var widthMove = $crop.width()+parseInt($item.css('margin-right'));
					else
						widthMove = itemWidth;
					
					currentElem = Math.ceil( -(parseInt( $list.css("left"))) / widthMove );
					
					// #slidenator добавляем элементу слайденатора класс активности
					if(options.slidenator)
						$($slidenator.find(options.slidenatorItem).get(currentElem))
						.addClass(options.slidenatorActive.slice(1));
					
					// #info показываем блок с информацией
					if(options.info)
						$($item.get(currentElem))
						.find(info_elems)
						.fadeIn(options.infoShowDuration, options.easingInfo , function() {
							// #info очищаем очередь функция у блока с информацией
							$(this).stop(true);
						});
					
					if( options.endMove )
						options.endMove();
					
					
					if(options.count) {
						$container.find('.gallery__count span:first-child').text(currentElem+1+ '/'+ $item.length)
					}
				});
			};
		};
		
		// #slidenator функция обработчик клика на элементы слайденатора
		function slideToMove() {
			var index = $(this).index();
			
			if(is_multiple) {
				// вспомогательные переменные
				var maxVisibleItems = Math.round( $crop.width() / itemWidth ),
					maxPos = -(itemWidth*($item.length-maxVisibleItems)),
					leftPos = -(index*($crop.width()+
								(index ? parseInt($item.css('margin-right')) : 0))),
					currentElem = Math.ceil( -(parseInt( $list.css("left"))) /
								  ($crop.width()+parseInt($item.css('margin-right'))));
				// если индекс текущего элемента не равен индексу
				// элемента на который мы собираемся идти тогда выполнить
				if(currentElem != index) {
					if(index == ($container.find(options.slidenatorItem).length-1))
						toMove(maxPos);
					else
						toMove(leftPos);
				}
			} else {
				leftPos = -(index*itemWidth),
				currentElem = Math.round( -(parseInt( $list.css("left"))) / itemWidth );
					
				// если индекс текущего элемента не равен индексу
				// элемента на который мы собираемся идти тогда выполнить
				if(currentElem != index)
					toMove(leftPos);
			}
		};
		
		
		return this;
	};
})(jQuery);
