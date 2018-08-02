<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-bottom: 100px;
}
</style>
