(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(5),o=r(10),i=(r(2),r(341)),a={id:"prettier",title:"Prettier & Linters"},c={unversionedId:"integrations/prettier",id:"integrations/prettier",isDocsHomePage:!1,title:"Prettier & Linters",description:"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules.",source:"@site/docs/integrations/prettier.md",slug:"/integrations/prettier",permalink:"/docs/integrations/prettier",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/prettier.md",version:"current",sidebar:"sidebar",previous:{title:"GatsbyJS",permalink:"/docs/integrations/gatsby"},next:{title:"Apollo Federation",permalink:"/docs/integrations/federation"}},l=[{value:"Prettier",id:"prettier",children:[]},{value:"TSLint",id:"tslint",children:[]},{value:"ESLint",id:"eslint",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/lifecycle-hooks"}),"You can read the complete documentation of lifecycle hooks here")),Object(i.b)("h2",{id:"prettier"},"Prettier"),Object(i.b)("p",null,"You can run it per each file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - prettier --write\n")),Object(i.b)("p",null,"Or, for all files together:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - prettier --write\n")),Object(i.b)("h2",{id:"tslint"},"TSLint"),Object(i.b)("p",null,"You can run it per each file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - tslint --fix\n")),Object(i.b)("p",null,"Or, for all files together:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - tslint --fix\n")),Object(i.b)("h2",{id:"eslint"},"ESLint"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - eslint --fix\n")),Object(i.b)("p",null,"Or, for all files together:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - eslint --fix\n")))}p.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(2),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);