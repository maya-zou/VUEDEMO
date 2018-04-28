<template>
  <div style="background:red;width:100%;height:100%">{{username}}
      <button @click="goBack">返回</button>
  </div>
  
</template>

<script>
export default {
  // Home.vue
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
