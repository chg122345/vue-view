<template>
  <div id="app" style="background-color:#f0f0f0">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('goodsList')
  }
}
</script>

