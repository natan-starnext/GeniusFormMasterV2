// GENIUS FORM MASTER MOBILE — edit src/mobile/*.js and run "npm run build:mobile" instead of hand-editing this file.
(()=>{var E=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var Dt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var i,N,M=E(()=>{i={CONTACT_FIRST_NAME:'[name="fname"]',CONTACT_LAST_NAME:'[name="lname"]',CONTACT_EMAIL:'[name="email"]',CONTACT_EMAIL_CONFIRMATION:'[name="emailConfirm"]',CONTACT_PHONE_NUMBER:'[name="phone"]',CONTACT_MARKETING_CHECKBOX:"#allowSubscribe",SUMMARY_PAGE_READY:'[automation-payment-step-type="checkout-page"]',PAYMENT_DROPDOWN:'[automation-payment-field-type="dropdown"]',PAYER_FIRST_NAME:'[name="fname"]',PAYER_LAST_NAME:'[name="lname"]',PAYER_EMAIL:'[name="femail"]',PAYER_PHONE_NUMBER:'[name="fphone"]',AGREEMENT_CHECKBOX:'[automation-payment-field-type="agreement-checkbox"]',APPROVE_AND_CONTINUE_BTN:'[automation-payment-field-type="approve-and-continue-button"]',PASSENGER_CARD:"[automation-passenger-number]",PASSENGER_TYPE_ATTR:"automation-passenger-type",PASSENGER_FIRST_NAME:'[name="paxFName"]',PASSENGER_LAST_NAME:'[name="paxLName"]',BIRTHDAY:'[name="paxBirthDate"]',PASSPORT:'[name="passportNumber"]',PASSPORT_EXPIRATION:'[name="passportExpirationDate"]',GENDER_DROP:"[automation-passenger-gender-dropdown]",GENDER_MALE:'[automation-passenger-gender-option-value="male"]',GENDER_FEMALE:'[automation-passenger-gender-option-value="female"]',PASSPORT_NATION_DROPDOWN:'[automation-passport-field-type="nation"]',PASSPORT_ISSUING_COUNTRY_DROPDOWN:'[automation-passport-field-type="issuing-country"]',PASSPORT_NATION_IL:'[automation-passport-nation-option="IL"]',PASSPORT_ISSUING_COUNTRY_IL:'[automation-passport-issuing-country-option="IL"]',BAGGAGE_GROUP:'[automation-baggage-group="baggage"]',TROLLEY_GROUP:'[automation-baggage-group="trolley"]',BAGGAGE_INVALID_GROUP:'[automation-baggage-valid="false"]',BAGGAGE_ITEM:'[automation-baggage-item-type="baggage"]',TROLLEY_ITEM:'[automation-baggage-item-type="trolley"]',BAGGAGE_INCLUDED_ATTR:"automation-baggage-item-included",BAGGAGE_SELECTED_ATTR:"automation-baggage-item-selected",BAGGAGE_DIRECTION_ATTR:"automation-baggage-item-direction",BAGGAGE_KEY_ATTR:"automation-baggage-item-key",BAGGAGE_QUANTITY_ATTR:"automation-baggage-item-quantity",BAGGAGE_WEIGHT_ATTR:"automation-baggage-item-weight",BAGGAGE_VALID_ATTR:"automation-baggage-valid",ANCILLARY_SERVICE_SKIP:"[automation-service-package-skip]",ANCILLARY_SERVICE_SELECT:"[automation-service-package-select]",ANCILLARIES_CONTINUE:'[automation-container-action="ancillaries-continue"]',SEAT_PACKAGE_ACTION:"[automation-seat-package-action]",SEAT_ACTION:"[automation-seat-action]",SEATS_ANCILLARY:'[automation-seat-package-action="SEATS"]',SEATS_SKIP_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="skip-seat"]',SEATS_SELECT_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="select-seat"]'},N={he:{filled:"הטופס מולא!",fillError:"שגיאה בזמן מילוי",fillFailed:"הטופס לא מולא",extensionActionFailed:"פעולה נכשלה בתוסף",altQFillFailed:"Alt+Q לא הצליח להפעיל מילוי",altQNotStarted:"Alt+Q לא הופעל",ancillarySkipped:"דילוג שירותים נלווים בוצע",ancillarySkipNotFound:"לא נמצא כפתור דילוג שירותים נלווים",ancillaryGlobalSelectDone:"כל השירותים הנלווים נבחרו, הושבה דולגה",ancillaryGlobalSkipDone:"כל השירותים הנלווים דולגו, הושבה דולגה",fieldsFilled:e=>`${e} שדות מולאו בהצלחה`,fieldsPartiallyFilled:(e,t,n)=>`${e} שדות מולאו, ${t} נכשלו`+(n?` — ${n}`:""),cannotStartFillHere:"לא ניתן להפעיל מילוי בעמוד הזה",cannotFillRefresh:"לא ניתן למלא את השדות - רעננו את העמוד ונסו שוב",noProfileFound:"לא נמצא פרופיל מתאים לעמוד הזה",noSavedFieldsToFill:"לא נמצאו שדות שמורים למילוי",dir:"rtl"},en:{filled:"Form Filled!",fillError:"Error while filling",fillFailed:"The form was not filled",extensionActionFailed:"Extension action failed",altQFillFailed:"Alt+Q could not start autofill",altQNotStarted:"Alt+Q was not started",ancillarySkipped:"Ancillary services skipped",ancillarySkipNotFound:"Ancillary skip button was not found",ancillaryGlobalSelectDone:"All ancillary services selected, seats skipped",ancillaryGlobalSkipDone:"All ancillary services skipped, seats skipped",fieldsFilled:e=>`${e} fields filled successfully`,fieldsPartiallyFilled:(e,t,n)=>`${e} fields filled, ${t} failed`+(n?` — ${n}`:""),cannotStartFillHere:"Cannot start fill on this page",cannotFillRefresh:"Could not fill the fields - refresh the page and try again",noProfileFound:"No matching profile found for this page",noSavedFieldsToFill:"No saved fields found to fill",dir:"ltr"}}});async function k(e,{timeoutMs:t=750,intervalMs:n=150}={}){let o=Date.now();for(;;){let r;try{r=e()}catch{r=!1}if(r)return!0;if(Date.now()-o>=t)return!1;await new Promise(a=>setTimeout(a,n))}}async function Pe(e,t){var g;if(!e)return!1;let n=e.tagName==="INPUT"&&(e.type==="checkbox"||e.type==="radio"),o=!n&&(e.getAttribute("role")==="checkbox"||e.hasAttribute("aria-checked"));if(n||o){let y=t===!0||t==="true";return(n?e.checked:e.getAttribute("aria-checked")==="true")!==y&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),n?e.checked===y:!0}let r=e.readOnly===!0;try{e.readOnly=!0}catch{}e.focus({preventScroll:!0});try{e.readOnly=r}catch{}let a=e.value,s=window.HTMLInputElement.prototype;e.tagName==="SELECT"&&(s=window.HTMLSelectElement.prototype),e.tagName==="TEXTAREA"&&(s=window.HTMLTextAreaElement.prototype);let l=(g=Object.getOwnPropertyDescriptor(s,"value"))==null?void 0:g.set;l?l.call(e,t):e.value=t,e.setAttribute("value",t);let c=e._valueTracker;c&&c.setValue(a),["keydown","keypress","input","keyup","change"].forEach(y=>{e.dispatchEvent(new Event(y,{bubbles:!0,composed:!0}))}),e.blur(),e.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}));let p=String(e.value||"").trim(),f=String(t||"").trim();return p===f||f.length>0&&p.length>0?!0:f.length===0?p===f:k(()=>String(e.value||"").trim().length>0,{timeoutMs:400,intervalMs:100})}function D(e){return Array.from(document.querySelectorAll(e)).filter(t=>{let n=t.getBoundingClientRect(),o=window.getComputedStyle(t);return n.width>0&&n.height>0&&o.visibility!=="hidden"&&o.display!=="none"&&o.opacity!=="0"})}async function L(e,t=1500){let n=Date.now();for(;Date.now()-n<t;){let o=D(e);if(o.length>0)return o[o.length-1];await new Promise(r=>setTimeout(r,40))}return null}function Y(e){if(!e)return!1;let t=`fme_click_${Date.now()}_${Math.random().toString(36).slice(2)}`;e.setAttribute("data-fme-click-token",t);let n=document.createElement("script");return n.textContent=`
        (function() {
            const el = document.querySelector('[data-fme-click-token="${t}"]');
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const clientX = rect.left + rect.width / 2;
            const clientY = rect.top + rect.height / 2;

            const base = {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX,
                clientY,
                screenX: clientX,
                screenY: clientY,
                button: 0,
                buttons: 1
            };

            try {
                el.focus && el.focus({ preventScroll: true });
            } catch (e) {}

            try {
                if (typeof PointerEvent !== "undefined") {
                    el.dispatchEvent(new PointerEvent("pointerover", {
                        ...base,
                        pointerType: "mouse",
                        isPrimary: true
                    }));

                    el.dispatchEvent(new PointerEvent("pointerenter", {
                        ...base,
                        pointerType: "mouse",
                        isPrimary: true
                    }));

                    el.dispatchEvent(new PointerEvent("pointerdown", {
                        ...base,
                        pointerType: "mouse",
                        isPrimary: true
                    }));
                }

                el.dispatchEvent(new MouseEvent("mouseover", base));
                el.dispatchEvent(new MouseEvent("mouseenter", base));
                el.dispatchEvent(new MouseEvent("mousedown", base));

                if (typeof PointerEvent !== "undefined") {
                    el.dispatchEvent(new PointerEvent("pointerup", {
                        ...base,
                        pointerType: "mouse",
                        isPrimary: true
                    }));
                }

                el.dispatchEvent(new MouseEvent("mouseup", base));
                el.dispatchEvent(new MouseEvent("click", base));

                if (typeof el.click === "function") {
                    el.click();
                }

                el.dispatchEvent(new Event("input", {
                    bubbles: true,
                    composed: true
                }));

                el.dispatchEvent(new Event("change", {
                    bubbles: true,
                    composed: true
                }));
            } catch (e) {
                // (אין לוג כאן בכוונה: הקוד הזה מוזרק לעמוד כמחרוזת, ולכן esbuild --drop:console לא מגיע אליו והוא היה מדפיס בפרודקשן.)
            }
        })();
    `,document.documentElement.appendChild(n),n.remove(),setTimeout(()=>{try{e.removeAttribute("data-fme-click-token")}catch{}},300),!0}function B(e){if(!e)return;let t=e.getBoundingClientRect();if(!(t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth))try{e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"})}catch{try{e.scrollIntoView(!1)}catch{}}}function Ne(){try{if(window.matchMedia)return window.matchMedia("(pointer: coarse)").matches}catch{}return Number(navigator.maxTouchPoints||0)>0}function ke(e,t,n){if(typeof TouchEvent>"u"||typeof Touch>"u")return!1;try{let o=new Touch({identifier:Ot++,target:e,clientX:t,clientY:n,screenX:t,screenY:n,pageX:t,pageY:n,radiusX:11,radiusY:11,force:1}),r={bubbles:!0,cancelable:!0,view:window};return e.dispatchEvent(new TouchEvent("touchstart",{...r,touches:[o],targetTouches:[o],changedTouches:[o]})),e.dispatchEvent(new TouchEvent("touchend",{...r,touches:[],targetTouches:[],changedTouches:[o]})),!0}catch{return!1}}function ee(e){if(!e)return!1;try{B(e)}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r=Ne(),a={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},s={...a,pointerId:1,pointerType:r?"touch":"mouse",isPrimary:!0,width:r?23:1,height:r?23:1,pressure:.5};try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",s)),e.dispatchEvent(new PointerEvent("pointerenter",s)),e.dispatchEvent(new PointerEvent("pointerdown",s))),r&&ke(e,n,o),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...s,buttons:0,pressure:0})),e.dispatchEvent(new MouseEvent("mouseover",a)),e.dispatchEvent(new MouseEvent("mousedown",a)),e.dispatchEvent(new MouseEvent("mouseup",{...a,buttons:0})),e.dispatchEvent(new MouseEvent("click",{...a,buttons:0}))}catch{return!1}return!0}function I(e){if(!e)return!1;try{B(e)}catch{try{e.scrollIntoView(!1)}catch{}}try{e.focus({preventScroll:!0})}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},a=Ne(),s=a?"touch":"mouse";try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerenter",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerType:s,isPrimary:!0}))),a&&ke(e,n,o),e.dispatchEvent(new MouseEvent("mouseover",r)),e.dispatchEvent(new MouseEvent("mouseenter",r)),e.dispatchEvent(new MouseEvent("mousedown",r)),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new MouseEvent("mouseup",r)),e.dispatchEvent(new MouseEvent("click",r)),typeof e.click=="function"&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch{}return!0}function _(e){if(!e)return null;let t=e.getBoundingClientRect();if(!t||t.width<=0||t.height<=0)return e;let n=t.left+t.width/2,o=t.top+t.height/2;return document.elementFromPoint(n,o)||e}function v(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function te(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function G(e){return Array.from(document.querySelectorAll(e)).filter(te)}var Ot,A,F=E(()=>{Ot=1;A=e=>new Promise(t=>setTimeout(t,e))});function It(e){return!e||typeof e!="string"?!1:e.includes("automation-service-package-skip")||e.includes("automation-service-package-select")||e.includes("automation-seat-action")}function Re(e){return!!(e&&e.selector&&It(e.selector))}function _t(){let e=G(i.ANCILLARIES_CONTINUE)[0];if(e)try{e.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"});return}catch{}try{window.scrollBy({top:520,left:0,behavior:"instant"})}catch{window.scrollBy(0,520)}}async function Gt(e,t){if(!e||!te(e))return!1;let n=e.querySelector(".radio-circle")||e.querySelector('input[type="radio"]')||e.querySelector('[role="radio"]')||e;try{return n.click(),n.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0}catch{return!1}}function Me(e){return e==="select_services"?"select_services":"skip_all"}function Ft(){try{return Me(localStorage.getItem("fmeAncillaryMode"))}catch{return"skip_all"}}function ne(){return new Promise(e=>{try{chrome.storage.local.get(["fmeAncillaryMode"],t=>{e(Me(t==null?void 0:t.fmeAncillaryMode))})}catch{e(Ft())}})}async function oe(){if(!re())return null;let e=await ne(),t=e==="select_services"?[i.ANCILLARY_SERVICE_SELECT,i.SEATS_SKIP_OPTION]:[i.ANCILLARY_SERVICE_SKIP,i.SEATS_SKIP_OPTION],n=0,o=new Set;for(let r of t){let a=G(r);for(let s of a){if(!s||o.has(s))continue;o.add(s),await Gt(s,e==="select_services"?"select-all-services-and-skip-seats":"skip-all-services-and-seats")&&n++}}return n>0?(_t(),!0):!1}function re(){return G(i.ANCILLARY_SERVICE_SKIP).length>0||G(i.SEAT_PACKAGE_ACTION).length>0||G(i.SEAT_ACTION).length>0}var De=E(()=>{M();F()});function xt(e){if(!e)return!1;if(e.hasAttribute(i.PASSENGER_TYPE_ATTR))return!0;let t=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.GENDER_DROP,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN].join(",");return!!e.querySelector(t)}function $(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD)),t=new Map;for(let n of e){let o=n.getAttribute("automation-passenger-number");if(!o||!xt(n))continue;let r=t.get(o);if(!r){t.set(o,n);continue}let a=!!n.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!n.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!n.querySelector(i.PASSPORT),s=!!r.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!r.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!r.querySelector(i.PASSPORT);a&&!s&&t.set(o,n)}return Array.from(t.values()).sort((n,o)=>{let r=Number(n.getAttribute("automation-passenger-number")),a=Number(o.getAttribute("automation-passenger-number"));return r-a})}function ae(e,t){return`[automation-passenger-number="${CSS.escape(String(e))}"] ${t}`}function R(e){if(!e)return null;let t=String(e.selector||""),n=String(e.dropdownSelector||""),o=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN];for(let r of o)if(t===r||t.endsWith(` ${r}`)||t.includes(r))return r;for(let r of[i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN])if(n===r||n.endsWith(` ${r}`)||n.includes(r))return r;return t===i.GENDER_DROP||t.endsWith(` ${i.GENDER_DROP}`)||n===i.GENDER_DROP||n.endsWith(` ${i.GENDER_DROP}`)||t.includes(i.GENDER_DROP)||n.includes(i.GENDER_DROP)?i.GENDER_DROP:null}function Ct(e,t){let n=t.getAttribute("automation-passenger-number"),o=R(e);if(!n||!o)return e;let r=ae(n,o),a={...e,selector:r};if(e.actionType==="gender-option"||e.actionType==="gender-random"||o===i.GENDER_DROP){let s=ae(n,i.GENDER_DROP);a.dropdownSelector=s,e.actionType==="gender-random"&&(a.selector=s),e.actionType==="gender-option"&&(a.selector=e.selector)}if(e.actionType==="passport-option"||o===i.PASSPORT_NATION_DROPDOWN||o===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN){let s=ae(n,o);a.dropdownSelector=s,e.actionType==="passport-option"&&(a.selector=e.selector)}return a}function z(e){let t=String(e||"").match(/automation-passenger-number="([^"]+)"/);return t?t[1]:null}function _e(e,t){let n=z(e);if(!n)return 0;let r=(Array.isArray(t)?t:$()).findIndex(s=>String(s.getAttribute("automation-passenger-number"))===String(n));if(r>=0)return r;let a=Number(n);return Number.isFinite(a)&&a>0?a-1:0}function Lt(e,t){let n=new Set;for(let o of e){if(R(o)!==t)continue;let a=z(o.selector)||z(o.dropdownSelector);a&&n.add(a)}return n.size<=1}function Oe(e){if(!e)return!1;try{return!!document.querySelector(e)}catch{return!1}}function Ie(e,t){if(!e||!t)return e;let n={...e,selector:t};return(e.actionType==="gender-option"||e.actionType==="gender-random"||t===i.GENDER_DROP)&&(n.dropdownSelector=i.GENDER_DROP,e.actionType==="gender-random"&&(n.selector=i.GENDER_DROP),e.actionType==="gender-option"&&(n.selector=e.selector)),(e.actionType==="passport-option"||t===i.PASSPORT_NATION_DROPDOWN||t===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)&&(n.dropdownSelector=t,e.actionType==="passport-option"&&(n.selector=e.selector)),n}function H(e){return e?e.actionType==="gender-option"||e.actionType==="gender-random"||e.actionType==="passport-option"?Oe(e.dropdownSelector):Oe(e.selector):!1}async function Ge(e,t=5e3){if(!Array.isArray(e))return!1;if(!e.some(r=>!!R(r)||(r==null?void 0:r.actionType)==="passport-option"||(r==null?void 0:r.actionType)==="gender-option"||(r==null?void 0:r.actionType)==="gender-random"))return!0;let o=Date.now();for(;Date.now()-o<t;){if($().length>0)return!0;let a=document.querySelector(i.PASSENGER_FIRST_NAME)||document.querySelector(i.PASSENGER_LAST_NAME)||document.querySelector(i.BIRTHDAY)||document.querySelector(i.PASSPORT)||document.querySelector(i.PASSPORT_EXPIRATION)||document.querySelector(i.PASSPORT_NATION_DROPDOWN)||document.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||document.querySelector(i.GENDER_DROP);await A(120)}return!1}function Fe(e){if(!Array.isArray(e))return[];let t=$();t.length;let n=[],o=new Set,r=new Set;for(let a of e){let s=R(a);if(!s){let p=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;o.has(p)||(o.add(p),n.push(a));continue}if(!Lt(e,s)){let p=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;if(H(a)){o.has(p)||(o.add(p),n.push(a));continue}let f=Ie(a,s),g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;!r.has(g)&&H(f)&&(r.add(g),o.add(g),n.push(f));continue}let c=!1;for(let p of t){let f=Ct(a,p);if(!H(f))continue;let g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;o.has(g)||(o.add(g),n.push(f),c=!0)}if(!c){let p=Ie(a,s),f=`${p.actionType||""}|${p.selector||""}|${p.dropdownSelector||""}`;!r.has(f)&&H(p)&&(r.add(f),o.add(f),n.push(p))}}return n}var V=E(()=>{M();F()});var ie,xe=E(()=>{ie={fmeGenderToggle:0,fmeQuickFillKeyLock:!1}});async function Ye(e){if(!e||e.actionType!=="gender-random"||!e.dropdownSelector||!Array.isArray(e.options)||e.options.length===0)return!1;let t=e.options.some(a=>a.selector===i.GENDER_MALE),n=e.options.some(a=>a.selector===i.GENDER_FEMALE);if(!t||!n)return!1;let o=String(e.value||"random").toLowerCase(),r;return o==="male"?r=i.GENDER_MALE:o==="female"?r=i.GENDER_FEMALE:(r=ie.fmeGenderToggle%2===0?i.GENDER_MALE:i.GENDER_FEMALE,ie.fmeGenderToggle++),se(e.dropdownSelector,r)}async function Be(e,t){let n=Bt(e);if(!n)return!1;let o=async r=>t?k(()=>D(t).length===0,{timeoutMs:r,intervalMs:30}):(await A(r),!1);return I(n),!!(await o(450)||(Y(n),await o(450),n.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),n.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),t&&D(t).length===0))}function Yt(e){return e?[e.querySelector('[role="combobox"]'),e.querySelector('[aria-haspopup="listbox"]'),e.querySelector("[aria-expanded]"),e.querySelector("button"),e.querySelector("input"),_(e),e].filter(Boolean):[]}async function ze(e,t){let n=[...new Set(Yt(e))],o=D(t);if(o.length>0)return o[o.length-1];for(let r of n){ee(r);let a=await L(t,500);if(a||(r.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"ArrowDown",code:"ArrowDown"})),a=await L(t,400),a))return a}return null}function Bt(e){if(!e)return null;let t=_(e);return(t==null?void 0:t.closest("[automation-passenger-gender-option-value]"))||(t==null?void 0:t.closest("[automation-passport-nation-option]"))||(t==null?void 0:t.closest("[automation-passport-issuing-country-option]"))||(t==null?void 0:t.closest('[role="option"]'))||(t==null?void 0:t.closest("li"))||(t==null?void 0:t.closest("button"))||e.closest("[automation-passenger-gender-option-value]")||e.closest("[automation-passport-nation-option]")||e.closest("[automation-passport-issuing-country-option]")||e.closest('[role="option"]')||e.closest("li")||e.closest("button")||t||e}async function Ce(e,t){if(D(e).length===0)return;t&&I(t);let n=await k(()=>D(e).length===0,{timeoutMs:250,intervalMs:30});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await k(()=>D(e).length===0,{timeoutMs:200,intervalMs:30}))}function Le(e){if(!e)return!1;if(e.classList.contains("selected")||e.getAttribute("aria-selected")==="true")return!0;let t=e.querySelector('input[type="radio"]');return!!(t&&t.checked===!0)}async function zt(e,t){var l;if(!e||!t)return!1;let n=document.querySelector(e);if(!n)return!1;ee(n);let o=await L(t,1200);if(!o)return!1;let r=o.querySelector('input[type="radio"]')||o.querySelector("label")||o.closest("[automation-passenger-gender-option-value]")||o;if(!r)return!1;B(r);let a=o.querySelector('input[type="radio"]')||((l=r.closest("[automation-passenger-gender-option-value]"))==null?void 0:l.querySelector('input[type="radio"]'))||(r.type==="radio"?r:null);return a&&a.checked!==!0&&(a.click(),a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),a.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await k(()=>a.checked===!0||Le(o),{timeoutMs:700,intervalMs:30}))?(await Ce(t,n),!0):(r.click(),r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),r.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await k(()=>Le(o)||D(t).length===0,{timeoutMs:1200,intervalMs:30})?(await Ce(t,n),!0):!1)}async function se(e,t){if(await zt(e,t))return!0;let o=document.querySelector(e);if(!o)return!1;let r=await ze(o,t);if(!r)return!1;let a=await Be(r,t);return a}var le=E(()=>{M();F();xe()});function ce(e){if(!e)return null;let t=K(e.selector);if(t)return String(t).trim().toUpperCase();let n=String(e.value||"").trim().toUpperCase();return/^[A-Z]{2,3}$/.test(n)?n:null}function ue(e){let t=String((e==null?void 0:e.dropdownSelector)||""),n=String((e==null?void 0:e.selector)||"");return t.includes('automation-passport-field-type="issuing-country"')||n.includes("automation-passport-issuing-country-option")?"issuing-country":t.includes('automation-passport-field-type="nation"')||n.includes("automation-passport-nation-option")?"nation":null}async function $e(e,t){if(!v(document.querySelector(e)||{}))return;t&&I(t);let n=await k(()=>!v(document.querySelector(e)||{}),{timeoutMs:400,intervalMs:80});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await k(()=>!v(document.querySelector(e)||{}),{timeoutMs:250,intervalMs:80}))}async function $t(e,t){var y,m;if(!e||!t)return!1;let n=z(e),r=(n?document.querySelector(`[automation-passenger-number="${CSS.escape(n)}"]`):null)||document,a=Vt(e),s=document.querySelector(e)||r.querySelector(a);if(!s)return!1;let l=s.closest(".selector-input-wrapper")||((y=s.closest(".subject-wrapper"))==null?void 0:y.closest(".selector-input-wrapper"))||s.parentElement,c=[l==null?void 0:l.querySelector(".subject-wrapper"),l==null?void 0:l.querySelector(".dropdown-subject"),s.closest(".subject-wrapper"),s,_(s)].filter(Boolean),p=null;for(let h of[...new Set(c)])if(I(h),await A(100),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p)||(Y(h),await A(220),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p))||(h.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),h.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await A(180),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p)))break;if(!p||!v(p))return!1;if(p.classList.contains("selected"))return await $e(t,s),!0;let f=((m=_(p))==null?void 0:m.closest("[automation-passport-nation-option], [automation-passport-issuing-country-option]"))||p.querySelector("input")||p.querySelector("label")||p.querySelector("span")||p;I(f),await k(()=>!!(l!=null&&l.querySelector(`${t}.selected`)||document.querySelector(`${t}.selected`)),{timeoutMs:1500,intervalMs:100});let g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`);return g||(Y(f),await A(250),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g||(f.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),f.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await A(180),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g&&await $e(t,s),!!g}function Vt(e){let t=String(e||"");return t.includes('automation-passport-field-type="issuing-country"')?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:t.includes('automation-passport-field-type="nation"')?i.PASSPORT_NATION_DROPDOWN:t}async function Ve(e){if(!e||e.actionType!=="passport-option"||!e.dropdownSelector)return!1;let t=ce(e),n=ue(e),o=Ke(e);if(!t||!n||!o)return!1;let r=2;for(let a=1;a<=r;a++){if(a>1&&await A(100),await $t(e.dropdownSelector,o))return!0;await A(100)}return!1}var de=E(()=>{M();le();F();V();W()});function Z(e){if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=t.closest(i.PASSENGER_CARD);return n?n.getAttribute(i.PASSENGER_TYPE_ATTR):null}function Ue(e){return!e||typeof e!="string"?!1:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL||e.includes("automation-passport-nation-option")||e.includes("automation-passport-issuing-country-option")}function K(e){if(!e)return null;let t=e.match(/automation-passport-nation-option="([^"]+)"/);if(t)return t[1];let n=e.match(/automation-passport-issuing-country-option="([^"]+)"/);return n?n[1]:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL?"IL":null}function x(e){let t=K(e);return t?e.includes("automation-passport-nation-option")?`Passport Nation: ${t}`:e.includes("automation-passport-issuing-country-option")?`Passport Issuing Country: ${t}`:`Passport Country: ${t}`:"Passport Country"}function pe(e){return Array.isArray(e)?e.map(t=>{if(!t||!t.selector)return t;let n=String(t.selector||""),o=String(t.dropdownSelector||""),r=String(t.value||"").toUpperCase();if(t.actionType==="passport-option"&&t.dropdownSelector&&Ue(t.selector))return{...t,value:K(t.selector)||t.value,displayValue:t.displayValue||x(t.selector),humanName:t.humanName||x(t.selector),useSmartEnv:!1,autoGenerate:!1};if(Ue(n)){let l=n.includes("automation-passport-nation-option")||n===i.PASSPORT_NATION_IL,c=n.includes("automation-passport-issuing-country-option")||n===i.PASSPORT_ISSUING_COUNTRY_IL,p=o||(l?i.PASSPORT_NATION_DROPDOWN:null)||(c?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:null);return p?{...t,selector:n,value:K(n),displayValue:x(n),humanName:x(n),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:p}:t}let a=n.includes(i.PASSPORT_NATION_DROPDOWN)||o.includes(i.PASSPORT_NATION_DROPDOWN),s=n.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||o.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN);if((a||s)&&r==="IL"){let l=o||n,c=a?i.PASSPORT_NATION_IL:i.PASSPORT_ISSUING_COUNTRY_IL;return{...t,selector:c,value:"IL",displayValue:x(c),humanName:x(c),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:l}}return t}):[]}function Kt(e){return!e||typeof e!="string"?!1:e===i.GENDER_MALE||e===i.GENDER_FEMALE}function fe(e){if(!Array.isArray(e))return[];let t=[],n=new Map;for(let o of e){if(o&&o.actionType==="gender-option"&&o.dropdownSelector&&Kt(o.selector)){let r=o.dropdownSelector;n.has(r)||n.set(r,[]),n.get(r).push(o);continue}t.push(o)}for(let[o,r]of n.entries()){let a=[];for(let c of r)a.some(p=>p.selector===c.selector)||a.push(c);let s=a.some(c=>c.selector===i.GENDER_MALE),l=a.some(c=>c.selector===i.GENDER_FEMALE);if(s&&l){t.push({selector:o,value:"random",displayValue:"Alternating: Male / Female",humanName:"Gender Alternating",tagName:"DIV",actionType:"gender-random",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:o,options:[{selector:i.GENDER_MALE,value:"male",displayValue:"Gender Male",humanName:"Gender Male"},{selector:i.GENDER_FEMALE,value:"female",displayValue:"Gender Female",humanName:"Gender Female"}]});continue}a.length>0&&t.push(a[0])}return t}function Ke(e){let t=ce(e),n=ue(e);return!t||!n?(e==null?void 0:e.selector)||null:n==="issuing-country"?`[automation-passport-issuing-country-option="${CSS.escape(t)}"]`:`[automation-passport-nation-option="${CSS.escape(t)}"]`}function qe(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return t===i.CONTACT_FIRST_NAME||t===i.CONTACT_LAST_NAME||t===i.CONTACT_EMAIL||t===i.CONTACT_EMAIL_CONFIRMATION||t===i.CONTACT_PHONE_NUMBER||t===i.CONTACT_MARKETING_CHECKBOX||t===i.PAYER_FIRST_NAME||t===i.PAYER_LAST_NAME||t===i.PAYER_EMAIL||t===i.PAYER_PHONE_NUMBER}function He(e){if(!e||!e.selector)return!1;let t=R(e);return t===i.PASSENGER_FIRST_NAME||t===i.PASSENGER_LAST_NAME||t===i.BIRTHDAY||t===i.PASSPORT||t===i.PASSPORT_EXPIRATION}function me(e){if(!e)return!1;let t=R(e),n=String(e.selector||"");return t===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION)}function X(e){if(!e)return!1;let t=R(e),n=String(e.selector||"");return t===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION)}function We(e){let t=String(e||"").trim().toLowerCase();return!t||t==="click action"||t==="dd/mm/yyyy"||t==="mm/dd/yyyy"||t==="undefined"||t==="null"}var W=E(()=>{M();V();de()});function he(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)],t=Math.floor(1e7+Math.random()*9e7);return`${e}${t}`}function Xe(e){if(!e)return null;let t=String(e).match(/(\d{2})\/(\d{2})\/(\d{4})/);if(!t)return null;let n=Number(t[1]),o=Number(t[2]),r=Number(t[3]),a=new Date(r,o-1,n);return a.getFullYear()!==r||a.getMonth()!==o-1||a.getDate()!==n?null:a}function Ze(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function Qe(e){let t=String(e||"").match(/\d{2}\/\d{2}\/\d{4}/g);if(!t||t.length<2)return null;let n=t.map(Xe).filter(Boolean).sort((o,r)=>o.getTime()-r.getTime());return n.length<2?null:{minDate:n[0],maxDate:n[n.length-1]}}function ye(e){var o,r,a,s,l,c;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,(c=(l=(s=t.parentElement)==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:c.parentElement].filter(Boolean);for(let p of n){let f=p.innerText||"",g=Qe(f);if(g)return g}return null}function je(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return R(e)===i.BIRTHDAY||t.includes(i.BIRTHDAY)||t.includes('[name="paxBirthDate"]')}function Je(e,t){if(!e||!t)return!1;let n=Xe(e);return n?n.getTime()>=t.minDate.getTime()&&n.getTime()<=t.maxDate.getTime():!1}function Ut(e){var o,r,a;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,t.closest(i.PASSENGER_CARD),t.closest("form")].filter(Boolean);for(let s of n){let l=Qe(s.innerText||"");if(l)return l}return null}function Q(e,t){let n=new Date(e.getTime());return n.setDate(n.getDate()+t),n}function ge(e,t){let n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n}function U(e,t){let n=e.getTime(),o=t.getTime();if(o<=n)return Ze(e);let r=n+Math.floor(Math.random()*(o-n+1));return Ze(new Date(r))}function Ee(e=null){let t=new Date,n=Ut(e);if(n){let a=Q(n.minDate,3),s=Q(n.maxDate,-3);return U(a,s)}let o=ge(t,18),r=new Date(t.getFullYear()+9,t.getMonth(),t.getDate());return U(o,r)}function et(e,t=null){if(!t)return null;let n=String(t.selector||""),o=R(t);if(o===i.BIRTHDAY||n.includes(i.BIRTHDAY)){let g=Z(t);return Se(g,t)}if(o===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION))return Ee(t);if(o===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION))return he();if(n.includes('[name="fname"]')||n.includes('[name="paxFName"]'))return O.firstNames[Math.floor(Math.random()*O.firstNames.length)];if(n.includes('[name="lname"]')||n.includes('[name="paxLName"]'))return O.lastNames[Math.floor(Math.random()*O.lastNames.length)];if(n.includes('[name="femail"]')||n.includes('[name="email"]')||n.includes('[name="emailConfirm"]')){let g=O.firstNames[Math.floor(Math.random()*O.firstNames.length)].toLowerCase().replace(/\s+/g,""),y=O.lastNames[Math.floor(Math.random()*O.lastNames.length)].toLowerCase().replace(/\s+/g,""),m=Math.floor(1e3+Math.random()*9e3);return`${g}.${y}${m}@test.com`}return n.includes('[name="fphone"]')||n.includes('[name="phone"]')?qt():null}function qt(){let e=["050","052","054","058"],t=e[Math.floor(Math.random()*e.length)],n=Math.floor(1e6+Math.random()*9e6);return`${t}-${n}`}function Se(e,t=null){let n=ye(t);if(n){let p=Q(n.minDate,3),f=Q(n.maxDate,-3);return p.getTime()<=f.getTime()?U(p,f):U(n.minDate,n.maxDate)}let o=new Date,r=String(e||"").trim(),a,s,l;switch(r){case"1":l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break;case"2":l="Child",a=new Date(o.getFullYear()-11,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-3,o.getMonth(),o.getDate());break;case"3":l="Infant",a=ge(o,-14),s=ge(o,-3);break;case"4":l="Senior",a=new Date(o.getFullYear()-85,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-65,o.getMonth(),o.getDate());break;case"6":l="Youth",a=new Date(o.getFullYear()-24,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-12,o.getMonth(),o.getDate());break;default:l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break}return U(a,s)}var O,tt=E(()=>{M();V();W();O={firstNames:["Daniel","Omer","Idan","Guy","Ben","Lior","Amit","Neta","Ron","Eyal","Ori","Tom","Alex","Max","Leo","Itay","Yonatan","Ariel","Noam","Itamar","Roy","Eitan","Ari","Dvir","Roee","Ido","Matan","Shahar","Aviv","Ziv","Peleg","Nadav","Gilad","Eran","Ofer","Boaz","Yair","Asaf","Elad","Omri","Nir","Lavi","Gefen","Ilay","Harel","Yahav","Alon","Maor","Or","Yahali","Rom","Yuval","Yarden","Gal","Dean","Reem","Dor","Tomer","Yaniv","Ohad","Erez","Liran","Yotam","Oded","Barak","Zvi","Udi","Dror","Hagai","Miki","Kobi","Yossi","Avi","Gabi","Yaron","Gidi","Shay","Oz","Adir","Paz","Tzur","Sagi","Raz","Eliav","Eliran","Elior","Yishai","Yigal","Amichai","Elisha","Netanel","Nehorai","Orel","Osher","Shoval","Lidor","Shir","Moran","Meitar","Dagan","Dekel","Assaf","Moti","Shmulik","Itzik","Gadi","Haim","Dudu","Tzachi","Rafi","Meir","Zion","Baruch","Efraim","Menachem","Reuven","Shimon","Asher","Dan","Gad","Naftali","Levi","Yehoshua","Pinchas","Nissim","Shalom","Shlomi","Tamir","Natan","Amiram","Ovadia","Yoav","Binyamin","Uzi","Pini","Tzvika","Nitzan","Rotem","Dolev","Ofek","Snir","Almog","Yagel","Shoham","Arad","Kerem","Amri","Yiftach","Yinon","Eviatar","Elyashiv","Avishai","Avitar","Eliezer","Elchanan","Oriel","Tzion","Arbel","Noa","Maya","Sarah","Tamar","Emma","Yael","Adi","Shira","Dana","Ella","Mia","Zoe","Roni","Mika","Adele","Romi","Noga","Yuli","Alma","Ayala","Hila","Michal","Ofri","Rina","Avigail","Efrat","Naama","Renana","Moriah","Tehila","Odelia","Racheli","Yehudit","Tzlil","Shahaf","Sahar","Tair","Liel","Tahel","Maayan","Sivan","Lidar","Linoy","Meshi","Tohar","Hodaya","Bat El","Orian","Shirel","Noy","Noi","Liat","Shani","Koral","Shaked","Nofar","Sapira","Zohar","Gili","Hadar","Libby","Shelly","Netta","Ruti","Nomi","Gila","Nira","Tami","Liora","Shula","Yaara","Danya","Amir","Yoram","Ilan","Arik","Sasson","Umar","Oshri","Rami","Amnon","Avner","Eliad","Elik","Elitzur","Ilanit","Orna","Dorit","Levana","Ruchama","Oshrat","Kalanit","Shlomit","Margalit","Pazit","Sarit","Mirit","Nirit","Tirtza","Alona","Tziona","Tzvia","Dikla","Oshra","Talia","Odel","Aya","Shirley","Linor","Yam","Ravid","Aharon","Akiva","Ami","Amitai","Amos","Arie","Arieh","Ariel","Aryeh","Aviad","Avidan","Aviel","Avigdor","Avihai","Avinoam","Aviram","Avishag","Avital","Ayala","Ayelet","Bar","Batya","Boaz","Bracha","Carmel","Carmela","Chaim","Chana","Chanan","Chava","Chaya","Chen","Dafna","Dalia","Daniela","Daria","David","Devorah","Dinah","Ehud","Elad","Elchanan","Eli","Eliana","Elijah","Elisha","Elisheva","Eliyahu","Elkana","Emanuel","Emuna","Esther","Esti","Eyal","Ezra","Galia","Galit","Gavriel","Geula","Guy","Hagar","Hillel","Idit","Ido","Ilana","Inbar","Iris","Ishay","Itai","Itamar","Itzhak","Keren","Kinneret","Leah","Levi","Libi","Liron","Livnat","Malka","May","Meital","Merav","Michael","Miri","Miriam","Mor","Moshe","Naaman","Nadia","Naftali","Naomi","Narkis","Nava","Nechemya","Nehorai","Nili","Nimrod","Nitzan","Noam","Noya","Nurit","Oded","Ofira","Ofra","Omri","Ora","Oren","Ori","Orian","Orli","Osher","Osnat","Peleg","Penina","Pinchas","Raanan","Rachel","Rakefet","Ran","Ravid","Raz","Reut","Reuven","Revital","Rinat","Roei","Ronen","Ronit","Roy","Ruth","Sapir","Sara","Sarit","Shachar","Shai","Shaked","Shalev","Shalom","Shalva","Shani","Shaul","Sharon","Sharona","Shifra","Shilat","Shimon","Shir","Shira","Shirel","Shiri","Shlomo","Shlomit","Shlomi","Shmuel","Shmulik","Shoshana","Shoval","Sigal","Sigalit","Sima","Simcha","Sivan","Smadar","Stav","Tahel","Tair","Tal","Talia","Tamar","Tamir","Tanya","Techiya","Tehila","Tikva","Tohar","Tom","Tomer","Tova","Tzachi","Tzila","Tzion","Tziona","Tzlil","Tzofia","Tzur","Udi","Uri","Uriel","Uzi","Uziel","Vered","Yaakov","Yael","Yaeli","Yaffa","Yagil","Yahali","Yahav","Yair","Yakir","Yam","Yaniv","Yarden","Yardena","Yaron","Yasmin","Yechiel","Yedidya","Yehezkel","Yehoshua","Yehuda","Yehudit","Yemima","Yeshayahu","Yifat","Yigal","Yishai","Yisrael","Yitzhak","Yoav","Yocheved","Yoel","Yonatan","Yoram","Yosef","Yossi","Yotam","Yuli","Yuval","Zahava","Zecharia","Zeev","Zehava","Zila","Zion","Ziv","Ziva","Zohar","Zvi","Zvika","Zemer","Agam","Ahuva","Aliza","Amalia","Anat","Atara","Avia","Aviva","Batsheva","Benaya","Bezalel","Carmit","Chanoch","Danit","Dina","Drora","Eden","Edna","Einat","Elazar","Elia","Elin","Elyakim","Emil","Fima","Frida","Gali","Gedalia","Gil","Gilead","Gittit","Golda","Hadas","Hadasa","Hallel","Hanan","Hedva","Hezi","Hinda","Hod","Ilai","Irit","Laly","Lev","Lida","Limor","Liraz","Lital","Magen","Mali","Maoz","Naya","Matityahu","Mazal","Meirav","Menashe","Meni","Micha","Mina","Misha","Moshik","Nati","Nechama","Neria","Netaly","Nof","Nuriel","Orit","Ortal","Oshrit","Pnina","Raanan","Rahel","Rama","Reena","Riki","Rona","Sagit","Sefi","Shila","Shimshon","Nevo","Shosh","Tali","Talma","Tiferet","Tomi","Tovia","Varda","Viki","Yakira","Yafit","Yana","Yirmiyahu","Yonit","Yosefa","Zehavit","Zelig","Zmira","Zohara"],lastNames:["Cohen","Levi","Mizrachi","Peretz","Biton","Friedman","Katz","Azoulay","Golan","Shapira","Tal","Bar","Mor","Dahan","Gabay","Adler","Segal","Klein","Weiss","Schwartz","Ohana","Malka","Yosef","David","Avraham","Yitzhak","Yaakov","Moshe","Aharon","Solomon","Levin","Kogan","Rosen","Rubin","Stern","Kaplan","Greenberg","Berman","Dayan","Feldman","Pinto","Edri","Amar","Asulin","Ben David","Ben Ami","Ben Zvi","Hadad","Hazan","Melamed","Navon","Peleg","Tzur","Shahar","Shoham","Alon","Amoyal","Abergel","Atias","Ohayon","Elbaz","Vaknin","Zada","Toledano","Lugasi","Maman","Marciano","Suissa","Ozeri","Sheetrit","Turgeman","Tzarfati","Kadoch","Karadi","Revivo","Shushan","Alfasi","Buzaglo","Deri","Halabi","Yifrach","Malul","Siboni","Shafir","Abutbul","Aharoni","Alcalay","Aloni","Amir","Amit","Amitai","Appel","Arama","Arnon","Ashkenazi","Assaraf","Atar","Avidan","Avigdor","Avinery","Avishai","Avni","Ayalon","Babad","Bacher","Badash","Bahar","Banai","Bar Ilan","Bar Lev","Bar Natan","Bar On","Barak","Barazani","Barda","Barel","Barkai","Bashan","Basson","Batzri","Baum","Beck","Becker","Behar","Beinart","Ben Ari","Ben Atar","Ben Basat","Ben Chaim","Ben Dov","Ben Ezra","Ben Gurion","Ben Haim","Ben Lulu","Ben Moshe","Ben Natan","Ben Porat","Ben Shabbat","Ben Shahar","Ben Shimon","Ben Shlomo","Ben Yehuda","Ben Yitzhak","Ben Zaken","Ben Zeev","Berger","Berkovich","Berkowitz","Bernstein","Bitan","Blau","Bloch","Blum","Boker","Borochov","Brand","Braverman","Brik","Brikman","Brisk","Cahan","Cahana","Carmi","Caspi","Chaim","Chalfon","Chelouche","Chen","Churgin","Dagan","Dahari","Damari","Dan","Dangot","Danieli","Danon","Dar","Darshan","Daskal","Dassa","Davidi","Davidov","Davidovich","Dekel","Deutsch","Diamond","Dichter","Dror","Drori","Eckstein","Efrati","Eilat","Einhorn","Eisenberg","Eisenstein","Elalouf","Elam","Elazar","Eliav","Elimelech","Elkayam","Elkobi","Emanuel","Engel","Epstein","Erez","Eshkol","Even","Ezra","Fadida","Falah","Farchi","Farkash","Fatihi","Fattal","Fine","Finkelstein","Fishman","Fleischer","Fogel","Fox","Frank","Frankel","Frenkel","Fried","Fuchs","Gabbay","Gafni","Gal","Galanti","Galili","Gamzu","Gaon","Garty","Gavish","Gavrieli","Gefen","Gelb","Gelber","Geller","Gerber","Gershon","Gil","Giladi","Gilboa","Gilon","Ginzburg","Givati","Glass","Glick","Glickman","Glazer","Gofman","Gold","Goldberg","Goldenberg","Goldfarb","Goldman","Goldschmidt","Goldstein","Gonen","Gordon","Gottlieb","Geva","Gross","Grossman","Gruber","Gruen","Guri","Gutman","Guttman","Haas","Haber","Habib","Hafouta","Halfon","Halperin","Hamburger","Har Zvi","Harari","Harel","Hason","Hasson","Haviv","Hecht","Helfgott","Heller","Herman","Hersch","Hershkovitz","Hertz","Herzl","Herzog","Hess","Hirsch","Hirschfeld","Hochman","Hod","Hoffman","Horn","Horowitz","Huldai","Hurvitz","Ifargan","Ifergan","Ilan","Ilani","Imanuel","Inbar","Isaacs","Isaacson","Israel","Israeli","Issachar","Itach","Itzhaki","Ivanir","Jacob","Jacobs","Jacobson","Jaffe","Jafari","Jonas","Joseph","Kadosh","Kahan","Kahana","Kalfon","Kaminski","Kantor","Kariv","Karni","Karp","Kasher","Katan","Kaufman","Kedar","Keinan","Kellner","Keren","Kessler","Khoury","Kimchi","Kishon","Kleinman","Knafo","Kobi","Kochavi","Koren","Korman","Korn","Kramer","Kraus","Krauss","Krebs","Krieger","Kritzman","Kupfer","Lahav","Landau","Laniado","Lapid","Lasker","Lavie","Lazar","Leder","Lehrer","Leibovich","Leibowitz","Leon","Lerner","Leshem","Lev","Levanon","Lehavi","Levy","Lewis","Liberman","Lieberman","Lifshitz","Linder","Lior","Lipman","Liran","Lishchinsky","Litzman","Livne","Livni","Locker","Loeb","Luria","Lurie","Lustig","Maayan","Magen","Maimon","Makhlouf","Malachi","Malihi","Mandel","Mandelbaum","Manor","Mansour","Maor","Marcus","Margolis","Mark","Markovitz","Marks","Mayer","Maymon","Mazar","Mazor","Meidan","Meiri","Melnik","Menachem","Menashe","Mendel","Meroz","Meshulam","Meyer","Meyers","Michaeli","Milshtein","Minsky","Mintz","Miron","Misgav","Mofaz","Molcho","Morad","Morag","Mordechai","Morgenstern","Moyal","Nachman","Nachmias","Nachshon","Nadel","Nager","Naim","Narkis","Natan","Nathanson","Naveh","Neeman","Nehemya","Nesher","Netzer","Neuman","Neumann","Newman","Nimrodi","Nir","Nissenbaum","Niv","Nof","Noy","Nudel","Nussbaum","Oded","Ofer","Ofir","Ofran","Oliel","Omer","Oppenheim","Oren","Orbach","Oron","Ozer","Pachter","Padeh","Palti","Papo","Parnes","Pasi","Pass","Pearl","Pelled","Pen","Peres","Peri","Perlman","Perry","Pinhasi","Podolsky","Polak","Pollack","Polonsky","Pomerantz","Porat","Portal","Poupko","Priver","Radomsky","Rafael","Rahamim","Ram","Ramon","Rappaport","Ratzon","Raviv","Raz","Reich","Reichman","Reif","Reiss","Reiter","Reshef","Reuven","Reuveni","Richter","Rimon","Ringel","Rochman","Roitman","Roman","Romm","Ron","Ronen","Roni","Rosenbaum","Rosenberg","Rosenblatt","Rosenblum","Rosenfeld","Rosner","Ross","Rost","Roth","Rothman","Rothschild","Rozen","Rubenstein","Sachs","Sadan","Sade","Sadeh","Sagi","Sagiv","Salmon","Salton","Salzman","Samuels","Sapir","Sarid","Sason","Sasson","Savir","Schachter","Schaeffer","Scharf","Schatz","Schechter","Schein","Schenker","Schiff","Schiller","Schindler","Schipper","Schlesinger","Schlosser","Schneider","Scholem","Schreiber","Schroeder","Schulman","Schuster","Schwab","Shafran","Shaham","Shalev","Shaltiel","Shamir","Shamni","Shani","Shapiro","Sharet","Sharon","Sharoni","Shatz","Shaul","Shay","Shechter","Shefi","Sheleg","Shemer","Shenhav","Sher","Sherman","Shilo","Shiloh","Shilon","Shimi","Shimoni","Shinwell","Shir","Shirazi","Shkedi","Shkolnik","Shlomi","Shmuel","Shmueli","Shneor","Shochat","Shomron","Shpigel","Shpitalni","Shraga","Shtal","Shulman","Shvartz","Shwartz","Silber","Silberman","Silver","Silverman","Simcha","Simon","Sinai","Singer","Sivan","Sneh","Sobel","Sofer","Sokolov","Soloveichik","Somekh","Sommer","Sopher","Spector","Spiegel","Spielberg","Spira","Spitz","Spitzer","Stahl","Stark","Stein","Steinberg","Steiner","Steinhardt","Sternberg","Stulman","Sussman","Tabak","Tavor","Tavori","Teitelbaum","Tirosh","Topol","Touitou","Trabelsi","Treves","Tzaban","Tzadok","Tzafrir","Tzairi","Tzamir","Tzehoval","Tzidon","Tzinn","Tzivion","Tzuk","Ullman","Unger","Uzan","Uziel","Vadas","Vardi","Vilnai","Vogel","Volk","Wachs","Wachtel","Waks","Waldman","Wallach","Wallerstein","Warshawsky","Wasserman","Wechsler","Weil","Weinberg","Weiner","Weinstein","Weinstock","Weisberg","Weisman","Weissman","Weitz","Weitzman","Werner","Wertheimer","Wexler","Wiener","Wiesel","Willner","Winkler","Winter","Wirth","Wise","Witkin","Wittmann","Wolf","Wolfe","Wolfson","Wolinsky","Wolk","Yaari","Yaavetz","Yaffe","Yadin","Yagoda","Yahalom","Yakir","Yanai","Yardeni","Yashar","Yassour","Yavne","Yecheskel","Yedidya","Yehezkel","Yeivin","Yellin","Yemini","Yerushalmi","Yeshayahu","Yevnin","Yisrael","Yitzhaki","Yoeli","Yoffe","Yona","Yoram","Yosefi","Yudelman","Yulzari","Yurman","Zabar","Zachi","Zadik","Zafrir","Zaguri","Zahavi","Zaid","Zait","Zak","Zakai","Zaken","Zaks","Zalcman","Zalman","Zand","Zarfati","Zarhin","Zarka","Zauderer","Zecharia","Zeevi","Zehavi","Zeigler","Zeitlin","Zelig","Zeller","Zemach","Zemel","Zer","Zeron","Zertal","Zichroni","Zidkiyahu","Zilber","Zilberg","Zimerman","Zimmerman","Zinger","Zinn","Zion","Zisapel","Zisman","Ziv","Zlotnik","Zmora","Zohar","Zondel","Zorea","Zubari","Zucker","Zuckerman","Zussman","Zwebner","Abadi","Aharonov","Alalouf","Alfandari","Almosnino","Alush","Anidjar","Arad","Arbel","Argamani","Arias","Ariel","Aris","Aronovich","Averbuch","Avidov","Avnery","Azran","Bachar","Badihi","Balas","Bar Niv","Bar Yosef","Bar Zvi","Bason","Batash","Belfer","Belkin","Ben Aharon","Ben Amram","Ben Gal","Ben Kiki","Ben Menachem","Ben Naim","Ben Tzur","Bismuth","Bivas","Boger","Botzer","Brodsky","Carlebach","Carmeli","Cassouto","Chazan","Cohen Zedek","Danino","Dattner","Degani","Derai","Diller","Diskin","Dotan","Druk","Edelman","Eitan","Elazari","Elgali","Eliyahu","Elkabetz","Engelman","Even Chen","Fadlon","Farhi","Feiglin","Gaist","Gal Or","Gamliel","Gantz","Gelman","Gery","Gilead","Ginossar","Glickstein","Golani","Granot","Guber","Haba","Hacohen","Hagag","Halevi","Halimi","Halkin","Har Even","Harlap","Hassid","Hazut","Hefer","Hemo","Hermon","Horev","Huberman","Idan","Ifrah","Igal","Imber","Inbari","Kadoshi","Kadmon","Kagan","Kahlon"]}});function Ht(){let e=document.getElementById("fme-notification-stack");return e||(e=document.createElement("div"),e.id="fme-notification-stack",document.body.appendChild(e)),e}function T(e,t="he",n=!0){var c;let o=n==="warning"?"warning":n===!1?"error":"success",r=o==="success"?"✔":o==="warning"?"⚠":"✖",a=Ht(),s=document.getElementById("fme-toast")||document.createElement("div");s.id="fme-toast",s.dataset.status=o,s.dir=((c=N[t])==null?void 0:c.dir)==="ltr"?"ltr":"rtl",s.hidden=!1;let l=String(e||"").replace(/^[✔✖⚠]\s*/g,"");s.innerHTML=`
        <span class="fme-toast-icon">${r}</span>
        <span class="fme-toast-text">${l}</span>
    `,a.prepend(s),s._fmeHideTimer&&clearTimeout(s._fmeHideTimer),s._fmeHiddenTimer&&clearTimeout(s._fmeHiddenTimer),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s._fmeHideTimer=setTimeout(()=>{s.classList.remove("show"),s._fmeHiddenTimer=setTimeout(()=>{s.classList.contains("show")||(s.hidden=!0)},350)},3e3)}async function be(e){if(!e||!e.selector)return!1;let t=null;try{t=document.querySelector(e.selector)}catch{return!1}return t?e.actionType==="click"?(t.click(),t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0):await Pe(t,e.value):!1}var we=E(()=>{M();F()});function w(e,t){if(!e||typeof e.getAttribute!="function")return"";let n=String(t||"").replace(/[\[\]]/g,"").split("=")[0];return e.getAttribute(n)||""}function Wt(e){return!e||typeof e.getAttribute!="function"?!1:e.getAttribute("automation-baggage-valid")==="false"}function Zt(e,t,n){let o=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM;return Array.from(e.querySelectorAll(o)).filter(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);if(n!==null&&a!==n)return!1;let s=r.getBoundingClientRect();return s.width>0&&s.height>0})}function Xt(e,t){let n=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM,o=new Set;return Array.from(e.querySelectorAll(n)).forEach(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);(a==="0"||a==="1")&&o.add(a)}),o.size===0&&o.add(null),Array.from(o)}function Qt(e){if(!e||e.length===0)return null;let t=e.filter(c=>{let p=c.getBoundingClientRect();return p.width>0&&p.height>0});if(t.length===0)return null;let n=t.find(c=>w(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(n)return n;let o=t.find(c=>w(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(o)return o;let r=t.find(c=>{let p=(w(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return p.includes("none")||p.includes("no")||p.includes("without")});if(r)return r;let a=t.find(c=>w(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(a)return a;let s=t.find(c=>w(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(s)return s;let l=t.find(c=>{let p=(w(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return p.includes("free")||p.includes("included")});return l||null}async function nt(e,t){let n=t==="trolley"?i.TROLLEY_GROUP:i.BAGGAGE_GROUP,o=e.querySelector(n);if(!o)return null;let r=Xt(e,t),a=!1;for(let s of r){let l=Zt(e,t,s);if(l.length===0)continue;let c=Qt(l);if(!c)continue;let p=w(c,i.BAGGAGE_KEY_ATTR),f=w(c,i.BAGGAGE_QUANTITY_ATTR),g=w(c,i.BAGGAGE_INCLUDED_ATTR);if(w(c,i.BAGGAGE_SELECTED_ATTR)==="true"){a=!0;continue}c.click(),c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),c.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await new Promise(P=>setTimeout(P,5));let m=w(c,i.BAGGAGE_SELECTED_ATTR)==="true",h=Wt(o);m&&!h&&(a=!0)}return a}async function jt(e){if(!e||e.getAttribute(i.PASSENGER_TYPE_ATTR)==="3")return null;let n=!1,o=!0,r=await nt(e,"baggage");r!==null&&(n=!0,r||(o=!1));let a=await nt(e,"trolley");return a!==null&&(n=!0,a||(o=!1)),n?o:null}async function ot(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD));if(e.length===0)return null;let t=!1,n=!0;for(let o of e){let r=await jt(o);r!==null&&(t=!0,r||(n=!1)),await new Promise(a=>setTimeout(a,5))}return t?n:null}var rt=E(()=>{M()});function at(){let e=Array.from(document.querySelectorAll("[automation-result-provider]")),t=e.map(m=>String(m.getAttribute("automation-result-provider")||"").trim()).filter(Boolean),n=t.flatMap(m=>m.split("&")).map(m=>m.trim()).filter(Boolean),o=Array.from(document.querySelectorAll("[automation-result-fmtk]")).some(m=>String(m.getAttribute("automation-result-fmtk")||"").toLowerCase()==="true"),r=t.join(" & "),a=r.toUpperCase(),s=/G-AL-/.test(a),l=/G-AM-/.test(a),c=l||o,p=s&&l,f=s&&!l,g=!p&&!f&&(c||n.length>0||e.length>0);return{found:e.length>0,provider:r,providers:n,fmtkTrue:o,hasALP:s,hasAmadeus:c,blocked:p,alpOnly:f,amadeusOnly:g}}var it=E(()=>{});function st(e){if(!e)return null;let t=e.toLowerCase(),n=(t.includes("first")||t.includes("פרטי")||t.includes("name"))&&!t.includes("last")&&!t.includes("משפחה"),o=t.includes("last")||t.includes("משפחה")||t.includes("surname");if(!n&&!o)return null;let r=location.href.toLowerCase(),a=r.includes("localhost")||r.includes("127.0.0.1")||r.includes("0.0.0.0"),s="prod";a||r.includes("test")?s="test":r.includes("stage")?s="stage":r.includes("dev")&&(s="test");let l="";r.includes("flight")?l="flight":r.includes("dynamic")&&(l="dynamic");let c="site";return r.includes("tzayad")?c="tzayad":r.includes("tripzone")?c="tripzone":r.includes(".co.il")?c="IL":r.includes(".ae")||r.includes("mena")?c="ae":r.includes(".sa")?c="sa":r.includes(".kw")&&(c="kw"),n?a?"test locally":`test ${c}`:o?l?`${s} ${l}`:s:null}var lt=E(()=>{});function Jt(e){return qe(e)?0:He(e)?12:5}async function ct(e,t="he",n=Date.now()){t=t||"he";let o=n;function r(a){o=Date.now()}try{let kt=function(d){let u=String(d||"");return/\[name="pax(F|L)Name"\]/i.test(u)},Rt=function(d,u){let S=_e(d,u);return h+P.repeat(Math.max(0,S))},j=function(d,u){return{humanName:(d==null?void 0:d.humanName)||"(unknown)",selector:(d==null?void 0:d.selector)||"",dropdownSelector:(d==null?void 0:d.dropdownSelector)||"",actionType:(d==null?void 0:d.actionType)||"value",value:d==null?void 0:d.value,reason:u}};Array.isArray(e)||(e=[]);let a=0,s=0,l=d=>{d?a++:s++},c={found:!1,blocked:!1,alpOnly:!1,amadeusOnly:!1,hasALP:!1,hasAmadeus:!1};if(re())try{let d=await ne();if(await oe()===!0){T(d==="select_services"?N[t].ancillaryGlobalSelectDone:N[t].ancillaryGlobalSkipDone,t,!0);return}T(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}catch{T(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}if(e=e.filter(d=>{let u=String((d==null?void 0:d.selector)||""),S=String((d==null?void 0:d.dropdownSelector)||"");return!(u.includes("automation-baggage-group")||u.includes("automation-baggage-item-type")||S.includes("automation-baggage-group")||S.includes("automation-baggage-item-type"))}),e=fe(e),e=pe(e),await Ge(e,3e3),r("Passenger cards ready"),e=Fe(e),e=fe(e),e=pe(e),e=e.filter(d=>{if(d.actionType==="gender-option"||d.actionType==="gender-random"||d.actionType==="passport-option"||!d.selector)return!0;let u=!1;try{u=!!document.querySelector(d.selector)}catch{u=!1}return u}),r(`Data expanded/filtered to ${e.length} items`),c=at(),c.blocked){T(t==="en"?"✖ Cannot book a combined ALP + Amadeus flight":"✖ לא ניתן להזמין טיסה של ALP + Amadeus",t,!1);return}let p=20,f=new Set,g=new Set,y=[],m=[],h="Test",P="t",Mt=c.alpOnly?$():[];c.alpOnly;async function Ae(d,{bypassHandledCheck:u=!1}={}){if(d.actionType==="gender-random"){if(!u&&f.has(d.dropdownSelector))return null;let S=await Ye(d);return f.add(d.dropdownSelector),S}if(d.actionType==="gender-option"){if(!u&&f.has(d.dropdownSelector))return null;let S=await se(d.dropdownSelector,d.selector);return f.add(d.dropdownSelector),S}if(d.actionType==="passport-option"){if(!u&&g.has(d.dropdownSelector))return null;let S=await Ve(d);return g.add(d.dropdownSelector),S}return await be(d)}for(let d of e){let u={...d};if(!Re(u))try{if(u.actionType==="gender-random"||u.actionType==="gender-option"||u.actionType==="passport-option"){let b=await Ae(u);if(b===null)continue;r(`Dropdown "${u.humanName}" (${u.actionType}) → ${b?"ok":"FAILED"}`),b||m.push(j(u,"dropdown selection failed")),l(b),await new Promise(J=>setTimeout(J,p));continue}if(u.useSmartEnv){let b=st(u.humanName);b&&(u.value=b),u.useSmartEnv=!1}if((me(u)||X(u))&&(u.autoGenerate===!0||We(u.value)||X(u)))me(u)&&(u.value=he()),X(u)&&(u.value=Ee(u));else if(u.autoGenerate){let b=et(u.humanName,u);b!==null&&(u.value=b)}if(je(u)){let b=ye(u);if(b&&!Je(u.value,b)){let J=Z(u);u.value=Se(J,u)}}c.alpOnly&&kt(u.selector)&&(u.value=Rt(u.selector,Mt),u.displayValue=u.value),await be(u)?l(!0):y.push(u);let Te=Jt(u);Te>0&&await new Promise(b=>setTimeout(b,Te))}catch{y.push(u);continue}}if(r("Main loop done"),y.length>0){await new Promise(d=>setTimeout(d,250));for(let d of y){try{let u=await Ae(d,{bypassHandledCheck:!0});u||m.push(j(d,"still failed after retry")),l(!!u)}catch(u){m.push(j(d,`retry threw: ${(u==null?void 0:u.message)||u}`)),l(!1)}await new Promise(u=>setTimeout(u,p))}r("Retry pass done")}m.length>0;try{let d=await ot();d===!0?l(!0):d===!1&&l(!1)}catch{}r("Baggage done");try{let d=await oe();d===!0?l(!0):d===!1&&l(!1)}catch{}if(r("Ancillary done"),a>0&&s===0)T(N[t].fieldsFilled(a),t,!0);else if(a>0&&s>0){let d=m.map(C=>C.humanName).filter(C=>C&&C!=="(unknown)"),u=d.slice(0,3).join(", "),S=d.length>3?`${u} +${d.length-3}`:u;T(N[t].fieldsPartiallyFilled(a,s,S),t,"warning")}else T(N[t].fillFailed,t,!1)}catch(a){let s=a&&a.message?a.message:String(a||"Unknown error");T(`✖ ${N[t].fillError}: ${s}`,t,!1)}}var ut=E(()=>{De();V();tt();W();we();rt();le();de();it();lt();M()});var dt,pt=E(()=>{dt={fme_il_flights_checkout:[{actionType:"value",autoGenerate:!1,displayValue:"test IL",dropdownSelector:null,humanName:"שם פרטי",selector:'[name="fname"]',tagName:"INPUT",useSmartEnv:!0,value:"test IL"},{actionType:"value",autoGenerate:!1,displayValue:"test flight",dropdownSelector:null,humanName:"שם משפחה",selector:'[name="lname"]',tagName:"INPUT",useSmartEnv:!0,value:"test flight"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"כתובת מייל",selector:'[name="email"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"אימות כתובת מייל",selector:'[name="emailConfirm"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!0,displayValue:"0511216637",dropdownSelector:null,humanName:"טלפון נייד",selector:'[name="phone"]',tagName:"INPUT",useSmartEnv:!1,value:"0511216637"},{actionType:"value",autoGenerate:!1,displayValue:!0,dropdownSelector:null,humanName:"הרשמה לעדכונים",selector:"#allowSubscribe",tagName:"INPUT",useSmartEnv:!1,value:!0},{actionType:"value",autoGenerate:!0,displayValue:"natan",dropdownSelector:null,humanName:"שם פרטי",selector:'[automation-passenger-number="\\31 "] [name="paxFName"]',tagName:"INPUT",useSmartEnv:!1,value:"natan"},{actionType:"value",autoGenerate:!0,displayValue:"shor",dropdownSelector:null,humanName:"שם משפחה",selector:'[automation-passenger-number="\\31 "] [name="paxLName"]',tagName:"INPUT",useSmartEnv:!1,value:"shor"},{actionType:"value",autoGenerate:!0,displayValue:"10/10/2000",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="paxBirthDate"]',tagName:"INPUT",useSmartEnv:!1,value:"10/10/2000"},{actionType:"value",autoGenerate:!0,displayValue:"546456456",dropdownSelector:null,humanName:"מספר דרכון",selector:'[automation-passenger-number="\\31 "] [name="passportNumber"]',tagName:"INPUT",useSmartEnv:!1,value:"546456456"},{actionType:"value",autoGenerate:!0,displayValue:"16/08/2031",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="passportExpirationDate"]',tagName:"INPUT",useSmartEnv:!1,value:"16/08/2031"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Nation: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="nation"]',humanName:"Passport Nation: IL",selector:'[automation-passport-nation-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Issuing Country: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="issuing-country"]',humanName:"Passport Issuing Country: IL",selector:'[automation-passport-issuing-country-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"gender-random",autoGenerate:!1,displayValue:"Alternating: Male / Female",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',humanName:"Gender Alternating",options:[{displayValue:"Gender Male",humanName:"Gender Male",selector:'[automation-passenger-gender-option-value="male"]',value:"male"},{displayValue:"Gender Female",humanName:"Gender Female",selector:'[automation-passenger-gender-option-value="female"]',value:"female"}],selector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',tagName:"DIV",useSmartEnv:!1,value:"random"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="CAR"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"ביטול מכל סיבה – lastminute Ba"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="TSH"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`להזמין בראש שקט
