(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(7),c=a.n(n),s=(a(15),a(8)),i=a(1),p=a(2),l=a(4),m=a(3),d=a(5),u=(a(16),a(17),a(18),a(19),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.onClickCompare;return r.a.createElement("div",{className:"card card-product"},r.a.createElement("img",{style:{height:300},src:t.image}),r.a.createElement("div",{className:"card-body",style:{textAlign:"left",padding:10,height:238}},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("p",{className:"card-text"},t.description),r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,"\u2606"),r.a.createElement("span",null,"\u2606"),r.a.createElement("span",null,"\u2606"),r.a.createElement("span",null,"\u2606"),r.a.createElement("span",null,"\u2606")),r.a.createElement("p",{style:{color:"red"}},"Price: ",t.price_discount,"$"),t.price?r.a.createElement("p",{style:{textDecoration:"line-through"}}," ","Price: ",t.price,"$"):null,r.a.createElement("button",{onClick:function(){return a(t)},className:"btn btn-primary btn-compare"},"Compare")))}}]),t}(o.Component)),h=(a(20),function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isCollapse:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.productCompare;return r.a.createElement("div",{className:"row compare-product"},r.a.createElement("div",{className:"col-12 d-flex justify-content-end"},r.a.createElement("i",{className:"material-icons",onClick:function(){return e.setState({isCollapse:!e.state.isCollapse})},style:{cursor:"pointer"}},this.state.isCollapse?"keyboard_arrow_up":"keyboard_arrow_down")),!this.state.isCollapse&&t.map(function(e){return r.a.createElement("div",{key:e.name,className:"col-3"},r.a.createElement(u,{product:e}))}))}}]),t}(o.Component)),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[{id:1,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 1",description:"something about...",price:0,price_discount:4e4,is_compare:!1},{id:2,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 2",description:"something about...",price:5e4,price_discount:4e4,is_compare:!1},{id:3,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 3",description:"Something wrong...",price:5e4,price_discount:3e4,is_compare:!1},{id:4,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 2",description:"something about...",price:5e4,price_discount:4e4,is_compare:!1},{id:5,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 3",description:"Something wrong...",price:5e4,price_discount:3e4,is_compare:!1},{id:6,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 2",description:"something about...",price:5e4,price_discount:4e4,is_compare:!1},{id:7,image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Product 3",description:"Something wrong...",price:5e4,price_discount:3e4,is_compare:!1}]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.products,a=t.filter(function(e){return e.is_compare});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map(function(a){return r.a.createElement("div",{className:"col-3"},r.a.createElement(u,{onClickCompare:function(a){return e.setState({products:t.map(function(e){return e.id===a.id?Object(s.a)({},e,{is_compare:!e.is_compare}):e})})},product:a}))})),r.a.createElement(h,{productCompare:a})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5a1bdb2f.chunk.js.map