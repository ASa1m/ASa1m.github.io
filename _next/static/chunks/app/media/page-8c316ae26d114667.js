(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{7893:function(e,t,n){Promise.resolve().then(n.bind(n,7709)),Promise.resolve().then(n.bind(n,984)),Promise.resolve().then(n.bind(n,3435)),Promise.resolve().then(n.bind(n,4919)),Promise.resolve().then(n.t.bind(n,413,23)),Promise.resolve().then(n.t.bind(n,8326,23))},7709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),s=n(2265),o=n(1396),i=n.n(o);let l=[{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"Media",path:"/media"},{title:"Contact",path:"/contact"}];var a=n(984);function c(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>function(){document.body.style.overflow=""},[]),(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{className:"w-full justify-between flex items-center ".concat(e&&"bg-bg"," p-5"),style:{zIndex:101},children:[(0,r.jsx)("li",{className:"list-none font-bold text-lg",children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsxs)("span",{className:"font-black text-xl flex items-center",children:[(0,r.jsx)("img",{alt:"Abdullah Saim",className:"mr-3",src:"/static/logos/logo_no_text.png",width:"60"}),"Abdullah".split("").map((e,t)=>(0,r.jsx)("span",{className:"hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim",children:e},t)),(0,r.jsx)("span",{className:"text-fun-pink",children:"\xa0"}),"Saim".split("").map((e,t)=>(0,r.jsx)("span",{className:"hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim",children:e},t))]})})}),(0,r.jsxs)("button",{className:"burger visible md:hidden","aria-label":"Toggle menu",type:"button",onClick:function(){e?(t(!1),document.body.style.overflow=""):(t(!0),document.body.style.overflow="hidden")},children:[(0,r.jsx)(d,{"data-hide":e}),(0,r.jsx)(u,{"data-hide":!e})]})]}),e&&(0,r.jsxs)("ul",{className:"menu flex flex-col absolute bg-bg\n            ".concat(e&&"menuRendered"),children:[l.map((e,t)=>(0,r.jsx)("li",{className:"border-b border-gray-900 text-gray-100 text-sm font-semibold",style:{transitionDelay:"".concat(150+25*t,"ms")},children:(0,r.jsx)(i(),{href:e.path,children:(0,r.jsx)("p",{className:"flex w-auto pb-4",children:e.title})})},e.title)),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{})})]})]})}function d(e){return(0,r.jsxs)("svg",{className:"h-5 w-5 absolute text-gray-100",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e,children:[(0,r.jsx)("path",{d:"M2.5 7.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M2.5 12.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function u(e){return(0,r.jsxs)("svg",{className:"h-5 w-5 absolute text-gray-100",viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",...e,children:[(0,r.jsx)("path",{d:"M18 6L6 18"}),(0,r.jsx)("path",{d:"M6 6l12 12"})]})}},984:function(e,t,n){"use strict";n.r(t);var r=n(7437),s=n(1396),o=n.n(s),i=n(2265),l=n(6691),a=n.n(l),c=n(1758);t.default=()=>{let[e,t]=(0,i.useState)(!1);return(0,r.jsxs)("div",{"data-tooltip-id":"my-tooltip-1",className:"cursor-pointer flex justify-center flex-row list-none text-fun-pink-dark hover:text-white opacity-80 hover:opacity-100 transition-opacity bg-fun-pink hover:bg-fun-pink-dark px-4 py-2 rounded-full",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,r.jsx)(o(),{href:"/static/Resume.pdf",children:"Resume"}),(0,r.jsx)(a(),{src:"/static/misc/download.svg",alt:"Download",width:20,height:20,className:"ml-2 ".concat(e?"invert":"")}),(0,r.jsx)(c.u,{id:"my-tooltip-1",content:"Download my resume",place:"bottom"})]})}},3435:function(e,t,n){"use strict";n.r(t);var r=n(7437),s=n(2265),o=n(7381),i=n(6691),l=n.n(i);t.default=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>t(window.scrollY>100);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsx)("div",{className:"fixed bottom-4 right-4 rounded-full p-2 text-white bg-fun-pink hover:bg-fun-pink-dark focus:outline-none ".concat(e?"block":"hidden"," cursor-pointer"),onClick:()=>{o.NY.scrollToTop()},children:(0,r.jsx)(l(),{src:"/static/misc/up.svg",alt:"Scroll Up",className:"w-5 h-5 hover:invert",width:5,height:5})})}},4919:function(e,t,n){"use strict";n.r(t);var r=n(7437);n(2265);var s=n(5522);t.default=function(e){let{media:t}=e;return(0,r.jsx)("div",{className:"max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center",children:(0,r.jsxs)("a",{href:t.link||t.github,target:"_blank",className:"w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard",children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:["facebook"===t.type&&(0,r.jsx)(s.FacebookEmbed,{url:t.link,width:"100%",placeholderImageUrl:"/static/misc/placeholder.webp"}),"instagram"===t.type&&(0,r.jsx)(s.InstagramEmbed,{url:t.link,width:"100%",placeholderImageUrl:"/static/misc/placeholder.webp"})]}),(0,r.jsx)("div",{className:"projects-center center",children:(0,r.jsx)("h3",{className:"text-lg font-bold center",children:t.title})})]})},t.id)}}},function(e){e.O(0,[176,440,522,971,472,744],function(){return e(e.s=7893)}),_N_E=e.O()}]);