webpackJsonp([1],{FHPw:function(t,e){},Izf1:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("Dd8w"),r=n.n(i),a=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},s="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function c(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){c(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,p);var f=function(t){this.register([],t,!1)};f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},f.prototype.update=function(t){!function t(e,n,o){0;n.update(o);if(o.modules)for(var i in o.modules){if(!n.getChild(i))return void 0;t(e.concat(i),n.getChild(i),o.modules[i])}}([],this.root,t)},f.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var i=new u(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&c(e.modules,function(e,i){o.register(t.concat(i),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var l=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!=typeof window&&window.Vue&&w(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1);var i=t.state;void 0===i&&(i={}),"function"==typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var r=this,a=this.dispatch,c=this.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=o,g(this,i,[],this._modules.root),_(this,i),n.forEach(function(t){return t(e)}),h.config.devtools&&function(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){s.emit("vuex:mutation",t,e)}))}(this)},d={state:{configurable:!0}};function m(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function v(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var o=t._vm;t.getters={};var i={};c(t._wrappedGetters,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var r=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=r,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),h.nextTick(function(){return o.$destroy()}))}function g(t,e,n,o,i){var r=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a]=o),!r&&!i){var s=y(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){h.set(s,c,o.state)})}var u=o.context=function(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=b(n,o,i),a=r.payload,s=r.options,c=r.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:o?t.commit:function(n,o,i){var r=b(n,o,i),a=r.payload,s=r.options,c=r.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return y(t.state,n)}}}),i}(t,a,n);o.forEachMutation(function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}(t,a+n,e,u)}),o.forEachAction(function(e,n){var o=e.root?n:a+n,i=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,i){var r,a=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,i);return(r=a)&&"function"==typeof r.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,o,i,u)}),o.forEachGetter(function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,a+n,e,u)}),o.forEachChild(function(o,r){g(t,e,n.concat(r),o,i)})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function b(t,e,n){var o;return null!==(o=t)&&"object"==typeof o&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function w(t){h&&t===h||a(h=t)}d.state.get=function(){return this._vm._data.$$state},d.state.set=function(t){0},l.prototype.commit=function(t,e,n){var o=this,i=b(t,e,n),r=i.type,a=i.payload,s=(i.options,{type:r,payload:a}),c=this._mutations[r];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,o.state)}))},l.prototype.dispatch=function(t,e){var n=this,o=b(t,e),i=o.type,r=o.payload,a={type:i,payload:r},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(r)})):s[0](r)},l.prototype.subscribe=function(t){return m(t,this._subscribers)},l.prototype.subscribeAction=function(t){return m(t,this._actionSubscribers)},l.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},l.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},l.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),v(this)},l.prototype.hotUpdate=function(t){this._modules.update(t),v(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,d);var $=O(function(t,e){var n={};return E(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=P(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),C=O(function(t,e){var n={};return E(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=P(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n}),M=O(function(t,e){var n={};return E(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||P(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0}),n}),x=O(function(t,e){var n={};return E(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=P(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n});function E(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function O(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function P(t,e,n){return t._modulesNamespaceMap[n]}var j={Store:l,install:w,version:"3.0.1",mapState:$,mapMutations:C,mapGetters:M,mapActions:x,createNamespacedHelpers:function(t){return{mapState:$.bind(null,t),mapGetters:M.bind(null,t),mapMutations:C.bind(null,t),mapActions:x.bind(null,t)}}},k={name:"App",data:function(){return{activeId:"",tabs:[{id:1,name:"滚动的立方体",path:"/"},{id:2,name:"待定。。。",path:"/next"}]}},computed:r()({},$(["routerPath"])),created:function(){},methods:{openRouter:function(t){this.$router.push(t.path)}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-column full-parent",attrs:{id:"app"}},[n("div",{staticClass:"nav layout"},[n("div",[t._v("我的demo")]),t._v(" "),t._l(t.tabs,function(e){return n("div",{key:e.id,class:{active:t.routerPath==e.path},domProps:{textContent:t._s(e.name)},on:{click:function(n){t.openRouter(e)}}})})],2),t._v(" "),n("router-view",{staticClass:"flex"})],1)},staticRenderFns:[]};var G=n("VU/8")(k,A,!1,function(t){n("FHPw")},null,null).exports,S=n("/ocq");o.a.use(j);var N=new j.Store({state:{routerPath:""},mutations:{changeRouterPath:function(t,e){t.routerPath=e}},actions:{changeRouterPath:function(t,e){t.commit("changeRouterPath",e)}}}),H={name:"Cube",data:function(){return{msg:"",dev:{gamma:1,beta:1,Alpha:1}}},created:function(){var t=this;window.addEventListener("deviceorientation",function(e){t.$set(t.dev,"gamma",e.gamma),t.$set(t.dev,"beta",e.beta),t.$set(t.dev,"Alpha",e.Alpha)})},computed:{}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cube layout"},[n("div",[n("span",[t._v("Gamma"+t._s(t.dev.gamma))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Beta"+t._s(t.dev.beta))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Alpha"+t._s(t.dev.Alpha))]),t._v(" "),n("br")]),t._v(" "),n("ul",{style:{transform:"rotateY("+15*t.dev.gamma+"deg) rotateZ("+15*t.dev.beta+"deg)"}},t._l(6,function(e,o){return n("li",{key:e,domProps:{textContent:t._s(o+1)}})}),0)])},staticRenderFns:[]};var V=n("VU/8")(H,R,!1,function(t){n("XGqy")},"data-v-81afa3f6",null).exports,L={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var F=n("VU/8")({name:"next",data:function(){return{}}},L,!1,function(t){n("Izf1")},"data-v-6ac35094",null).exports;o.a.use(S.a);var U=new S.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"Cube",component:V},{path:"/next",name:"Next",component:F}]});U.beforeEach(function(t,e,n){N.dispatch("changeRouterPath",t.path),n()});n("ksBL");o.a.config.productionTip=!1,new o.a({el:"#app",router:U,store:N,components:{App:G},template:"<App/>"})},XGqy:function(t,e){},ksBL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5aaafd1fc661571369d8.js.map