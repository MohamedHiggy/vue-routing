<template>
  <div>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="active" exact>
          Home
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/user" active-class="active">
          User
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-around;
}
</style>
