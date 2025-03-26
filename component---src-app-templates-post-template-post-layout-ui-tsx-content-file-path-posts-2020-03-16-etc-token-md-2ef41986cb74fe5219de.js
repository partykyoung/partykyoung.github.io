"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[379],{3047:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var l=t(6540),r=t(8453);function a(e){const n=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",ol:"ol",p:"p",span:"span",a:"a",blockquote:"blockquote"},(0,r.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,null,"세션기반 인증 방식"),"\n",l.createElement(n.h3,null,"세션"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"일정시간 동안 같은 사용자로부터 들어오는 일련의 요구를 하나의 상태로 보고 그 상태를 일정하기 유지시키는 기술.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"일정시간이란 방문자가 클라이언트를 통해 서버에 접속한 시점으로부터 방문자가 클라이언트를 종료함으로써 연결을 끝내는 시점."),"\n"),"\n"),"\n"),"\n",l.createElement(n.h3,null,"세션 기반 인증 방식 FLOW"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"사용자가 로그인을 한다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"사용자가 입력한 로그인 정보를 서버로 전달(Request)."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"서버는 사용자의 Request를 받아 사용자 검증을 한다. 유효할 경우 사용자의 고유한 ID값을 부여하여 세션 저장소에 저장한 후, 이와 연결되는 세션 ID를 생성하여 response header에 포함시켜 반환한다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"대부분의 경우 세션 정보를 서버 메모리 OR DB에 저장한다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"사용자는 서버에서 해당 세션 ID를 받아 쿠키에 저장한 후, 인증이 필요한 요청에 접근할 때 마다 쿠키를 request header에 포함시켜 보낸다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"서버는 쿠키를 받아 세션 저장소에서 검증한 후, 요청에 해당하는 데이터를 반환한다."),"\n"),"\n"),"\n",l.createElement(n.h2,null,"토큰기반 인증 방식"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"인증 받은 사용자들에게 토큰을 발급하고 서버에 요청을 할 때 header에 토큰을 함께 보내도록 하여 유효성 검사를 하는 방식."),"\n"),"\n",l.createElement(n.h3,null,"토큰 기반 인증 방식 FLOW"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"사용자가 로그인을 한다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"사용자가 입력한 로그인 정보를 서버로 전달(Request)."),"\n"),"\n"),"\n",l.createElement(n.li,null,"서버는 사용자의 Request를 받아 사용자 검증을 한다. 유효할 경우 서버측에서 유저에게 정상적으로 발급된 토큰임을 증명하는 signature를 갖는 토큰을 발급해준다."),"\n",l.createElement(n.li,null,"클라이언트 측에서 전달받은 토큰을 저장해두고 서버에 요청할 때 마다 해당 토큰을 서버에 같이 전달한다."),"\n",l.createElement(n.li,null,"서버는 토큰을 검증하고 요청에 응답한다."),"\n"),"\n",l.createElement(n.h3,null,"특징"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"무상태(stateless)이며 확장성이 있다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"토큰을 클라이언트에 저장하기 때문에 완전히 stateless 하다."),"\n",l.createElement(n.li,null,"클라이언트와 서버의 연결고리가 없기 떄문에 서버의 확장성이 높아진다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"플랫폼간 권한 공유","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"페이스북, 구글 같은 소설 계정들을 이용하여 다른 서비스에서도 권한을 공유할 수 있다(OAuth).","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"OAuth: 인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근권한을 부여할 수 있는 공통적인 수단으로서 사용되는 접금 위임을 위한 개방형 표준."),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(n.li,null,"여러 플랫폼 및 도메인","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"토큰을 사용하면 어떤 디바이스나 도메인에도 토큰만 유효하다면 요청이 정상적으로 처리된다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"서버측에서 어플리케이션 응답 부분에 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Access-Control-Allow-Origin: *</code>'}}),"를 header에 포함시켜주면 된다."),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(n.li,null,"웹 표준 기반","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"토큰 기반 인증 시스템의 구현체인 ",l.createElement(n.a,{href:"https://jwt.io/"},"JWT"),"는 개방형 표준 ",l.createElement(n.a,{href:"https://tools.ietf.org/html/rfc7519"},"RFC 7519"),"에 등록되어 있다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"CSRF(Cross-site Request Forgery, 사이트간 요청위조) 방지.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"세션 기반 방식은 쿠키가 사용자 정보를 가지고 있기 때문에 사용자가 로그인한 상태에서 사이트간 요청 위조 공격 코드가 삽입된 페이지를 열어도 서버는 요청을 신뢰하고 작업을 수행하게 된다. 그러나 토큰 기반 인증에서는 header 내에 토큰이 포함되어 있으므로 CSRF를 방지할 수 있다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"토큰을 사용하는 환경에서도 취약점이 존재 할 수 있으니 언제나 취약점에 대비해야 한다."),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(n.h2,null,"Reference"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://88240.tistory.com/190"},"Session 이란?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://dooopark.tistory.com/6"},"서버 기반 인증, 토큰 기반 인증 (Session, Cookie / JSON Web Token)")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://velopert.com/2350"},"[JWT] 토큰(Token) 기반 인증에 대한 소개")),"\n"),"\n"))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.R)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=t(2877),o=t(7736),s=t(407),i=t(7735),m=t(685),d=t(2248),h=t(8066),f=t(4848);function E(e){var n,t;let{data:l,children:a}=e;const{date:u,tags:E,title:p}=null!==(n=null==l||null===(t=l.mdx)||void 0===t?void 0:t.frontmatter)&&void 0!==n?n:{};return(0,f.jsx)(o.i,{children:(0,f.jsxs)(c.m,{className:h.q,children:[(0,f.jsx)(d.l,{className:h.V,title:p}),(0,f.jsx)(i.l,{date:u}),(0,f.jsx)(m.I,{tags:E}),(0,f.jsx)(s.E,{children:(0,f.jsx)(r.x,{children:a})})]})})}function p(e){return l.createElement(E,e,l.createElement(u,e))}},407:function(e,n,t){t.d(n,{E:function(){return u}});var l=t(4164),r="post-layout-content-module--post-layout-content-root--01754",a=t(4848);function u(e){let{children:n,className:t,...u}=e;return(0,a.jsx)("div",{className:(0,l.$)(r,t),...u,children:n})}},7735:function(e,n,t){t.d(n,{l:function(){return u}});var l=t(4164),r="post-layout-date-module--post-layout-date-root--f34d1",a=t(4848);function u(e){let{className:n,date:t,...u}=e;return(0,a.jsx)("span",{className:(0,l.$)(r,n),...u,children:t})}},685:function(e,n,t){t.d(n,{I:function(){return c}});var l=t(9143),r=t(4194),a="post-layout-module--post-layout-tags--837df",u=t(4848);function c(e){let{tags:n}=e;return(0,u.jsx)(l.Y,{className:a,children:n.map((e=>(0,u.jsx)(r.Link,{to:"/tags/"+e,children:(0,u.jsx)(l.Y.Tag,{tag:e})},e)))})}},2248:function(e,n,t){t.d(n,{l:function(){return u}});var l=t(4164),r="post-layout-title-module--post-layout-title-root--88374",a=t(4848);function u(e){let{className:n,title:t,...u}=e;return(0,a.jsx)("h1",{className:(0,l.$)(r,n),...u,children:t})}},9143:function(e,n,t){t.d(n,{Y:function(){return a}});var l=t(4164),r=t(4848);const a=Object.assign((function(e){let{children:n,className:t,...a}=e;return(0,r.jsx)("div",{className:(0,l.$)("tags-module--tags-root--e3461",t),...a,children:n})}),{Tag:function(e){let{className:n,tag:t,...a}=e;return(0,r.jsx)("span",{className:(0,l.$)("tag-module--tag-root--aae01",n),...a,children:t})}})},2877:function(e,n,t){t.d(n,{m:function(){return u}});var l=t(4164),r="container-module--container-root--3b208",a=t(4848);function u(e){let{children:n,className:t,...u}=e;return(0,a.jsx)("div",{className:(0,l.$)(r,t),...u,children:n})}},2629:function(e,n,t){t.d(n,{$:function(){return u}});var l=t(4164),r="basic-layout-module--basic-layout-root--a11e0",a=t(4848);function u(e){let{children:n,className:t,...u}=e;return(0,a.jsx)("div",{className:(0,l.$)(r,t),...u,children:n})}},7736:function(e,n,t){t.d(n,{i:function(){return x}});var l=t(4194),r=t(4164),a="header-module--about--32ac9",u="header-module--header-logo--5bbdc",c="header-module--header-navigation--24bcb",o="header-module--header-navigation-item--ba248",s="header-module--header-navigation-item-link--d6da9",i="header-module--header-navigation-list--3815c",m="header-module--header-root--01ceb",d="header-module--tags--eb332",h=t(4848);function f(){return(0,h.jsxs)("header",{className:m,children:[(0,h.jsx)(l.Link,{to:"/",children:(0,h.jsx)("img",{src:"/images/logo.png",srcSet:"/images/logo-small.png 200w, /images/logo.png 300w",sizes:"(max-width: 360px) 200px, 300px",alt:"dev.kyoungah.me",className:u})}),(0,h.jsx)("nav",{className:c,children:(0,h.jsxs)("ul",{className:i,children:[(0,h.jsx)("li",{className:o,children:(0,h.jsx)(l.Link,{to:"/tags",children:(0,h.jsx)("span",{"aria-label":"tags",className:(0,r.$)(s,d)})})}),(0,h.jsx)("li",{className:o,children:(0,h.jsx)("a",{href:"/about",rel:"noopener",target:"_blank",children:(0,h.jsx)("span",{"aria-label":"about",className:(0,r.$)(s,a)})})})]})})]})}var E="footer-module--footer-root--795ff";function p(){return(0,h.jsxs)("footer",{className:E,children:[(0,h.jsx)("span",{children:"Powered by Gatsby, Hosted by GitHub Pages."}),(0,h.jsxs)("span",{children:["©",(0,h.jsx)("a",{href:"https://github.com/partykyoung",rel:"noreferrer",target:"_blank",children:"KyoungAh"}),", All rights reserved."]})]})}var g=t(2629);function x(e){let{children:n}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{}),(0,h.jsx)(g.$,{children:n}),(0,h.jsx)(p,{})]})}},8066:function(e,n,t){t.d(n,{V:function(){return r},q:function(){return l}});var l="post-layout-module--post-layout-container--f40b5",r="post-layout-module--post-layout-title--1c575"},8453:function(e,n,t){t.d(n,{R:function(){return u},x:function(){return c}});var l=t(6540);const r={},a=l.createContext(r);function u(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),l.createElement(a.Provider,{value:n},e.children)}},4164:function(e,n,t){function l(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=l(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=l(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{$:function(){return r}})}}]);
//# sourceMappingURL=component---src-app-templates-post-template-post-layout-ui-tsx-content-file-path-posts-2020-03-16-etc-token-md-2ef41986cb74fe5219de.js.map