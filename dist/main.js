var Client;(()=>{"use strict";var e={626:(e,t,n)=>{e.exports=n.p+"b223c19e091760272755.png"},280:(e,t,n)=>{e.exports=n.p+"37b67520aec3d1d746fe.png"}},t={};function n(r){var d=t[r];if(void 0!==d)return d.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var r={};(()=>{n.r(r),n.d(r,{createCardUI:()=>o,populateData:()=>a,processInput:()=>d});const e=document.getElementById("entry-container"),t=document.getElementById("entry-placeholder");document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("submit-button").addEventListener("click",d)}));const d=e=>{e.preventDefault();let t=document.getElementById("city").value,n=document.getElementById("date-start").value,r=document.getElementById("date-end").value;""===t||""===n||""===r?alert("Please enter city, departure date, and return date."):fetch("http://localhost:8081/process",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:t,startDate:n,endDate:r})}).then((e=>e.json())).then((e=>{a(e)}))},a=e=>{1==document.contains(t)?(t.style.display="none",o(e)):0==document.contains(t)&&o(e)},o=t=>{let n=document.createElement("div");n.classList.add("entry-card"),e.appendChild(n);let r=document.createElement("div");r.classList.add("data-container"),n.appendChild(r);let d=document.createElement("div");r.appendChild(d);let a=document.createElement("div");a.classList.add("trip-data"),r.appendChild(a);let o=document.createElement("img"),i=document.createElement("h3");i.classList.add("returned-data");let c=document.createElement("div");c.classList.add("returned-data");let s=document.createElement("div");s.classList.add("returned-data");let l=document.createElement("div");l.classList.add("returned-data");let p=document.createElement("div");p.classList.add("returned-data");let u=document.createElement("div");u.classList.add("returned-data");let m=document.createElement("div");o.src=`${t.cityPhoto}`,i.innerHTML=`<strong>${t.city}</strong>`,s.innerHTML=`This trip is <strong>${t.countdownDays} day(s)</strong> away!`,l.innerHTML=`Departure Date: <strong>${t.startDate}</strong>`,p.innerHTML=`Return Date: <strong>${document.getElementById("date-end").value}</strong>`,u.innerHTML=`Trip Length: <strong>${t.tripLengthDays} day(s)</strong>`,c.innerHTML=`Temperature: <strong>${t.temp}°F</strong>`,m.innerHTML="Remove",m.id="remove-trip",o.classList.add("entry-img"),d.appendChild(o),a.appendChild(i),a.appendChild(s),a.appendChild(l),a.appendChild(p),a.appendChild(u),a.appendChild(c),n.appendChild(m),m.addEventListener("click",(()=>{n.remove()}))};n(626),n(280)})(),Client=r})();