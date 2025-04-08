import {w,O as oe,a6 as _,b4 as Tk,c as ck,bA as x,br as $p,V as Vk,W as Wh,ak as yR,C as CE,_ as _p,f as pR,h as Tp,Y as Yk,aS as St,o as ot,aN as ps,aO as uk,aZ as Ei,aR as k,r as H,x as tR,F as Fw,l as lw,I as tk,n as nR,L as nk}from'./main-BP72IIBJ.js';var A="docs-reference-api-section",R="member-id";var i=(()=>{class o{destroyRef=w(St);document=w(_);router=w(ot);isBrowser=ps(w(uk));setupListeners(r){this.isBrowser&&this.setupCodeToCListeners(r);}setupCodeToCListeners(r){let e=this.document.querySelector(`.${r}`);e&&Ei(e,"click").pipe(k(this.destroyRef)).subscribe(c=>{if(c.target instanceof HTMLAnchorElement){c.stopPropagation();return}let t=c.target instanceof HTMLButtonElement?c.target:this.findButtonElement(c.target),m=this.getMemberId(t);m&&this.router.navigate([],{fragment:m,replaceUrl:true});});}getMemberId(r){if(r)return r.attributes.getNamedItem(R)?.value}findButtonElement(r){let e=r.parentElement;for(;e;){if(e instanceof HTMLButtonElement)return e;e=e.parentElement;}return null}static \u0275fac=function(e){return new(e||o)};static \u0275prov=H({token:o,factory:o.\u0275fac})}return o})();function j(o,H){if(o&1){let r=tR();_p(0,"docs-viewer",2),Fw("contentLoaded",function(){tk(r);let c=nR();return nk(c.onContentLoaded())}),Tp();}o&2&&lw("docContent",H.contents)("hasToc",true);}var B="docs-highlighted-card",te=(()=>{class o{referenceScrollHandler=w(i);route=w(oe);document=w(_);renderer=w(Tk);highlightedElement=null;docContent=ck();urlFragment=x(this.route.fragment);constructor(){$p(()=>this.highlightCard());}onContentLoaded(){this.referenceScrollHandler.setupListeners(A),this.scrollToSectionLegacy(),this.highlightCard();}scrollToSectionLegacy(){let e=this.route.snapshot.queryParams.tab;if(e){let c=this.document.getElementById(e);c&&setTimeout(()=>{c.scrollIntoView({behavior:"smooth"});},100);}}highlightCard(){this.highlightedElement&&(this.renderer.removeClass(this.highlightedElement,B),this.highlightedElement=null);let r=this.urlFragment();if(r){let e=this.document.getElementById(r);e&&this.renderer.addClass(e,B),this.highlightedElement=e;}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=Vk({type:o,selectors:[["adev-reference-page"]],inputs:{docContent:[1,"docContent"]},features:[yR([i])],decls:3,vars:1,consts:[[3,"docContent","hasToc"],["id","jump-msg",1,"cdk-visually-hidden"],[3,"contentLoaded","docContent","hasToc"]],template:function(e,c){if(e&1&&(CE(0,j,1,2,"docs-viewer",0),_p(1,"div",1),pR(2,"\u8DF3\u8F6C\u5230\u8BE6\u60C5"),Tp()),e&2){let t;Yk((t=c.docContent())?0:-1,t);}},dependencies:[Wh],styles:['[_nghost-%COMP%]{display:block;width:100%;max-width:var(--page-width);padding:var(--layout-padding) 0 1rem var(--layout-padding);box-sizing:border-box}@media (max-width: 1200px){[_nghost-%COMP%]{padding:var(--layout-padding);max-width:none}}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--septenary-contrast);border-radius:10px;transition:background-color .3s ease}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95rem}[_nghost-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.875rem}[_nghost-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.6rem}  .docs-code pre{margin-block:0}  .docs-reference-header~.docs-deprecated{margin-block-start:.5rem}  .docs-reference-header>p{color:var(--secondary-contrast);margin-block-start:0;margin-block-end:1.5rem}  .docs-reference-header .docs-reference-title{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-block-end:0;gap:.5rem}  .docs-reference-header .docs-reference-title>div{margin-block:.67em;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}  .docs-reference-header .docs-reference-title>div h1{margin-block:0}  .docs-reference-header .docs-reference-title a{fill:var(--quinary-contrast);transition:fill .3s ease}  .docs-reference-header .docs-reference-title a:hover{fill:var(--primary-contrast)}  .docs-reference-header .docs-reference-category{color:var(--gray-400);font-size:.875rem;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem}  .docs-reference-header .docs-code{margin-block-end:1.5rem}  .docs-reference-section-heading{padding-block-start:3rem}  .docs-reference-section-heading--sub{padding-block-start:1rem}  .docs-reference-section-heading>a{color:inherit}  .docs-reference-section-heading>a:after{content:"\\e157";font-family:Material Symbols Outlined;opacity:0;margin-left:8px;vertical-align:middle;color:var(--quaternary-contrast);font-size:clamp(18px,1.25em,30px);transition:opacity .3s ease}  .docs-reference-section-heading>a:hover:after{opacity:1}  .docs-reference-members{box-sizing:border-box;width:100%;display:flex;flex-direction:column;gap:20px}  .docs-reference-members:not(:first-child){margin-top:1rem}  .docs-reference-members .docs-reference-member-card{border:1px solid var(--senary-contrast);border-radius:.25rem;position:relative;transition:border .3s ease}  .docs-reference-members .docs-reference-member-card:before{content:"";inset:-1px;position:absolute;background:transparent;border-radius:.35rem;z-index:0}  .docs-reference-members .docs-reference-member-card.docs-highlighted-card{box-shadow:10px 4px 40px #00000003}  .docs-reference-members .docs-reference-member-card.docs-highlighted-card:before{background:var(--red-to-pink-to-purple-horizontal-gradient)}  .docs-reference-members .docs-reference-member-card>p{padding-inline:1.25rem;margin-block-end:0}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header{display:flex;align-items:center;justify-content:space-between;border-radius:.25rem .25rem 0 0;background-color:var(--octonary-contrast);position:relative;z-index:10;padding:.7rem 1rem;gap:.5rem;flex-wrap:wrap;transition:background-color .3s ease,border .3s ease}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header:focus{outline:none}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header:has(+.docs-reference-card-body:empty){border-radius:.25rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header code{font-size:.875rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header code:has(pre){padding:0}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header code:not(pre *){padding:0 .3rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header pre{margin:0;overflow:auto}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header h3{display:inline-block;font-family:var(--code-font);font-size:1rem;letter-spacing:-.025rem;margin:0}  .docs-reference-members .docs-reference-member-card .docs-reference-card-header span{font-size:.875rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body{padding:.25rem 1.25rem;background:var(--septenary-contrast);transition:background-color .3s ease;color:var(--quaternary-contrast);border-radius:0 0 .25rem .25rem;position:relative;z-index:10}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body:empty{display:none}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body:first-child{border-radius:.25rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body hr{margin-block:2rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-code{margin-block-end:1rem}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message{border-block-end:1px solid var(--senary-contrast)}  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message .docs-deprecated{color:var(--page-background);background-color:var(--quaternary-contrast);width:max-content;border-radius:.25rem;padding:.1rem .25rem;margin-block-start:1rem}  .docs-reference-api-section .docs-code{box-sizing:border-box;width:100%;overflow:hidden;padding:0}  .docs-reference-api-section .docs-code button{transition:background-color .3s ease}  .docs-reference-api-section .docs-code button.shiki-ln-line-highlighted{background-color:var(--senary-contrast)}  .docs-reference-api-section .docs-code button:hover{background-color:var(--septenary-contrast)}  .docs-reference-api-section .docs-code button:focus{background-color:var(--senary-contrast)}  .docs-reference-api-section .docs-code button:focus span{background-color:inherit}  .docs-reference-api-section .docs-code button[docs-copy-source-code]{display:none}  .docs-reference-api-section code{margin-block:0}  .docs-reference-api-section pre{white-space:pre;overflow-x:auto;margin:0}  .docs-reference-member-card .docs-reference-card-item:has(~.docs-reference-card-item){border:1px solid var(--senary-contrast);margin-block:1rem;border-radius:.25rem;padding-inline:1rem}  .docs-reference-member-card .docs-reference-card-item:last-child:not(:first-of-type){border:1px solid var(--senary-contrast);margin-block:1rem;border-radius:.25rem;padding-inline:1rem}  .docs-reference-member-card .docs-reference-card-item span{display:inline-block;font-size:.875rem}  .docs-reference-member-card .docs-reference-card-item code{font-size:.875rem}  .docs-reference-member-card .docs-reference-card-item .docs-function-definition:has(*){border-block-end:1px solid var(--senary-contrast)}  .docs-reference-member-card .docs-reference-card-item .docs-param-group{margin-block-start:1rem}  .docs-reference-member-card .docs-reference-card-item .docs-param-group:not(:has(~.docs-param-group)){margin-block:1rem}  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name{color:var(--vivid-pink);font-family:var(--code-font);margin-inline-end:.25rem}  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name:after{content:":"}  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-parameter-description p:first-child{margin-block-start:0}  .docs-reference-member-card .docs-reference-card-item .docs-param-keyword{color:var(--primary-contrast);font-family:var(--code-font);margin-inline-end:.5rem}  .docs-reference-member-card .docs-reference-card-item .docs-return-type{padding-block:1rem}  .docs-reference-member-card .docs-reference-card-item .docs-return-type:not(.docs-function-definition+.docs-return-type){border-block-start:1px solid var(--senary-contrast)}'],changeDetection:0})}return o})();export{te as default};