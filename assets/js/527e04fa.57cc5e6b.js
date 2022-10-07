"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={},s="Runtime IDs",a={unversionedId:"core/runtime/identifiers",id:"core/runtime/identifiers",title:"Runtime IDs",description:"Identifiers for runtimes are represented by the [common.Namespace] type.",source:"@site/docs/core/runtime/identifiers.md",sourceDirName:"core/runtime",slug:"/core/runtime/identifiers",permalink:"/core/runtime/identifiers",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/master/docs/runtime/identifiers.md",tags:[],version:"current",lastUpdatedAt:1663139599,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Runtime Host Protocol",permalink:"/core/runtime/runtime-host-protocol"},next:{title:"Runtime Messages",permalink:"/core/runtime/messages"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runtime-ids"},"Runtime IDs"),(0,i.kt)("p",null,"Identifiers for runtimes are represented by the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common?tab=doc#Namespace"},(0,i.kt)("inlineCode",{parentName:"a"},"common.Namespace"))," type."),(0,i.kt)("p",null,"The first 64 bits are reserved for specifying flags expressing various\nproperties of the runtime, and the last 192 bits are used as the runtime\nidentifier."),(0,i.kt)("p",null,"Currently the following flags are defined (bit positions assume the flags\nvector is interpreted as an unsigned 64 bit big endian integer):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bit 63: The runtime is a test runtime and not for production networks."),(0,i.kt)("li",{parentName:"ul"},"Bit 62: The runtime is a key manager runtime."),(0,i.kt)("li",{parentName:"ul"},"Bits 61-0: Reserved for future expansion and MUST be set to 0.")),(0,i.kt)("p",null,"Note: Unless the registry consensus parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"DebugAllowTestRuntimes")," is\nset, attempts to register a test runtime will be rejected."))}l.isMDXComponent=!0}}]);