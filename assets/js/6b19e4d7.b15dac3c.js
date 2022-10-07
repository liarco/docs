"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1564:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7294),n=r(6010),i=r(9960),o=r(3438),s=r(3919),l=r(5999);const p="cardContainer_fWXF",c="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return a.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",p)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",c),title:i},r," ",i),o&&a.createElement("p",{className:(0,n.Z)("text--truncate",d),title:o},o))}function h(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010),i=r(3438),o=r(1564);function s(e){let{className:t}=e;const r=(0,i.jA)();return a.createElement(l,{items:r.items,className:t})}function l(e){const{items:t,className:r}=e;if(!t)return a.createElement(s,e);const l=(0,i.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(o.Z,{item:e})))))}},7525:(e,t,r)=>{r.d(t,{n:()=>i});var a=r(4477);function n(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&n(t.items)}}function i(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)n(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},7197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),i=r(9268),o=r(7525);const s={},l="Sapphire ParaTime",p={unversionedId:"dapp/sapphire/README",id:"dapp/sapphire/README",title:"Sapphire ParaTime",description:"The Sapphire ParaTime is our official confidential EVM Compatible ParaTime",source:"@site/docs/dapp/sapphire/README.mdx",sourceDirName:"dapp/sapphire",slug:"/dapp/sapphire/",permalink:"/dapp/sapphire/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/sapphire/README.mdx",tags:[],version:"current",lastUpdatedAt:1665135874,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{},sidebar:"developers",previous:{title:"Integrating BAND oracle smart contract",permalink:"/dapp/emerald/integrating-band-oracle-smart-contract"},next:{title:"Quickstart",permalink:"/dapp/sapphire/quickstart"}},c={},d=[{value:"Web3 Gateway",id:"web3-gateway",level:2},{value:"Testnet",id:"testnet",level:3},{value:"See also",id:"see-also",level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sapphire-paratime"},"Sapphire ParaTime"),(0,n.kt)("p",null,"The Sapphire ParaTime is our official confidential EVM Compatible ParaTime\nproviding a smart contract development environment with EVM compatibility."),(0,n.kt)("p",null,"As the official confidential EVM-compatible ParaTime on the Oasis Network,\nSapphire allows for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Confidential state, end-to-end encryption, confidential randomness"),(0,n.kt)("li",{parentName:"ul"},"EVM compatibility"),(0,n.kt)("li",{parentName:"ul"},"Easy integration with EVM-based dApps, such as DeFi, NFT, Metaverse and\ncrypto gaming"),(0,n.kt)("li",{parentName:"ul"},"Scalability \u2014 increased throughput of transactions"),(0,n.kt)("li",{parentName:"ul"},"Low-cost \u2014 99%+ lower fees than Ethereum"),(0,n.kt)("li",{parentName:"ul"},"Cross-chain bridge to enable cross-chain interoperability (upcoming)")),(0,n.kt)("p",null,"If you are not bound to EVM and you wish to develop dApps with more\nfine-grained confidentiality, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/dapp/cipher/"},"Cipher ParaTime"),"."),(0,n.kt)("h2",{id:"web3-gateway"},"Web3 Gateway"),(0,n.kt)("p",null,"To get started building on our Sapphire ParaTime, you can use our public Web3\ngateway, fully compatible with Ethereum's Web3 gateway."),(0,n.kt)("h3",{id:"testnet"},"Testnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RPC HTTP endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://testnet.sapphire.oasis.dev")),(0,n.kt)("li",{parentName:"ul"},"RPC WebSockets endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"wss://testnet.sapphire.oasis.dev/ws")),(0,n.kt)("li",{parentName:"ul"},"Chain ID:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hex: 0x5aff"),(0,n.kt)("li",{parentName:"ul"},"Decimal: 23295"))),(0,n.kt)("li",{parentName:"ul"},"Block explorer: ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.explorer.sapphire.oasis.dev"},"https://testnet.explorer.sapphire.oasis.dev"))),(0,n.kt)("button",{class:"button button--primary margin-bottom--md",onClick:()=>window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x5aff",chainName:"Sapphire ParaTime Testnet",nativeCurrency:{name:"TEST",symbol:"TEST",decimals:18},rpcUrls:["https://testnet.sapphire.oasis.dev/","wss://testnet.sapphire.oasis.dev/ws"],blockExplorerUrls:["https://testnet.explorer.sapphire.oasis.dev"]}]})},"Click here to register Sapphire Testnet to your MetaMask or Brave Wallet"),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)(i.Z,{items:[(0,o.n)("/general/manage-tokens/how-to-transfer-rose-into-paratime"),(0,o.n)("/dapp/emerald/"),(0,o.n)("/dapp/cipher/")],mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);