כי כשקורה משהו`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="SER\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"חבילת שירות פרמיום מותאמת לעיד"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="ZRR\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`/
שינוי
$90.93 לנוסע`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="AIR024"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`פיצוי על עיכוב או ביטול טיסה
ת`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Skip",dropdownSelector:null,humanName:"Ancillary Skip",selector:'[automation-service-package-action="AIR024b"] [automation-service-package-skip]',tagName:"DIV",useSmartEnv:!1,value:"לא תודה, אולי בפעם הבאה"}]}});function ft(e){let t=String(e||"").toLowerCase();return t==="tzayad.com"||t.endsWith(".tzayad.com")||t.endsWith(".co.il")?"il":t.endsWith(".ae")||t==="mena.ae"||t.endsWith(".mena.ae")?"ae":t.endsWith(".sa")?"sa":t.endsWith(".kw")?"kw":t==="localhost"||t.startsWith("localhost")?"local":t.replace(/[^a-z0-9]+/g,"_")}function mt(e){let t=String(e||"").toLowerCase();return t.includes("/flights")||t.includes("/flight")?"flights":t.includes("/dynamic")?"dynamic":"site"}function gt(e){let t=String(e||"").toLowerCase();return t.includes("/checkout")?"checkout":t.includes("/payment")?"payment":t.replace(/^\/+|\/+$/g,"").replace(/[^a-z0-9]+/g,"_")||"page"}function en(e){let t=ft(e.hostname),n=mt(e.pathname),o=gt(e.pathname);return`fme_${t}_${n}_${o}`}function tn(e){return`fme_${e.hostname}${e.pathname}`}function ht(e,t){let n;try{n=new URL(t)}catch{return null}let o=Object.keys(e||{}).filter(m=>m.startsWith("fme_")&&!m.includes("folder_names")&&!m.includes("collapsed")&&Array.isArray(e[m])),r=en(n);if(o.includes(r))return r;let a=tn(n);if(o.includes(a))return a;let s=n.hostname.toLowerCase(),l=n.pathname.toLowerCase(),c=ft(s),p=mt(l),f=gt(l),g=o.find(m=>{let h=m.toLowerCase();return h.includes(`fme_${c}_`)&&h.includes(p)&&h.includes(f)});if(g)return g;let y=o.find(m=>{let h=m.toLowerCase();return h.includes(s)||h.includes(l)||p!=="site"&&f!=="page"&&h.includes(p)&&h.includes(f)});if(y)return y;if(f==="checkout"){let m=o.find(h=>{let P=h.toLowerCase();return P.includes(`fme_${c}_`)&&P.includes("_checkout")});if(m)return m}if(c==="local"){let m=o.find(h=>{let P=h.toLowerCase();return P.includes(p)&&P.includes(f)});if(m)return m;if(f==="checkout"){let h=o.find(P=>P.toLowerCase().includes("_checkout"));if(h)return h}}return null}var yt=E(()=>{});function on(){let e=null;try{e=window.__FME_PROFILES__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:Object.keys(e).length>0?e:null}function rn(){let e=null;try{e=localStorage.getItem(nn)}catch{return null}if(!e)return null;try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch{return null}}function ve(e,t){if(!e)return null;let n=ht(e,t);return!n||!Array.isArray(e[n])||e[n].length===0?null:{items:e[n],targetKey:n}}function Et(e){let t=e||location.href,n=ve(rn(),t);if(n)return{...n,source:"imported"};let o=ve(on(),t);if(o)return{...o,source:"url"};let r=ve(dt,t);return r?{...r,source:"baked"}:null}var nn,St=E(()=>{pt();yt();nn="fmeMobileBackup"});function ln(){let e=null;try{e=window.__FME_SETTINGS__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:{lang:e.lang==="en"?"en":"he",ancillaryMode:e.ancillaryMode==="select_services"?"select_services":"skip_all",overrides:e.overrides&&typeof e.overrides=="object"&&!Array.isArray(e.overrides)?e.overrides:{}}}function cn(e){try{return localStorage.getItem(e)}catch{return null}}function un(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function dn(){let e=cn(an);if(!e)return null;let t;try{t=JSON.parse(e)}catch{return null}return!t||typeof t!="object"||Array.isArray(t)?null:t}function pn(e,t){let n={};for(let[o,r]of Object.entries(e||{}))n[o]={...r};for(let[o,r]of Object.entries(t||{})){n[o]={...n[o]||{}};for(let[a,s]of Object.entries(r||{}))n[o][a]={...n[o][a]||{},...s}}return n}function q(){let e=ln()||{lang:"he",ancillaryMode:"skip_all",overrides:{}},t=dn();return t?{lang:t.lang==="en"?"en":t.lang==="he"?"he":e.lang,ancillaryMode:t.ancillaryMode==="select_services"?"select_services":t.ancillaryMode==="skip_all"?"skip_all":e.ancillaryMode,overrides:pn(e.overrides,t.overrides),source:"local"}:{lang:e.lang,ancillaryMode:e.ancillaryMode,overrides:e.overrides,source:"baked"}}function fn(){return q().ancillaryMode}function bt(){let e=fn();return un(sn,e),e}function wt(e,t,n){let o=(n||q().overrides)[t];return o?e.map(r=>{let a=o[r.selector];if(!a)return{...r};let s={...r};return typeof a.value=="string"&&(s.value=a.value,s.displayValue=a.value),typeof a.autoGenerate=="boolean"&&(s.autoGenerate=a.autoGenerate),typeof a.useSmartEnv=="boolean"&&(s.useSmartEnv=a.useSmartEnv),s}):e.map(r=>({...r}))}function vt(e,t){let n=(t||q().overrides)[e];return n?Object.keys(n).length:0}var an,sn,At=E(()=>{an="fmeMobileSettings",sn="fmeAncillaryMode"});function Pt(){if(document.getElementById(Tt))return;let e=document.createElement("style");e.id=Tt,e.textContent=mn,(document.head||document.documentElement).appendChild(e)}var Tt,mn,Nt=E(()=>{Tt="fme-mobile-styles",mn=`
#fme-notification-stack,
#fme-toast,
#fme-provider-badge,
#fme-mobile-sheet,
#fme-mobile-backdrop {
    --fme-bg: #0f1014;
    --fme-surface: #1b1c21;
    --fme-text: #ffffff;
    --fme-muted: #9ca3af;
    --fme-neon-blue: #00f0ff;
    --fme-neon-green: #00ff9d;
    --fme-neon-red: #ff3b4f;
    --fme-border: #2e3038;
    --fme-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans Hebrew', system-ui, sans-serif;
}

