(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(t,e,i){},170:function(t,e,i){"use strict";var s=i(3),n=i(13),r=i(12),a=i(74),o=i(72),c=i(5),h=i(96).f,u=i(95).f,l=i(8).f,d=i(94).trim,f=s.Number,m=f,v=f.prototype,I="Number"==r(i(73)(v)),p="trim"in String.prototype,w=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var i,s,n,r=(e=p?e.trim():d(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var a,c=e.slice(2),h=0,u=c.length;h<u;h++)if((a=c.charCodeAt(h))<48||a>n)return NaN;return parseInt(c,s)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof f&&(I?c(function(){v.valueOf.call(i)}):"Number"!=r(i))?a(new m(w(e)),i,f):w(e)};for(var g,N=i(7)?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)n(m,g=N[x])&&!n(f,g)&&l(f,g,u(m,g));f.prototype=v,v.constructor=f,i(9)(s,"Number",f)}},171:function(t,e,i){"use strict";var s=i(168);i.n(s).a},173:function(t,e,i){"use strict";i.r(e);i(170);var s={created:function(){var t=this;this.timer=setInterval(function(){t.next()},this.delay)},beforeDestroy:function(){clearInterval(this.timer)},props:{imgs:{type:Array,required:!0},delay:{type:Number,default:function(){return 2e3}},imgWidth:{default:function(){return 400}},imgHeight:{default:function(){return 302}},dotWidth:{default:function(){return 20}}},data:function(){return{showIndex:0,timer:null,show:!1}},methods:{previous:function(){this.showIndex<=0?this.showIndex=this.imgs.length-1:this.showIndex--},next:function(){this.showIndex>=this.imgs.length-1?this.showIndex=0:this.showIndex++},start:function(){var t=this;this.show=!1,clearInterval(this.timer),this.timer=setInterval(function(){t.next()},this.delay)},stop:function(){this.show=!0,clearInterval(this.timer)}}},n=(i(171),i(0)),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuecarousel"},[i("div",{staticClass:"contain",style:{width:t.imgWidth+"rem",height:t.imgHeight+"rem"},on:{mouseenter:t.stop,mouseleave:t.start}},[i("ul",{staticClass:"ul"},t._l(t.imgs,function(e,s){return i("li",{directives:[{name:"show",rawName:"v-show",value:s==t.showIndex,expression:"index == showIndex"}],key:s,staticClass:"items"},[i("img",{attrs:{src:e.src,alt:""}})])}),0),t._v(" "),i("ul",{staticClass:"dots",style:{width:t.imgs.length*(t.dotWidth+10)+"px",height:t.dotWidth+"px"}},t._l(t.imgs,function(e,s){return i("li",{key:s,class:s==t.showIndex?"active":"",style:{width:t.dotWidth+"px",height:t.dotWidth+"px"},on:{click:function(e){t.showIndex=s}}})}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"control"},[i("span",{staticClass:"left",on:{click:t.previous}},[t._v("\n                <")]),t._v(" "),i("span",{staticClass:"right",on:{click:t.next}},[t._v(">\n            ")])])])])},[],!1,null,"a1c239d8",null);e.default=r.exports}}]);