<template>
  <div>
    <h3>this is user Edit component</h3>
    <p>Locale: {{ $route.query.s }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-primary btn-block" @click="confirmed = true">
      Confirm
    </button>
    <div class="a"></div>
    <p id="data">Some Extra Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (
        confirm("you should click in confirm button first to leave or press ok")
      ) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.a {
  height: 700px;
}
</style>
