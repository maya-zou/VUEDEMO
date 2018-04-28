<template>
  <div id="main">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
  components:{
    Header,
    Footer,
    Todo,
  }
};
</script>

<style lang="stylus" scoped>
  #main{
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999999
        opacity .1
    }
  }
</style>



