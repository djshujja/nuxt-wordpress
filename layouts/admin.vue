<template>
  <div id="navbar">
    <nuxt-link :to="'/new-post'">New Post</nuxt-link>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
#navbar {
  height: 50px;
  width: 100%;
}
</style>
