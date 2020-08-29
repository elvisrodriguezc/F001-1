(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return i}))},85:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(2),i=n(6),o=(n(0),n(95)),a=n(99),c={id:"obligaciones",title:"Obligaciones de ser Emisor Electr\xf3nico",sidebar_label:"Obligaciones"},s={unversionedId:"obligaciones",id:"obligaciones",isDocsHomePage:!1,title:"Obligaciones de ser Emisor Electr\xf3nico",description:"Existen algunas obligaciones de parte del emisor electr\xf3nico que debe cumplir, seg\xfan la normativa de SUNAT.",source:"@site/docs/obligaciones.md",permalink:"/docs/obligaciones",editUrl:"https://github.com/thegreenter/F001-1/edit/master/website/docs/obligaciones.md",sidebar_label:"Obligaciones",sidebar:"docs",previous:{title:"Convertirse en emisor electr\xf3nico",permalink:"/docs/autorization"},next:{title:"Requerimientos",permalink:"/docs/requirements"}},l=[{value:"Almacenamiento de los Comprobantes",id:"almacenamiento-de-los-comprobantes",children:[]},{value:"Comprobantes F\xedsicos",id:"comprobantes-f\xedsicos",children:[]},{value:"Representaci\xf3n Impresa",id:"representaci\xf3n-impresa",children:[]}],u={rightToc:l};function p(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Existen algunas obligaciones de parte del emisor electr\xf3nico que debe cumplir, seg\xfan la normativa de SUNAT."),Object(o.b)("h2",{id:"almacenamiento-de-los-comprobantes"},"Almacenamiento de los Comprobantes"),Object(o.b)("p",null,"Se debe almacenar los comprobantes electr\xf3nicos, y deben estar disponible para sus clientes, utilizando alg\xfan medio digital, y tambien debe asegurar que solo el adquiriente puede acceder a dicha informaci\xf3n."),Object(o.b)("img",{style:{margin:"2rem auto",width:"12rem",display:"flex"},src:Object(a.a)("img/files_user.svg"),title:"Facturas de Usuario"}),Object(o.b)("h2",{id:"comprobantes-f\xedsicos"},"Comprobantes F\xedsicos"),Object(o.b)("p",null,"Si por alg\xfan motivo la empresa esta impedida de emitir comprobantes electr\xf3nicos, puede hacer uso de la emisi\xf3n de comprobantes fisicos; estos posteriormente seran comunicados a SUNAT haciendo uso los ",Object(o.b)("inlineCode",{parentName:"p"},"webservices"),"."),Object(o.b)("p",null,"Hay una lista de consideraciones adicionales que puede revisar ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/informacion_general/procedimiento_contingencia"}),"aqu\xed"),"."),Object(o.b)("h2",{id:"representaci\xf3n-impresa"},"Representaci\xf3n Impresa"),Object(o.b)("p",null,"La principal diferencia con las facturas fisicas, es que las impresiones deben incluir un codigo QR, puedes ver este ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://greenter-sample.herokuapp.com/examples/report/factura.php"}),"ejemplo"),"."))}p.isMDXComponent=!0},95:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=t,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:r},l),{},{components:n})):i.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,r,n){"use strict";var t=n(0),i=n(21);r.a=function(){var e=Object(t.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},99:function(e,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return a}));var t=n(96),i=n(100);function o(){var e=Object(t.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var o=void 0===t?{}:t,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return r+n;var u=!n.startsWith(r)?r+n.replace(/^\//,""):n;return l?e+u:u}(o,n,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}}}]);