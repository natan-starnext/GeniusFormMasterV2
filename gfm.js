// GENIUS FORM MASTER MOBILE — edit src/mobile/*.js and run "npm run build:mobile" instead of hand-editing this file.
(()=>{var S=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var bt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var i,R,O=S(()=>{i={CONTACT_FIRST_NAME:'[name="fname"]',CONTACT_LAST_NAME:'[name="lname"]',CONTACT_EMAIL:'[name="email"]',CONTACT_EMAIL_CONFIRMATION:'[name="emailConfirm"]',CONTACT_PHONE_NUMBER:'[name="phone"]',CONTACT_MARKETING_CHECKBOX:"#allowSubscribe",SUMMARY_PAGE_READY:'[automation-payment-step-type="checkout-page"]',PAYMENT_DROPDOWN:'[automation-payment-field-type="dropdown"]',PAYER_FIRST_NAME:'[name="fname"]',PAYER_LAST_NAME:'[name="lname"]',PAYER_EMAIL:'[name="femail"]',PAYER_PHONE_NUMBER:'[name="fphone"]',AGREEMENT_CHECKBOX:'[automation-payment-field-type="agreement-checkbox"]',APPROVE_AND_CONTINUE_BTN:'[automation-payment-field-type="approve-and-continue-button"]',PASSENGER_CARD:"[automation-passenger-number]",PASSENGER_TYPE_ATTR:"automation-passenger-type",PASSENGER_FIRST_NAME:'[name="paxFName"]',PASSENGER_LAST_NAME:'[name="paxLName"]',BIRTHDAY:'[name="paxBirthDate"]',PASSPORT:'[name="passportNumber"]',PASSPORT_EXPIRATION:'[name="passportExpirationDate"]',GENDER_DROP:"[automation-passenger-gender-dropdown]",GENDER_MALE:'[automation-passenger-gender-option-value="male"]',GENDER_FEMALE:'[automation-passenger-gender-option-value="female"]',PASSPORT_NATION_DROPDOWN:'[automation-passport-field-type="nation"]',PASSPORT_ISSUING_COUNTRY_DROPDOWN:'[automation-passport-field-type="issuing-country"]',PASSPORT_NATION_IL:'[automation-passport-nation-option="IL"]',PASSPORT_ISSUING_COUNTRY_IL:'[automation-passport-issuing-country-option="IL"]',BAGGAGE_GROUP:'[automation-baggage-group="baggage"]',TROLLEY_GROUP:'[automation-baggage-group="trolley"]',BAGGAGE_INVALID_GROUP:'[automation-baggage-valid="false"]',BAGGAGE_ITEM:'[automation-baggage-item-type="baggage"]',TROLLEY_ITEM:'[automation-baggage-item-type="trolley"]',BAGGAGE_INCLUDED_ATTR:"automation-baggage-item-included",BAGGAGE_SELECTED_ATTR:"automation-baggage-item-selected",BAGGAGE_DIRECTION_ATTR:"automation-baggage-item-direction",BAGGAGE_KEY_ATTR:"automation-baggage-item-key",BAGGAGE_QUANTITY_ATTR:"automation-baggage-item-quantity",BAGGAGE_WEIGHT_ATTR:"automation-baggage-item-weight",BAGGAGE_VALID_ATTR:"automation-baggage-valid",ANCILLARY_SERVICE_SKIP:"[automation-service-package-skip]",ANCILLARY_SERVICE_SELECT:"[automation-service-package-select]",ANCILLARIES_CONTINUE:'[automation-container-action="ancillaries-continue"]',SEAT_PACKAGE_ACTION:"[automation-seat-package-action]",SEAT_ACTION:"[automation-seat-action]",SEATS_ANCILLARY:'[automation-seat-package-action="SEATS"]',SEATS_SKIP_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="skip-seat"]',SEATS_SELECT_OPTION:'[automation-seat-package-action="SEATS"] [automation-seat-action="select-seat"]'},R={he:{filled:"הטופס מולא!",fillError:"שגיאה בזמן מילוי",fillFailed:"הטופס לא מולא",extensionActionFailed:"פעולה נכשלה בתוסף",altQFillFailed:"Alt+Q לא הצליח להפעיל מילוי",altQNotStarted:"Alt+Q לא הופעל",ancillarySkipped:"דילוג שירותים נלווים בוצע",ancillarySkipNotFound:"לא נמצא כפתור דילוג שירותים נלווים",ancillaryGlobalSelectDone:"כל השירותים הנלווים נבחרו, הושבה דולגה",ancillaryGlobalSkipDone:"כל השירותים הנלווים דולגו, הושבה דולגה",fieldsFilled:e=>`${e} שדות מולאו בהצלחה`,fieldsPartiallyFilled:(e,t)=>`${e} שדות מולאו, ${t} שדות נכשלו`,cannotStartFillHere:"לא ניתן להפעיל מילוי בעמוד הזה",cannotFillRefresh:"לא ניתן למלא את השדות - רעננו את העמוד ונסו שוב",noProfileFound:"לא נמצא פרופיל מתאים לעמוד הזה",noSavedFieldsToFill:"לא נמצאו שדות שמורים למילוי",dir:"rtl"},en:{filled:"Form Filled!",fillError:"Error while filling",fillFailed:"The form was not filled",extensionActionFailed:"Extension action failed",altQFillFailed:"Alt+Q could not start autofill",altQNotStarted:"Alt+Q was not started",ancillarySkipped:"Ancillary services skipped",ancillarySkipNotFound:"Ancillary skip button was not found",ancillaryGlobalSelectDone:"All ancillary services selected, seats skipped",ancillaryGlobalSkipDone:"All ancillary services skipped, seats skipped",fieldsFilled:e=>`${e} fields filled successfully`,fieldsPartiallyFilled:(e,t)=>`${e} fields filled, ${t} fields failed`,cannotStartFillHere:"Cannot start fill on this page",cannotFillRefresh:"Could not fill the fields - refresh the page and try again",noProfileFound:"No matching profile found for this page",noSavedFieldsToFill:"No saved fields found to fill",dir:"ltr"}}});async function M(e,{timeoutMs:t=750,intervalMs:n=150}={}){let o=Date.now();for(;;){let r;try{r=e()}catch{r=!1}if(r)return!0;if(Date.now()-o>=t)return!1;await new Promise(a=>setTimeout(a,n))}}async function ve(e,t){var m;if(!e)return!1;let n=e.tagName==="INPUT"&&(e.type==="checkbox"||e.type==="radio"),o=!n&&(e.getAttribute("role")==="checkbox"||e.hasAttribute("aria-checked"));if(n||o){let E=t===!0||t==="true";return(n?e.checked:e.getAttribute("aria-checked")==="true")!==E&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),n?e.checked===E:!0}let r=e.readOnly===!0;try{e.readOnly=!0}catch{}e.focus({preventScroll:!0});try{e.readOnly=r}catch{}let a=e.value,s=window.HTMLInputElement.prototype;e.tagName==="SELECT"&&(s=window.HTMLSelectElement.prototype),e.tagName==="TEXTAREA"&&(s=window.HTMLTextAreaElement.prototype);let l=(m=Object.getOwnPropertyDescriptor(s,"value"))==null?void 0:m.set;l?l.call(e,t):e.value=t,e.setAttribute("value",t);let c=e._valueTracker;c&&c.setValue(a),["keydown","keypress","input","keyup","change"].forEach(E=>{e.dispatchEvent(new Event(E,{bubbles:!0,composed:!0}))}),e.blur(),e.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}));let u=String(e.value||"").trim(),p=String(t||"").trim();return u===p||p.length>0&&u.length>0?!0:p.length===0?u===p:M(()=>String(e.value||"").trim().length>0,{timeoutMs:400,intervalMs:100})}function D(e){return Array.from(document.querySelectorAll(e)).filter(t=>{let n=t.getBoundingClientRect(),o=window.getComputedStyle(t);return n.width>0&&n.height>0&&o.visibility!=="hidden"&&o.display!=="none"&&o.opacity!=="0"})}async function x(e,t=1500){let n=Date.now();for(;Date.now()-n<t;){let o=D(e);if(o.length>0)return o[o.length-1];await new Promise(r=>setTimeout(r,40))}return null}function B(e){if(!e)return!1;let t=`fme_click_${Date.now()}_${Math.random().toString(36).slice(2)}`;e.setAttribute("data-fme-click-token",t);let n=document.createElement("script");return n.textContent=`
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
                console.warn("[FME PAGE CLICK] failed", e);
            }
        })();
    `,document.documentElement.appendChild(n),n.remove(),setTimeout(()=>{try{e.removeAttribute("data-fme-click-token")}catch{}},300),!0}function Y(e){if(!e)return;let t=e.getBoundingClientRect();if(!(t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth))try{e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"})}catch{try{e.scrollIntoView(!1)}catch{}}}function G(e){if(!e)return!1;try{Y(e)}catch{try{e.scrollIntoView(!1)}catch{}}try{e.focus({preventScroll:!0})}catch{}let t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,view:window,clientX:n,clientY:o,screenX:n,screenY:o,button:0,buttons:1};try{typeof PointerEvent<"u"&&(e.dispatchEvent(new PointerEvent("pointerover",{...r,pointerType:"mouse",isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerenter",{...r,pointerType:"mouse",isPrimary:!0})),e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerType:"mouse",isPrimary:!0}))),e.dispatchEvent(new MouseEvent("mouseover",r)),e.dispatchEvent(new MouseEvent("mouseenter",r)),e.dispatchEvent(new MouseEvent("mousedown",r)),typeof PointerEvent<"u"&&e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerType:"mouse",isPrimary:!0})),e.dispatchEvent(new MouseEvent("mouseup",r)),e.dispatchEvent(new MouseEvent("click",r)),typeof e.click=="function"&&e.click(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch(a){console.warn("[FME] clickLikeUser failed:",a)}return!0}function I(e){if(!e)return null;let t=e.getBoundingClientRect();if(!t||t.width<=0||t.height<=0)return e;let n=t.left+t.width/2,o=t.top+t.height/2;return document.elementFromPoint(n,o)||e}function A(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function Q(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&n.opacity!=="0"}function F(e){return Array.from(document.querySelectorAll(e)).filter(Q)}var b,C=S(()=>{b=e=>new Promise(t=>setTimeout(t,e))});function vt(e){return!e||typeof e!="string"?!1:e.includes("automation-service-package-skip")||e.includes("automation-service-package-select")||e.includes("automation-seat-action")}function we(e){return!!(e&&e.selector&&vt(e.selector))}function wt(){let e=F(i.ANCILLARIES_CONTINUE)[0];if(e)try{e.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"});return}catch{}try{window.scrollBy({top:520,left:0,behavior:"instant"})}catch{window.scrollBy(0,520)}}async function At(e,t){if(!e||!Q(e))return!1;let n=e.querySelector(".radio-circle")||e.querySelector('input[type="radio"]')||e.querySelector('[role="radio"]')||e;try{return n.click(),n.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),console.info(`[FME ANCILLARIES] Applied saved action: ${t}`),!0}catch(o){return console.warn(`[FME ANCILLARIES] Failed to apply saved action: ${t}`,o),!1}}function Ae(e){return e==="select_services"?"select_services":"skip_all"}function Tt(){try{return Ae(localStorage.getItem("fmeAncillaryMode"))}catch{return"skip_all"}}function J(){return new Promise(e=>{try{chrome.storage.local.get(["fmeAncillaryMode"],t=>{e(Ae(t==null?void 0:t.fmeAncillaryMode))})}catch{e(Tt())}})}async function ee(){if(!te())return console.info("[FME ANCILLARIES] Ancillaries page not detected. Skipping global mode."),null;let e=await J(),t=e==="select_services"?[i.ANCILLARY_SERVICE_SELECT,i.SEATS_SKIP_OPTION]:[i.ANCILLARY_SERVICE_SKIP,i.SEATS_SKIP_OPTION],n=0,o=new Set;for(let r of t){let a=F(r);for(let s of a){if(!s||o.has(s))continue;o.add(s),await At(s,e==="select_services"?"select-all-services-and-skip-seats":"skip-all-services-and-seats")&&n++}}return n>0?(wt(),console.info("[FME ANCILLARIES] Global ancillary mode applied:",{mode:e,clicked:n}),!0):(console.warn("[FME ANCILLARIES] Ancillaries page detected, but no matching global actions were clicked:",{mode:e}),!1)}function te(){return F(i.ANCILLARY_SERVICE_SKIP).length>0||F(i.SEAT_PACKAGE_ACTION).length>0||F(i.SEAT_ACTION).length>0}var Te=S(()=>{O();C()});function Pt(e){if(!e)return!1;if(e.hasAttribute(i.PASSENGER_TYPE_ATTR))return!0;let t=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.GENDER_DROP,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN].join(",");return!!e.querySelector(t)}function Re(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD)),t=new Map;for(let n of e){let o=n.getAttribute("automation-passenger-number");if(!o||!Pt(n))continue;let r=t.get(o);if(!r){t.set(o,n);continue}let a=!!n.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!n.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!n.querySelector(i.PASSPORT),s=!!r.querySelector(i.PASSPORT_NATION_DROPDOWN)||!!r.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||!!r.querySelector(i.PASSPORT);a&&!s&&t.set(o,n)}return Array.from(t.values()).sort((n,o)=>{let r=Number(n.getAttribute("automation-passenger-number")),a=Number(o.getAttribute("automation-passenger-number"));return r-a})}function ne(e,t){return`[automation-passenger-number="${CSS.escape(String(e))}"] ${t}`}function k(e){if(!e)return null;let t=String(e.selector||""),n=String(e.dropdownSelector||""),o=[i.PASSENGER_FIRST_NAME,i.PASSENGER_LAST_NAME,i.BIRTHDAY,i.PASSPORT,i.PASSPORT_EXPIRATION,i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN];for(let r of o)if(t===r||t.endsWith(` ${r}`)||t.includes(r))return r;for(let r of[i.PASSPORT_NATION_DROPDOWN,i.PASSPORT_ISSUING_COUNTRY_DROPDOWN])if(n===r||n.endsWith(` ${r}`)||n.includes(r))return r;return t===i.GENDER_DROP||t.endsWith(` ${i.GENDER_DROP}`)||n===i.GENDER_DROP||n.endsWith(` ${i.GENDER_DROP}`)||t.includes(i.GENDER_DROP)||n.includes(i.GENDER_DROP)?i.GENDER_DROP:null}function Nt(e,t){let n=t.getAttribute("automation-passenger-number"),o=k(e);if(!n||!o)return e;let r=ne(n,o),a={...e,selector:r};if(e.actionType==="gender-option"||e.actionType==="gender-random"||o===i.GENDER_DROP){let s=ne(n,i.GENDER_DROP);a.dropdownSelector=s,e.actionType==="gender-random"&&(a.selector=s),e.actionType==="gender-option"&&(a.selector=e.selector)}if(e.actionType==="passport-option"||o===i.PASSPORT_NATION_DROPDOWN||o===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN){let s=ne(n,o);a.dropdownSelector=s,e.actionType==="passport-option"&&(a.selector=e.selector)}return a}function U(e){let t=String(e||"").match(/automation-passenger-number="([^"]+)"/);return t?t[1]:null}function Rt(e,t){let n=new Set;for(let o of e){if(k(o)!==t)continue;let a=U(o.selector)||U(o.dropdownSelector);a&&n.add(a)}return n.size<=1}function Pe(e){if(!e)return!1;try{return!!document.querySelector(e)}catch{return!1}}function Ne(e,t){if(!e||!t)return e;let n={...e,selector:t};return(e.actionType==="gender-option"||e.actionType==="gender-random"||t===i.GENDER_DROP)&&(n.dropdownSelector=i.GENDER_DROP,e.actionType==="gender-random"&&(n.selector=i.GENDER_DROP),e.actionType==="gender-option"&&(n.selector=e.selector)),(e.actionType==="passport-option"||t===i.PASSPORT_NATION_DROPDOWN||t===i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)&&(n.dropdownSelector=t,e.actionType==="passport-option"&&(n.selector=e.selector)),n}function q(e){return e?e.actionType==="gender-option"||e.actionType==="gender-random"||e.actionType==="passport-option"?Pe(e.dropdownSelector):Pe(e.selector):!1}async function ke(e,t=5e3){if(!Array.isArray(e))return!1;if(!e.some(r=>!!k(r)||(r==null?void 0:r.actionType)==="passport-option"||(r==null?void 0:r.actionType)==="gender-option"||(r==null?void 0:r.actionType)==="gender-random"))return!0;let o=Date.now();for(;Date.now()-o<t;){let r=Re();if(r.length>0)return console.info("[FME PASSENGERS] Passenger cards ready before fill:",{cardsCount:r.length}),!0;(document.querySelector(i.PASSENGER_FIRST_NAME)||document.querySelector(i.PASSENGER_LAST_NAME)||document.querySelector(i.BIRTHDAY)||document.querySelector(i.PASSPORT)||document.querySelector(i.PASSPORT_EXPIRATION)||document.querySelector(i.PASSPORT_NATION_DROPDOWN)||document.querySelector(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||document.querySelector(i.GENDER_DROP))&&console.info("[FME PASSENGERS] Passenger fields detected before fill, waiting for passenger card."),await b(120)}return console.warn("[FME PASSENGERS] Passenger cards were not ready after wait. Continuing anyway."),!1}function Oe(e){if(!Array.isArray(e))return[];let t=Re();t.length===0&&console.warn("[FME PASSENGERS] No real passenger containers detected. Will validate existing passenger items and use base fallback when possible.");let n=[],o=new Set,r=new Set;for(let a of e){let s=k(a);if(!s){let u=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;o.has(u)||(o.add(u),n.push(a));continue}if(!Rt(e,s)){let u=`${a.actionType||""}|${a.selector||""}|${a.dropdownSelector||""}`;if(q(a)){o.has(u)||(o.add(u),n.push(a));continue}let p=Ne(a,s),m=`${p.actionType||""}|${p.selector||""}|${p.dropdownSelector||""}`;!r.has(m)&&q(p)?(console.warn("[FME PASSENGERS] Saved scoped passenger target does not exist. Using visible base field instead:",{oldSelector:a.selector,oldDropdownSelector:a.dropdownSelector,newSelector:p.selector,newDropdownSelector:p.dropdownSelector,baseSelector:s}),r.add(m),o.add(m),n.push(p)):console.warn("[FME PASSENGERS] Saved scoped passenger target does not exist and no base fallback found. Skipping:",{selector:a.selector,dropdownSelector:a.dropdownSelector,baseSelector:s});continue}let c=!1;for(let u of t){let p=Nt(a,u);if(!q(p)){console.warn("[FME PASSENGERS] Scoped passenger target does not exist. Skipping clone:",{selector:p.selector,dropdownSelector:p.dropdownSelector,baseSelector:s});continue}let m=`${p.actionType||""}|${p.selector||""}|${p.dropdownSelector||""}`;o.has(m)||(o.add(m),n.push(p),c=!0)}if(!c){let u=Ne(a,s),p=`${u.actionType||""}|${u.selector||""}|${u.dropdownSelector||""}`;!r.has(p)&&q(u)?(console.warn("[FME PASSENGERS] No scoped passenger targets exist. Using visible base field instead:",{selector:u.selector,dropdownSelector:u.dropdownSelector,baseSelector:s}),r.add(p),o.add(p),n.push(u)):console.warn("[FME PASSENGERS] No scoped passenger targets exist and no base fallback found. Skipping:",{selector:a.selector,dropdownSelector:a.dropdownSelector,baseSelector:s})}}return console.info(`[FME PASSENGERS] Expanded passenger fields from ${e.length} to ${n.length} items for ${t.length} detected passenger containers.`),n}var z=S(()=>{O();C()});var oe,Me=S(()=>{oe={fmeGenderToggle:0,fmeQuickFillKeyLock:!1}});async function _e(e){if(!e||e.actionType!=="gender-random"||!e.dropdownSelector||!Array.isArray(e.options)||e.options.length===0)return console.warn("[FME GENDER] Invalid merged alternating gender item:",e),!1;let t=e.options.some(a=>a.selector===i.GENDER_MALE),n=e.options.some(a=>a.selector===i.GENDER_FEMALE);if(!t||!n)return console.warn("[FME GENDER] Alternating gender requires both male and female:",e),!1;let o=String(e.value||"random").toLowerCase(),r;return o==="male"?(r=i.GENDER_MALE,console.info("[FME GENDER] Fixed gender selected: male")):o==="female"?(r=i.GENDER_FEMALE,console.info("[FME GENDER] Fixed gender selected: female")):(r=oe.fmeGenderToggle%2===0?i.GENDER_MALE:i.GENDER_FEMALE,oe.fmeGenderToggle++,console.info("[FME GENDER] Alternating gender selected:",r)),re(e.dropdownSelector,r)}async function Ie(e,t){let n=Ot(e);return n?(console.info("[FME GENDER] Clicking gender option target:",n),G(n),await b(500),!!(t&&D(t).length===0||(console.warn("[FME GENDER] Regular click did not close option. Trying page-context click."),B(n),await b(500),n.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),n.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),t&&D(t).length===0))):(console.warn("[FME GENDER] No clickable target found for option:",e),!1)}function kt(e){return e?[e.querySelector('[role="combobox"]'),e.querySelector('[aria-haspopup="listbox"]'),e.querySelector("[aria-expanded]"),e.querySelector("button"),e.querySelector("input"),I(e),e].filter(Boolean):[]}async function Fe(e,t){let n=[...new Set(kt(e))];for(let o of n){console.info("[FME GENDER] Trying to open dropdown with target:",o),G(o),await b(500);let r=await x(t,1200);if(r||(o.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"ArrowDown",code:"ArrowDown"})),await b(300),r=await x(t,1200),r))return r}return null}function Ot(e){if(!e)return null;let t=I(e);return(t==null?void 0:t.closest("[automation-passenger-gender-option-value]"))||(t==null?void 0:t.closest("[automation-passport-nation-option]"))||(t==null?void 0:t.closest("[automation-passport-issuing-country-option]"))||(t==null?void 0:t.closest('[role="option"]'))||(t==null?void 0:t.closest("li"))||(t==null?void 0:t.closest("button"))||e.closest("[automation-passenger-gender-option-value]")||e.closest("[automation-passport-nation-option]")||e.closest("[automation-passport-issuing-country-option]")||e.closest('[role="option"]')||e.closest("li")||e.closest("button")||t||e}async function De(e,t){if(D(e).length===0)return;t&&G(t);let n=await M(()=>D(e).length===0,{timeoutMs:400,intervalMs:80});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await M(()=>D(e).length===0,{timeoutMs:250,intervalMs:80})),n||console.warn("[FME GENDER] Dropdown still open after close attempts (value is already correctly selected):",e)}function Ge(e){if(!e)return!1;if(e.classList.contains("selected")||e.getAttribute("aria-selected")==="true")return!0;let t=e.querySelector('input[type="radio"]');return!!(t&&t.checked===!0)}async function Mt(e,t){var m;if(!e||!t)return console.warn("[FME GENDER] Missing dropdown or option selector"),!1;let n=document.querySelector(e);if(!n)return console.warn("[FME GENDER] Dropdown not found:",e),!1;console.info("[FME GENDER] Opening dropdown:",e),Y(n);let o=n.getBoundingClientRect(),r=o.left+o.width/2,a=o.top+o.height/2,s={bubbles:!0,cancelable:!0,view:window,clientX:r,clientY:a,screenX:r,screenY:a,button:0,buttons:1};n.dispatchEvent(new MouseEvent("mousedown",s)),n.dispatchEvent(new MouseEvent("mouseup",s)),n.dispatchEvent(new MouseEvent("click",s)),await new Promise(E=>setTimeout(E,100));let l=await x(t,2500);if(!l)return console.warn("[FME GENDER] Option not visible after dropdown opened:",t),!1;let c=l.querySelector('input[type="radio"]')||l.querySelector("label")||l.closest("[automation-passenger-gender-option-value]")||l;if(!c)return console.warn("[FME GENDER] Option target not found:",t),!1;console.info("[FME GENDER] Clicking option:",t,c),Y(c);let u=l.querySelector('input[type="radio"]')||((m=c.closest("[automation-passenger-gender-option-value]"))==null?void 0:m.querySelector('input[type="radio"]'))||(c.type==="radio"?c:null);return u&&u.checked!==!0&&(u.click(),u.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),u.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await M(()=>u.checked===!0||Ge(l),{timeoutMs:1e3,intervalMs:70}))?(console.info("[FME GENDER] Gender selected by radio:",t),await De(t,n),!0):(c.click(),c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),c.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await M(()=>Ge(l)||D(t).length===0,{timeoutMs:2e3,intervalMs:150})?(console.info("[FME GENDER] Gender selected:",t),await De(t,n),!0):(console.warn("[FME GENDER] Option still visible after click:",t),!1))}async function re(e,t){if(await Mt(e,t))return!0;console.info("[FME GENDER] Retrying gender selection with a heavier strategy:",{dropdownSelector:e,optionSelector:t});let o=document.querySelector(e);if(!o)return console.warn("[FME GENDER] Gender selection failed after retry (dropdown not found):",{dropdownSelector:e,optionSelector:t}),!1;let r=await Fe(o,t);if(!r)return console.warn("[FME GENDER] Gender selection failed after retry (option not found):",{dropdownSelector:e,optionSelector:t}),!1;let a=await Ie(r,t);return a||console.warn("[FME GENDER] Gender selection failed after retry:",{dropdownSelector:e,optionSelector:t}),a}var ae=S(()=>{O();C();Me()});function ie(e){if(!e)return null;let t=$(e.selector);if(t)return String(t).trim().toUpperCase();let n=String(e.value||"").trim().toUpperCase();return/^[A-Z]{2,3}$/.test(n)?n:null}function se(e){let t=String((e==null?void 0:e.dropdownSelector)||""),n=String((e==null?void 0:e.selector)||"");return t.includes('automation-passport-field-type="issuing-country"')||n.includes("automation-passport-issuing-country-option")?"issuing-country":t.includes('automation-passport-field-type="nation"')||n.includes("automation-passport-nation-option")?"nation":null}async function Ce(e,t){if(!A(document.querySelector(e)||{}))return;t&&G(t);let n=await M(()=>!A(document.querySelector(e)||{}),{timeoutMs:400,intervalMs:80});n||(document.body.click(),t&&t.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Escape",code:"Escape"})),n=await M(()=>!A(document.querySelector(e)||{}),{timeoutMs:250,intervalMs:80})),n||console.warn("[FME PASSPORT] Dropdown still open after close attempts (value is already correctly selected):",e)}async function Dt(e,t){var E,g;if(!e||!t)return console.warn("[FME PASSPORT] Missing dropdown or option selector:",{dropdownSelector:e,optionSelector:t}),!1;let n=U(e),r=(n?document.querySelector(`[automation-passenger-number="${CSS.escape(n)}"]`):null)||document,a=Gt(e),s=document.querySelector(e)||r.querySelector(a);if(!s)return console.warn("[FME PASSPORT] Dropdown not found:",{passengerNumber:n,dropdownSelector:e,baseDropdownSelector:a}),!1;let l=s.closest(".selector-input-wrapper")||((E=s.closest(".subject-wrapper"))==null?void 0:E.closest(".selector-input-wrapper"))||s.parentElement,c=[l==null?void 0:l.querySelector(".subject-wrapper"),l==null?void 0:l.querySelector(".dropdown-subject"),s.closest(".subject-wrapper"),s,I(s)].filter(Boolean),u=null;for(let h of[...new Set(c)])if(console.info("[FME PASSPORT] Trying passport dropdown target:",{passengerNumber:n,dropdownSelector:e,optionSelector:t,openTarget:h}),G(h),await b(100),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(A)||Array.from(document.querySelectorAll(t)).find(A),u&&A(u)||(B(h),await b(220),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(A)||Array.from(document.querySelectorAll(t)).find(A),u&&A(u))||(h.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),h.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await b(180),u=(l==null?void 0:l.querySelector(`.options-container.show ${t}`))||(l==null?void 0:l.querySelector(t))||Array.from(r.querySelectorAll(t)).find(A)||Array.from(document.querySelectorAll(t)).find(A),u&&A(u)))break;if(!u||!A(u))return console.warn("[FME PASSPORT] Visible option not found:",{passengerNumber:n,dropdownSelector:e,optionSelector:t,wrapper:l,allOptions:Array.from(document.querySelectorAll(t))}),!1;if(u.classList.contains("selected"))return console.info("[FME PASSPORT] Option already selected for this passenger. Skipping re-click:",t),await Ce(t,s),!0;let p=((g=I(u))==null?void 0:g.closest("[automation-passport-nation-option], [automation-passport-issuing-country-option]"))||u.querySelector("input")||u.querySelector("label")||u.querySelector("span")||u;console.info("[FME PASSPORT] Clicking passport option target:",{passengerNumber:n,optionSelector:t,option:u,optionTarget:p}),G(p),await M(()=>!!(l!=null&&l.querySelector(`${t}.selected`)||document.querySelector(`${t}.selected`)),{timeoutMs:1500,intervalMs:100});let m=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`);return m||(B(p),await b(250),m=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),m||(p.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),p.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,key:"Enter",code:"Enter"})),await b(180),m=(l==null?void 0:l.querySelector(`${t}.selected`))||document.querySelector(`${t}.selected`)),console.info("[FME PASSPORT] After passport option click:",{optionSelector:t,selectedAfter:m,selectedText:(m==null?void 0:m.innerText)||null}),m&&await Ce(t,s),!!m}function Gt(e){let t=String(e||"");return t.includes('automation-passport-field-type="issuing-country"')?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:t.includes('automation-passport-field-type="nation"')?i.PASSPORT_NATION_DROPDOWN:t}async function Le(e){if(console.info("[FME PASSPORT FILL ITEM RECEIVED]",e),!e||e.actionType!=="passport-option"||!e.dropdownSelector)return console.warn("[FME PASSPORT] Invalid passport option item:",e),!1;let t=ie(e),n=se(e),o=xe(e);if(!t||!n||!o)return console.warn("[FME PASSPORT] Missing country/dropdown data:",{item:e,countryCode:t,dropdownType:n,optionSelector:o}),!1;console.info("[FME PASSPORT] Selecting saved passport country:",{countryCode:t,dropdownType:n,dropdownSelector:e.dropdownSelector,optionSelector:o});let r=2;for(let a=1;a<=r;a++){if(a>1&&(console.info("[FME PASSPORT] Retrying passport dropdown selection after passenger transition:",{attempt:a,maxAttempts:r,dropdownSelector:e.dropdownSelector,optionSelector:o}),await b(100)),await Dt(e.dropdownSelector,o))return!0;await b(100)}return console.warn("[FME PASSPORT] Passport country selection failed after retries:",{dropdownSelector:e.dropdownSelector,optionSelector:o,countryCode:t,dropdownType:n}),!1}var le=S(()=>{O();ae();C();z();H()});function W(e){if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return console.warn("[FME DOB] Invalid selector:",e.selector),null}if(!t)return console.warn("[FME DOB] Field not found:",e.selector),null;let n=t.closest(i.PASSENGER_CARD);return n?n.getAttribute(i.PASSENGER_TYPE_ATTR):(console.warn("[FME DOB] Passenger card not found for field:",e.selector),null)}function Be(e){return!e||typeof e!="string"?!1:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL||e.includes("automation-passport-nation-option")||e.includes("automation-passport-issuing-country-option")}function $(e){if(!e)return null;let t=e.match(/automation-passport-nation-option="([^"]+)"/);if(t)return t[1];let n=e.match(/automation-passport-issuing-country-option="([^"]+)"/);return n?n[1]:e===i.PASSPORT_NATION_IL||e===i.PASSPORT_ISSUING_COUNTRY_IL?"IL":null}function L(e){let t=$(e);return t?e.includes("automation-passport-nation-option")?`Passport Nation: ${t}`:e.includes("automation-passport-issuing-country-option")?`Passport Issuing Country: ${t}`:`Passport Country: ${t}`:"Passport Country"}function ce(e){return Array.isArray(e)?e.map(t=>{if(!t||!t.selector)return t;let n=String(t.selector||""),o=String(t.dropdownSelector||""),r=String(t.value||"").toUpperCase();if(t.actionType==="passport-option"&&t.dropdownSelector&&Be(t.selector))return{...t,value:$(t.selector)||t.value,displayValue:t.displayValue||L(t.selector),humanName:t.humanName||L(t.selector),useSmartEnv:!1,autoGenerate:!1};if(Be(n)){let l=n.includes("automation-passport-nation-option")||n===i.PASSPORT_NATION_IL,c=n.includes("automation-passport-issuing-country-option")||n===i.PASSPORT_ISSUING_COUNTRY_IL,u=o||(l?i.PASSPORT_NATION_DROPDOWN:null)||(c?i.PASSPORT_ISSUING_COUNTRY_DROPDOWN:null);return u?{...t,selector:n,value:$(n),displayValue:L(n),humanName:L(n),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:u}:t}let a=n.includes(i.PASSPORT_NATION_DROPDOWN)||o.includes(i.PASSPORT_NATION_DROPDOWN),s=n.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN)||o.includes(i.PASSPORT_ISSUING_COUNTRY_DROPDOWN);if((a||s)&&r==="IL"){let l=o||n,c=a?i.PASSPORT_NATION_IL:i.PASSPORT_ISSUING_COUNTRY_IL;return{...t,selector:c,value:"IL",displayValue:L(c),humanName:L(c),tagName:t.tagName||"DIV",actionType:"passport-option",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:l}}return t}):[]}function _t(e){return!e||typeof e!="string"?!1:e===i.GENDER_MALE||e===i.GENDER_FEMALE}function ue(e){if(!Array.isArray(e))return[];let t=[],n=new Map;for(let o of e){if(o&&o.actionType==="gender-option"&&o.dropdownSelector&&_t(o.selector)){let r=o.dropdownSelector;n.has(r)||n.set(r,[]),n.get(r).push(o);continue}t.push(o)}for(let[o,r]of n.entries()){let a=[];for(let c of r)a.some(u=>u.selector===c.selector)||a.push(c);let s=a.some(c=>c.selector===i.GENDER_MALE),l=a.some(c=>c.selector===i.GENDER_FEMALE);if(s&&l){t.push({selector:o,value:"random",displayValue:"Alternating: Male / Female",humanName:"Gender Alternating",tagName:"DIV",actionType:"gender-random",autoGenerate:!1,useSmartEnv:!1,dropdownSelector:o,options:[{selector:i.GENDER_MALE,value:"male",displayValue:"Gender Male",humanName:"Gender Male"},{selector:i.GENDER_FEMALE,value:"female",displayValue:"Gender Female",humanName:"Gender Female"}]});continue}a.length>0&&t.push(a[0])}return t}function xe(e){let t=ie(e),n=se(e);return!t||!n?(e==null?void 0:e.selector)||null:n==="issuing-country"?`[automation-passport-issuing-country-option="${CSS.escape(t)}"]`:`[automation-passport-nation-option="${CSS.escape(t)}"]`}function Ye(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return t===i.CONTACT_FIRST_NAME||t===i.CONTACT_LAST_NAME||t===i.CONTACT_EMAIL||t===i.CONTACT_EMAIL_CONFIRMATION||t===i.CONTACT_PHONE_NUMBER||t===i.CONTACT_MARKETING_CHECKBOX||t===i.PAYER_FIRST_NAME||t===i.PAYER_LAST_NAME||t===i.PAYER_EMAIL||t===i.PAYER_PHONE_NUMBER}function ze(e){if(!e||!e.selector)return!1;let t=k(e);return t===i.PASSENGER_FIRST_NAME||t===i.PASSENGER_LAST_NAME||t===i.BIRTHDAY||t===i.PASSPORT||t===i.PASSPORT_EXPIRATION}function de(e){if(!e)return!1;let t=k(e),n=String(e.selector||"");return t===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION)}function Z(e){if(!e)return!1;let t=k(e),n=String(e.selector||"");return t===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION)}function $e(e){let t=String(e||"").trim().toLowerCase();return!t||t==="click action"||t==="dd/mm/yyyy"||t==="mm/dd/yyyy"||t==="undefined"||t==="null"}var H=S(()=>{O();z();le()});function pe(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)],t=Math.floor(1e7+Math.random()*9e7);return`${e}${t}`}function Ve(e){if(!e)return null;let t=String(e).match(/(\d{2})\/(\d{2})\/(\d{4})/);if(!t)return null;let n=Number(t[1]),o=Number(t[2]),r=Number(t[3]),a=new Date(r,o-1,n);return a.getFullYear()!==r||a.getMonth()!==o-1||a.getDate()!==n?null:a}function v(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function Ke(e){let t=String(e||"").match(/\d{2}\/\d{2}\/\d{4}/g);if(!t||t.length<2)return null;let n=t.map(Ve).filter(Boolean).sort((o,r)=>o.getTime()-r.getTime());return n.length<2?null:{minDate:n[0],maxDate:n[n.length-1]}}function me(e){var o,r,a,s,l,c;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,(c=(l=(s=t.parentElement)==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:c.parentElement].filter(Boolean);for(let u of n){let p=u.innerText||"",m=Ke(p);if(m)return console.info("[FME DOB] Using DOM birth date range:",{selector:e.selector,min:v(m.minDate),max:v(m.maxDate)}),m}return null}function qe(e){if(!e||!e.selector)return!1;let t=String(e.selector||"");return k(e)===i.BIRTHDAY||t.includes(i.BIRTHDAY)||t.includes('[name="paxBirthDate"]')}function Ue(e,t){if(!e||!t)return!1;let n=Ve(e);return n?n.getTime()>=t.minDate.getTime()&&n.getTime()<=t.maxDate.getTime():!1}function It(e){var o,r,a;if(!e||!e.selector)return null;let t=null;try{t=document.querySelector(e.selector)}catch{return null}if(!t)return null;let n=[t.parentElement,(o=t.parentElement)==null?void 0:o.parentElement,(a=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:a.parentElement,t.closest(i.PASSENGER_CARD),t.closest("form")].filter(Boolean);for(let s of n){let l=Ke(s.innerText||"");if(l)return l}return null}function X(e,t){let n=new Date(e.getTime());return n.setDate(n.getDate()+t),n}function fe(e,t){let n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n}function V(e,t){let n=e.getTime(),o=t.getTime();if(o<=n)return v(e);let r=n+Math.floor(Math.random()*(o-n+1));return v(new Date(r))}function ge(e=null){let t=new Date,n=It(e);if(n){let a=X(n.minDate,3),s=X(n.maxDate,-3);return console.info("[FME PASSPORT] Using DOM validation range for passport expiration:",{min:v(n.minDate),max:v(n.maxDate),generatedBetween:{min:v(a),max:v(s)}}),V(a,s)}let o=fe(t,18),r=new Date(t.getFullYear()+9,t.getMonth(),t.getDate());return console.info("[FME PASSPORT] DOM validation range not found. Using safe fallback range:",{min:v(o),max:v(r)}),V(o,r)}function He(e,t=null){if(!t)return null;let n=String(t.selector||""),o=k(t);if(o===i.BIRTHDAY||n.includes(i.BIRTHDAY)){let m=W(t);return he(m,t)}if(o===i.PASSPORT_EXPIRATION||n.includes(i.PASSPORT_EXPIRATION))return ge(t);if(o===i.PASSPORT||n.includes(i.PASSPORT)&&!n.includes(i.PASSPORT_EXPIRATION))return pe();if(n.includes('[name="fname"]')||n.includes('[name="paxFName"]'))return _.firstNames[Math.floor(Math.random()*_.firstNames.length)];if(n.includes('[name="lname"]')||n.includes('[name="paxLName"]'))return _.lastNames[Math.floor(Math.random()*_.lastNames.length)];if(n.includes('[name="femail"]')||n.includes('[name="email"]')||n.includes('[name="emailConfirm"]')){let m=_.firstNames[Math.floor(Math.random()*_.firstNames.length)].toLowerCase().replace(/\s+/g,""),E=_.lastNames[Math.floor(Math.random()*_.lastNames.length)].toLowerCase().replace(/\s+/g,""),g=Math.floor(1e3+Math.random()*9e3);return`${m}.${E}${g}@test.com`}return n.includes('[name="fphone"]')||n.includes('[name="phone"]')?Ft():null}function Ft(){let e=["050","052","054","058"],t=e[Math.floor(Math.random()*e.length)],n=Math.floor(1e6+Math.random()*9e6);return`${t}-${n}`}function he(e,t=null){let n=me(t);if(n){let u=X(n.minDate,3),p=X(n.maxDate,-3);return u.getTime()<=p.getTime()?V(u,p):V(n.minDate,n.maxDate)}let o=new Date,r=String(e||"").trim(),a,s,l;switch(r){case"1":l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break;case"2":l="Child",a=new Date(o.getFullYear()-11,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-3,o.getMonth(),o.getDate());break;case"3":l="Infant",a=fe(o,-14),s=fe(o,-3);break;case"4":l="Senior",a=new Date(o.getFullYear()-85,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-65,o.getMonth(),o.getDate());break;case"6":l="Youth",a=new Date(o.getFullYear()-24,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-12,o.getMonth(),o.getDate());break;default:l="Adult",a=new Date(o.getFullYear()-55,o.getMonth(),o.getDate()),s=new Date(o.getFullYear()-25,o.getMonth(),o.getDate());break}let c=V(a,s);return console.info("[FME DOB] Generated fallback birth date:",{paxType:r,resolvedType:l,min:v(a),max:v(s),generated:c}),c}var _,We=S(()=>{O();z();H();_={firstNames:["Daniel","Omer","Idan","Guy","Ben","Lior","Amit","Neta","Ron","Eyal","Ori","Tom","Alex","Max","Leo","Itay","Yonatan","Ariel","Noam","Itamar","Roy","Eitan","Ari","Dvir","Roee","Ido","Matan","Shahar","Aviv","Ziv","Peleg","Nadav","Gilad","Eran","Ofer","Boaz","Yair","Asaf","Elad","Omri","Nir","Lavi","Gefen","Ilay","Harel","Yahav","Alon","Maor","Or","Yahali","Rom","Yuval","Yarden","Gal","Dean","Reem","Dor","Tomer","Yaniv","Ohad","Erez","Liran","Yotam","Oded","Barak","Zvi","Udi","Dror","Hagai","Miki","Kobi","Yossi","Avi","Gabi","Yaron","Gidi","Shay","Oz","Adir","Paz","Tzur","Sagi","Raz","Eliav","Eliran","Elior","Yishai","Yigal","Amichai","Elisha","Netanel","Nehorai","Orel","Osher","Shoval","Lidor","Shir","Moran","Meitar","Dagan","Dekel","Assaf","Moti","Shmulik","Itzik","Gadi","Haim","Dudu","Tzachi","Rafi","Meir","Zion","Baruch","Efraim","Menachem","Reuven","Shimon","Asher","Dan","Gad","Naftali","Levi","Yehoshua","Pinchas","Nissim","Shalom","Shlomi","Tamir","Natan","Amiram","Ovadia","Yoav","Binyamin","Uzi","Pini","Tzvika","Nitzan","Rotem","Dolev","Ofek","Snir","Almog","Yagel","Shoham","Arad","Kerem","Amri","Yiftach","Yinon","Eviatar","Elyashiv","Avishai","Avitar","Eliezer","Elchanan","Oriel","Tzion","Arbel","Noa","Maya","Sarah","Tamar","Emma","Yael","Adi","Shira","Dana","Ella","Mia","Zoe","Roni","Mika","Adele","Romi","Noga","Yuli","Alma","Ayala","Hila","Michal","Ofri","Rina","Avigail","Efrat","Naama","Renana","Moriah","Tehila","Odelia","Racheli","Yehudit","Tzlil","Shahaf","Sahar","Tair","Liel","Tahel","Maayan","Sivan","Lidar","Linoy","Meshi","Tohar","Hodaya","Bat El","Orian","Shirel","Noy","Noi","Liat","Shani","Koral","Shaked","Nofar","Sapira","Zohar","Gili","Hadar","Libby","Shelly","Netta","Ruti","Nomi","Gila","Nira","Tami","Liora","Shula","Yaara","Danya","Amir","Yoram","Ilan","Arik","Sasson","Umar","Oshri","Rami","Amnon","Avner","Eliad","Elik","Elitzur","Ilanit","Orna","Dorit","Levana","Ruchama","Oshrat","Kalanit","Shlomit","Margalit","Pazit","Sarit","Mirit","Nirit","Tirtza","Alona","Tziona","Tzvia","Dikla","Oshra","Talia","Odel","Aya","Shirley","Linor","Yam","Ravid","Aharon","Akiva","Ami","Amitai","Amos","Arie","Arieh","Ariel","Aryeh","Aviad","Avidan","Aviel","Avigdor","Avihai","Avinoam","Aviram","Avishag","Avital","Ayala","Ayelet","Bar","Batya","Boaz","Bracha","Carmel","Carmela","Chaim","Chana","Chanan","Chava","Chaya","Chen","Dafna","Dalia","Daniela","Daria","David","Devorah","Dinah","Ehud","Elad","Elchanan","Eli","Eliana","Elijah","Elisha","Elisheva","Eliyahu","Elkana","Emanuel","Emuna","Esther","Esti","Eyal","Ezra","Galia","Galit","Gavriel","Geula","Guy","Hagar","Hillel","Idit","Ido","Ilana","Inbar","Iris","Ishay","Itai","Itamar","Itzhak","Keren","Kinneret","Leah","Levi","Libi","Liron","Livnat","Malka","May","Meital","Merav","Michael","Miri","Miriam","Mor","Moshe","Naaman","Nadia","Naftali","Naomi","Narkis","Nava","Nechemya","Nehorai","Nili","Nimrod","Nitzan","Noam","Noya","Nurit","Oded","Ofira","Ofra","Omri","Ora","Oren","Ori","Orian","Orli","Osher","Osnat","Peleg","Penina","Pinchas","Raanan","Rachel","Rakefet","Ran","Ravid","Raz","Reut","Reuven","Revital","Rinat","Roei","Ronen","Ronit","Roy","Ruth","Sapir","Sara","Sarit","Shachar","Shai","Shaked","Shalev","Shalom","Shalva","Shani","Shaul","Sharon","Sharona","Shifra","Shilat","Shimon","Shir","Shira","Shirel","Shiri","Shlomo","Shlomit","Shlomi","Shmuel","Shmulik","Shoshana","Shoval","Sigal","Sigalit","Sima","Simcha","Sivan","Smadar","Stav","Tahel","Tair","Tal","Talia","Tamar","Tamir","Tanya","Techiya","Tehila","Tikva","Tohar","Tom","Tomer","Tova","Tzachi","Tzila","Tzion","Tziona","Tzlil","Tzofia","Tzur","Udi","Uri","Uriel","Uzi","Uziel","Vered","Yaakov","Yael","Yaeli","Yaffa","Yagil","Yahali","Yahav","Yair","Yakir","Yam","Yaniv","Yarden","Yardena","Yaron","Yasmin","Yechiel","Yedidya","Yehezkel","Yehoshua","Yehuda","Yehudit","Yemima","Yeshayahu","Yifat","Yigal","Yishai","Yisrael","Yitzhak","Yoav","Yocheved","Yoel","Yonatan","Yoram","Yosef","Yossi","Yotam","Yuli","Yuval","Zahava","Zecharia","Zeev","Zehava","Zila","Zion","Ziv","Ziva","Zohar","Zvi","Zvika","Zemer","Agam","Ahuva","Aliza","Amalia","Anat","Atara","Avia","Aviva","Batsheva","Benaya","Bezalel","Carmit","Chanoch","Danit","Dina","Drora","Eden","Edna","Einat","Elazar","Elia","Elin","Elyakim","Emil","Fima","Frida","Gali","Gedalia","Gil","Gilead","Gittit","Golda","Hadas","Hadasa","Hallel","Hanan","Hedva","Hezi","Hinda","Hod","Ilai","Irit","Laly","Lev","Lida","Limor","Liraz","Lital","Magen","Mali","Maoz","Naya","Matityahu","Mazal","Meirav","Menashe","Meni","Micha","Mina","Misha","Moshik","Nati","Nechama","Neria","Netaly","Nof","Nuriel","Orit","Ortal","Oshrit","Pnina","Raanan","Rahel","Rama","Reena","Riki","Rona","Sagit","Sefi","Shila","Shimshon","Nevo","Shosh","Tali","Talma","Tiferet","Tomi","Tovia","Varda","Viki","Yakira","Yafit","Yana","Yirmiyahu","Yonit","Yosefa","Zehavit","Zelig","Zmira","Zohara"],lastNames:["Cohen","Levi","Mizrachi","Peretz","Biton","Friedman","Katz","Azoulay","Golan","Shapira","Tal","Bar","Mor","Dahan","Gabay","Adler","Segal","Klein","Weiss","Schwartz","Ohana","Malka","Yosef","David","Avraham","Yitzhak","Yaakov","Moshe","Aharon","Solomon","Levin","Kogan","Rosen","Rubin","Stern","Kaplan","Greenberg","Berman","Dayan","Feldman","Pinto","Edri","Amar","Asulin","Ben David","Ben Ami","Ben Zvi","Hadad","Hazan","Melamed","Navon","Peleg","Tzur","Shahar","Shoham","Alon","Amoyal","Abergel","Atias","Ohayon","Elbaz","Vaknin","Zada","Toledano","Lugasi","Maman","Marciano","Suissa","Ozeri","Sheetrit","Turgeman","Tzarfati","Kadoch","Karadi","Revivo","Shushan","Alfasi","Buzaglo","Deri","Halabi","Yifrach","Malul","Siboni","Shafir","Abutbul","Aharoni","Alcalay","Aloni","Amir","Amit","Amitai","Appel","Arama","Arnon","Ashkenazi","Assaraf","Atar","Avidan","Avigdor","Avinery","Avishai","Avni","Ayalon","Babad","Bacher","Badash","Bahar","Banai","Bar Ilan","Bar Lev","Bar Natan","Bar On","Barak","Barazani","Barda","Barel","Barkai","Bashan","Basson","Batzri","Baum","Beck","Becker","Behar","Beinart","Ben Ari","Ben Atar","Ben Basat","Ben Chaim","Ben Dov","Ben Ezra","Ben Gurion","Ben Haim","Ben Lulu","Ben Moshe","Ben Natan","Ben Porat","Ben Shabbat","Ben Shahar","Ben Shimon","Ben Shlomo","Ben Yehuda","Ben Yitzhak","Ben Zaken","Ben Zeev","Berger","Berkovich","Berkowitz","Bernstein","Bitan","Blau","Bloch","Blum","Boker","Borochov","Brand","Braverman","Brik","Brikman","Brisk","Cahan","Cahana","Carmi","Caspi","Chaim","Chalfon","Chelouche","Chen","Churgin","Dagan","Dahari","Damari","Dan","Dangot","Danieli","Danon","Dar","Darshan","Daskal","Dassa","Davidi","Davidov","Davidovich","Dekel","Deutsch","Diamond","Dichter","Dror","Drori","Eckstein","Efrati","Eilat","Einhorn","Eisenberg","Eisenstein","Elalouf","Elam","Elazar","Eliav","Elimelech","Elkayam","Elkobi","Emanuel","Engel","Epstein","Erez","Eshkol","Even","Ezra","Fadida","Falah","Farchi","Farkash","Fatihi","Fattal","Fine","Finkelstein","Fishman","Fleischer","Fogel","Fox","Frank","Frankel","Frenkel","Fried","Fuchs","Gabbay","Gafni","Gal","Galanti","Galili","Gamzu","Gaon","Garty","Gavish","Gavrieli","Gefen","Gelb","Gelber","Geller","Gerber","Gershon","Gil","Giladi","Gilboa","Gilon","Ginzburg","Givati","Glass","Glick","Glickman","Glazer","Gofman","Gold","Goldberg","Goldenberg","Goldfarb","Goldman","Goldschmidt","Goldstein","Gonen","Gordon","Gottlieb","Geva","Gross","Grossman","Gruber","Gruen","Guri","Gutman","Guttman","Haas","Haber","Habib","Hafouta","Halfon","Halperin","Hamburger","Har Zvi","Harari","Harel","Hason","Hasson","Haviv","Hecht","Helfgott","Heller","Herman","Hersch","Hershkovitz","Hertz","Herzl","Herzog","Hess","Hirsch","Hirschfeld","Hochman","Hod","Hoffman","Horn","Horowitz","Huldai","Hurvitz","Ifargan","Ifergan","Ilan","Ilani","Imanuel","Inbar","Isaacs","Isaacson","Israel","Israeli","Issachar","Itach","Itzhaki","Ivanir","Jacob","Jacobs","Jacobson","Jaffe","Jafari","Jonas","Joseph","Kadosh","Kahan","Kahana","Kalfon","Kaminski","Kantor","Kariv","Karni","Karp","Kasher","Katan","Kaufman","Kedar","Keinan","Kellner","Keren","Kessler","Khoury","Kimchi","Kishon","Kleinman","Knafo","Kobi","Kochavi","Koren","Korman","Korn","Kramer","Kraus","Krauss","Krebs","Krieger","Kritzman","Kupfer","Lahav","Landau","Laniado","Lapid","Lasker","Lavie","Lazar","Leder","Lehrer","Leibovich","Leibowitz","Leon","Lerner","Leshem","Lev","Levanon","Lehavi","Levy","Lewis","Liberman","Lieberman","Lifshitz","Linder","Lior","Lipman","Liran","Lishchinsky","Litzman","Livne","Livni","Locker","Loeb","Luria","Lurie","Lustig","Maayan","Magen","Maimon","Makhlouf","Malachi","Malihi","Mandel","Mandelbaum","Manor","Mansour","Maor","Marcus","Margolis","Mark","Markovitz","Marks","Mayer","Maymon","Mazar","Mazor","Meidan","Meiri","Melnik","Menachem","Menashe","Mendel","Meroz","Meshulam","Meyer","Meyers","Michaeli","Milshtein","Minsky","Mintz","Miron","Misgav","Mofaz","Molcho","Morad","Morag","Mordechai","Morgenstern","Moyal","Nachman","Nachmias","Nachshon","Nadel","Nager","Naim","Narkis","Natan","Nathanson","Naveh","Neeman","Nehemya","Nesher","Netzer","Neuman","Neumann","Newman","Nimrodi","Nir","Nissenbaum","Niv","Nof","Noy","Nudel","Nussbaum","Oded","Ofer","Ofir","Ofran","Oliel","Omer","Oppenheim","Oren","Orbach","Oron","Ozer","Pachter","Padeh","Palti","Papo","Parnes","Pasi","Pass","Pearl","Pelled","Pen","Peres","Peri","Perlman","Perry","Pinhasi","Podolsky","Polak","Pollack","Polonsky","Pomerantz","Porat","Portal","Poupko","Priver","Radomsky","Rafael","Rahamim","Ram","Ramon","Rappaport","Ratzon","Raviv","Raz","Reich","Reichman","Reif","Reiss","Reiter","Reshef","Reuven","Reuveni","Richter","Rimon","Ringel","Rochman","Roitman","Roman","Romm","Ron","Ronen","Roni","Rosenbaum","Rosenberg","Rosenblatt","Rosenblum","Rosenfeld","Rosner","Ross","Rost","Roth","Rothman","Rothschild","Rozen","Rubenstein","Sachs","Sadan","Sade","Sadeh","Sagi","Sagiv","Salmon","Salton","Salzman","Samuels","Sapir","Sarid","Sason","Sasson","Savir","Schachter","Schaeffer","Scharf","Schatz","Schechter","Schein","Schenker","Schiff","Schiller","Schindler","Schipper","Schlesinger","Schlosser","Schneider","Scholem","Schreiber","Schroeder","Schulman","Schuster","Schwab","Shafran","Shaham","Shalev","Shaltiel","Shamir","Shamni","Shani","Shapiro","Sharet","Sharon","Sharoni","Shatz","Shaul","Shay","Shechter","Shefi","Sheleg","Shemer","Shenhav","Sher","Sherman","Shilo","Shiloh","Shilon","Shimi","Shimoni","Shinwell","Shir","Shirazi","Shkedi","Shkolnik","Shlomi","Shmuel","Shmueli","Shneor","Shochat","Shomron","Shpigel","Shpitalni","Shraga","Shtal","Shulman","Shvartz","Shwartz","Silber","Silberman","Silver","Silverman","Simcha","Simon","Sinai","Singer","Sivan","Sneh","Sobel","Sofer","Sokolov","Soloveichik","Somekh","Sommer","Sopher","Spector","Spiegel","Spielberg","Spira","Spitz","Spitzer","Stahl","Stark","Stein","Steinberg","Steiner","Steinhardt","Sternberg","Stulman","Sussman","Tabak","Tavor","Tavori","Teitelbaum","Tirosh","Topol","Touitou","Trabelsi","Treves","Tzaban","Tzadok","Tzafrir","Tzairi","Tzamir","Tzehoval","Tzidon","Tzinn","Tzivion","Tzuk","Ullman","Unger","Uzan","Uziel","Vadas","Vardi","Vilnai","Vogel","Volk","Wachs","Wachtel","Waks","Waldman","Wallach","Wallerstein","Warshawsky","Wasserman","Wechsler","Weil","Weinberg","Weiner","Weinstein","Weinstock","Weisberg","Weisman","Weissman","Weitz","Weitzman","Werner","Wertheimer","Wexler","Wiener","Wiesel","Willner","Winkler","Winter","Wirth","Wise","Witkin","Wittmann","Wolf","Wolfe","Wolfson","Wolinsky","Wolk","Yaari","Yaavetz","Yaffe","Yadin","Yagoda","Yahalom","Yakir","Yanai","Yardeni","Yashar","Yassour","Yavne","Yecheskel","Yedidya","Yehezkel","Yeivin","Yellin","Yemini","Yerushalmi","Yeshayahu","Yevnin","Yisrael","Yitzhaki","Yoeli","Yoffe","Yona","Yoram","Yosefi","Yudelman","Yulzari","Yurman","Zabar","Zachi","Zadik","Zafrir","Zaguri","Zahavi","Zaid","Zait","Zak","Zakai","Zaken","Zaks","Zalcman","Zalman","Zand","Zarfati","Zarhin","Zarka","Zauderer","Zecharia","Zeevi","Zehavi","Zeigler","Zeitlin","Zelig","Zeller","Zemach","Zemel","Zer","Zeron","Zertal","Zichroni","Zidkiyahu","Zilber","Zilberg","Zimerman","Zimmerman","Zinger","Zinn","Zion","Zisapel","Zisman","Ziv","Zlotnik","Zmora","Zohar","Zondel","Zorea","Zubari","Zucker","Zuckerman","Zussman","Zwebner","Abadi","Aharonov","Alalouf","Alfandari","Almosnino","Alush","Anidjar","Arad","Arbel","Argamani","Arias","Ariel","Aris","Aronovich","Averbuch","Avidov","Avnery","Azran","Bachar","Badihi","Balas","Bar Niv","Bar Yosef","Bar Zvi","Bason","Batash","Belfer","Belkin","Ben Aharon","Ben Amram","Ben Gal","Ben Kiki","Ben Menachem","Ben Naim","Ben Tzur","Bismuth","Bivas","Boger","Botzer","Brodsky","Carlebach","Carmeli","Cassouto","Chazan","Cohen Zedek","Danino","Dattner","Degani","Derai","Diller","Diskin","Dotan","Druk","Edelman","Eitan","Elazari","Elgali","Eliyahu","Elkabetz","Engelman","Even Chen","Fadlon","Farhi","Feiglin","Gaist","Gal Or","Gamliel","Gantz","Gelman","Gery","Gilead","Ginossar","Glickstein","Golani","Granot","Guber","Haba","Hacohen","Hagag","Halevi","Halimi","Halkin","Har Even","Harlap","Hassid","Hazut","Hefer","Hemo","Hermon","Horev","Huberman","Idan","Ifrah","Igal","Imber","Inbari","Kadoshi","Kadmon","Kagan","Kahlon"]}});function Ct(){let e=document.getElementById("fme-notification-stack");return e||(e=document.createElement("div"),e.id="fme-notification-stack",document.body.appendChild(e)),e}function N(e,t="he",n=!0){var c;let o=n==="warning"?"warning":n===!1?"error":"success",r=o==="success"?"✔":o==="warning"?"⚠":"✖",a=Ct(),s=document.getElementById("fme-toast")||document.createElement("div");s.id="fme-toast",s.dataset.status=o,s.dir=((c=R[t])==null?void 0:c.dir)==="ltr"?"ltr":"rtl",s.hidden=!1;let l=String(e||"").replace(/^[✔✖⚠]\s*/g,"");s.innerHTML=`
        <span class="fme-toast-icon">${r}</span>
        <span class="fme-toast-text">${l}</span>
    `,a.prepend(s),s._fmeHideTimer&&clearTimeout(s._fmeHideTimer),s._fmeHiddenTimer&&clearTimeout(s._fmeHiddenTimer),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s._fmeHideTimer=setTimeout(()=>{s.classList.remove("show"),s._fmeHiddenTimer=setTimeout(()=>{s.classList.contains("show")||(s.hidden=!0)},350)},3e3)}async function Ee(e){if(!e||!e.selector)return!1;let t=null;try{t=document.querySelector(e.selector)}catch{return console.warn("[FME] Invalid selector:",e.selector),!1}return t?e.actionType==="click"?(t.click(),t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),!0):await ve(t,e.value):(console.warn("[FME] Selector not found:",e.selector),!1)}var ye=S(()=>{O();C()});function w(e,t){if(!e||typeof e.getAttribute!="function")return"";let n=String(t||"").replace(/[\[\]]/g,"").split("=")[0];return e.getAttribute(n)||""}function Lt(e){return!e||typeof e.getAttribute!="function"?!1:e.getAttribute("automation-baggage-valid")==="false"}function xt(e,t,n){let o=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM;return Array.from(e.querySelectorAll(o)).filter(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);if(n!==null&&a!==n)return!1;let s=r.getBoundingClientRect();return s.width>0&&s.height>0})}function Bt(e,t){let n=t==="trolley"?i.TROLLEY_ITEM:i.BAGGAGE_ITEM,o=new Set;return Array.from(e.querySelectorAll(n)).forEach(r=>{let a=w(r,i.BAGGAGE_DIRECTION_ATTR);(a==="0"||a==="1")&&o.add(a)}),o.size===0&&o.add(null),Array.from(o)}function Yt(e){if(!e||e.length===0)return null;let t=e.filter(c=>{let u=c.getBoundingClientRect();return u.width>0&&u.height>0});if(t.length===0)return null;let n=t.find(c=>w(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(n)return n;let o=t.find(c=>w(c,i.BAGGAGE_QUANTITY_ATTR)==="0");if(o)return o;let r=t.find(c=>{let u=(w(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return u.includes("none")||u.includes("no")||u.includes("without")});if(r)return r;let a=t.find(c=>w(c,i.BAGGAGE_SELECTED_ATTR)==="true"&&w(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(a)return a;let s=t.find(c=>w(c,i.BAGGAGE_INCLUDED_ATTR)==="true");if(s)return s;let l=t.find(c=>{let u=(w(c,i.BAGGAGE_KEY_ATTR)||"").toLowerCase();return u.includes("free")||u.includes("included")});return l||null}async function Ze(e,t){let n=t==="trolley"?i.TROLLEY_GROUP:i.BAGGAGE_GROUP,o=e.querySelector(n);if(!o)return console.info(`[FME BAGGAGE] ${t} group not found. Skipping.`),null;let r=Bt(e,t),a=!1;for(let s of r){let l=xt(e,t,s);if(l.length===0){console.info(`[FME BAGGAGE] No ${t} items found. Direction=${s}`);continue}let c=Yt(l);if(!c){console.warn(`[FME BAGGAGE] No free/none ${t} option found. Direction=${s}`);continue}let u=w(c,i.BAGGAGE_KEY_ATTR),p=w(c,i.BAGGAGE_QUANTITY_ATTR),m=w(c,i.BAGGAGE_INCLUDED_ATTR);if(w(c,i.BAGGAGE_SELECTED_ATTR)==="true"){console.info(`[FME BAGGAGE] Free/none ${t} already selected. Direction=${s} | Key=${u} | Quantity=${p} | Included=${m}`),a=!0;continue}c.click(),c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),c.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await new Promise(T=>setTimeout(T,5));let g=w(c,i.BAGGAGE_SELECTED_ATTR)==="true",h=Lt(o);console.info(`[FME BAGGAGE] Tried free/none ${t}. Direction=${s} | Key=${u} | Quantity=${p} | Included=${m} | Selected=${g} | GroupInvalid=${h}`),g&&!h?a=!0:console.warn(`[FME BAGGAGE] Free/none ${t} was not applied. Direction=${s} | Key=${u}`)}return a}async function zt(e){if(!e)return null;if(e.getAttribute(i.PASSENGER_TYPE_ATTR)==="3")return console.info("[FME BAGGAGE] Infant passenger. Skipping baggage."),null;let n=!1,o=!0,r=await Ze(e,"baggage");r!==null&&(n=!0,r||(o=!1));let a=await Ze(e,"trolley");return a!==null&&(n=!0,a||(o=!1)),n?o:(console.info("[FME BAGGAGE] No baggage/trolley groups found for passenger. Skipping."),null)}async function Xe(){let e=Array.from(document.querySelectorAll(i.PASSENGER_CARD));if(e.length===0)return console.info("[FME BAGGAGE] No passenger cards found. Skipping baggage."),null;let t=!1,n=!0;for(let o of e){let r=await zt(o);r!==null&&(t=!0,r||(n=!1)),await new Promise(a=>setTimeout(a,5))}return t?n:(console.info("[FME BAGGAGE] No baggage/trolley groups found for all passengers. Skipping."),null)}var je=S(()=>{O()});function Qe(){let e=Array.from(document.querySelectorAll("[automation-result-provider]")),t=e.map(g=>String(g.getAttribute("automation-result-provider")||"").trim()).filter(Boolean),n=t.flatMap(g=>g.split("&")).map(g=>g.trim()).filter(Boolean),o=Array.from(document.querySelectorAll("[automation-result-fmtk]")).some(g=>String(g.getAttribute("automation-result-fmtk")||"").toLowerCase()==="true"),r=t.join(" & "),a=r.toUpperCase(),s=/G-AL-/.test(a),l=/G-AM-/.test(a),c=l||o,u=s&&l,p=s&&!l,m=!u&&!p&&(c||n.length>0||e.length>0);return{found:e.length>0,provider:r,providers:n,fmtkTrue:o,hasALP:s,hasAmadeus:c,blocked:u,alpOnly:p,amadeusOnly:m}}var Je=S(()=>{});function et(e){if(!e)return null;let t=e.toLowerCase(),n=(t.includes("first")||t.includes("פרטי")||t.includes("name"))&&!t.includes("last")&&!t.includes("משפחה"),o=t.includes("last")||t.includes("משפחה")||t.includes("surname");if(!n&&!o)return null;let r=location.href.toLowerCase(),a=r.includes("localhost")||r.includes("127.0.0.1")||r.includes("0.0.0.0"),s="prod";a||r.includes("test")?s="test":r.includes("stage")?s="stage":r.includes("dev")&&(s="test");let l="";r.includes("flight")?l="flight":r.includes("dynamic")&&(l="dynamic");let c="site";return r.includes("tzayad")?c="tzayad":r.includes("tripzone")?c="tripzone":r.includes(".co.il")?c="IL":r.includes(".ae")||r.includes("mena")?c="ae":r.includes(".sa")?c="sa":r.includes(".kw")&&(c="kw"),n?a?"test locally":`test ${c}`:o?l?`${s} ${l}`:s:null}var tt=S(()=>{});function $t(e){return Ye(e)?0:ze(e)?12:5}async function nt(e,t="he",n=Date.now()){t=t||"he";let o=n;function r(a){let s=Date.now();console.info(`%c[FME STOPWATCH] ${s-n}ms total (+${s-o}ms) — ${a}`,"color:#00f0ff;font-weight:900;"),o=s}try{let h=function(f,d){return{humanName:(f==null?void 0:f.humanName)||"(unknown)",selector:(f==null?void 0:f.selector)||"",dropdownSelector:(f==null?void 0:f.dropdownSelector)||"",actionType:(f==null?void 0:f.actionType)||"value",value:f==null?void 0:f.value,reason:d}};Array.isArray(e)||(e=[]);let a=0,s=0,l=f=>{f?a++:s++},c={found:!1,blocked:!1,alpOnly:!1,amadeusOnly:!1,hasALP:!1,hasAmadeus:!1};if(te())try{let f=await J();if(await ee()===!0){N(f==="select_services"?R[t].ancillaryGlobalSelectDone:R[t].ancillaryGlobalSkipDone,t,!0);return}N(`✖ ${R[t].ancillarySkipNotFound}`,t,!1);return}catch(f){console.warn("[FME ANCILLARIES] Fast global ancillary handling failed:",f),N(`✖ ${R[t].ancillarySkipNotFound}`,t,!1);return}if(e=e.filter(f=>{let d=String((f==null?void 0:f.selector)||""),P=String((f==null?void 0:f.dropdownSelector)||"");return!(d.includes("automation-baggage-group")||d.includes("automation-baggage-item-type")||P.includes("automation-baggage-group")||P.includes("automation-baggage-item-type"))}),e=ue(e),e=ce(e),await ke(e,3e3),r("Passenger cards ready"),e=Oe(e),e=ue(e),e=ce(e),e=e.filter(f=>{if(f.actionType==="gender-option"||f.actionType==="gender-random"||f.actionType==="passport-option"||!f.selector)return!0;let d=!1;try{d=!!document.querySelector(f.selector)}catch{d=!1}return d||console.info("[FME] Skipping field not present on this page (likely belongs to a different step):",f.humanName,f.selector),d}),console.info("[FME] Data after normalize/expand:",e),r(`Data expanded/filtered to ${e.length} items`),c=Qe(),console.info("[FME PROVIDER] Detected:",c),c.blocked){console.warn("[FME PROVIDER] Blocked mixed ALP + Amadeus flight:",c.provider),N(t==="en"?"✖ Cannot book a combined ALP + Amadeus flight":"✖ לא ניתן להזמין טיסה של ALP + Amadeus",t,!1);return}let u=20,p=new Set,m=new Set,E=[],g=[];async function T(f,{bypassHandledCheck:d=!1}={}){if(f.actionType==="gender-random"){if(!d&&p.has(f.dropdownSelector))return null;let P=await _e(f);return p.add(f.dropdownSelector),P}if(f.actionType==="gender-option"){if(!d&&p.has(f.dropdownSelector))return null;let P=await re(f.dropdownSelector,f.selector);return p.add(f.dropdownSelector),P}if(f.actionType==="passport-option"){if(!d&&m.has(f.dropdownSelector))return null;let P=await Le(f);return m.add(f.dropdownSelector),P}return await Ee(f)}for(let f of e){let d={...f};if(!we(d))try{if(console.info("[FME] Filling item:",d),d.actionType==="gender-random"||d.actionType==="gender-option"||d.actionType==="passport-option"){let y=await T(d);if(y===null)continue;r(`Dropdown "${d.humanName}" (${d.actionType}) → ${y?"ok":"FAILED"}`),l(y),await new Promise(j=>setTimeout(j,u));continue}if(d.useSmartEnv){let y=et(d.humanName);y&&(d.value=y),d.useSmartEnv=!1}if((de(d)||Z(d))&&(d.autoGenerate===!0||$e(d.value)||Z(d)))de(d)&&(d.value=pe()),Z(d)&&(d.value=ge(d)),console.info("[FME PASSPORT] Generated passport field value:",{selector:d.selector,humanName:d.humanName,value:d.value});else if(d.autoGenerate){let y=He(d.humanName,d);y!==null&&(d.value=y)}if(qe(d)){let y=me(d);if(y&&!Ue(d.value,y)){let j=W(d);d.value=he(j,d),console.info("[FME DOB] Existing birth date was outside DOM range. Replaced with valid value:",{selector:d.selector,newValue:d.value,min:v(y.minDate),max:v(y.maxDate)})}}if(c.alpOnly){let y=String(d.selector||"");(y.includes('[name="paxFName"]')||y.includes('[name="paxLName"]'))&&(d.value="Test",console.info("[FME PROVIDER] ALP-only flight — forcing passenger name to Test:",d.selector))}await Ee(d)?l(!0):(console.warn("[FME] Field reported as failed on first attempt. Will retry once after the page settles:",{selector:d.selector,humanName:d.humanName,value:d.value}),E.push(d));let be=$t(d);be>0&&await new Promise(y=>setTimeout(y,be))}catch(P){console.error("[FME] Item failed during fill. Will retry once after the page settles:",{item:d,error:P}),E.push(d);continue}}if(r("Main loop done"),E.length>0){console.info(`[FME] ${E.length} item(s) failed on first attempt. Retrying once after the page settles.`,E),await new Promise(f=>setTimeout(f,250));for(let f of E){try{let d=await T(f,{bypassHandledCheck:!0});d||(console.warn("[FME] Field still failed after retry:",{selector:f.selector,humanName:f.humanName,value:f.value}),g.push(h(f,"still failed after retry"))),l(!!d)}catch(d){console.error("[FME] Retry attempt crashed for item:",{item:f,error:d}),g.push(h(f,`retry threw: ${(d==null?void 0:d.message)||d}`)),l(!1)}await new Promise(d=>setTimeout(d,u))}r("Retry pass done")}console.info(`[FME SUMMARY] ${a} succeeded, ${s} failed.`),g.length>0&&(console.warn("%c[FME SUMMARY] ▼▼▼ These fields still failed after both attempts — copy/screenshot this table ▼▼▼","font-size:13px;font-weight:900;color:#ff3b4f;"),console.table(g));try{let f=await Xe();f===!0?l(!0):f===!1&&l(!1)}catch(f){console.warn("[FME] Baggage autofill skipped due to error:",f)}r("Baggage done");try{let f=await ee();f===!0?l(!0):f===!1&&l(!1)}catch(f){console.warn("[FME] Global ancillaries autofill skipped due to error:",f)}r("Ancillary done"),console.info(`%c[FME STOPWATCH] ▼▼▼ TOTAL: ${Date.now()-n}ms from Alt+Q to done ▼▼▼`,"font-size:14px;font-weight:900;color:#ff3b4f;"),a>0&&s===0?N(R[t].fieldsFilled(a),t,!0):a>0&&s>0?N(R[t].fieldsPartiallyFilled(a,s),t,"warning"):N(R[t].fillFailed,t,!1)}catch(a){console.error("[FME] fillForm crashed:",a);let s=a&&a.message?a.message:String(a||"Unknown error");N(`✖ ${R[t].fillError}: ${s}`,t,!1)}}var ot=S(()=>{Te();z();We();H();ye();je();ae();le();Je();tt();O()});var rt,at=S(()=>{rt={fme_il_flights_checkout:[{actionType:"value",autoGenerate:!1,displayValue:"test IL",dropdownSelector:null,humanName:"שם פרטי",selector:'[name="fname"]',tagName:"INPUT",useSmartEnv:!0,value:"test IL"},{actionType:"value",autoGenerate:!1,displayValue:"test flight",dropdownSelector:null,humanName:"שם משפחה",selector:'[name="lname"]',tagName:"INPUT",useSmartEnv:!0,value:"test flight"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"כתובת מייל",selector:'[name="email"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!1,displayValue:"email@lastminute.co.il",dropdownSelector:null,humanName:"אימות כתובת מייל",selector:'[name="emailConfirm"]',tagName:"INPUT",useSmartEnv:!1,value:"email@lastminute.co.il"},{actionType:"value",autoGenerate:!0,displayValue:"0511216637",dropdownSelector:null,humanName:"טלפון נייד",selector:'[name="phone"]',tagName:"INPUT",useSmartEnv:!1,value:"0511216637"},{actionType:"value",autoGenerate:!1,displayValue:!0,dropdownSelector:null,humanName:"הרשמה לעדכונים",selector:"#allowSubscribe",tagName:"INPUT",useSmartEnv:!1,value:!0},{actionType:"value",autoGenerate:!0,displayValue:"natan",dropdownSelector:null,humanName:"שם פרטי",selector:'[automation-passenger-number="\\31 "] [name="paxFName"]',tagName:"INPUT",useSmartEnv:!1,value:"natan"},{actionType:"value",autoGenerate:!0,displayValue:"shor",dropdownSelector:null,humanName:"שם משפחה",selector:'[automation-passenger-number="\\31 "] [name="paxLName"]',tagName:"INPUT",useSmartEnv:!1,value:"shor"},{actionType:"value",autoGenerate:!0,displayValue:"10/10/2000",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="paxBirthDate"]',tagName:"INPUT",useSmartEnv:!1,value:"10/10/2000"},{actionType:"value",autoGenerate:!0,displayValue:"546456456",dropdownSelector:null,humanName:"מספר דרכון",selector:'[automation-passenger-number="\\31 "] [name="passportNumber"]',tagName:"INPUT",useSmartEnv:!1,value:"546456456"},{actionType:"value",autoGenerate:!0,displayValue:"16/08/2031",dropdownSelector:null,humanName:"dd/mm/yyyy",selector:'[automation-passenger-number="\\31 "] [name="passportExpirationDate"]',tagName:"INPUT",useSmartEnv:!1,value:"16/08/2031"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Nation: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="nation"]',humanName:"Passport Nation: IL",selector:'[automation-passport-nation-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"passport-option",autoGenerate:!1,displayValue:"Passport Issuing Country: IL",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passport-field-type="issuing-country"]',humanName:"Passport Issuing Country: IL",selector:'[automation-passport-issuing-country-option="IL"]',tagName:"DIV",useSmartEnv:!1,value:"IL"},{actionType:"gender-random",autoGenerate:!1,displayValue:"Alternating: Male / Female",dropdownSelector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',humanName:"Gender Alternating",options:[{displayValue:"Gender Male",humanName:"Gender Male",selector:'[automation-passenger-gender-option-value="male"]',value:"male"},{displayValue:"Gender Female",humanName:"Gender Female",selector:'[automation-passenger-gender-option-value="female"]',value:"female"}],selector:'[automation-passenger-number="\\31 "] [automation-passenger-gender-dropdown]',tagName:"DIV",useSmartEnv:!1,value:"random"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="CAR"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"ביטול מכל סיבה – lastminute Ba"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="TSH"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`להזמין בראש שקט
כי כשקורה משהו`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="SER\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:"חבילת שירות פרמיום מותאמת לעיד"},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="ZRR\\ IL"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`/
שינוי
$90.93 לנוסע`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Select",dropdownSelector:null,humanName:"Ancillary Select",selector:'[automation-service-package-action="AIR024"] [automation-service-package-select]',tagName:"DIV",useSmartEnv:!1,value:`פיצוי על עיכוב או ביטול טיסה
ת`},{actionType:"ancillary-action",autoGenerate:!1,displayValue:"Ancillary Skip",dropdownSelector:null,humanName:"Ancillary Skip",selector:'[automation-service-package-action="AIR024b"] [automation-service-package-skip]',tagName:"DIV",useSmartEnv:!1,value:"לא תודה, אולי בפעם הבאה"}]}});function it(e){let t=String(e||"").toLowerCase();return t==="tzayad.com"||t.endsWith(".tzayad.com")||t.endsWith(".co.il")?"il":t.endsWith(".ae")||t==="mena.ae"||t.endsWith(".mena.ae")?"ae":t.endsWith(".sa")?"sa":t.endsWith(".kw")?"kw":t==="localhost"||t.startsWith("localhost")?"local":t.replace(/[^a-z0-9]+/g,"_")}function st(e){let t=String(e||"").toLowerCase();return t.includes("/flights")||t.includes("/flight")?"flights":t.includes("/dynamic")?"dynamic":"site"}function lt(e){let t=String(e||"").toLowerCase();return t.includes("/checkout")?"checkout":t.includes("/payment")?"payment":t.replace(/^\/+|\/+$/g,"").replace(/[^a-z0-9]+/g,"_")||"page"}function Vt(e){let t=it(e.hostname),n=st(e.pathname),o=lt(e.pathname);return`fme_${t}_${n}_${o}`}function Kt(e){return`fme_${e.hostname}${e.pathname}`}function ct(e,t){let n;try{n=new URL(t)}catch{return null}let o=Object.keys(e||{}).filter(g=>g.startsWith("fme_")&&!g.includes("folder_names")&&!g.includes("collapsed")&&Array.isArray(e[g])),r=Vt(n);if(o.includes(r))return r;let a=Kt(n);if(o.includes(a))return a;let s=n.hostname.toLowerCase(),l=n.pathname.toLowerCase(),c=it(s),u=st(l),p=lt(l),m=o.find(g=>{let h=g.toLowerCase();return h.includes(`fme_${c}_`)&&h.includes(u)&&h.includes(p)});if(m)return m;let E=o.find(g=>{let h=g.toLowerCase();return h.includes(s)||h.includes(l)||u!=="site"&&p!=="page"&&h.includes(u)&&h.includes(p)});if(E)return E;if(p==="checkout"){let g=o.find(h=>{let T=h.toLowerCase();return T.includes(`fme_${c}_`)&&T.includes("_checkout")});if(g)return g}if(c==="local"){let g=o.find(h=>{let T=h.toLowerCase();return T.includes(u)&&T.includes(p)});if(g)return g;if(p==="checkout"){let h=o.find(T=>T.toLowerCase().includes("_checkout"));if(h)return h}}return null}var ut=S(()=>{});function Ut(){let e=null;try{e=window.__FME_PROFILES__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:Object.keys(e).length>0?e:null}function Ht(){let e=null;try{e=localStorage.getItem(qt)}catch{return null}if(!e)return null;try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch{return console.warn("[FME MOBILE] Imported backup is corrupted; falling back to baked profiles."),null}}function Se(e,t){if(!e)return null;let n=ct(e,t);return!n||!Array.isArray(e[n])||e[n].length===0?null:{items:e[n],targetKey:n}}function dt(e){let t=e||location.href,n=Se(Ht(),t);if(n)return{...n,source:"imported"};let o=Se(Ut(),t);if(o)return{...o,source:"url"};let r=Se(rt,t);return r?{...r,source:"baked"}:null}var qt,ft=S(()=>{at();ut();qt="fmeMobileBackup"});function Xt(){let e=null;try{e=window.__FME_SETTINGS__}catch{return null}return!e||typeof e!="object"||Array.isArray(e)?null:{lang:e.lang==="en"?"en":"he",ancillaryMode:e.ancillaryMode==="select_services"?"select_services":"skip_all",overrides:e.overrides&&typeof e.overrides=="object"&&!Array.isArray(e.overrides)?e.overrides:{}}}function jt(e){try{return localStorage.getItem(e)}catch{return null}}function Qt(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function Jt(){let e=jt(Wt);if(!e)return null;let t;try{t=JSON.parse(e)}catch{return console.warn("[FME MOBILE] Per-domain settings are corrupted; using the baked ones."),null}return!t||typeof t!="object"||Array.isArray(t)?null:t}function en(e,t){let n={};for(let[o,r]of Object.entries(e||{}))n[o]={...r};for(let[o,r]of Object.entries(t||{})){n[o]={...n[o]||{}};for(let[a,s]of Object.entries(r||{}))n[o][a]={...n[o][a]||{},...s}}return n}function K(){let e=Xt()||{lang:"he",ancillaryMode:"skip_all",overrides:{}},t=Jt();return t?{lang:t.lang==="en"?"en":t.lang==="he"?"he":e.lang,ancillaryMode:t.ancillaryMode==="select_services"?"select_services":t.ancillaryMode==="skip_all"?"skip_all":e.ancillaryMode,overrides:en(e.overrides,t.overrides),source:"local"}:{lang:e.lang,ancillaryMode:e.ancillaryMode,overrides:e.overrides,source:"baked"}}function tn(){return K().ancillaryMode}function pt(){let e=tn();return Qt(Zt,e),e}function mt(e,t,n){let o=(n||K().overrides)[t];return o?e.map(r=>{let a=o[r.selector];if(!a)return{...r};let s={...r};return typeof a.value=="string"&&(s.value=a.value,s.displayValue=a.value),typeof a.autoGenerate=="boolean"&&(s.autoGenerate=a.autoGenerate),typeof a.useSmartEnv=="boolean"&&(s.useSmartEnv=a.useSmartEnv),s}):e.map(r=>({...r}))}function gt(e,t){let n=(t||K().overrides)[e];return n?Object.keys(n).length:0}var Wt,Zt,ht=S(()=>{Wt="fmeMobileSettings",Zt="fmeAncillaryMode"});function yt(){if(document.getElementById(Et))return;let e=document.createElement("style");e.id=Et,e.textContent=nn,(document.head||document.documentElement).appendChild(e)}var Et,nn,St=S(()=>{Et="fme-mobile-styles",nn=`
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
`});var on=bt(()=>{ot();ye();ft();ht();St();(async function(){try{window.__FME_RAN__=1}catch{}let t=K(),n=t.lang,o=pt();yt();let r=dt();if(!r){N(n==="he"?"לא נמצא פרופיל מתאים לעמוד הזה":"No matching profile found for this page",n,!1);return}let a=mt(r.items,r.targetKey,t.overrides);console.info("[FME MOBILE] Filling from profile:",{targetKey:r.targetKey,source:r.source,fields:a.length,settingsSource:t.source,settingsOverrides:gt(r.targetKey,t.overrides),ancillaryMode:o,lang:n,url:location.href});try{await nt(a,n)}catch(s){console.error("[FME MOBILE] fillForm failed:",s),N((n==="he"?"שגיאה בזמן מילוי: ":"Error while filling: ")+String((s==null?void 0:s.message)||s),n,!1)}})()});on();})();
