import{t as z}from"./index.DJPTx4q_.js";import{x as B}from"./scheduler.D_nhxABO.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,w){n.d(1),w.delete(n.key)}function H(n,w,S,C,A,g,f,j,p,k,u,q){let c=n.length,d=g.length,i=c;const m={};for(;i--;)m[n[i].key]=i;const h=[],o=new Map,a=new Map,M=[];for(i=d;i--;){const e=q(A,g,i),s=S(e);let t=f.get(s);t?M.push(()=>t.p(e,w)):(t=k(s,e),t.c()),o.set(s,h[i]=t),s in m&&a.set(s,Math.abs(i-m[s]))}const v=new Set,x=new Set;function y(e){z(e,1),e.m(j,u),f.set(e.key,e),u=e.first,d--}for(;c&&d;){const e=h[d-1],s=n[c-1],t=e.key,l=s.key;e===s?(u=e.first,c--,d--):o.has(l)?!f.has(t)||v.has(t)?y(e):x.has(l)?c--:a.get(t)>a.get(l)?(x.add(t),y(e)):(v.add(l),c--):(p(s,f),c--)}for(;c--;){const e=n[c];o.has(e.key)||p(e,f)}for(;d;)y(h[d-1]);return B(M),h}export{G as d,F as e,H as u};