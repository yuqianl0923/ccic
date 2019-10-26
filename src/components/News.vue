<template> 
  <div id="news"> 
    <NavigationBarBlack/>
    <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true" class="pt-6">
      <slide style="background-image:url(static/img/download-topbanner.jpg)" class="jarallax-img opacity-100 example-slide">
        <description title="News"></description>
      </slide>
    </carousel> 


    <div id="app-forms">
      <div class="container">
        <div class="row pt-6">

          <div class="col-md-5 col-12 pt-md-3 offset-1">
          <h5 class="h5 theme-blue">Second FDA-Ds Annual</h5>
          <p >The American Society for Quality (ASQ), in collaboration with the Food and Drug Administration (FDA), Los Angeles District sponsored the 2nd Dietary Consortium on April 27, 2018, which was held at the CCIC North America Office at 8835 Haven Ave., Rancho Cucamonga, CA 91730. The theme for this event was focused on FSMA/FSVP and other Regulatory Update: FDA and Industry Perspective. Speakers for this event were representatives from the FDA, DS Industry, Academia and other Regulatory Agencies such as the Certification and Accreditation of the People’s Republic of China (CNCA).</p>
          </div>
          <div class="col-md-6 col-12 pt-md-3">
            <img src="static/img/fda.jpg">
          </div>
          <div v-show="toggle" class="col-md-6 col-xs-12 offset-1">
            <div class="row"><div class="col-md-8 col-12">
              <a class="text-left" @click="downloadWithAxios(url[0])"><i class="fa fa-file" style="font-size:20px;"></i>  Second FDA-Ds Annual</a>
            </div></div>

          </div>



        </div>


      </div>
    </div>




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
    name: 'download',
    data() {
      return {
        toggle: true,
        toggle2: false,
        url:['https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png','https://66.media.tumblr.com/tumblr_m9fywvqJO11rf1r44o1_1280.jpg']
      }
    },
    methods: {
      forceFileDownload(response){
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'file.png') //or any other extension
        document.body.appendChild(link)
        link.click()
      },    
      downloadWithAxios(url){
      axios({
        method: 'get',
        url: url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    }
    },

  }
</script>

<style>
.btn-primary{
  background-color:#1e3f66;
  border:#1e3f66;
}
</style>