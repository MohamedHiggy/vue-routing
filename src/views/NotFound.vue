<template>
  <div class="error-template">
    <h1>
      Oops!
    </h1>
    <h2>
      404 Not Found
    </h2>
    <div class="error-details">
      Sorry, an error has occured, Requested page not found!
    </div>
    <div class="error-actions">
      <button class="btn btn-primary" @click="navigateToHome">
        Go To Home
      </button>
    </div>
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
<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}
</style>
