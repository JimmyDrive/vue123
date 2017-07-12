<template>
    <div>
        <button @click="show">切換</button>
        <transition name="fade">
            <div v-show="toggle" style="width:100px;height:100px;background:red;">
                 hello vue
            </div>
        </transition>
    </div>
</template>
<script>
       export default{
           name:"transtion",
           data(){
              return{
                 toggle:true
              }
           },
           methods:{
               show(){ 
                 this.toggle=!this.toggle
               }
           }
       }
</script>
<!--scope 作用域-->
<style scope>
      .fade-enter-active,.fade-leave-active{
              transition: all 1s ease;
              
      }
      .fade-enter,.fade-enter-leave{
          opacity:0;
          transform:translateY(40px);
          transition:ease;
      }
</style>  



