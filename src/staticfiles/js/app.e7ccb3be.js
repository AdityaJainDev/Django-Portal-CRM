(self.webpackChunk=self.webpackChunk||[]).push([[143],{1529:(e,t,i)=>{var r={"./basics.js":3141,"./blocks/article-preview.js":1089,"./blocks/faq.js":4259,"./blocks/product-boxes.js":4332,"./blocks/square-cards.js":156,"./partials/hamburger.js":4054};function n(e){var t=o(e);return i(t)}function o(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=1529},7342:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});const r={}},3141:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ArticlePreview:()=>r.p,SquareCards:()=>n.H,ProductBoxes:()=>o.G,Faq:()=>s.B});var r=i(2908),n=i(5021),o=i(7667),s=i(3663)},1089:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ArticlePreview:()=>a});i(9070);var r=i(3845),n=i(5186),o=i(2997);function s(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r.Z.use([n.Z,o.Z]);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,console.log("init"),this.container=t.querySelector(".article-preview__container"),this.images=t.querySelectorAll(".article-preview__images"),this.mobileDetection(),this.swiper=null,this.swiperClass="article-preview--swiper",this.initSwiper()}var t,i,n;return t=e,(i=[{key:"initSwiper",value:function(){this.swiper&&(this.swiper.destroy(),this.swiper=null),this.swiperConfig={loop:!1,slidesPerView:"auto",pagination:{el:".swiper-pagination"},spaceBetween:20},this.swiperConfigDesktop={slidesPerView:3,slidesPerGroup:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},this.el.classList.remove(this.swiperClass),this.mediaObj.matches&&(this.el.classList.add(this.swiperClass),this.swiper=new r.Z(this.container,this.swiperConfig)),this.mediaObj.matches||(this.el.classList.add(this.swiperClass),this.swiper=new r.Z(this.container,this.swiperConfigDesktop))}},{key:"mobileDetection",value:function(){this.mediaObj=window.matchMedia("(max-width: 480px)")}},{key:"onResize",value:function(){console.log("RESIZE ARTICLE PREVIEW"),this.initSwiper()}}])&&s(t.prototype,i),n&&s(t,n),e}()},4259:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Faq:()=>n});i(9554),i(4747),i(2564),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;document.querySelectorAll(".single-faq__header").forEach((function(e){t.initSingleFaq(e)}))}var t,i,n;return t=e,(i=[{key:"initSingleFaq",value:function(e){var t=this;e.addEventListener("click",(function(e){e.preventDefault();var i=e.target;t.slideToggle(i.parentElement.querySelector(".single-faq__text")),i.parentElement.classList.toggle("opened")}))}},{key:"slideUp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}},{key:"slideDown",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");var i=window.getComputedStyle(e).display;"none"===i&&(i="block"),e.style.display=i;var r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}},{key:"slideToggle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?this.slideDown(e,t):this.slideUp(e,t)}}])&&r(t.prototype,i),n&&r(t,n),e}()},4332:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ProductBoxes:()=>n});i(9554),i(4747),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.products=t.querySelectorAll(".product-boxes__box"),this.productActive="product-boxes__box--active",this.ctaHover="hover",this.initRollover(),this.mobileDetection()}var t,i,n;return t=e,(i=[{key:"mobileDetection",value:function(){return this.mediaObj=window.matchMedia("(max-width: 1023px)"),this.mediaObj.matches}},{key:"onResize",value:function(){}},{key:"initRollover",value:function(){var e=this;this.products.forEach((function(t,i){t.addEventListener("mouseenter",(function(i){e.mobileDetection()||(t.classList.add(e.productActive),t.querySelector(".cta-btn").classList.add(e.ctaHover))})),t.addEventListener("mouseleave",(function(i){e.mobileDetection()||(t.classList.remove(e.productActive),t.querySelector(".cta-btn").classList.remove(e.ctaHover))})),t.addEventListener("click",(function(i){t.querySelector(".cta-btn").click();var r=t.querySelector(".cta-btn");console.log(r),e.mobileDetection()&&(e.products.forEach((function(t){t.classList.remove(e.productActive)})),t.classList.add(e.productActive))}))}))}}])&&r(t.prototype,i),n&&r(t,n),e}()},156:(e,t,i)=>{"use strict";i.r(t),i.d(t,{SquareCards:()=>n});i(9554),i(4747),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.items=t.querySelectorAll(".square-cards__images"),this.itemsActive="square-cards__images--active",this.initRollover(),this.mobileDetection()}var t,i,n;return t=e,(i=[{key:"mobileDetection",value:function(){return this.mediaObj=window.matchMedia("(max-width: 1023px)"),this.mediaObj.matches}},{key:"onResize",value:function(){}},{key:"initRollover",value:function(){var e=this;this.items.forEach((function(t,i){t.addEventListener("mouseenter",(function(i){e.mobileDetection()||t.classList.add(e.itemsActive)})),t.addEventListener("mouseleave",(function(i){e.mobileDetection()||t.classList.remove(e.itemsActive)})),t.addEventListener("click",(function(i){e.mobileDetection()&&(e.items.forEach((function(t){t.classList.remove(e.itemsActive)})),t.classList.add(e.itemsActive))}))}))}}])&&r(t.prototype,i),n&&r(t,n),e}()},4054:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Hamburger:()=>n});i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.headerDesktop=t.querySelector(".header__container"),this.headerOnScroll="header__container--onScroll",this.hamburger=t.querySelector(".hamburger"),this.hamburgerActive="is-active",this.list=t.querySelector(".header__list-mobile"),this.listShow="header__list-mobile--show",this.addHamburger(),this.onScroll()}var t,i,n;return t=e,(i=[{key:"addHamburger",value:function(){var e=this;this.hamburger.addEventListener("click",(function(t){e.hamburger.classList.toggle(e.hamburgerActive),e.list.classList.toggle(e.listShow),document.body.classList.toggle("lockScroll")}))}},{key:"onScroll",value:function(){var e=0,t=!1,i=this;document.addEventListener("scroll",(function(r){e=window.scrollY,t||(window.requestAnimationFrame((function(){e>10?i.headerDesktop.classList.add(i.headerOnScroll):i.headerDesktop.classList.remove(i.headerOnScroll),t=!1})),t=!0)}))}},{key:"onResize",value:function(){}}])&&r(t.prototype,i),n&&r(t,n),e}()},1621:(e,t,i)=>{"use strict";i(2222),i(9554),i(4747),i(7042),i(1539),i(8309),i(1038),i(8783),i(2526),i(1817),i(2165),i(6992),i(3948),i(9753),(0,i(2192).x)(i(1529));var r=i(2711),n=i.n(r);i(9070);function o(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.headerDesktop=t.querySelector(".header__container"),this.headerOnScroll="header__container--onScroll",this.hamburger=t.querySelector(".hamburger"),this.hamburgerActive="is-active",this.list=t.querySelector(".header__list-mobile"),this.listShow="header__list-mobile--show",this.addHamburger(),this.onScroll()}var t,i,r;return t=e,(i=[{key:"addHamburger",value:function(){var e=this;this.hamburger.addEventListener("click",(function(t){e.hamburger.classList.toggle(e.hamburgerActive),e.list.classList.toggle(e.listShow),document.body.classList.toggle("lockScroll")}))}},{key:"onScroll",value:function(){var e=0,t=!1,i=this;document.addEventListener("scroll",(function(r){e=window.scrollY,t||(window.requestAnimationFrame((function(){e>10?i.headerDesktop.classList.add(i.headerOnScroll):i.headerDesktop.classList.remove(i.headerOnScroll),t=!1})),t=!0)}))}},{key:"onResize",value:function(){}}])&&o(t.prototype,i),r&&o(t,r),e}(),a=i(2908),l=i(5021),c=i(7667),u=i(3663);function d(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var v=i(296);!function(){var e=[];if(document.querySelector(".header")){var t,i=d(document.querySelectorAll(".header"));try{for(i.s();!(t=i.n()).done;){var r=t.value;e.push(new s(r))}}catch(e){i.e(e)}finally{i.f()}}if(document.querySelector(".article-preview")){var o,h=d(document.querySelectorAll(".article-preview"));try{for(h.s();!(o=h.n()).done;){var p=o.value;e.push(new a.p(p))}}catch(e){h.e(e)}finally{h.f()}}if(document.querySelector(".square-cards")){var f,y=d(document.querySelectorAll(".square-cards"));try{for(y.s();!(f=y.n()).done;){var m=f.value;e.push(new l.H(m))}}catch(e){y.e(e)}finally{y.f()}}if(document.querySelector(".product-boxes")){var g,w=d(document.querySelectorAll(".product-boxes"));try{for(w.s();!(g=w.n()).done;){var b=g.value;e.push(new c.G(b))}}catch(e){w.e(e)}finally{w.f()}}new u.B;var S=function(){return{w:window.innerWidth,h:window.innerHeight}},k=S();window.addEventListener("resize",v((function(){requestAnimationFrame((function(){var t=S(),i=!1,r=!1;k.w!==t.w&&(r=!0),k.h!==t.h&&(i=!0),[].concat(e).forEach((function(e){e.onResize&&"function"==typeof e.onResize&&e.onResize(r,i)}))}))}),250)),document.body.dataset.preview?n().init({disable:!0}):n().init({duration:500,offset:150,delay:150,anchorPlacement:"center-center",once:!1,easing:"ease-out"})}()},2908:(e,t,i)=>{"use strict";i.d(t,{p:()=>a});i(9070);var r=i(3845),n=i(5186),o=i(2997);function s(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r.Z.use([n.Z,o.Z]);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,console.log("init"),this.container=t.querySelector(".article-preview__container"),this.images=t.querySelectorAll(".article-preview__images"),this.mobileDetection(),this.swiper=null,this.swiperClass="article-preview--swiper",this.initSwiper()}var t,i,n;return t=e,(i=[{key:"initSwiper",value:function(){this.swiper&&(this.swiper.destroy(),this.swiper=null),this.swiperConfig={loop:!1,slidesPerView:"auto",pagination:{el:".swiper-pagination"},spaceBetween:20},this.swiperConfigDesktop={slidesPerView:3,slidesPerGroup:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},this.el.classList.remove(this.swiperClass),this.mediaObj.matches&&(this.el.classList.add(this.swiperClass),this.swiper=new r.Z(this.container,this.swiperConfig)),this.mediaObj.matches||(this.el.classList.add(this.swiperClass),this.swiper=new r.Z(this.container,this.swiperConfigDesktop))}},{key:"mobileDetection",value:function(){this.mediaObj=window.matchMedia("(max-width: 480px)")}},{key:"onResize",value:function(){console.log("RESIZE ARTICLE PREVIEW"),this.initSwiper()}}])&&s(t.prototype,i),n&&s(t,n),e}()},3663:(e,t,i)=>{"use strict";i.d(t,{B:()=>n});i(9554),i(4747),i(2564),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;document.querySelectorAll(".single-faq__header").forEach((function(e){t.initSingleFaq(e)}))}var t,i,n;return t=e,(i=[{key:"initSingleFaq",value:function(e){var t=this;e.addEventListener("click",(function(e){e.preventDefault();var i=e.target;t.slideToggle(i.parentElement.querySelector(".single-faq__text")),i.parentElement.classList.toggle("opened")}))}},{key:"slideUp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}},{key:"slideDown",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");var i=window.getComputedStyle(e).display;"none"===i&&(i="block"),e.style.display=i;var r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}},{key:"slideToggle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?this.slideDown(e,t):this.slideUp(e,t)}}])&&r(t.prototype,i),n&&r(t,n),e}()},7667:(e,t,i)=>{"use strict";i.d(t,{G:()=>n});i(9554),i(4747),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.products=t.querySelectorAll(".product-boxes__box"),this.productActive="product-boxes__box--active",this.ctaHover="hover",this.initRollover(),this.mobileDetection()}var t,i,n;return t=e,(i=[{key:"mobileDetection",value:function(){return this.mediaObj=window.matchMedia("(max-width: 1023px)"),this.mediaObj.matches}},{key:"onResize",value:function(){}},{key:"initRollover",value:function(){var e=this;this.products.forEach((function(t,i){t.addEventListener("mouseenter",(function(i){e.mobileDetection()||(t.classList.add(e.productActive),t.querySelector(".cta-btn").classList.add(e.ctaHover))})),t.addEventListener("mouseleave",(function(i){e.mobileDetection()||(t.classList.remove(e.productActive),t.querySelector(".cta-btn").classList.remove(e.ctaHover))})),t.addEventListener("click",(function(i){t.querySelector(".cta-btn").click();var r=t.querySelector(".cta-btn");console.log(r),e.mobileDetection()&&(e.products.forEach((function(t){t.classList.remove(e.productActive)})),t.classList.add(e.productActive))}))}))}}])&&r(t.prototype,i),n&&r(t,n),e}()},5021:(e,t,i)=>{"use strict";i.d(t,{H:()=>n});i(9554),i(4747),i(9070);function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.items=t.querySelectorAll(".square-cards__images"),this.itemsActive="square-cards__images--active",this.initRollover(),this.mobileDetection()}var t,i,n;return t=e,(i=[{key:"mobileDetection",value:function(){return this.mediaObj=window.matchMedia("(max-width: 1023px)"),this.mediaObj.matches}},{key:"onResize",value:function(){}},{key:"initRollover",value:function(){var e=this;this.items.forEach((function(t,i){t.addEventListener("mouseenter",(function(i){e.mobileDetection()||t.classList.add(e.itemsActive)})),t.addEventListener("mouseleave",(function(i){e.mobileDetection()||t.classList.remove(e.itemsActive)})),t.addEventListener("click",(function(i){e.mobileDetection()&&(e.items.forEach((function(t){t.classList.remove(e.itemsActive)})),t.classList.add(e.itemsActive))}))}))}}])&&r(t.prototype,i),n&&r(t,n),e}()}},e=>{"use strict";e.O(0,[983],(()=>{return t=1621,e(e.s=t);var t}));e.O()}]);