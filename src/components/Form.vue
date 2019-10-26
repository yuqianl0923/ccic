<template>
  <div id="customer-service" class="pt-6 pb-6" style="background-color:#f5f5f5">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="text-center mb-4">
          <h5 class="h5 theme-blue text-center pb-3">Contact Information</h5>
          <div class="row">
            <div class="col-6">
              <p class="theme-blue bold">Customer Service<span class="card-text theme-blue semi-bold-italic" style="font-size:13px!important;">  For new customer, application</span></p> 
              <p class="card-text">{{ contactA }}</p>             
            </div>
            <div class="col-6">
              <p class="theme-blue bold">Inspection Department</p>
              <p class="card-text">{{ contactB }}</p>  
            </div>
          </div>  
          <br>
          <br>
          <div class="row">
            <div class="col-6">
              <p class="theme-blue bold">Certifacte Department</p> 
              <p class="card-text">{{ contactC }}</p>             
            </div>
            <div class="col-6">
              <p class="theme-blue bold">Accounting Department</p>
              <p class="card-text">{{ contactD }}</p>  
            </div>
        </div>      
        </div>
  
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    props:['contactA','contactB','contactC','contactD'],
    name: 'customer-service',
    data() {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style>


</style>
