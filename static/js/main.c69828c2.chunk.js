(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),s=(n(24),n(8)),l=n(9),c=n(12),p=n(10),m=n(13),d=(n(26),n(33)),h=n(35),u=n(32),g=n(34),f="UQ75LhFcnAv0DtOUwBEA",y="f5nyezNmYF4wvuJqQgNSkg",v=function(e,t){return"https://isoline.route.api.here.com/routing/7.2/calculateisoline.json?app_id=".concat(f,"&app_code=").concat(y,"&mode=shortest;").concat(t.mode,";traffic:").concat(t.traffic,"&start=geo!").concat(e[0],",").concat(e[1],"&range=").concat(t.range,"&rangetype=").concat(t.type)},E={time:5e3,distance:8e4},b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleDrag=function(){var e=n.marker.current.leafletElement.getLatLng();n.props.handleDrag(n.props.index,[e.lat,e.lng])},n.marker=o.a.createRef(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{center:this.props.center,zoom:parseInt(this.props.options.zoom),zoomControl:!1,attributionControl:8===this.props.index},o.a.createElement(h.a,{url:(e=this.props.style,"https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/".concat(e,"/{z}/{x}/{y}/512/png8?app_id=").concat(f,"&app_code=").concat(y,"&ppi=320"))}),o.a.createElement(u.a,{position:this.props.center,draggable:!0,onDragEnd:this.handleDrag,ref:this.marker}),this.props.polygon.length>0&&o.a.createElement(g.a,{positions:this.props.polygon,color:"#2DD5C9"}));var e}}]),t}(o.a.Component),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(p.a)(t).call(this,e))).updateIsolines=function(){var e=n.state.maps.map(function(e){return fetch(v(e.coordinates,n.state.options)).then(function(e){return e.json()})});Promise.all(e).then(function(e){var t=n.state.maps.map(function(t,n){return e[n].response.isoline[0].component.length>0?t.polygon=e[n].response.isoline[0].component[0].shape.map(function(e){return[e.split(",")[0],e.split(",")[1]]}):t.polygon=[],t});n.setState({maps:t})})},n.componentDidMount=function(){n.updateIsolines()},n.handleDrag=function(e,t){fetch(v(t,n.state.options)).then(function(e){return e.json()}).then(function(a){var o=n.state.maps.slice();a.hasOwnProperty("response")?o[e].polygon=a.response.isoline[0].component[0].shape.map(function(e){return[e.split(",")[0],e.split(",")[1]]}):o[e].polygon=[],o[e].coordinates=t,n.setState({maps:o})})},n.handleFormChange=function(e){var t=e.target.id,a=e.target.value,o=n.state.options;"type"===t&&n.state.options.range>E[a]&&(o.range=E[a]),o[t]=a,n.setState({options:o},function(){n.updateIsolines()})},n.state={maps:[{name:"Seattle, WA",coordinates:[47.605779,-122.315744],polygon:[]},{name:"San Francisco, CA",coordinates:[37.761732,-122.440343],polygon:[]},{name:"New York City, NY",coordinates:[40.734238,-73.988188],polygon:[]},{name:"Berlin, Germany",coordinates:[52.520609,13.409321],polygon:[]},{name:"Chicago, IL",coordinates:[41.884314,-87.630478],polygon:[]},{name:"Singapore, Singapore",coordinates:[1.34792,103.862097],polygon:[]},{name:"Buenos Aires, Argentina",coordinates:[-34.609855,-58.443259],polygon:[]},{name:"Johannesburg, South Africa",coordinates:[-26.205689,28.04245],polygon:[]},{name:"Sydney, Australia",coordinates:[-33.865143,151.2099],polygon:[]}],options:{zoom:10,type:"distance",range:1e4,mode:"car",traffic:"disabled",style:"reduced.night"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="distance"===this.state.options.type?E.distance:E.time,n=this.state.options.range>t?t:this.state.options.range;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"controls"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"type"},"Distance or Time"),o.a.createElement("select",{id:"type",value:this.state.options.type,onChange:this.handleFormChange},o.a.createElement("option",{value:"time"},"Seconds"),o.a.createElement("option",{value:"distance"},"Meters"))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"range"},"Range (",parseInt(this.state.options.range).toLocaleString(),")"),o.a.createElement("input",{id:"range",onChange:this.handleFormChange,type:"range",min:"1",max:t,value:n})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"mode"},"Mode"),o.a.createElement("select",{id:"mode",onChange:this.handleFormChange,value:this.state.options.mode},o.a.createElement("option",{value:"car"},"Car"),o.a.createElement("option",{value:"pedestrian"},"Pedestrian"))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"traffic"},"Traffic"),o.a.createElement("select",{id:"traffic",onChange:this.handleFormChange,value:this.state.options.traffic},o.a.createElement("option",{value:"enabled"},"Traffic Enabled"),o.a.createElement("option",{value:"disabled"},"Traffic Disabled"))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"zoom"},"Zoom Level (",this.state.options.zoom,")"),o.a.createElement("input",{id:"zoom",onChange:this.handleFormChange,type:"range",min:"1",max:"16",value:this.state.options.zoom})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"style"},"Map Style"),o.a.createElement("select",{id:"style",onChange:this.handleFormChange,value:this.state.options.style},o.a.createElement("option",{value:"reduced.day"},"Reduced Day "),o.a.createElement("option",{value:"reduced.night"},"Reduced Night"),o.a.createElement("option",{value:"normal.day"},"Normal Day"),o.a.createElement("option",{value:"normal.night"},"Normal Night")))),o.a.createElement("div",{className:"map-grid"},this.state.maps.map(function(t,n){return o.a.createElement(b,{key:n,index:n,center:t.coordinates,options:e.state.options,handleDrag:e.handleDrag,polygon:t.polygon,style:e.state.options.style})})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.c69828c2.chunk.js.map