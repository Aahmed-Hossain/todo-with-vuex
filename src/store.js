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