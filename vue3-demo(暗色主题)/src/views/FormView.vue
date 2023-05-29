<template>
    <div>
        <Form v-model:form="form" @submit="submit"></Form>
    </div>
  </template>

<script setup>
import { computed, reactive, watchEffect,ref } from 'vue'
import Form from '../components/Form.vue'
// do not use same name with ref
const form = ref({
  name: '11',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})




const submit =()=>{
    console.log("子组件submit")
    console.log(Object.assign({},form.value))
}

</script>
  