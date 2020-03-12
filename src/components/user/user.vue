<template>
  <div>
    <h1>this is user component</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
