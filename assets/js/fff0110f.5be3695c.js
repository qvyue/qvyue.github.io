"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>E});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var y=r.createContext({}),i=function(t){var e=r.useContext(y),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(y.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,y=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=i(n),E=l,M=c["".concat(y,".").concat(E)]||c[E]||u[E]||a;return n?r.createElement(M,s(s({ref:e},p),{},{components:n})):r.createElement(M,s({ref:e},p))}));function E(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,s=new Array(a);s[0]=c;var o={};for(var y in e)hasOwnProperty.call(e,y)&&(o[y]=e[y]);o.originalType=t,o.mdxType="string"==typeof t?t:l,s[1]=o;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const a={id:"mysql-data-types",title:"MySQL \u6570\u636e\u7c7b\u578b",sidebar_position:9},s="MySQL \u6570\u636e\u7c7b\u578b",o={unversionedId:"mysql/mysql-data-types",id:"mysql/mysql-data-types",title:"MySQL \u6570\u636e\u7c7b\u578b",description:"MySQL \u4e2d\u5b9a\u4e49\u6570\u636e\u5b57\u6bb5\u7684\u7c7b\u578b\u5bf9\u4f60\u6570\u636e\u5e93\u7684\u4f18\u5316\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002",source:"@site/docs/mysql/mysql-data-types.md",sourceDirName:"mysql",slug:"/mysql/mysql-data-types",permalink:"/mysql/mysql-data-types",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"mysql-data-types",title:"MySQL \u6570\u636e\u7c7b\u578b",sidebar_position:9},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u9009\u62e9\u6570\u636e\u5e93",permalink:"/mysql/mysql-select-database"},next:{title:"MySQL \u521b\u5efa\u6570\u636e\u8868",permalink:"/mysql/mysql-create-tables"}},y={},i=[{value:"\u6570\u503c\u7c7b\u578b",id:"\u6570\u503c\u7c7b\u578b",level:2},{value:"\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b",id:"\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b",level:2},{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:2}],p={toc:i};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-\u6570\u636e\u7c7b\u578b"},"MySQL \u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"MySQL \u4e2d\u5b9a\u4e49\u6570\u636e\u5b57\u6bb5\u7684\u7c7b\u578b\u5bf9\u4f60\u6570\u636e\u5e93\u7684\u4f18\u5316\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"),(0,l.kt)("p",null,"MySQL \u652f\u6301\u591a\u79cd\u7c7b\u578b\uff0c\u5927\u81f4\u53ef\u4ee5\u5206\u4e3a\u4e09\u7c7b\uff1a\u6570\u503c\u3001\u65e5\u671f/\u65f6\u95f4\u548c\u5b57\u7b26\u4e32(\u5b57\u7b26)\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u6570\u503c\u7c7b\u578b"},"\u6570\u503c\u7c7b\u578b"),(0,l.kt)("p",null,"MySQL \u652f\u6301\u6240\u6709\u6807\u51c6 SQL \u6570\u503c\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7c7b\u578b\u5305\u62ec\u4e25\u683c\u6570\u503c\u6570\u636e\u7c7b\u578b(INTEGER\u3001SMALLINT\u3001DECIMAL \u548c NUMERIC)\uff0c\u4ee5\u53ca\u8fd1\u4f3c\u6570\u503c\u6570\u636e\u7c7b\u578b(FLOAT\u3001REAL \u548c DOUBLE PRECISION)\u3002"),(0,l.kt)("p",null,"\u5173\u952e\u5b57INT\u662fINTEGER\u7684\u540c\u4e49\u8bcd\uff0c\u5173\u952e\u5b57DEC\u662fDECIMAL\u7684\u540c\u4e49\u8bcd\u3002"),(0,l.kt)("p",null,"BIT\u6570\u636e\u7c7b\u578b\u4fdd\u5b58\u4f4d\u5b57\u6bb5\u503c\uff0c\u5e76\u4e14\u652f\u6301 MyISAM\u3001MEMORY\u3001InnoDB \u548c BDB\u8868\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a SQL \u6807\u51c6\u7684\u6269\u5c55\uff0cMySQL \u4e5f\u652f\u6301\u6574\u6570\u7c7b\u578b TINYINT\u3001MEDIUMINT \u548c BIGINT\u3002\u4e0b\u9762\u7684\u8868\u663e\u793a\u4e86\u9700\u8981\u7684\u6bcf\u4e2a\u6574\u6570\u7c7b\u578b\u7684\u5b58\u50a8\u548c\u8303\u56f4\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\t\u5927\u5c0f\t\u8303\u56f4\uff08\u6709\u7b26\u53f7\uff09\t\u8303\u56f4\uff08\u65e0\u7b26\u53f7\uff09\t\u7528\u9014\nTINYINT\t1 Bytes\t(-128\uff0c127)\t(0\uff0c255)\t\u5c0f\u6574\u6570\u503c\nSMALLINT\t2 Bytes\t(-32 768\uff0c32 767)\t(0\uff0c65 535)\t\u5927\u6574\u6570\u503c\nMEDIUMINT\t3 Bytes\t(-8 388 608\uff0c8 388 607)\t(0\uff0c16 777 215)\t\u5927\u6574\u6570\u503c\nINT\u6216INTEGER\t4 Bytes\t(-2 147 483 648\uff0c2 147 483 647)\t(0\uff0c4 294 967 295)\t\u5927\u6574\u6570\u503c\nBIGINT\t8 Bytes\t(-9,223,372,036,854,775,808\uff0c9 223 372 036 854 775 807)\t(0\uff0c18 446 744 073 709 551 615)\t\u6781\u5927\u6574\u6570\u503c\nFLOAT\t4 Bytes\t(-3.402 823 466 E+38\uff0c-1.175 494 351 E-38)\uff0c0\uff0c(1.175 494 351 E-38\uff0c3.402 823 466 351 E+38)\t0\uff0c(1.175 494 351 E-38\uff0c3.402 823 466 E+38)\t\u5355\u7cbe\u5ea6\n\u6d6e\u70b9\u6570\u503c\nDOUBLE\t8 Bytes\t(-1.797 693 134 862 315 7 E+308\uff0c-2.225 073 858 507 201 4 E-308)\uff0c0\uff0c(2.225 073 858 507 201 4 E-308\uff0c1.797 693 134 862 315 7 E+308)\t0\uff0c(2.225 073 858 507 201 4 E-308\uff0c1.797 693 134 862 315 7 E+308)\t\u53cc\u7cbe\u5ea6\n\u6d6e\u70b9\u6570\u503c\nDECIMAL\t\u5bf9DECIMAL(M,D) \uff0c\u5982\u679cM>D\uff0c\u4e3aM+2\u5426\u5219\u4e3aD+2\t\u4f9d\u8d56\u4e8eM\u548cD\u7684\u503c\t\u4f9d\u8d56\u4e8eM\u548cD\u7684\u503c\t\u5c0f\u6570\u503c"),(0,l.kt)("h2",{id:"\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b"},"\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b"),(0,l.kt)("p",null,"\u8868\u793a\u65f6\u95f4\u503c\u7684\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b\u4e3aDATETIME\u3001DATE\u3001TIMESTAMP\u3001TIME\u548cYEAR\u3002"),(0,l.kt)("p",null,'\u6bcf\u4e2a\u65f6\u95f4\u7c7b\u578b\u6709\u4e00\u4e2a\u6709\u6548\u503c\u8303\u56f4\u548c\u4e00\u4e2a"\u96f6"\u503c\uff0c\u5f53\u6307\u5b9a\u4e0d\u5408\u6cd5\u7684MySQL\u4e0d\u80fd\u8868\u793a\u7684\u503c\u65f6\u4f7f\u7528"\u96f6"\u503c\u3002'),(0,l.kt)("p",null,"TIMESTAMP\u7c7b\u578b\u6709\u4e13\u6709\u7684\u81ea\u52a8\u66f4\u65b0\u7279\u6027\uff0c\u5c06\u5728\u540e\u9762\u63cf\u8ff0\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\t\u5927\u5c0f\n( bytes)\t\u8303\u56f4\t\u683c\u5f0f\t\u7528\u9014\nDATE\t3\t1000-01-01/9999-12-31\tYYYY-MM-DD\t\u65e5\u671f\u503c\nTIME\t3\t'-838:59:59'/'838:59:59'\tHH:MM:SS\t\u65f6\u95f4\u503c\u6216\u6301\u7eed\u65f6\u95f4\nYEAR\t1\t1901/2155\tYYYY\t\u5e74\u4efd\u503c\nDATETIME\t8\t1000-01-01 00:00:00/9999-12-31 23:59:59\tYYYY-MM-DD HH:MM:SS\t\u6df7\u5408\u65e5\u671f\u548c\u65f6\u95f4\u503c\nTIMESTAMP\t4\n1970-01-01 00:00:00/2038"),(0,l.kt)("p",null,"\u7ed3\u675f\u65f6\u95f4\u662f\u7b2c 2147483647 \u79d2\uff0c\u5317\u4eac\u65f6\u95f4 2038-1-19 11:14:07\uff0c\u683c\u6797\u5c3c\u6cbb\u65f6\u95f4 2038\u5e741\u670819\u65e5 \u51cc\u6668 03:14:07"),(0,l.kt)("p",null,"YYYYMMDD HHMMSS\t\u6df7\u5408\u65e5\u671f\u548c\u65f6\u95f4\u503c\uff0c\u65f6\u95f4\u6233"),(0,l.kt)("h2",{id:"\u5b57\u7b26\u4e32\u7c7b\u578b"},"\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u7c7b\u578b\u6307CHAR\u3001VARCHAR\u3001BINARY\u3001VARBINARY\u3001BLOB\u3001TEXT\u3001ENUM\u548cSET\u3002\u8be5\u8282\u63cf\u8ff0\u4e86\u8fd9\u4e9b\u7c7b\u578b\u5982\u4f55\u5de5\u4f5c\u4ee5\u53ca\u5982\u4f55\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\t\u5927\u5c0f\t\u7528\u9014\nCHAR\t0-255 bytes\t\u5b9a\u957f\u5b57\u7b26\u4e32\nVARCHAR\t0-65535 bytes\t\u53d8\u957f\u5b57\u7b26\u4e32\nTINYBLOB\t0-255 bytes\t\u4e0d\u8d85\u8fc7 255 \u4e2a\u5b57\u7b26\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\nTINYTEXT\t0-255 bytes\t\u77ed\u6587\u672c\u5b57\u7b26\u4e32\nBLOB\t0-65 535 bytes\t\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7684\u957f\u6587\u672c\u6570\u636e\nTEXT\t0-65 535 bytes\t\u957f\u6587\u672c\u6570\u636e\nMEDIUMBLOB\t0-16 777 215 bytes\t\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7684\u4e2d\u7b49\u957f\u5ea6\u6587\u672c\u6570\u636e\nMEDIUMTEXT\t0-16 777 215 bytes\t\u4e2d\u7b49\u957f\u5ea6\u6587\u672c\u6570\u636e\nLONGBLOB\t0-4 294 967 295 bytes\t\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7684\u6781\u5927\u6587\u672c\u6570\u636e\nLONGTEXT\t0-4 294 967 295 bytes\t\u6781\u5927\u6587\u672c\u6570\u636e\n\u6ce8\u610f\uff1achar(n) \u548c varchar(n) \u4e2d\u62ec\u53f7\u4e2d n \u4ee3\u8868\u5b57\u7b26\u7684\u4e2a\u6570\uff0c\u5e76\u4e0d\u4ee3\u8868\u5b57\u8282\u4e2a\u6570\uff0c\u6bd4\u5982 CHAR(30) \u5c31\u53ef\u4ee5\u5b58\u50a8 30 \u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"CHAR \u548c VARCHAR \u7c7b\u578b\u7c7b\u4f3c\uff0c\u4f46\u5b83\u4eec\u4fdd\u5b58\u548c\u68c0\u7d22\u7684\u65b9\u5f0f\u4e0d\u540c\u3002\u5b83\u4eec\u7684\u6700\u5927\u957f\u5ea6\u548c\u662f\u5426\u5c3e\u90e8\u7a7a\u683c\u88ab\u4fdd\u7559\u7b49\u65b9\u9762\u4e5f\u4e0d\u540c\u3002\u5728\u5b58\u50a8\u6216\u68c0\u7d22\u8fc7\u7a0b\u4e2d\u4e0d\u8fdb\u884c\u5927\u5c0f\u5199\u8f6c\u6362\u3002"),(0,l.kt)("p",null,"BINARY \u548c VARBINARY \u7c7b\u4f3c\u4e8e CHAR \u548c VARCHAR\uff0c\u4e0d\u540c\u7684\u662f\u5b83\u4eec\u5305\u542b\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u800c\u4e0d\u8981\u975e\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u5305\u542b\u5b57\u8282\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u5b57\u7b26\u5b57\u7b26\u4e32\u3002\u8fd9\u8bf4\u660e\u5b83\u4eec\u6ca1\u6709\u5b57\u7b26\u96c6\uff0c\u5e76\u4e14\u6392\u5e8f\u548c\u6bd4\u8f83\u57fa\u4e8e\u5217\u503c\u5b57\u8282\u7684\u6570\u503c\u503c\u3002"),(0,l.kt)("p",null,"BLOB \u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5927\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5bb9\u7eb3\u53ef\u53d8\u6570\u91cf\u7684\u6570\u636e\u3002\u6709 4 \u79cd BLOB \u7c7b\u578b\uff1aTINYBLOB\u3001BLOB\u3001MEDIUMBLOB \u548c LONGBLOB\u3002\u5b83\u4eec\u533a\u522b\u5728\u4e8e\u53ef\u5bb9\u7eb3\u5b58\u50a8\u8303\u56f4\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u6709 4 \u79cd TEXT \u7c7b\u578b\uff1aTINYTEXT\u3001TEXT\u3001MEDIUMTEXT \u548c LONGTEXT\u3002\u5bf9\u5e94\u7684\u8fd9 4 \u79cd BLOB \u7c7b\u578b\uff0c\u53ef\u5b58\u50a8\u7684\u6700\u5927\u957f\u5ea6\u4e0d\u540c\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u3002"))}u.isMDXComponent=!0}}]);