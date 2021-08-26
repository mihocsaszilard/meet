(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(19),c=n.n(s),o=(n(25),n(3)),i=n(4),u=n(6),l=n(5),h=(n(26),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={showMore:!1,event:{}},t.Details=function(){t.setState((function(t){return{showMore:!t.showMore}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.event,n=e.location,a=e.summary,r=e.description,s=e.start;return Object(h.jsx)("div",{className:"event",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"location",children:n}),Object(h.jsx)("li",{className:"summary",children:a}),Object(h.jsx)("li",{className:"date",children:s.dateTime}),Object(h.jsx)("li",{className:"timezone",children:s.timeZone}),!0===this.state.showMore&&Object(h.jsxs)("p",{className:"description",children:[r,Object(h.jsx)("button",{className:"lessDetails",onClick:function(){return t.Details()},children:"Less details"})]}),!1===this.state.showMore&&Object(h.jsx)("button",{className:"moreDetails",onClick:function(){return t.Details()},children:"More details"})]})})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("ul",{className:"EventList",children:this.props.events.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(p,{event:t})},t.id)}))})}}]),n}(a.Component),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},t.handleInputChange=function(e){var n=e.target.value,a=t.props.locations.filter((function(t){return t.toUpperCase().indexOf(n.toUpperCase())>-1}));t.setState({query:n,suggestions:a})},t.handleItemClicked=function(e){t.setState({query:e,showSuggestions:!1}),t.props.updateEvents(e)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){t.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(e){return Object(h.jsx)("li",{onClick:function(){return t.handleItemClicked(e)},children:e},e)})),Object(h.jsx)("li",{onClick:function(){return t.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={numberOfEvents:8},t.inputValue=function(e){var n=e.target.value;t.setState({numberOfEvents:n})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"number-of-events",children:Object(h.jsx)("input",{type:"number",className:"eventNumber",value:this.state.numberOfEvents,onChange:this.inputValue})})}}]),n}(a.Component),j=n(20),b=n(7),m=n.n(b),w=n(8),O=(n(29),n(10)),g=n.n(O),x=function(){if(window.history.pushState&&window.location.pathname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else t=window.location.protocol+"//"+window.location.host,window.history.pushState("","",t)},y=function(){var t=Object(w.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(e)).then((function(t){return t.json()})).catch((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){var e=t.map((function(t){return t.location}));return Object(j.a)(new Set(e))},S=function(){var t=Object(w.a)(m.a.mark((function t(){var e,n,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:if(!(e=t.sent)){t.next=11;break}return x(),n="https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(e),t.next=8,g.a.get(n);case 8:return(a=t.sent).data&&(r=k(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),t.abrupt("return",a.data.events);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(w.a)(m.a.mark((function t(){var e,n,a,r,s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,y(e);case 5:t.t0=t.sent;case 6:if(n=t.t0,e&&!n.error){t.next=21;break}return t.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),t.next=13,a.get("code");case 13:if(r=t.sent){t.next=20;break}return t.next=17,g.a.get("https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=t.sent,c=s.data.authUrl,t.abrupt("return",window.location.href=c);case 20:return t.abrupt("return",r&&N(r));case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(w.a)(m.a.mark((function t(e){var n,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),t.next=3,fetch("https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(t){return t.json()})).catch((function(t){return t}));case 3:return a=t.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=(n(48),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={events:[],locations:[]},t.updateEvents=function(e){S().then((function(n){var a="all"===e?n:n.filter((function(t){return t.location===e}));t.setState({events:a})}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,S().then((function(e){t.mounted&&t.setState({events:e,locations:k(e)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(f,{events:this.state.events}),Object(h.jsx)(v,{})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.4069eee1.chunk.js.map