$(function(){"use strict";function t(){$(".nav.dot > li, .strengths > ol > li").removeClass("current"),$(".strengths > ol > li").eq(n).addClass("current"),$(".nav.dot > li").eq(n).addClass("current"),$("html, body").animate({scrollTop:$("#strengths").offset().top},500)}var n=0;$(".strengths > ol > li").on("click","h3",function(){n=$(this).closest("li").index(),t()}),$(".nav.dot").on("click","li",function(){n=$(this).index(),t()}),$(".strengths .content").on("swipeleft",function(){n+=1,n>=8&&(n=0),t()}),$(".strengths .content").on("swiperight",function(){n-=1,-1>=n&&(n=7),t()}),$(".links").on("click","button",function(){$(this).closest("aside").toggleClass("active");var t=$(this).closest("header").attr("id");$("html, body").animate({scrollTop:$("#"+t).offset().top},500)}),$(document).on("click",function(t){$(t.target).closest(".links").length||$(".links").removeClass("active")}),$.mobile.loading().hide()});