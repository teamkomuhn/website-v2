!function(){for(var t,o=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=e.length,n=window.console=window.console||{};i--;)t=e[i],n[t]||(n[t]=o)}(),function($){var t=$(window);$.fn.visible=function(o,e,i,n){if(!(this.length<1)){i=i||"both";var l=this.length>1?this.eq(0):this,r="undefined"!=typeof n&&null!==n,s=r?$(n):t,c=r?s.position():0,f=l.get(0),a=s.outerWidth(),h=s.outerHeight(),u=e===!0?f.offsetWidth*f.offsetHeight:!0;if("function"==typeof f.getBoundingClientRect){var d=f.getBoundingClientRect(),g=r?d.top-c.top>=0&&d.top<h+c.top:d.top>=0&&d.top<h,p=r?d.bottom-c.top>0&&d.bottom<=h+c.top:d.bottom>0&&d.bottom<=h,v=r?d.left-c.left>=0&&d.left<a+c.left:d.left>=0&&d.left<a,m=r?d.right-c.left>0&&d.right<a+c.left:d.right>0&&d.right<=a,b=o?g||p:g&&p,w=o?v||m:v&&m,b=d.top<0&&d.bottom>h?!0:b,w=d.left<0&&d.right>a?!0:w;if("both"===i)return u&&b&&w;if("vertical"===i)return u&&b;if("horizontal"===i)return u&&w}else{var k=r?0:c,C=k+h,y=s.scrollLeft(),x=y+a,E=l.position(),q=E.top,z=q+l.height(),B=E.left,H=B+l.width(),R=o===!0?z:q,T=o===!0?q:z,W=o===!0?H:B,j=o===!0?B:H;if("both"===i)return!!u&&C>=T&&R>=k&&x>=j&&W>=y;if("vertical"===i)return!!u&&C>=T&&R>=k;if("horizontal"===i)return!!u&&x>=j&&W>=y}}}}(jQuery),$(function(){"use strict";function t(t){$("html, body").animate({scrollTop:$(t).offset().top},500)}function o(){$(".nav.dot > li, .strengths > ol > li").removeClass("current"),$(".strengths > ol > li").eq(e).addClass("current"),$(".nav.dot > li").eq(e).addClass("current"),t("#strengths")}$("a.scroll-to").on("click",function(){var o=$(this).attr("href");t(o)});var e=0;$(".strengths > ol > li").on("click","h3",function(){e=$(this).closest("li").index(),o()}),$(".nav.dot").on("click","li",function(){e=$(this).index(),o()}),$(".strengths .content").on("swipeleft",function(){e+=1,e>=6&&(e=0),o()}),$(".strengths .content").on("swiperight",function(){e-=1,-1>=e&&(e=5),o()}),$(".links").on("click","button",function(){$(this).closest("aside").toggleClass("active");var o=$(this).closest("header").attr("id");t("#"+o)}),$(document).on("click",function(t){$(t.target).closest(".links").length||$(".links").removeClass("active")}),$.mobile.loading().hide();var i=["hello","olá","moi"],n=0;setInterval(function(){$("#say-hi").html(i[n]),n++,n>=i.length&&(n=0)},1500),$(window).scroll(function(){$("#strengths").visible(!0,!0)?$("#nav-dot").css("opacity",1):$("#nav-dot").css("opacity",0)})});
//# sourceMappingURL=./main-min.js.map