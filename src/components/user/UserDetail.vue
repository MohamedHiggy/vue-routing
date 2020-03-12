<template>
  <div>
    <h1>this is user Detail component</h1>
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <router-link class="btn btn-primary" tag="button" :to="link"
      >Edit</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "UserEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          s: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
