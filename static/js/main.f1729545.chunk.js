(this.webpackJsonpfoodmart=this.webpackJsonpfoodmart||[]).push([[0],{42:function(e,t,a){e.exports=a(80)},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),c=a.n(o),r=(a(47),a(48),a(49),a(50),a(12)),i=a(13),s=a(17),m=a(15),d=(a(51),a(21)),u=a(3),h=a(39),b=a(22),p=a.n(b),E=a(96),g=a(100),f=a(98),v=a(99),y=(a(69),Object(E.a)({media:{height:290,width:"100%"},style:{cursor:"pointer",height:500},odd:{backgroundColor:"black",color:"white",fontSize:"20px"},even:{backgroundColor:"white",color:"black",fontSize:"20px"}})),k=function(e){var t=y(),a=function(t){e.modal(t)},n=l.a.createElement(f.a,{className:t.even},l.a.createElement("label",null,e.object.label),l.a.createElement("br",null),l.a.createElement("label",null,e.object.name),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("b",null,e.object.price)),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-dark btn-sm",onClick:function(){return a(e.object)}},"Show"));return console.log(e.index),e.index%2!==0&&(n=l.a.createElement(f.a,{className:t.odd},l.a.createElement("label",null,e.object.label),l.a.createElement("br",null),l.a.createElement("label",null,e.object.name),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("b",null,e.object.price)),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){return a(e.object)}},"Show"))),l.a.createElement(g.a,{className:t.style},l.a.createElement(v.a,{className:t.media,image:e.object.image,title:"Food Items",onClick:function(){return t=e.object,void e.click(t);var t}}),n)},j=(a(73),function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("div",{className:"mx-auto"},l.a.createElement("h2",{className:"header"},"Welcome to Food Mart")))}),N=(a(74),function(e){var t=null;return"true"===e.showBack&&(t=l.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){e.back()}},"Back")),l.a.createElement("div",{className:"container info"},l.a.createElement("div",{className:"row infodisp my-1"},l.a.createElement("div",{className:"col-md-6 children"},l.a.createElement("span",{className:"back"},t),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:e.obj.image,alt:e.obj.name})),l.a.createElement("div",{className:"price"},l.a.createElement("p",null,e.obj.label),l.a.createElement("p",null,l.a.createElement("b",null,e.obj.price,"$")))),l.a.createElement("div",{className:"col-md-6 children"},l.a.createElement("div",{className:"name my-2"},l.a.createElement("p",null,l.a.createElement("b",null,"Category:")," ",e.obj.category),l.a.createElement("p",null,l.a.createElement("b",null,"Name:")," ",e.obj.name)),l.a.createElement("div",{className:"description my-2"},l.a.createElement("p",null,e.obj.description)))))}),C=(a(75),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClose=function(){document.getElementById("myModal").style.display="none"},n.handleShow=function(){document.getElementById("myModal").style.display="block"},n.state={show:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props.object),l.a.createElement(n.Fragment,null,l.a.createElement("button",{id:"mymodalbtn",onClick:this.handleShow,hidden:!0},"Open Modal"),l.a.createElement("div",{id:"myModal",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"closecontainer"},l.a.createElement("div",{className:"heading"},l.a.createElement("h3",null,"Food Recipe")),l.a.createElement("div",{id:"close",className:"close",onClick:this.handleClose},"\xd7")),l.a.createElement("div",{className:"recipe"},l.a.createElement(N,{obj:this.props.object,showBack:"false"})))))}}]),a}(l.a.Component)),w=(a(76),a(77),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).displaydata=function(){var e=n.state.foodData.length,t=0,a=document.createElement("div");a.setAttribute("class","row my-1");for(var o=0;o<e;o++){var r=document.createElement("div");if(r.setAttribute("class","col-3 my-1"),r.setAttribute("id","prod"+t),t++,a.appendChild(r),document.getElementById("container").appendChild(a),t===e)break}for(var i=0;i<e;i++)c.a.render(l.a.createElement(k,{object:n.state.foodData[i],click:n.handleClick,index:i,modal:n.handleModal}),document.getElementById("prod"+i))},n.handleModal=function(e){console.log(e.name),c.a.render(l.a.createElement(C,{object:e}),document.getElementById("modaldisp")),document.getElementById("mymodalbtn").click()},n.handleClick=function(e){console.log(e),n.props.history.push({pathname:"/food/"+e.id,data:e})},n.handleChange=function(e){var t=Object(h.a)(n.state.foodData);console.log(e.keyCode,e.target.value);var a=e.target.value;if(0===e.target.value.length)return n.setState({suggestions:[],suggested:"All"}),document.getElementById("container").innerHTML="",void n.displaydata();for(var l,o,c=[],r=0;r<t.length;r++)for(l in t[r])"image"!==l&&"id"!==l&&c.length<=5&&(o=t[r][l],console.log(o,o.toString().indexOf(a)),o.toString().toLowerCase().indexOf(a)>-1&&c.push(o));n.setState({suggestions:[].concat(c)}),console.log(c)},n.search=function(e){console.log(e);var t=[];n.state.foodData.forEach((function(a){(a.name.includes(e)||a.category.includes(e))&&t.push(a)})),console.log(t),n.setState({suggestions:[],suggested:e}),n.displayfiltereddata(t)},n.state={foodData:[],suggestions:[],suggested:"All"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Component mounted!!"),p.a.get("http://starlord.hackerearth.com/recipe").then((function(t){console.log(t.data),e.setState({foodData:t.data}),e.displaydata()})).catch((function(e){console.log(e)}))}},{key:"displayfiltereddata",value:function(e){document.getElementById("container").innerHTML="";var t=e.length,a=0,n=document.createElement("div");n.setAttribute("class","row my-1");for(var o=0;o<t;o++){var r=document.createElement("div");if(r.setAttribute("class","col-3 my-1"),r.setAttribute("id","filtprod"+a),a++,n.appendChild(r),document.getElementById("container").appendChild(n),a===t)break}for(var i=0;i<t;i++)c.a.render(l.a.createElement(k,{object:e[i],click:this.handleClick,index:i,modal:this.handleModal}),document.getElementById("filtprod"+i))}},{key:"handleKeyUp",value:function(e){if(13===e.keyCode){var t=this.state.suggestions[0];this.search(t)}}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement(j,null),l.a.createElement("div",{className:"search my-2"},l.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"What are you looking for?",onChange:this.handleChange,onKeyUp:this.handleKeyUp})),l.a.createElement("ul",{className:"searchcontainer"},this.state.suggestions.map((function(t){return l.a.createElement("li",{key:{elem:t}+Math.random()},l.a.createElement("button",{type:"button",className:"searchsuggest",onClick:function(){e.search(t)}},t))}))),l.a.createElement("div",{className:"searchdisp px-1",id:"searchdisp"},l.a.createElement("p",null,l.a.createElement("b",null,"Category: "),this.state.suggested)),l.a.createElement("div",{className:"parent",id:"parent"},l.a.createElement("div",{className:"child p-5 m-1"},l.a.createElement("span",{id:"container"}))),l.a.createElement("span",{id:"modaldisp"}))}}]),a}(l.a.Component)),O=Object(u.e)(w),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).goBack=function(){n.props.history.push("/Noob0799")},n.state={foodItem:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id);var t=this.props.match.params.id;if(t){var a={};p.a.get("http://starlord.hackerearth.com/recipe").then((function(n){var l=n.data;console.log(l);for(var o=0;o<l.length;o++)if(l[o].id.toString()===t){a=l[o];break}console.log(a),e.setState({foodItem:a})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(j,null),l.a.createElement(N,{obj:this.state.foodItem,showBack:"true",back:this.goBack}))}}]),a}(l.a.PureComponent),I=Object(u.e)(B),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(n.Fragment,null,l.a.createElement(u.a,{exact:!0,path:"/Noob0799",component:O}),l.a.createElement(u.a,{exact:!0,path:"/Noob0799/food/:id",component:I}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.f1729545.chunk.js.map