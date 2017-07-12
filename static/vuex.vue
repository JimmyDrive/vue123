<template>
      <div>
          <p>{{num}}</p>
          <!--commit 用来触发函数-->
          <!--触发函数的执行-->
          <!--<button @click="$store.commit('jia',12)">+</button>-->
         <!--<button @click="$store.commit('jian')">-</button>-->
         

         <button @click="jia">+</button>
         <button @click="jian">-</button>

         <button @click="jiaAction">+</button>
         <button @click="jianAction">-</button>
      </div>
</template>

<script>

//es6中的结构赋值    mapState状态的映射
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
import store from "./store"
export default{
store,
name:"vuex",
// computed  计算属性


// computed:{
//     num(){
//         return store.state.num
//     }
    
// },

//es6箭头函数
/*
function num(state){
        return state.num
}

*/
// computed:mapState({
//     num:state=>state.num
// }),

// computed:{
//     //...mapState对象展开运算符
//     // ...mapState(["num"])
//       ...mapGetters(['num'])
// },

// data(){
//     return{
        
//     }
// },
// methods:{
//     // ...mapMutations([
//     //     "jia","jian"
//     // ])
// ...mapActions([
//     "jiaAction","jianAction"
// ])
// },
methods:mapActions({
    "jiaAction","jianAction"
})


}
</script>


<style>


</style> 