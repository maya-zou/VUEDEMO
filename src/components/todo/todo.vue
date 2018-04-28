<template>
  <section class="real-app">
      <input 
      type="text"
      class="add-input"
      autofocus
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
      >
      <Item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo"></Item>
      <Tabs @toggle="toggleFilter" @clearAll="clearAllCompleted" :filter="filter" :todos="todos"></Tabs>   
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
import moment from "moment";
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "全部"
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter == "全部") {
        return this.todos;
      }
      const completed = this.filter === "完成";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      let value = e.target.value;
      if (value) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          date: moment().format("YYYY-MM-DD HH:mm:ss"),
          completed: false
        });
        e.target.value = "";
      }
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  position: relative;
  margin: 0 auto;
  box-shadow: 0 0 5px #666666;
  margin-left: 20px;
  margin-right: 20px;
}

.add-input {
  position: relative;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  line-height: 1.4em;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  padding: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
