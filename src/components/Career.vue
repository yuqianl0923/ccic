<template> 
  <div id="career"> 
    <NavigationBarBlack/>
      <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true" class="pt-7">
        <slide style="background-image:url(static/img/career-top-banner.jpg)" class="jarallax-img opacity-100 example-slide">
          <description title="Career"></description>
        </slide>
      </carousel>
      <h5 class="h5 text-center pt-5">Currently we are not hiring at this time.</h5>
  </div>
</template>

<script>
  import NavigationBarBlack from './NavigationBarBlack.vue';
  import description from './description.vue';
  import { butter } from '@/buttercms';
  export default {
    components:{ 
      NavigationBarBlack,
      description
    },
    name: 'career',
    data() {
      return {
        page: {
          fields: {}
        }

      }
    },
    methods: {
      getPage() {
        butter.page.retrieve('*', 'homepage')
          .then((res) => {
            console.log(res.data.data)
            this.page = res.data.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPage()
    }
  }
</script>

<style>
.btn-primary{
  background-color:#1e3f66;
  border:#1e3f66;
}
</style>