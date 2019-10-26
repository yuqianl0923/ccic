<template>
  <div>
    <div class="row" style="padding-top:15%;padding-left:10%;">
      <h2 class="text-light">{{ title }}</h2>
    </div>
    <div class="row" style="padding-left:10%;">
      <p class="text-light">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props:['title','subtitle'],
    name: 'description',
      data() {
        return {      
          page: {
            fields: {}
          },  
        }
      },
      methods: {
      },
    }
</script>

<style>
</style>