(this.webpackJsonpminer=this.webpackJsonpminer||[]).push([[0],{313:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"rgba(0, 0, 0, 1)","white":"#fff"},"background":{"paper":"rgba(80, 80, 80, 1)","default":"rgba(39, 39, 39, 1)"},"primary":{"light":"rgba(98, 99, 93, 1)","main":"rgba(103, 103, 99, 1)","dark":"rgba(0, 0, 0, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(124, 7, 10, 1)","main":"rgba(208, 2, 27, 1)","dark":"rgba(153, 14, 14, 1)","contrastText":"rgba(241, 227, 227, 1)"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(187, 187, 187, 1)","disabled":"rgba(151, 146, 146, 1)","hint":"rgba(0, 0, 0, 0.38)"}}}')},338:function(e,t,a){e.exports=a(431)},343:function(e,t,a){},357:function(e,t){},358:function(e,t){},359:function(e,t){},360:function(e,t){},361:function(e,t){},362:function(e,t){},431:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(343),a(12)),u=a(75),i=a(155),s=a(468),m=a(313),p=a(156),f=Object(n.createContext)({csv:null,fetchCsv:function(e){}}),h=a(8),v=a(467),d=a(466),b=a(464),E=a(48),x=a(470),g=a(434),y=a(465),w=a(433),O=a(282),j=a(281),k=a(18),S=a(82),N=Object(j.a)((function(e){return{root:{display:"flex"},button:{margin:e.spacing(1)},drawer:Object(h.a)({},e.breakpoints.up("lg"),{width:250,flexShrink:0}),toolbar:e.mixins.toolbar,drawerPaper:Object(h.a)({width:250},e.breakpoints.up("lg"),{paddingTop:"64px"})}})),C=function(e){var t=Object(u.g)(),a=N(),n=Object(k.a)(),c=function(a){t.push(a),e.handleDrawerToggle()},l=r.a.createElement("div",null,r.a.createElement(w.a,{classes:{root:a.root},button:!0},r.a.createElement(S.a,{style:{fontSize:"20px",fontWeight:"500",color:"white"}},"Algorithms")),r.a.createElement(b.a,null),r.a.createElement(g.a,null,r.a.createElement(w.a,{button:!0,onClick:function(){c("/")}},r.a.createElement(O.a,{primary:"Dashboard"})),r.a.createElement(w.a,{button:!0,onClick:function(){c("/overview")}},r.a.createElement(O.a,{primary:"Overview"}))),r.a.createElement(b.a,null),r.a.createElement(g.a,null,r.a.createElement(y.a,{component:"div"},"REGRESSION"),r.a.createElement(w.a,{button:!0,onClick:function(){c("/ml/linreg")}},r.a.createElement(O.a,{primary:"Linear Regression"})),r.a.createElement(w.a,{button:!0},r.a.createElement(O.a,{primary:"Logistic Regression"}))),r.a.createElement(b.a,null),r.a.createElement(g.a,null,r.a.createElement(y.a,{component:"div"},"CLASSIFICATION"),r.a.createElement(w.a,{button:!0,onClick:function(){c("/search")}},r.a.createElement(O.a,{primary:"PCA"})),r.a.createElement(w.a,{button:!0,onClick:function(){c("/videoquality")}},r.a.createElement(O.a,{primary:"KMeans"})),r.a.createElement(w.a,{button:!0},r.a.createElement(O.a,{primary:"SVM"})),r.a.createElement(w.a,{button:!0},r.a.createElement(O.a,{primary:"KNN Classifier"}))),r.a.createElement(b.a,null),r.a.createElement(g.a,null,r.a.createElement(y.a,{component:"div"},"NEURAL NETWORKS"),r.a.createElement(w.a,{button:!0,onClick:function(){c("/maps")}},r.a.createElement(O.a,{primary:"CNN"}))));return r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(x.a,{lgUp:!0},r.a.createElement(E.a,{container:e.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:e.mobileOpen,onClose:e.handleDrawerToggle,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},l)),r.a.createElement(x.a,{mdDown:!0},r.a.createElement(E.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},l)))},A=a(218),M=a(315),T=a.n(M),_=a(283),I=Object(j.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),content:{flexGrow:1},toolbar:e.mixins.toolbar,title:{flexGrow:1}}})),R=function(e){var t=e.container,a=I(),c=Object(k.a)(),l=Object(n.useState)(!1),u=Object(o.a)(l,2),i=u[0],s=u[1],m=function(){s(!i)};return r.a.createElement("div",{className:a.root},r.a.createElement(d.a,null),r.a.createElement(v.a,{position:"fixed",className:a.appBar},r.a.createElement(_.a,null,r.a.createElement(A.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:a.menuButton},r.a.createElement(T.a,null)),r.a.createElement("img",{src:"logo192.png",height:"30",width:"30",alt:"logo"}),r.a.createElement(S.a,{variant:"h6",className:a.title},"\xa0Data Miner"))),r.a.createElement(C,{theme:c,container:t,handleDrawerToggle:m,mobileOpen:i,setMobileOpen:s}),r.a.createElement("main",{className:a.content},r.a.createElement("div",{style:{marginTop:"70px"}},e.children)))},D=function(){return r.a.createElement("div",null,"fg")},P=a(469),z=a(10),F=a.n(z),G=a(17),L=a(316),B=a.n(L),q=a(124),X=a(4),J=a(93),K=a(2),U=a(104);function W(e,t){return J.csv(e,{hasHeader:!0,delimiter:t})}function $(e,t){return e.filter((function(e){return!t.includes(e)}))}function H(e,t){var a,n=[],r=Object(X.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;n.push(e[c])}}catch(l){r.e(l)}finally{r.f()}return K.gf(n)}function V(e,t){return e.map((function(e,a){return[e,t[a]]}))}function Y(e,t,a){return Q.apply(this,arguments)}function Q(){return(Q=Object(G.a)(F.a.mark((function e(t,a,n){var r,c,l,u,i,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],c=[],l=function(e){r.push("X "+e+" Y"),c.push(V(t,a).map((function(t){var a=Object(o.a)(t,2),n=a[0],r=a[1];return{x:n[e],y:r}}))),r.push("X "+e+" PRED"),c.push(V(t,n).map((function(t){var a=Object(o.a)(t,2),n=a[0],r=a[1];return{x:n[e],y:r}})))},u=0;u<t[0].length;++u)l(u);return i={values:c,series:r},s={name:"Line chart",tab:"Plot"},e.next=8,U.render.scatterplot(s,i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){var e=Object(n.useContext)(f).fetchCsv,t=Object(n.useState)(","),a=Object(o.a)(t,2),c=a[0],l=(a[1],function(){var t=Object(G.a)(F.a.mark((function t(a,n,r){var l,o;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a&&a.length>0&&(l=a[0].preview,o=W(l,c),e(o));case 1:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}());return r.a.createElement(q.a,{style:{margin:"10px",padding:"10px"}},r.a.createElement(B.a,{className:"dropzone",accept:".csv",multiple:!1,onDrop:l},r.a.createElement("div",{className:"center-div-wrap"},r.a.createElement("div",{style:{display:"block"}},r.a.createElement("p",null,"Drag/drop csv files over here")))))},ee=a(322),te=a.n(ee),ae=function(){var e=Object(n.useContext)(f).csv,t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)([]),i=Object(o.a)(u,2),s=i[0],m=i[1];Object(n.useEffect)((function(){if(e){function t(){return(t=Object(G.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l,t.next=3,e.columnNames();case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=m,t.next=8,e.toArray();case 8:t.t3=t.sent,(0,t.t2)(t.t3);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}),[e]);return r.a.createElement("div",{className:"csv-table"},e?r.a.createElement(te.a,{title:"Data Table",data:s,columns:c,options:{filterType:"dropdown",responsive:"scroll"}}):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h3",null,"No Data Found")))},ne=function(){return r.a.createElement("div",null,r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,md:6,xs:12},r.a.createElement(Z,null),r.a.createElement(ae,null))))},re=a(303),ce=a(27);function le(e,t,a){var n=e.sub(t);return a.sub(t).div(n)}function oe(e,t){return function(e,t,a){var n=e.sub(t);return a.mul(n).add(t)}(e.max,e.min,t)}function ue(e){return e.shape[1]}function ie(e,t){return ce.tidy((function(){return ce.sqrt(ce.metrics.meanSquaredError(e,t))}))}function se(e,t){for(var a={value:[],max:[],min:[]},n=0;n<t.length;++n)a.value.push([]);for(var r in e){var c=e[r].max,l=e[r].min;a.max.push(c),a.min.push(l);for(var o=0;o<e[r].value.length;++o)e[r].value[o]=(e[r].value[o]-l)/(c-l),a.value[o].push(e[r].value[o])}return a.max=ce.tensor(a.max),a.min=ce.tensor(a.min),a.value=ce.tensor(a.value),a}function me(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(G.a)(F.a.mark((function e(t,a){var n,r,c,l,o,u,i,s,m;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},r={},c=Object(X.a)(t);try{for(c.s();!(l=c.n()).done;)for(u in o=l.value)i=o[u],a.includes(u)?(null==r[u]&&(r[u]={value:[],min:Number.MAX_SAFE_INTEGER,max:Number.MIN_SAFE_INTEGER}),r[u].max=Math.max(r[u].max,i),r[u].min=Math.min(r[u].min,i),r[u].value.push(i)):(null==n[u]&&(n[u]={value:[],min:Number.MAX_SAFE_INTEGER,max:Number.MIN_SAFE_INTEGER}),n[u].value.push(i),n[u].max=Math.max(n[u].max,i),n[u].min=Math.min(n[u].min,i))}catch(p){c.e(p)}finally{c.f()}return s=se(n,t),m=se(r,t),console.log(s,m),e.abrupt("return",[s,m]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e,t){return he.apply(this,arguments)}function he(){return(he=Object(G.a)(F.a.mark((function e(t,a){var n,r,c,l,o,u,i,s,m,p,f,h,v,d=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=d.length>3&&void 0!==d[3]?d[3]:0,c=d.length>4&&void 0!==d[4]?d[4]:0,l=d.length>5&&void 0!==d[5]?d[5]:100,o=d.length>6&&void 0!==d[6]?d[6]:16,u=d.length>7&&void 0!==d[7]?d[7]:10,i=ce.regularizers.l1l2({l1:r,l2:c}),s=ue(t),console.log(t.shape,a.shape),(m=ce.sequential()).add(ce.layers.dense({units:s,inputShape:[s],kernelRegularizer:i})),m.add(ce.layers.dense({units:a.shape[1]})),m.compile({loss:ie,optimizer:ce.train.sgd(.01),metrics:[ce.metrics.meanAbsoluteError]}),p=[],e.next=16,m.fit(t,a,{batchSize:o,epochs:l,shuffle:!0,validationSplit:u/100,callbacks:{onEpochEnd:function(){var e=Object(G.a)(F.a.mark((function e(t,a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.push({rmse:a.loss,val_rmse:a.val_loss,mae:a.meanAbsoluteError$1,val_mae:a.val_meanAbsoluteError$1,epoch:t}),e.next=3,n(p);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}});case 16:f=Object(X.a)(m.weights);try{for(f.s();!(h=f.n()).done;)v=h.value,console.log(v.name,v.val.dataSync())}catch(b){f.e(b)}finally{f.f()}return e.abrupt("return",m);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return e.predict(ce.tensor([t]),a)}var de={name:"show.loss",tab:"Loss"},be={name:"show.accContainer",tab:"accContainer"};function Ee(e,t,a){return xe.apply(this,arguments)}function xe(){return(xe=Object(G.a)(F.a.mark((function e(t,a,n){var r,c,l,u,i,s,m,p,f,h,v,d,b,E,x,g,y,w;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.toArray();case 2:return r=e.sent,e.next=5,me(r,a);case 5:return c=e.sent,l=Object(o.a)(c,2),u=l[0],i=l[1],e.next=11,fe(u.value,i.value,function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.show.history(de,t,["rmse","val_rmse"]);case 2:return e.next=4,U.show.history(be,t,["mae","val_mae"]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:return s=e.sent,m=$(n,a),p=H(r[0],m),console.log(u.max.shape,i.max.shape,u.min.shape),e.next=17,le(u.max,u.min,p).array();case 17:return f=e.sent,h=ve(s,f),console.log("Prediction for",p.dataSync()[0],"is",oe(i,h).arraySync()[0],h.dataSync()[0]*(i.max.dataSync()[0]-i.min.dataSync()[0])+i.min.dataSync()[0]),s.summary(),e.next=23,U.show.modelSummary({name:"Model",tab:"Model"},s);case 23:return v=[],e.next=26,u.value.array();case 26:d=e.sent,b=Object(X.a)(d);try{for(b.s();!(E=b.n()).done;)x=E.value,g=ve(s,x).array(),v.push(g)}catch(O){b.e(O)}finally{b.f()}return e.next=31,Promise.all(v);case 31:return v=(v=e.sent).map((function(e){return e[0]})),e.next=35,oe(i,Object(ce.tensor)(v)).array();case 35:return v=e.sent,e.next=38,oe(i,i.value).array();case 38:return y=e.sent,e.next=41,oe(u,u.value).array();case 41:return w=e.sent,console.log(v,w,y),e.next=45,Y(w,y,v);case 45:return e.abrupt("return",{x:u,y:i});case 46:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){var e=r.a.useContext(f).csv,t=r.a.useState([]),a=Object(o.a)(t,2),n=a[0],c=a[1],l=r.a.useState([]),i=Object(o.a)(l,2),s=i[0],m=i[1];return r.a.useEffect((function(){function t(){return(t=Object(G.a)(F.a.mark((function t(){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.columnNames();case 2:a=t.sent,c(a),m(a[a.length-1]);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}null!=e&&function(){t.apply(this,arguments)}()}),[e,c]),null==e?r.a.createElement(u.a,{to:"/overview"}):r.a.createElement(r.a.Fragment,null,"hello",r.a.createElement(re.a,{onClick:Object(G.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(e,s,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))},"Perform"))}var ye=Object(p.a)(m),we=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useCallback)((function(e){c(e)}),[]),m=r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(D,null)),r.a.createElement(u.b,{path:"/overview",exact:!0},r.a.createElement(ne,null)),r.a.createElement(u.b,{path:"/ml/linreg",exact:!0},r.a.createElement(ge,null)),r.a.createElement(u.a,{to:"/"}));return r.a.createElement(s.a,{theme:ye},r.a.createElement(f.Provider,{value:{csv:a,fetchCsv:l}},r.a.createElement(i.a,null,r.a.createElement(R,null,m))))};l.a.render(r.a.createElement(we,null),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.3212d11e.chunk.js.map