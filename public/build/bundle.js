var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function r(t){l=t}const s=[],c=[],d=[],u=[],p=Promise.resolve();let h=!1;function f(t){d.push(t)}let g=!1;const m=new Set;function y(){if(!g){g=!0;do{for(let t=0;t<s.length;t+=1){const e=s[t];r(e),b(e.$$)}for(s.length=0;c.length;)c.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];m.has(e)||(m.add(e),e())}d.length=0}while(s.length);for(;u.length;)u.pop()();h=!1,g=!1,m.clear()}}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(f)}}const v=new Set;function w(t,e){-1===t.$$.dirty[0]&&(s.push(t),h||(h=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $(a,s,c,d,u,p,h=[-1]){const g=l;r(a);const m=s.props||{},b=a.$$={fragment:null,ctx:null,props:p,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:h};let $=!1;var k,T;b.ctx=c?c(a,m,(t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&u(b.ctx[t],b.ctx[t]=o)&&(b.bound[t]&&b.bound[t](o),$&&w(a,t)),e}):[],b.update(),$=!0,o(b.before_update),b.fragment=!!d&&d(b.ctx),s.target&&(s.hydrate?b.fragment&&b.fragment.l(function(t){return Array.from(t.childNodes)}(s.target)):b.fragment&&b.fragment.c(),s.intro&&((k=a.$$.fragment)&&k.i&&(v.delete(k),k.i(T))),function(t,n,a){const{fragment:l,on_mount:r,on_destroy:s,after_update:c}=t.$$;l&&l.m(n,a),f(()=>{const n=r.map(e).filter(i);s?s.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(f)}(a,s.target,s.anchor),y()),r(g)}var k,T,_="AIzaSyAIYCyk2KaSfTyX67jJuNKYo-AZAtwwZ-U",x=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];function j(){gapi.client.init({apiKey:_,clientId:"541857836176-ooorj15vavsg5e0h0c98jodmp5lt39js.apps.googleusercontent.com",discoveryDocs:x,scope:"https://www.googleapis.com/auth/drive"}).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(C),C(gapi.auth2.getAuthInstance().isSignedIn.get()),k.onclick=S,T.onclick=A}),(function(t){var e,n,o;e=JSON.stringify(t,null,2),n=document.getElementById("content"),o=document.createTextNode(e+"\n"),n.appendChild(o)}))}function C(t){t?(k.style.display="none",T.style.display="block",gapi.client.drive.files.list({pageSize:10,fields:"nextPageToken, files(id, name)"}).then((function(t){var e=t.result.files;if(e&&e.length>0)for(var n=0;n<e.length;n++){var o=e[n];"notes.json"==o.name&&(I=o.id)}}))):(k.style.display="block",T.style.display="none")}function S(t){gapi.auth2.getAuthInstance().signIn()}function A(t){gapi.auth2.getAuthInstance().signOut()}let I;function E(){return document.querySelector("#notesid").value.match(/d\/(.*)\/view\?/)[1]}let O=t=>{""!=E()?(console.log("updating"),(t=>{let e='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',n=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify(t)}\n--uploadboundary--`;fetch(`https://www.googleapis.com/upload/drive/v3/files/${E()}/?uploadType=multipart&key=${_}&fields=id`,{method:"PATCH",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(e+n).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:e+n}).then(t=>t.json()).then(t=>console.log(t))})(t)):(console.log("creating anew"),(()=>{let t='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',e=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify({starting:"text"})}\n--uploadboundary--\n    `;fetch(`https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&api=${_}&fields=id`,{method:"POST",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(t+e).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:t+e}).then(t=>t.json()).then(t=>console.log(t))})())};function D(e){let n;return{c(){var t;t="div",n=document.createElement(t),n.innerHTML='<p>Drive API Quickstart</p> \n    <button id="authorize_button" style="display: none;">Authorize</button> \n    <button id="signout_button" style="display: none;">Sign Out</button> \n    <input id="notesid"> \n    <pre id="content" style="white-space: pre-wrap;"></pre>'},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e)}}}let L=()=>({ele:document.createElement("textarea"),holder:document.createElement("div"),init(){this.holder.id="textholder",this.holder.append(this.ele),this.ele.addEventListener("keydown",this.keycheck.bind(this)),this.ele.style.height="400px",this.ele.style.width="90%",document.body.append(this.holder)},keycheck(t){if("Control"==t.key){let e=this.ele.selectionStart,n=""+new Date;this.ele.value.match(/--date--/)&&(this.ele.value=this.ele.value.replace(/--date--/,""+n),t.preventDefault(),this.ele.selectionstart=e+n.length,this.ele.selectionend=e+n.length)}}});class N{constructor(){let t=L();t.init(),fetch(`https://www.googleapis.com/drive/v3/files/${E()}/?key=${_}&alt=media`,{}).then(t=>t.json()).then(e=>{JSON.parse(e).map(e=>{t.ele.value+=e.value})})}}class z{constructor(){this.btn=document.createElement("button"),document.body.prepend(this.btn),this.btn.addEventListener("click",()=>{this.load()}),this.btn.id="reload",this.btn.innerHTML="Load prev data"}load(){new N}}class B{constructor(){this.btn=document.createElement("button"),this.btn.innerHTML="Download",this.btn.id="download",this.btn.addEventListener("click",()=>{let t=this.retrieveInfo();O(JSON.stringify(t))}),document.body.prepend(this.btn)}retrieveInfo(){return Array(...document.querySelectorAll("textarea")).map(t=>({value:t.value}))}}const J=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),$(this,t,null,D,a,{})}}({target:document.body,props:{name:"world"}});return window.onload=()=>{k=document.getElementById("authorize_button"),T=document.getElementById("signout_button"),gapi.load("client:auth2",j),new B,new z},J}();
//# sourceMappingURL=bundle.js.map
