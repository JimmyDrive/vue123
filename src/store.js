
//vuex.vue
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//存放状态
const state = {
    num: 0
}
//触发状态
const mutations = {
    
    jia(state,n) {
          state.num+=n
    },
    jian(state){
        state.num--
    }
}
const getters={
    num(state){
        return state.num+=20
    }
}
//action函数接受一个与store实例具有相同方法和属性的context对象
const actions={
    //分发事件
    jiaAction(context){
        context.commit("jia")
    },
    jianAction({commit}){
        commit("jian")

    }
}
//实例仓库
export default new Vuex.Store({   //后勤资源
    state,
    mutations,
    getters,
    actions
})













