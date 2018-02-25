/*
 * jQuery SelectBox Styler v1.0.1
 * http://dimox.name/styling-select-boxes-using-jquery-css/
 *
 * Copyright 2012 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2012.10.07
 *
 */
!function(e){e.fn.selectbox=function(){e(this).each(function(){function t(){var t=s.find("option"),o=t.filter(":selected"),l=t.filter(":first").text();o.length&&(l=o.text());var d="";for(i=0;i<t.length;i++){var c="",n=' class="disabled"';t.eq(i).is(":selected")&&(c=' class="selected sel"'),t.eq(i).is(":disabled")&&(c=n),d+="<li"+c+">"+t.eq(i).text()+"</li>"}var a=e('<div class="selectbox" style="display:inline-block;position:relative"><div class="select" style="float:left;position:relative;"><div class="text">'+l+'</div><b class="trigger"><i class="arrow"></i></b></div><div class="dropdown" style="position:absolute;overflow:auto;overflow-x:hidden;list-style:none"><ul>'+d+"</ul></div></div>");s.before(a).css({position:"absolute",top:-9999});var r=a.find("div.select"),f=a.find("div.text"),h=a.find("div.dropdown"),u=h.find("li"),v=a.outerHeight();"auto"==h.css("left")&&h.css({left:0}),"auto"==h.css("top")&&h.css({top:v});var p=u.outerHeight(),b=v;r.width(h.find('ul').outerWidth()+5),h.outerWidth(r.outerWidth()),h.hide(),r.click(function(){var t=a.offset().top,s=e(window).height()-v-(t-e(window).scrollTop());return 0>s||6*p>s?(h.height("auto").css({top:"auto",bottom:b}),h.outerHeight()>t-e(window).scrollTop()-20&&h.height(Math.floor((t-e(window).scrollTop()-20)/p)*p)):s>6*p&&(h.height("auto").css({bottom:"auto",top:b}),h.outerHeight()>s-20&&h.height(Math.floor((s-20)/p)*p)),h.is(":hidden")?(e("div.dropdown:visible").hide(),h.show()):h.hide(),!1}),u.hover(function(){e(this).siblings().removeClass("selected")});var g=u.filter(".selected").text();u.filter(":not(.disabled)").click(function(){var i=e(this).text();g!=i&&(e(this).addClass("selected sel").siblings().removeClass("selected sel"),t.prop("selected", false).eq(e(this).index()).prop("selected",true),g=i,f.text(i),s.change()),h.hide()}),h.mouseout(function(){h.find("li.sel").addClass("selected")}),s.focus(function(){e("span.selectbox").removeClass("focused"),a.addClass("focused")}).keyup(function(){f.text(t.filter(":selected").text()),u.removeClass("selected sel").eq(t.filter(":selected").index()).addClass("selected sel")}),e(document).on("click",function(t){e(t.target).parents().hasClass("selectbox")||(h.hide().find("li.sel").addClass("selected"),a.removeClass("focused"))})}var s=e(this);s.prev("span.selectbox").length<1&&(t(),s.on("refresh",function(){s.prev().remove(),t()}))})}}(jQuery);

$(function() {  
    $('select:not([multiple])').selectbox();
    
    $("#wrapper").append($(".popup"));
    
    if($.fn.bdmoveSlider) {
        $('.cover').bdmoveSlider({
            adaptive: true,
            slidenator: true
        })
    }
    
///      $('.nav__item').hover(function() {
//          $(this).find('.nav__popup').stop().slideToggle('fast');
//      });
    
    $('.btn_cart_link').mouseenter(function(e) {
        $('.like-box').stop().hide();
        $('.cart-box').stop().fadeIn('fast');
    });
    
    $('.btn_cart_link').mouseleave(function(e) {
        if(!$(e.relatedTarget).hasClass('cart-box'))
            $('.cart-box').stop().fadeOut('fast');
    });
    $('.btn_like').mouseenter(function(e) {
        $('.cart-box').stop().hide();
        $('.like-box').stop().fadeIn('fast');
    });
    
    $('.btn_like').mouseleave(function(e) {
        if(!$(e.relatedTarget).hasClass('like-box'))
            $('.like-box').stop().fadeOut('fast');
    });
    
    $(".catalog__count").on('click', '> div', function (e) {

    var c = $("input", e.delegateTarget), v = parseInt(c.val(), 10);
    if ($(this).hasClass("catalog__plus")) {
        v++;
    }
    if ($(this).hasClass("catalog__minus")) {
        v--;
        if (v < 1)
            v = 1;
    }
    c.val(v);
    c.trigger('change');
});
    
    
    $('.cart-box').mouseleave(function(e) {
        if(!$(e.relatedTarget).hasClass('btn_cart_link'))
            $('.cart-box').stop().fadeOut('fast');
    });
    
    $('.like-box').mouseleave(function(e) {
        if(!$(e.relatedTarget).hasClass('btn_like'))
            $('.like-box').stop().fadeOut('fast');
    });
    
    $('#wrapper').css({
        'padding-top': ($('.wrap_nav').height()) + 'px',
        'padding-bottom': ($('.footer').outerHeight()+33) + 'px'
    });
    
    $('.popup__close, .btn_close').click(function(e) {
        $('.popup').fadeOut('fast');
    });
    
    $(document).click(function(e) {
        if(!$(e.target).closest('.popup').length)
            $('.popup').fadeOut('fast');
    });
    
	$('.js-lk').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.popup').hide(0);
		
		centralize($('.popup_lk'));
	});
    
	$('.js-one-click').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.popup').hide(0);
		
		centralize($('.popup_one_click'));
	});
    
	/*$('.popup__rem').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.popup').hide(0);
		
		centralize($('.popup_rem'));
	});
    
	$('.btn_to_cart').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.popup').hide(0);
		
		centralize($('.popup_cart'));
	});*/
    
	$('.js-btn-file').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
        
            $(this).next('input').click();
	});
        
        if($(".tel__text").is(":empty") || !$(".tel__text > *").length) {
            $(".tel").remove();
        }
        
        if($(".footer__mail-text").is(":empty") || !$(".footer__mail-text > *").length) {
            $(".footer__mail").remove();
        }
        
        $(".menu__item a, .nav__popup__item a").each(function() {
            if(!$("img",this).length) {
                $(this).css('padding-left','15px');
                $(this).closest(".menu__item").find(".menu__in").css('padding-left','35px');
            }
        });
        
});


// функция центрирует по высоте передоваемый ей элемент и показывает его
function centralize(elem) {
	elem.fadeIn('fast');
	var diff = ($(window).height() - elem.outerHeight());
	
	if(diff < 0 ) diff = 20;
	
	var elem_top = $(document).scrollTop() + ( diff /2);
	elem.css('top', elem_top);
};