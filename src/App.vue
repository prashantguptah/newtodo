<template>


<div class="w-full sm:max-w-[600px] md:max-w-[600px] lg:max-w-[375px] h-[860px] mx-auto mt-[44px] bg-white-200 px-[00px] rounded-lg shadow-lg">
  <TodolistComponent/>
</div>
 
</template>

<script>
import TodolistComponent from './components/TodolistComponent.vue';


export default {
  name: 'App',
  components: {
    TodolistComponent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
