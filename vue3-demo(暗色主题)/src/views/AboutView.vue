<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ name }}</h2>
    <button @click="changeName">改变名字</button>
    <button @click="reset">重置</button>
    <input type="text"  v-capitalize.capitalize="fuck" v-model="fuck"/>
    {{ fuck }}
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import useStore from '../stores/index'
  import {
    storeToRefs
  } from 'pinia';

const {useUsersStore}  = useStore()

//自定义修饰符指令，将第一个字母转为大写
const vCapitalize = (el,binding)=>{
      const {value,modifiers} = binding
      if(value && modifiers.capitalize){
         el.value = value.charAt(0).toUpperCase() +value.split('').splice(1).join('')
      }
}


  //批量修改数据
  const changedatas = () => {
    useUsersStore.$patch({
      name: "张三",
      age: 100,
      sex: "女",
    });

    //也可以接收一个回调函数
    // store.$patch((state) => {
    //   state.items.push({
    //     name: 'shoes',
    //     quantity: 1
    //   })
    //   state.hasChanged = true
    // })
  }

//使用pinia的方法
const changeName =()=>{
  useUsersStore.saveName('cjh')
}

const reset =()=>{
  useUsersStore.$reset()
}


const fuck = ref('')

//通过storeToRefs将属性变成响应式的
const {
    name,
    age,
    sex
  } = storeToRefs(useUsersStore);


</script>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
