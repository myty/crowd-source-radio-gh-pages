(this["webpackJsonpcrowd-source-radio"]=this["webpackJsonpcrowd-source-radio"]||[]).push([[0],{28:function(e,t,r){e.exports=r(51)},33:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(23),i=r.n(c),s=(r(33),r(12)),o=r(15),l=r(6),u=r(2),f=r(24),b=r.n(f);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function O(){var e=Object(o.h)(),t=Object(o.g)(),r=Object(o.f)(),a=Object(o.i)();return Object(n.useMemo)(function(){return{push:r.push,replace:r.replace,pathname:t.pathname,query:p({},b.a.parse(t.search),{},e),match:a,location:t,history:r}},[e,a,t,r])}var h=r(1),d=r.n(h),j=r(5),y=r(13),g=r(4),w=r(7),v=r(8),E=r(14),x=r(3),k=function(e){function t(e){var r;return Object(y.a)(this,t),r=e?Object(g.a)(this,Object(w.a)(t).call(this,e)):Object(g.a)(this,Object(w.a)(t).call(this)),Object(g.a)(r)}return Object(E.a)(t,e),Object(v.a)(t,[{key:"with",value:function(e){return this.merge(e)}}]),t}(Object(x.c)({height:128,url:"https://via.placeholder.com/128",width:128},"Image")),P=function(e){function t(e){var r;return Object(y.a)(this,t),r=e?Object(g.a)(this,Object(w.a)(t).call(this,e)):Object(g.a)(this,Object(w.a)(t).call(this)),Object(g.a)(r)}return Object(E.a)(t,e),Object(v.a)(t,[{key:"with",value:function(e){return e?this.merge(e):this}}]),t}(Object(x.c)({href:"",total:0},"Reference"));function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var S={display_name:"",external_urls:Object(x.b)({}),followers:new P,href:"",id:"",images:Object(x.a)([]),product:"free",type:"",uri:""},D=function(e){function t(e){var r;return Object(y.a)(this,t),e?Object(g.a)(this,Object(w.a)(t).call(this,_({},e,{},t._transform(e)))):(r=Object(g.a)(this,Object(w.a)(t).call(this)),Object(g.a)(r))}return Object(E.a)(t,e),Object(v.a)(t,null,[{key:"_transform",value:function(e){return _({},e,{external_urls:Object(x.b)(e.external_urls?e.external_urls:{}),followers:e.followers instanceof P?e.followers:new P(e.followers),images:Object(x.a)(e.images?e.images:[]).map(function(e){return e instanceof k?e:new k(e)})})}}]),Object(v.a)(t,[{key:"with",value:function(e){return e?this.merge(_({},e,{},t._transform(e))):this}}]),t}(Object(x.c)(S,"User"));function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L={collaborative:!1,description:"",external_urls:Object(x.b)({}),href:null,id:null,images:Object(x.a)([]),name:"",owner:new D,public:!1,snapshot_id:"",tracks:{},type:"playlist",uri:""},A=function(e){function t(e){var r;return Object(y.a)(this,t),e?Object(g.a)(this,Object(w.a)(t).call(this,R({},e,{},t._transform(e)))):(r=Object(g.a)(this,Object(w.a)(t).call(this)),Object(g.a)(r))}return Object(E.a)(t,e),Object(v.a)(t,null,[{key:"_transform",value:function(e){return R({},e,{external_urls:Object(x.b)(e.external_urls?e.external_urls:{}),owner:e.owner instanceof D?e.owner:new D(e.owner),images:Object(x.a)(e.images?e.images:[new k]).map(function(e){return e instanceof k?e:new k(e)})})}}]),Object(v.a)(t,[{key:"with",value:function(e){return e?this.merge(R({},e,{},t._transform(e))):this}}]),t}(Object(x.c)(L,"Playlist"));function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var U={href:"",items:Object(x.a)(),limit:0,next:"",offset:0,previous:"",total:0},T=function(e){function t(e){var r;return Object(y.a)(this,t),e?Object(g.a)(this,Object(w.a)(t).call(this,F({},e,{},t._transform(e)))):(r=Object(g.a)(this,Object(w.a)(t).call(this)),Object(g.a)(r))}return Object(E.a)(t,e),Object(v.a)(t,null,[{key:"_transform",value:function(e){return F({},e,{items:e.items?Object(x.a)(e.items).map(function(e){return e instanceof A?e:new A(e)}):Object(x.a)([])})}}]),Object(v.a)(t,[{key:"with",value:function(e){return e?this.merge(F({},e,{},t._transform(e))):this}}]),t}(Object(x.c)(U,"Paging")),z=r(27),I=r.n(z),H="https://api.spotify.com/v1",J=function(){var e=function(){var e=window.location.origin,t=I()("https://accounts.spotify.com",{path:"authorize",queryParams:{response_type:"token",client_id:"3c5666e14ae14e39a0efc18f540d621e",scope:"user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private",redirect_uri:"".concat(e),state:JSON.stringify({redirect_uri:window.location.href})}});window.location.href=t},t=function(){var t=Object(j.a)(d.a.mark(function t(r){var n,a,c,i,s,o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=localStorage.getItem("spotify_auth"))||e(),a=JSON.parse(n),c=a.token_type,(i=a.access_token)&&c||e(),t.next=6,fetch(r,{headers:{Authorization:"".concat(c," ").concat(i)}});case 6:return 401===(s=t.sent).status&&e(),t.next=10,s.json();case 10:return o=t.sent,t.abrupt("return",o);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return{setAccessToken:function(e,t){localStorage.setItem("spotify_auth",JSON.stringify({token_type:e,access_token:t}))},getCurrentUserPlaylists:function(){var e=Object(j.a)(d.a.mark(function e(r){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r||"".concat(H,"/me/playlists")).then(function(e){return new T(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getCurrentUserProfile:function(){var e=Object(j.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(H,"/me")).then(function(e){return new D(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getPlaylist:function(){var e=Object(j.a)(d.a.mark(function e(r){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(H,"/playlists/").concat(r)).then(function(e){return new A(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getTracklist:function(){var e=Object(j.a)(d.a.mark(function e(r){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}(),V=Object(n.createContext)({spotifyApi:J});function B(){return Object(n.useContext)(V).spotifyApi}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var W=function(){var e=O().location,t=B(),r=e.hash.substr(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var r=Object(u.a)(t,2),n=r[0],a=r[1];return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,Object(l.a)({},n,a))},{});if(r.token_type&&r.access_token&&(t.setAccessToken(r.token_type,r.access_token),r.state)){var n=decodeURIComponent(r.state),c=JSON.parse(n).redirect_uri;c&&(window.location.href=c)}return a.a.createElement("p",null,"There was an error connecting to Spotify...")},$=r(20),G=r(10),K=Object(n.forwardRef)(function(e,t){var r=e.track,n=(r.track.artists?r.track.artists:[]).filter(function(e){return!!e&&!!e.name}).map(function(e){return e.name}).join(", "),c=Object(x.a)(r.track.album.images.map(function(e){return new k(e)})).skip(1).first(new k).url;return a.a.createElement("div",{ref:t,className:"border-gray-400 border-t p-4"},a.a.createElement("div",{className:"flex"},a.a.createElement("div",{className:"h-32 w-32 flex-none"},a.a.createElement("img",{className:"h-full w-full object-cover",src:c,alt:"".concat(r.track.name," cover")})),a.a.createElement("div",{className:"m-2 flex-grow"},a.a.createElement("h3",{className:"text-sm font-medium"},r.track.name),a.a.createElement("h4",{className:"text-xs text-gray-700 font-medium"},n),a.a.createElement("h5",{className:"text-xs font-medium"},r.track.album.name))))}),Q=function(e){var t=e.message;return a.a.createElement("div",{className:"font-semibold border-gray-400 border-t p-4"},a.a.createElement("svg",{className:"fill-current text-gray-900 inline-block h-4 w-4 align-baseline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55 80"},a.a.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},a.a.createElement("rect",{width:"10",height:"20",rx:"3"},a.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),a.a.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},a.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),a.a.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},a.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),a.a.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},a.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})))),a.a.createElement("span",{className:"align-baseline pl-1"},t))};function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var Y,Z=function(e){var t=e.hasMore,r=e.itemRowTemplate,c=e.items,i=e.onLoadMoreItems,s=e.triggerOffsetCount,o=Object(n.useState)(window.innerHeight||document.documentElement.clientHeight),f=Object(u.a)(o,2),b=f[0],m=f[1],p=Object(n.useRef)(),O=Object(n.useCallback)(function(){if(p&&p.current&&t){var e=p.current.getBoundingClientRect();e.top>=0&&e.bottom<=b&&i()}},[t,p,i,b]);if(Object(n.useEffect)(function(){var e=function(e){var t=e.target.innerHeight;e.target.document&&e.target.document.documentElement&&(t=t||e.target.document.documentElement.clientHeight),t&&m(t)};return window.addEventListener("scroll",O),window.addEventListener("resize",e),O(),function(){window.removeEventListener("scroll",O),window.removeEventListener("resize",e)}},[O]),s||(s=0),!c)return null;var h=c.count(),d=h<=s?0:h-s;return a.a.createElement(a.a.Fragment,null,c.map(function(e,t){var n=r(e),c=Object(u.a)(n,2),i=c[0],s=c[1];return t===d&&(i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},i,{ref:p})),a.a.createElement(s,i)}))},ee=function(){var e=Object(o.h)().id,t=Object(n.useState)(),r=Object(u.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)(Object(x.a)([])),l=Object(u.a)(s,2),f=l[0],b=l[1],m=Object(n.useState)(!0),p=Object(u.a)(m,2),O=p[0],h=p[1],y=Object(n.useState)(!1),g=Object(u.a)(y,2),w=g[0],v=g[1],E=Object(n.useState)(),P=Object(u.a)(E,2),N=P[0],_=P[1],S=B();if(Object(G.useAsyncEffect)(function(){var t=Object(j.a)(d.a.mark(function t(r){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getPlaylist(e);case 2:if(n=t.sent,r()){t.next=5;break}return t.abrupt("return");case 5:v(!1),_(n.tracks.next),i(n),b(f.push.apply(f,Object($.a)(n.tracks.items))),h(!!n.tracks.next);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]),Object(G.useAsyncEffect)(function(){var e=Object(j.a)(d.a.mark(function e(t){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(w&&N){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S.getTracklist(N);case 4:if(r=e.sent,t()){e.next=7;break}return e.abrupt("return");case 7:v(!1),_(r.next),b(function(e){return e.push.apply(e,Object($.a)(r.items))}),h(!!r.next);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[w,N]),!c)return null;return a.a.createElement(n.Fragment,null,a.a.createElement("div",null,a.a.createElement("h2",{className:"antialiased text-sm font-bold uppercase tracking-widest pt-4"},c.name),a.a.createElement("div",{className:"flex"},a.a.createElement("div",{className:"h-64 w-64 flex-none"},a.a.createElement("img",{className:"h-full w-full object-cover",src:c.images.first(new k).url,alt:"".concat(c.name," cover")})),a.a.createElement("div",{className:"m-2 flex-grow"},a.a.createElement("h3",{className:"text-sm text-gray-800"},c.tracks.total," songs"),a.a.createElement("span",{className:"block text-xs text-gray-700"},"by ",c.owner.display_name))),a.a.createElement("div",{className:"font-semibold mt-4"},"Tracks"),a.a.createElement(Z,{hasMore:O,itemRowTemplate:function(e){return[{track:e,key:e.track.id},K]},items:f,onLoadMoreItems:function(){return v(!0)},triggerOffsetCount:10}),a.a.createElement(function(){return w&&c&&N?a.a.createElement(Q,{message:"Loading tracks..."}):null},null)))},te=function(e){var t=e.isOpen?a.a.createElement("path",{fillRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):a.a.createElement("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"});return a.a.createElement("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24"},t)},re=function(e){var t=e.onOpen,r=Object(n.useState)(!1),c=Object(u.a)(r,2),i=c[0],o=c[1],l="px-2 pt-2 pb-4 ";l+=i?"block":"hidden";return a.a.createElement(n.Fragment,null,a.a.createElement("header",{className:"bg-gray-900 w-screen fixed w-screen fixed text-white font-bold z-10"},a.a.createElement("div",{className:"flex items-center justify-between px-4 py-3"},a.a.createElement("div",null,a.a.createElement("h1",{className:"uppercase"},"Crowd Source Radio")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){o(function(e){return!e}),t&&t()},type:"button",className:"block text-gray-500 hover:text-white focus:text-white focus:outline-none"},a.a.createElement(te,{isOpen:i})))),a.a.createElement("div",{className:l},a.a.createElement(s.b,{to:"/",className:"block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"},"Playlists"),a.a.createElement(s.b,{to:"/browse",className:"block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"},"Browse"))),a.a.createElement("div",{className:"bg-gray-400 border-gray-600 border-b w-screen fixed w-screen fixed top-12 shadow pl-4 pr-4 pt-2 pb-2 font-semibold text-gray-900 align-middle flex flex-row"},a.a.createElement(s.b,{className:"flex-shrink",to:"/playlists/mine"},"My Playlists"),a.a.createElement(s.b,{className:"flex-shrink pl-4 text-gray-600 hover:text-gray-900",to:"/playlists/following"},"Following")))},ne=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,a.a.createElement(re,null),a.a.createElement("div",{id:"body",className:"p-4 pt-22"},t))};!function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(Y||(Y={}));var ae=function(e){var t=e.alignment,r=void 0===t?Y.Left:t,c=e.className,i=e.isChecked,s=e.showDisplayValue,o=void 0===s||s,l=e.checkedDisplayValue,f=e.unCheckedDisplayValue,b=e.onChange,m=Object(n.useState)(i),p=Object(u.a)(m,2),O=p[0],h=p[1],d=function(e){if(o&&e===r){var t=r===Y.Left?"pr-2":"pl-2";return a.a.createElement("span",{className:"flex-shrink ".concat(t)},O?l:f)}},j=Object(n.useMemo)(function(){return"border rounded-full border-gray-900 flex items-center w-12 ".concat(i?"bg-green-300 justify-end":"bg-gray-300 justify-start")},[i]);return a.a.createElement("span",{className:"inline-flex cursor-pointer ".concat(c),onClick:function(){return h(function(e){var t=!e;return b&&b(t),t})}},d(Y.Left),a.a.createElement("span",{className:j},a.a.createElement("span",{className:"rounded-full border w-6 h-6 border-gray-900 shadow-inner bg-white shadow"})),d(Y.Right))},ce=Object(n.forwardRef)(function(e,t){var r=e.playlist,n=r.images.first(),c=O();return a.a.createElement("button",{ref:t,onClick:function(){return c.history.push("/playlist/".concat(r.id))},className:"block flex my-4 w-full rounded-lg bg-gray-600 overflow-hidden flex text-white text-left focus:outline-none focus:border-gray-600 focus:shadow-outline"},a.a.createElement("div",{className:"h-32 w-32 flex-none"},a.a.createElement("img",{className:"h-full w-full object-cover",src:n.url,alt:"".concat(r.name," cover")})),a.a.createElement("div",{className:"m-2 flex-grow"},a.a.createElement("h2",{className:"font-semibold overflow-hidden h-6"},r.name),a.a.createElement("h3",{className:"text-sm text-gray-100"},r.tracks.total," songs"),a.a.createElement("span",{className:"block text-xs text-gray-300"},"by ",r.owner.display_name)))}),ie=function(e){var t=e.playlistFilter,r=void 0===t?function(e){return!0}:t,c=Object(n.useState)(!0),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(!1),f=Object(u.a)(l,2),b=f[0],m=f[1],p=Object(n.useState)(Object(x.a)([])),O=Object(u.a)(p,2),h=O[0],y=O[1],g=Object(n.useState)(),w=Object(u.a)(g,2),v=w[0],E=w[1],k=B();Object(G.useAsyncEffect)(function(){var e=Object(j.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getCurrentUserPlaylists();case 2:if(n=e.sent,t()){e.next=5;break}return e.abrupt("return");case 5:a=n.items.filter(r),y(Object(x.a)([])),y(a),m(!1),E(n.next),o(!!n.next);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[r]),Object(G.useAsyncEffect)(function(){var e=Object(j.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&b){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k.getCurrentUserPlaylists(v);case 4:if(n=e.sent,t()){e.next=7;break}return e.abrupt("return");case 7:y(function(e){return e.merge(n.items.filter(r))}),m(!1),E(n.next),o(!!n.next);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[b,v]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,{hasMore:s,itemRowTemplate:function(e){return[{playlist:e,key:e.id},ce]},items:h,onLoadMoreItems:function(){return m(!0)},triggerOffsetCount:3}),a.a.createElement(function(){return b&&v?a.a.createElement(Q,{message:"Loading playlists..."}):null},null))},se=function(){var e=Object(n.useState)(function(){return new D}),t=Object(u.a)(e,2),r=t[0],c=t[1],i=B(),s=Object(o.f)();Object(G.useAsyncEffect)(function(){var e=Object(j.a)(d.a.mark(function e(t){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getCurrentUserProfile();case 2:if(r=e.sent,t()){e.next=5;break}return e.abrupt("return");case 5:c(r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,{alignment:Y.Right,className:"align-middle mt-4 font-semibold",isChecked:!1,checkedDisplayValue:"All Playlists",unCheckedDisplayValue:"Public Playlists",onChange:function(e){return s.push("/playlists/all")}}),a.a.createElement(ie,{playlistFilter:function(e){return function(t){return!!e&&t.owner.id===e.id&&(t.public||t.collaborative)}}(r)}))},oe=function(){var e=B(),t=Object(n.useState)(function(){return new D}),r=Object(u.a)(t,2),c=r[0],i=r[1];return Object(G.useAsyncEffect)(function(){var t=Object(j.a)(d.a.mark(function t(r){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurrentUserProfile();case 2:if(n=t.sent,r()){t.next=5;break}return t.abrupt("return");case 5:i(n);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]),a.a.createElement(ie,{playlistFilter:function(e){return function(t){return!!e&&t.owner.id!==e.id}}(c)})},le=function(){var e=B(),t=Object(o.f)(),r=Object(n.useState)(function(){return new D}),c=Object(u.a)(r,2),i=c[0],s=c[1];Object(G.useAsyncEffect)(function(){var t=Object(j.a)(d.a.mark(function t(r){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurrentUserProfile();case 2:if(n=t.sent,r()){t.next=5;break}return t.abrupt("return");case 5:s(n);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,{alignment:Y.Right,className:"align-middle mt-4 font-semibold",isChecked:!0,checkedDisplayValue:"All Playlists",unCheckedDisplayValue:"Public Playlists",onChange:function(e){return t.push("/playlists/mine")}}),a.a.createElement(ie,{playlistFilter:function(e){return function(t){return!!e&&t.owner.id===e.id}}(i)}))};function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var fe=function(){var e=O().location,t=B(),r=e.pathname.substr(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var r=Object(u.a)(t,2),n=r[0],a=r[1];return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,Object(l.a)({},n,a))},{});if(r.token_type&&r.access_token&&(t.setAccessToken(r.token_type,r.access_token),r.state)){var n=decodeURIComponent(r.state),c=JSON.parse(n).redirect_uri;c&&(window.location.href=c)}return a.a.createElement("p",{className:"pt-4 text-gray-900 font-semibold text-lg"},"Uh oh. Page not found. :(")},be=function(){return Object(n.useEffect)(function(){return document.body.classList.add("bg-gray-100"),function(){document.body.classList.remove("bg-gray-100")}},[]),a.a.createElement(s.a,null,a.a.createElement(ne,null,a.a.createElement(o.c,null,a.a.createElement(o.a,{exact:!0,path:"/"},a.a.createElement(se,null)),a.a.createElement(o.a,{exact:!0,path:"/playlists/mine"},a.a.createElement(se,null)),a.a.createElement(o.a,{exact:!0,path:"/playlists/all"},a.a.createElement(le,null)),a.a.createElement(o.a,{exact:!0,path:"/playlists/following"},a.a.createElement(oe,null)),a.a.createElement(o.a,{path:"/callback"},a.a.createElement(W,null)),a.a.createElement(o.a,{path:"/playlist/:id"},a.a.createElement(ee,null)),a.a.createElement(o.a,null,a.a.createElement(fe,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.5a56c925.chunk.js.map