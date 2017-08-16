<template>
  <div id="app">
    <slide></slide>
    <slide2></slide2>
  </div>
</template>

<style lang="stylus">
*{
    margin: 0;
    padding: 0;
}
</style>
<script>
    import slide from './HeadSlide/index.vue'
    import slide2 from './slide2/index.vue'
    export default{
        components: {
            slide,
            slide2
        }
    }
</script>