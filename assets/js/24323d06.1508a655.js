"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={},a="Authenticated gRPC",s={unversionedId:"core/authenticated-grpc",id:"core/authenticated-grpc",title:"Authenticated gRPC",description:"Oasis Core nodes communicate between themselves over various protocols. One of",source:"@site/docs/core/authenticated-grpc.md",sourceDirName:"core",slug:"/core/authenticated-grpc",permalink:"/core/authenticated-grpc",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/master/docs/authenticated-grpc.md",tags:[],version:"current",lastUpdatedAt:1663139599,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Cryptography",permalink:"/core/crypto"},next:{title:"Merklized Key-Value Store (MKVS)",permalink:"/core/mkvs"}},c={},l=[{value:"TLS",id:"tls",level:2},{value:"gRPC",id:"grpc",level:2},{value:"CBOR Codec",id:"cbor-codec",level:3},{value:"Errors",id:"errors",level:3},{value:"Service Naming Convention",id:"service-naming-convention",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authenticated-grpc"},"Authenticated gRPC"),(0,n.kt)("p",null,"Oasis Core nodes communicate between themselves over various protocols. One of\nthose protocols is ",(0,n.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC")," which is currently used for the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compute nodes talking to storage nodes."),(0,n.kt)("li",{parentName:"ul"},"Compute nodes talking to key manager nodes."),(0,n.kt)("li",{parentName:"ul"},"Key manager nodes talking to other key manager nodes."),(0,n.kt)("li",{parentName:"ul"},"Clients talking to compute nodes."),(0,n.kt)("li",{parentName:"ul"},"Clients talking to key manager nodes.")),(0,n.kt)("p",null,"All these communications can have access control policies attached specifying\nwho is allowed to perform certain actions at which point in time. This first\nrequires an authentication mechanism."),(0,n.kt)("h2",{id:"tls"},"TLS"),(0,n.kt)("p",null,"In order to authenticate both ends of a connection, gRPC is always used together\nwith TLS. However, since this is a decentralized network, there are some\nspecifics on how peer verification is performed when establishing a TLS session\nbetween two nodes."),(0,n.kt)("p",null,"Instead of relying on Certificate Authorities, we use the ",(0,n.kt)("a",{parentName:"p",href:"/core/consensus/services/registry"},"registry service"),"\nprovided by the ",(0,n.kt)("a",{parentName:"p",href:"/core/consensus/"},"consensus layer"),". Each node publishes its own trusted public\nkeys in the registry as part of its ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/node?tab=doc#Node"},"signed node descriptor"),". TLS sessions use\nits own ephemeral ",(0,n.kt)("a",{parentName:"p",href:"/core/crypto"},"Ed25519 key pair")," that is used to (self-)sign a node's X509\ncertificate. When verifying peer identities the public key on the certificate is\ncompared with the public key(s) published in the registry."),(0,n.kt)("p",null,"All TLS keys are ephemeral and nodes are encouraged to frequently rotate them\n(the Oasis Core implementation in this repository supports this automatically)."),(0,n.kt)("p",null,"For details on how certificate verification is performed see\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/common/crypto/tls/verify.go"},"the ",(0,n.kt)("inlineCode",{parentName:"a"},"VerifyCertificate")," implementation")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/common/crypto/tls"},(0,n.kt)("inlineCode",{parentName:"a"},"go/common/crypto/tls")),"."),(0,n.kt)("h2",{id:"grpc"},"gRPC"),(0,n.kt)("p",null,"Oasis Core uses some specific conventions that depart from the most common gRPC\nsetups and are described in the following sections."),(0,n.kt)("h3",{id:"cbor-codec"},"CBOR Codec"),(0,n.kt)("p",null,"While gRPC is most commonly used with the Protocol Buffers codec the gRPC\nprotocol is agnostic to the actual underlying serialization format. Oasis Core\nuses ",(0,n.kt)("a",{parentName:"p",href:"/core/encoding"},"CBOR")," for encoding of all messages used in our gRPC services."),(0,n.kt)("p",null,"This requires that the codec is explicitly configured while setting up\nconnections. Our ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/grpc?tab=doc"},"gRPC helpers")," automatically configure the correct codec so\nusing it should be transparent. The only quirk of this setup is that service\ncodegen is not available with arbitrary codecs, so glue code for both the server\nand the client needs to be generated manually (for examples see the ",(0,n.kt)("inlineCode",{parentName:"p"},"grpc.go"),"\nfiles in various ",(0,n.kt)("inlineCode",{parentName:"p"},"api")," packages)."),(0,n.kt)("h3",{id:"errors"},"Errors"),(0,n.kt)("p",null,"As gRPC provides very limited error reporting capability in the form of a few\ndefined error codes, we extend this mechanism to support proper error remapping."),(0,n.kt)("p",null,"Detailed errors are returned as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/google.golang.org/genproto/googleapis/rpc/status?tab=doc#Status"},"gRPC error details structure"),". The\n",(0,n.kt)("inlineCode",{parentName:"p"},"Value")," field of the first detail element contains the following CBOR-serialized\nstructure that specifies the (namespaced) error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'type grpcError struct {\n    Module string `json:"module,omitempty"`\n    Code   uint32 `json:"code,omitempty"`\n}\n')),(0,n.kt)("p",null,"If you use the provided ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/grpc?tab=doc"},"gRPC helpers")," any errors will be mapped to registered\nerror types automatically."),(0,n.kt)("h3",{id:"service-naming-convention"},"Service Naming Convention"),(0,n.kt)("p",null,"We use the same service method namespacing convention as gRPC over Protocol\nBuffers. All Oasis Core services have unique identifiers starting with\n",(0,n.kt)("inlineCode",{parentName:"p"},"oasis-core.")," followed by the service identifier. A single slash (",(0,n.kt)("inlineCode",{parentName:"p"},"/"),") is used\nas the separator in method names, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"/oasis-core.Storage/SyncGet"),"."))}d.isMDXComponent=!0}}]);