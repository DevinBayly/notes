var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function l(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}function c(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function u(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let p;function f(t){p=t}const h=[],m=[],g=[],y=[],b=Promise.resolve();let v=!1;function w(t){g.push(t)}let $=!1;const x=new Set;function C(){if(!$){$=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];f(n),k(n.$$)}for(h.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(h.length);for(;y.length;)y.pop()();v=!1,$=!1,x.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const T=new Set;function A(t,n){-1===t.$$.dirty[0]&&(h.push(t),v||(v=!0,b.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function _(i,r,l,s,c,u,d=[-1]){const h=p;f(i);const m=r.props||{},g=i.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d};let y=!1;var b,v;g.ctx=l?l(i,m,(t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&c(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),y&&A(i,t)),n}):[],g.update(),y=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),r.target&&(r.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):g.fragment&&g.fragment.c(),r.intro&&((b=i.$$.fragment)&&b.i&&(T.delete(b),b.i(v))),function(t,e,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:c}=t.$$;r&&r.m(e,i),w(()=>{const e=l.map(n).filter(a);s?s.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(w)}(i,r.target,r.anchor),C()),f(h)}var j,I,S="AIzaSyAIYCyk2KaSfTyX67jJuNKYo-AZAtwwZ-U",E=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];function N(){gapi.client.init({apiKey:S,clientId:"541857836176-ooorj15vavsg5e0h0c98jodmp5lt39js.apps.googleusercontent.com",discoveryDocs:E,scope:"https://www.googleapis.com/auth/drive"}).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(L),L(gapi.auth2.getAuthInstance().isSignedIn.get()),j.onclick=O,I.onclick=z}),(function(t){B(JSON.stringify(t,null,2))}))}function L(t){t?(j.style.display="none",I.style.display="block",gapi.client.drive.files.list({pageSize:10,fields:"nextPageToken, files(id, name)"}).then((function(t){B("Files:");var n=t.result.files;if(n&&n.length>0)for(var e=0;e<n.length;e++){var o=n[e];B(o.name+" ("+o.id+")"),"notes.json"==o.name&&(D=o.id)}else B("No files found.")}))):(j.style.display="block",I.style.display="none")}function O(t){gapi.auth2.getAuthInstance().signIn()}function z(t){gapi.auth2.getAuthInstance().signOut()}function B(t){var n=document.getElementById("content"),e=document.createTextNode(t+"\n");n.appendChild(e)}let D;let J=()=>{let t='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',n=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify({starting:"text"})}\n--uploadboundary--\n    `;fetch(`https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&api=${S}&fields=id`,{method:"POST",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(t+n).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:t+n}).then(t=>t.json()).then(t=>console.log(t))},P=()=>fetch(`https://www.googleapis.com/drive/v3/files/${D}/?key=${S}&alt=media`,{}),H=t=>{D?(console.log("updating"),(t=>{let n='--uploadboundary\nContent-Disposition:form-data;name="metadata";filename="first"\nContent-Type: application/json; charset=UTF-8\n\n{"name":"notes.json","mimeType":"application/json"}\n',e=`--uploadboundary\nContent-Disposition:form-data;name="file";filename="blob"\nContent-Type: application/json\n\n${JSON.stringify(t)}\n--uploadboundary--`;fetch(`https://www.googleapis.com/upload/drive/v3/files/${D}/?uploadType=multipart&key=${S}&fields=id`,{method:"PATCH",headers:{"Content-type":"multipart/related; boundary=uploadboundary","Content-Length":(n+e).length,Authorization:"Bearer "+gapi.auth.getToken().access_token},body:n+e}).then(t=>t.json()).then(t=>console.log(t))})(t)):(console.log("creating anew"),J())};function M(n){let e,a,i,p,f,h,m,g,y,b,v,w,$,x,C,k,T,A,_;return{c(){e=l("div"),a=l("p"),a.textContent="Drive API Quickstart",i=s(),p=l("button"),p.textContent="creatfile",f=s(),h=l("button"),h.textContent="makenew",m=s(),g=l("button"),g.textContent="getfile",y=s(),b=l("button"),b.textContent="Authorize",v=s(),w=l("button"),w.textContent="Sign Out",$=s(),x=l("pre"),C=s(),k=l("div"),k.innerHTML='<canvas id="the-canvas"></canvas>',T=s(),A=l("canvas"),u(b,"id","authorize_button"),d(b,"display","none"),u(w,"id","signout_button"),d(w,"display","none"),u(x,"id","content"),d(x,"white-space","pre-wrap"),u(k,"id","pdfcontainer"),u(A,"id","canvas")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),r(e,a),r(e,i),r(e,p),r(e,f),r(e,h),r(e,m),r(e,g),r(e,y),r(e,b),r(e,v),r(e,w),r(e,$),r(e,x),r(e,C),r(e,k),r(e,T),r(e,A),_=[c(p,"click",H),c(h,"click",J),c(g,"click",P)]},p:t,i:t,o:t,d(t){var n;t&&(n=e).parentNode.removeChild(n),o(_)}}}console.log("1/4 --2");class F{constructor(){let t=document.createElement("textarea");P().then(t=>t.json()).then(n=>{JSON.parse(n).map(n=>{t.value+=n.value})}).then(()=>{document.body.append(t)})}}class K{constructor(){this.btn=document.createElement("button"),document.body.prepend(this.btn),this.btn.addEventListener("click",()=>{this.load()}),this.btn.id="reload",this.btn.innerHTML="Load prev data"}load(){new F}}class U{constructor(){this.btn=document.createElement("button"),this.btn.innerHTML="Download",this.btn.id="download",this.btn.addEventListener("click",()=>{let t=this.retrieveInfo();H(JSON.stringify(t))}),document.body.prepend(this.btn)}retrieveInfo(){return Array(...document.querySelectorAll("textarea")).map(t=>({value:t.value}))}}const q=new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),_(this,t,null,M,i,{})}}({target:document.body,props:{name:"world"}});return window.onload=()=>{j=document.getElementById("authorize_button"),I=document.getElementById("signout_button"),gapi.load("client:auth2",N),new U,new K,new loadAllBtn},q}();
//# sourceMappingURL=bundle.js.map
