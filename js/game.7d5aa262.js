(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"11e9":function(e,t,_){var r=_("52a7"),n=_("4630"),s=_("6821"),o=_("6a99"),a=_("69a8"),i=_("c69a"),u=Object.getOwnPropertyDescriptor;t.f=_("9e1e")?u:function(e,t){if(e=s(e),t=o(t,!0),i)try{return u(e,t)}catch(_){}if(a(e,t))return n(!r.f.call(e,t),e[t])}},"386b":function(e,t,_){var r=_("5ca1"),n=_("79e5"),s=_("be13"),o=/"/g,a=function(e,t,_,r){var n=String(s(e)),a="<"+t;return""!==_&&(a+=" "+_+'="'+String(r).replace(o,"&quot;")+'"'),a+">"+n+"</"+t+">"};e.exports=function(e,t){var _={};_[e]=t(a),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",_)}},5580:function(e,t,_){},"5dbc":function(e,t,_){var r=_("d3f4"),n=_("8b97").set;e.exports=function(e,t,_){var s,o=t.constructor;return o!==_&&"function"==typeof o&&(s=o.prototype)!==_.prototype&&r(s)&&n&&n(e,s),e}},"65eb":function(e,t,_){"use strict";_.r(t);var r=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"uk-container"},[_("div",{staticClass:"uk-flex uk-flex-center"},[_("div",{staticClass:"uk-card uk-card-default uk-card-hover uk-card-body uk-width-large"},[_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row"},[_("button",{staticClass:"uk-button uk-button-default",on:{click:e.stopGame}},[_("span",{attrs:{"uk-icon":"icon: close"}}),_("span",[e._v("Выход")])]),_("input",{staticClass:"uk-input uk-form-width-small right-align",attrs:{type:"text",readonly:""},domProps:{value:e.timeRemained}})]),_("div",{staticClass:"uk-container uk-margin-top"},[_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row"},[_("input",{directives:[{name:"model",rawName:"v-model.number",value:e.answer.first,expression:"answer.first",modifiers:{number:!0}}],ref:"first",staticClass:"uk-input uk-form-width-xsmall right-align",attrs:{readonly:"",tabindex:"-1"},domProps:{value:e.answer.first},on:{input:function(t){t.target.composing||e.$set(e.answer,"first",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),_("label",{staticClass:"uk-margin-left uk-margin-right"},[e._v(e._s(e.operatorSign))]),_("input",{directives:[{name:"model",rawName:"v-model.number",value:e.answer.second,expression:"answer.second",modifiers:{number:!0}}],ref:"second",staticClass:"uk-input uk-form-width-xsmall right-align",class:{active:0===e.activeControl},attrs:{readonly:"",tabindex:"-1"},domProps:{value:e.answer.second},on:{click:function(t){return e.setActiveControl(0)},input:function(t){t.target.composing||e.$set(e.answer,"second",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),_("label",{staticClass:"uk-margin-left uk-margin-right"},[e._v(e._s(e.operatorSign))]),_("input",{directives:[{name:"model",rawName:"v-model.number",value:e.answer.third,expression:"answer.third",modifiers:{number:!0}}],ref:"third",staticClass:"uk-input uk-form-width-xsmall right-align",class:{active:1===e.activeControl},attrs:{readonly:"",tabindex:"-1"},domProps:{value:e.answer.third},on:{click:function(t){return e.setActiveControl(1)},input:function(t){t.target.composing||e.$set(e.answer,"third",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),_("div",{staticClass:"uk-margin-top"},[_("span",[e._v("="+e._s(e.expectedResult))])])]),_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row uk-margin-medium-top"},[_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(1)}}},[e._v("1")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(2)}}},[e._v("2")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(3)}}},[e._v("3")]),_("button",{staticClass:"uk-icon-button uk-button-primary",on:{click:e.prevAnswerField}},[e._v("<")])]),_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row uk-margin-medium-top"},[_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(4)}}},[e._v("4")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(5)}}},[e._v("5")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(6)}}},[e._v("6")]),_("button",{staticClass:"uk-icon-button uk-button-primary",on:{click:e.nextAnswerField}},[e._v(">")])]),_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row uk-margin-medium-top"},[_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(7)}}},[e._v("7")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(8)}}},[e._v("8")]),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(9)}}},[e._v("9")]),_("button",{staticClass:"uk-icon-button uk-button-primary",on:{click:e.clearField}},[e._v("CE")])]),_("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-flex-row uk-margin-medium-top"},[_("button",{staticClass:"uk-icon-button uk-button-danger invisible"}),_("button",{staticClass:"uk-icon-button uk-button-danger",on:{click:function(t){return e.typeNumber(0)}}},[e._v("0")]),_("button",{staticClass:"uk-icon-button uk-button-danger invisible"}),_("button",{staticClass:"uk-icon-button uk-button-primary",attrs:{disabled:!e.answer.second||!e.answer.third},on:{click:e.test}},[e._v("=")])])])]),_("div",{attrs:{id:"win-dialog","uk-modal":""},on:{hidden:e.nextTask}},[e._m(0)]),_("div",{attrs:{id:"lose-dialog","uk-modal":""},on:{hidden:e.nextTask}},[e._m(1)]),_("div",{attrs:{id:"stats-dialog","uk-modal":""},on:{hidden:e.goHome}},[_("div",{staticClass:"uk-modal-dialog uk-margin-auto-vertical uk-modal-body"},[_("h2",{staticClass:"uk-modal-title"},[e._v("Раунд завершен")]),_("p",[e._v("Вы решили "+e._s(e.roundTasksSolved)+" из "+e._s(e.roundTasksTotal)+" предложенных задач за "+e._s(e.timeElapsed))]),_("button",{staticClass:"uk-modal-close-outside",attrs:{"uk-close":""}})])])])},n=[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"uk-modal-dialog uk-margin-auto-vertical uk-modal-body"},[_("h2",{staticClass:"uk-modal-title"},[e._v("Правильно! 😃 😃 😃")]),_("button",{staticClass:"uk-modal-close-outside",attrs:{"uk-close":""}})])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"uk-modal-dialog uk-margin-auto-vertical uk-modal-body"},[_("h2",{staticClass:"uk-modal-title"},[e._v("Неправильно! 😭 😭 😭")]),_("button",{staticClass:"uk-modal-close-outside",attrs:{"uk-close":""}})])}],s=_("8b85"),o=s["a"],a=(_("805e"),_("2877")),i=Object(a["a"])(o,r,n,!1,null,null,null);t["default"]=i.exports},"673e":function(e,t,_){"use strict";_("386b")("sub",function(e){return function(){return e(this,"sub","","")}})},"805e":function(e,t,_){"use strict";var r=_("5580"),n=_.n(r);n.a},"8b85":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("673e"),core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1__),C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d225"),C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b0b4"),C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("308d"),C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("6bb5"),C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("4e2b"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("f751"),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__),tslib__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("9ab4"),uikit__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("8323"),uikit__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_12__),dayjs__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("5a0c"),dayjs__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__),lodash_padstart__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("b065"),lodash_padstart__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(lodash_padstart__WEBPACK_IMPORTED_MODULE_14__),vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("60a3"),vuex_class__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("4bb5"),Game=function(_Vue){function Game(){var e;return Object(C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["a"])(this,Game),e=Object(C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["a"])(this,Object(C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["a"])(Game).apply(this,arguments)),e.roundTasksSolved=0,e.roundTasksTotal=0,e.timeRemained="",e.timeElapsed="",e.operatorSign="*",e.answer={first:"",second:"",third:""},e.operands={first:0,second:0,third:0},e.activeControl=0,e.expectedResult=0,e}return Object(C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["a"])(Game,_Vue),Object(C_WWWR00T_otus_vue_brain_trainer_2_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["a"])(Game,[{key:"beforeMount",value:function(){var e=this;this.secondsElapsed=0,this.secondsRemained=0,this.timerStarted=dayjs__WEBPACK_IMPORTED_MODULE_13___default()(),this.tick(),this.interval=setInterval(function(){return e.tick()},100),this.onKeyDownHandler=function(t){e.onKeyDown(t)},document.addEventListener("keydown",this.onKeyDownHandler)}},{key:"mounted",value:function(){var e=this;this.$nextTick(function(){e.nextTask()})}},{key:"beforeDestroy",value:function(){this.stopTimer(),document.removeEventListener("keydown",this.onKeyDownHandler)}},{key:"onKeyDown",value:function(e){"Escape"===e.code&&this.stopGame()}},{key:"formattedTime",value:function(e){return lodash_padstart__WEBPACK_IMPORTED_MODULE_14___default()(Math.floor(e/60),2,"0")+":"+lodash_padstart__WEBPACK_IMPORTED_MODULE_14___default()(Math.floor(e%60),2,"0")}},{key:"tick",value:function(){var e=dayjs__WEBPACK_IMPORTED_MODULE_13___default()().diff(this.timerStarted,"second"),t=60*this.duration-e;this.formattedTime(this.secondsRemained);if(vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["b"].set(this,"timeRemained",this.formattedTime(t)),vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["b"].set(this,"timeElapsed",this.formattedTime(e)),vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["b"].set(this,"secondsElapsed",e),vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["b"].set(this,"secondsRemained",t),t<=0)return this.stopGame()}},{key:"stopTimer",value:function(){clearInterval(this.interval)}},{key:"getRandomOperand",value:function(){return Math.ceil(Math.random()*this.skill)}},{key:"getExponentOperand",value:function(){return Math.ceil(2*Math.random())}},{key:"generateNextTask",value:function(){this.roundTasksTotal+=1;var e=[];switch(this.operations.add&&e.push("+"),this.operations.sub&&e.push("-"),this.operations.mul&&e.push("*"),this.operations.div&&e.push("/"),this.operations.pow&&e.push("^"),this.operatorSign=e[Math.floor(Math.random()*e.length)],this.operatorSign){case"+":case"-":case"*":this.operands.first=this.getRandomOperand(),this.operands.second=this.getRandomOperand(),this.operands.third=this.getRandomOperand(),this.expectedResult=this.evaluate(this.operands.first,this.operands.second,this.operands.third,this.operatorSign);break;case"^":this.operands.first=this.getRandomOperand(),this.operands.second=this.getExponentOperand(),this.operands.third=this.getExponentOperand(),this.expectedResult=Math.pow(Math.pow(this.operands.first,this.operands.second),this.operands.third);break;case"/":this.expectedResult=3*this.getRandomOperand(),this.operands.second=this.getRandomOperand(),this.operands.third=this.getRandomOperand(),this.operands.first=this.expectedResult*this.operands.third*this.operands.second;break}this.answer.first=String(this.operands.first),this.answer.second="",this.answer.third=""}},{key:"evaluate",value:function evaluate(first,second,third,operatorSign){return"^"===operatorSign?Math.pow(Math.pow(first,second),third):eval("".concat(first).concat(operatorSign).concat(second).concat(operatorSign).concat(third))}},{key:"setActiveControl",value:function(e){this.activeControl=e%2}},{key:"nextTask",value:function(){this.generateNextTask(),this.setActiveControl(0)}},{key:"nextAnswerField",value:function(){this.setActiveControl(1)}},{key:"prevAnswerField",value:function(){this.setActiveControl(0)}},{key:"typeNumber",value:function(e){0===this.activeControl?this.answer.second+=String(e):this.answer.third+=String(e)}},{key:"goHome",value:function(){this.$router.push({name:"home"})}},{key:"clearField",value:function(){0===this.activeControl?this.answer.second="":this.answer.third=""}},{key:"test",value:function(){var e=this.evaluate(Number(this.answer.first),Number(this.answer.second),Number(this.answer.third),this.operatorSign);e===this.expectedResult?this.win():this.lose()}},{key:"lose",value:function(){this.addTasksFailed(),uikit__WEBPACK_IMPORTED_MODULE_12___default.a.modal(document.getElementById("lose-dialog")).show()}},{key:"win",value:function(){this.roundTasksSolved+=1,this.addTaskSolved(),uikit__WEBPACK_IMPORTED_MODULE_12___default.a.modal(document.getElementById("win-dialog")).show()}},{key:"stopGame",value:function(){this.stopTimer(),uikit__WEBPACK_IMPORTED_MODULE_12___default.a.modal(document.getElementById("stats-dialog")).show()}}]),Game}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["b"]);tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vuex_class__WEBPACK_IMPORTED_MODULE_16__["c"]],Game.prototype,"operations",void 0),tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vuex_class__WEBPACK_IMPORTED_MODULE_16__["c"]],Game.prototype,"skill",void 0),tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vuex_class__WEBPACK_IMPORTED_MODULE_16__["c"]],Game.prototype,"duration",void 0),tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vuex_class__WEBPACK_IMPORTED_MODULE_16__["b"]],Game.prototype,"addTaskSolved",void 0),tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vuex_class__WEBPACK_IMPORTED_MODULE_16__["b"]],Game.prototype,"addTasksFailed",void 0),Game=tslib__WEBPACK_IMPORTED_MODULE_11__["a"]([vue_property_decorator__WEBPACK_IMPORTED_MODULE_15__["a"]],Game),__webpack_exports__["a"]=Game},"8b97":function(e,t,_){var r=_("d3f4"),n=_("cb7c"),s=function(e,t){if(n(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=_("9b43")(Function.call,_("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,_){return s(e,_),t?e.__proto__=_:r(e,_),e}}({},!1):void 0),check:s}},9093:function(e,t,_){var r=_("ce10"),n=_("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,n)}},aa77:function(e,t,_){var r=_("5ca1"),n=_("be13"),s=_("79e5"),o=_("fdef"),a="["+o+"]",i="​",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(e,t,_){var n={},a=s(function(){return!!o[e]()||i[e]()!=i}),u=n[e]=a?t(d):o[e];_&&(n[_]=u),r(r.P+r.F*a,"String",n)},d=l.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},b065:function(e,t,_){(function(t){var _=1/0,r=9007199254740991,n=1.7976931348623157e308,s=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l="\\ud800-\\udfff",d="\\u0300-\\u036f\\ufe20-\\ufe23",f="\\u20d0-\\u20f0",p="\\ufe0e\\ufe0f",b="["+l+"]",m="["+d+f+"]",E="\\ud83c[\\udffb-\\udfff]",k="(?:"+m+"|"+E+")",h="[^"+l+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",M="\\u200d",C=k+"?",P="["+p+"]?",D="(?:"+M+"(?:"+[h,v,O].join("|")+")"+P+C+")*",g=P+C+D,y="(?:"+[h+m+"?",m,v,O,b].join("|")+")",w=RegExp(E+"(?="+E+")|"+y+g,"g"),T=RegExp("["+M+l+d+f+p+"]"),R=parseInt,W="object"==typeof t&&t&&t.Object===Object&&t,I="object"==typeof self&&self&&self.Object===Object&&self,A=W||I||Function("return this")(),x=K("length");function L(e){return e.split("")}function K(e){return function(t){return null==t?void 0:t[e]}}function U(e){return T.test(e)}function B(e){return U(e)?N(e):x(e)}function j(e){return U(e)?S(e):L(e)}function N(e){var t=w.lastIndex=0;while(w.test(e))t++;return t}function S(e){return e.match(w)||[]}var q=Object.prototype,G=q.toString,F=A.Symbol,$=Math.ceil,V=Math.floor,H=F?F.prototype:void 0,J=H?H.toString:void 0;function X(e,t){var _="";if(!e||t<1||t>r)return _;do{t%2&&(_+=e),t=V(t/2),t&&(e+=e)}while(t);return _}function Y(e,t,_){var r=-1,n=e.length;t<0&&(t=-t>n?0:n+t),_=_>n?n:_,_<0&&(_+=n),n=t>_?0:_-t>>>0,t>>>=0;var s=Array(n);while(++r<n)s[r]=e[r+t];return s}function z(e){if("string"==typeof e)return e;if(_e(e))return J?J.call(e):"";var t=e+"";return"0"==t&&1/e==-_?"-0":t}function Q(e,t,_){var r=e.length;return _=void 0===_?r:_,!t&&_>=r?e:Y(e,t,_)}function Z(e,t){t=void 0===t?" ":z(t);var _=t.length;if(_<2)return _?X(t,e):t;var r=X(t,$(e/B(t)));return U(t)?Q(j(r),0,e).join(""):r.slice(0,e)}function ee(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function te(e){return!!e&&"object"==typeof e}function _e(e){return"symbol"==typeof e||te(e)&&G.call(e)==o}function re(e){if(!e)return 0===e?e:0;if(e=se(e),e===_||e===-_){var t=e<0?-1:1;return t*n}return e===e?e:0}function ne(e){var t=re(e),_=t%1;return t===t?_?t-_:t:0}function se(e){if("number"==typeof e)return e;if(_e(e))return s;if(ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var _=u.test(e);return _||c.test(e)?R(e.slice(2),_?2:8):i.test(e)?s:+e}function oe(e){return null==e?"":z(e)}function ae(e,t,_){e=oe(e),t=ne(t);var r=t?B(e):0;return t&&r<t?Z(t-r,_)+e:e}e.exports=ae}).call(this,_("c8ba"))},c5f6:function(e,t,_){"use strict";var r=_("7726"),n=_("69a8"),s=_("2d95"),o=_("5dbc"),a=_("6a99"),i=_("79e5"),u=_("9093").f,c=_("11e9").f,l=_("86cc").f,d=_("aa77").trim,f="Number",p=r[f],b=p,m=p.prototype,E=s(_("2aeb")(m))==f,k="trim"in String.prototype,h=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){t=k?t.trim():d(t,3);var _,r,n,s=t.charCodeAt(0);if(43===s||45===s){if(_=t.charCodeAt(2),88===_||120===_)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var o,i=t.slice(2),u=0,c=i.length;u<c;u++)if(o=i.charCodeAt(u),o<48||o>n)return NaN;return parseInt(i,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,_=this;return _ instanceof p&&(E?i(function(){m.valueOf.call(_)}):s(_)!=f)?o(new b(h(t)),_,p):h(t)};for(var v,O=_("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;O.length>M;M++)n(b,v=O[M])&&!n(p,v)&&l(p,v,c(b,v));p.prototype=m,m.constructor=p,_("2aba")(r,f,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=game.7d5aa262.js.map