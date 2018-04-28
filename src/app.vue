<template>
  <div class="todo-body">
    <div class="todo-nav">
      <ul>
        <li v-for="item in routes" :key="item.name">
          <router-link class="link" :to="item.name">{{item.name}}</router-link>
        </li>
        <li class="about">
          <router-link to="about">关于</router-link>          
        </li>
      </ul>
    </div>
    <div class="todo-view">
      <router-view></router-view>      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "home"
        },
        {
          name: "todo"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.todo-nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  top 0
  left 0
  right 0

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
    border-bottom 3px solid red

    li {
      float: left;
      padding: 0;
      margin: 0;
      background-image: none;
      font-size: 13px;
      word-break: break-all;
      line-height: 1.5em;

      .link {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }

        &:hover:not(.router-link-active) {
          background-color: #000;
        }
      }

      .router-link-active {
        background-color: #4CAF50;
      }
    }

    .about {
      float: right;

      a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      &:hover {
        opacity: 0.8;
        background-color: #000;
      }
    }
  }
}

.todo-view {
  padding-top: 50px;
  display: block;
  width: 100%;
  height: 100%;
}
</style>






