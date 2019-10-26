<template>
  <div>
    <div class="row justify-content-center">
      <p>{{des1}}</p>
    </div>
    <div class="row justify-content-center">
      <p>{{des2}}</p>
    </div>
    <br>
    <div class="row justify-content-center">
      <p>{{name}}</p>
    </div>
    <div class="row justify-content-center">
      <p>{{company}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props:['des1','des2','name','company'],
    name: 'customerSay',
      data() {
        return {      
          
        }
      },
      methods: {
      },
    }
</script>

<style>
</style>