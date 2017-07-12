//二级路由
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
const first = { template: "<h2>first</h2>" };
const second = { template: "<h2>scond</h2>" };
const third = { template: "<h2>third</h2>" };
const about = { template: "<h2>about</h2>" };

const AboutFirst = { template: "<h2>AboutFirst</h2>" }
const AboutSecond = { template: "<h2>AboutSecond</h2>" }
const AboutThird = { template: "<h2>AboutThird</h2>" }

const childView = {
    template:
    `
    <div>
         <h3>组件</h3>
         <router-view></router-view>
    </div>
    `
}

const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
        { path: '/first', component: first },
        { path: '/second', component: second },
        { path: '/third', component: third },
        {
            path: '/about', component: childView,
            children: [
                { path: '/', component: about },
                { path: '/about/AboutFirst', component: AboutFirst },
                { path: '/about/AboutSecond', component: AboutSecond },
                { path: '/about/AboutThird', component: AboutThird },
            ]

        },

    ]
})

new Vue({
    router,
    template:
    `
    <div>
    <h2>导航</h2>
         <div>
             <ul>
                 <li><router-link to="/first">first</router-link></li>
                 <li><router-link to="/second">second</router-link></li>
                 <li><router-link to="/third">third</router-link></li>
                 <li><router-link to="/about">about</router-link>
                     <ol>                  
                        <li><router-link to="/about/AboutFirst">AboutFirst</router-link></li>
                        <li><router-link to="/about/AboutSecond">AboutSecond</router-link></li>
                        <li><router-link to="/about/AboutThird">AboutThird</router-link></li>
                     </ol>
                 </li>
             </ul>
             <div>
             <router-view></router-view>
             </div>
         </div>
    </div>
    `

}).$mount("#app")