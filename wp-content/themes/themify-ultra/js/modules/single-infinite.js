((t,e)=>{"use strict";let o=!1;const i=e.tfId("body");if(i){const n=t=>{const o=t.tfId("tf_infinity_css");if(o){const t=e.createElement("div");return t.appendChild(o.content),JSON.parse(t.innerHTML)}return{}},l={},r=n(e);for(let t in r)r[t].m||(l[t]=!0);i.tfOn("infinitebeforeloaded",(i=>{const r=i.detail.d,s=r.tfId("commentform");if(s){let t=s.querySelector('input[name="comment_post_ID"]');if(t){t=t.value;for(let e=["comment","author","email","url"],o=e.length-1;o>-1;--o){let i=s.querySelector("#"+e[o]),n=s.querySelector('label[for="'+e[o]+'"]');i&&(i.id=e[o]+"-"+t),n&&n.setAttribute("for",e[o]+"-"+t)}}}!1===o&&(o=!0,e.body.classList.remove("content-right","content-left","sidebar2","sidebar1","single-split-layout","sidebar-none"));const f=n(r),c=Object.keys(f).length,a=r.querySelector(".tf_single_scroll_wrap");if(a){a.classList.add("tf_opacity");let e=!1,o=0;for(let i in f)l[i]||f[i].m||(l[i]=!0,e=!0,t.loadCss(f[i].s,null,f[i].v).then((()=>{o===c&&a.classList.remove("tf_opacity")}))),++o;!1===e&&a.classList.remove("tf_opacity")}}),{passive:!0}),t.infinity(i,{id:"#body",scrollThreshold:!0,history:!0})}})(Themify,document);