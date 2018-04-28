<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} 条待办事项</span>
    <span class="tabs">
      <span 
      v-for="state in states" 
      :key="state" 
      :class="[state,filter===state?'actived':'']"
      @click="toggleFilter(state)">
      {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllcompleted">清除已完成事项</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["全部", "待办", "完成"]
    };
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit("toggle", state);
    },
    clearAllcompleted() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style lang="stylus" scoped>
.helper {
  background: #ffffff;
  padding: 10px;
  text-align: center;

  .left {
    color: #999999;
    float: left;
    font-size: 12px;
  }

  .tabs {
    cursor: pointer;

    span {
      padding: 3px 6px;
      margin: 6px;
      border: 1px solid #dddddd;
    }

    .actived {
      padding: 3px 6px;
      margin: 6px;
      border: 1px solid red;
    }
  }

  .clear {
    float: right;
    cursor: pointer;
  }
}
</style>
