!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);window.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll(".expand_btn"),e=document.querySelectorAll(".expandable_box"),r=document.querySelectorAll(".expandable_title"),s=document.querySelectorAll(".expand_btn_icon");for(let n=0;n<t.length;n++)t[n].addEventListener("click",l=>{if(l.preventDefault(),e[n].style.maxHeight&&r[n].style.maxHeight)e[n].style.maxHeight=null,r[n].style.maxHeight=null,s[n].classList.remove("pinch");else{for(let n=0;n<t.length;n++)e[n].style.maxHeight=null,r[n].style.maxHeight=null,s[n].classList.remove("pinch");e[n].style.maxHeight=e[n].scrollHeight+"px",r[n].style.maxHeight=e[n].scrollHeight+"px",s[n].classList.add("pinch")}});let n=document.querySelector("#burger"),l=document.querySelector("#menu"),a=document.querySelector(".main"),o=document.querySelector(".footer"),m=document.querySelectorAll(".menu__item");var c;n.addEventListener("click",t=>{t.preventDefault(),t.target.classList.contains("tap-to-open")?(n.classList.remove("tap-to-open"),n.classList.add("tap-to-close"),n.classList.add("open-menu"),n.classList.remove("close-menu"),l.classList.add("open-menu"),l.classList.remove("close-menu"),document.body.classList.add("overflow-hidden"),a.classList.add("non-visible"),o.classList.add("non-visible")):t.target.classList.contains("tap-to-close")&&(n.classList.remove("tap-to-close"),n.classList.add("tap-to-open"),n.classList.remove("open-menu"),n.classList.add("close-menu"),l.classList.remove("open-menu"),l.classList.add("close-menu"),document.body.classList.remove("overflow-hidden"),a.classList.remove("non-visible"),o.classList.remove("non-visible"))}),m.forEach(t=>{t.addEventListener("click",()=>{n.classList.remove("tap-to-close"),n.classList.add("tap-to-open"),n.classList.remove("open-menu"),n.classList.add("close-menu"),l.classList.remove("open-menu"),l.classList.add("close-menu"),document.body.classList.remove("overflow-hidden"),a.classList.remove("non-visible"),o.classList.remove("non-visible")})}),c="anchor",document.querySelector("."+c)&&document.querySelectorAll("."+c).forEach(t=>{t.addEventListener("click",(function(e){if(document.getElementById(t.getAttribute("href").substring(1))){e.preventDefault();let r=t.getAttribute("href").substring(1);const s=0,n=document.getElementById(r).getBoundingClientRect().top-s;window.scrollBy({top:n,behavior:"smooth"})}}))});let d=document.querySelector("#run_team"),i=document.querySelector("#run_creative"),y=document.querySelector("#logo_box"),f=document.querySelector("#logo_img"),p=document.querySelector("#run_asteriks1"),u=document.querySelector("#run_asteriks2"),x=document.querySelector("#run_box1_t"),$=document.querySelector("#run_box1_d"),g=document.querySelector("#run_box2"),X=document.querySelector("#run_box3_item1"),v=document.querySelector("#run_box3_item2"),L=document.querySelector("#run_box3_item3"),h=document.querySelectorAll(".marquee"),E=document.querySelectorAll(".marquee_reverse");const H=document.documentElement,Y=document.body,b="scrollTop",S="scrollHeight";let q=window,_=document,w=_.documentElement,A=_.getElementsByTagName("body")[0],O=q.innerWidth||w.clientWidth||A.clientWidth;q.innerHeight||w.clientHeight||A.clientHeight;if(O>1024){let t=document.querySelector("#customCursor");document.addEventListener("mousemove",e=>{t.style.left=e.clientX+"px",t.style.top=e.clientY+"px"}),window.addEventListener("scroll",e=>{t.style.left=e.clientX+"px",t.style.top=e.clientY+"px"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t,r=1/(1+1.3*t);e<116?(y.style.transform=`translateY(${-e}px)`,f.style.transform=`scale(${r})`):(y.style.transform="translateY(-116px)",f.style.transform="scale(0.1155)")}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;d.style.transform=`translateX(${200*-t+3600}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;p.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;i.style.transform=`translateX(${220*-t+16e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;u.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;h[0].style.transform=`translateX(${80*-t*1+2e3}px)`,h[1].style.transform=`translateX(${80*-t*.8+2e3}px)`,h[2].style.transform=`translateX(${80*-t*.6+1500}px)`,h[3].style.transform=`translateX(${80*-t*1+2400}px)`,h[4].style.transform=`translateX(${80*-t*.8+1600}px)`,h[5].style.transform=`translateX(${80*-t*.6+1200}px)`,h[6].style.transform=`translateX(${80*-t*1+3100}px)`,h[7].style.transform=`translateX(${80*-t*.8+2300}px)`,h[8].style.transform=`translateX(${80*-t*.6+2300}px)`,h[9].style.transform=`translateX(${80*-t*1+2400}px)`,h[10].style.transform=`translateX(${80*-t*.8+1500}px)`,h[11].style.transform=`translateX(${80*-t*.6+1200}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;E[0].style.transform=`translateX(${80*t*.6-1500}px)`,E[1].style.transform=`translateX(${80*t*.8-2e3}px)`,E[2].style.transform=`translateX(${80*t*.6-1800}px)`,E[3].style.transform=`translateX(${80*t*.8-2500}px)`,E[4].style.transform=`translateX(${80*t*.6-1100}px)`,E[5].style.transform=`translateX(${80*t*.8-1500}px)`,E[6].style.transform=`translateX(${80*t*.6-1800}px)`,E[7].style.transform=`translateX(${80*t*.8-2500}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-850,r=18*t-850;20*t-850<0?(x.style.transform=`translateY(${-e}px)`,$.style.transform=`translateY(${-r}px)`):(x.style.transform="translateY(0px)",$.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)-1200;g.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1500<0?(X.style.transform=`translateY(${-e}px)`,v.style.transform=`translateY(${-r}px)`,L.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",v.style.transform="translateY(0px)",L.style.transform="translateY(0px)")});let e=document.querySelector(".calc-round"),r=document.querySelector(".order-round");document.addEventListener("scroll",()=>{let t=100*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100);e.style.transform=t<250?"rotate(0deg)":t<850?`rotate(${t/5}deg)`:"rotate(180deg)"}),document.addEventListener("scroll",()=>{let t=100*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)+600;r.style.transform=t<9e3?"rotate(1800deg)":t<9900?`rotate(${t/5}deg)`:"rotate(1980deg)"})}else if(O<=1024&&O>768){document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;d.style.transform=`translateX(${100*-t+1e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;p.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;i.style.transform=`translateX(${160*-t+11e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;u.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*1+1200}px)`,h[1].style.transform=`translateX(${60*-t*.8+1e3}px)`,h[2].style.transform=`translateX(${60*-t*.6+1e3}px)`,h[3].style.transform=`translateX(${60*-t*1+1600}px)`,h[4].style.transform=`translateX(${60*-t*.8+1400}px)`,h[5].style.transform=`translateX(${60*-t*.6+800}px)`,h[6].style.transform=`translateX(${60*-t*1+2300}px)`,h[7].style.transform=`translateX(${60*-t*.8+2e3}px)`,h[8].style.transform=`translateX(${60*-t*.6+1900}px)`,h[9].style.transform=`translateX(${60*-t*1+1800}px)`,h[10].style.transform=`translateX(${60*-t*.8+1200}px)`,h[11].style.transform=`translateX(${60*-t*.6+1e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;E[0].style.transform=`translateX(${60*t*.6-2e3}px)`,E[1].style.transform=`translateX(${60*t*.8-2400}px)`,E[2].style.transform=`translateX(${60*t*.6-2500}px)`,E[3].style.transform=`translateX(${60*t*.8-3100}px)`,E[4].style.transform=`translateX(${60*t*.6-1700}px)`,E[5].style.transform=`translateX(${60*t*.8-2e3}px)`,E[6].style.transform=`translateX(${60*t*.6-1100}px)`,E[7].style.transform=`translateX(${60*t*.8-1600}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(x.style.transform=`translateY(${-e}px)`,$.style.transform=`translateY(${-r}px)`):(x.style.transform="translateY(0px)",$.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)-1e3;g.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-1300,r=18*t-1200,s=16*t-1100;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,v.style.transform=`translateY(${-r}px)`,L.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",v.style.transform="translateY(0px)",L.style.transform="translateY(0px)")});let t=document.querySelector(".calc-round"),e=document.querySelector(".order-round");document.addEventListener("scroll",()=>{let e=100*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100);t.style.transform=e<200?"rotate(0deg)":e<850?`rotate(${e/5}deg)`:"rotate(180deg)"}),document.addEventListener("scroll",()=>{let t=100*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)+600;e.style.transform=t<9e3?"rotate(1800deg)":t<9900?`rotate(${t/5}deg)`:"rotate(1980deg)"})}else if(O<=768&&O>430){document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;d.style.transform=`translateX(${80*-t+600}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;p.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;i.style.transform=`translateX(${70*-t+5e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;u.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*1+1500}px)`,h[1].style.transform=`translateX(${60*-t*.8+1300}px)`,h[2].style.transform=`translateX(${60*-t*.6+1300}px)`,h[3].style.transform=`translateX(${60*-t*1+1600}px)`,h[4].style.transform=`translateX(${60*-t*.8+1400}px)`,h[5].style.transform=`translateX(${60*-t*.6+1e3}px)`,h[6].style.transform=`translateX(${60*-t*1+1600}px)`,h[7].style.transform=`translateX(${60*-t*.6+1700}px)`,h[8].style.transform=`translateX(${60*-t*.8+2200}px)`,h[9].style.transform=`translateX(${60*-t*1+1800}px)`,h[10].style.transform=`translateX(${60*-t*.8+1400}px)`,h[11].style.transform=`translateX(${60*-t*.6+1200}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;E[0].style.transform=`translateX(${60*t*.6-1100}px)`,E[1].style.transform=`translateX(${60*t*.8-1400}px)`,E[2].style.transform=`translateX(${60*t*.6-1500}px)`,E[3].style.transform=`translateX(${60*t*.8-2e3}px)`,E[4].style.transform=`translateX(${60*t*.6+100}px)`,E[5].style.transform=`translateX(${60*t*.8-200}px)`,E[6].style.transform=`translateX(${60*t*.6-1800}px)`,E[7].style.transform=`translateX(${60*t*.8-2400}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(x.style.transform=`translateY(${-e}px)`,$.style.transform=`translateY(${-r}px)`):(x.style.transform="translateY(0px)",$.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)-1e3;g.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-1300,r=18*t-1200,s=16*t-1100;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,v.style.transform=`translateY(${-r}px)`,L.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",v.style.transform="translateY(0px)",L.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=26.5*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}else if(O<=430&&O>375){document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;d.style.transform=`translateX(${40*-t+60}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;p.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;i.style.transform=`translateX(${50*-t+3500}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;u.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*.6+1500}px)`,h[1].style.transform=`translateX(${60*-t*.5+1400}px)`,h[2].style.transform=`translateX(${60*-t*.4+1400}px)`,h[3].style.transform=`translateX(${60*-t*.6+1500}px)`,h[4].style.transform=`translateX(${60*-t*.5+1300}px)`,h[5].style.transform=`translateX(${60*-t*.4+1300}px)`,h[6].style.transform=`translateX(${60*-t*.6+1500}px)`,h[7].style.transform=`translateX(${60*-t*.5+1800}px)`,h[8].style.transform=`translateX(${60*-t*.4+1700}px)`,h[9].style.transform=`translateX(${60*-t*.6+1700}px)`,h[10].style.transform=`translateX(${60*-t*.5+1600}px)`,h[11].style.transform=`translateX(${60*-t*.4+1400}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;E[0].style.transform=`translateX(${60*t*.4+150}px)`,E[1].style.transform=`translateX(${60*t*.5+1}px)`,E[2].style.transform=`translateX(${60*t*.4+1}px)`,E[3].style.transform=`translateX(${60*t*.5-150}px)`,E[4].style.transform=`translateX(${60*t*.4+400}px)`,E[5].style.transform=`translateX(${60*t*.5+700}px)`,E[6].style.transform=`translateX(${60*t*.4-200}px)`,E[7].style.transform=`translateX(${60*t*.5-500}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(x.style.transform=`translateY(${-e}px)`,$.style.transform=`translateY(${-r}px)`):(x.style.transform="translateY(0px)",$.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)-1100;g.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,v.style.transform=`translateY(${-r}px)`,L.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",v.style.transform="translateY(0px)",L.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=29*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}else{document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;d.style.transform=`translateX(${40*-t+40}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;p.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;i.style.transform=`translateX(${50*-t+3500}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;u.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*.6+1500}px)`,h[1].style.transform=`translateX(${60*-t*.5+1400}px)`,h[2].style.transform=`translateX(${60*-t*.4+1400}px)`,h[3].style.transform=`translateX(${60*-t*.6+1500}px)`,h[4].style.transform=`translateX(${60*-t*.5+1300}px)`,h[5].style.transform=`translateX(${60*-t*.4+1300}px)`,h[6].style.transform=`translateX(${60*-t*.6+1500}px)`,h[7].style.transform=`translateX(${60*-t*.5+1800}px)`,h[8].style.transform=`translateX(${60*-t*.4+1700}px)`,h[9].style.transform=`translateX(${60*-t*.6+1700}px)`,h[10].style.transform=`translateX(${60*-t*.5+1600}px)`,h[11].style.transform=`translateX(${60*-t*.4+1400}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100;E[0].style.transform=`translateX(${60*t*.4+150}px)`,E[1].style.transform=`translateX(${60*t*.5+1}px)`,E[2].style.transform=`translateX(${60*t*.4+1}px)`,E[3].style.transform=`translateX(${60*t*.5-150}px)`,E[4].style.transform=`translateX(${60*t*.4+400}px)`,E[5].style.transform=`translateX(${60*t*.5+700}px)`,E[6].style.transform=`translateX(${60*t*.4-200}px)`,E[7].style.transform=`translateX(${60*t*.5-500}px)`}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(x.style.transform=`translateY(${-e}px)`,$.style.transform=`translateY(${-r}px)`):(x.style.transform="translateY(0px)",$.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100)-1100;g.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,v.style.transform=`translateY(${-r}px)`,L.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",v.style.transform="translateY(0px)",L.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=27*((H[b]||Y[b])/((H[S]||Y[S])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}}))},function(t,e,r){}]);
//# sourceMappingURL=app.b49b0cf5.js.map