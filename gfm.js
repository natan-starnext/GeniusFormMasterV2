// GENIUS FORM MASTER MOBILE — edit src/mobile/*.js and run "npm run build:mobile" instead of hand-editing this file.
(()=>{var S=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var xt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var i,N,M=S(()=>{i={CONTACT_FIRST_NAME:'[name="fname"]',CONTACT_LAST_NAME:'[name="lname"]',CONTACT_EMAIL:'[name="email"]',CONTACT_EMAIL_CONFIRMATION:'[name="emailConfirm"]',CONTACT_PHONE_NUMBER:'[name="phone"]',CONTACT_MARKETING_CHECKBOX:"#allowSubscribe",SUMMARY_PAGE_READY:'[automation-payment-step-type="checkout-page"]',PAYMENT_DROPDOWN:'[automation-payment-field-type="dropdown"]',PAYER_FIRST_NAME:'[name="fname"]',PAYER_LAST_NAME:'[name="lname"]',PAYER_EMAIL:'[name="femail"]',PAYER_PHONE_NUMBER:'[name="fphone"]',AGREEMENT_CHECKBOX:'[automation-payment-field-type="agreement-checkbox"]',APPROVE_AND_CONTINUE_BTN:'[automation-payment-field-type="approve-and-continue-button"]',PASSENGER_CARD:"[automation-passenger-number]",PASSENGER_TYPE_ATTR:"automation-passenger-type",PASSENGER_FIRST_NAME:'[name="paxFName"]',PASSENGER_LAST_NAME:'[name="paxLName"]',BIRTHDAY:'[name="paxBirthDate"]',PASSPORT:'[name="passportNumber"]',PASSPORT_EXPIRATION:'[name="passportExpirationDate"]',GENDER_DROP:"[automation-passenger-gender-dropdown]",GENDER_MALE:'[automation-passenger-gender-option-value="male"]',GENDER_FEMALE:'[automation-passenger-gender-option-value="female"]',PASSPORT_NATION_DROPDOWN:'[automation-passport-field-type="nation"]',PASSPORT_ISSUING_COUNTRY_DROPDOWN:'[automation-passport-field-type="issuing-country"]',PASSPORT_NATION_IL:'[automation-passport-nation-option="IL"]',PASSPORT_ISSUING_COUNTRY_IL:'[automation-passport-issuing-country-option="IL"]',BAGGAGE_GROUP:'[automation-baggage-group="baggage"]',TROLLEY_GROUP:'[automation-baggage-group="trolley"]',BAGGAGE_INVALID_GROUP:'[automation-baggage-valid="false"]',BAGGAGE_ITEM:'[automation-baggage-item-type="baggage"]',TROLLEY_ITEM:'[automation-baggage-item-type="trolley"]',BAGGAGE_INCLUDED_ATTR:"automation-baggage-item-included",BAGGAGE_SELECTED_ATTR:"automation-baggage-item-selected",BAGGAGE_DIRECTION_ATTR:"automation-baggage-item-direction",BAGGAGE_KEY_ATTR:"automation-baggage-item-key",BAGGAGE_QUANTITY_ATTR:"automation-baggage-item-quantity",BAGGAGE_WEIGHT_ATTR:"automation-baggage-item-weight",BAGGAGE_VALID_ATTR:"automation-baggage-valid",ANCILLARY_SERVICE_SKIP:"[automation-service-package-skip]",ANCILLARY_SERVICE_SELECT:"[automation-service-package-select]",ANCILLARIES_CONTINUE:'[automation-container-action="ancillaries-continue"]',SEAT_PACKAGE_ACTION:"[automation-seat-package-action]",SEAT_ACTION:"[automation-seat-action]",SEATS_ANCILLARY:'[automation-seat-package-action="SEATS"]',SEATS_SKIP_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="skip-seat"]',SEATS_SELECT_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="select-seat"]'},N={he:{filled:"הטופס מולא!",fillError:"שגיאה בזמן מילוי",fillFailed:"הטופס לא מולא",extensionActionFailed:"פעולה נכשלה בתוסף",altQFillFailed:"Alt+Q לא הצליח להפעיל מילוי",altQNotStarted:"Alt+Q לא הופעל",ancillarySkipped:"דילוג שירותים נלווים בוצע",ancillarySkipNotFound:"לא נמצא כפתור דילוג שירותים נלווים",ancillaryGlobalSelectDone:"כל השירותים הנלווים נבחרו, הושבה דולגה",ancillaryGlobalSkipDone:"כל השירותים הנלווים דולגו, הושבה דולגה",fieldsFilled:e=>`${e} שדות מולאו בהצלחה`,fieldsPartiallyFilled:(e,t,n)=>`${e} שדות מולאו, ${t} נכשלו`+(n?` — ${n}`:""),cannotStartFillHere:"לא ניתן להפעיל מילוי בעמוד הזה",cannotFillRefresh:"לא ניתן למלא את השדות - רעננו את העמוד ונסו שוב",noProfileFound:"לא נמצא פרופיל מתאים לעמוד הזה",noSavedFieldsToFill:"לא נמצאו שדות שמורים למילוי",dir:"rtl"},en:{filled:"Form Filled!",fillError:"Error while filling",fillFailed:"The form was not filled",extensionActionFailed:"Extension action failed",altQFillFailed:"Alt+Q could not start autofill",altQNotStarted:"Alt+Q was not started",ancillarySkipped:"Ancillary services skipped",ancillarySkipNotFound:"Ancillary skip button was not found",ancillaryGlobalSelectDone:"All ancillary services selected, seats skipped",ancillaryGlobalSkipDone:"All ancillary services skipped, seats skipped",fieldsFilled:e=>`${e} fields filled successfully`,fieldsPartiallyFilled:(e,t,n)=>`${e} fields filled, ${t} failed`+(n?` — ${n}`:""),cannotStartFillHere:"Cannot start fill on this page",cannotFillRefresh:"Could not fill the fields - refresh the page and try again",noProfileFound:"No matching profile found for this page",noSavedFieldsToFill:"No saved fields found to fill",dir:"ltr"}}});async function R(e,{timeoutMs:t=750,intervalMs:n=150}={}){let o=Date.now();for(;;){let r;try{r=e()}catch{r=!1}if(r)return!0;if(Date.now()-o>=t)return!1;await new Promise(a=>setTimeout(a,n))}}async function Re(e,t){var g;if(!e)return!1;let n=e.tagName==="INPUT"&&(e.type==="checkbox"||e.type==="radio"),o=!n&&(e.getAttribute("role")==="checkbox"||e.hasAttribute("aria-checked"));if(n||o){let y=t===!0||t==="true";return(n?e.checked:e.getAttribute("aria-checked")==="true")!==y&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),n?e.checked===y:!0}let r=e.readOnly===!0;try{e.readOnly=!0}catch{}e.focus({preventScroll:!0});try{e.readOnly=r}catch{}let a=e.value,s=window.HTMLInputElement.prototype;e.tagName==="SELECT"&&(s=window.HTMLSelectElement.prototype),e.tagName==="TEXTAREA"&&(s=window.HTMLTextAreaElement.prototype);let l=(g=Object.getOwnPropertyDescriptor(s,"value"))==null?void 0:g.set;l?l.call(e,t):e.value=t,e.setAttribute("value",t);let d=e._valueTracker;d&&d.setValue(a),["keydown","keypress","input","keyup","change"].forEach(y=>{e.dispatchEvent(new Event(y,{bubbles:!0,composed:!0}))}),e.blur(),e.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}));let p=String(e.value||"").trim(),f=String(t||"").trim();return p===f||f.length>0&&p.length>0?!0:f.length===0?p===f:R(()=>String(e.value||"").trim().length>0,{timeoutMs:400,intervalMs:100})}function D(e){return Array.from(document.querySelectorAll(e)).filter(t=>{let n=t.getBoundingClientRect(),o=window.getComputedStyle(t);return n.width>0&&n.height>0&&o.visibility!=="hidden"&&o.display!=="none"&&o.opacity!=="0"})}async function Y(e,t=1500){let n=Date.now();for(;Date.now()-n<t;){let o=D(e);if(o.length>0)return o[o.length-1];await new Promise(r=>setTimeout(r,40))}return null}function B(e){if(!e)return!1;let t=`fme_click_${Date.now()}_${Math.random().toString(36).slice(2)}`;e.setAttribute("data-fme-click-token",t);let n=document.createElement("script");return n.textContent=`
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
    `,document.documentElement.appendChild(n),n.remove(),setTimeout(()=>{try{e.removeAttribute("data-fme-click-token")}catch{}},300),!0}function z(e){if(!e)return;let t=e.getBoundingClientRect();if(!(t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth))try{e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"})}catch{try{e.scrollIntoView(!1)}catch{}}}function ke(){try{if(window.matchMedia)return window.matchMedia("(pointer: coarse)").matches}catch{}return Number(navigator.maxTouchPoints||0)>0}function Me(e,t,n){if(typeof TouchEvent>"u"||typeof Touch>"u")return!1;try{let o=new Touch({identifier:Ct++,target:e,clientX:t,clientY:n,screenX:t,screenY:n,pageX:t,pageY:n,radiusX:11,radiusY:11,force:1}),r={bubbles:!0,cancelable:!0,view:window};return e.dispatchEvent(new TouchEvent("touchstart",{...r,touches:[o],targetTouches:[o],changedTouches:[o]})),e.dispatchEvent(new TouchEvent("touchend",{...r,touches:[],targetTouches:[],changedTouches:[o]})),!0}catch{return!1}}function oe(e){if(!e)return!1;try{z(e)}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r=ke(),a={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},s={...a,pointerId:1,pointerType:r?"touch":"mouse",isPrimary:!0,width:r?23:1,height:r?23:1,pressure:.5};try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",s)),e.dispatchEvent(new PointerEvent("pointerenter",s)),e.dispatchEvent(new PointerEvent("pointerdown",s))),r&&Me(e,n,o),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...s,buttons:0,pressure:0})),e.dispatchEvent(new MouseEvent("mouseover",a)),e.dispatchEvent(new MouseEvent("mousedown",a)),e.dispatchEvent(new MouseEvent("mouseup",{...a,buttons:0})),e.dispatchEvent(new MouseEvent("click",{...a,buttons:0}))}catch{return!1}return!0}function I(e){if(!e)return!1;try{z(e)}catch{try{e.scrollIntoView(!1)}catch{}}try{e.focus({preventScroll:!0})}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1},a=ke(),s=a?"touch":"mouse";try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerenter",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerType:s,isPrimary:!0}))),a&&Me(e,n,o),e.dispatchEvent(new MouseEvent("mouseover",r)),e.dispatchEvent(new MouseEvent("mouseenter",r)),e.dispatchEvent(new MouseEvent("mousedown",r)),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerType:s,isPrimary:!0})),e.dispatchEvent(new MouseEvent("mouseup",r)),e.dispatchEvent(new MouseEvent("click",r)),typeof e.click=="function"&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch{}return!0}function G(e){if(!e)return null;let t=e.getBoundingClientRect();if(!t||t.width<=0||t.height<=0)return e;let n=t.left+t.width/2,o=t.top+t.height/2;return document.elementFromPoint(n,o)||e}function v(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function re(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function F(e){return Array.from(document.querySelectorAll(e)).filter(re)}var Ct,A,x=S(()=>{Ct=1;A=e=>new Promise(t=>setTimeout(t,e))});function Lt(e){return!e||typeof e!="string"?!1:e.includes("automation-service-package-skip")||e.includes("automation-service-package-select")||e.includes("automation-seat-action")}function De(e){return!!(e&&e.selector&&Lt(e.selector))}function Yt(){let e=F(i.ANCILLARIES_CONTINUE)[0];if(e)try{e.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"});return}catch{}try{window.scrollBy({top:520,left:0,behavior:"instant"})}catch{window.scrollBy(0,520)}}async function Bt(e,t){if(!e||!re(e))return!1;let n=e.querySelector(".radio-circle")||e.querySelector('input[type="radio"]')||e.querySelector('[role="radio"]')||e;try{return n.click(),n.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0}catch{return!1}}function Oe(e){return e==="select_services"?"select_services":"skip_all"}function zt(){try{return Oe(localStorage.getItem("fmeAncillaryMode"))}catch{return"skip_all"}}function ae(){return new Promise(e=>{try{chrome.storage.local.get(["fmeAncillaryMode"],t=>{e(Oe(t==null?void 0:t.fmeAncillaryMode))})}catch{e(zt())}})}async function ie(){if(!se())return null;let e=await ae(),t=e==="select_services"?[i.ANCILLARY_SERVICE_SELECT,i.SEATS_SKIP_OPTION]:[i.ANCILLARY_SERVICE_SKIP,i.SEATS_SKIP_OPTION],n=0,o=new Set;for(let r of t){let a=F(r);for(let s of a){if(!s||o.has(s))continue;o.add(s),await Bt(s,e==="select_services"?"select-all-services-and-skip-seats":"skip-all-services-and-seats")&&n++}}return n>0?(Yt(),!0):!1}function se(){return F(i.ANCILLARY_SERVICE_SKIP).length>0||F(i.SEAT_PACKAGE_ACTION).length>0||F(i.SEAT_ACTION).length>0}var Ie=S(()=>{M();x()});function $t(e){if(!e)return!1;if(e.hasAttribute(i.PASSENGER_TYPE_ATTR))return!0;let t=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.GENDER_DROP,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN].join(",");return!!e.querySelector(t)}function V(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD)),t=new Map;for(let n of e){let o=n.getAttribute("automation-passenger-number");if(!o||!$t(n))continue;let r=t.get(o);if(!r){t.set(o,n);continue}let a=!!n.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!n.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!n.querySelector(i.PASSPORT),s=!!r.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!r.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!r.querySelector(i.PASSPORT);a&&!s&&t.set(o,n)}return Array.from(t.values()).sort((n,o)=>{let r=Number(n.getAttribute("automation-passenger-number")),a=Number(o.getAttribute("automation-passenger-number"));return r-a})}function le(e,t){return`[automation-passenger-number="${CSS.escape(String(e))}"] ${t}`}function k(e){if(!e)return null;let t=String(e.selector||""),n=String(e.dropdownSelector||""),o=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN];for(let r of o)if(t===r||t.endsWith(` ${r}`)||t.includes(r))return r;for(let r of[i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN])if(n===r||n.endsWith(` ${r}`)||n.includes(r))return r;return t===i.GENDER_DROP||t.endsWith(` ${i.GENDER_DROP}`)||n===i.GENDER_DROP||n.endsWith(` ${i.GENDER_DROP}`)||t.includes(i.GENDER_DROP)||n.includes(i.GENDER_DROP)?i.GENDER_DROP:null}function Vt(e,t){let n=t.getAttribute("automation-passenger-number"),o=k(e);if(!n||!o)return e;let r=le(n,o),a={...e,selector:r};if(e.actionType==="gender-option"||e.actionType==="gender-random"||o===i.GENDER_DROP){let s=le(n,i.GENDER_DROP);a.dropdownSelector=s,e.actionType==="gender-random"&&(a.selector=s),e.actionType==="gender-option"&&(a.selector=e.selector)}if(e.actionType==="passport-option"||o===i.PASSPORT_NATION_DROPDOWN||o===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN){let s=le(n,o);a.dropdownSelector=s,e.actionType==="passport-option"&&(a.selector=e.selector)}return a}function $(e){let t=String(e||"").match(/automation-passenger-number="([^"]+)"/);return t?t[1]:null}function Fe(e,t){let n=$(e);if(!n)return 0;let r=(Array.isArray(t)?t:V()).findIndex(s=>String(s.getAttribute("automation-passenger-number"))===String(n));if(r>=0)return r;let a=Number(n);return Number.isFinite(a)&&a>0?a-1:0}function Kt(e,t){let n=new Set;for(let o of e){if(k(o)!==t)continue;let a=$(o.selector)||$(o.dropdownSelector);a&&n.add(a)}return n.size<=1}function _e(e){if(!e)return!1;try{return!!document.querySelector(e)}catch{return!1}}function Ge(e,t){if(!e||!t)return e;let n={...e,selector:t};return(e.actionType==="gender-option"||e.actionType==="gender-random"||t===i.GENDER_DROP)&&(n.dropdownSelector=i.GENDER_DROP,e.actionType==="gender-random"&&(n.selector=i.GENDER_DROP),e.actionType==="gender-option"&&(n.selector=e.selector)),(e.actionType==="passport-option"||t===i.PASSPORT_NATION_DROPDOWN||t===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)&&(n.dropdownSelector=t,e.actionType==="passport-option"&&(n.selector=e.selector)),n}function Z(e){return e?e.actionType==="gender-option"||e.actionType==="gender-random"||e.actionType==="passport-option"?_e(e.dropdownSelector):_e(e.selector):!1}async function xe(e,t=5e3){if(!Array.isArray(e))return!1;if(!e.some(r=>!!k(r)||(r==null?void 0:r.actionType)==="passport-option"||(r==null?void 0:r.actionType)==="gender-option"||(r==null?void 0:r.actionType)==="gender-random"))return!0;let o=Date.now();for(;Date.now()-o<t;){if(V().length>0)return!0;let a=document.querySelector(i.PASSENGER_FIRST_NAME)||document.querySelector(i.PASSENGER_LAST_NAME)||document.querySelector(i.BIRTHDAY)||document.querySelector(i.PASSPORT)||document.querySelector(i.PASSPORT_EXPIRATION)||document.querySelector(i.PASSPORT_NATION_DROPDOWN)||document.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||document.querySelector(i.GENDER_DROP);await A(120)}return!1}function Ce(e){if(!Array.isArray(e))return[];let t=V();t.length;let n=[],o=new Set,r=new Set;for(let a of e){let s=k(a);if(!s){let p=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;o.has(p)||(o.add(p),n.push(a));continue}if(!Kt(e,s)){let p=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;if(Z(a)){o.has(p)||(o.add(p),n.push(a));continue}let f=Ge(a,s),g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;!r.has(g)&&Z(f)&&(r.add(g),o.add(g),n.push(f));continue}let d=!1;for(let p of t){let f=Vt(a,p);if(!Z(f))continue;let g=`${f.actionType||""}|${f.selector||""}|${f.dropdownSelector||""}`;o.has(g)||(o.add(g),n.push(f),d=!0)}if(!d){let p=Ge(a,s),f=`${p.actionType||""}|${p.selector||""}|${p.dropdownSelector||""}`;!r.has(f)&&Z(p)&&(r.add(f),o.add(f),n.push(p))}}return n}var K=S(()=>{M();x()});var _,X=S(()=>{_={fmeGenderToggle:0,fmeQuickFillKeyLock:!1,smartNames:null}});async function Be(e){if(!e||e.actionType!=="gender-random"||!e.dropdownSelector||!Array.isArray(e.options)||e.options.length===0)return!1;let t=e.options.some(a=>a.selector===i.GENDER_MALE),n=e.options.some(a=>a.selector===i.GENDER_FEMALE);if(!t||!n)return!1;let o=String(e.value||"random").toLowerCase(),r;return o==="male"?r=i.GENDER_MALE:o==="female"?r=i.GENDER_FEMALE:(r=_.fmeGenderToggle%2===0?i.GENDER_MALE:i.GENDER_FEMALE,_.fmeGenderToggle++),ce(e.dropdownSelector,r)}async function ze(e,t){let n=qt(e);if(!n)return!1;let o=async r=>t?R(()=>D(t).length===0,{timeoutMs:r,intervalMs:30}):(await A(r),!1);return I(n),!!(await o(450)||(B(n),await o(450),n.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),n.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),t&&D(t).length===0))}function Ut(e){return e?[e.querySelector('[role="combobox"]'),e.querySelector('[aria-haspopup="listbox"]'),e.querySelector("[aria-expanded]"),e.querySelector("button"),e.querySelector("input"),G(e),e].filter(Boolean):[]}async function $e(e,t){let n=[...new Set(Ut(e))],o=D(t);if(o.length>0)return o[o.length-1];for(let r of n){oe(r);let a=await Y(t,500);if(a||(r.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"ArrowDown",code:"ArrowDown"})),a=await Y(t,400),a))return a}return null}function qt(e){if(!e)return null;let t=G(e);return(t==null?void 0:t.closest("[automation-passenger-gender-option-value]"))||(t==null?void 0:t.closest("[automation-passport-nation-option]"))||(t==null?void 0:t.closest("[automation-passport-issuing-country-option]"))||(t==null?void 0:t.closest('[role="option"]'))||(t==null?void 0:t.closest("li"))||(t==null?void 0:t.closest("button"))||e.closest("[automation-passenger-gender-option-value]")||e.closest("[automation-passport-nation-option]")||e.closest("[automation-passport-issuing-country-option]")||e.closest('[role="option"]')||e.closest("li")||e.closest("button")||t||e}async function Le(e,t){if(D(e).length===0)return;t&&I(t);let n=await R(()=>D(e).length===0,{timeoutMs:250,intervalMs:30});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await R(()=>D(e).length===0,{timeoutMs:200,intervalMs:30}))}function Ye(e){if(!e)return!1;if(e.classList.contains("selected")||e.getAttribute("aria-selected")==="true")return!0;let t=e.querySelector('input[type="radio"]');return!!(t&&t.checked===!0)}async function Ht(e,t){var l;if(!e||!t)return!1;let n=document.querySelector(e);if(!n)return!1;oe(n);let o=await Y(t,1200);if(!o)return!1;let r=o.querySelector('input[type="radio"]')||o.querySelector("label")||o.closest("[automation-passenger-gender-option-value]")||o;if(!r)return!1;z(r);let a=o.querySelector('input[type="radio"]')||((l=r.closest("[automation-passenger-gender-option-value]"))==null?void 0:l.querySelector('input[type="radio"]'))||(r.type==="radio"?r:null);return a&&a.checked!==!0&&(a.click(),a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),a.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await R(()=>a.checked===!0||Ye(o),{timeoutMs:700,intervalMs:30}))?(await Le(t,n),!0):(r.click(),r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),r.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await R(()=>Ye(o)||D(t).length===0,{timeoutMs:1200,intervalMs:30})?(await Le(t,n),!0):!1)}async function ce(e,t){if(await Ht(e,t))return!0;let o=document.querySelector(e);if(!o)return!1;let r=await $e(o,t);if(!r)return!1;let a=await ze(r,t);return a}var ue=S(()=>{M();x();X()});function de(e){if(!e)return null;let t=U(e.selector);if(t)return String(t).trim().toUpperCase();let n=String(e.value||"").trim().toUpperCase();return/^[A-Z]{2,3}$/.test(n)?n:null}function pe(e){let t=String((e==null?void 0:e.dropdownSelector)||""),n=String((e==null?void 0:e.selector)||"");return t.includes('automation-passport-field-type="issuing-country"')||n.includes("automation-passport-issuing-country-option")?"issuing-country":t.includes('automation-passport-field-type="nation"')||n.includes("automation-passport-nation-option")?"nation":null}async function Ve(e,t){if(!v(document.querySelector(e)||{}))return;t&&I(t);let n=await R(()=>!v(document.querySelector(e)||{}),{timeoutMs:400,intervalMs:80});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await R(()=>!v(document.querySelector(e)||{}),{timeoutMs:250,intervalMs:80}))}async function Wt(e,t){var y,m;if(!e||!t)return!1;let n=$(e),r=(n?document.querySelector(`[automation-passenger-number="${CSS.escape(n)}"]`):null)||document,a=Zt(e),s=document.querySelector(e)||r.querySelector(a);if(!s)return!1;let l=s.closest(".selector-input-wrapper")||((y=s.closest(".subject-wrapper"))==null?void 0:y.closest(".selector-input-wrapper"))||s.parentElement,d=[l==null?void 0:l.querySelector(".subject-wrapper"),l==null?void 0:l.querySelector(".dropdown-subject"),s.closest(".subject-wrapper"),s,G(s)].filter(Boolean),p=null;for(let h of[...new Set(d)])if(I(h),await A(100),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p)||(B(h),await A(220),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p))||(h.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),h.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await A(180),p=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(v)||Array.from(document.querySelectorAll(t)).find(v),p&&v(p)))break;if(!p||!v(p))return!1;if(p.classList.contains("selected"))return await Ve(t,s),!0;let f=((m=G(p))==null?void 0:m.closest("[automation-passport-nation-option], [automation-passport-issuing-country-option]"))||p.querySelector("input")||p.querySelector("label")||p.querySelector("span")||p;I(f),await R(()=>!!(l!=null&&l.querySelector(`${t}.selected`)||document.querySelector(`${t}.selected`)),{timeoutMs:1500,intervalMs:100});let g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`);return g||(B(f),await A(250),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g||(f.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),f.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await A(180),g=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),g&&await Ve(t,s),!!g}function Zt(e){let t=String(e||"");return t.includes('automation-passport-field-type="issuing-country"')?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:t.includes('automation-passport-field-type="nation"')?i.PASSPORT_NATION_DROPDOWN:t}async function Ke(e){if(!e||e.actionType!=="passport-option"||!e.dropdownSelector)return!1;let t=de(e),n=pe(e),o=Ue(e);if(!t||!n||!o)return!1;let r=2;for(let a=1;a<=r;a++){if(a>1&&await A(100),await Wt(e.dropdownSelector,o))return!0;await A(100)}return!1}var fe=S(()=>{M();ue();x();K();j()});function Q(e){if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=t.closest(i.PASSENGER_CARD);return n?n.getAttribute(i.PASSENGER_TYPE_ATTR):null}function qe(e){return!e||typeof e!="string"?!1:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL||e.includes("automation-passport-nation-option")||e.includes("automation-passport-issuing-country-option")}function U(e){if(!e)return null;let t=e.match(/automation-passport-nation-option="([^"]+)"/);if(t)return t[1];let n=e.match(/automation-passport-issuing-country-option="([^"]+)"/);return n?n[1]:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL?"IL":null}function C(e){let t=U(e);return t?e.includes("automation-passport-nation-option")?`Passport Nation: ${t}`:e.includes("automation-passport-issuing-country-option")?`Passport Issuing Country: ${t}`:`Passport Country: ${t}`:"Passport Country"}function me(e){return Array.isArray(e)?e.map(t=>{if(!t||!t.selector)return t;let n=String(t.selector||""),o=String(t.dropdownSelector||""),r=String(t.value||"").toUpperCase();if(t.actionType==="passport-option"&&t.dropdownSelector&&qe(t.selector))return{...t,value:U(t.selector)||t.value,displayValue:t.displayValue||C(t.selector),humanName:t.humanName||C(t.selector),useSmartEnv:!1,autoGenerate:!1};if(qe(n)){let l=n.includes("automation-passport-nation-option")||n===i.PASSPORT_NATION_IL,d=n.includes("automation-passport-issuing-country-option")||n===i.PASSPORT_ISSUING_COUNTRY_IL,p=o||(l?i.PASSPORT_NATION_DROPDOWN:null)||(d?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:null);return p?{...t,selector:n,value:U(n),displayValue:C(n),humanName:C(n),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:p}:t}let a=n.includes(i.PASSPORT_NATION_DROPDOWN)||o.includes(i.PASSPORT_NATION_DROPDOWN),s=n.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||o.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN);if((a||s)&&r==="IL"){let l=o||n,d=a?i.PASSPORT_NATION_IL:i.PASSPORT_ISSUING_COUNTRY_IL;return{...t,selector:d,value:"IL",displayValue:C(d),humanName:C(d),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:l}}return t}):[]}function Xt(e){return!e||typeof e!="string"?!1:e===i.GENDER_MALE||e===i.GENDER_FEMALE}function ge(e){if(!Array.isArray(e))return[];let t=[],n=new Map;for(let o of e){if(o&&o.actionType==="gender-option"&&o.dropdownSelector&&Xt(o.selector)){let r=o.dropdownSelector;n.has(r)||n.set(r,[]),n.get(r).push(o);continue}t.push(o)}for(let[o,r]of n.entries()){let a=[];for(let d of r)a.some(p=>p.selector===d.selector)||a.push(d);let s=a.some(d=>d.selector===i.GENDER_MALE),l=a.some(d=>d.selector===i.GENDER_FEMALE);if(s&&l){t.push({selector:o,value:"random",displayValue:"Alternating: Male / Female",humanName:"Gender Alternating",tagName:"DIV",actionType:"gender-random",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:o,options:[{selector:i.GENDER_MALE,value:"male",displayValue:"Gender Male",humanName:"Gender Male"},{selector:i.GENDER_FEMALE,value:"female",displayValue:"Gender Female",humanName:"Gender Female"}]});continue}a.length>0&&t.push(a[0])}return t}function Ue(e){let t=de(e),n=pe(e);return!t||!n?(e==null?void 0:e.selector)||null:n==="issuing-country"?`[automation-passport-issuing-country-option="${CSS.escape(t)}"]`:`[automation-passport-nation-option="${CSS.escape(t)}"]`}function He(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return t===i.CONTACT_FIRST_NAME||t===i.CONTACT_LAST_NAME||t===i.CONTACT_EMAIL||t===i.CONTACT_EMAIL_CONFIRMATION||t===i.CONTACT_PHONE_NUMBER||t===i.CONTACT_MARKETING_CHECKBOX||t===i.PAYER_FIRST_NAME||t===i.PAYER_LAST_NAME||t===i.PAYER_EMAIL||t===i.PAYER_PHONE_NUMBER}function We(e){if(!e||!e.selector)return!1;let t=k(e);return t===i.PASSENGER_FIRST_NAME||t===i.PASSENGER_LAST_NAME||t===i.BIRTHDAY||t===i.PASSPORT||t===i.PASSPORT_EXPIRATION}function he(e){if(!e)return!1;let t=k(e),n=String(e.selector||"");return t===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION)}function J(e){if(!e)return!1;let t=k(e),n=String(e.selector||"");return t===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION)}function Ze(e){let t=String(e||"").trim().toLowerCase();return!t||t==="click action"||t==="dd/mm/yyyy"||t==="mm/dd/yyyy"||t==="undefined"||t==="null"}var j=S(()=>{M();K();fe()});function Se(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)],t=Math.floor(1e7+Math.random()*9e7);return`${e}${t}`}function je(e){if(!e)return null;let t=String(e).match(/(\d{2})\/(\d{2})\/(\d{4})/);if(!t)return null;let n=Number(t[1]),o=Number(t[2]),r=Number(t[3]),a=new Date(r,o-1,n);return a.getFullYear()!==r||a.getMonth()!==o-1||a.getDate()!==n?null:a}function Xe(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function Qe(e){let t=String(e||"").match(/\d{2}\/\d{2}\/\d{4}/g);if(!t||t.length<2)return null;let n=t.map(je).filter(Boolean).sort((o,r)=>o.getTime()-r.getTime());return n.length<2?null:{minDate:n[0],maxDate:n[n.length-1]}}function Ee(e){var o,r,a,s,l,d;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,(d=(l=(s=t.parentElement)==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:d.parentElement].filter(Boolean);for(let p of n){let f=p.innerText||"",g=Qe(f);if(g)return g}return null}function Je(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return k(e)===i.BIRTHDAY||t.includes(i.BIRTHDAY)||t.includes('[name="paxBirthDate"]')}function et(e,t){if(!e||!t)return!1;let n=je(e);return n?n.getTime()>=t.minDate.getTime()&&n.getTime()<=t.maxDate.getTime():!1}function jt(e){var o,r,a;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,t.closest(i.PASSENGER_CARD),t.closest("form")].filter(Boolean);for(let s of n){let l=Qe(s.innerText||"");if(l)return l}return null}function ee(e,t){let n=new Date(e.getTime());return n.setDate(n.getDate()+t),n}function ye(e,t){let n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n}function q(e,t){let n=e.getTime(),o=t.getTime();if(o<=n)return Xe(e);let r=n+Math.floor(Math.random()*(o-n+1));return Xe(new Date(r))}function be(e=null){let t=new Date,n=jt(e);if(n){let a=ee(n.minDate,3),s=ee(n.maxDate,-3);return q(a,s)}let o=ye(t,18),r=new Date(t.getFullYear()+9,t.getMonth(),t.getDate());return q(o,r)}function tt(e,t=null){if(!t)return null;let n=String(t.selector||""),o=k(t);if(o===i.BIRTHDAY||n.includes(i.BIRTHDAY)){let g=Q(t);return we(g,t)}if(o===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION))return be(t);if(o===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION))return Se();if(n.includes('[name="fname"]')||n.includes('[name="paxFName"]'))return O.firstNames[Math.floor(Math.random()*O.firstNames.length)];if(n.includes('[name="lname"]')||n.includes('[name="paxLName"]'))return O.lastNames[Math.floor(Math.random()*O.lastNames.length)];if(n.includes('[name="femail"]')||n.includes('[name="email"]')||n.includes('[name="emailConfirm"]')){let g=O.firstNames[Math.floor(Math.random()*O.firstNames.length)].toLowerCase().replace(/\s+/g,""),y=O.lastNames[Math.floor(Math.random()*O.lastNames.length)].toLowerCase().replace(/\s+/g,""),m=Math.floor(1e3+Math.random()*9e3);return`${g}.${y}${m}@test.com`}return n.includes('[name="fphone"]')||n.includes('[name="phone"]')?Qt():null}function Qt(){let e=["050","052","054","058"],t=e[Math.floor(Math.random()*e.length)],n=Math.floor(1e6+Math.random()*9e6);return`${t}-${n}`}function we(e,t=null){let n=Ee(t);if(n){let p=ee(n.minDate,3),f=ee(n.maxDate,-3);return p.getTime()<=f.getTime()?q(p,f):q(n.minDate,n.maxDate)}let o=new Date,r=String(e||"").trim(),a,s,l;switch(r){case"1":l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break;case"2":l="Child",a=new Date(o.getFullYear()-11,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-3,o.getMonth(),o.getDate());break;case"3":l="Infant",a=ye(o,-14),s=ye(o,-3);break;case"4":l="Senior",a=new Date(o.getFullYear()-85,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-65,o.getMonth(),o.getDate());break;case"6":l="Youth",a=new Date(o.getFullYear()-24,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-12,o.getMonth(),o.getDate());break;default:l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break}return q(a,s)}var O,nt=S(()=>{M();K();j();O={firstNames:["Achiya","Adam","Adaya","Adele","Adi","Adiel","Adir","Adva","Agam","Aharon","Ahinoam","Ahuva","Akiva","Alex","Aliza","Alma","Almog","Alon","Alona","Amalia","Ami","Amichai","Amichay","Amiel","Amir","Amiram","Amit","Amitai","Amitay","Amnon","Amos","Anael","Anat","Arad","Arbel","Ari","Arie","Arieh","Ariel","Ariela","Arik","Aryeh","Asaf","Asher","Assaf","Atalya","Atara","Avi","Avia","Aviad","Avichay","Avidan","Aviel","Avigail","Avigdor","Avihai","Avihu","Avinoam","Aviram","Avishag","Avishai","Avital","Aviv","Aviva","Aviya","Avner","Avshalom","Aya","Ayala","Ayelet","Azriel","Bar","Barak","Bareket","Baruch","Batsheva","Batya","Ben","Benaya","Benayahu","Betzalel","Bezalel","Binyamin","Boaz","Bracha","Bruria","Carmel","Carmela","Carmit","Chagai","Chagit","Chaim","Chana","Chanan","Chananel","Chanoch","Chava","Chaya","Chen","Chizkiyahu","Dafna","Dagan","Dalia","Dan","Dana","Daniel","Daniela","Danielle","Danit","Danya","Daria","David","Dean","Dekel","Devorah","Dikla","Dina","Dinah","Dolev","Dor","Dorin","Dorit","Dotan","Dror","Drora","Dudu","Dvir","Dvora","Edan","Eden","Edna","Efraim","Efrat","Ehud","Einat","Eitam","Eitan","Ela","Elad","Elazar","Elchanan","Eldad","Eldar","Eli","Elia","Eliad","Eliana","Eliav","Eliel","Eliezer","Elijah","Elik","Elimelech","Elinor","Elior","Eliora","Eliran","Elisha","Elisheva","Elitzur","Eliyahu","Elkana","Ella","Elnatan","Elran","Elyakim","Elyashiv","Emanuel","Emanuela","Emil","Emma","Emuna","Eran","Erel","Erez","Esther","Esti","Etai","Eviatar","Eyal","Ezra","Fima","Frida","Gabi","Gad","Gadi","Gadiel","Gaia","Gal","Gali","Galia","Galit","Gavriel","Gaya","Gedalia","Gefen","Geula","Gideon","Gidi","Gil","Gila","Gilad","Gilat","Gili","Gilor","Giora","Gittit","Golda","Guy","Hadar","Hadarya","Hadas","Hadassa","Hagai","Hagar","Haim","Hallel","Hanan","Hani","Hanoch","Harel","Hedva","Hezi","Hila","Hillel","Hinda","Hod","Hodaya","Idan","Idit","Ido","Ilai","Ilan","Ilana","Ilanit","Ilay","Imri","Inbar","Iris","Irit","Ishay","Itai","Itamar","Itay","Itiel","Itzhak","Itzik","Kalanit","Kerem","Keren","Kfir","Kinneret","Kobi","Koral","Lahav","Lavi","Leah","Leo","Lev","Levana","Levi","Liad","Liam","Liat","Liav","Libby","Libi","Lida","Lidar","Lidor","Liel","Limor","Linor","Linoy","Lior","Liora","Liran","Liraz","Liron","Lital","Livnat","Lotan","Maayan","Magen","Malachi","Mali","Malka","Maor","Maoz","Margalit","Matan","Matanel","Matityahu","Max","May","Maya","Mazal","Meir","Meirav","Meital","Meitar","Menachem","Menashe","Meni","Merav","Meshi","Mia","Micha","Michael","Michal","Mika","Miki","Mina","Miri","Miriam","Mirit","Misha","Mishael","Mor","Moran","Moriah","Moshe","Moshik","Moti","Naama","Naaman","Nadav","Nadia","Naftali","Naomi","Naor","Narkis","Natan","Nati","Nava","Nave","Naya","Nechama","Nechemya","Nehorai","Neria","Neriya","Neta","Netali","Netanel","Netta","Nevo","Nili","Nimrod","Nir","Nira","Nirit","Nissim","Nitai","Nitzan","Noa","Noam","Nof","Nofar","Noga","Nomi","Noy","Noya","Nuriel","Nurit","Oded","Odelia","Ofek","Ofer","Ofira","Ofra","Ofri","Ohad","Omer","Omri","Or","Ora","Orel","Oren","Ori","Orian","Oriel","Orit","Orli","Orna","Ortal","Osher","Oshra","Oshrat","Oshri","Oshrit","Osnat","Ovadia","Oz","Paz","Pazit","Peleg","Penina","Pinchas","Pini","Pnina","Raanan","Rachel","Racheli","Rafi","Rahel","Rakefet","Ram","Rama","Rami","Ran","Ravid","Raviv","Raz","Reem","Refael","Renana","Reut","Reuven","Revital","Riki","Rina","Rinat","Roee","Roei","Roi","Rom","Romi","Ron","Rona","Ronen","Roni","Ronit","Rotem","Roy","Ruchama","Ruth","Ruti","Saar","Sagi","Sagit","Sagiv","Sahar","Sapir","Sara","Sarah","Sarit","Sasson","Sefi","Segev","Shabtai","Shachar","Shahaf","Shahar","Shai","Shaked","Shalev","Shalom","Shalva","Shani","Sharon","Sharona","Shaul","Shay","Shelly","Shifra","Shilat","Shilo","Shimon","Shimshon","Shir","Shira","Shirel","Shiri","Shirley","Shlomi","Shlomit","Shlomo","Shmuel","Shmulik","Shoham","Shosh","Shoshana","Shoval","Shraga","Shula","Sigal","Sigalit","Sima","Simcha","Sinai","Sivan","Smadar","Snir","Stav","Tahel","Tair","Tal","Tali","Talia","Talma","Tamar","Tami","Tamir","Tanya","Tavor","Techiya","Tehila","Tiferet","Tikva","Tirtza","Tohar","Tom","Tomer","Tomi","Tova","Tovia","Tuval","Tzachi","Tzila","Tzion","Tziona","Tzlil","Tzofia","Tzur","Tzvia","Tzvika","Udi","Umar","Uri","Uria","Uriel","Uriya","Uzi","Uziel","Varda","Vered","Viki","Yaakov","Yaara","Yadin","Yael","Yaeli","Yaffa","Yafit","Yagel","Yagil","Yahali","Yahav","Yair","Yakir","Yakira","Yam","Yana","Yaniv","Yarden","Yardena","Yaron","Yasmin","Yechiel","Yedidya","Yehezkel","Yehiel","Yehonatan","Yehoshua","Yehuda","Yehudit","Yekutiel","Yemima","Yerachmiel","Yeshayahu","Yifat","Yiftach","Yigal","Yinon","Yirmiyahu","Yishai","Yishayahu","Yisrael","Yitzhak","Yoad","Yoash","Yoav","Yocheved","Yoel","Yonatan","Yonit","Yoram","Yosef","Yosefa","Yossi","Yotam","Yuli","Yuval","Zahava","Zecharia","Zeev","Zehava","Zehavit","Zelig","Zemer","Zion","Ziv","Ziva","Zmira","Zoe","Zohar","Zohara","Zvi","Zvika"],lastNames:["Abadi","Abergel","Abitbol","Abutbul","Adler","Aharon","Aharoni","Aharonov","Alalouf","Alcalay","Alfandari","Alfasi","Almosnino","Alon","Aloni","Alush","Amar","Amir","Amit","Amitai","Amoyal","Amrani","Amsalem","Anidjar","Appel","Arad","Arama","Arbel","Argamani","Arias","Ariel","Aris","Arnon","Aronovich","Asayag","Ashkenazi","Assaraf","Asulin","Atar","Atias","Averbuch","Avidan","Avidov","Avigdor","Avinery","Avishai","Avnery","Avni","Avraham","Ayalon","Azencot","Azoulay","Azran","Babad","Bachar","Bacher","Badash","Badihi","Bahar","Balas","Balilti","Banai","Bar","Barak","Barazani","Barda","Barel","Barkai","Barkat","Barzilai","Bashan","Bason","Basri","Basson","Batash","Batzri","Baum","Beck","Becker","Behar","Beinart","Belfer","Belkin","Bendayan","Berger","Berkovich","Berkowitz","Berman","Bernstein","Biran","Bismuth","Bitan","Biton","Bivas","Blau","Bloch","Blum","Boger","Bohbot","Boker","Borochov","Botzer","Brand","Braverman","Brik","Brikman","Brisk","Brodsky","Buskila","Buzaglo","Cahan","Cahana","Carlebach","Carmeli","Carmi","Caspi","Cassouto","Chaim","Chalfon","Chazan","Chelouche","Chen","Chetrit","Churgin","Cohen","Dadon","Dagan","Dahan","Dahari","Damari","Damti","Dan","Dangot","Danieli","Danino","Danon","Danziger","Dar","Darshan","Daskal","Dassa","Dattner","David","Davidi","Davidov","Davidovich","Dayan","Degani","Dekel","Derai","Deri","Deutsch","Diamond","Dichter","Diller","Diskin","Doron","Dotan","Dror","Drori","Druk","Eckstein","Edelman","Edri","Efrati","Eilat","Einhorn","Eisenberg","Eisenstein","Eitan","Elalouf","Elam","Elazar","Elazari","Elbaz","Elgali","Elgrably","Elharar","Eliav","Elimelech","Eliyahu","Elkabetz","Elkayam","Elkobi","Elmakias","Emanuel","Engel","Engelman","Epstein","Erez","Eshkol","Even","Ezra","Ezuz","Fadida","Fadlon","Falah","Farago","Farchi","Farhi","Farkash","Fatihi","Fattal","Feiglin","Feldman","Fine","Finkelstein","Fishman","Fleischer","Fogel","Fox","Frank","Frankel","Frenkel","Fried","Friedman","Fuchs","Gabay","Gabbay","Gadasi","Gafni","Gaist","Gal","Galanti","Galili","Gamliel","Gamzu","Gantz","Gaon","Garty","Gavish","Gavrieli","Gefen","Gelb","Gelber","Geller","Gelman","Gerber","Gershon","Gery","Geva","Ghanem","Gil","Giladi","Gilboa","Gilead","Gilon","Ginossar","Ginzburg","Givati","Glass","Glazer","Glick","Glickman","Glickstein","Gofman","Golan","Golani","Gold","Goldberg","Goldenberg","Goldfarb","Goldman","Goldschmidt","Goldstein","Gonen","Gordon","Gottlieb","Granot","Greenberg","Gross","Grossman","Gruber","Gruen","Guber","Guri","Gutman","Guttman","Haas","Haba","Haber","Habib","Hacohen","Hadad","Hafouta","Hagag","Halabi","Halevi","Halfon","Halimi","Halkin","Halperin","Hamburger","Harari","Harel","Harlap","Hason","Hassid","Hasson","Haviv","Hazan","Hazut","Hazzan","Hecht","Hefer","Helfgott","Heller","Hemo","Herman","Hermon","Hersch","Hershkovitz","Hertz","Herzog","Hess","Hezkiya","Hirsch","Hirschfeld","Hochman","Hod","Hoffman","Horev","Horn","Horowitz","Huberman","Huldai","Hurvitz","Idan","Ifargan","Ifergan","Ifrah","Igal","Ilan","Ilani","Imanuel","Imber","Inbar","Inbari","Isaacs","Isaacson","Israel","Israeli","Issachar","Itach","Itzhaki","Ivanir","Jacob","Jacobs","Jacobson","Jafari","Jaffe","Jerbi","Jonas","Joseph","Kadmon","Kadoch","Kadosh","Kadoshi","Kagan","Kahan","Kahana","Kahlon","Kalfon","Kalifa","Kaminski","Kantor","Kaplan","Karadi","Kariv","Karni","Karp","Kasher","Katan","Katz","Kaufman","Kedar","Keinan","Kellner","Keren","Kessler","Khoury","Kimchi","Kishon","Klein","Kleinman","Knafo","Kobi","Kochavi","Kogan","Koren","Korman","Korn","Kramer","Kraus","Krauss","Krebs","Krieger","Kritzman","Kupfer","Lahav","Landau","Laniado","Lapid","Lasker","Lavie","Lazar","Leder","Lehavi","Lehrer","Leibovich","Leibowitz","Leon","Lerner","Leshem","Lev","Levanon","Levi","Levin","Levitan","Levy","Lewis","Liberman","Lieberman","Lifshitz","Linder","Lior","Lipman","Liran","Lishchinsky","Litzman","Livne","Livni","Locker","Loeb","Lugasi","Luria","Lurie","Lustig","Maayan","Machluf","Madmoni","Magen","Maimon","Makhlouf","Malachi","Malihi","Malka","Malul","Maman","Mandel","Mandelbaum","Manor","Mansour","Maor","Marciano","Marcus","Margolis","Mark","Markovitz","Marks","Mayer","Maymon","Mazar","Mazor","Meidan","Meiri","Melamed","Melnik","Menachem","Menashe","Mendel","Meroz","Meshulam","Meyer","Meyers","Michaeli","Milshtein","Minsky","Mintz","Miron","Misgav","Mizrachi","Mofaz","Molcho","Mor","Morad","Morag","Mordechai","Morgenstern","Moshe","Moyal","Nachman","Nachmias","Nachshon","Nadel","Nagar","Nager","Naim","Narkis","Natan","Nathanson","Naveh","Navon","Neeman","Nehemya","Nesher","Netzer","Neuman","Neumann","Newman","Nimrodi","Nir","Nissenbaum","Niv","Nof","Noy","Nudel","Nussbaum","Ochana","Oded","Ofer","Ofir","Ofran","Ohana","Ohayon","Oliel","Omer","Oppenheim","Orbach","Oren","Oron","Ozer","Ozeri","Pachter","Padeh","Palti","Papo","Parnes","Pasi","Pass","Pearl","Peleg","Pelled","Pen","Peres","Peretz","Peri","Perlman","Perry","Pinhasi","Pinto","Podolsky","Polak","Pollack","Polonsky","Pomerantz","Porat","Portal","Poupko","Priver","Radomsky","Rafael","Rahamim","Ram","Ramon","Rappaport","Ratzon","Raviv","Raz","Reich","Reichman","Reif","Reiss","Reiter","Reshef","Reuven","Reuveni","Revivo","Richter","Rimon","Ringel","Rochman","Roitman","Roman","Romm","Ron","Ronen","Roni","Rosen","Rosenbaum","Rosenberg","Rosenblatt","Rosenblum","Rosenfeld","Rosner","Ross","Rost","Rotem","Roth","Rothman","Rozen","Rubenstein","Rubin","Sabag","Sabban","Sachs","Sadan","Sade","Sadeh","Sagi","Sagiv","Salem","Salmon","Salton","Salzman","Samuels","Sapir","Sarid","Sason","Sasson","Savir","Schachter","Schaeffer","Scharf","Schatz","Schechter","Schein","Schenker","Schiff","Schiller","Schindler","Schipper","Schlesinger","Schlosser","Schneider","Scholem","Schreiber","Schroeder","Schulman","Schuster","Schwab","Schwartz","Segal","Shafir","Shafran","Shaham","Shahar","Shalev","Shaltiel","Shamir","Shamni","Shani","Shapira","Shapiro","Sharet","Sharon","Sharoni","Shatz","Shaul","Shay","Shechter","Sheetrit","Shefi","Sheleg","Shemer","Shemesh","Shenhav","Sher","Sherman","Shilo","Shiloh","Shilon","Shimi","Shimoni","Shinwell","Shir","Shirazi","Shkedi","Shkolnik","Shlomi","Shmuel","Shmueli","Shneor","Shochat","Shoham","Shomron","Shpielman","Shpigel","Shpitalni","Shraga","Shtal","Shulman","Shushan","Shvartz","Shwartz","Siboni","Sidi","Silber","Silberman","Silver","Silverman","Simcha","Simon","Sinai","Singer","Sivan","Sneh","Sobel","Sofer","Sokolov","Solomon","Soloveichik","Somekh","Sommer","Sopher","Spector","Spiegel","Spira","Spitz","Spitzer","Stahl","Stark","Stein","Steinberg","Steiner","Steinhardt","Stern","Sternberg","Stulman","Suissa","Sussman","Tabak","Tal","Tavor","Tavori","Tayeb","Teitelbaum","Tirosh","Toledano","Topol","Touitou","Trabelsi","Treves","Turgeman","Tzaban","Tzadok","Tzafrir","Tzairi","Tzamir","Tzarfati","Tzehoval","Tzidon","Tzinn","Tzivion","Tzuk","Tzur","Ullman","Unger","Uzan","Uziel","Vadas","Vaisman","Vaknin","Vardi","Vilnai","Vogel","Volk","Wachs","Wachtel","Waisel","Waks","Waldman","Wallach","Wallerstein","Warshawsky","Wasserman","Wechsler","Weil","Weinberg","Weiner","Weinstein","Weinstock","Weisberg","Weisman","Weiss","Weissman","Weitz","Weitzman","Werner","Wertheimer","Wexler","Wiener","Willner","Winkler","Winter","Wirth","Wise","Witkin","Wittmann","Wolf","Wolfe","Wolfson","Wolinsky","Wolk","Yaakobi","Yaakov","Yaari","Yaavetz","Yadin","Yaffe","Yagoda","Yahalom","Yakir","Yanai","Yardeni","Yashar","Yassour","Yavne","Yecheskel","Yedidya","Yehezkel","Yeivin","Yellin","Yemini","Yerushalmi","Yeshayahu","Yevnin","Yifrach","Yisrael","Yitzhak","Yitzhaki","Yoeli","Yoffe","Yona","Yoram","Yosef","Yosefi","Yudelman","Yulzari","Yurman","Zabar","Zachi","Zada","Zadik","Zafrir","Zaguri","Zahavi","Zaid","Zait","Zak","Zakai","Zaken","Zaks","Zalcman","Zalman","Zand","Zarfati","Zarhin","Zarka","Zauderer","Zecharia","Zeevi","Zehavi","Zeigler","Zeitlin","Zelig","Zeller","Zemach","Zemel","Zenou","Zer","Zeron","Zertal","Zichroni","Zidkiyahu","Zilber","Zilberg","Zimerman","Zimmerman","Zinger","Zinn","Zion","Zisapel","Zisman","Ziv","Zlotnik","Zmora","Zohar","Zondel","Zorea","Zubari","Zucker","Zuckerman","Zussman","Zwebner"]}});function Jt(){let e=document.getElementById("fme-notification-stack");return e||(e=document.createElement("div"),e.id="fme-notification-stack",document.body.appendChild(e)),e}function T(e,t="he",n=!0){var d;let o=n==="warning"?"warning":n===!1?"error":"success",r=o==="success"?"✔":o==="warning"?"⚠":"✖",a=Jt(),s=document.getElementById("fme-toast")||document.createElement("div");s.id="fme-toast",s.dataset.status=o,s.dir=((d=N[t])==null?void 0:d.dir)==="ltr"?"ltr":"rtl",s.hidden=!1;let l=String(e||"").replace(/^[✔✖⚠]\s*/g,"");s.innerHTML=`
        <span class="fme-toast-icon">${r}</span>
        <span class="fme-toast-text">${l}</span>
    `,a.prepend(s),s._fmeHideTimer&&clearTimeout(s._fmeHideTimer),s._fmeHiddenTimer&&clearTimeout(s._fmeHiddenTimer),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s._fmeHideTimer=setTimeout(()=>{s.classList.remove("show"),s._fmeHiddenTimer=setTimeout(()=>{s.classList.contains("show")||(s.hidden=!0)},350)},3e3)}async function ve(e){if(!e||!e.selector)return!1;let t=null;try{t=document.querySelector(e.selector)}catch{return!1}return t?e.actionType==="click"?(t.click(),t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0):await Re(t,e.value):!1}var Ae=S(()=>{M();x()});function w(e,t){if(!e||typeof e.getAttribute!="function")return"";let n=String(t||"").replace(/[\[\]]/g,"").split("=")[0];return e.getAttribute(n)||""}function en(e){return!e||typeof e.getAttribute!="function"?!1:e.getAttribute("automation-baggage-valid")==="false"}function tn(e,t,n){let o=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM;return Array.from(e.querySelectorAll(o)).filter(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);if(n!==null&&a!==n)return!1;let s=r.getBoundingClientRect();return s.width>0&&s.height>0})}function nn(e,t){let n=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM,o=new Set;return Array.from(e.querySelectorAll(n)).forEach(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);(a==="0"||a==="1")&&o.add(a)}),o.size===0&&o.add(null),Array.from(o)}function on(e){if(!e||e.length===0)return null;let t=e.filter(d=>{let p=d.getBoundingClientRect();return p.width>0&&p.height>0});if(t.length===0)return null;let n=t.find(d=>w(d,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(d,i.BAGGAGE_QUANTITY_ATTR)==="0");if(n)return n;let o=t.find(d=>w(d,i.BAGGAGE_QUANTITY_ATTR)==="0");if(o)return o;let r=t.find(d=>{let p=(w(d,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return p.includes("none")||p.includes("no")||p.includes("without")});if(r)return r;let a=t.find(d=>w(d,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(d,i.BAGGAGE_INCLUDED_ATTR)==="true");if(a)return a;let s=t.find(d=>w(d,i.BAGGAGE_INCLUDED_ATTR)==="true");if(s)return s;let l=t.find(d=>{let p=(w(d,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return p.includes("free")||p.includes("included")});return l||null}async function ot(e,t){let n=t==="trolley"?i.TROLLEY_GROUP:i.BAGGAGE_GROUP,o=e.querySelector(n);if(!o)return null;let r=nn(e,t),a=!1;for(let s of r){let l=tn(e,t,s);if(l.length===0)continue;let d=on(l);if(!d)continue;let p=w(d,i.BAGGAGE_KEY_ATTR),f=w(d,i.BAGGAGE_QUANTITY_ATTR),g=w(d,i.BAGGAGE_INCLUDED_ATTR);if(w(d,i.BAGGAGE_SELECTED_ATTR)==="true"){a=!0;continue}d.click(),d.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),d.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await new Promise(P=>setTimeout(P,5));let m=w(d,i.BAGGAGE_SELECTED_ATTR)==="true",h=en(o);m&&!h&&(a=!0)}return a}async function rn(e){if(!e||e.getAttribute(i.PASSENGER_TYPE_ATTR)==="3")return null;let n=!1,o=!0,r=await ot(e,"baggage");r!==null&&(n=!0,r||(o=!1));let a=await ot(e,"trolley");return a!==null&&(n=!0,a||(o=!1)),n?o:null}async function rt(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD));if(e.length===0)return null;let t=!1,n=!0;for(let o of e){let r=await rn(o);r!==null&&(t=!0,r||(n=!1)),await new Promise(a=>setTimeout(a,5))}return t?n:null}var at=S(()=>{M()});function it(){let e=Array.from(document.querySelectorAll("[automation-result-provider]")),t=e.map(m=>String(m.getAttribute("automation-result-provider")||"").trim()).filter(Boolean),n=t.flatMap(m=>m.split("&")).map(m=>m.trim()).filter(Boolean),o=Array.from(document.querySelectorAll("[automation-result-fmtk]")).some(m=>String(m.getAttribute("automation-result-fmtk")||"").toLowerCase()==="true"),r=t.join(" & "),a=r.toUpperCase(),s=/G-AL-/.test(a),l=/G-AM-/.test(a),d=l||o,p=s&&l,f=s&&!l,g=!p&&!f&&(d||n.length>0||e.length>0);return{found:e.length>0,provider:r,providers:n,fmtkTrue:o,hasALP:s,hasAmadeus:d,blocked:p,useAlpTestNames:f,amadeusOnly:g}}var st=S(()=>{});function sn(e){return e.includes("localhost")||e.includes("127.0.0.1")||e.includes("0.0.0.0")}function ln(e){let t=String(e||"").toLowerCase(),n=sn(t),o="prod";n||t.includes("test")?o="test":t.includes("stage")?o="stage":t.includes("dev")&&(o="test");let r="";t.includes("flight")?r="flight":t.includes("dynamic")&&(r="dynamic");let a=n?"locally":"site";n||(t.includes("tzayad")?a="tzayad":t.includes("tripzone")?a="tripzone":t.includes(".co.il")?a="IL":t.includes(".ae")||t.includes("mena")?a="ae":t.includes(".sa")?a="sa":t.includes(".kw")&&(a="kw"));let s="";try{s=new URL(String(e||"")).hostname.toLowerCase()}catch{s=""}return{env:o,brand:a,product:r,host:s,local:n}}function ct(e,t){let n=String(e??"");return n.trim()?n.replace(/\{(\w+)\}/g,(r,a)=>{let s=String(a).toLowerCase();return Object.prototype.hasOwnProperty.call(t,s)?String(t[s]??""):r}).replace(/\s+/g," ").trim():""}function ut(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let o of e){if(!o||typeof o!="object")continue;let r=String(o.match??"").trim().toLowerCase().slice(0,H);if(!r||n.has(r))continue;let a=String(o.first??"").slice(0,H).trim(),s=String(o.last??"").slice(0,H).trim();if(!(!a&&!s)&&(n.add(r),t.push({match:r,first:a,last:s}),t.length>=an))break}return t}function cn(e){let t=e&&typeof e=="object"&&!Array.isArray(e)?e:{},n=typeof t.first=="string"?t.first.slice(0,H):lt.first,o=typeof t.last=="string"?t.last.slice(0,H):lt.last;return{first:n,last:o,rules:ut(t.rules)}}function un(e,t){let n=String(t||"").toLowerCase();return ut(e).find(o=>n.includes(o.match))||null}function dt(e,t){let n=cn(t),o=ln(e),r=un(n.rules,e),a=r&&r.first?r.first:n.first,s=r&&r.last?r.last:n.last;return{parts:o,rule:r,first:ct(a,o),last:ct(s,o),firstPattern:a,lastPattern:s,firstFromRule:!!(r&&r.first),lastFromRule:!!(r&&r.last)}}var lt,an,H,pt=S(()=>{lt={first:"test {brand}",last:"{env} {product}",rules:[]},an=24,H=60});function dn(e){if(!e)return null;let t=String(e).toLowerCase();return t.includes("last")||t.includes("משפחה")||t.includes("surname")?"last":(t.includes("first")||t.includes("פרטי")||t.includes("name"))&&!t.includes("last")&&!t.includes("משפחה")?"first":null}function ft(e){let t=dn(e);if(!t)return null;let n=dt(location.href,_.smartNames);return(t==="last"?n.last:n.first)||null}var mt=S(()=>{pt();X()});function pn(e){return He(e)?0:We(e)?12:5}async function gt(e,t="he",n=Date.now()){t=t||"he";let o=n;function r(a){o=Date.now()}try{let _t=function(u){let c=String(u||"");return/\[name="pax(F|L)Name"\]/i.test(c)},Gt=function(u,c){let E=Fe(u,c);return h+P.repeat(Math.max(0,E))},te=function(u,c){return{humanName:(u==null?void 0:u.humanName)||"(unknown)",selector:(u==null?void 0:u.selector)||"",dropdownSelector:(u==null?void 0:u.dropdownSelector)||"",actionType:(u==null?void 0:u.actionType)||"value",value:u==null?void 0:u.value,reason:c}};Array.isArray(e)||(e=[]);let a=0,s=0,l=u=>{u?a++:s++},d={found:!1,blocked:!1,useAlpTestNames:!1,amadeusOnly:!1,hasALP:!1,hasAmadeus:!1};if(se())try{let u=await ae();if(await ie()===!0){T(u==="select_services"?N[t].ancillaryGlobalSelectDone:N[t].ancillaryGlobalSkipDone,t,!0);return}T(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}catch{T(`✖ ${N[t].ancillarySkipNotFound}`,t,!1);return}if(e=e.filter(u=>{let c=String((u==null?void 0:u.selector)||""),E=String((u==null?void 0:u.dropdownSelector)||"");return!(c.includes("automation-baggage-group")||c.includes("automation-baggage-item-type")||E.includes("automation-baggage-group")||E.includes("automation-baggage-item-type"))}),e=ge(e),e=me(e),await xe(e,3e3),r("Passenger cards ready"),e=Ce(e),e=ge(e),e=me(e),e=e.filter(u=>{if(u.actionType==="gender-option"||u.actionType==="gender-random"||u.actionType==="passport-option"||!u.selector)return!0;let c=!1;try{c=!!document.querySelector(u.selector)}catch{c=!1}return c}),r(`Data expanded/filtered to ${e.length} items`),d=it(),d.blocked){T(t==="en"?"✖ Cannot book a combined ALP + Amadeus flight":"✖ לא ניתן להזמין טיסה של ALP + Amadeus",t,!1);return}let p=20,f=new Set,g=new Set,y=[],m=[],h="Test",P="t",Ft=d.useAlpTestNames?V():[];d.useAlpTestNames;async function Pe(u,{bypassHandledCheck:c=!1}={}){if(u.actionType==="gender-random"){if(!c&&f.has(u.dropdownSelector))return null;let E=await Be(u);return f.add(u.dropdownSelector),E}if(u.actionType==="gender-option"){if(!c&&f.has(u.dropdownSelector))return null;let E=await ce(u.dropdownSelector,u.selector);return f.add(u.dropdownSelector),E}if(u.actionType==="passport-option"){if(!c&&g.has(u.dropdownSelector))return null;let E=await Ke(u);return g.add(u.dropdownSelector),E}return await ve(u)}for(let u of e){let c={...u};if(!De(c))try{if(c.actionType==="gender-random"||c.actionType==="gender-option"||c.actionType==="passport-option"){let b=await Pe(c);if(b===null)continue;r(`Dropdown "${c.humanName}" (${c.actionType}) → ${b?"ok":"FAILED"}`),b||m.push(te(c,"dropdown selection failed")),l(b),await new Promise(ne=>setTimeout(ne,p));continue}if(c.useSmartEnv){let b=ft(c.humanName);b&&(c.value=b),c.useSmartEnv=!1}if((he(c)||J(c))&&(c.autoGenerate===!0||Ze(c.value)||J(c)))he(c)&&(c.value=Se()),J(c)&&(c.value=be(c));else if(c.autoGenerate){let b=tt(c.humanName,c);b!==null&&(c.value=b)}if(Je(c)){let b=Ee(c);if(b&&!et(c.value,b)){let ne=Q(c);c.value=we(ne,c)}}d.useAlpTestNames&&_t(c.selector)&&(c.value=Gt(c.selector,Ft),c.displayValue=c.value),await ve(c)?l(!0):y.push(c);let Ne=pn(c);Ne>0&&await new Promise(b=>setTimeout(b,Ne))}catch{y.push(c);continue}}if(r("Main loop done"),y.length>0){await new Promise(u=>setTimeout(u,250));for(let u of y){try{let c=await Pe(u,{bypassHandledCheck:!0});c||m.push(te(u,"still failed after retry")),l(!!c)}catch(c){m.push(te(u,`retry threw: ${(c==null?void 0:c.message)||c}`)),l(!1)}await new Promise(c=>setTimeout(c,p))}r("Retry pass done")}m.length>0;try{let u=await rt();u===!0?l(!0):u===!1&&l(!1)}catch{}r("Baggage done");try{let u=await ie();u===!0?l(!0):u===!1&&l(!1)}catch{}if(r("Ancillary done"),a>0&&s===0)T(N[t].fieldsFilled(a),t,!0);else if(a>0&&s>0){let u=m.map(L=>L.humanName).filter(L=>L&&L!=="(unknown)"),c=u.slice(0,3).join(", "),E=u.length>3?`${c} +${u.length-3}`:c;T(N[t].fieldsPartiallyFilled(a,s,E),t,"warning")}else T(N[t].fillFailed,t,!1)}catch(a){let s=a&&a.message?a.message:String(a||"Unknown error");T(`✖ ${N[t].fillError}: ${s}`,t,!1)}}var ht=S(()=>{Ie();K();nt();j();Ae();at();ue();fe();st();mt();M()});var yt,St=S(()=>{yt={fme_il_flights_checkout:[{actionType:"value",autoGenerate:!1,displayValue:"test IL",dropdownSelector:null,humanName:"שם פרטי",selector:'[name="fname"]',tagName:"INPUT",useSmartEnv:!0,value:"test IL"},{actionType:"value",autoGenerate:!1,displayValue:"test flight",dropdownSelector:null,humanName:"שם משפחה",selector:'[name="lname"]',tagName:"INPUT",useSmartEnv:!0,value:"test flight"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"כתובת מייל",selector:'[name="email"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"אימות כתובת מייל",selector:'[name="emailConfirm"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!0,displayValue:"0511216637",dropdownSelector:null,humanName:"טלפון נייד",selector:'[name="phone"]',tagName:"INPUT",useSmartEnv:!1,value:"0511216637"},{actionType:"value",autoGenerate:!1,displayValue:!0,dropdownSelector:null,humanName:"הרשמה לעדכונים",selector:"#allowSubscribe",tagName:"INPUT",useSmartEnv:!1,value:!0},{actionType:"value",autoGenerate:!0,displayValue:"natan",dropdownSelector:null,humanName:"שם פרטי",selector:'[automation-passenger-number="\\31 "] [name="paxFName"]',tagName:"INPUT",useSmartEnv:!1,value:"natan"},{actionType:"value",autoGenerate:!0,displayValue:"shor",dropdownSelector:null,humanName:"שם משפחה",selector:'[automation-passenger-number="\\31 "] [name="paxLName"]',tagName:"INPUT",useSmartEnv:!1,value:"shor"},{actionType:"value",autoGenerate:!0,displayValue:"10/10/2000",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="paxBirthDate"]',tagName:"INPUT",useSmartEnv:!1,value:"10/10/2000"},{actionType:"value",autoGenerate:!0,displayValue:"546456456",dropdownSelector:null,humanName:"מספר דרכון",selector:'[automation-passenger-number="\\31 "] [name="passportNumber"]',tagName:"INPUT",useSmartEnv:!1,value:"546456456"},{actionType:"value",autoGenerate:!0,displayValue:"16/08/2031",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="passportExpirationDate"]',tagName:"INPUT",useSmartEnv:!1,value:"16/08/2031"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Nation: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="nation"]',humanName:"Passport Nation: IL",selector:'[automation-passport-nation-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Issuing Country: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="issuing-country"]',humanName:"Passport Issuing Country: IL",selector:'[automation-passport-issuing-country-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"gender-random",autoGenerate:!1,displayValue:"Alternating: Male / Female",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',humanName:"Gender Alternating",options:[{displayValue:"Gender Male",humanName:"Gender Male",selector:'[automation-passenger-gender-option-value="male"]',value:"male"},{displayValue:"Gender Female",humanName:"Gender Female",selector:'[automation-passenger-gender-option-value="female"]',value:"female"}],selector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',tagName:"DIV",useSmartEnv:!1,value:"random"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="CAR"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"ביטול מכל סיבה – lastminute Ba"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="TSH"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`להזמין בראש שקט
