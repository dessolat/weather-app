(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),s=a.n(r),o=(a(12),a(5)),i=a.n(o),d=a(2),l=a(7),u=a(3),j=a(0),b=function(e){var t=e.getWeather,a=e.handleInput,n=e.input;return Object(j.jsx)("form",{className:"input-form",onSubmit:function(e){return t(e,!1)},children:Object(j.jsx)("input",{type:"text",className:"input-field",placeholder:"Enter city name...",value:n,onChange:a})})},h=function(e){var t=e.weatherData,a=e.DAYS,n=e.MONTHS,c=t.date,r=t.sys,s=t.name,o=t.weather,i=t.main;return Object(j.jsxs)("div",{className:"today",children:[Object(j.jsxs)("div",{className:"today__header",children:[Object(j.jsx)("span",{className:"today__header-title",children:"".concat(n[c.getMonth()],", ").concat(c.getDate())}),Object(j.jsxs)("span",{className:"today__header-today today__header-title",children:["".concat(s)," ",Object(j.jsx)("sup",{children:"".concat(r.country)})]}),Object(j.jsx)("span",{className:"today__header-title",children:a[c.getDay()]})]}),Object(j.jsxs)("div",{className:"today__body",children:[Object(j.jsx)("img",{className:"today__body-image",src:"http://openweathermap.org/img/wn/".concat(o[0].icon,"@2x.png"),alt:""}),Object(j.jsxs)("div",{className:"today__body-temps",children:[Object(j.jsx)("div",{className:"today__body-temp",children:"".concat(Math.round(i.temp),"\xb0C")}),Object(j.jsx)("div",{className:"today__body-feeltemp",children:"Feels like ".concat(Math.round(i.feels_like),"\xb0C")})]}),Object(j.jsx)("span",{className:"today__body-conditions",children:"".concat(o[0].main)})]})]})},p=function(e){var t=e.dayData,a=e.DAYS,n=t.dt,c=t.weather,r=new Date(1e3*n);return Object(j.jsxs)("div",{className:"week__day",children:[Object(j.jsxs)("div",{className:"week__day-header",children:[Object(j.jsx)("span",{className:"week__day-date",children:r.getDate()}),Object(j.jsx)("span",{className:"week__day-day",children:a[r.getDay()].slice(0,3)})]}),Object(j.jsxs)("div",{className:"week__day-body",children:[Object(j.jsx)("img",{className:"week__day-image",src:"http://openweathermap.org/img/wn/".concat(c[0].icon,"@2x.png"),alt:""}),Object(j.jsx)("span",{className:"week__day-temp",children:"".concat(Math.round(t.temp.day),"\xb0C")})]})]})},m=function(e){var t=e.weekData,a=e.DAYS;return Object(j.jsx)("div",{className:"week",children:t.daily.map((function(e){return Object(j.jsx)(p,{dayData:e,DAYS:a,timezone:t.timezone_offset},e.dt)}))})},O=(a(15),["January","February","March","April","May","June","July","August","September","October","November","December"]),y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var x=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({lat:null,long:null}),s=Object(u.a)(r,2),o=s[0],p=s[1],x=Object(n.useState)({now:null,week:null}),w=Object(u.a)(x,2),f=w[0],_=w[1],g=Object(n.useState)({now:null,week:null}),k=Object(u.a)(g,2),v=k[0],N=k[1];Object(n.useEffect)((function(){D()}),[]),Object(n.useEffect)((function(){var e=o.lat,t=o.long;null!==e&&null!==t&&S(null,!0)}),[o]);var D=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;p({lat:a,long:n})}),(function(e){throw e}))},S=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var c,r,s,l,u,j,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),c="529c3904f06a70b46ab233d16d1f4eb5",r="https://api.openweathermap.org/data/2.5/weather",!n){e.next=9;break}return e.next=6,fetch("".concat(r,"?lat=").concat(o.lat,"&lon=").concat(o.long,"&appid=").concat(c,"&units=metric"));case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,fetch("".concat(r,"?q=").concat(a,"&appid=").concat(c,"&units=metric"));case 11:e.t0=e.sent;case 12:if(!(s=e.t0).ok){e.next=34;break}return e.next=16,s.json();case 16:return l=e.sent,u=l.coord,j=u.lon,b=u.lat,h=new Date(1e3*l.dt),n?_(Object(d.a)(Object(d.a)({},l),{},{date:h})):N(Object(d.a)(Object(d.a)({},l),{},{date:h})),"https://api.openweathermap.org/data/2.5/onecall",e.next=23,fetch("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(b,"&lon=").concat(j,"&exclude=minutely,alerts&appid=").concat(c,"&units=metric"));case 23:if(!(s=e.sent).ok){e.next=31;break}return e.next=27,s.json();case 27:l=e.sent,n?_((function(e){return Object(d.a)(Object(d.a)({},e),{},{week:l})})):N((function(e){return Object(d.a)(Object(d.a)({},e),{},{week:l})})),e.next=32;break;case 31:throw s;case 32:e.next=35;break;case 34:throw s;case 35:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(b,{getWeather:S,handleInput:function(e){return c(e.target.value)},input:a}),v.week&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{weatherData:v,DAYS:y,MONTHS:O}),Object(j.jsx)(m,{weekData:v.week,DAYS:y})]}),f.week&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Your location"}),Object(j.jsx)(h,{weatherData:f,DAYS:y,MONTHS:O}),Object(j.jsx)(m,{weekData:f.week,DAYS:y})]})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d07e204.chunk.js.map