"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="Testnet",l={unversionedId:"node/testnet/README",id:"node/testnet/README",title:"Testnet",description:"These are the current parameters for the Testnet, a test-only network for",source:"@site/docs/node/testnet/README.md",sourceDirName:"node/testnet",slug:"/node/testnet/",permalink:"/node/testnet/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/testnet/README.md",tags:[],version:"current",lastUpdatedAt:1665135874,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Upgrade Log",permalink:"/node/mainnet/upgrade-log"},next:{title:"Upgrade Log",permalink:"/node/testnet/upgrade-log"}},s={},p=[{value:"ParaTimes",id:"paratimes",level:2},{value:"Cipher ParaTime",id:"cipher-paratime",level:3},{value:"Emerald ParaTime",id:"emerald-paratime",level:3},{value:"Sapphire ParaTime",id:"sapphire-paratime",level:3},{value:"Key Manager ParaTime",id:"key-manager-paratime",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"testnet"},"Testnet"),(0,n.kt)("p",null,"These are the current parameters for the Testnet, a test-only network for\ntesting out upcoming features and changes to the protocol."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"The Testnet may be subject to frequent version upgrades and state resets."))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"On the Testnet, TEST tokens are in use -- if you need some to test your clients, nodes or paratimes, feel free to use our ",(0,n.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev"},"Testnet Faucet"),". Note that these are test-only tokens and account balances, as any other state, may be frequently reset.")),(0,n.kt)("p",null,"This page is meant to be kept up to date with the information from the currently released Testnet. Use the information here to deploy or upgrade your node on the Testnet."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latest Testnet version: ",(0,n.kt)("strong",{parentName:"li"},"2022-03-03")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/testnet-artifacts/releases/download/2022-03-03/genesis.json"},"Genesis file"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SHA256: ",(0,n.kt)("inlineCode",{parentName:"li"},"4c3d271253d2a324816de3b9a048261b674471e7d4f9a02995a769489bd41984")))),(0,n.kt)("li",{parentName:"ul"},"Genesis document's hash (",(0,n.kt)("a",{parentName:"li",href:"/node/genesis-doc#genesis-file-vs-genesis-document"},"explanation"),"):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"50304f98ddb656620ea817cc1446c401752a05a249b36c9b90dba4616829977a")))),(0,n.kt)("li",{parentName:"ul"},"Oasis seed node address:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"05EAC99BB37F6DAAD4B13386FF5E087ACBDDC450@34.86.165.6:26656"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to use other seed nodes besides the one provided here.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core"},"Oasis Core")," version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.1.11"},"22.1.11")),(0,n.kt)("li",{parentName:"ul"},"To sync from genesis, you need to start with an earlier version first\n(",(0,n.kt)("a",{parentName:"li",href:"/node/run-your-node/maintenance/handling-network-upgrades"},"read more"),"):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.0.3"},"22.0.3")," (until epoch ",(0,n.kt)("strong",{parentName:"li"},"15056"),")"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-rosetta-gateway"},"Oasis Rosetta Gateway")," version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-rosetta-gateway/releases/tag/v2.2.1"},"2.2.1"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Oasis Node is part of the Oasis Core release.")),(0,n.kt)("h2",{id:"paratimes"},"ParaTimes"),(0,n.kt)("p",null,"This section contains parameters for various ParaTimes known to be deployed on the Testnet. Similar to the Testnet, these may be subject to frequent version upgrades and/or state resets."),(0,n.kt)("h3",{id:"cipher-paratime"},"Cipher ParaTime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Oasis Core version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.1.11"},"22.1.11")))),(0,n.kt)("li",{parentName:"ul"},"Runtime identifier:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0000000000000000000000000000000000000000000000000000000000000000")))),(0,n.kt)("li",{parentName:"ul"},"Runtime binary version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/cipher-paratime/releases/tag/v2.5.0-testnet"},"2.5.0-testnet")))),(0,n.kt)("li",{parentName:"ul"},"IAS proxy address:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y4XO1ZETqgtHeZzLLmJLYAzpEfdGSJLvtd8bhIz+v3s=@34.86.197.181:8650"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to use other IAS proxies besides the one provided here or ",(0,n.kt)("a",{parentName:"p",href:"/node/run-your-node/ias-proxy"},"run your own"),".")),(0,n.kt)("h3",{id:"emerald-paratime"},"Emerald ParaTime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Oasis Core version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.1.11"},"22.1.11")))),(0,n.kt)("li",{parentName:"ul"},"Runtime identifier:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"00000000000000000000000000000000000000000000000072c8215e60d5bca7")))),(0,n.kt)("li",{parentName:"ul"},"Runtime binary version (or ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/emerald-paratime/tree/v9.0.1-testnet#building"},"build your own"),"):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/emerald-paratime/releases/tag/v9.0.1-testnet"},"9.0.1-testnet")))),(0,n.kt)("li",{parentName:"ul"},"Emerald Web3 Gateway version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/emerald-web3-gateway/releases/tag/v3.1.0-rc1"},"3.1.0-rc1"))))),(0,n.kt)("h3",{id:"sapphire-paratime"},"Sapphire ParaTime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Oasis Core version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.1.11"},"22.1.11")))),(0,n.kt)("li",{parentName:"ul"},"Runtime identifier:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c")))),(0,n.kt)("li",{parentName:"ul"},"Runtime binary version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/sapphire-paratime/releases/tag/v0.1.4-testnet"},"0.1.4-testnet")))),(0,n.kt)("li",{parentName:"ul"},"Web3 Gateway version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/emerald-web3-gateway/releases/tag/v3.1.0-rc1"},"3.1.0-rc1")))),(0,n.kt)("li",{parentName:"ul"},"IAS proxy address:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y4XO1ZETqgtHeZzLLmJLYAzpEfdGSJLvtd8bhIz+v3s=@34.86.197.181:8650"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to use other IAS proxies besides the one provided here or ",(0,n.kt)("a",{parentName:"p",href:"/node/run-your-node/ias-proxy"},"run your own"),".")),(0,n.kt)("h3",{id:"key-manager-paratime"},"Key Manager ParaTime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Oasis Core version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v22.1.11"},"22.1.11")))),(0,n.kt)("li",{parentName:"ul"},"Runtime identifier:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"4000000000000000000000000000000000000000000000004a1a53dff2ae482d")))),(0,n.kt)("li",{parentName:"ul"},"Runtime binary version:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/keymanager-paratime/releases/tag/v0.2.0-testnet"},"0.2.0-testnet")))),(0,n.kt)("li",{parentName:"ul"},"IAS proxy address:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y4XO1ZETqgtHeZzLLmJLYAzpEfdGSJLvtd8bhIz+v3s=@34.86.197.181:8650"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to use other IAS proxies besides the one provided here or ",(0,n.kt)("a",{parentName:"p",href:"/node/run-your-node/ias-proxy"},"run your own"),".")))}u.isMDXComponent=!0}}]);