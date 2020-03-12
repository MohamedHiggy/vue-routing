<template>
  <div>
    <h1>Please select a user</h1>
    <hr />
    <ul class="list-group">
      <router-link
        to="/user/1"
        class="list-group-item"
        tag="li"
        style="cursor: pointer;"
      >
        User 1
      </router-link>

      <router-link
        to="/user/2"
        class="list-group-item"
        tag="li"
        style="cursor: pointer;"
      >
        User 2
      </router-link>

      <router-link
        to="/user/3"
        class="list-group-item"
        tag="li"
        style="cursor: pointer;"
      >
        User3
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-group-item:hover {
  background-color: #dddddd;
}
</style>
