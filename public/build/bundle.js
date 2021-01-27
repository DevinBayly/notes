var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function l(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}function c(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let p;function f(t){p=t}const h=[],g=[],m=[],y=[],b=Promise.resolve();let v=!1;function w(t){m.push(t)}let $=!1;const k=new Set;function x(){if(!$){$=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];f(e),C(e.$$)}for(h.length=0;g.length;)g.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];k.has(e)||(k.add(e),e())}m.length=0}while(h.length);for(;y.length;)y.pop()();v=!1,$=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const T=new Set;function _(t,e){-1===t.$$.dirty[0]&&(h.push(t),v||(v=!0,b.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(a,r,l,s,c,u,d=[-1]){const h=p;f(a);const g=r.props||{},m=a.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d};let y=!1;var b,v;m.ctx=l?l(a,g,(t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),y&&_(a,t)),e}):[],m.update(),y=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target&&(r.hydrate?m.fragment&&m.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):m.fragment&&m.fragment.c(),r.intro&&((b=a.$$.fragment)&&b.i&&(T.delete(b),b.i(v))),function(t,n,a){const{fragment:r,on_mount:l,on_destroy:s,after_update:c}=t.$$;r&&r.m(n,a),w(()=>{const n=l.map(e).filter(i);s?s.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(w)}(a,r.target,r.anchor),x()),f(h)}var j,I,S="AIzaSyAIYCyk2KaSfTyX67jJuNKYo-AZAtwwZ-U",E=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];function L(){gapi.client.init({apiKey:S,clientId:"541857836176-ooorj15vavsg5e0h0c98jodmp5lt39js.apps.googleusercontent.com",discoveryDocs:E,scope:"https://www.googleapis.com/auth/drive"}).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(N),N(gapi.auth2.getAuthInstance().isSignedIn.get()),j.onclick=O,I.onclick=D}),(function(t){z(JSON.stringify(t,null,2))}))}function N(t){t?(j.style.display="none",I.style.display="block",gapi.client.drive.files.list({pageSize:10,fields:"nextPageToken, files(id, name)"}).then((function(t){z("Files:");var e=t.result.files;if(e&&e.length>0)for(var n=0;n<e.length;n++){var o=e[n];z(o.name+" ("+o.id+")"),"notes.json"==o.name&&(B=o.id)}else z("No files found.")}))):(j.style.display="block",I.style.display="none")}function O(t){gapi.auth2.getAuthInstance().signIn()}function D(t){gapi.auth2.getAuthInstance().signOut()}function z(t){var e=document.getElementById("content"),n=document.createTextNode(t+"\n");e.appendChild(n)}let B;let J=()=>{let t='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',e=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify({starting:"text"})}\n--uploadboundary--\n    `;fetch(`https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&api=${S}&fields=id`,{method:"POST",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(t+e).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:t+e}).then(t=>t.json()).then(t=>console.log(t))},P=()=>fetch(`https://www.googleapis.com/drive/v3/files/${B}/?key=${S}&alt=media`,{}),H=t=>{B?(console.log("updating"),(t=>{let e='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',n=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify(t)}\n--uploadboundary--`;fetch(`https://www.googleapis.com/upload/drive/v3/files/${B}/?uploadType=multipart&key=${S}&fields=id`,{method:"PATCH",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(e+n).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:e+n}).then(t=>t.json()).then(t=>console.log(t))})(t)):(console.log("creating anew"),J())};function M(e){let n,i,a,p,f,h,g,m,y,b,v,w,$,k,x,C,T,_,A;return{c(){n=l("div"),i=l("p"),i.textContent="Drive API Quickstart",a=s(),p=l("button"),p.textContent="creatfile",f=s(),h=l("button"),h.textContent="makenew",g=s(),m=l("button"),m.textContent="getfile",y=s(),b=l("button"),b.textContent="Authorize",v=s(),w=l("button"),w.textContent="Sign Out",$=s(),k=l("pre"),x=s(),C=l("div"),C.innerHTML='<canvas id="the-canvas"></canvas>',T=s(),_=l("canvas"),u(b,"id","authorize_button"),d(b,"display","none"),u(w,"id","signout_button"),d(w,"display","none"),u(k,"id","content"),d(k,"white-space","pre-wrap"),u(C,"id","pdfcontainer"),u(_,"id","canvas")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),r(n,i),r(n,a),r(n,p),r(n,f),r(n,h),r(n,g),r(n,m),r(n,y),r(n,b),r(n,v),r(n,w),r(n,$),r(n,k),r(n,x),r(n,C),r(n,T),r(n,_),A=[c(p,"click",H),c(h,"click",J),c(m,"click",P)]},p:t,i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e),o(A)}}}let F=()=>({ele:document.createElement("textarea"),init(){this.ele.addEventListener("keydown",this.keycheck.bind(this)),this.ele.style.height="400px",this.ele.style.width="800px",document.body.append(this.ele)},keycheck(t){if("Control"==t.key){let e=this.ele.selectionStart,n=""+new Date;this.ele.value.match(/--date--/)&&(this.ele.value=this.ele.value.replace(/--date--/,""+n),t.preventDefault(),this.ele.selectionstart=e+n.length,this.ele.selectionend=e+n.length)}}});class K{constructor(){let t=F();t.init(),P().then(t=>t.json()).then(e=>{JSON.parse(e).map(e=>{t.ele.value+=e.value})})}}class U{constructor(){this.btn=document.createElement("button"),document.body.prepend(this.btn),this.btn.addEventListener("click",()=>{this.load()}),this.btn.id="reload",this.btn.innerHTML="Load prev data"}load(){new K}}class q{constructor(){this.btn=document.createElement("button"),this.btn.innerHTML="Download",this.btn.id="download",this.btn.addEventListener("click",()=>{let t=this.retrieveInfo();H(JSON.stringify(t))}),document.body.prepend(this.btn)}retrieveInfo(){return Array(...document.querySelectorAll("textarea")).map(t=>({value:t.value}))}}const Y=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),A(this,t,null,M,a,{})}}({target:document.body,props:{name:"world"}});return window.onload=()=>{j=document.getElementById("authorize_button"),I=document.getElementById("signout_button"),gapi.load("client:auth2",L),new q,new U},Y}();
//# sourceMappingURL=bundle.js.map
