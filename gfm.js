// GENIUS FORM MASTER MOBILE — edit src/mobile/*.js and run "npm run build:mobile" instead of hand-editing this file.
(()=>{var S=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var Tt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var i,N,D=S(()=>{i={CONTACT_FIRST_NAME:'[name="fname"]',CONTACT_LAST_NAME:'[name="lname"]',CONTACT_EMAIL:'[name="email"]',CONTACT_EMAIL_CONFIRMATION:'[name="emailConfirm"]',CONTACT_PHONE_NUMBER:'[name="phone"]',CONTACT_MARKETING_CHECKBOX:"#allowSubscribe",SUMMARY_PAGE_READY:'[automation-payment-step-type="checkout-page"]',PAYMENT_DROPDOWN:'[automation-payment-field-type="dropdown"]',PAYER_FIRST_NAME:'[name="fname"]',PAYER_LAST_NAME:'[name="lname"]',PAYER_EMAIL:'[name="femail"]',PAYER_PHONE_NUMBER:'[name="fphone"]',AGREEMENT_CHECKBOX:'[automation-payment-field-type="agreement-checkbox"]',APPROVE_AND_CONTINUE_BTN:'[automation-payment-field-type="approve-and-continue-button"]',PASSENGER_CARD:"[automation-passenger-number]",PASSENGER_TYPE_ATTR:"automation-passenger-type",PASSENGER_FIRST_NAME:'[name="paxFName"]',PASSENGER_LAST_NAME:'[name="paxLName"]',BIRTHDAY:'[name="paxBirthDate"]',PASSPORT:'[name="passportNumber"]',PASSPORT_EXPIRATION:'[name="passportExpirationDate"]',GENDER_DROP:"[automation-passenger-gender-dropdown]",GENDER_MALE:'[automation-passenger-gender-option-value="male"]',GENDER_FEMALE:'[automation-passenger-gender-option-value="female"]',PASSPORT_NATION_DROPDOWN:'[automation-passport-field-type="nation"]',PASSPORT_ISSUING_COUNTRY_DROPDOWN:'[automation-passport-field-type="issuing-country"]',PASSPORT_NATION_IL:'[automation-passport-nation-option="IL"]',PASSPORT_ISSUING_COUNTRY_IL:'[automation-passport-issuing-country-option="IL"]',BAGGAGE_GROUP:'[automation-baggage-group="baggage"]',TROLLEY_GROUP:'[automation-baggage-group="trolley"]',BAGGAGE_INVALID_GROUP:'[automation-baggage-valid="false"]',BAGGAGE_ITEM:'[automation-baggage-item-type="baggage"]',TROLLEY_ITEM:'[automation-baggage-item-type="trolley"]',BAGGAGE_INCLUDED_ATTR:"automation-baggage-item-included",BAGGAGE_SELECTED_ATTR:"automation-baggage-item-selected",BAGGAGE_DIRECTION_ATTR:"automation-baggage-item-direction",BAGGAGE_KEY_ATTR:"automation-baggage-item-key",BAGGAGE_QUANTITY_ATTR:"automation-baggage-item-quantity",BAGGAGE_WEIGHT_ATTR:"automation-baggage-item-weight",BAGGAGE_VALID_ATTR:"automation-baggage-valid",ANCILLARY_SERVICE_SKIP:"[automation-service-package-skip]",ANCILLARY_SERVICE_SELECT:"[automation-service-package-select]",ANCILLARIES_CONTINUE:'[automation-container-action="ancillaries-continue"]',SEAT_PACKAGE_ACTION:"[automation-seat-package-action]",SEAT_ACTION:"[automation-seat-action]",SEATS_ANCILLARY:'[automation-seat-package-action="SEATS"]',SEATS_SKIP_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="skip-seat"]',SEATS_SELECT_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="select-seat"]'},N={he:{filled:"הטופס מולא!",fillError:"שגיאה בזמן מילוי",fillFailed:"הטופס לא מולא",extensionActionFailed:"פעולה נכשלה בתוסף",altQFillFailed:"Alt+Q לא הצליח להפעיל מילוי",altQNotStarted:"Alt+Q לא הופעל",ancillarySkipped:"דילוג שירותים נלווים בוצע",ancillarySkipNotFound:"לא נמצא כפתור דילוג שירותים נלווים",ancillaryGlobalSelectDone:"כל השירותים הנלווים נבחרו, הושבה דולגה",ancillaryGlobalSkipDone:"כל השירותים הנלווים דולגו, הושבה דולגה",fieldsFilled:e=>`${e} שדות מולאו בהצלחה`,fieldsPartiallyFilled:(e,t,n)=>`${e} שדות מולאו, ${t} נכשלו`+(n?` — ${n}`:""),cannotStartFillHere:"לא ניתן להפעיל מילוי בעמוד הזה",cannotFillRefresh:"לא ניתן למלא את השדות - רעננו את העמוד ונסו שוב",noProfileFound:"לא נמצא פרופיל מתאים לעמוד הזה",noSavedFieldsToFill:"לא נמצאו שדות שמורים למילוי",dir:"rtl"},en:{filled:"Form Filled!",fillError:"Error while filling",fillFailed:"The form was not filled",extensionActionFailed:"Extension action failed",altQFillFailed:"Alt+Q could not start autofill",altQNotStarted:"Alt+Q was not started",ancillarySkipped:"Ancillary services skipped",ancillarySkipNotFound:"Ancillary skip button was not found",ancillaryGlobalSelectDone:"All ancillary services selected, seats skipped",ancillaryGlobalSkipDone:"All ancillary services skipped, seats skipped",fieldsFilled:e=>`${e} fields filled successfully`,fieldsPartiallyFilled:(e,t,n)=>`${e} fields filled, ${t} failed`+(n?` — ${n}`:""),cannotStartFillHere:"Cannot start fill on this page",cannotFillRefresh:"Could not fill the fields - refresh the page and try again",noProfileFound:"No matching profile found for this page",noSavedFieldsToFill:"No saved fields found to fill",dir:"ltr"}}});async function k(e,{timeoutMs:t=750,intervalMs:n=150}={}){let o=Date.now();for(;;){let r;try{r=e()}catch{r=!1}if(r)return!0;if(Date.now()-o>=t)return!1;await new Promise(a=>setTimeout(a,n))}}async function ve(e,t){var g;if(!e)return!1;let n=e.tagName==="INPUT"&&(e.type==="checkbox"||e.type==="radio"),o=!n&&(e.getAttribute("role")==="checkbox"||e.hasAttribute("aria-checked"));if(n||o){let y=t===!0||t==="true";return(n?e.checked:e.getAttribute("aria-checked")==="true")!==y&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),n?e.checked===y:!0}let r=e.readOnly===!0;try{e.readOnly=!0}catch{}e.focus({preventScroll:!0});try{e.readOnly=r}catch{}let a=e.value,s=window.HTMLInputElement.prototype;e.tagName==="SELECT"&&(s=window.HTMLSelectElement.prototype),e.tagName==="TEXTAREA"&&(s=window.HTMLTextAreaElement.prototype);let l=(g=Object.getOwnPropertyDescriptor(s,"value"))==null?void 0:g.set;l?l.call(e,t):e.value=t,e.setAttribute("value",t);let c=e._valueTracker;c&&c.setValue(a),["keydown","keypress","input","keyup","change"].forEach(y=>{e.dispatchEvent(new Event(y,{bubbles:!0,composed:!0}))}),e.blur(),e.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}));let u=String(e.value||"").trim(),f=String(t||"").trim();return u===f||f.length>0&&u.length>0?!0:f.length===0?u===f:k(()=>String(e.value||"").trim().length>0,{timeoutMs:400,intervalMs:100})}function M(e){return Array.from(document.querySelectorAll(e)).filter(t=>{let n=t.getBoundingClientRect(),o=window.getComputedStyle(t);return n.width>0&&n.height>0&&o.visibility!=="hidden"&&o.display!=="none"&&o.opacity!=="0"})}async function L(e,t=1500){let n=Date.now();for(;Date.now()-n<t;){let o=M(e);if(o.length>0)return o[o.length-1];await new Promise(r=>setTimeout(r,40))}return null}function Y(e){if(!e)return!1;let t=`fme_click_${Date.now()}_${Math.random().toString(36).slice(2)}`;e.setAttribute("data-fme-click-token",t);let n=document.createElement("script");return n.textContent=`
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
    `,document.documentElement.appendChild(n),n.remove(),setTimeout(()=>{try{e.removeAttribute("data-fme-click-token")}catch{}},300),!0}function B(e){if(!e)return;let t=e.getBoundingClientRect();if(!(t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth))try{e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"})}catch{try{e.scrollIntoView(!1)}catch{}}}function Ae(){try{if(window.matchMedia)return window.matchMedia("(pointer: coarse)").matches}catch{}return Number(navigator.maxTouchPoints||0)>0}function Te(e,t,n){if(typeof TouchEvent>"u"||typeof Touch>"u")return!1;try{let o=new Touch({identifier:Pt++,target:e,clientX:t,clientY:n,screenX:t,screenY:n,pageX:t,pageY:n,radiusX:11,radiusY:11,force:1}),r={bubbles:!0,cancelable:!0,view:window};return e.dispatchEvent(new TouchEvent("touchstart",{...r,touches:[o],targetTouches:[o],changedTouches:[o]})),e.dispatchEvent(new TouchEvent("touchend",{...r,touches:[],targetTouches:[],changedTouches:[o]})),!0}catch{return!1}}function j(e){if(!e)return!1;try{B(e)}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r=Ae(),a={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},s={...a,pointerId:1,pointerType:r?"touch":"mouse",isPrimary:!0,width:r?23:1,height:r?23:1,pressure:.5};try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",s)),e.dispatchEvent(new PointerEvent("pointerenter",s)),e.dispatchEvent(new PointerEvent("pointerdown",s))),r&&Te(e,n,o),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...s,buttons:0,pressure:0})),e.dispatchEvent(new MouseEvent("mouseover",a)),e.dispatchEvent(new MouseEvent("mousedown",a)),e.dispatchEvent(new MouseEvent("mouseup",{...a,buttons:0})),e.dispatchEvent(new MouseEvent("click",{...a,buttons:0}))}catch{return!1}return!0}function I(e){if(!e)return!1;try{B(e)}catch{try{e.scrollIntoView(!1)}catch{}}try{e.focus({preventScroll:!0})}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},a=Ae(),s=a?"touch":"mouse";try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerenter",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerType:s,isPrimary:!0}))),a&&Te(e,n,o),e.dispatchEvent(new MouseEvent("mouseover",r)),e.dispatchEvent(new MouseEvent("mouseenter",r)),e.dispatchEvent(new MouseEvent("mousedown",r)),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new MouseEvent("mouseup",r)),e.dispatchEvent(new MouseEvent("click",r)),typeof e.click=="function"&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch{}return!0}function G(e){if(!e)return null;let t=e.getBoundingClientRect();if(!t||t.width<=0||t.height<=0)return e;let n=t.left+t.width/2,o=t.top+t.height/2;return document.elementFromPoint(n,o)||e}function w(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function J(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function _(e){return Array.from(document.querySelectorAll(e)).filter(J)}var Pt,T,F=S(()=>{Pt=1;T=e=>new Promise(t=>setTimeout(t,e))});function Nt(e){return!e||typeof e!="string"?!1:e.includes("automation-service-package-skip")||e.includes("automation-service-package-select")||e.includes("automation-seat-action")}function Pe(e){return!!(e&&e.selector&&Nt(e.selector))}function kt(){let e=_(i.ANCILLARIES_CONTINUE)[0];if(e)try{e.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"});return}catch{}try{window.scrollBy({top:520,left:0,behavior:"instant"})}catch{window.scrollBy(0,520)}}async function Rt(e,t){if(!e||!J(e))return!1;let n=e.querySelector(".radio-circle")||e.querySelector('input[type="radio"]')||e.querySelector('[role="radio"]')||e;try{return n.click(),n.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0}catch{return!1}}function Ne(e){return e==="select_services"?"select_services":"skip_all"}function Dt(){try{return Ne(localStorage.getItem("fmeAncillaryMode"))}catch{return"skip_all"}}function ee(){return new Promise(e=>{try{chrome.storage.local.get(["fmeAncillaryMode"],t=>{e(Ne(t==null?void 0:t.fmeAncillaryMode))})}catch{e(Dt())}})}async function te(){if(!ne())return null;let e=await ee(),t=e==="select_services"?[i.ANCILLARY_SERVICE_SELECT,i.SEATS_SKIP_OPTION]:[i.ANCILLARY_SERVICE_SKIP,i.SEATS_SKIP_OPTION],n=0,o=new Set;for(let r of t){let a=_(r);for(let s of a){if(!s||o.has(s))continue;o.add(s),await Rt(s,e==="select_services"?"select-all-services-and-skip-seats":"skip-all-services-and-seats")&&n++}}return n>0?(kt(),!0):!1}function ne(){return _(i.ANCILLARY_SERVICE_SKIP).length>0||_(i.SEAT_PACKAGE_ACTION).length>0||_(i.SEAT_ACTION).length>0}var ke=S(()=>{D();F()});function Mt(e){if(!e)return!1;if(e.hasAttribute(i.PASSENGER_TYPE_ATTR))return!0;let t=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.GENDER_DROP,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN].join(",");return!!e.querySelector(t)}function Me(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD)),t=new Map;for(let n of e){let o=n.getAttribute("automation-passenger-number");if(!o||!Mt(n))continue;let r=t.get(o);if(!r){t.set(o,n);continue}let a=!!n.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!n.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!n.querySelector(i.PASSPORT),s=!!r.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!r.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!r.querySelector(i.PASSPORT);a&&!s&&t.set(o,n)}return Array.from(t.values()).sort((n,o)=>{let r=Number(n.getAttribute("automation-passenger-number")),a=Number(o.getAttribute("automation-passenger-number"));return r-a})}function oe(e,t){return`[automation-passenger-number="${CSS.escape(String(e))}"] ${t}`}function R(e){if(!e)return null;let t=String(e.selector||""),n=String(e.dropdownSelector||""),o=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN];for(let r of o)if(t===r||t.endsWith(` ${r}`)||t.includes(r))return r;for(let r of[i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN])if(n===r||n.endsWith(` ${r}`)||n.includes(r))return r;return t===i.GENDER_DROP||t.endsWith(` ${i.GENDER_DROP}`)||n===i.GENDER_DROP||n.endsWith(` ${i.GENDER_DROP}`)||t.includes(i.GENDER_DROP)||n.includes(i.GENDER_DROP)?i.GENDER_DROP:null}function Ot(e,t){let n=t.getAttribute("automation-passenger-number"),o=R(e);if(!n||!o)return e;let r=oe(n,o),a={...e,selector:r};if(e.actionType==="gender-option"||e.actionType==="gender-random"||o===i.GENDER_DROP){let s=oe(n,i.GENDER_DROP);a.dropdownSelector=s,e.actionType==="gender-random"&&(a.selector=s),e.actionType==="gender-option"&&(a.selector=e.selector)}if(e.actionType==="passport-option"||o===i.PASSPORT_NATION_DROPDOWN||o===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN){let s=oe(n,o);a.dropdownSelector=s,e.actionType==="passport-option"&&(a.selector=e.selector)}return a}function q(e){let t=String(e||"").match(/automation-passenger-number="([^"]+)"/);return t?t[1]:null}function It(e,t){let n=new Set;for(let o of e){if(R(o)!==t)continue;let a=q(o.selector)||q(o.dropdownSelector);a&&n.add(a)}return n.size<=1}function Re(e){if(!e)return!1;try{return!!document.querySelector(e)}catch{return!1}}function De(e,t){if(!e||!t)return e;let n={...e,selector:t};return(e.actionType==="gender-option"||e.actionType==="gender-random"||t===i.GENDER_DROP)&&(n.dropdownSelector=i.GENDER_DROP,e.actionType==="gender-random"&&(n.selector=i.GENDER_DROP),e.actionType==="gender-option"&&(n.selector=e.selector)),(e.actionType==="passport-option"||t===i.PASSPORT_NATION_DROPDOWN||t===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)&&(n.dropdownSelector=t,e.actionType==="passport-option"&&(n.selector=e.selector)),n}function U(e){return e?e.actionType==="gender-option"||e.actionType==="gender-random"||e.actionType==="passport-option"?Re(e.dropdownSelector):Re(e.selector):!1}async function Oe(e,t=5e3){if(!Array.isArray(e))return!1;if(!e.some(r=>!!R(r)||(r==null?void 0:r.actionType)==="passport-option"||(r==null?void 0:r.actionType)==="gender-option"||(r==null?void 0:r.actionType)==="gender-random"))return!0;let o=Date.now();for(;Date.now()-o<t;){if(Me().length>0)return!0;let a=document.querySelector(i.PASSENGER_FIRST_NAME)||document.querySelector(i.PASSENGER_LAST_NAME)||document.querySelector(i.BIRTHDAY)||document.querySelector(i.PASSPORT)||document.querySelector(i.PASSPORT_EXPIRATION)||document.querySelector(i.PASSPORT_NATION_DROPDOWN)||document.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||document.querySelector(i.GENDER_DROP);await T(120)}return!1}function Ie(e){if(!Array.isArray(e))return[];let t=Me();t.length;let n=[],o=new Set,r=new Set;for(let a of e){let s=R(a);if(!s){let u=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;o.has(u)||(o.add(u),n.push(a));continue}if(!It(e,s)){let u=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;if(U(a)){o.has(u)||(o.add(u),n.push(a));continue}let f=De(a,s),g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;!r.has(g)&&U(f)&&(r.add(g),o.add(g),n.push(f));continue}let c=!1;for(let u of t){let f=Ot(a,u);if(!U(f))continue;let g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;o.has(g)||(o.add(g),n.push(f),c=!0)}if(!c){let u=De(a,s),f=`${u.actionType||""}|${u.selector||""}|${u.dropdownSelector||""}`;!r.has(f)&&U(u)&&(r.add(f),o.add(f),n.push(u))}}return n}var z=S(()=>{D();F()});var re,Ge=S(()=>{re={fmeGenderToggle:0,fmeQuickFillKeyLock:!1}});async function xe(e){if(!e||e.actionType!=="gender-random"||!e.dropdownSelector||!Array.isArray(e.options)||e.options.length===0)return!1;let t=e.options.some(a=>a.selector===i.GENDER_MALE),n=e.options.some(a=>a.selector===i.GENDER_FEMALE);if(!t||!n)return!1;let o=String(e.value||"random").toLowerCase(),r;return o==="male"?r=i.GENDER_MALE:o==="female"?r=i.GENDER_FEMALE:(r=re.fmeGenderToggle%2===0?i.GENDER_MALE:i.GENDER_FEMALE,re.fmeGenderToggle++),ae(e.dropdownSelector,r)}async function Ce(e,t){let n=_t(e);if(!n)return!1;let o=async r=>t?k(()=>M(t).length===0,{timeoutMs:r,intervalMs:30}):(await T(r),!1);return I(n),!!(await o(450)||(Y(n),await o(450),n.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),n.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),t&&M(t).length===0))}function Gt(e){return e?[e.querySelector('[role="combobox"]'),e.querySelector('[aria-haspopup="listbox"]'),e.querySelector("[aria-expanded]"),e.querySelector("button"),e.querySelector("input"),G(e),e].filter(Boolean):[]}async function Le(e,t){let n=[...new Set(Gt(e))],o=M(t);if(o.length>0)return o[o.length-1];for(let r of n){j(r);let a=await L(t,500);if(a||(r.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"ArrowDown",code:"ArrowDown"})),a=await L(t,400),a))return a}return null}function _t(e){if(!e)return null;let t=G(e);return(t==null?void 0:t.closest("[automation-passenger-gender-option-value]"))||(t==null?void 0:t.closest("[automation-passport-nation-option]"))||(t==null?void 0:t.closest("[automation-passport-issuing-country-option]"))||(t==null?void 0:t.closest('[role="option"]'))||(t==null?void 0:t.closest("li"))||(t==null?void 0:t.closest("button"))||e.closest("[automation-passenger-gender-option-value]")||e.closest("[automation-passport-nation-option]")||e.closest("[automation-passport-issuing-country-option]")||e.closest('[role="option"]')||e.closest("li")||e.closest("button")||t||e}async function _e(e,t){if(M(e).length===0)return;t&&I(t);let n=await k(()=>M(e).length===0,{timeoutMs:250,intervalMs:30});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await k(()=>M(e).length===0,{timeoutMs:200,intervalMs:30}))}function Fe(e){if(!e)return!1;if(e.classList.contains("selected")||e.getAttribute("aria-selected")==="true")return!0;let t=e.querySelector('input[type="radio"]');return!!(t&&t.checked===!0)}async function Ft(e,t){var l;if(!e||!t)return!1;let n=document.querySelector(e);if(!n)return!1;j(n);let o=await L(t,1200);if(!o)return!1;let r=o.querySelector('input[type="radio"]')||o.querySelector("label")||o.closest("[automation-passenger-gender-option-value]")||o;if(!r)return!1;B(r);let a=o.querySelector('input[type="radio"]')||((l=r.closest("[automation-passenger-gender-option-value]"))==null?void 0:l.querySelector('input[type="radio"]'))||(r.type==="radio"?r:null);return a&&a.checked!==!0&&(a.click(),a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),a.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await k(()=>a.checked===!0||Fe(o),{timeoutMs:700,intervalMs:30}))?(await _e(t,n),!0):(r.click(),r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),r.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await k(()=>Fe(o)||M(t).length===0,{timeoutMs:1200,intervalMs:30})?(await _e(t,n),!0):!1)}async function ae(e,t){if(await Ft(e,t))return!0;let o=document.querySelector(e);if(!o)return!1;let r=await Le(o,t);if(!r)return!1;let a=await Ce(r,t);return a}var ie=S(()=>{D();F();Ge()});function se(e){if(!e)return null;let t=$(e.selector);if(t)return String(t).trim().toUpperCase();let n=String(e.value||"").trim().toUpperCase();return/^[A-Z]{2,3}$/.test(n)?n:null}function le(e){let t=String((e==null?void 0:e.dropdownSelector)||""),n=String((e==null?void 0:e.selector)||"");return t.includes('automation-passport-field-type="issuing-country"')||n.includes("automation-passport-issuing-country-option")?"issuing-country":t.includes('automation-passport-field-type="nation"')||n.includes("automation-passport-nation-option")?"nation":null}async function Ye(e,t){if(!w(document.querySelector(e)||{}))return;t&&I(t);let n=await k(()=>!w(document.querySelector(e)||{}),{timeoutMs:400,intervalMs:80});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await k(()=>!w(document.querySelector(e)||{}),{timeoutMs:250,intervalMs:80}))}async function xt(e,t){var y,m;if(!e||!t)return!1;let n=q(e),r=(n?document.querySelector(`[automation-passenger-number="${CSS.escape(n)}"]`):null)||document,a=Ct(e),s=document.querySelector(e)||r.querySelector(a);if(!s)return!1;let l=s.closest(".selector-input-wrapper")||((y=s.closest(".subject-wrapper"))==null?void 0:y.closest(".selector-input-wrapper"))||s.parentElement,c=[l==null?void 0:l.querySelector(".subject-wrapper"),l==null?void 0:l.querySelector(".dropdown-subject"),s.closest(".subject-wrapper"),s,G(s)].filter(Boolean),u=null;for(let h of[...new Set(c)])if(I(h),await T(100),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(w)||Array.from(document.querySelectorAll(t)).find(w),u&&w(u)||(Y(h),await T(220),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(w)||Array.from(document.querySelectorAll(t)).find(w),u&&w(u))||(h.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),h.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await T(180),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(w)||Array.from(document.querySelectorAll(t)).find(w),u&&w(u)))break;if(!u||!w(u))return!1;if(u.classList.contains("selected"))return await Ye(t,s),!0;let f=((m=G(u))==null?void 0:m.closest("[automation-passport-nation-option], [automation-passport-issuing-country-option]"))||u.querySelector("input")||u.querySelector("label")||u.querySelector("span")||u;I(f),await k(()=>!!(l!=null&&l.querySelector(`${t}.selected`)||document.querySelector(`${t}.selected`)),{timeoutMs:1500,intervalMs:100});let g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`);return g||(Y(f),await T(250),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g||(f.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),f.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await T(180),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g&&await Ye(t,s),!!g}function Ct(e){let t=String(e||"");return t.includes('automation-passport-field-type="issuing-country"')?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:t.includes('automation-passport-field-type="nation"')?i.PASSPORT_NATION_DROPDOWN:t}async function Be(e){if(!e||e.actionType!=="passport-option"||!e.dropdownSelector)return!1;let t=se(e),n=le(e),o=ze(e);if(!t||!n||!o)return!1;let r=2;for(let a=1;a<=r;a++){if(a>1&&await T(100),await xt(e.dropdownSelector,o))return!0;await T(100)}return!1}var ce=S(()=>{D();ie();F();z();H()});function W(e){if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=t.closest(i.PASSENGER_CARD);return n?n.getAttribute(i.PASSENGER_TYPE_ATTR):null}function $e(e){return!e||typeof e!="string"?!1:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL||e.includes("automation-passport-nation-option")||e.includes("automation-passport-issuing-country-option")}function $(e){if(!e)return null;let t=e.match(/automation-passport-nation-option="([^"]+)"/);if(t)return t[1];let n=e.match(/automation-passport-issuing-country-option="([^"]+)"/);return n?n[1]:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL?"IL":null}function x(e){let t=$(e);return t?e.includes("automation-passport-nation-option")?`Passport Nation: ${t}`:e.includes("automation-passport-issuing-country-option")?`Passport Issuing Country: ${t}`:`Passport Country: ${t}`:"Passport Country"}function ue(e){return Array.isArray(e)?e.map(t=>{if(!t||!t.selector)return t;let n=String(t.selector||""),o=String(t.dropdownSelector||""),r=String(t.value||"").toUpperCase();if(t.actionType==="passport-option"&&t.dropdownSelector&&$e(t.selector))return{...t,value:$(t.selector)||t.value,displayValue:t.displayValue||x(t.selector),humanName:t.humanName||x(t.selector),useSmartEnv:!1,autoGenerate:!1};if($e(n)){let l=n.includes("automation-passport-nation-option")||n===i.PASSPORT_NATION_IL,c=n.includes("automation-passport-issuing-country-option")||n===i.PASSPORT_ISSUING_COUNTRY_IL,u=o||(l?i.PASSPORT_NATION_DROPDOWN:null)||(c?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:null);return u?{...t,selector:n,value:$(n),displayValue:x(n),humanName:x(n),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:u}:t}let a=n.includes(i.PASSPORT_NATION_DROPDOWN)||o.includes(i.PASSPORT_NATION_DROPDOWN),s=n.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||o.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN);if((a||s)&&r==="IL"){let l=o||n,c=a?i.PASSPORT_NATION_IL:i.PASSPORT_ISSUING_COUNTRY_IL;return{...t,selector:c,value:"IL",displayValue:x(c),humanName:x(c),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:l}}return t}):[]}function Lt(e){return!e||typeof e!="string"?!1:e===i.GENDER_MALE||e===i.GENDER_FEMALE}function de(e){if(!Array.isArray(e))return[];let t=[],n=new Map;for(let o of e){if(o&&o.actionType==="gender-option"&&o.dropdownSelector&&Lt(o.selector)){let r=o.dropdownSelector;n.has(r)||n.set(r,[]),n.get(r).push(o);continue}t.push(o)}for(let[o,r]of n.entries()){let a=[];for(let c of r)a.some(u=>u.selector===c.selector)||a.push(c);let s=a.some(c=>c.selector===i.GENDER_MALE),l=a.some(c=>c.selector===i.GENDER_FEMALE);if(s&&l){t.push({selector:o,value:"random",displayValue:"Alternating: Male / Female",humanName:"Gender Alternating",tagName:"DIV",actionType:"gender-random",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:o,options:[{selector:i.GENDER_MALE,value:"male",displayValue:"Gender Male",humanName:"Gender Male"},{selector:i.GENDER_FEMALE,value:"female",displayValue:"Gender Female",humanName:"Gender Female"}]});continue}a.length>0&&t.push(a[0])}return t}function ze(e){let t=se(e),n=le(e);return!t||!n?(e==null?void 0:e.selector)||null:n==="issuing-country"?`[automation-passport-issuing-country-option="${CSS.escape(t)}"]`:`[automation-passport-nation-option="${CSS.escape(t)}"]`}function Ve(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return t===i.CONTACT_FIRST_NAME||t===i.CONTACT_LAST_NAME||t===i.CONTACT_EMAIL||t===i.CONTACT_EMAIL_CONFIRMATION||t===i.CONTACT_PHONE_NUMBER||t===i.CONTACT_MARKETING_CHECKBOX||t===i.PAYER_FIRST_NAME||t===i.PAYER_LAST_NAME||t===i.PAYER_EMAIL||t===i.PAYER_PHONE_NUMBER}function Ke(e){if(!e||!e.selector)return!1;let t=R(e);return t===i.PASSENGER_FIRST_NAME||t===i.PASSENGER_LAST_NAME||t===i.BIRTHDAY||t===i.PASSPORT||t===i.PASSPORT_EXPIRATION}function pe(e){if(!e)return!1;let t=R(e),n=String(e.selector||"");return t===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION)}function Z(e){if(!e)return!1;let t=R(e),n=String(e.selector||"");return t===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION)}function Ue(e){let t=String(e||"").trim().toLowerCase();return!t||t==="click action"||t==="dd/mm/yyyy"||t==="mm/dd/yyyy"||t==="undefined"||t==="null"}var H=S(()=>{D();z();ce()});function me(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)],t=Math.floor(1e7+Math.random()*9e7);return`${e}${t}`}function He(e){if(!e)return null;let t=String(e).match(/(\d{2})\/(\d{2})\/(\d{4})/);if(!t)return null;let n=Number(t[1]),o=Number(t[2]),r=Number(t[3]),a=new Date(r,o-1,n);return a.getFullYear()!==r||a.getMonth()!==o-1||a.getDate()!==n?null:a}function qe(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function We(e){let t=String(e||"").match(/\d{2}\/\d{2}\/\d{4}/g);if(!t||t.length<2)return null;let n=t.map(He).filter(Boolean).sort((o,r)=>o.getTime()-r.getTime());return n.length<2?null:{minDate:n[0],maxDate:n[n.length-1]}}function ge(e){var o,r,a,s,l,c;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,(c=(l=(s=t.parentElement)==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:c.parentElement].filter(Boolean);for(let u of n){let f=u.innerText||"",g=We(f);if(g)return g}return null}function Ze(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return R(e)===i.BIRTHDAY||t.includes(i.BIRTHDAY)||t.includes('[name="paxBirthDate"]')}function Xe(e,t){if(!e||!t)return!1;let n=He(e);return n?n.getTime()>=t.minDate.getTime()&&n.getTime()<=t.maxDate.getTime():!1}function Yt(e){var o,r,a;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,t.closest(i.PASSENGER_CARD),t.closest("form")].filter(Boolean);for(let s of n){let l=We(s.innerText||"");if(l)return l}return null}function X(e,t){let n=new Date(e.getTime());return n.setDate(n.getDate()+t),n}function fe(e,t){let n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n}function V(e,t){let n=e.getTime(),o=t.getTime();if(o<=n)return qe(e);let r=n+Math.floor(Math.random()*(o-n+1));return qe(new Date(r))}function he(e=null){let t=new Date,n=Yt(e);if(n){let a=X(n.minDate,3),s=X(n.maxDate,-3);return V(a,s)}let o=fe(t,18),r=new Date(t.getFullYear()+9,t.getMonth(),t.getDate());return V(o,r)}function Qe(e,t=null){if(!t)return null;let n=String(t.selector||""),o=R(t);if(o===i.BIRTHDAY||n.includes(i.BIRTHDAY)){let g=W(t);return ye(g,t)}if(o===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION))return he(t);if(o===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION))return me();if(n.includes('[name="fname"]')||n.includes('[name="paxFName"]'))return O.firstNames[Math.floor(Math.random()*O.firstNames.length)];if(n.includes('[name="lname"]')||n.includes('[name="paxLName"]'))return O.lastNames[Math.floor(Math.random()*O.lastNames.length)];if(n.includes('[name="femail"]')||n.includes('[name="email"]')||n.includes('[name="emailConfirm"]')){let g=O.firstNames[Math.floor(Math.random()*O.firstNames.length)].toLowerCase().replace(/\s+/g,""),y=O.lastNames[Math.floor(Math.random()*O.lastNames.length)].toLowerCase().replace(/\s+/g,""),m=Math.floor(1e3+Math.random()*9e3);return`${g}.${y}${m}@test.com`}return n.includes('[name="fphone"]')||n.includes('[name="phone"]')?Bt():null}function Bt(){let e=["050","052","054","058"],t=e[Math.floor(Math.random()*e.length)],n=Math.floor(1e6+Math.random()*9e6);return`${t}-${n}`}function ye(e,t=null){let n=ge(t);if(n){let u=X(n.minDate,3),f=X(n.maxDate,-3);return u.getTime()<=f.getTime()?V(u,f):V(n.minDate,n.maxDate)}let o=new Date,r=String(e||"").trim(),a,s,l;switch(r){case"1":l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break;case"2":l="Child",a=new Date(o.getFullYear()-11,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-3,o.getMonth(),o.getDate());break;case"3":l="Infant",a=fe(o,-14),s=fe(o,-3);break;case"4":l="Senior",a=new Date(o.getFullYear()-85,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-65,o.getMonth(),o.getDate());break;case"6":l="Youth",a=new Date(o.getFullYear()-24,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-12,o.getMonth(),o.getDate());break;default:l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break}return V(a,s)}var O,je=S(()=>{D();z();H();O={firstNames:["Daniel","Omer","Idan","Guy","Ben","Lior","Amit","Neta","Ron","Eyal","Ori","Tom","Alex","Max","Leo","Itay","Yonatan","Ariel","Noam","Itamar","Roy","Eitan","Ari","Dvir","Roee","Ido","Matan","Shahar","Aviv","Ziv","Peleg","Nadav","Gilad","Eran","Ofer","Boaz","Yair","Asaf","Elad","Omri","Nir","Lavi","Gefen","Ilay","Harel","Yahav","Alon","Maor","Or","Yahali","Rom","Yuval","Yarden","Gal","Dean","Reem","Dor","Tomer","Yaniv","Ohad","Erez","Liran","Yotam","Oded","Barak","Zvi","Udi","Dror","Hagai","Miki","Kobi","Yossi","Avi","Gabi","Yaron","Gidi","Shay","Oz","Adir","Paz","Tzur","Sagi","Raz","Eliav","Eliran","Elior","Yishai","Yigal","Amichai","Elisha","Netanel","Nehorai","Orel","Osher","Shoval","Lidor","Shir","Moran","Meitar","Dagan","Dekel","Assaf","Moti","Shmulik","Itzik","Gadi","Haim","Dudu","Tzachi","Rafi","Meir","Zion","Baruch","Efraim","Menachem","Reuven","Shimon","Asher","Dan","Gad","Naftali","Levi","Yehoshua","Pinchas","Nissim","Shalom","Shlomi","Tamir","Natan","Amiram","Ovadia","Yoav","Binyamin","Uzi","Pini","Tzvika","Nitzan","Rotem","Dolev","Ofek","Snir","Almog","Yagel","Shoham","Arad","Kerem","Amri","Yiftach","Yinon","Eviatar","Elyashiv","Avishai","Avitar","Eliezer","Elchanan","Oriel","Tzion","Arbel","Noa","Maya","Sarah","Tamar","Emma","Yael","Adi","Shira","Dana","Ella","Mia","Zoe","Roni","Mika","Adele","Romi","Noga","Yuli","Alma","Ayala","Hila","Michal","Ofri","Rina","Avigail","Efrat","Naama","Renana","Moriah","Tehila","Odelia","Racheli","Yehudit","Tzlil","Shahaf","Sahar","Tair","Liel","Tahel","Maayan","Sivan","Lidar","Linoy","Meshi","Tohar","Hodaya","Bat El","Orian","Shirel","Noy","Noi","Liat","Shani","Koral","Shaked","Nofar","Sapira","Zohar","Gili","Hadar","Libby","Shelly","Netta","Ruti","Nomi","Gila","Nira","Tami","Liora","Shula","Yaara","Danya","Amir","Yoram","Ilan","Arik","Sasson","Umar","Oshri","Rami","Amnon","Avner","Eliad","Elik","Elitzur","Ilanit","Orna","Dorit","Levana","Ruchama","Oshrat","Kalanit","Shlomit","Margalit","Pazit","Sarit","Mirit","Nirit","Tirtza","Alona","Tziona","Tzvia","Dikla","Oshra","Talia","Odel","Aya","Shirley","Linor","Yam","Ravid","Aharon","Akiva","Ami","Amitai","Amos","Arie","Arieh","Ariel","Aryeh","Aviad","Avidan","Aviel","Avigdor","Avihai","Avinoam","Aviram","Avishag","Avital","Ayala","Ayelet","Bar","Batya","Boaz","Bracha","Carmel","Carmela","Chaim","Chana","Chanan","Chava","Chaya","Chen","Dafna","Dalia","Daniela","Daria","David","Devorah","Dinah","Ehud","Elad","Elchanan","Eli","Eliana","Elijah","Elisha","Elisheva","Eliyahu","Elkana","Emanuel","Emuna","Esther","Esti","Eyal","Ezra","Galia","Galit","Gavriel","Geula","Guy","Hagar","Hillel","Idit","Ido","Ilana","Inbar","Iris","Ishay","Itai","Itamar","Itzhak","Keren","Kinneret","Leah","Levi","Libi","Liron","Livnat","Malka","May","Meital","Merav","Michael","Miri","Miriam","Mor","Moshe","Naaman","Nadia","Naftali","Naomi","Narkis","Nava","Nechemya","Nehorai","Nili","Nimrod","Nitzan","Noam","Noya","Nurit","Oded","Ofira","Ofra","Omri","Ora","Oren","Ori","Orian","Orli","Osher","Osnat","Peleg","Penina","Pinchas","Raanan","Rachel","Rakefet","Ran","Ravid","Raz","Reut","Reuven","Revital","Rinat","Roei","Ronen","Ronit","Roy","Ruth","Sapir","Sara","Sarit","Shachar","Shai","Shaked","Shalev","Shalom","Shalva","Shani","Shaul","Sharon","Sharona","Shifra","Shilat","Shimon","Shir","Shira","Shirel","Shiri","Shlomo","Shlomit","Shlomi","Shmuel","Shmulik","Shoshana","Shoval","Sigal","Sigalit","Sima","Simcha","Sivan","Smadar","Stav","Tahel","Tair","Tal","Talia","Tamar","Tamir","Tanya","Techiya","Tehila","Tikva","Tohar","Tom","Tomer","Tova","Tzachi","Tzila","Tzion","Tziona","Tzlil","Tzofia","Tzur","Udi","Uri","Uriel","Uzi","Uziel","Vered","Yaakov","Yael","Yaeli","Yaffa","Yagil","Yahali","Yahav","Yair","Yakir","Yam","Yaniv","Yarden","Yardena","Yaron","Yasmin","Yechiel","Yedidya","Yehezkel","Yehoshua","Yehuda","Yehudit","Yemima","Yeshayahu","Yifat","Yigal","Yishai","Yisrael","Yitzhak","Yoav","Yocheved","Yoel","Yonatan","Yoram","Yosef","Yossi","Yotam","Yuli","Yuval","Zahava","Zecharia","Zeev","Zehava","Zila","Zion","Ziv","Ziva","Zohar","Zvi","Zvika","Zemer","Agam","Ahuva","Aliza","Amalia","Anat","Atara","Avia","Aviva","Batsheva","Benaya","Bezalel","Carmit","Chanoch","Danit","Dina","Drora","Eden","Edna","Einat","Elazar","Elia","Elin","Elyakim","Emil","Fima","Frida","Gali","Gedalia","Gil","Gilead","Gittit","Golda","Hadas","Hadasa","Hallel","Hanan","Hedva","Hezi","Hinda","Hod","Ilai","Irit","Laly","Lev","Lida","Limor","Liraz","Lital","Magen","Mali","Maoz","Naya","Matityahu","Mazal","Meirav","Menashe","Meni","Micha","Mina","Misha","Moshik","Nati","Nechama","Neria","Netaly","Nof","Nuriel","Orit","Ortal","Oshrit","Pnina","Raanan","Rahel","Rama","Reena","Riki","Rona","Sagit","Sefi","Shila","Shimshon","Nevo","Shosh","Tali","Talma","Tiferet","Tomi","Tovia","Varda","Viki","Yakira","Yafit","Yana","Yirmiyahu","Yonit","Yosefa","Zehavit","Zelig","Zmira","Zohara"],lastNames:["Cohen","Levi","Mizrachi","Peretz","Biton","Friedman","Katz","Azoulay","Golan","Shapira","Tal","Bar","Mor","Dahan","Gabay","Adler","Segal","Klein","Weiss","Schwartz","Ohana","Malka","Yosef","David","Avraham","Yitzhak","Yaakov","Moshe","Aharon","Solomon","Levin","Kogan","Rosen","Rubin","Stern","Kaplan","Greenberg","Berman","Dayan","Feldman","Pinto","Edri","Amar","Asulin","Ben David","Ben Ami","Ben Zvi","Hadad","Hazan","Melamed","Navon","Peleg","Tzur","Shahar","Shoham","Alon","Amoyal","Abergel","Atias","Ohayon","Elbaz","Vaknin","Zada","Toledano","Lugasi","Maman","Marciano","Suissa","Ozeri","Sheetrit","Turgeman","Tzarfati","Kadoch","Karadi","Revivo","Shushan","Alfasi","Buzaglo","Deri","Halabi","Yifrach","Malul","Siboni","Shafir","Abutbul","Aharoni","Alcalay","Aloni","Amir","Amit","Amitai","Appel","Arama","Arnon","Ashkenazi","Assaraf","Atar","Avidan","Avigdor","Avinery","Avishai","Avni","Ayalon","Babad","Bacher","Badash","Bahar","Banai","Bar Ilan","Bar Lev","Bar Natan","Bar On","Barak","Barazani","Barda","Barel","Barkai","Bashan","Basson","Batzri","Baum","Beck","Becker","Behar","Beinart","Ben Ari","Ben Atar","Ben Basat","Ben Chaim","Ben Dov","Ben Ezra","Ben Gurion","Ben Haim","Ben Lulu","Ben Moshe","Ben Natan","Ben Porat","Ben Shabbat","Ben Shahar","Ben Shimon","Ben Shlomo","Ben Yehuda","Ben Yitzhak","Ben Zaken","Ben Zeev","Berger","Berkovich","Berkowitz","Bernstein","Bitan","Blau","Bloch","Blum","Boker","Borochov","Brand","Braverman","Brik","Brikman","Brisk","Cahan","Cahana","Carmi","Caspi","Chaim","Chalfon","Chelouche","Chen","Churgin","Dagan","Dahari","Damari","Dan","Dangot","Danieli","Danon","Dar","Darshan","Daskal","Dassa","Davidi","Davidov","Davidovich","Dekel","Deutsch","Diamond","Dichter","Dror","Drori","Eckstein","Efrati","Eilat","Einhorn","Eisenberg","Eisenstein","Elalouf","Elam","Elazar","Eliav","Elimelech","Elkayam","Elkobi","Emanuel","Engel","Epstein","Erez","Eshkol","Even","Ezra","Fadida","Falah","Farchi","Farkash","Fatihi","Fattal","Fine","Finkelstein","Fishman","Fleischer","Fogel","Fox","Frank","Frankel","Frenkel","Fried","Fuchs","Gabbay","Gafni","Gal","Galanti","Galili","Gamzu","Gaon","Garty","Gavish","Gavrieli","Gefen","Gelb","Gelber","Geller","Gerber","Gershon","Gil","Giladi","Gilboa","Gilon","Ginzburg","Givati","Glass","Glick","Glickman","Glazer","Gofman","Gold","Goldberg","Goldenberg","Goldfarb","Goldman","Goldschmidt","Goldstein","Gonen","Gordon","Gottlieb","Geva","Gross","Grossman","Gruber","Gruen","Guri","Gutman","Guttman","Haas","Haber","Habib","Hafouta","Halfon","Halperin","Hamburger","Har Zvi","Harari","Harel","Hason","Hasson","Haviv","Hecht","Helfgott","Heller","Herman","Hersch","Hershkovitz","Hertz","Herzl","Herzog","Hess","Hirsch","Hirschfeld","Hochman","Hod","Hoffman","Horn","Horowitz","Huldai","Hurvitz","Ifargan","Ifergan","Ilan","Ilani","Imanuel","Inbar","Isaacs","Isaacson","Israel","Israeli","Issachar","Itach","Itzhaki","Ivanir","Jacob","Jacobs","Jacobson","Jaffe","Jafari","Jonas","Joseph","Kadosh","Kahan","Kahana","Kalfon","Kaminski","Kantor","Kariv","Karni","Karp","Kasher","Katan","Kaufman","Kedar","Keinan","Kellner","Keren","Kessler","Khoury","Kimchi","Kishon","Kleinman","Knafo","Kobi","Kochavi","Koren","Korman","Korn","Kramer","Kraus","Krauss","Krebs","Krieger","Kritzman","Kupfer","Lahav","Landau","Laniado","Lapid","Lasker","Lavie","Lazar","Leder","Lehrer","Leibovich","Leibowitz","Leon","Lerner","Leshem","Lev","Levanon","Lehavi","Levy","Lewis","Liberman","Lieberman","Lifshitz","Linder","Lior","Lipman","Liran","Lishchinsky","Litzman","Livne","Livni","Locker","Loeb","Luria","Lurie","Lustig","Maayan","Magen","Maimon","Makhlouf","Malachi","Malihi","Mandel","Mandelbaum","Manor","Mansour","Maor","Marcus","Margolis","Mark","Markovitz","Marks","Mayer","Maymon","Mazar","Mazor","Meidan","Meiri","Melnik","Menachem","Menashe","Mendel","Meroz","Meshulam","Meyer","Meyers","Michaeli","Milshtein","Minsky","Mintz","Miron","Misgav","Mofaz","Molcho","Morad","Morag","Mordechai","Morgenstern","Moyal","Nachman","Nachmias","Nachshon","Nadel","Nager","Naim","Narkis","Natan","Nathanson","Naveh","Neeman","Nehemya","Nesher","Netzer","Neuman","Neumann","Newman","Nimrodi","Nir","Nissenbaum","Niv","Nof","Noy","Nudel","Nussbaum","Oded","Ofer","Ofir","Ofran","Oliel","Omer","Oppenheim","Oren","Orbach","Oron","Ozer","Pachter","Padeh","Palti","Papo","Parnes","Pasi","Pass","Pearl","Pelled","Pen","Peres","Peri","Perlman","Perry","Pinhasi","Podolsky","Polak","Pollack","Polonsky","Pomerantz","Porat","Portal","Poupko","Priver","Radomsky","Rafael","Rahamim","Ram","Ramon","Rappaport","Ratzon","Raviv","Raz","Reich","Reichman","Reif","Reiss","Reiter","Reshef","Reuven","Reuveni","Richter","Rimon","Ringel","Rochman","Roitman","Roman","Romm","Ron","Ronen","Roni","Rosenbaum","Rosenberg","Rosenblatt","Rosenblum","Rosenfeld","Rosner","Ross","Rost","Roth","Rothman","Rothschild","Rozen","Rubenstein","Sachs","Sadan","Sade","Sadeh","Sagi","Sagiv","Salmon","Salton","Salzman","Samuels","Sapir","Sarid","Sason","Sasson","Savir","Schachter","Schaeffer","Scharf","Schatz","Schechter","Schein","Schenker","Schiff","Schiller","Schindler","Schipper","Schlesinger","Schlosser","Schneider","Scholem","Schreiber","Schroeder","Schulman","Schuster","Schwab","Shafran","Shaham","Shalev","Shaltiel","Shamir","Shamni","Shani","Shapiro","Sharet","Sharon","Sharoni","Shatz","Shaul","Shay","Shechter","Shefi","Sheleg","Shemer","Shenhav","Sher","Sherman","Shilo","Shiloh","Shilon","Shimi","Shimoni","Shinwell","Shir","Shirazi","Shkedi","Shkolnik","Shlomi","Shmuel","Shmueli","Shneor","Shochat","Shomron","Shpigel","Shpitalni","Shraga","Shtal","Shulman","Shvartz","Shwartz","Silber","Silberman","Silver","Silverman","Simcha","Simon","Sinai","Singer","Sivan","Sneh","Sobel","Sofer","Sokolov","Soloveichik","Somekh","Sommer","Sopher","Spector","Spiegel","Spielberg","Spira","Spitz","Spitzer","Stahl","Stark","Stein","Steinberg","Steiner","Steinhardt","Sternberg","Stulman","Sussman","Tabak","Tavor","Tavori","Teitelbaum","Tirosh","Topol","Touitou","Trabelsi","Treves","Tzaban","Tzadok","Tzafrir","Tzairi","Tzamir","Tzehoval","Tzidon","Tzinn","Tzivion","Tzuk","Ullman","Unger","Uzan","Uziel","Vadas","Vardi","Vilnai","Vogel","Volk","Wachs","Wachtel","Waks","Waldman","Wallach","Wallerstein","Warshawsky","Wasserman","Wechsler","Weil","Weinberg","Weiner","Weinstein","Weinstock","Weisberg","Weisman","Weissman","Weitz","Weitzman","Werner","Wertheimer","Wexler","Wiener","Wiesel","Willner","Winkler","Winter","Wirth","Wise","Witkin","Wittmann","Wolf","Wolfe","Wolfson","Wolinsky","Wolk","Yaari","Yaavetz","Yaffe","Yadin","Yagoda","Yahalom","Yakir","Yanai","Yardeni","Yashar","Yassour","Yavne","Yecheskel","Yedidya","Yehezkel","Yeivin","Yellin","Yemini","Yerushalmi","Yeshayahu","Yevnin","Yisrael","Yitzhaki","Yoeli","Yoffe","Yona","Yoram","Yosefi","Yudelman","Yulzari","Yurman","Zabar","Zachi","Zadik","Zafrir","Zaguri","Zahavi","Zaid","Zait","Zak","Zakai","Zaken","Zaks","Zalcman","Zalman","Zand","Zarfati","Zarhin","Zarka","Zauderer","Zecharia","Zeevi","Zehavi","Zeigler","Zeitlin","Zelig","Zeller","Zemach","Zemel","Zer","Zeron","Zertal","Zichroni","Zidkiyahu","Zilber","Zilberg","Zimerman","Zimmerman","Zinger","Zinn","Zion","Zisapel","Zisman","Ziv","Zlotnik","Zmora","Zohar","Zondel","Zorea","Zubari","Zucker","Zuckerman","Zussman","Zwebner","Abadi","Aharonov","Alalouf","Alfandari","Almosnino","Alush","Anidjar","Arad","Arbel","Argamani","Arias","Ariel","Aris","Aronovich","Averbuch","Avidov","Avnery","Azran","Bachar","Badihi","Balas","Bar Niv","Bar Yosef","Bar Zvi","Bason","Batash","Belfer","Belkin","Ben Aharon","Ben Amram","Ben Gal","Ben Kiki","Ben Menachem","Ben Naim","Ben Tzur","Bismuth","Bivas","Boger","Botzer","Brodsky","Carlebach","Carmeli","Cassouto","Chazan","Cohen Zedek","Danino","Dattner","Degani","Derai","Diller","Diskin","Dotan","Druk","Edelman","Eitan","Elazari","Elgali","Eliyahu","Elkabetz","Engelman","Even Chen","Fadlon","Farhi","Feiglin","Gaist","Gal Or","Gamliel","Gantz","Gelman","Gery","Gilead","Ginossar","Glickstein","Golani","Granot","Guber","Haba","Hacohen","Hagag","Halevi","Halimi","Halkin","Har Even","Harlap","Hassid","Hazut","Hefer","Hemo","Hermon","Horev","Huberman","Idan","Ifrah","Igal","Imber","Inbari","Kadoshi","Kadmon","Kagan","Kahlon"]}});function zt(){let e=document.getElementById("fme-notification-stack");return e||(e=document.createElement("div"),e.id="fme-notification-stack",document.body.appendChild(e)),e}function P(e,t="he",n=!0){var c;let o=n==="warning"?"warning":n===!1?"error":"success",r=o==="success"?"✔":o==="warning"?"⚠":"✖",a=zt(),s=document.getElementById("fme-toast")||document.createElement("div");s.id="fme-toast",s.dataset.status=o,s.dir=((c=N[t])==null?void 0:c.dir)==="ltr"?"ltr":"rtl",s.hidden=!1;let l=String(e||"").replace(/^[✔✖⚠]\s*/g,"");s.innerHTML=`
        <span class="fme-toast-icon">${r}</span>
        <span class="fme-toast-text">${l}</span>
    `,a.prepend(s),s._fmeHideTimer&&clearTimeout(s._fmeHideTimer),s._fmeHiddenTimer&&clearTimeout(s._fmeHiddenTimer),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s._fmeHideTimer=setTimeout(()=>{s.classList.remove("show"),s._fmeHiddenTimer=setTimeout(()=>{s.classList.contains("show")||(s.hidden=!0)},350)},3e3)}async function Se(e){if(!e||!e.selector)return!1;let t=null;try{t=document.querySelector(e.selector)}catch{return!1}return t?e.actionType==="click"?(t.click(),t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0):await ve(t,e.value):!1}var Ee=S(()=>{D();F()});function b(e,t){if(!e||typeof e.getAttribute!="function")return"";let n=String(t||"").replace(/[\[\]]/g,"").split("=")[0];return e.getAttribute(n)||""}function $t(e){return!e||typeof e.getAttribute!="function"?!1:e.getAttribute("automation-baggage-valid")==="false"}function Vt(e,t,n){let o=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM;return Array.from(e.querySelectorAll(o)).filter(r=>{let a=b(r,i.BAGGAGE_DIRECTION_ATTR);if(n!==null&&a!==n)return!1;let s=r.getBoundingClientRect();return s.width>0&&s.height>0})}function Kt(e,t){let n=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM,o=new Set;return Array.from(e.querySelectorAll(n)).forEach(r=>{let a=b(r,i.BAGGAGE_DIRECTION_ATTR);(a==="0"||a==="1")&&o.add(a)}),o.size===0&&o.add(null),Array.from(o)}function Ut(e){if(!e||e.length===0)return null;let t=e.filter(c=>{let u=c.getBoundingClientRect();return u.width>0&&u.height>0});if(t.length===0)return null;let n=t.find(c=>b(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&b(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(n)return n;let o=t.find(c=>b(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(o)return o;let r=t.find(c=>{let u=(b(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return u.includes("none")||u.includes("no")||u.includes("without")});if(r)return r;let a=t.find(c=>b(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&b(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(a)return a;let s=t.find(c=>b(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(s)return s;let l=t.find(c=>{let u=(b(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return u.includes("free")||u.includes("included")});return l||null}async function Je(e,t){let n=t==="trolley"?i.TROLLEY_GROUP:i.BAGGAGE_GROUP,o=e.querySelector(n);if(!o)return null;let r=Kt(e,t),a=!1;for(let s of r){let l=Vt(e,t,s);if(l.length===0)continue;let c=Ut(l);if(!c)continue;let u=b(c,i.BAGGAGE_KEY_ATTR),f=b(c,i.BAGGAGE_QUANTITY_ATTR),g=b(c,i.BAGGAGE_INCLUDED_ATTR);if(b(c,i.BAGGAGE_SELECTED_ATTR)==="true"){a=!0;continue}c.click(),c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),c.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await new Promise(A=>setTimeout(A,5));let m=b(c,i.BAGGAGE_SELECTED_ATTR)==="true",h=$t(o);m&&!h&&(a=!0)}return a}async function qt(e){if(!e||e.getAttribute(i.PASSENGER_TYPE_ATTR)==="3")return null;let n=!1,o=!0,r=await Je(e,"baggage");r!==null&&(n=!0,r||(o=!1));let a=await Je(e,"trolley");return a!==null&&(n=!0,a||(o=!1)),n?o:null}async function et(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD));if(e.length===0)return null;let t=!1,n=!0;for(let o of e){let r=await qt(o);r!==null&&(t=!0,r||(n=!1)),await new Promise(a=>setTimeout(a,5))}return t?n:null}var tt=S(()=>{D()});function nt(){let e=Array.from(document.querySelectorAll("[automation-result-provider]")),t=e.map(m=>String(m.getAttribute("automation-result-provider")||"").trim()).filter(Boolean),n=t.flatMap(m=>m.split("&")).map(m=>m.trim()).filter(Boolean),o=Array.from(document.querySelectorAll("[automation-result-fmtk]")).some(m=>String(m.getAttribute("automation-result-fmtk")||"").toLowerCase()==="true"),r=t.join(" & "),a=r.toUpperCase(),s=/G-AL-/.test(a),l=/G-AM-/.test(a),c=l||o,u=s&&l,f=s&&!l,g=!u&&!f&&(c||n.length>0||e.length>0);return{found:e.length>0,provider:r,providers:n,fmtkTrue:o,hasALP:s,hasAmadeus:c,blocked:u,alpOnly:f,amadeusOnly:g}}var ot=S(()=>{});function rt(e){if(!e)return null;let t=e.toLowerCase(),n=(t.includes("first")||t.includes("פרטי")||t.includes("name"))&&!t.includes("last")&&!t.includes("משפחה"),o=t.includes("last")||t.includes("משפחה")||t.includes("surname");if(!n&&!o)return null;let r=location.href.toLowerCase(),a=r.includes("localhost")||r.includes("127.0.0.1")||r.includes("0.0.0.0"),s="prod";a||r.includes("test")?s="test":r.includes("stage")?s="stage":r.includes("dev")&&(s="test");let l="";r.includes("flight")?l="flight":r.includes("dynamic")&&(l="dynamic");let c="site";return r.includes("tzayad")?c="tzayad":r.includes("tripzone")?c="tripzone":r.includes(".co.il")?c="IL":r.includes(".ae")||r.includes("mena")?c="ae":r.includes(".sa")?c="sa":r.includes(".kw")&&(c="kw"),n?a?"test locally":`test ${c}`:o?l?`${s} ${l}`:s:null}var at=S(()=>{});function Ht(e){return Ve(e)?0:Ke(e)?12:5}async function it(e,t="he",n=Date.now()){t=t||"he";let o=n;function r(a){o=Date.now()}try{let h=function(d,p){return{humanName:(d==null?void 0:d.humanName)||"(unknown)",selector:(d==null?void 0:d.selector)||"",dropdownSelector:(d==null?void 0:d.dropdownSelector)||"",actionType:(d==null?void 0:d.actionType)||"value",value:d==null?void 0:d.value,reason:p}};Array.isArray(e)||(e=[]);let a=0,s=0,l=d=>{d?a++:s++},c={found:!1,blocked:!1,alpOnly:!1,amadeusOnly:!1,hasALP:!1,hasAmadeus:!1};if(ne())try{let d=await ee();if(await te()===!0){P(d==="select_services"?N[t].ancillaryGlobalSelectDone:N[t].ancillaryGlobalSkipDone,t,!0);return}P(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}catch{P(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}if(e=e.filter(d=>{let p=String((d==null?void 0:d.selector)||""),v=String((d==null?void 0:d.dropdownSelector)||"");return!(p.includes("automation-baggage-group")||p.includes("automation-baggage-item-type")||v.includes("automation-baggage-group")||v.includes("automation-baggage-item-type"))}),e=de(e),e=ue(e),await Oe(e,3e3),r("Passenger cards ready"),e=Ie(e),e=de(e),e=ue(e),e=e.filter(d=>{if(d.actionType==="gender-option"||d.actionType==="gender-random"||d.actionType==="passport-option"||!d.selector)return!0;let p=!1;try{p=!!document.querySelector(d.selector)}catch{p=!1}return p}),r(`Data expanded/filtered to ${e.length} items`),c=nt(),c.blocked){P(t==="en"?"✖ Cannot book a combined ALP + Amadeus flight":"✖ לא ניתן להזמין טיסה של ALP + Amadeus",t,!1);return}let u=20,f=new Set,g=new Set,y=[],m=[];async function A(d,{bypassHandledCheck:p=!1}={}){if(d.actionType==="gender-random"){if(!p&&f.has(d.dropdownSelector))return null;let v=await xe(d);return f.add(d.dropdownSelector),v}if(d.actionType==="gender-option"){if(!p&&f.has(d.dropdownSelector))return null;let v=await ae(d.dropdownSelector,d.selector);return f.add(d.dropdownSelector),v}if(d.actionType==="passport-option"){if(!p&&g.has(d.dropdownSelector))return null;let v=await Be(d);return g.add(d.dropdownSelector),v}return await Se(d)}for(let d of e){let p={...d};if(!Pe(p))try{if(p.actionType==="gender-random"||p.actionType==="gender-option"||p.actionType==="passport-option"){let E=await A(p);if(E===null)continue;r(`Dropdown "${p.humanName}" (${p.actionType}) → ${E?"ok":"FAILED"}`),E||m.push(h(p,"dropdown selection failed")),l(E),await new Promise(Q=>setTimeout(Q,u));continue}if(p.useSmartEnv){let E=rt(p.humanName);E&&(p.value=E),p.useSmartEnv=!1}if((pe(p)||Z(p))&&(p.autoGenerate===!0||Ue(p.value)||Z(p)))pe(p)&&(p.value=me()),Z(p)&&(p.value=he(p));else if(p.autoGenerate){let E=Qe(p.humanName,p);E!==null&&(p.value=E)}if(Ze(p)){let E=ge(p);if(E&&!Xe(p.value,E)){let Q=W(p);p.value=ye(Q,p)}}if(c.alpOnly){let E=String(p.selector||"");(E.includes('[name="paxFName"]')||E.includes('[name="paxLName"]'))&&(p.value="Test")}await Se(p)?l(!0):y.push(p);let we=Ht(p);we>0&&await new Promise(E=>setTimeout(E,we))}catch{y.push(p);continue}}if(r("Main loop done"),y.length>0){await new Promise(d=>setTimeout(d,250));for(let d of y){try{let p=await A(d,{bypassHandledCheck:!0});p||m.push(h(d,"still failed after retry")),l(!!p)}catch(p){m.push(h(d,`retry threw: ${(p==null?void 0:p.message)||p}`)),l(!1)}await new Promise(p=>setTimeout(p,u))}r("Retry pass done")}m.length>0;try{let d=await et();d===!0?l(!0):d===!1&&l(!1)}catch{}r("Baggage done");try{let d=await te();d===!0?l(!0):d===!1&&l(!1)}catch{}if(r("Ancillary done"),a>0&&s===0)P(N[t].fieldsFilled(a),t,!0);else if(a>0&&s>0){let d=m.map(C=>C.humanName).filter(C=>C&&C!=="(unknown)"),p=d.slice(0,3).join(", "),v=d.length>3?`${p} +${d.length-3}`:p;P(N[t].fieldsPartiallyFilled(a,s,v),t,"warning")}else P(N[t].fillFailed,t,!1)}catch(a){let s=a&&a.message?a.message:String(a||"Unknown error");P(`✖ ${N[t].fillError}: ${s}`,t,!1)}}var st=S(()=>{ke();z();je();H();Ee();tt();ie();ce();ot();at();D()});var lt,ct=S(()=>{lt={fme_il_flights_checkout:[{actionType:"value",autoGenerate:!1,displayValue:"test IL",dropdownSelector:null,humanName:"שם פרטי",selector:'[name="fname"]',tagName:"INPUT",useSmartEnv:!0,value:"test IL"},{actionType:"value",autoGenerate:!1,displayValue:"test flight",dropdownSelector:null,humanName:"שם משפחה",selector:'[name="lname"]',tagName:"INPUT",useSmartEnv:!0,value:"test flight"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"כתובת מייל",selector:'[name="email"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"אימות כתובת מייל",selector:'[name="emailConfirm"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!0,displayValue:"0511216637",dropdownSelector:null,humanName:"טלפון נייד",selector:'[name="phone"]',tagName:"INPUT",useSmartEnv:!1,value:"0511216637"},{actionType:"value",autoGenerate:!1,displayValue:!0,dropdownSelector:null,humanName:"הרשמה לעדכונים",selector:"#allowSubscribe",tagName:"INPUT",useSmartEnv:!1,value:!0},{actionType:"value",autoGenerate:!0,displayValue:"natan",dropdownSelector:null,humanName:"שם פרטי",selector:'[automation-passenger-number="\\31 "] [name="paxFName"]',tagName:"INPUT",useSmartEnv:!1,value:"natan"},{actionType:"value",autoGenerate:!0,displayValue:"shor",dropdownSelector:null,humanName:"שם משפחה",selector:'[automation-passenger-number="\\31 "] [name="paxLName"]',tagName:"INPUT",useSmartEnv:!1,value:"shor"},{actionType:"value",autoGenerate:!0,displayValue:"10/10/2000",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="paxBirthDate"]',tagName:"INPUT",useSmartEnv:!1,value:"10/10/2000"},{actionType:"value",autoGenerate:!0,displayValue:"546456456",dropdownSelector:null,humanName:"מספר דרכון",selector:'[automation-passenger-number="\\31 "] [name="passportNumber"]',tagName:"INPUT",useSmartEnv:!1,value:"546456456"},{actionType:"value",autoGenerate:!0,displayValue:"16/08/2031",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="passportExpirationDate"]',tagName:"INPUT",useSmartEnv:!1,value:"16/08/2031"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Nation: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="nation"]',humanName:"Passport Nation: IL",selector:'[automation-passport-nation-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Issuing Country: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="issuing-country"]',humanName:"Passport Issuing Country: IL",selector:'[automation-passport-issuing-country-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"gender-random",autoGenerate:!1,displayValue:"Alternating: Male / Female",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',humanName:"Gender Alternating",options:[{displayValue:"Gender Male",humanName:"Gender Male",selector:'[automation-passenger-gender-option-value="male"]',value:"male"},{displayValue:"Gender Female",humanName:"Gender Female",selector:'[automation-passenger-gender-option-value="female"]',value:"female"}],selector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',tagName:"DIV",useSmartEnv:!1,value:"random"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="CAR"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"ביטול מכל סיבה – lastminute Ba"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="TSH"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`להזמין בראש שקט
