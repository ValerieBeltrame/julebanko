(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/sleigh.a1326e45.svg"},function(e,t,n){e.exports=n.p+"static/media/present.ddfb8f45.svg"},function(e,t,n){e.exports=n.p+"static/media/snow.14206736.svg"},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);for(var a=n(0),s=n.n(a),r=n(2),i=n.n(r),o=(n(16),n(3)),l=n(4),u=n(9),c=n(5),m=n(10),b=n(6),p=n.n(b),d=n(7),f=n.n(d),h=n(8),v=n.n(h),g=(n(18),[]),y=1;y<=50;y++)g.push(y);window.onbeforeunload=function(){return""};var N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={usedNumbers:[],availableNumbers:g,currentNumber:null,animations:{button:null,sleigh:null,present:null},opacity:{},display:{}},n.pickRandomNumber=function(){var e=n.shuffle(n.state.availableNumbers),t=e.slice(1,e.length);n.setState({currentNumber:e[0],availableNumbers:t,animations:{button:"buttonHide 2s",sleigh:"sleighpath 4s ease 0s forwards",present:"presentgrowth 2s ease-in 3.2s",number:"numberAppear 2s ease-in 5.2s"},display:{present:"block",number:"block"}}),setTimeout(function(){n.setState({opacity:{button:0},display:{present:"block",number:"block",button:"none"}})},1e3),setTimeout(function(){n.setState({opacity:{button:0,number:1}})},5500)},n.shuffle=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},n.resetAnimations=function(){var e=n.state.usedNumbers.slice();e.push(n.state.currentNumber),n.setState({usedNumbers:e,animations:{button:"buttonAppear 1s",sleigh:"",present:"",number:"numberHide 1s"},display:{present:"none",number:"block",button:"inline"},opacity:{button:1}}),setTimeout(function(){n.setState({display:{present:"none",number:"none",button:"inline"}})},1e3)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.usedNumbers,n=e.animations,a=e.opacity,r=e.currentNumber,i=e.display;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"KNO's festlige Banko"),s.a.createElement("button",{className:"pickButton",onClick:this.pickRandomNumber,style:{animation:n.button,opacity:a.button,display:i.button}},"Go!"),s.a.createElement("div",{className:"numberContainer"},s.a.createElement("div",null,s.a.createElement("span",{onClick:this.resetAnimations,className:"number",style:{animation:n.number,opacity:a.number,display:i.number}},r),s.a.createElement("span",{className:"present",style:{animation:n.present}},s.a.createElement("img",{src:f.a})))),s.a.createElement("img",{src:p.a,id:"sleigh",style:{animation:n.sleigh}}),s.a.createElement("div",{className:"side"},t.map(function(e){return s.a.createElement("div",{className:"sideNumber"},e)})),s.a.createElement("div",{className:"bottom"},s.a.createElement("img",{src:v.a}),s.a.createElement("span",null,s.a.createElement("i",null,"Gl\xe6delig jul")," fra Personaleforeningen, a part of UVdata, a part of KMD.")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.07aff5c8.chunk.js.map