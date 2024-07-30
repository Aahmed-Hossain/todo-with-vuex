<template>
  <div id="app" class="container">
    <h1 class="">To-Do Application using Vue.js</h1>
    <MyTodoForm />
    <MyTodoList/>
  </div>
</template>

<script>

import MyTodoForm from './components/MyTodoForm.vue';
import MyTodoList from './components/MyTodoList.vue';

export default {
  name: 'App',
  components: {
    MyTodoForm, 
    MyTodoList,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
