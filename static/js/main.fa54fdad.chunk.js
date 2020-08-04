(this["webpackJsonpcitation-grab"]=this["webpackJsonpcitation-grab"]||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},56:function(e,t,a){e.exports=a.p+"static/media/logo512.e9fd17e6.png"},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),i=a.n(c),l=a(9),s=a(10),u=a(12),o=a(11),m=a(15),p=a(1),d=a(7),h=a.n(d),v=a(13),f=a(19),E=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(null),s=Object(f.a)(l,2),u=s[0],o=s[1],m=Object(n.useRef)(null),p=function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(m.current.value);case 2:e.sent||window.clipboardData.setData("Text",m.current.value);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(a),o(null),t.next=4,e.getCitations(a);case 4:n=t.sent,o(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=u?u.map((function(e){return r.a.createElement("div",{key:e.title,className:"item"},r.a.createElement("div",{className:"right floated content"},r.a.createElement("div",{className:"ui vertical animated button",tabIndex:"0",onClick:p},r.a.createElement("div",{className:"hidden content"},"Copy"),r.a.createElement("div",{className:"visible content"},r.a.createElement("i",{className:"copy icon"})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},e.title)),r.a.createElement("form",{className:"ui form"},r.a.createElement("input",{ref:m,value:e.snippet,readOnly:!0,style:{maxWidth:"70%"}})))})):r.a.createElement("h3",null,"Loading..."),b=e.searches.map((function(e){var t=e.result_id===c?"active":"";return r.a.createElement(r.a.Fragment,{key:e.result_id},r.a.createElement("div",{className:"title ".concat(t),onClick:function(){return d(e.result_id)}},r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,r.a.createElement("a",{href:e.link,target:"blank"},e.snippet))),r.a.createElement("div",{className:"content ".concat(t)},r.a.createElement("h4",null,"Citations"),r.a.createElement("div",{className:"ui middle aligned divided list"},E),r.a.createElement("hr",null),r.a.createElement("p",null,"Type: ",e.type),r.a.createElement("p",null,"Publication Info: ",e.publication_info.summary),r.a.createElement("p",null,"Author(s):"," ",e.publication_info.authors?e.publication_info.authors.map((function(e){return e.name})):null)))}));return r.a.createElement("div",{className:"ui styled fluid accordion"},b)},b=a(31),g=a.n(b).a.create({baseURL:"https://serpapi.com/"}),N="114815a4f5169d815ce522585ba6bbee133edc39e6348c97413cca21ac47f483",y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"Rubik's Cube",searches:[]},e.onFormSubmit=function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({searches:null}),t.next=4,g.get("/search",{params:{engine:"google_scholar",q:e.state.value,hl:"en",api_key:N}});case 4:n=t.sent,e.setState({searches:n.data.organic_results});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCitations=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/search",{params:{engine:"google_scholar_cite",q:t,hl:"en",api_key:N}});case 2:return a=e.sent,e.abrupt("return",a.data.citations);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.onFormSubmit(new Event("submit"))}},{key:"renderResults",value:function(){return this.state.searches?r.a.createElement(E,{searches:this.state.searches,getCitations:this.getCitations}):r.a.createElement("h2",null,"Loading...")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{ref:this.formRef,className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search citations"),r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",value:this.state.value,placeholder:"Example: Functional Programming",onChange:function(t){return e.setState({value:t.target.value})}}),r.a.createElement("i",{className:"search icon"})))),this.renderResults())}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Result 1"),"Citations")),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Result 2"),"Citations")))}}]),a}(r.a.Component),j=a(56),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui fluid two item stackable labeled icon inverted menu"},r.a.createElement(m.b,{to:"/",className:"item"},r.a.createElement("img",{style:{width:"30px",height:"auto",paddingBottom:"10px"},src:j,alt:"homepage"}),"Search"),r.a.createElement(m.b,{to:"/list",className:"item"},r.a.createElement("i",{className:"list icon"}),"List")))},x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(m.a,null,r.a.createElement(k,null),r.a.createElement(p.a,{path:"/",exact:!0,component:y}),r.a.createElement(p.a,{path:"/list",exact:!0,component:O})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(x,null),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fa54fdad.chunk.js.map