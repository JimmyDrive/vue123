//二级路由
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
const first = { template: "<h2>first</h2>" };
const second = { template: "<h2>scond</h2>" };
const third = { template: "<h2>third</h2>" };
const about = { template: "<h2>about</h2>" };


const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
        { path: '/first', component: first },
        { path: '/second', component: second,name:'SecondList' },
        { path: '/third', component: third,name:'ThirdList' },
        {path: '/about/:id', component: about}

    ]
})

new Vue({
    router,
    template:
    `
    <div>
    <h2>导航</h2>
         <div>
         <h3>{{$route.name}}</h3>
         <h2>{{$route.params.id}}</h2>
             <ul>
                 <li><router-link to="/first">first</router-link></li>
                 <li><router-link to="/second">second</router-link></li>
                 <li><router-link to="/third">third</router-link></li>
                 <li><router-link to="/about/13333">about</router-link></li>
             </ul>
             <div>
             <router-view></router-view>
             </div>
         </div>
    </div>
    `

}).$mount("#app")

//params是截取地址欄上某個特定的字段