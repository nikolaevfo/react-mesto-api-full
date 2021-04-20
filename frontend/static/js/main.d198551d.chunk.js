(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(18),c=n.n(r),i=n(8),o=(n(29),n(22)),u=n(2),l=n(3),d=s.a.createContext(),p=n.p+"static/media/logo-white.ff5e7d02.svg",j=n(0);var _=function(e){var t=s.a.useState(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(j.jsx)("header",{className:a?"header header_burger-opened":"header",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e",className:"logo header__logo"}),Object(j.jsx)("div",{className:"header__btn",onClick:function(){r(!a)},children:Object(j.jsx)("span",{className:a?"header__burger header__burger_active":"header__burger"})}),Object(j.jsxs)("div",{className:"header__info",children:[Object(j.jsx)("p",{className:"header__info-email",children:e.email}),Object(j.jsx)(i.b,{to:e.headerLinkUrl,className:"header__info-link button",onClick:e.onClick,children:e.btnText})]})]})})};var h=function(e){var t=s.a.useContext(d),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),r=0!==e.card.likes.length,c="card__trash button ".concat(n?"card__trash_visible":"card__trash_hidden"),i="card__like button ".concat(a?"card__like_active":"card__like_hidden"),o="card__like-quantity ".concat(r?"card__like-quantity_visible":"card__like-quantity_hidden");return Object(j.jsxs)("article",{className:"card",children:[Object(j.jsx)("button",{type:"button",className:c,onClick:function(t){e.checkCardDelete(t.target.id),e.onCardDeleteClick()},id:e.id}),Object(j.jsx)("div",{className:"card__img",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("h3",{className:"card__title",children:e.card.name}),Object(j.jsxs)("div",{className:"card__like-items",children:[Object(j.jsx)("button",{type:"button",className:i,onClick:function(){e.onCardLike(e.card)}}),Object(j.jsx)("p",{className:o,children:e.card.likes.length})]})]})]})};var f=function(e){s.a.useEffect((function(){e.onInit("\u0412\u044b\u0439\u0442\u0438","/signin")}),[e]);var t=s.a.useContext(d);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:[Object(j.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(j.jsx)("div",{className:"profile__avatar-bg"})]}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsxs)("div",{className:"profile__info-row",children:[Object(j.jsx)("h1",{className:"profile__title",children:t.name}),Object(j.jsx)("button",{type:"button",className:"profile__edit-button button",onClick:e.onEditProfile})]}),Object(j.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(j.jsx)("button",{type:"button",className:"profile__add-button button",onClick:e.onAddPlace})]}),Object(j.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(j.jsx)(h,{id:t._id,card:t,onCardClick:e.handleCardClick,onCardLike:e.onCardLike,checkCardDelete:e.checkCardDelete,onCardDeleteClick:e.onCardDeleteClick},t._id)}))})]})};var m=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia Udmurtia"})})};var b=function(e){return Object(j.jsx)("section",{className:"root__popup popup-image popup popup_theme_dark ".concat(e.card?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup-image__container",children:[Object(j.jsx)("button",{type:"button",className:"popup-image__button-cross popup__button-cross button",onClick:e.onClose}),Object(j.jsx)("img",{src:"".concat(e.card.link),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"popup-image__img"}),Object(j.jsx)("h3",{className:"popup-image__title",children:e.card.name})]})})},g=n(20),O=n(21),x=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(g.a)(this,e),this._baseUrl=n,this._headers=a}return Object(O.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e))}},{key:"getCardList",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleOriginalResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleOriginalResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleOriginalResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:n,headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleOriginalResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"528df5a2-16f1-4f0e-9003-28f33571e107","Content-Type":"application/json"}});var v=function(e){var t=s.a.useRef(),n="";return n=e.isDeletingCard?e.isLoading?"\u0414\u0430...":"\u0414\u0430":e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",Object(j.jsx)("section",{className:"popup root__popup ".concat(e.isOpen?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__button-cross button",onClick:e.onClose}),Object(j.jsx)("h3",{className:"popup__title",children:e.title}),Object(j.jsxs)("form",{action:"#",name:"popup".concat(e.classDescription,"Form"),className:"popup__form",onSubmit:function(n){e.onSubmit(n),t.current.reset()},ref:t,children:[e.children,Object(j.jsx)("button",{type:"submit",disabled:!e.isFormValid,className:"".concat(e.isFormValid?"popup__btn-add":"popup__btn-add popup__btn-add_invalid"),children:n})]})]})})};var C=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=s.a.useState(""),i=Object(u.a)(c,2),o=i[0],l=i[1],p=s.a.useState(""),_=Object(u.a)(p,2),h=_[0],f=_[1],m=s.a.useState(""),b=Object(u.a)(m,2),g=b[0],O=b[1],x=s.a.useState(!0),C=Object(u.a)(x,2),N=C[0],k=C[1],y=s.a.useRef(),S=s.a.useRef(),L=s.a.useContext(d);function w(){y.current.validity.valid&&S.current.validity.valid?k(!0):k(!1)}return s.a.useEffect((function(){r(L.name||""),l(L.about||""),O(""),f(""),w()}),[L,e.isOpen]),Object(j.jsx)(v,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:o})},isLoading:e.isLoading,isFormValid:N,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",name:"popupInputName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup-profile__text popup__text popup-profile__text_type_name popup__input",id:"profile-name",required:!0,minLength:"2",maxLength:"40",onChange:function(e){r(e.target.value),f(y.current.validationMessage),w()},ref:y,value:a}),Object(j.jsx)("span",{id:"$profile-name-error",className:"popup__text-error",children:h}),Object(j.jsx)("input",{type:"text",name:"popupInputJob",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0443 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",className:"popup-profile__text popup__text popup-profile__text_type_profession popup__input",id:"profile-job",required:!0,minLength:"2",maxLength:"200",onChange:function(e){l(e.target.value),O(S.current.validationMessage),w()},ref:S,value:o}),Object(j.jsx)("span",{id:"profile-job-error",className:"popup__text-error",children:g})]})})};var N=function(e){var t=s.a.useContext(d),n=s.a.useState(""),a=Object(u.a)(n,2),r=a[0],c=a[1],i=s.a.useState(!0),o=Object(u.a)(i,2),l=o[0],p=o[1],_=s.a.useRef();function h(){_.current.validity.valid?p(!0):p(!1)}return s.a.useEffect((function(){_.current.value=t.avatar||"",c(""),h()}),[t,e.isOpen]),Object(j.jsx)(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:_.current.value})},isLoading:e.isLoading,isFormValid:l,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"url",name:"avatarInputLink",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup-avatar__text popup__text popup-avatar__text_type_link popup__input",id:"avatar-link",required:!0,onChange:function(){c(_.current.validationMessage),h()},ref:_}),Object(j.jsx)("span",{id:"avatar-link-error",className:"popup__text-error",children:r})]})})};var k=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=s.a.useState(""),i=Object(u.a)(c,2),o=i[0],l=i[1],d=s.a.useState(!1),p=Object(u.a)(d,2),_=p[0],h=p[1],f=s.a.useRef(),m=s.a.useRef();function b(){f.current.validity.valid&&m.current.validity.valid?h(!0):h(!1)}return s.a.useEffect((function(){f.current.value="",m.current.value="",r(""),l(""),b()}),[e.isOpen]),Object(j.jsx)(v,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:f.current.value,link:m.current.value})},isLoading:e.isLoading,isFormValid:_,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",name:"popupInputPlace",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup-card__text popup__text popup-card__text_type_place popup__input",id:"card-place",required:!0,minLength:"2",maxLength:"30",onChange:function(){r(f.current.validationMessage),b()},ref:f}),Object(j.jsx)("span",{id:"card-place-error",className:"popup__text-error",children:a}),Object(j.jsx)("input",{type:"url",name:"popupInputLink",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup-card__text popup__text popup-card__text_type_link popup__input",id:"card-link",required:!0,onChange:function(){l(m.current.validationMessage),b()},ref:m}),Object(j.jsx)("span",{id:"card-link-error",className:"popup__text-error",children:o})]})})};var y=function(e){return Object(j.jsx)(v,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard()},isLoading:e.isLoading,isDeletingCard:e.isDeletingCard,isFormValid:!0,children:Object(j.jsx)(j.Fragment,{})})};function S(e){s.a.useEffect((function(){e.onInit("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","/signup")}),[e]);var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=s.a.useState(""),i=Object(u.a)(c,2),o=i[0],l=i[1],d=s.a.useRef(),p=s.a.useRef();return Object(j.jsx)("div",{className:"login form-page",children:Object(j.jsxs)("div",{className:"form-page__container",children:[Object(j.jsx)("h3",{className:"login__title form-page__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{action:"#",name:"loginForm",className:"login__form form-page__form",onSubmit:function(t){t.preventDefault(),d.current.value&&p.current.value&&e.onLogin({email:d.current.value,password:p.current.value})},children:[Object(j.jsx)("input",{type:"email",name:"loginInputEmail",placeholder:"Email",className:"login__form-input form-page__input",id:"login-email",required:!0,onChange:function(){r(d.current.validationMessage)},ref:d}),Object(j.jsx)("span",{id:"login-email-error",className:"form-page__text-error",children:a}),Object(j.jsx)("input",{type:"password",name:"loginInputPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__form-input form-page__input",id:"login-password",required:!0,onChange:function(){l(p.current.validationMessage)},ref:p}),Object(j.jsx)("span",{id:"login-password-error",className:"form-page__text-error",children:o}),Object(j.jsx)("button",{type:"submit",className:"login__form-btn form-page__btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}function L(e){s.a.useEffect((function(){e.onInit("\u0412\u043e\u0439\u0442\u0438","/signin")}),[e]);var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=s.a.useState(""),o=Object(u.a)(c,2),l=o[0],d=o[1],p=s.a.useRef(),_=s.a.useRef();return Object(j.jsx)("div",{className:"regist form-page",children:Object(j.jsxs)("div",{className:"form-page__container",children:[Object(j.jsx)("h3",{className:"regist__title form-page__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{action:"#",name:"registForm",className:"regist__form form-page__form",onSubmit:function(t){t.preventDefault(),p.current.value&&_.current.value&&e.onRegister({email:p.current.value,password:_.current.value})},children:[Object(j.jsx)("input",{type:"email",name:"registInputEmail",placeholder:"Email",className:"regist__form-input form-page__input",id:"regist-email",required:!0,onChange:function(){r(p.current.validationMessage)},ref:p}),Object(j.jsx)("span",{id:"regist-email-error",className:"form-page__text-error",children:a}),Object(j.jsx)("input",{type:"password",name:"registInputPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"regist__form-input form-page__input",id:"regist-password",required:!0,onChange:function(){d(_.current.validationMessage)},ref:_}),Object(j.jsx)("span",{id:"regist-password-error",className:"form-page__text-error",children:l}),Object(j.jsx)("button",{type:"submit",className:"regist__form-btn form-page__btn",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(i.b,{to:"/signin",className:"button form-page__btn-enter",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})})}var w=n(23),E=n(24),I=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return Object(j.jsx)(l.b,{children:function(){return n.loggedIn?Object(j.jsx)(t,Object(w.a)({},n)):Object(j.jsx)(l.a,{to:"./signin"})}})},U=n.p+"static/media/regist-success.a9eb6caf.svg",D=n.p+"static/media/regist-error.d4ce2a26.svg";var R=function(e){return Object(j.jsx)("section",{className:"popup root__popup ".concat(e.isOpen?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__button-cross button",onClick:e.onClose}),Object(j.jsx)("img",{src:e.isAuthSuccess?U:D,alt:e.isAuthSuccess?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430",className:"popup__img"}),Object(j.jsx)("h3",{className:"popup__title popup__title_cener",children:e.isAuthSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},P="https://auth.nomoreparties.co",A=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))};var F=function(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=s.a.useState(!1),i=Object(u.a)(c,2),p=i[0],h=i[1],g=s.a.useState(!1),O=Object(u.a)(g,2),v=O[0],w=O[1],E=s.a.useState(!1),U=Object(u.a)(E,2),D=U[0],F=U[1],T=s.a.useState(!1),q=Object(u.a)(T,2),M=q[0],J=q[1],V=s.a.useState(!0),B=Object(u.a)(V,2),z=B[0],H=B[1],G=s.a.useState(""),$=Object(u.a)(G,2),K=$[0],Q=$[1],W=s.a.useState(""),X=Object(u.a)(W,2),Y=X[0],Z=X[1],ee=s.a.useState(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(!1),re=Object(u.a)(se,2),ce=re[0],ie=re[1],oe=s.a.useState({}),ue=Object(u.a)(oe,2),le=ue[0],de=ue[1],pe=s.a.useState([]),je=Object(u.a)(pe,2),_e=je[0],he=je[1];function fe(){J(!0)}function me(){w(!1),r(!1),h(!1),Q(""),F(!1),ie(!1),J(!1)}s.a.useEffect((function(){x.getUserInfo().then((function(e){de(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",e)}))}),[]),s.a.useEffect((function(){x.getCardList().then((function(e){he(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",e)}))}),[]),s.a.useEffect((function(){function e(e){"Escape"===e.key&&me()}function t(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__button-cross"))&&me()}return document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}));var be=Object(a.useState)(!1),ge=Object(u.a)(be,2),Oe=ge[0],xe=ge[1],ve=Object(l.g)(),Ce=Object(a.useState)(""),Ne=Object(u.a)(Ce,2),ke=Ne[0],ye=Ne[1],Se=Object(a.useState)(""),Le=Object(u.a)(Se,2),we=Le[0],Ee=Le[1],Ie=Object(a.useState)(""),Ue=Object(u.a)(Ie,2),De=Ue[0],Re=Ue[1];function Pe(e,t){Ee(e),Re(t)}return s.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(P,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(A)).then((function(e){if(!e||400===e.statusCode)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.statusCode)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d");e&&(xe(!0),ye(e.data.email),ve.push("/main"))})).catch((function(){return ve.push("/signin")}))}),[ve,Oe]),Object(j.jsx)(d.Provider,{value:le,children:Object(j.jsxs)("div",{className:"root",children:[Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(_,{email:ke,headerLinkUrl:De,btnText:we,onClick:function(){localStorage.getItem("jwt")&&(localStorage.removeItem("jwt"),ye(""),xe(!1))}}),Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(I,{path:"/main",loggedIn:Oe,component:f,email:ke,onInit:Pe,onEditProfile:function(){r(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){w(!0)},handleCardClick:function(e){Q(e)},cards:_e,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===le._id}));x.changeLikeCardStatus(e._id,!t).then((function(t){var n=_e.map((function(n){return n._id===e._id?t:n}));he(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",e)}))},checkCardDelete:function(e){Z(e)},onCardDeleteClick:function(e){ie(!0),F(!0)}}),Object(j.jsx)(l.b,{path:"/signin",children:Object(j.jsx)(S,{onLogin:function(e){return function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)}(e.email,e.password).then((function(e){if(!e||400===e.statusCode)throw new Error("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.statusCode)throw new Error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");e.token&&(xe(!0),localStorage.setItem("jwt",e.token))})).then((function(){ve.push("/")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435",e)}))},onInit:Pe})}),Object(j.jsx)(l.b,{path:"/signup",children:Object(j.jsx)(L,{onRegister:function(e){return function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)}(e.email,e.password).then((function(e){if(!e||400===e.statusCode)throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");ve.push("/signin")})).then((function(){ve.push("/signin"),H(!0),fe()})).catch((function(e){H(!1),fe(),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",e)}))},onInit:Pe})}),Object(j.jsx)(l.b,{exact:!0,path:"/",children:Oe?Object(j.jsx)(l.a,{to:"/main"}):Object(j.jsx)(l.a,{to:"signin"})})]})}),Object(j.jsx)(m,{})]}),Object(j.jsx)(C,{isOpen:n,onClose:me,onUpdateUser:function(e){ae(!0),x.setUserInfo(e).then((function(e){de(e),ae(!1),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",e)}))},isLoading:ne}),Object(j.jsx)(k,{isOpen:p,onClose:me,onAddPlace:function(e){ae(!0),x.addCard(e).then((function(e){he([e].concat(Object(o.a)(_e))),ae(!1),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",e)}))},isLoading:ne}),Object(j.jsx)(N,{isOpen:v,onClose:me,onUpdateAvatar:function(e){ae(!0),x.setUserAvatar(e.avatar).then((function(e){de(e),ae(!1),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",e)}))},isLoading:ne}),Object(j.jsx)(b,{card:K,onClose:me}),Object(j.jsx)(y,{isOpen:D,onClose:me,onDeleteCard:function(){ae(!0),x.deleteCard(Y).then((function(){var e=_e.filter((function(e){return e._id!==Y}));he(e),ae(!1),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",e)}))},isLoading:ne,isDeletingCard:ce}),Object(j.jsx)(R,{isOpen:M,onClose:me,isAuthSuccess:z})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(F,{})})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.d198551d.chunk.js.map