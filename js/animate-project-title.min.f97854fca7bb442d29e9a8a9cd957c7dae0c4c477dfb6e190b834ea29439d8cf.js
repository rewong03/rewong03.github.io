$(document).ready(function(){setTimeout(function(){$('.project-title').animate({'opacity':1},2000);},100)
setTimeout(function(){$('.project-description').animate({'opacity':1},2000);},200)
setTimeout(function(){$('.project-tech').animate({'opacity':1},2000);},300)
setTimeout(function(){$('.project-team').animate({'opacity':1},2000);},400)
setTimeout(function(){$('.project-time').animate({'opacity':1},2000);},500)
setTimeout(function(){$('.project-title-image').animate({'opacity':1},2000);},600)})
$(window).scroll(function(){$(".project-title-section").css("opacity",1-$(window).scrollTop()/500);});