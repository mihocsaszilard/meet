(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),s=n.n(o),c=(n(26),n(3)),i=n(4),u=n(6),l=n(5),d=(n(27),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1,event:{}},e.Details=function(){e.setState((function(e){return{showMore:!e.showMore}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=t.location,a=t.summary,r=t.description,o=t.start;return Object(d.jsx)("div",{className:"event",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"location",children:n}),Object(d.jsx)("li",{className:"summary",children:a}),Object(d.jsx)("li",{className:"date",children:o.dateTime}),Object(d.jsx)("li",{className:"timezone",children:o.timeZone}),!0===this.state.showMore&&Object(d.jsxs)("p",{className:"description",children:[r,Object(d.jsx)("button",{className:"lessDetails",onClick:function(){return e.Details()},children:"Less details"})]}),!1===this.state.showMore&&Object(d.jsx)("button",{className:"moreDetails",onClick:function(){return e.Details()},children:"More details"})]})})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChange=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:8},e.inputValue=function(t){var n=t.target.value;e.setState({numberOfEvents:n})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"number-of-events",children:Object(d.jsx)("input",{type:"number",className:"eventNumber",value:this.state.numberOfEvents,onChange:this.inputValue})})}}]),n}(a.Component),v=n(21),b=n(7),g=n.n(b),j=n(8),w=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],y=n(9),O=n(11),k=n.n(O),x=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},S=function(){var e=Object(j.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.map((function(e){return e.location}));return Object(v.a)(new Set(t))},C=function(){var e=Object(j.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.NProgress.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return y.NProgress.done(),e.abrupt("return",w);case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return x(),n="https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(r=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),y.NProgress.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(g.a.mark((function e(){var t,n,a,r,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,S(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&N(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6gsa36bt1l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=(n(48),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[]},e.updateEvents=function(t){C().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,C().then((function(t){e.mounted&&e.setState({events:t,locations:T(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(p,{events:this.state.events}),Object(d.jsx)(f,{})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.eb7a465d.chunk.js.map