import{s as S,e as _,t as f,a as x,b as d,d as g,r as h,g as u,f as y,i as m,j as v,y as $,n as E,o as j}from"../chunks/scheduler.D_nhxABO.js";import{S as q,i as C}from"../chunks/index.DJPTx4q_.js";import{s as H}from"../chunks/entry.BtrG9_8G.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return j(s,k,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),C(this,t,z,w,S,{})}};export{F as component};