(this["webpackJsonpcrowd-source-radio"]=this["webpackJsonpcrowd-source-radio"]||[]).push([[0],{33:function(e,t,n){e.exports=n(57)},38:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),l=n.n(c),i=(n(38),n(12)),s=n(5),o=n(16),u=n(1),m=n(3),f=n(30),b=n.n(f);function p(){var e=Object(s.h)(),t=Object(s.g)(),n=Object(s.f)(),r=Object(s.i)();return Object(a.useMemo)((function(){return{push:n.push,replace:n.replace,pathname:t.pathname,query:Object(u.a)(Object(u.a)({},b.a.parse(t.search)),e),match:r,location:t,history:n}}),[e,r,t,n])}var d=n(2),h=n.n(d),v=n(6),O=n(13),j=n(9),g=n(7),w=n(15),y=n(14),x=n(4),E=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(O.a)(this,n),a=e?t.call(this,e):t.call(this),Object(j.a)(a)}return Object(g.a)(n,[{key:"with",value:function(e){return this.merge(e)}}]),n}(Object(x.c)({height:128,url:"https://via.placeholder.com/128",width:128},"Image")),k=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(O.a)(this,n),a=e?t.call(this,e):t.call(this),Object(j.a)(a)}return Object(g.a)(n,[{key:"with",value:function(e){return e?this.merge(e):this}}]),n}(Object(x.c)({href:"",total:0},"Reference")),N={display_name:"",external_urls:Object(x.b)({}),followers:new k,href:"",id:"",images:Object(x.a)([]),product:"free",type:"",uri:""},_=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(O.a)(this,n),e?t.call(this,Object(u.a)(Object(u.a)({},e),n._transform(e))):(a=t.call(this),Object(j.a)(a))}return Object(g.a)(n,null,[{key:"_transform",value:function(e){var t,n;return Object(u.a)(Object(u.a)({},e),{},{external_urls:Object(x.b)(null!==(t=e.external_urls)&&void 0!==t?t:{}),followers:e.followers instanceof k?e.followers:new k(e.followers),images:Object(x.a)(null!==(n=e.images)&&void 0!==n?n:[]).map((function(e){return e instanceof E?e:new E(e)}))})}}]),Object(g.a)(n,[{key:"with",value:function(e){return e?this.merge(Object(u.a)(Object(u.a)({},e),n._transform(e))):this}}]),n}(Object(x.c)(N,"User")),C={collaborative:!1,description:"",external_urls:Object(x.b)({}),href:null,id:null,images:Object(x.a)([]),name:"",owner:new _,public:!1,snapshot_id:"",tracks:{},type:"playlist",uri:""},S=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(O.a)(this,n),e?t.call(this,Object(u.a)(Object(u.a)({},e),n._transform(e))):(a=t.call(this),Object(j.a)(a))}return Object(g.a)(n,null,[{key:"_transform",value:function(e){var t;return Object(u.a)(Object(u.a)({},e),{},{external_urls:Object(x.b)(null!==(t=e.external_urls)&&void 0!==t?t:{}),owner:e.owner instanceof _?e.owner:new _(e.owner),images:Object(x.a)(e.images?e.images:[new E]).map((function(e){return e instanceof E?e:new E(e)}))})}}]),Object(g.a)(n,[{key:"with",value:function(e){return e?this.merge(Object(u.a)(Object(u.a)({},e),n._transform(e))):this}}]),n}(Object(x.c)(C,"Playlist")),P={href:"",items:Object(x.a)(),limit:0,next:"",offset:0,previous:"",total:0},L=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(O.a)(this,n),e?t.call(this,Object(u.a)(Object(u.a)({},e),n._transform(e))):(a=t.call(this),Object(j.a)(a))}return Object(g.a)(n,null,[{key:"_transform",value:function(e){var t;return t=e.items?Object(x.a)(e.items).map((function(e){return e instanceof S?e:new S(e)})):Object(x.a)([]),Object(u.a)(Object(u.a)({},e),{},{items:t})}}]),Object(g.a)(n,[{key:"with",value:function(e){return e?this.merge(Object(u.a)(Object(u.a)({},e),n._transform(e))):this}}]),n}(Object(x.c)(P,"Paging")),M=n(32),A=n.n(M),R="https://api.spotify.com/v1",F=function(){var e=function(){var e=window.location.origin,t=A()("https://accounts.spotify.com",{path:"authorize",queryParams:{response_type:"token",client_id:"3c5666e14ae14e39a0efc18f540d621e",scope:"user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private",redirect_uri:"".concat(e),state:JSON.stringify({redirect_uri:window.location.href})}});window.location.href=t},t=function(){var t=Object(v.a)(h.a.mark((function t(n){var a,r,c,l,i,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=localStorage.getItem("spotify_auth"))||e(),r=JSON.parse(a),c=r.token_type,(l=r.access_token)&&c||e(),t.next=6,fetch(n,{headers:{Authorization:"".concat(c," ").concat(l)}});case 6:return 401===(i=t.sent).status&&e(),t.next=10,i.json();case 10:return s=t.sent,t.abrupt("return",s);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{setAccessToken:function(e,t){localStorage.setItem("spotify_auth",JSON.stringify({token_type:e,access_token:t}))},getCurrentUserPlaylists:function(){var e=Object(v.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(null!==n&&void 0!==n?n:"".concat(R,"/me/playlists")).then((function(e){return new L(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCurrentUserProfile:function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(R,"/me")).then((function(e){return new _(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPlaylist:function(){var e=Object(v.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(R,"/playlists/").concat(n)).then((function(e){return new S(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getTracklist:function(){var e=Object(v.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}(),B=Object(a.createContext)({spotifyApi:F});function U(){return Object(a.useContext)(B).spotifyApi}var I,T=function(){var e=p().location,t=U(),n=e.hash.substr(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},a,r))}),{});if(n.token_type&&n.access_token&&(t.setAccessToken(n.token_type,n.access_token),n.state)){var a=decodeURIComponent(n.state),c=JSON.parse(a).redirect_uri;c&&(window.location.href=c)}return r.a.createElement("p",null,"There was an error connecting to Spotify...")},z=n(25),D=n(10),J=Object(a.forwardRef)((function(e,t){var n=e.track,a=(n.track.artists?n.track.artists:[]).filter((function(e){return!!e&&!!e.name})).map((function(e){return e.name})).join(", "),c=Object(x.a)(n.track.album.images.map((function(e){return new E(e)}))).skip(1).first(new E).url;return r.a.createElement("div",{ref:t,className:"border-gray-400 border-t p-4"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"h-32 w-32 flex-none"},r.a.createElement("img",{className:"h-full w-full object-cover",src:c,alt:"".concat(n.track.name," cover")})),r.a.createElement("div",{className:"m-2 flex-grow"},r.a.createElement("h3",{className:"text-sm font-medium"},n.track.name),r.a.createElement("h4",{className:"text-xs text-gray-700 font-medium"},a),r.a.createElement("h5",{className:"text-xs font-medium"},n.track.album.name))))})),V=function(e){var t=e.message;return r.a.createElement("div",{className:"font-semibold border-gray-400 border-t p-4"},r.a.createElement("svg",{className:"fill-current text-gray-900 inline-block h-4 w-4 align-baseline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55 80"},r.a.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},r.a.createElement("rect",{width:"10",height:"20",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})))),r.a.createElement("span",{className:"align-baseline pl-1"},t))},H=function(e){var t=e.hasMore,n=e.itemRowTemplate,c=e.items,l=e.onLoadMoreItems,i=e.triggerOffsetCount,s=void 0===i?0:i,o=Object(a.useState)(document.documentElement.clientHeight),f=Object(m.a)(o,2),b=f[0],p=f[1],d=Object(a.useRef)();if(Object(a.useEffect)((function(){var e=function(){var e=document.documentElement.clientHeight;e&&e!==b&&p(e)},n=function(){if((null===d||void 0===d?void 0:d.current)&&t){var e=d.current.getBoundingClientRect();e.top>=0&&e.bottom<=b&&l()}};return window.addEventListener("scroll",n,!0),window.addEventListener("resize",e),n(),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",n)}}),[t,b,l]),!c)return null;var h=c.count(),v=h<=s?0:h-s;return r.a.createElement(r.a.Fragment,null,c.map((function(e,t){var a=n(e),c=Object(m.a)(a,2),l=c[0],i=c[1];return t===v&&(l=Object(u.a)(Object(u.a)({},l),{},{ref:d})),r.a.createElement(i,l)})))},W=function(){var e=Object(s.h)().id,t=Object(a.useState)(),n=Object(m.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(Object(x.a)([])),o=Object(m.a)(i,2),u=o[0],f=o[1],b=Object(a.useState)(!0),p=Object(m.a)(b,2),d=p[0],O=p[1],j=Object(a.useState)(!1),g=Object(m.a)(j,2),w=g[0],y=g[1],k=Object(a.useState)(),N=Object(m.a)(k,2),_=N[0],C=N[1],S=U();if(Object(D.useAsyncEffect)(function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getPlaylist(e);case 2:if(a=t.sent,n()){t.next=5;break}return t.abrupt("return");case 5:y(!1),C(a.tracks.next),l(a),f(u.push.apply(u,Object(z.a)(a.tracks.items))),O(!!a.tracks.next);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),Object(D.useAsyncEffect)(function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w&&_){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S.getTracklist(_);case 4:if(n=e.sent,t()){e.next=7;break}return e.abrupt("return");case 7:y(!1),C(n.next),f((function(e){return e.push.apply(e,Object(z.a)(n.items))})),O(!!n.next);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[w,_]),!c)return null;var P=function(){return w&&c&&_?r.a.createElement(V,{message:"Loading tracks..."}):null};return r.a.createElement(a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"antialiased text-sm font-bold uppercase tracking-widest"},c.name),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"h-64 w-64 flex-none"},r.a.createElement("img",{className:"h-full w-full object-cover",src:c.images.first(new E).url,alt:"".concat(c.name," cover")})),r.a.createElement("div",{className:"m-2 flex-grow"},r.a.createElement("h3",{className:"text-sm text-gray-800"},c.tracks.total," songs"),r.a.createElement("span",{className:"block text-xs text-gray-700"},"by ",c.owner.display_name))),r.a.createElement("div",{className:"font-semibold mt-4"},"Tracks"),r.a.createElement(H,{hasMore:d,itemRowTemplate:function(e){return[{track:e,key:e.track.id},J]},items:u,onLoadMoreItems:function(){return y(!0)},triggerOffsetCount:10}),r.a.createElement(P,null)))},q=function(e){var t=e.isMenuOpen,n=e.onBackgroundClick;return Object(a.useEffect)((function(){var e=function(){return n()};return t&&document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[t,n]),t?r.a.createElement("button",{onClick:n,tabIndex:-1,className:"fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"}):null},G=function(e){var t=e.isMenuOpen?r.a.createElement("path",{fillRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):r.a.createElement("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"});return r.a.createElement("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24"},t)},$=function(e){var t=e.className,n=e.isActive,a=e.label,c=e.to,l="".concat(t," flex-shrink");return n||(l+=" text-gray-600 hover:text-gray-900"),r.a.createElement(i.b,{className:l,to:c},a)},K=function(){var e=Object(s.f)();return r.a.createElement("button",{onClick:function(){return e.goBack()}},r.a.createElement("svg",{className:"h-4 w-4 inline-block",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.a.createElement("polyline",{points:"12 19 5 12 12 5"})),r.a.createElement("span",{className:"align-middle ml-1 font-semibold"},"Go Back"))},Q=function(){var e=[],t=Object(s.i)("/"),n=Object(s.i)("/playlists"),a=Object(s.i)("/playlists/following");(n||t&&t.isExact)&&(e=[{to:"/playlists/mine",label:"My Playlists",isActive:!a||!a.isExact},{to:"/playlists/following",label:"Following",isActive:!!a&&a.isExact}]);return r.a.createElement("div",{className:"bg-gray-400 border-gray-600 border-b shadow px-4 py-2 font-semibold text-gray-900 align-middle flex flex-row"},function(e){return e&&e.length?e.map((function(e,t){return t>0&&(e=Object(u.a)(Object(u.a)({},e),{},{className:"pl-4"})),r.a.createElement($,Object.assign({},e,{key:e.to}))})):r.a.createElement(K,null)}(e))},X=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],l="px-2 pt-2 pb-4 ";l+=n?"block":"hidden";return r.a.createElement(a.Fragment,null,r.a.createElement(q,{isMenuOpen:n,onBackgroundClick:function(){return c(!1)}}),r.a.createElement("nav",{className:"fixed w-screen"},r.a.createElement("div",{className:"bg-gray-900 text-white font-bold z-10 py-2"},r.a.createElement("div",{className:"flex items-center justify-between px-4 py-3"},r.a.createElement("div",null,r.a.createElement("h1",{className:"uppercase"},"Crowd Source Radio")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c((function(e){return!e}))},type:"button",className:"block text-gray-500 hover:text-white focus:text-white focus:outline-none"},r.a.createElement(G,{isMenuOpen:n})))),r.a.createElement("div",{className:l},r.a.createElement(i.b,{to:"/",className:"block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"},"Playlists"),r.a.createElement(i.b,{to:"/browse",className:"block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"},"Browse"))),r.a.createElement(Q,null)))},Y=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:"h-26 select-none"},r.a.createElement(X,null)),r.a.createElement("section",{className:"px-4 pt-4 h-screen-minus-26 overflow-y-auto"},t))};!function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(I||(I={}));var Z=function(e){var t=e.alignment,n=void 0===t?I.Left:t,c=e.className,l=e.isChecked,i=e.showDisplayValue,s=void 0===i||i,o=e.checkedDisplayValue,u=e.unCheckedDisplayValue,f=e.onChange,b=Object(a.useState)(l),p=Object(m.a)(b,2),d=p[0],h=p[1],v=function(e){if(s&&e===n){var t=n===I.Left?"pr-2":"pl-2";return r.a.createElement("span",{className:"flex-shrink ".concat(t)},d?o:u)}},O=Object(a.useMemo)((function(){return"border rounded-full border-gray-900 flex items-center w-12 ".concat(l?"bg-green-300 justify-end":"bg-gray-300 justify-start")}),[l]);return r.a.createElement("span",{className:"inline-flex cursor-pointer ".concat(c),onClick:function(){return h((function(e){var t=!e;return f&&f(t),t}))}},v(I.Left),r.a.createElement("span",{className:O},r.a.createElement("span",{className:"rounded-full border w-6 h-6 border-gray-900 shadow-inner bg-white shadow"})),v(I.Right))},ee=Object(a.forwardRef)((function(e,t){var n=e.playlist,a=n.images.first(),c=p();return r.a.createElement("button",{ref:t,onClick:function(){return c.history.push("/playlist/".concat(n.id))},className:"block flex mb-4 w-full rounded-lg bg-gray-600 overflow-hidden flex text-white text-left focus:outline-none focus:border-gray-600 focus:shadow-outline"},r.a.createElement("div",{className:"h-32 w-32 flex-none"},r.a.createElement("img",{className:"h-full w-full object-cover",src:a.url,alt:"".concat(n.name," cover")})),r.a.createElement("div",{className:"m-2 flex-grow"},r.a.createElement("h2",{className:"font-semibold overflow-hidden h-6"},n.name),r.a.createElement("h3",{className:"text-sm text-gray-100"},n.tracks.total," songs"),r.a.createElement("span",{className:"block text-xs text-gray-300"},"by ",n.owner.display_name)))})),te=function(e){var t=e.playlistFilter,n=void 0===t?function(e){return!0}:t,c=Object(a.useState)(!0),l=Object(m.a)(c,2),i=l[0],s=l[1],o=Object(a.useState)(!1),u=Object(m.a)(o,2),f=u[0],b=u[1],p=Object(a.useState)(Object(x.a)([])),d=Object(m.a)(p,2),O=d[0],j=d[1],g=Object(a.useState)(),w=Object(m.a)(g,2),y=w[0],E=w[1],k=U();Object(D.useAsyncEffect)(function(){var e=Object(v.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getCurrentUserPlaylists();case 2:if(a=e.sent,t()){e.next=5;break}return e.abrupt("return");case 5:r=a.items.filter(n),j(Object(x.a)([])),j(r),b(!1),E(a.next),s(!!a.next);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n]),Object(D.useAsyncEffect)(function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y&&f){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k.getCurrentUserPlaylists(y);case 4:if(a=e.sent,t()){e.next=7;break}return e.abrupt("return");case 7:j((function(e){return e.merge(a.items.filter(n))})),b(!1),E(a.next),s(!!a.next);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f,y]);var N=function(){return f&&y?r.a.createElement(V,{message:"Loading playlists..."}):null};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{hasMore:i,itemRowTemplate:function(e){return[{playlist:e,key:e.id},ee]},items:O,onLoadMoreItems:function(){return b(!0)},triggerOffsetCount:3}),r.a.createElement(N,null))},ne=function(){var e=Object(a.useState)((function(){return new _})),t=Object(m.a)(e,2),n=t[0],c=t[1],l=U(),i=Object(s.f)();Object(D.useAsyncEffect)(function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getCurrentUserProfile();case 2:if(n=e.sent,t()){e.next=5;break}return e.abrupt("return");case 5:c(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{alignment:I.Right,className:"align-middle mb-4 font-semibold",isChecked:!1,checkedDisplayValue:"All Playlists",unCheckedDisplayValue:"Public Playlists",onChange:function(e){return i.push("/playlists/all")}}),r.a.createElement(te,{playlistFilter:function(e){return function(t){return!!e&&t.owner.id===e.id&&(t.public||t.collaborative)}}(n)}))},ae=function(){var e=U(),t=Object(a.useState)((function(){return new _})),n=Object(m.a)(t,2),c=n[0],l=n[1];return Object(D.useAsyncEffect)(function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurrentUserProfile();case 2:if(a=t.sent,n()){t.next=5;break}return t.abrupt("return");case 5:l(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),r.a.createElement(te,{playlistFilter:function(e){return function(t){return!!e&&t.owner.id!==e.id}}(c)})},re=function(){var e=U(),t=Object(s.f)(),n=Object(a.useState)((function(){return new _})),c=Object(m.a)(n,2),l=c[0],i=c[1];Object(D.useAsyncEffect)(function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurrentUserProfile();case 2:if(a=t.sent,n()){t.next=5;break}return t.abrupt("return");case 5:i(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{alignment:I.Right,className:"align-middle mb-4 font-semibold",isChecked:!0,checkedDisplayValue:"All Playlists",unCheckedDisplayValue:"Public Playlists",onChange:function(e){return t.push("/playlists/mine")}}),r.a.createElement(te,{playlistFilter:function(e){return function(t){return t.owner.id===(null===e||void 0===e?void 0:e.id)}}(l)}))},ce=function(){var e=p().location,t=U(),n=e.pathname.substr(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},a,r))}),{});if(n.token_type&&n.access_token&&(t.setAccessToken(n.token_type,n.access_token),n.state)){var a=decodeURIComponent(n.state),c=JSON.parse(a).redirect_uri;c&&(window.location.href=c)}return r.a.createElement("p",{className:"text-gray-900 font-semibold text-lg"},"Uh oh. Page not found. :(")},le=function(){return Object(a.useEffect)((function(){var e,t=["bg-gray-100","overflow-y-hidden"];return(e=document.body.classList).add.apply(e,t),function(){var e;(e=document.body.classList).remove.apply(e,t)}}),[]),r.a.createElement(i.a,null,r.a.createElement(Y,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(ne,null)),r.a.createElement(s.a,{exact:!0,path:"/playlists/mine"},r.a.createElement(ne,null)),r.a.createElement(s.a,{exact:!0,path:"/playlists/all"},r.a.createElement(re,null)),r.a.createElement(s.a,{exact:!0,path:"/playlists/following"},r.a.createElement(ae,null)),r.a.createElement(s.a,{path:"/callback"},r.a.createElement(T,null)),r.a.createElement(s.a,{path:"/playlist/:id"},r.a.createElement(W,null)),r.a.createElement(s.a,null,r.a.createElement(ce,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.fca32e54.chunk.js.map