!function(){var e=new Swiper(".swiper",{pagination:{el:".swiper-pagination"}});document.querySelector("[data-mousemove-swipe]")&&document.addEventListener("mousemove",(function(o){var t,i=o.target;if(i.closest("[data-mousemove-swipe]")){var a=i.closest("[data-mousemove-swipe]"),n=e[(t=a,Array.from(t.parentNode.children).indexOf(t))],r=n.slides.length;if(r>1){var s=n.width,d=Math.round(s/r),m=o.clientX-a.offsetLeft,f=Math.floor(m/d);n.slideTo(f)}}}))}();
//# sourceMappingURL=index.fba51b39.js.map