#fme-notification-stack,
#fme-notification-stack *,
#fme-toast,
#fme-toast *,
#fme-provider-badge,
#fme-provider-badge *,
#fme-mobile-sheet,
#fme-mobile-sheet * {
    font-family: var(--fme-font) !important;
    box-sizing: border-box;
}

/* ===== Toast stack (shared with the desktop extension markup) ===== */
#fme-notification-stack {
    position: fixed;
    top: 12px;
    right: 12px;
    left: 12px;
    z-index: 2147483647;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    pointer-events: none;
}

#fme-notification-stack > * {
    pointer-events: auto;
}

#fme-toast {
    --fme-toast-accent: var(--fme-neon-green);

    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;

    background: var(--fme-surface);
    color: var(--fme-text);

    border: 1px solid var(--fme-toast-accent);
    padding: 13px 16px;
    border-radius: 12px;

    font-size: 14px;
    font-weight: 800;
    line-height: 1.35;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.45);

    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);

    transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        visibility 0.3s ease;
}

#fme-toast[data-status="success"] { --fme-toast-accent: var(--fme-neon-green); }
#fme-toast[data-status="warning"] { --fme-toast-accent: #f0a500; }
#fme-toast[data-status="error"]   { --fme-toast-accent: var(--fme-neon-red); }