כי כשקורה משהו`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="SER\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"חבילת שירות פרמיום מותאמת לעיד"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="ZRR\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`/
שינוי
$90.93 לנוסע`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="AIR024"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`פיצוי על עיכוב או ביטול טיסה
ת`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Skip",dropdownSelector:null,humanName:"Ancillary Skip",selector:'[automation-service-package-action="AIR024b"] [automation-service-package-skip]',tagName:"DIV",useSmartEnv:!1,value:"לא תודה, אולי בפעם הבאה"}]}});function Et(e){let t=String(e||"").toLowerCase();return t==="tzayad.com"||t.endsWith(".tzayad.com")||t.endsWith(".co.il")?"il":t.endsWith(".ae")||t==="mena.ae"||t.endsWith(".mena.ae")?"ae":t.endsWith(".sa")?"sa":t.endsWith(".kw")?"kw":t==="localhost"||t.startsWith("localhost")?"local":t.replace(/[^a-z0-9]+/g,"_")}function bt(e){let t=String(e||"").toLowerCase();return t.includes("/flights")||t.includes("/flight")?"flights":t.includes("/dynamic")?"dynamic":"site"}function wt(e){let t=String(e||"").toLowerCase();return t.includes("/checkout")?"checkout":t.includes("/payment")?"payment":t.replace(/^\/+|\/+$/g,"").replace(/[^a-z0-9]+/g,"_")||"page"}function fn(e){let t=Et(e.hostname),n=bt(e.pathname),o=wt(e.pathname);return`fme_${t}_${n}_${o}`}function mn(e){return`fme_${e.hostname}${e.pathname}`}function vt(e,t){let n;try{n=new URL(t)}catch{return null}let o=Object.keys(e||{}).filter(m=>m.startsWith("fme_")&&!m.includes("folder_names")&&!m.includes("collapsed")&&Array.isArray(e[m])),r=fn(n);if(o.includes(r))return r;let a=mn(n);if(o.includes(a))return a;let s=n.hostname.toLowerCase(),l=n.pathname.toLowerCase(),d=Et(s),p=bt(l),f=wt(l),g=o.find(m=>{let h=m.toLowerCase();return h.includes(`fme_${d}_`)&&h.includes(p)&&h.includes(f)});if(g)return g;let y=o.find(m=>{let h=m.toLowerCase();return h.includes(s)||h.includes(l)||p!=="site"&&f!=="page"&&h.includes(p)&&h.includes(f)});if(y)return y;if(f==="checkout"){let m=o.find(h=>{let P=h.toLowerCase();return P.includes(`fme_${d}_`)&&P.includes("_checkout")});if(m)return m}if(d==="local"){let m=o.find(h=>{let P=h.toLowerCase();return P.includes(p)&&P.includes(f)});if(m)return m;if(f==="checkout"){let h=o.find(P=>P.toLowerCase().includes("_checkout"));if(h)return h}}return null}var At=S(()=>{});function hn(){let e=null;try{e=window.__FME_PROFILES__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:Object.keys(e).length>0?e:null}function yn(){let e=null;try{e=localStorage.getItem(gn)}catch{return null}if(!e)return null;try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch{return null}}function Te(e,t){if(!e)return null;let n=vt(e,t);return!n||!Array.isArray(e[n])||e[n].length===0?null:{items:e[n],targetKey:n}}function Tt(e){let t=e||location.href,n=Te(yn(),t);if(n)return{...n,source:"imported"};let o=Te(hn(),t);if(o)return{...o,source:"url"};let r=Te(yt,t);return r?{...r,source:"baked"}:null}var gn,Pt=S(()=>{St();At();gn="fmeMobileBackup"});function bn(){let e=null;try{e=window.__FME_SETTINGS__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:{lang:e.lang==="en"?"en":"he",ancillaryMode:e.ancillaryMode==="select_services"?"select_services":"skip_all",smartNames:e.smartNames&&typeof e.smartNames=="object"?e.smartNames:null,overrides:e.overrides&&typeof e.overrides=="object"&&!Array.isArray(e.overrides)?e.overrides:{}}}function wn(e){try{return localStorage.getItem(e)}catch{return null}}function vn(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function An(){let e=wn(Sn);if(!e)return null;let t;try{t=JSON.parse(e)}catch{return null}return!t||typeof t!="object"||Array.isArray(t)?null:t}function Tn(e,t){let n={};for(let[o,r]of Object.entries(e||{}))n[o]={...r};for(let[o,r]of Object.entries(t||{})){n[o]={...n[o]||{}};for(let[a,s]of Object.entries(r||{}))n[o][a]={...n[o][a]||{},...s}}return n}function W(){let e=bn()||{lang:"he",ancillaryMode:"skip_all",smartNames:null,overrides:{}},t=An();return t?{lang:t.lang==="en"?"en":t.lang==="he"?"he":e.lang,ancillaryMode:t.ancillaryMode==="select_services"?"select_services":t.ancillaryMode==="skip_all"?"skip_all":e.ancillaryMode,smartNames:t.smartNames&&typeof t.smartNames=="object"?t.smartNames:e.smartNames,overrides:Tn(e.overrides,t.overrides),source:"local"}:{lang:e.lang,ancillaryMode:e.ancillaryMode,smartNames:e.smartNames,overrides:e.overrides,source:"baked"}}function Pn(){return W().ancillaryMode}function Nt(){let e=Pn();return vn(En,e),e}function Rt(e,t,n){let o=(n||W().overrides)[t];return o?e.map(r=>{let a=o[r.selector];if(!a)return{...r};let s={...r};return typeof a.value=="string"&&(s.value=a.value,s.displayValue=a.value),typeof a.autoGenerate=="boolean"&&(s.autoGenerate=a.autoGenerate),typeof a.useSmartEnv=="boolean"&&(s.useSmartEnv=a.useSmartEnv),s}):e.map(r=>({...r}))}function kt(e,t){let n=(t||W().overrides)[e];return n?Object.keys(n).length:0}var Sn,En,Mt=S(()=>{Sn="fmeMobileSettings",En="fmeAncillaryMode"});function Ot(){if(document.getElementById(Dt))return;let e=document.createElement("style");e.id=Dt,e.textContent=Nn,(document.head||document.documentElement).appendChild(e)}var Dt,Nn,It=S(()=>{Dt="fme-mobile-styles",Nn=`
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
`});var Rn=xt(()=>{ht();Ae();Pt();Mt();It();X();(async function(){try{window.__FME_RAN__=1}catch{}let t=W(),n=t.lang;_.smartNames=t.smartNames||null;let o=Nt();Ot();let r=Tt();if(!r){T(n==="he"?"לא נמצא פרופיל מתאים לעמוד הזה":"No matching profile found for this page",n,!1);return}let a=Rt(r.items,r.targetKey,t.overrides),s={targetKey:r.targetKey,source:r.source,fields:a.length,settingsSource:t.source,settingsOverrides:kt(r.targetKey,t.overrides),ancillaryMode:o,lang:n,url:location.href};try{window.__FME_LAST_FILL__=s}catch{}try{await gt(a,n)}catch(l){T((n==="he"?"שגיאה בזמן מילוי: ":"Error while filling: ")+String((l==null?void 0:l.message)||l),n,!1)}})()});Rn();})();
