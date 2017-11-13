import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/loginHeader'
        },
        {
            path:'/loginHeader',
            component: resolve => require(['../components/zcy/loginHeader.vue'], resolve),
        },
        {
                path:'/home',
                meta:{
                    //添加字段，表示进入这个角色需要登录的
                    requiresArg:true,
                 },
                 component: resolve => require(['../components/common/Home.vue'], resolve),
                children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/Readme',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/tjxm',
                    component: resolve => require(['../components/page/tjxm.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/BasePriaseRcord',
                    component: resolve => require(['../components/page/BasePriaseRcord.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/kqjl',
                    component: resolve => require(['../components/page/kqjl.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/WJJL',
                    component: resolve => require(['../components/page/WJJL.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