#fme-toast.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

#fme-toast[hidden] {
    display: none !important;
}

#fme-toast .fme-toast-icon {
    flex-shrink: 0;
    color: var(--fme-toast-accent);
    font-size: 18px;
    font-weight: 900;
}

#fme-toast .fme-toast-text {
    min-width: 0;
    overflow-wrap: anywhere;
}

/* ===== Flight provider badge ===== */
#fme-provider-badge {
    position: relative;

    width: 100%;

    padding: 9px 14px;
    border-radius: 10px;

    background: #17191f;
    color: #ffffff;
    border: 1px solid #6b7280;

    font-size: 13px;
    font-weight: 800;
    line-height: 1.35;

    overflow-wrap: anywhere;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
}

#fme-provider-badge[data-status="alp-only"]        { background: #2a1c05; border-color: #f0a500; }
#fme-provider-badge[data-status="amadeus-only"]    { background: #0f2b1d; border-color: #00ff9d; }
#fme-provider-badge[data-status="mixed"],
#fme-provider-badge[data-status="mixed-unknown"]   { background: #2b0f14; border-color: #ff3366; }
#fme-provider-badge[data-status="alp-unknown"],
#fme-provider-badge[data-status="amadeus-unknown"] { background: #2b210f; border-color: #f59e0b; }
#fme-provider-badge[data-status="unknown"]         { background: #17191f; border-color: #94a3b8; }

