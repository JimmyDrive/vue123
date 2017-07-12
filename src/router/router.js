//导入vue
import Vue from "vue" 
//定义组件  
import VueRouter from "vue-router";
//vue调用vue-router插件
Vue.use(VueRouter) 
//定义组件
const first={template:"<h2>First</h2>"}
const second={template:"<h2>Second</h2>"}
const third={template:"<h2>Third</h2>"}
//实例路由 
const router=new VueRouter({
    mode:"history",     // 模式
    base:__dirname,      //相对路径
    routes:[ 
        {path:"/first",component:first},
        {path:"/second",component:second},
        {path:"/third",component:third},
    ]
})
//实例化
new Vue({
    router,
    template:      //模板字符串
    `  
<div>       <--必须加一个容器-->
     <h2>导航</h2>
     <div>
          <ul>
             <li><router-link to="/first">first</router-link></li>
             <li><router-link to="/second">second</router-link></li>
             <li><router-link to="/third">third</router-link></li>
          </ul>
          <div>
              <router-view></router-view>
          </div>
     </div>
</div>
    
    `
}).$mount("#app")





