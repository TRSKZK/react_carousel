(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),s=n.n(a),r=n(2),c=n(3),i=n(5),o=n(4),l=n(1),u=n.n(l),m=(n(12),n(13),n(0)),b=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={scroll:0,maxWidth:1300},t.scrollLeft=function(e){t.setState((function(t){return{scroll:t.scroll-e}}))},t.scrollRight=function(e){t.setState((function(t){return{scroll:t.scroll+e}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.itemWidth,a=e.frameSize,s=e.step,r=e.animationDuration,c=this.state,i=c.scroll,o=c.maxWidth,l=n*a,u=s*n,b=Math.abs(i)-u<0,h=s<3?Math.abs(i-u)>o-u:Math.abs(i-u)>o;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("div",{style:{maxWidth:"".concat(l,"px")},className:"container",children:Object(m.jsx)("ul",{style:{transform:"translateX(".concat(i,"px)"),transition:"transform ".concat(r,"ms")},className:"Carousel__list",children:this.props.images.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{style:{width:"".concat(n)},src:t,alt:"smile"})},t)}))})}),Object(m.jsx)("div",{className:"wrapp",children:Object(m.jsxs)("div",{className:"Carousel__buttons--container",children:[Object(m.jsx)("button",{disabled:b,onClick:function(){return t.scrollRight(u)},className:"button Carousel__buttons--container--button",type:"button",children:"Prev"}),Object(m.jsx)("button",{disabled:h,onClick:function(){return t.scrollLeft(u)},className:"button Carousel__buttons--container--button",type:"button",children:"Next"})]})})]})}}]),n}(u.a.Component),h=b,p=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(m.jsx)(h,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3})]})}}]),n}(u.a.Component),j=p;s.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b0b1e04.chunk.js.map