/* ===== Mobile action sheet ===== */
#fme-mobile-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2147483646;
    background: rgba(6, 6, 8, 0.62);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    border: 0;
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    height: 100%;
}

#fme-mobile-sheet {
    position: fixed;
    z-index: 2147483647;
    right: 0;
    bottom: 0;
    left: 0;

    max-height: 88vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    background: var(--fme-bg);
    color: var(--fme-text);
    border-top: 2px solid var(--fme-neon-red);
    border-radius: 18px 18px 0 0;

    padding: 14px 16px calc(16px + env(safe-area-inset-bottom, 0px));

    box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.6);

    animation: fme-m-rise 0.22s cubic-bezier(0.18, 0.89, 0.32, 1.15);
}

@keyframes fme-m-rise {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
}

#fme-mobile-sheet .fme-m-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 10px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--fme-border);
}

#fme-mobile-sheet .fme-m-titles {
    min-width: 0;
}

#fme-mobile-sheet .fme-m-brand {
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: var(--fme-neon-red);
}

#fme-mobile-sheet .fme-m-sub {
    margin-top: 2px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: var(--fme-muted);
}

#fme-mobile-sheet .fme-m-close {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--fme-border);
    background: var(--fme-surface);
    color: var(--fme-text);
    font-size: 19px;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
}

