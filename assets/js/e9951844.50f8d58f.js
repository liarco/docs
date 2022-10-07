"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Cryptography",s={unversionedId:"core/crypto",id:"core/crypto",title:"Cryptography",description:"Hash Functions",source:"@site/docs/core/crypto.md",sourceDirName:"core",slug:"/core/crypto",permalink:"/core/crypto",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/master/docs/crypto.md",tags:[],version:"current",lastUpdatedAt:1663139599,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Encoding",permalink:"/core/encoding"},next:{title:"Authenticated gRPC",permalink:"/core/authenticated-grpc"}},l={},p=[{value:"Hash Functions",id:"hash-functions",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Domain Separation",id:"domain-separation",level:3},{value:"Contexts",id:"contexts",level:4},{value:"Chain Domain Separation",id:"chain-domain-separation",level:4},{value:"Envelopes",id:"envelopes",level:3},{value:"Standard Account Key Generation",id:"standard-account-key-generation",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cryptography"},"Cryptography"),(0,r.kt)("h2",{id:"hash-functions"},"Hash Functions"),(0,r.kt)("p",null,"In most places where cryptographic hashes are required, we use the SHA-512/256\nhash function as specified in ",(0,r.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/publications/detail/fips/180/4/final"},"FIPS 180-4"),"."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("p",null,"All cryptographic signatures are made using the Ed25519 (pure) scheme specified\nin ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8032"},"RFC 8032"),"."),(0,r.kt)("h3",{id:"domain-separation"},"Domain Separation"),(0,r.kt)("p",null,"When signing messages and verifying signatures we require the use of a domain\nseparation context in order to make sure the messages cannot be repurposed in\na different protocol."),(0,r.kt)("p",null,"The domain separation scheme adds a preprocessing step to any signing and\nverification operation. The step computes the value that is then signed/verified\nusing Ed25519 as usual."),(0,r.kt)("p",null,"The message to be signed is computed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"M := H(Context || Message)\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"H")," is the SHA-512/256 cryptographic hash function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Context")," is the domain separation context string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Message")," is the original message.")),(0,r.kt)("p",null,"The Ed25519 signature is then computed over ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE: While using something like Ed25519ph/ctx as specified by ",(0,r.kt)("a",{parentName:"em",href:"https://tools.ietf.org/html/rfc8032"},"RFC 8032")," would\nbe ideal, unfortunately these schemes are not supported in many hardware\nsecurity modules which is why we are using an ad-hoc scheme.")),(0,r.kt)("h4",{id:"contexts"},"Contexts"),(0,r.kt)("p",null,"All of the domain separation contexts used in Oasis Core use the following\nconvention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They start with the string ",(0,r.kt)("inlineCode",{parentName:"li"},"oasis-core/"),","),(0,r.kt)("li",{parentName:"ul"},"followed by the general module name,"),(0,r.kt)("li",{parentName:"ul"},"followed by the string ",(0,r.kt)("inlineCode",{parentName:"li"},": "),","),(0,r.kt)("li",{parentName:"ul"},"followed by a use case description.")),(0,r.kt)("p",null,"The maximum length of a domain separation context is 255 bytes to be compatible\nwith the length defined in ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8032"},"RFC 8032"),"."),(0,r.kt)("p",null,"The Go implementation maintains a registry of all used contexts to make sure\nthey are not reused incorrectly."),(0,r.kt)("h4",{id:"chain-domain-separation"},"Chain Domain Separation"),(0,r.kt)("p",null,"For some signatures, we must ensure that the domain separation context is tied\nto the given network instance as defined by the genesis document. This ensures\nthat such messages cannot be replayed on a different network."),(0,r.kt)("p",null,"For all domain separation contexts where chain domain separation is required,\nwe use the following additional convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The context is as specified by the convention in the section above,"),(0,r.kt)("li",{parentName:"ul"},"followed by the string ",(0,r.kt)("inlineCode",{parentName:"li"},"for chain"),","),(0,r.kt)("li",{parentName:"ul"},"followed by the ",(0,r.kt)("a",{parentName:"li",href:"/core/consensus/genesis#genesis-documents-hash"},"genesis document's hash"),".")),(0,r.kt)("h3",{id:"envelopes"},"Envelopes"),(0,r.kt)("p",null,"There are currently two kinds of envelopes that are used when signing CBOR\nmessages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/crypto/signature?tab=doc#Signed"},"Single signature envelope (",(0,r.kt)("inlineCode",{parentName:"a"},"Signed"),")")," contains the CBOR-serialized blob in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"untrusted_raw_value")," field and a single ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/crypto/signature?tab=doc#MultiSigned"},"Multiple signature envelope (",(0,r.kt)("inlineCode",{parentName:"a"},"MultiSigned"),")")," contains the CBOR-serialized\nblob in the ",(0,r.kt)("inlineCode",{parentName:"p"},"untrusted_raw_value")," field and multiple signatures in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"signatures")," field."))),(0,r.kt)("p",null,"The envelopes are themselves CBOR-encoded. While no separate test vectors are\nprovided, ",(0,r.kt)("a",{parentName:"p",href:"/core/consensus/test-vectors"},"those used for transactions")," can be used as a reference."),(0,r.kt)("h2",{id:"standard-account-key-generation"},"Standard Account Key Generation"),(0,r.kt)("p",null,"When generating an ",(0,r.kt)("a",{parentName:"p",href:"/core/consensus/services/staking#accounts"},"account"),"'s private/public key pair, follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/adrs/blob/master/0008-standard-account-key-generation.md"},"ADR 0008:\nStandard Account Key Generation"),"."))}u.isMDXComponent=!0}}]);