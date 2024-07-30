import Vuex from 'vuex';
export  const store = new Vuex.Store({
    state: {
        myTodoLists: []
    },
    mutations:{
        addTodo(state, todo){
            state.myTodoLists = [
                ...state.myTodoLists,
                {id: Math.random()*10000, title: todo, isCompleted: false }
            ]
        },
        updateTodo(state, todoId){
            state.myTodoLists = state.myTodoLists.map((item)=> {
                if(item.id === todoId){
                    item.isCompleted = !item.isCompleted
                }
                return item;
            })
        }
    },
    getters: {
        finalTodosLength: (state) => {
            const myCompleteTodos = state.myTodoLists.filter((item) => item.isCompleted);
            return myCompleteTodos.length;
        },
      }
});

export default store;










// import Vuex from 'vuex';
// import axios from 'axios';

// export const store = new Vuex.Store({
//   state: {
//     myTodoLists: []
//   },
//   mutations: {
//     setTodos(state, todos) {
//       state.myTodoLists = todos;
//     },
//     addTodo(state, todo) {
//       state.myTodoLists = [
//         ...state.myTodoLists,
//         { id: Math.random() * 10000, title: todo, isCompleted: false }
//       ];
//     },
//     updateTodo(state, todoId) {
//       state.myTodoLists = state.myTodoLists.map((item) => {
//         if (item.id === todoId) {
//           item.isCompleted = !item.isCompleted;
//         }
//         return item;
//       });
//     }
//   },
//   actions: {
//     fetchTodos({ commit }) {
//       axios.get('http://localhost:3000/todos')
//         .then(response => {
//           commit('setTodos', response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching todos:', error);
//         });
//     },
//     addTodoToServer({ commit }, todo) {
//       const newTodo = { title: todo, isCompleted: false };
//       axios.post('http://localhost:3000/todos', newTodo)
//         .then(response => {
//           commit('addTodo', response.data.title);
//         })
//         .catch(error => {
//           console.error('Error adding todo:', error);
//         });
//     },
//     toggleTodoCompletion({ commit }, todoId) {
//       const todo = this.state.myTodoLists.find(todo => todo.id === todoId);
//       if (todo) {
//         axios.patch(`http://localhost:3000/todos/${todoId}`, {
//           isCompleted: !todo.isCompleted
//         })
//         .then(() => {
//           commit('updateTodo', todoId);
//         })
//         .catch(error => {
//           console.error('Error updating todo:', error);
//         });
//       }
//     }
//   },
//   getters: {
//     finalTodosLength: (state) => {
//       const myCompleteTodos = state.myTodoLists.filter((item) => item.isCompleted);
//       return myCompleteTodos.length;
//     },
//   }
// });

// export default store;