כי כשקורה משהו`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="SER\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"חבילת שירות פרמיום מותאמת לעיד"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="ZRR\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`/
שינוי
$90.93 לנוסע`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="AIR024"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`פיצוי על עיכוב או ביטול טיסה
ת`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Skip",dropdownSelector:null,humanName:"Ancillary Skip",selector:'[automation-service-package-action="AIR024b"] [automation-service-package-skip]',tagName:"DIV",useSmartEnv:!1,value:"לא תודה, אולי בפעם הבאה"}]}});function ut(e){let t=String(e||"").toLowerCase();return t==="tzayad.com"||t.endsWith(".tzayad.com")||t.endsWith(".co.il")?"il":t.endsWith(".ae")||t==="mena.ae"||t.endsWith(".mena.ae")?"ae":t.endsWith(".sa")?"sa":t.endsWith(".kw")?"kw":t==="localhost"||t.startsWith("localhost")?"local":t.replace(/[^a-z0-9]+/g,"_")}function dt(e){let t=String(e||"").toLowerCase();return t.includes("/flights")||t.includes("/flight")?"flights":t.includes("/dynamic")?"dynamic":"site"}function pt(e){let t=String(e||"").toLowerCase();return t.includes("/checkout")?"checkout":t.includes("/payment")?"payment":t.replace(/^\/+|\/+$/g,"").replace(/[^a-z0-9]+/g,"_")||"page"}function Wt(e){let t=ut(e.hostname),n=dt(e.pathname),o=pt(e.pathname);return`fme_${t}_${n}_${o}`}function Zt(e){return`fme_${e.hostname}${e.pathname}`}function ft(e,t){let n;try{n=new URL(t)}catch{return null}let o=Object.keys(e||{}).filter(m=>m.startsWith("fme_")&&!m.includes("folder_names")&&!m.includes("collapsed")&&Array.isArray(e[m])),r=Wt(n);if(o.includes(r))return r;let a=Zt(n);if(o.includes(a))return a;let s=n.hostname.toLowerCase(),l=n.pathname.toLowerCase(),c=ut(s),u=dt(l),f=pt(l),g=o.find(m=>{let h=m.toLowerCase();return h.includes(`fme_${c}_`)&&h.includes(u)&&h.includes(f)});if(g)return g;let y=o.find(m=>{let h=m.toLowerCase();return h.includes(s)||h.includes(l)||u!=="site"&&f!=="page"&&h.includes(u)&&h.includes(f)});if(y)return y;if(f==="checkout"){let m=o.find(h=>{let A=h.toLowerCase();return A.includes(`fme_${c}_`)&&A.includes("_checkout")});if(m)return m}if(c==="local"){let m=o.find(h=>{let A=h.toLowerCase();return A.includes(u)&&A.includes(f)});if(m)return m;if(f==="checkout"){let h=o.find(A=>A.toLowerCase().includes("_checkout"));if(h)return h}}return null}var mt=S(()=>{});function Qt(){let e=null;try{e=window.__FME_PROFILES__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:Object.keys(e).length>0?e:null}function jt(){let e=null;try{e=localStorage.getItem(Xt)}catch{return null}if(!e)return null;try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch{return null}}function be(e,t){if(!e)return null;let n=ft(e,t);return!n||!Array.isArray(e[n])||e[n].length===0?null:{items:e[n],targetKey:n}}function gt(e){let t=e||location.href,n=be(jt(),t);if(n)return{...n,source:"imported"};let o=be(Qt(),t);if(o)return{...o,source:"url"};let r=be(lt,t);return r?{...r,source:"baked"}:null}var Xt,ht=S(()=>{ct();mt();Xt="fmeMobileBackup"});function tn(){let e=null;try{e=window.__FME_SETTINGS__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:{lang:e.lang==="en"?"en":"he",ancillaryMode:e.ancillaryMode==="select_services"?"select_services":"skip_all",overrides:e.overrides&&typeof e.overrides=="object"&&!Array.isArray(e.overrides)?e.overrides:{}}}function nn(e){try{return localStorage.getItem(e)}catch{return null}}function on(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function rn(){let e=nn(Jt);if(!e)return null;let t;try{t=JSON.parse(e)}catch{return null}return!t||typeof t!="object"||Array.isArray(t)?null:t}function an(e,t){let n={};for(let[o,r]of Object.entries(e||{}))n[o]={...r};for(let[o,r]of Object.entries(t||{})){n[o]={...n[o]||{}};for(let[a,s]of Object.entries(r||{}))n[o][a]={...n[o][a]||{},...s}}return n}function K(){let e=tn()||{lang:"he",ancillaryMode:"skip_all",overrides:{}},t=rn();return t?{lang:t.lang==="en"?"en":t.lang==="he"?"he":e.lang,ancillaryMode:t.ancillaryMode==="select_services"?"select_services":t.ancillaryMode==="skip_all"?"skip_all":e.ancillaryMode,overrides:an(e.overrides,t.overrides),source:"local"}:{lang:e.lang,ancillaryMode:e.ancillaryMode,overrides:e.overrides,source:"baked"}}function sn(){return K().ancillaryMode}function yt(){let e=sn();return on(en,e),e}function St(e,t,n){let o=(n||K().overrides)[t];return o?e.map(r=>{let a=o[r.selector];if(!a)return{...r};let s={...r};return typeof a.value=="string"&&(s.value=a.value,s.displayValue=a.value),typeof a.autoGenerate=="boolean"&&(s.autoGenerate=a.autoGenerate),typeof a.useSmartEnv=="boolean"&&(s.useSmartEnv=a.useSmartEnv),s}):e.map(r=>({...r}))}function Et(e,t){let n=(t||K().overrides)[e];return n?Object.keys(n).length:0}var Jt,en,bt=S(()=>{Jt="fmeMobileSettings",en="fmeAncillaryMode"});function vt(){if(document.getElementById(wt))return;let e=document.createElement("style");e.id=wt,e.textContent=ln,(document.head||document.documentElement).appendChild(e)}var wt,ln,At=S(()=>{wt="fme-mobile-styles",ln=`
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
`});var cn=Tt(()=>{st();Ee();ht();bt();At();(async function(){try{window.__FME_RAN__=1}catch{}let t=K(),n=t.lang,o=yt();vt();let r=gt();if(!r){P(n==="he"?"לא נמצא פרופיל מתאים לעמוד הזה":"No matching profile found for this page",n,!1);return}let a=St(r.items,r.targetKey,t.overrides),s={targetKey:r.targetKey,source:r.source,fields:a.length,settingsSource:t.source,settingsOverrides:Et(r.targetKey,t.overrides),ancillaryMode:o,lang:n,url:location.href};try{window.__FME_LAST_FILL__=s}catch{}try{await it(a,n)}catch(l){P((n==="he"?"שגיאה בזמן מילוי: ":"Error while filling: ")+String((l==null?void 0:l.message)||l),n,!1)}})()});cn();})();
