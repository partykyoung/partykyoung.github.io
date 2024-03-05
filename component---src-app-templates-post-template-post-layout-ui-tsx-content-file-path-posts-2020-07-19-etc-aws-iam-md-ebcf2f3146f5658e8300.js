"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[598],{7712:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var l=t(6540),a=t(8453);function r(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",img:"img",blockquote:"blockquote"},(0,a.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,null,"AWS IAM"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스."),"\n",l.createElement(n.li,null,"AWS 계정 안에 IAM 그룹과 사용자를 생성하여 접근제어 및 권한관리를 세분화 할 수 있다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"일부 EC2 인스턴스를 관리할 수 있는 권한을 주거나, 일부 S3 버킷에 대한 읽기 전용 권한만 주는 등 리소스에 따라 여러 사람에게 다양한 권한을 부여할 수 있다."),"\n",l.createElement(n.li,null,"IAM 사용자에게 전체 권한이 아닌 필요한 권한만 허용하기 때문에 보안성이 높아진다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"IAM을 사용할 때는 리전을 선택할 필요가 없다."),"\n"),"\n",l.createElement(n.h2,null,"Root 사용자와 IAM 사용자"),"\n",l.createElement(n.p,null,"AWS 계정을 처음 생성하면 완전한 엑세스 권한이 있는 SSO(single Sign-In, 단일 사용자) ID로 시작하는데 이것을 Root 사용자라고 한다. Root 사용자는 계정을 생성할 때 사용한 이메일 주소와 암호로 로그인하여 액세스 한다.\nAWS에서는 Root 사용자는 무제한적인 액세스 권한이 있으니 ",l.createElement(n.a,{href:"https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws_tasks-that-require-root.html"},"Root 사용자로만 가능한 작업"),"을 할 때를 제외하고는 Root 사용자 보다는 IAM 사용자를 사용하기를 권장하고 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Root 사용자를 여러명이 공유해서 사용하는 경우 누가 어떤 작업을 했는지 구분하는 것이 불가능하다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"이럴 경우 여러명의 작업자가 각각 다른 API 호출을 해도 ",l.createElement(n.a,{href:"https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"},"AWS CloudTrail"),"에는 Root 사용자의 기록으로 남기 때문에 추후에 로그 확인이나 추적이 힘들어진다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"Root 사용자 계정이 해킹당하면 모든 AWS 액세스 권한이 해킹되는 것이나 마찬가지 이다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"만약 IAM 사용자가 해킹당하면 해당 IAM 사용자만 차단하고 AWS CloudTrail 로그를 확인하여 피해를 최소화 할 수 있다."),"\n",l.createElement(n.li,null,"실제로 AWS 계정이 해킹당해 요금 폭탄을 맞았다는 사례가 많다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"Root 사용자의 액세스 키가 유출된 경우 액세스 키를 삭제하는 것 이외에는 대응할 수 있는 방법이 없다.","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"이 액세스 키가 현재 실제 운영되고 있는 서비스에서 사용하고 있는 키라면 무작정 삭제했을 때 서비스에 장애가 생길 수도 있다."),"\n",l.createElement(n.li,null,"IAM 사용자에게 발급된 액세스 키는 권한을 제어하는 것이 가능하며, 삭제나 재발급에 대한 부담이 적다."),"\n",l.createElement(n.li,null,"Github에 Root 사용자의 액세스키를 포함한 소스코드를 그대로 올렸다가 해커에게 공격당해 요금폭탄을 맞았다는 사례 역시 많다."),"\n"),"\n"),"\n"),"\n",l.createElement(n.h3,null,"IAM 사용자 추가하기"),"\n",l.createElement(n.p,null,"AWS 리소스 권한을 가진 IAM 사용자를 추가해보자."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-1.png",alt:"AWS 서비스메뉴"}),"\n",l.createElement(n.p,null,"Root 사용자로 로그인 한 후 검색창에서 IAM을 입력하거나 서비스 메뉴 목록에서 IAM을 클릭하여 IAM 대시보드 창으로 이동한다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-2.png",alt:"IAM 대시보드"}),"\n",l.createElement(n.p,null,"사용자 항목을 클릭하여 IAM 사용자 페이지에 접속한다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-3.png",alt:"IAM 사용자 목록"}),"\n",l.createElement(n.p,null,"사용자 추가 버튼을 클릭한다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-4.png",alt:"IAM 사용자 추가 - 사용자 정보 설정"}),"\n",l.createElement(n.p,null,"추가할 사용자의 이름과 액세스 유형을 설정한다. 액세스 유형은 프로그래밍 방식 액세스와 AWS Management Console 액세스가 있으며 나중에 변경이 가능하다. 프로그래밍 방식 액세스는 AWS CLI나 API등에 엑세스 하기 위해 액세스 키만 생성하는 방식이고 AWS Managemet Console 액세스는 로그인 가능한 사용자를 생성하는 방식이다.\n나는 AWS를 관리할 사용자가 필요하므로 AWS Management Console 액세스를 선택했다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-5.png",alt:"IAM 사용자 추가 - 사용자 권한 설정"}),"\n",l.createElement(n.p,null,"이제 사용자의 권한을 설정해야 한다. 권한 설정에는 그룹에 사용자 추가, 기존 사용자에서 권한 복사, 기존 정책 직접 연결이 있다.\n나는 기존에 생성해놨던 그룹도 있고 다른 방법들은 어떻게 설정하는지 잘 몰라서 무난하게 그룹에 사용자 추가 방법으로 권한을 설정했다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-6.png",alt:"IAM 그룹 생성"}),"\n",l.createElement(n.p,null,"만약 그룹이 없거나 다른 권한의 그룹이 필요하다면 그룹생성 버튼을 눌러 생성할 수 있다.\nAdministratorAccess 권한은 AWS의 모든 서비스 및 리소스에 대한 엑세스 및 권한을 허용한다. 이 권한을 선택하면 Root 사용자와 같은 권한을 IAM 사용자에게 주는거나 마찬가지이기 때문에 주의가 필요하다. 왠만하면 최소한의 권한을 부여하도록 하자."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-7.png",alt:"IAM 사용자 추가 - 사용자 태그 추가"}),"\n",l.createElement(n.p,null,"태그를 사용하여 IAM 사용자 지정 속성을 추가할 수 있다. 요 부분은 나도 잘 모르는데다가 굳이 입력을 안해도 되기 때문에 그냥 패스했다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-8.png",alt:"IAM 사용자 추가 - 검토"}),"\n",l.createElement(n.p,null,"마지막으로 잘못된 부분이 있는지 한번더 확인을 한 후 사용자 만들기 버튼을 누르면 IAM 사용자가 생성된다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-9.png",alt:"IAM 사용자 추가 완료"}),"\n",l.createElement(n.p,null,"비밀번호 항목에서 표시 버튼을 눌러 사용자의 비밀번호를 확인할 수 있다. 이 비밀번호로 로그인을 해야 하니 잘 기억해두자."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-10.png",alt:"AWS IAM 사용자 로그인 링크 확인"}),"\n",l.createElement(n.p,null,"IAM 사용자가 로그인 하려면 계정 ID 또는 별칭을 알고 있어야 한다. 슛자로 된 ID 보다는 별칭이 좀 더 익히기 쉬우므로 사용자 지정 버튼을 눌러 계정 별칭을 생성해 주자. 필수가 아니기 때문에 안해도 된다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-11.png",alt:"AWS IAM 계정 별칭 설정"}),"\n",l.createElement(n.p,null,"원하는 별칭을 입력하고 생성 버튼을 눌러주면 이제 계정 별칭을 이용해서 로그인도 가능해진다."),"\n",l.createElement(n.h3,null,"IAM 사용자 로그인"),"\n",l.createElement(n.p,null,"IAM 사용자를 생성했으니 이제 로그인을 해보자."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-12.png",alt:"AWS IAM 사용자 로그인 1"}),"\n",l.createElement(n.p,null,"Root 사용자 로그아웃을 한 후에 로그인 페이지로 가서 IAM 사용자를 선택하고 계정 ID나 별칭을 입력해준다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-13.png",alt:"AWS IAM 사용자 로그인 2"}),"\n",l.createElement(n.p,null,"방금 생성한 IAM 사용자를 입력하고 사용자를 생성했을 때 확인한 비밀번호를 같이 입력해준다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-14.png",alt:"AWS IAM 사용자 로그인 3"}),"\n",l.createElement(n.p,null,"로그인이 성공적으로 완료되었으면 비밀번호 변경 창이 뜬다. 원하는 비밀번호를 입력한후 확인 버튼을 눌러준다."),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-15.png",alt:"AWS IAM 사용자 로그인 4"}),"\n",l.createElement(n.p,null,"이렇게 IAM 사용자 생성이 완료 되었다. 앞으로 AWS에 접속할 일이 있을 땐 요 IAM 계정을 사용하면 된다. 추가로 같이 작업하고 싶은 동료가 있으면 위의 과정을 거쳐 IAM 사용자를 추가해주면 된다."),"\n",l.createElement(n.h2,null,"마무리"),"\n",l.createElement(n.img,{src:"/images/posts/aws-iam-16.png",alt:"IAM 보안 상태"}),"\n",l.createElement(n.p,null,"IAM 대시보드 창에 접속하면 현재 IAM 보안 상태를 확인할 수 있다. 이 보안 상태 항목들은 필수로 조치해야 할 항목들은 아니나 AWS를 좀 더 안전하게 사용하려면 조치를 취해두는게 좋다."),"\n",l.createElement(n.p,null,"IAM 사용자 생성및 그룹 생성은 이미 해놨기 때문에 완료 표시가 뜨는건 알겠는데 루트 액세스 키 삭제는 뭘 딱히 안했는데 왜 뜨는지 모르겠다. 예전에 Serverless를 사용하려고 프로그래밍 액세스 방식으로 IAM 액세스 키를 발급받은 적이 있는데 이거 떄문인거 같기도 하고... 이 부분은 나중에 좀 더 공부를 한 후에 정리를 해봐야겠다."),"\n",l.createElement(n.h2,null,"Reference"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html"},"IAM이란?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://tech.cloud.nongshim.co.kr/2018/10/11/%EC%B4%88%EB%B3%B4%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-aws-%EC%9B%B9%EA%B5%AC%EC%B6%95-2-iam-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0/"},"[초보자를 위한 AWS 웹구축] 2. IAM 유저 및 MFA 생성하기")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://www.44bits.io/ko/post/first_actions_for_setting_secure_account#%EB%A3%A8%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4-%ED%82%A4-%EC%82%AD%EC%A0%9C"},"아마존 웹 서비스 계정 생성 후 해야하는 IAM 보안 조치")),"\n"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},o=t(2877),c=t(7736),i=t(407),u=t(7735),m=t(685),d=t(2248),g=t(8066),E=t(4848);function p(e){var n,t;let{data:l,children:r}=e;const{date:s,tags:p,title:A}=null!==(n=null==l||null===(t=l.mdx)||void 0===t?void 0:t.frontmatter)&&void 0!==n?n:{};return(0,E.jsx)(c.i,{children:(0,E.jsxs)(o.m,{className:g.q,children:[(0,E.jsx)(d.l,{className:g.V,title:A}),(0,E.jsx)(u.l,{date:s}),(0,E.jsx)(m.I,{tags:p}),(0,E.jsx)(i.E,{children:(0,E.jsx)(a.x,{children:r})})]})})}function A(e){return l.createElement(p,e,l.createElement(s,e))}},407:function(e,n,t){t.d(n,{E:function(){return s}});var l=t(4164),a="post-layout-content-module--post-layout-content-root--01754",r=t(4848);function s(e){let{children:n,className:t,...s}=e;return(0,r.jsx)("div",{className:(0,l.$)(a,t),...s,children:n})}},7735:function(e,n,t){t.d(n,{l:function(){return s}});var l=t(4164),a="post-layout-date-module--post-layout-date-root--f34d1",r=t(4848);function s(e){let{className:n,date:t,...s}=e;return(0,r.jsx)("span",{className:(0,l.$)(a,n),...s,children:t})}},685:function(e,n,t){t.d(n,{I:function(){return o}});var l=t(9143),a=t(4194),r="post-layout-module--post-layout-tags--837df",s=t(4848);function o(e){let{tags:n}=e;return(0,s.jsx)(l.Y,{className:r,children:n.map((e=>(0,s.jsx)(a.Link,{to:"/tags/"+e,children:(0,s.jsx)(l.Y.Tag,{tag:e})},e)))})}},2248:function(e,n,t){t.d(n,{l:function(){return s}});var l=t(4164),a="post-layout-title-module--post-layout-title-root--88374",r=t(4848);function s(e){let{className:n,title:t,...s}=e;return(0,r.jsx)("h1",{className:(0,l.$)(a,n),...s,children:t})}},9143:function(e,n,t){t.d(n,{Y:function(){return r}});var l=t(4164),a=t(4848);const r=Object.assign((function(e){let{children:n,className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.$)("tags-module--tags-root--e3461",t),...r,children:n})}),{Tag:function(e){let{className:n,tag:t,...r}=e;return(0,a.jsx)("span",{className:(0,l.$)("tag-module--tag-root--aae01",n),...r,children:t})}})},2877:function(e,n,t){t.d(n,{m:function(){return s}});var l=t(4164),a="container-module--container-root--3b208",r=t(4848);function s(e){let{children:n,className:t,...s}=e;return(0,r.jsx)("div",{className:(0,l.$)(a,t),...s,children:n})}},2629:function(e,n,t){t.d(n,{$:function(){return s}});var l=t(4164),a="basic-layout-module--basic-layout-root--a11e0",r=t(4848);function s(e){let{children:n,className:t,...s}=e;return(0,r.jsx)("div",{className:(0,l.$)(a,t),...s,children:n})}},7736:function(e,n,t){t.d(n,{i:function(){return f}});var l=t(4194),a=t(4164),r="header-module--about--32ac9",s="header-module--header-logo--5bbdc",o="header-module--header-navigation--24bcb",c="header-module--header-navigation-item--ba248",i="header-module--header-navigation-item-link--d6da9",u="header-module--header-navigation-list--3815c",m="header-module--header-root--01ceb",d="header-module--tags--eb332",g=t(4848);function E(){return(0,g.jsxs)("header",{className:m,children:[(0,g.jsx)(l.Link,{to:"/",children:(0,g.jsx)("img",{src:"/images/logo.png",srcSet:"/images/logo-small.png 200w, /images/logo.png 300w",sizes:"(max-width: 360px) 200px, 300px",alt:"dev.kyoungah.me",className:s})}),(0,g.jsx)("nav",{className:o,children:(0,g.jsxs)("ul",{className:u,children:[(0,g.jsx)("li",{className:c,children:(0,g.jsx)(l.Link,{to:"/tags",children:(0,g.jsx)("span",{"aria-label":"tags",className:(0,a.$)(i,d)})})}),(0,g.jsx)("li",{className:c,children:(0,g.jsx)("a",{href:"/about",rel:"noopener",target:"_blank",children:(0,g.jsx)("span",{"aria-label":"about",className:(0,a.$)(i,r)})})})]})})]})}var p="footer-module--footer-root--795ff";function A(){return(0,g.jsxs)("footer",{className:p,children:[(0,g.jsx)("span",{children:"Powered by Gatsby, Hosted by GitHub Pages."}),(0,g.jsxs)("span",{children:["©",(0,g.jsx)("a",{href:"https://github.com/partykyoung",rel:"noreferrer",target:"_blank",children:"KyoungAh"}),", All rights reserved."]})]})}var h=t(2629);function f(e){let{children:n}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(E,{}),(0,g.jsx)(h.$,{children:n}),(0,g.jsx)(A,{})]})}},8066:function(e,n,t){t.d(n,{V:function(){return a},q:function(){return l}});var l="post-layout-module--post-layout-container--f40b5",a="post-layout-module--post-layout-title--1c575"},8453:function(e,n,t){t.d(n,{R:function(){return s},x:function(){return o}});var l=t(6540);const a={},r=l.createContext(a);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:n},e.children)}},4164:function(e,n,t){function l(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=l(e[n]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,n,t=0,a="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=l(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{$:function(){return a}})}}]);
//# sourceMappingURL=component---src-app-templates-post-template-post-layout-ui-tsx-content-file-path-posts-2020-07-19-etc-aws-iam-md-ebcf2f3146f5658e8300.js.map