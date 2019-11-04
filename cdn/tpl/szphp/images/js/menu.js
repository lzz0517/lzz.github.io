// JavaScript Document
function dropMenu(obj){
	$(obj).each(function(){
	var theSpan = $(this);
	var theMenu = theSpan.find(".submenu");
	var tarHeight = theMenu.height();
	theMenu.css({});
	var t1;
	function expand() {
	clearTimeout(t1);
	theSpan.find('a').addClass("selected");
	theMenu.stop().show().animate({},200);
	}
	function collapse() {
	clearTimeout(t1);
	t1 = setTimeout(function(){
	theSpan.find('a').removeClass("selected");
	theMenu.stop().animate({},200,function(){
	$(this).css({});
	});
	}, 0);
	}
	theSpan.hover(expand, collapse);
	theMenu.hover(expand, collapse);
	});
}
$(document).ready(function(){dropMenu(".drop_menu");});