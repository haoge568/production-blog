(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{657:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题"}},[t._v("#")]),t._v(" vue面试题")]),t._v(" "),a("h3",{attrs:{id:"vue-router生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router生命周期"}},[t._v("#")]),t._v(" vue router生命周期")]),t._v(" "),a("p",[t._v("router异步解析执行，此时router在 resolve 完之前一直处于 等待中。")]),t._v(" "),a("p",[t._v("三个参数：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("to: Route: 即将要进入的目标 路由对象")])]),t._v(" "),a("li",[a("p",[t._v("from: Route: 当前导航正要离开的路由")])]),t._v(" "),a("li",[a("p",[t._v("next: Function: 一定要调用该方法来 resolve 这个钩子")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("组件中路由的生命周期中的不同方法：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPullingDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"组件中路由的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中路由的生命周期"}},[t._v("#")]),t._v(" 组件中路由的生命周期")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在渲染该组件的对应路由被 confirm 前调用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不！能！获取组件实例 `this`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为当守卫执行前，组件实例还没被创建")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在当前路由改变，但是该组件被复用时调用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以访问组件实例 `this`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航离开该组件的对应路由时调用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以访问组件实例 `this`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"vue中生命周期总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中生命周期总结"}},[t._v("#")]),t._v(" Vue中生命周期总结")]),t._v(" "),a("ol",[a("li",[t._v("根组件实例：8个 (beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed)")]),t._v(" "),a("li",[t._v("组件实例：8个 (beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed)")]),t._v(" "),a("li",[t._v("全局路由钩子：2个 (beforeEach、afterEach)")]),t._v(" "),a("li",[t._v("组件路由钩子：3个 (beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave)")]),t._v(" "),a("li",[t._v("指令的周期： 5个 (bind、inserted、update、componentUpdated、unbind)")]),t._v(" "),a("li",[t._v("beforeRouteEnter的next所对应的周期")]),t._v(" "),a("li",[t._v("nextTick所对应的周期")])])])}),[],!1,null,null,null);s.default=n.exports}}]);