#fme-mobile-sheet .fme-m-status {
    padding: 10px 12px;
    margin-bottom: 12px;
    border-radius: 10px;
    background: var(--fme-surface);
    border: 1px solid var(--fme-border);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--fme-muted);
    overflow-wrap: anywhere;
}

#fme-mobile-sheet .fme-m-status b {
    color: var(--fme-text);
    font-weight: 900;
}

#fme-mobile-sheet .fme-m-status[data-tone="bad"] {
    border-color: var(--fme-neon-red);
    color: #ffd7dc;
}

#fme-mobile-sheet .fme-m-fill {
    display: block;
    width: 100%;
    min-height: 56px;
    margin-bottom: 14px;

    border: none;
    border-radius: 14px;

    background: linear-gradient(135deg, #d83a4e, #b91f3c);
    color: #ffffff;

    font-size: 17px;
    font-weight: 900;
    letter-spacing: 0.3px;
    cursor: pointer;

    box-shadow: 0 0 14px rgba(216, 58, 78, 0.35);
}

#fme-mobile-sheet .fme-m-fill:disabled {
    opacity: 0.5;
    cursor: default;
    box-shadow: none;
}

#fme-mobile-sheet .fme-m-label {
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--fme-muted);
}

#fme-mobile-sheet .fme-m-seg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 14px;
}

