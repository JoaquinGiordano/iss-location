(this["webpackJsonpiss-location"]=this["webpackJsonpiss-location"]||[]).push([[0],{36:function(t,e,n){t.exports=n(74)},70:function(t,e){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(30),c=n.n(l),i=n(31),s=n(32),r=n(35),u=n(34),h=n(33),p=n.n(h),d=(n(73),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={long:"",lat:"",socket:p()("https://iss-location-socket.joaquingiordano.now.sh/")},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.socket.on("coords",(function(e){t.setState({long:e.long,lat:e.lat})}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"App"},o.a.createElement("h1",null,"International Space Station"),o.a.createElement("h2",null,"Longitude: ",o.a.createElement("span",null,this.state.long,"\xb0")),o.a.createElement("h2",null,"Latitude: ",o.a.createElement("span",null,this.state.lat,"\xb0")))}}]),n}(o.a.Component));c.a.render(o.a.createElement(d,null),document.querySelector("#root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.82b8b208.chunk.js.map