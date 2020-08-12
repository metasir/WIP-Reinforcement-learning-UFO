(this["webpackJsonpreinforcement-demo"]=this["webpackJsonpreinforcement-demo"]||[]).push([[0],{101:function(t,e){},102:function(t,e){},113:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},121:function(t,e,n){"use strict";n.r(e);var i=n(29),a=n.n(i),r=n(71),s=n.n(r),o=(n(95),n(96),n(3)),c=n.n(o),h=n(16),u=n(4),l=n(46),f=n(7),g=n(15),p=function(){function t(e){var n=e.two,i=e.x,a=e.y;Object(f.a)(this,t);var r=[0,0];this.baseX=r[0],this.baseY=r[1],this.two=n;var s={x:this.baseX-15,y:this.baseY+8},o=this.baseX+15,c=(this.baseY,new l.a.Ellipse(this.baseX,this.baseY,30,10));c.fill="#AAAAAA";var h=new l.a.ArcSegment(this.baseX,this.baseY,0,15,-Math.PI,0);h.fill="#DDDDDD",this.leftFlameTip=new l.a.Anchor(s.x,s.y+15);var u=[new l.a.Anchor(s.x-5,s.y),this.leftFlameTip,new l.a.Anchor(s.x+5,s.y)],g=new l.a.Path(u,!1,!1);g.fill="Red";var p=g.clone();this.rightFlameTip=p.vertices[1],p.vertices.forEach((function(t){t.x+=o-s.x})),this.group=n.makeGroup(g,p,c,h),n.add(this.group),this.group.translation.set(i,a),this.leftEngine=!0,this.rightEngine=!0,this.v=new l.a.Vector(0,0),this.aV=.1}return Object(g.a)(t,[{key:"reset",value:function(t,e){this.group.translation.set(t,e),this.group.rotation=0,this.v.set(0,0),this.aV=0,this.leftEngine=!0,this.rightEngine=!0}},{key:"applyPhysics",value:function(t){if(!((t/=1e3)>1)){var e=this.acceleration,n=this.angularAcceleration;this.group.translation.addSelf(this.v.clone().multiplyScalar(t));var i=this.group.translation.clone();i.x=Math.max(this.minX,Math.min(i.x,this.maxX)),i.y=Math.max(this.minY,Math.min(i.y,this.maxY)),this.group.translation=i,this.group.rotation+=this.aV*t,this.v.multiplyScalar(1-t*this.velocityDecay),this.v.addSelf(e.multiplyScalar(t)),this.v.x=this.minX<i.x&&i.x<this.maxX?this.v.x:this.v.x/1e3,this.v.y=this.minY<i.y&&i.y<this.maxY?this.v.y:this.v.y/1e3,this.aV*=1-t*this.angularDecay,this.aV+=n}}},{key:"theta",get:function(){return this.group.rotation-Math.PI/2}},{key:"state",get:function(){return{pos:this.group.translation,theta:this.group.rotation,v:this.v,aV:this.aV}}},{key:"gravity",get:function(){return 300}},{key:"engineForce",get:function(){return 250}},{key:"engineTorque",get:function(){return.1}},{key:"velocityDecay",get:function(){return.2}},{key:"angularDecay",get:function(){return.5}},{key:"maxY",get:function(){return this.two.height-20}},{key:"maxX",get:function(){return this.two.width-20}},{key:"minY",get:function(){return 20}},{key:"minX",get:function(){return 20}},{key:"acceleration",get:function(){var t=this.theta,e=[this.le,this.re],n=((e[0]?1:0)+(e[1]?1:0))*this.engineForce,i=this.gravity+n*Math.sin(t),a=n*Math.cos(t);return new l.a.Vector(a,i)}},{key:"angularAcceleration",get:function(){var t=[this.leftEngine,this.rightEngine],e=t[0],n=t[1];return e&&!n?this.engineTorque:!e&&n?-this.engineTorque:0}},{key:"le",get:function(){return this.leftEngine},set:function(t){this.leftEngine=t,this.leftFlameTip.y=t?this.baseY+23:this.baseY}},{key:"re",get:function(){return this.rightEngine},set:function(t){this.rightEngine=t,this.rightFlameTip.y=t?this.baseY+23:this.baseY}}]),t}(),y=n(53);function m(){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"./agent/model.json",t.next=3,y.a("./agent/model.json");case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){var e=Object(i.useRef)(null),n=Object(i.useState)(!1),r=Object(u.a)(n,2),s=r[0],o=r[1],f=Object(i.useState)(null),g=Object(u.a)(f,2),v=g[0],b=g[1],d=Object(i.useState)(null),k=Object(u.a)(d,2),w=k[0],x=k[1],E=Object(i.useState)(null),j=Object(u.a)(E,2),O=(j[0],j[1]);function S(){return(S=Object(h.a)(c.a.mark((function t(){var e,n,i,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 500,400,250,350,e=300,n=150,i=new l.a({height:400,width:500,autostart:!0}),i.makePath(0,0,0,400,15,380,15,0,!0).fill="#e5e5e5",i.makePath(15,380,500,380,500,400,0,400).fill="#ccddcc",i.makeLine(e-10,n-10,e+10,n+10),i.makeLine(e+10,n-10,e-10,n+10),a=new p({two:i,x:250,y:350}),t.next=13,m();case 13:r=t.sent,i.bind("update",(function(t,i){a.applyPhysics(i);var s=a.state,o=r.predict({discount:y.c([1]),reward:y.c([0]),observation:y.c([[e-s.pos.x,n-s.pos.y,Math.sin(s.theta),Math.cos(s.theta),s.v.x,s.v.y,s.aV]])},{batchSize:1}).arraySync()[0];a.le=Math.floor(o/2),a.re=o%2})),b(a),O(r),x(i);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){w&&(w.appendTo(e.current),w.play())}),[w]),a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(t){t.preventDefault(),v&&v.reset(100,100),s&&w&&(w.bind("update",(function(t,e){v.applyPhysics(e)})),o(!1))}},"Reset"),a.a.createElement("button",{onClick:function(t){t.preventDefault(),w&&(s?(w.bind("update",(function(t,e){v.applyPhysics(e)})),o(!1)):(w.unbind("update"),o(!0)))}},s?"Start":"Stop"),a.a.createElement("p",null,"An intelligent UFO taught by reinforcement learning is aiming to hover near the X."),a.a.createElement("br",null),w?null:a.a.createElement("h3",null,"Loading..."),a.a.createElement("div",{ref:e,style:{border:"solid",display:"inline-block"}}))}y.b("BroadcastArgs");var d=function(){return a.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},90:function(t,e,n){t.exports=n(121)},95:function(t,e,n){},96:function(t,e,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.17dfe516.chunk.js.map