#fme-mobile-sheet .fme-m-seg button {
    min-height: 48px;
    padding: 6px 8px;

    border: 1px solid var(--fme-border);
    border-radius: 12px;
    background: var(--fme-surface);
    color: var(--fme-text);

    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
}

#fme-mobile-sheet .fme-m-seg button[aria-pressed="true"] {
    border-color: var(--fme-neon-red);
    background: rgba(255, 59, 79, 0.16);
    color: var(--fme-neon-red);
}

#fme-mobile-sheet .fme-m-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

#fme-mobile-sheet .fme-m-row button {
    min-height: 46px;
    padding: 6px 8px;

    border: 1px solid var(--fme-border);
    border-radius: 12px;
    background: transparent;
    color: var(--fme-text);

    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
}

#fme-mobile-sheet .fme-m-row button.fme-m-danger {
    border-color: rgba(255, 59, 79, 0.5);
    color: var(--fme-neon-red);
}

#fme-mobile-sheet .fme-m-row button.fme-m-primary {
    border-color: transparent;
    background: linear-gradient(135deg, #d83a4e, #b91f3c);
    color: #ffffff;
    font-weight: 900;
}

/* ===== Per-field controls ===== */
#fme-mobile-sheet .fme-m-fields {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
}

#fme-mobile-sheet .fme-m-field {
    padding: 9px 10px;
    border-radius: 11px;
    background: var(--fme-surface);
    border: 1px solid var(--fme-border);
}

