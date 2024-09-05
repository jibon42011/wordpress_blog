let ThemifyFixedHeader;((e,i,t,d)=>{"use strict";ThemifyFixedHeader={active:null,headerWrap:null,init(e={}){const t=this,h=e.headerWrap||i.tfId("headerwrap");if(null!==h&&0!==h.length){if(t.headerWrap=h,t.active=!1,(e.hasHeaderRevealing||i.body.classList.contains("revealing-header"))&&t.headerRevealing(e.revealingInvert),!1!==e.resize){let e,t;new ResizeObserver((h=>{clearTimeout(t),t=d((()=>{const t=h[0].borderBoxSize[0].blockSize;t!==e&&(e=t,i.documentElement.style.setProperty("--tf_fixed_h",t+"px"))}),20)})).observe(h)}if(!1!==e.watch){const e=i.createElement("div"),d=e.style;e.className="tf_hidden tf_w",d.height="0",d.contain="strict",d.contentVisibility="hidden",h.after(e),new IntersectionObserver(((e,i)=>{const{boundingClientRect:d,rootBounds:h}=e[0];h?!1===t.active&&d.bottom<h.top?t.enable():!0===t.active&&d.bottom<h.bottom&&t.disable():i.disconnect()}),{threshold:[0,1]}).observe(e)}}},headerRevealing(d){let h=0;const a=["scroll"],r=()=>{const e=t.scrollY;if(!1===this.active||h===e)return;const a=d?h<e:h>=e,r=i.body.classList,n=this.headerWrap.classList;h=e,a||0===h||r.contains("mobile-menu-visible")||r.contains("slide-cart-visible")?n.remove("header_hidden"):0<h&&!n.contains("header_hidden")&&n.add("header_hidden")};e.isTouch&&a.push("touchstart","touchmove"),t.tfOn(a,r,{passive:!0}),r()},enable(){!1===this.active&&(this.active=!0,(async()=>{const e=t.themifyScript?.sticky_header;if(e?.src){let t=i.tfId("site-logo");if(t){t=t.tfTag("a")[0]||t;const i=new Image,d=t.tfClass("site-logo-image")[0];i.src=e.src,i.alt=d?.alt||t.tfTag("span")[0]?.textContent||"",i.className="tf_sticky_logo",(e.imgwidth||d)&&(i.width=e.imgwidth||d.width),(e.imgheight||d)&&(i.height=e.imgheight||d.height),themifyScript.sticky_header=null;try{await i.decode()}catch(e){}t.prepend(i)}}})().finally((()=>{i.body.classList.add("fixed-header-on"),this.headerWrap.classList.add("fixed-header")})))},disable(){!0===this.active&&(i.body.classList.remove("fixed-header-on"),this.headerWrap.classList.remove("fixed-header"),this.active=!1)}},e.on("tf_fixed_header_init",(i=>{!1===e.is_builder_active&&ThemifyFixedHeader.init(i)})).on("tf_fixed_header_enable",(()=>{!1===e.is_builder_active&&ThemifyFixedHeader.enable()})).on("tf_fixed_header_disable",(()=>{ThemifyFixedHeader.disable()})).on("tf_fixed_header_remove_revelaing",(()=>{ThemifyFixedHeader.headerWrap?.classList.remove("header_hidden")}))})(Themify,document,window,setTimeout);