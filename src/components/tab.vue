<template>
  <div class="tab">
    
       <router-link tag="div" to="/container">Container布局容器</router-link>
        <router-link tag="div" to="/pageOne">表单</router-link>
        <router-link tag="div" to="/pageTwo">icon、Button按钮</router-link>
        <router-link tag="div" to="/form">Form</router-link> 
        <router-link tag="div" to="/icon">Icon</router-link> 
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      radio1: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
