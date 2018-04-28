<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input type="checkbox"
    class="toggle"
    v-model="todo.completed"
    name="toggle"
    :id="[todo.id]"
    >
    <label :for="[todo.id]">
      {{todo.content}}
      </label>
    <span>{{todo.date}}</span>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit("del", this.todo.id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.todo-item {
  position: relative;
  background-color: #ffffff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:hover {
    .destory:after {
      content: 'x';
    }
  }

  label {
    white-space: normal;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  span {
    font-size: 12px;
    color: #999999;
    position: absolute;
    right: 60px;
    z-index: 99;
    top: 20px;
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}

.toggle {
  text-align: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;

  &:after {
    // content: url('../assets/images/round.jpg');
    content: '';
    width: 30px;
    height: 30px;
    display: block;
    background-color: #ffffff;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    position: absolute;
    left: 10px;
  }

  &:checked:after {
    // content: url('../assets/images/done.jpg');
    content: '✔';
    font-size: 25px;
    word-break: break-all;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: block;
    background-color: #ffffff;
    border-radius: 50%;
    border: 1px solid green;
    position: absolute;
    left: 10px;
    color: green;
  }
}

.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>