#fme-mobile-sheet .fme-m-field-name {
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 900;
    color: var(--fme-text);
    overflow-wrap: anywhere;
}

#fme-mobile-sheet .fme-m-field-controls {
    display: flex;
    align-items: center;
    gap: 6px;
}

#fme-mobile-sheet .fme-m-field-input {
    flex: 1;
    min-width: 0;
    height: 40px;

    padding: 6px 9px;
    border: 1px solid var(--fme-border);
    border-radius: 9px;

    background: #08090c;
    color: #ffffff;

    font-size: 13px;
    font-weight: 700;
    text-align: start;
}

#fme-mobile-sheet .fme-m-field-input:disabled {
    color: var(--fme-neon-red);
    font-weight: 900;
    opacity: 1;
}

#fme-mobile-sheet .fme-m-field-ro {
    flex: 1;
    min-width: 0;
    padding: 10px 9px;
    border-radius: 9px;
    background: #08090c;
    border: 1px dashed var(--fme-border);
    color: var(--fme-muted);
    font-size: 12px;
    font-weight: 800;
    overflow-wrap: anywhere;
}

#fme-mobile-sheet .fme-m-magic {
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    border: 1px solid var(--fme-border);
    border-radius: 9px;
    background: transparent;

    font-size: 17px;
    line-height: 1;
    cursor: pointer;
    filter: grayscale(1);
    opacity: 0.55;
}

#fme-mobile-sheet .fme-m-magic[aria-pressed="true"] {
    border-color: var(--fme-neon-red);
    background: rgba(255, 59, 79, 0.16);
    filter: none;
    opacity: 1;
}

#fme-mobile-sheet .fme-m-scope {
    margin-top: 12px;
    padding: 9px 11px;
    border-radius: 9px;
    border: 1px solid rgba(0, 240, 255, 0.3);
    background: rgba(0, 240, 255, 0.05);
    font-size: 11px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--fme-muted);
}

#fme-mobile-sheet .fme-m-hint {
    margin: 8px 0 10px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--fme-muted);
}

#fme-mobile-sheet .fme-m-err {
    margin-bottom: 8px;
    min-height: 15px;
    font-size: 11px;
    font-weight: 800;
    color: var(--fme-neon-red);
}

#fme-mobile-sheet .fme-m-credit {
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid var(--fme-border);
    text-align: center;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    color: #fecd4d;
    opacity: 0.75;
}
`});var gn=Dt(()=>{ut();we();St();At();Nt();(async function(){try{window.__FME_RAN__=1}catch{}let t=q(),n=t.lang,o=bt();Pt();let r=Et();if(!r){T(n==="he"?"לא נמצא פרופיל מתאים לעמוד הזה":"No matching profile found for this page",n,!1);return}let a=wt(r.items,r.targetKey,t.overrides),s={targetKey:r.targetKey,source:r.source,fields:a.length,settingsSource:t.source,settingsOverrides:vt(r.targetKey,t.overrides),ancillaryMode:o,lang:n,url:location.href};try{window.__FME_LAST_FILL__=s}catch{}try{await ct(a,n)}catch(l){T((n==="he"?"שגיאה בזמן מילוי: ":"Error while filling: ")+String((l==null?void 0:l.message)||l),n,!1)}})()});gn();})();
