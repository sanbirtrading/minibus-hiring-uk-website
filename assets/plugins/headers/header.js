!function(){"use strict";({initialized:!1,initialize:function(){this.initialized||(this.initialized=!0,this.build())},build:function(){this.fixedHeader(),this.initToggleMenu(),this.initSearchModal(),this.dropdownhover()},initSearchModal:function(n){$(document).on("click",".btn_header_search",function(n){n.preventDefault(),$(".header-search").addClass("open")}),$(document).on("click",".search-form_close , .search-close",function(n){n.preventDefault(),$(".header-search").removeClass("open")})},initToggleMenu:function(){$(".toggle-menu-button").each(function(n){var o=$(this),i=!0;o.on("click",function(n){n.preventDefault(),!0===i?($("#nav").addClass("navbar-scrolling-fixing"),o.hasClass("js-toggle-screen")&&$("#fixedMenu").delay(0).fadeIn(300),o.addClass("is-open"),i=!1):($("#fixedMenu").fadeOut(100),$("#nav").removeClass("navbar-scrolling-fixing"),o.removeClass("is-open"),i=!0)})})},dropdownhover:function(n){$(window).width()>798&&$(".yamm").on("mouseenter",".navbar-nav > .dropdown",function(){$(this).addClass("open")}).on("mouseleave",".navbar-nav > .dropdown",function(){$(this).removeClass("open")})},fixedHeader:function(n){$(window).width()>767&&($(window).scrollTop()>0&&$(".header").addClass("navbar-scrolling"),$(window).on("scroll",function(){$(this).scrollTop()>0?($("body").addClass("fixed-header"),$(".header").addClass("navbar-scrolling")):($("body").removeClass("fixed-header"),$(".header").removeClass("navbar-scrolling"))}))}}).initialize(),$(document).ready(function(){!function(){var n=$(window),o=$(".navbar-menu"),i=$(".navbar-nav");function e(){window.innerWidth<=1199?o.addClass("breakpoint-on"):o.removeClass("breakpoint-on")}$(".navbar-nav li ul li"),i.find("li a").each(function(){$(this).next().length>0&&$(this).parent("li").append('<span class="dd-trigger nav-link__icon"></span>')}),i.find("li .nav-link__icon").on("click",function(n){n.preventDefault(),$(this).parent("li").children("ul").stop(!0,!0).slideToggle(350),$(this).parent("li").toggleClass("active")}),e(),n.on("resize",function(){e()})}()}),$(".yamm >li").hover(function(){$(".dropdown-menu",this).fadeIn("fast")},function(){$(".dropdown-menu",this).fadeOut("fast")}),window.prettyPrint&&prettyPrint(),$(document).on("click",".yamm .dropdown-menu",function(n){n.stopPropagation()});var n=new slidebars;$(n.events).on("init",function(){}),$(n.events).on("exit",function(){}),$(n.events).on("css",function(){}),$(n.events).on("opening",function(n,o){}),$(n.events).on("opened",function(n,o){}),$(n.events).on("closing",function(n,o){}),$(n.events).on("closed",function(n,o){}),n.init(),$(".js-toggle-mobile-slidebar").on("click",function(o){o.stopPropagation(),n.toggle("mobile-slidebar")}),$(".js-open-slidebar-panel-left").on("click",function(o){o.preventDefault(),o.stopPropagation(),n.toggle("slidebar-panel-left")}),$(".js-open-left-slidebar").on("click",function(o){o.stopPropagation(),n.open("slidebar-1")}),$(".js-close-left-slidebar").on("click",function(o){o.stopPropagation(),n.close("slidebar-1")}),$(".js-toggle-left-slidebar").on("click",function(o){o.stopPropagation(),n.toggle("slidebar-1")}),$(".js-open-right-slidebar").on("click",function(o){o.stopPropagation(),n.open("slidebar-2")}),$(".js-close-right-slidebar").on("click",function(o){o.stopPropagation(),n.close("slidebar-2")}),$(".js-toggle-right-slidebar").on("click",function(o){o.stopPropagation(),n.toggle("slidebar-2")}),$(".js-open-top-slidebar").on("click",function(o){o.stopPropagation(),n.open("slidebar-3")}),$(".js-close-top-slidebar").on("click",function(o){o.stopPropagation(),n.close("slidebar-3")}),$(".js-toggle-top-slidebar").on("click",function(o){o.stopPropagation(),n.toggle("slidebar-3")}),$(".js-open-bottom-slidebar").on("click",function(o){o.stopPropagation(),n.open("slidebar-4")}),$(".js-close-bottom-slidebar").on("click",function(o){o.stopPropagation(),n.close("slidebar-4")}),$(".js-toggle-bottom-slidebar").on("click",function(o){o.stopPropagation(),n.toggle("slidebar-4")}),$(n.events).on("opened",function(){$('[data-canvas="container"]').addClass("js-close-any-slidebar"),$(".toggle-menu-button").addClass("is-open")}),$(n.events).on("closed",function(){$('[data-canvas="container"]').removeClass("js-close-any-slidebar"),$(".toggle-menu-button").removeClass("is-open")}),$("body").on("click",".js-close-any-slidebar",function(o){o.stopPropagation(),n.close()}),$(".js-initialize-slidebars").on("click",function(o){o.stopPropagation(),n.init()}),$(".js-exit-slidebars").on("click",function(o){o.stopPropagation(),n.exit()}),$(".js-reset-slidebars-css").on("click",function(o){o.stopPropagation(),n.css()}),$(".js-is-active").on("click",function(n){n.stopPropagation()}),$(".js-is-active-slidebar").on("click",function(n){n.stopPropagation();prompt("Enter a Slidebar id")}),$(".js-get-active-slidebar").on("click",function(n){n.stopPropagation()}),$(".js-get-all-slidebars").on("click",function(n){n.stopPropagation()}),$(".js-get-slidebar").on("click",function(n){n.stopPropagation();prompt("Enter a Slidebar id")}),$(".js-init-callback").on("click",function(o){o.stopPropagation(),n.init(function(){})}),$(".js-exit-callback").on("click",function(o){o.stopPropagation(),n.exit(function(){})}),$(".js-css-callback").on("click",function(o){o.stopPropagation(),n.css(function(){})}),$(".js-open-callback").on("click",function(o){o.stopPropagation(),n.open("slidebar-1",function(){})}),$(".js-close-callback").on("click",function(o){o.stopPropagation(),n.close(function(){})}),$(".js-toggle-callback").on("click",function(o){o.stopPropagation(),n.toggle("slidebar-1",function(){})})}();