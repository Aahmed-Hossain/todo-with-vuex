<template>
  <form class="myForm" @submit="addTodo">
    <input name="taskTodo" class="formInput" v-model="taskTodo" placeholder="Add a new todo..." required />
    <button class="formBtn" type="submit">Add</button>
  </form>
</template>

<script>
export default {
data(){
    return {
        taskTodo : ''
    }
},
methods: {
    addTodo(e){
        e.preventDefault();
        this.$store.commit('addTodo',this.taskTodo);
        this.taskTodo = ''
    }
}
}
</script>

<style scoped>
.myForm {
  margin-bottom: 30px;
}

.formInput {
  width: 30em;
  padding: 20px;
  margin-right: 8px;
  border: 2px solid #1393d4;
  border-radius: 1em;
  font-size: 15px;
}

.formBtn {
  width: 10em;
  padding: 20px;
  margin-right: 8px;
  border: 2px solid #1393d4;
  border-radius: 1em;
  color: white;
  background-color: rgb(44, 122, 223);
  cursor: pointer;
  font-size: 15px;
}
</style>