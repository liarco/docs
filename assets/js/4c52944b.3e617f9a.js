"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={description:"How to build your first runtime"},a="Prerequisites",s={unversionedId:"paratime/prerequisites",id:"paratime/prerequisites",title:"Prerequisites",description:"How to build your first runtime",source:"@site/docs/paratime/prerequisites.md",sourceDirName:"paratime",slug:"/paratime/prerequisites",permalink:"/paratime/prerequisites",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/runtime/prerequisites.md",tags:[],version:"current",lastUpdatedAt:1665135874,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{description:"How to build your first runtime"},sidebar:"paratime",previous:{title:"Overview",permalink:"/paratime/"},next:{title:"Minimal Runtime",permalink:"/paratime/minimal-runtime"}},l={},p=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Rust",id:"rust",level:3},{value:"Rust Toolchain Version",id:"rust-toolchain-version",level:4},{value:"(OPTIONAL) Fortanix SGX Rust Target",id:"optional-fortanix-sgx-rust-target",level:4},{value:"(OPTIONAL) Go",id:"optional-go",level:3},{value:"Oasis Core Installation",id:"oasis-core-installation",level:2},{value:"Oasis CLI Installation",id:"oasis-cli-installation",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This section will guide you how to install the software required for developing\na runtime and client using the Oasis SDK. After successfully completing all the\ndescribed steps you will be able to start building your first runtime!"),(0,o.kt)("p",null,"If you already have everything set up, feel free to skip to the ",(0,o.kt)("a",{parentName:"p",href:"/paratime/minimal-runtime"},"next\nsection"),"."),(0,o.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,o.kt)("p",null,"The following is a list of prerequisites required to start developing using the\nOasis SDK:"),(0,o.kt)("h3",{id:"rust"},(0,o.kt)("a",{parentName:"h3",href:"https://www.rust-lang.org/"},"Rust")),(0,o.kt)("p",null,"We follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust upstream's recommendation")," on using\n",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," to install and manage Rust versions."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"rustup cannot be installed alongside a distribution packaged Rust version. You\nwill need to remove it (if it's present) before you can start using rustup.")),(0,o.kt)("p",null,"Install it by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want to avoid directly executing a shell script fetched the\ninternet, you can also ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/other.html"},"download ",(0,o.kt)("inlineCode",{parentName:"a"},"rustup-init")," executable for your platform"),"\nand run it manually.")),(0,o.kt)("p",null,"This will run ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup-init")," which will download and install the latest stable\nversion of Rust on your system."),(0,o.kt)("h4",{id:"rust-toolchain-version"},"Rust Toolchain Version"),(0,o.kt)("p",null,"The version of the Rust toolchain we use in the Oasis SDK is specified in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/master/rust-toolchain"},"rust-toolchain")," file."),(0,o.kt)("p",null,"The rustup-installed versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," and other tools will\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup/blob/master/README.md#override-precedence"},"automatically detect this file and use the appropriate version of the Rust\ntoolchain"),". When you are building applications that\nuse the SDK, it is recommended that you copy the same ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/master/rust-toolchain"},"rust-toolchain")," file to\nyour project's top-level directory as well."),(0,o.kt)("p",null,"To install the appropriate version of the Rust toolchain, make sure you are\nin the project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup show\n")),(0,o.kt)("p",null,"This will automatically install the appropriate Rust toolchain (if not\npresent) and output something similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n\nactive toolchain\n----------------\n\nnightly-2022-08-22-x86_64-unknown-linux-gnu (overridden by '/code/rust-toolchain')\nrustc 1.65.0-nightly (c0941dfb5 2022-08-21)\n")),(0,o.kt)("h4",{id:"optional-fortanix-sgx-rust-target"},"(OPTIONAL) Fortanix SGX Rust Target"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Required if you want to build runtimes that run inside the Intel SGX trusted\nexecution environment.")),(0,o.kt)("p",null,"To add the Fortanix SGX Rust target run the following in the project\ndirectory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup target add x86_64-fortanix-unknown-sgx\n")),(0,o.kt)("h3",{id:"optional-go"},"(OPTIONAL) ",(0,o.kt)("a",{parentName:"h3",href:"https://golang.org"},"Go")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Required if you want to use the Go Client SDK.")),(0,o.kt)("p",null,"At least version ",(0,o.kt)("strong",{parentName:"p"},"1.17.3")," is required. If your distribution provides a\nnew-enough version of Go, just use that."),(0,o.kt)("p",null,"Otherwise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"install the Go version provided by your distribution,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://tip.golang.org/doc/code.html#GOPATH"},"ensure ",(0,o.kt)("inlineCode",{parentName:"a"},"$GOPATH/bin")," is in your ",(0,o.kt)("inlineCode",{parentName:"a"},"PATH")),",")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install#extra_versions"},"install the desired version of Go"),", e.g. 1.17.3, with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"go get golang.org/dl/go1.17.3\ngo1.17.3 download\n")))),(0,o.kt)("h2",{id:"oasis-core-installation"},"Oasis Core Installation"),(0,o.kt)("p",null,"The SDK requires utilities provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core"},"Oasis Core")," in order to be able to run\na local test network for development purposes."),(0,o.kt)("p",null,"The recommended way is to download a pre-built release (at least version\n22.1.9) from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/releases"},"Oasis Core releases")," page. After downloading the binary\nrelease (e.g. into ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Downloads/oasis_core_22.1.9_linux_amd64.tar.gz"),"), unpack\nit as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downloads\ntar xf ~/Downloads/oasis_core_22.1.9_linux_amd64.tar.gz --strip-components=1\n\n# This environment variable will be used throughout this guide.\nexport OASIS_CORE_PATH=~/Downloads/oasis_core_22.1.9_linux_amd64\n")),(0,o.kt)("h2",{id:"oasis-cli-installation"},"Oasis CLI Installation"),(0,o.kt)("p",null,"The rest of the guide uses the Oasis CLI as an easy way to interact with the\nParaTime. At the time of writing, no precompiled binaries are available. You\nwill need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk"},"oasis-sdk git repository")," and compile the tool yourself.\nThe process is straight forward and is described in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/blob/main/cli/README.md"},"CLI README"),"."))}d.isMDXComponent=!0}}]);