"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),a=n(6010),o=n(9960),i=n(3438),s=n(3919),l=n(5999);const c="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010),o=n(3438),i=n(1564);function s(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(l,{items:n.items,className:t})}function l(e){const{items:t,className:n}=e;if(!t)return r.createElement(s,e);const l=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(i.Z,{item:e})))))}},7525:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(4477);function a(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&a(t.items)}}function o(e){const t=(0,r.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)a(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},2375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(9268),i=n(7525);const s={},l="Overview",c={unversionedId:"general/manage-tokens/README",id:"general/manage-tokens/README",title:"Overview",description:"This documentation will guide you on how to use your ROSE tokens, where to keep them, how to transfer them, how to stake/delegate them, and more.",source:"@site/docs/general/manage-tokens/README.mdx",sourceDirName:"general/manage-tokens",slug:"/general/manage-tokens/",permalink:"/general/manage-tokens/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/README.mdx",tags:[],version:"current",lastUpdatedAt:1665135874,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{},sidebar:"general",previous:{title:"Frequently Asked Questions",permalink:"/general/oasis-network/faq"},next:{title:"Terminology",permalink:"/general/manage-tokens/terminology"}},m={},d=[{value:"Summary",id:"summary",level:2},{value:"Quick Navigation",id:"quick-navigation",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation will guide you on how to use your ROSE tokens, where to keep them, how to transfer them, how to stake/delegate them, and more."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"self-custody"),", we recommend using one of our ",(0,a.kt)("strong",{parentName:"li"},"official")," ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/"},(0,a.kt)("strong",{parentName:"a"},"Oasis Wallets")),", ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/web"},"Web")," or ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/browser-extension"},"Browser Extension"),"."),(0,a.kt)("li",{parentName:"ul"},"ROSE is supported via three ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/holding-rose-tokens/custody-providers"},(0,a.kt)("strong",{parentName:"a"},"custody providers")),": ",(0,a.kt)("a",{parentName:"li",href:"https://copper.co"},"Copper.co"),", ",(0,a.kt)("a",{parentName:"li",href:"https://anchorage.com"},"Anchorage")," and ",(0,a.kt)("a",{parentName:"li",href:"https://finoa.io"},"Finoa"),"."),(0,a.kt)("li",{parentName:"ul"},"If you want a self-custody ",(0,a.kt)("strong",{parentName:"li"},"mobile app"),", we recommend ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/holding-rose-tokens/bitpie-wallet"},"Bitpie Wallet"),"."),(0,a.kt)("li",{parentName:"ul"},"For extra security with self-custody, we recommend using the ",(0,a.kt)("a",{parentName:"li",href:"https://www.ledger.com"},"Ledger")," wallet with one of our official ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/"},"Oasis Wallets"),"."),(0,a.kt)("li",{parentName:"ul"},"For experienced developers/power users, we offer ",(0,a.kt)("a",{parentName:"li",href:"/general/manage-tokens/advanced/oasis-cli-tools/"},"Oasis CLI Tools"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For your own security and peace of mind, please only use wallets that are listed in our official documentation. Any other wallets are likely unofficial and may be subject to critical security vulnerabilities and other technical issues. Using wallets that not listed in our official documentation could result in the permanent loss of your ROSE tokens.")),(0,a.kt)("h2",{id:"quick-navigation"},"Quick Navigation"),(0,a.kt)(o.Z,{items:[(0,i.n)("/general/manage-tokens/terminology"),(0,i.n)("/general/manage-tokens/staking-and-delegating"),(0,i.n)("/general/manage-tokens/oasis-wallets/"),(0,i.n)("/general/manage-tokens/advanced/oasis-cli-tools/"),(0,i.n)("/general/manage-tokens/holding-rose-tokens/custody-providers"),(0,i.n)("/general/manage-tokens/holding-rose-tokens/bitpie-wallet"),(0,i.n)("/general/manage-tokens/holding-rose-tokens/ledger-wallet")],mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);