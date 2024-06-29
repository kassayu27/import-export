var THEMEMASCOT={};(function($){"use strict";THEMEMASCOT.isRTL={check:function(){if($("html").attr("dir")==="rtl"){return true;}else{return false;}}};THEMEMASCOT.isLTR={check:function(){if($("html").attr("dir")!=="rtl"){return true;}else{return false;}}};function handlePreloader(){if($('.preloader').length){$('.preloader').delay(200).fadeOut(500);}}
function headerStyle(){if($('.main-header').length){var windowpos=$(window).scrollTop();var siteHeader=$('.header-style-one');var scrollLink=$('.scroll-to-top');var sticky_header=$('.main-header .sticky-header');if(windowpos>100){sticky_header.addClass("fixed-header animated slideInDown");scrollLink.fadeIn(300);}else{sticky_header.removeClass("fixed-header animated slideInDown");scrollLink.fadeOut(300);}
if(windowpos>1){siteHeader.addClass("fixed-header");}else{siteHeader.removeClass("fixed-header");}}}
headerStyle();if($('.main-header li.dropdown ul').length){$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');}
if($('.mobile-menu').length){var mobileMenuContent=$('.main-header .main-menu .navigation').html();$('.mobile-menu .navigation').append(mobileMenuContent);$('.sticky-header .navigation').append(mobileMenuContent);$('.mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible');});$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).prev('ul').slideToggle(500);$(this).toggleClass('active');});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible');});$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible');});}
if($('.search-btn').length){$('.search-btn').on('click',function(){$('.main-header').addClass('moblie-search-active');});$('.close-search, .search-back-drop').on('click',function(){$('.main-header').removeClass('moblie-search-active');});}
if($('.project-block').length){var $service_block=$('.project-block .inner-box');$($service_block).on('mouseenter',function(e){$(this).find('.content-box .inner').stop().slideDown(400);return false;});$($service_block).on('mouseleave',function(e){$(this).find('.content-box .inner').stop().slideUp(400);return false;});}
if($('.banner-carousel').length){$('.banner-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),animateOut:'fadeOut',animateIn:'fadeIn',loop:true,margin:0,nav:true,smartSpeed:500,autoHeight:true,autoplay:true,autoplayTimeout:10000,navText:['<span class="fa fa-long-arrow-alt-left"></span>','<span class="fa fa-long-arrow-alt-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}});}
if($('.service-carousel').length){$('.service-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:false,margin:20,nav:false,items:1,smartSpeed:700,autoplay:false,navText:['<span class="flaticon-left-chevron"></span>','<span class="flaticon-right-chevron"></span>'],responsive:{0:{items:1},768:{items:2},1024:{items:2},1200:{items:3},1400:{items:3},}});}
if($('.project-carousel').length){$('.project-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:30,nav:true,items:1,smartSpeed:700,autoplay:false,navText:['<span class="fa fa-long-arrow-left"></span>','<span class="fa fa-long-arrow-right"></span>'],responsive:{0:{items:1},768:{items:2},1024:{items:3},1200:{items:4},1400:{items:4},}});}
if($('.features-carousel').length){$('.features-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:30,nav:true,items:1,smartSpeed:700,autoplay:false,nav:false,navText:['<span class="fa fa-long-arrow-left"></span>','<span class="fa fa-long-arrow-right"></span>'],responsive:{0:{items:1},768:{items:2},1024:{items:2},1700:{items:2},1920:{items:3},}});}
if($('.work-carousel').length){$('.work-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:30,items:1,smartSpeed:700,autoplay:false,nav:false,navText:['<span class="fa fa-long-arrow-left"></span>','<span class="fa fa-long-arrow-right"></span>'],responsive:{0:{items:1},768:{items:2},1024:{items:3},1700:{items:4},}});}
if($('.map-carousel').length){$('.map-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:30,items:1,smartSpeed:700,autoplay:false,nav:false,navText:['<span class="fa fa-long-arrow-left"></span>','<span class="fa fa-long-arrow-right"></span>'],});}
if($('.testimonial-carousel').length){$('.testimonial-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:0,nav:true,items:1,smartSpeed:700,autoplay:5000,nav:false,});}
if($('.work-carousel-two').length){$('.work-carousel-two').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:30,nav:false,items:1,smartSpeed:700,autoplay:true,navText:['<span class="flaticon-left-chevron"></span>','<span class="flaticon-right-chevron"></span>'],responsive:{0:{items:1},768:{items:2},1024:{items:3},1200:{items:4},}});}
if($('.clients-carousel').length){$('.clients-carousel').owlCarousel({rtl:THEMEMASCOT.isRTL.check(),loop:true,margin:0,nav:false,smartSpeed:400,autoplay:true,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},768:{items:2},1023:{items:3},1200:{items:4},}});}
if($(".odometer").length){$('.odometer').appear();$('.odometer').appear(function(){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});window.odometerOptions={format:'d',};});}
if($('.testimonial-content').length){var swiper=new Swiper(".testimonial-content",{autoplay:true,loop:true,spaceBetween:10,slidesPerView:1,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});}
if($('.testimonial-content-two').length){var swiper=new Swiper(".testimonial-content-two",{spaceBetween:10,slidesPerView:1,thumbs:{swiper:swiper2,}});var swiper2=new Swiper(".testimonial-image",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",},thumbs:{swiper:swiper,},pagination:{el:".swiper-pagination",clickable:true},});}
if($('.accordion-box').length){$(".accordion-box").on('click','.acc-btn',function(){var outerBox=$(this).parents('.accordion-box');var target=$(this).parents('.accordion');if($(this).hasClass('active')!==true){$(outerBox).find('.accordion .acc-btn').removeClass('active ');}
if($(this).next('.acc-content').is(':visible')){return false;}else{$(this).addClass('active');$(outerBox).children('.accordion').removeClass('active-block');$(outerBox).find('.accordion').children('.acc-content').slideUp(300);target.addClass('active-block');$(this).next('.acc-content').slideDown(300);}});}
if($('.count-box').length){$('.count-box').appear(function(){var $t=$(this),n=$t.find(".count-text").attr("data-stop"),r=parseInt($t.find(".count-text").attr("data-speed"),10);if(!$t.hasClass("counted")){$t.addClass("counted");$({countNum:$t.find(".count-text").text()}).animate({countNum:n},{duration:r,easing:"linear",step:function(){$t.find(".count-text").text(Math.floor(this.countNum));},complete:function(){$t.find(".count-text").text(this.countNum);}});}},{accY:0});}
$('.custom-select').select2({minimumResultsForSearch:7,});if($('.filter-list').length){$('.filter-list').mixItUp({});}
$(".quantity-box .add").on("click",function(){if($(this).prev().val()<999){$(this).prev().val(+$(this).prev().val()+1);}});$(".quantity-box .sub").on("click",function(){if($(this).next().val()>1){if($(this).next().val()>1)
$(this).next().val(+$(this).next().val()-1);}});if($('.price-range-slider').length){$(".price-range-slider").slider({range:true,min:10,max:99,values:[10,60],slide:function(event,ui){$("input.property-amount").val(ui.values[0]+" - "+ui.values[1]);}});$("input.property-amount").val($(".price-range-slider").slider("values",0)+" - $"+$(".price-range-slider").slider("values",1));}
if($('.distance-range-slider').length){$(".distance-range-slider").slider({range:true,min:0,max:2000,values:[0,1500],slide:function(event,ui){$("input.range-amount").val(ui.values[0]+" - "+ui.values[1]);}});$("input.range-amount").val($(".distance-range-slider").slider("values",0)+" - "+$(".distance-range-slider").slider("values",1));}
if($('.product-details .bxslider').length){$('.product-details .bxslider').bxSlider({nextSelector:'.product-details #slider-next',prevSelector:'.product-details #slider-prev',nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>',mode:'fade',auto:'true',speed:'700',pagerCustom:'.product-details .slider-pager .thumb-box'});};if($('.tabs-box').length){$('.tabs-box .tab-buttons .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).is(':visible')){return false;}else{target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');$(this).addClass('active-btn');target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');$(target).fadeIn(300);$(target).addClass('active-tab animated fadeIn');}});}
if($('.dial').length){$('.dial').appear(function(){var elm=$(this);var color=elm.attr('data-fgColor');var perc=elm.attr('value');elm.knob({'value':0,'min':0,'max':100,'skin':'tron','readOnly':true,'thickness':0.07,'dynamicDraw':true,'displayInput':false});$({value:0}).animate({value:perc},{duration:2000,easing:'swing',progress:function(){elm.val(Math.ceil(this.value)).trigger('change');}});$(this).append(function(){elm.parent().parent().find('.circular-bar-content').css('color',color);elm.parent().parent().find('.circular-bar-content .txt').text(perc);});},{accY:20});}
if($('.progress-line').length){$('.progress-line').appear(function(){var el=$(this);var percent=el.data('width');$(el).css('width',percent+'%');},{accY:0});}
if($('.lightbox-image').length){$('.lightbox-image').fancybox({openEffect:'fade',closeEffect:'fade',helpers:{media:{}}});}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},0);});}
if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:false,live:true});wow.init();}
if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}
var $onepage_nav=$('.onepage-nav');var $sections=$('section');var $window=$(window);function TM_activateMenuItemOnReach(){if($onepage_nav.length>0){var cur_pos=$window.scrollTop()+2;var nav_height=$onepage_nav.outerHeight();$sections.each(function(){var top=$(this).offset().top-nav_height-80,bottom=top+$(this).outerHeight();if(cur_pos>=top&&cur_pos<=bottom){$onepage_nav.find('a').parent().removeClass('current').removeClass('active');$sections.removeClass('current').removeClass('active');$onepage_nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('current').addClass('active');}
if(cur_pos<=nav_height&&cur_pos>=0){$onepage_nav.find('a').parent().removeClass('current').removeClass('active');$onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');}});}}
$(window).on('scroll',function(){headerStyle();TM_activateMenuItemOnReach();});$(window).on('load',function(){handlePreloader();});})(window.jQuery);