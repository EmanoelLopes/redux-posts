(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(n,e,t){n.exports=t(71)},69:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"isLoading",function(){return vn});var a={};t.r(a),t.d(a,"posts",function(){return hn}),t.d(a,"requests",function(){return gn});var o=t(0),c=t.n(o),i=t(8),s=t.n(i),u=t(12),l=t(9),d=t(10),f=t(13),p=t(11),v=t(14),m=t(19),h=t.n(m),g=t(31),b=t(32),w=t.n(b),j={get:function(){return w.a.get("https://jsonplaceholder.typicode.com/posts")}},O="FETCH_POSTS",y="FETCH_SUCCESS",E="FETCH_SUCCESS",x="SET_LOADING",k=function(n){return{type:x,isLoading:n}},L=function(n){return{type:O,posts:n}},S=function(n){return{type:y,success:!1,message:n}},C=function(){return function(){var n=Object(g.a)(h.a.mark(function n(e){var t,r;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e(k(!0)),n.prev=1,n.next=4,j.get();case 4:t=n.sent,r=t.data,200===t.status?(e(k(!1)),e({type:y,success:!0,message:"Request Success!"}),e(L(r))):t.status>=400&&(e(k(!1)),e(S("Request Failed!"))),n.next=12;break;case 9:throw n.prev=9,n.t0=n.catch(1),new Error(n.t0);case 12:case"end":return n.stop()}},n,this,[[1,9]])}));return function(e){return n.apply(this,arguments)}}()},P=t(1),F=t(3);function N(){var n=Object(P.a)([""]);return N=function(){return n},n}function T(){var n=Object(P.a)([""]);return T=function(){return n},n}function W(){var n=Object(P.a)(["\n  margin: 0 0 10px 0;\n"]);return W=function(){return n},n}function A(){var n=Object(P.a)(["\n font-size: calc(","px * 1.75);\n"]);return A=function(){return n},n}function R(){var n=Object(P.a)(["\n  font-size: calc(","px * 2);\n  margin: 0 0 10px 0;\n"]);return R=function(){return n},n}function z(){var n=Object(P.a)(["\n  padding: 10px 0;\n"]);return z=function(){return n},n}function U(){var n=Object(P.a)(["\n  list-style: none;\n  padding: 0;\n"]);return U=function(){return n},n}function _(){var n=Object(P.a)(["\n  max-width: ","px;\n  margin: 0 auto;\n"]);return _=function(){return n},n}function q(){var n=Object(P.a)(["\n    .main-content {\n      padding: 0 1rem;\n    }\n  "]);return q=function(){return n},n}function D(){var n=Object(P.a)(["\n    .main-content {\n      padding: 0 2rem;\n    }\n  "]);return D=function(){return n},n}function H(){var n=Object(P.a)(["\n  ","\n\n  ","\n"]);return H=function(){return n},n}function B(){var n=Object(P.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return B=function(){return n},n}var I={desktop:1e3,tablet:768,phone:576},J=16,M=Object.keys(I).reduce(function(n,e){return n[e]=function(){return Object(F.b)(B(),I[e]/16,F.b.apply(void 0,arguments))},n},{}),G=Object(F.a)(H(),M.phone(D()),M.tablet(q())),$=F.c.main(_(),I.desktop),K=F.c.ul(U()),Q=F.c.li(z()),V=F.c.h1(R(),J),X=F.c.h2(A(),J),Y=F.c.p(W()),Z=(F.c.span(T()),F.c.i(N())),nn=(t(68),function(n){var e=n.icon,t=n.animation,r=n.size;return c.a.createElement(Z,{className:"bx bx-".concat(e," bx-").concat(t," bx-").concat(r)})});nn.defaultProps={icon:"",animation:"",size:"md"};var en=nn,tn=function(n){var e=n.text;return c.a.createElement(Y,{className:"loading"},c.a.createElement(en,{icon:"loader",animation:"spin",size:"sm"}),e)},rn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(a)))).getFetchedPosts=function(){var n=t.props,e=n.dispatch,r=n.getPosts;e(C(r))},t.renderPostsList=function(n){return c.a.createElement(K,{className:"posts-list"},n.map(function(n){return c.a.createElement(Q,{className:"post-item",key:n.id},c.a.createElement(X,null,n.title),c.a.createElement(Y,null,n.body))}))},t}return Object(v.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.getFetchedPosts()}},{key:"render",value:function(){var n=this.props,e=n.posts;return n.isLoading?c.a.createElement(tn,{text:"Loading Posts..."}):c.a.createElement(o.Fragment,null,this.renderPostsList(e))}}]),e}(o.Component),an=Object(u.b)(function(n){return{posts:n.posts,isLoading:n.isLoading}})(rn),on=function(n){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(v.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return c.a.createElement(o.Fragment,null,c.a.createElement(G,null),c.a.createElement($,{className:"main-content"},c.a.createElement(V,null,"Posts"),c.a.createElement(an,null)))}}]),e}(o.Component),cn=t(38),sn=t(5),un=t(35),ln=t(36),dn=t(37),fn=t.n(dn),pn={isLoading:!1},vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn.isLoading,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return e.isLoading;default:return n}},mn={posts:[],success:!1,message:""},hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn.posts,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return e.posts;default:return n}},gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:case E:return{success:e.success,message:e.message};default:return n}},bn=Object(sn.combineReducers)(Object(cn.a)({},a,r)),wn=Object(sn.createStore)(bn,Object(ln.composeWithDevTools)(Object(sn.applyMiddleware)(fn.a,un.a))),jn=(t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function On(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var yn=document.getElementById("root");s.a.render(c.a.createElement(u.a,{store:wn},c.a.createElement(on,null)),yn),function(n){if("serviceWorker"in navigator){if(new URL("/redux-posts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/redux-posts","/service-worker.js");jn?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):On(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):On(e,n)})}}()}},[[40,2,1]]]);
//# sourceMappingURL=main.741669d4.chunk.js.map