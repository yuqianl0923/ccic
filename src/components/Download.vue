<template> 
  <div id="download"> 
    <NavigationBarBlack/>
    <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true" class="pt-7">
      <slide style="background-image:url(static/img/download-topbanner.jpg)" class="jarallax-img opacity-100 example-slide">
        <description title="Download Files"></description>
      </slide>
    </carousel> 


    <div id="app-forms">
      <div class="container">
        <div class="row pt-6">

          <div class="col-md-3 col-12 pt-md-3">
            <div class="row"><button class="btn  btn-sm border" v-on:click="toggle=true,toggle2=false">Application Forms</button></div>
            <br>
            <div class="row"><button class="btn pl-5 pr-5 btn-sm border" v-on:click="toggle2 = true,toggle=false">Standard</button></div>
          </div>

          <div v-show="toggle" class="col-md-6 col-xs-12 offset-md-2">
            <p class="theme-blue semi-bold">Pre-shipment Inspection on Scrap Materials Shipping to China as Raw Materials</p>
            <div class="row"><div class="col-md-8 col-12">
              <a class="text-left" @click="downloadWithAxios(url[0])"><i class="fa fa-file" style="font-size:20px;"></i>  Notice for Inspection Application</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-8 col-12">
              <a @click="downloadWithAxios(url[1])"><i class="fa fa-file" style="font-size:20px;"></i>  Inspection Application Form</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-8 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  Report for Unqualified Commodities</a>
            </div></div>
            <div class="row"><div class="col-md-8 col-12"><router-link to="/contact" class="btn btn-primary btn-loading mt-2">For more information, please contact us.</router-link><hr></div></div>

            <p class="theme-blue semi-bold">Pre-shipment Inspection on Used Mechanical and Eletrical Products</p>
            <div class="row"><div class="col-md-12 col-12">
              <a class="text-left" @click="downloadWithAxios(url[0])"><i class="fa fa-file" style="font-size:24px;"></i>  Application Form </a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-10 col-12">
              <a @click="downloadWithAxios(url[1])"><i class="fa fa-file" style="font-size:20px;"></i>  Inspection Application Form </a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-10 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  Report for Unqualified Commodities </a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12"><router-link to="/contact" class="btn btn-primary btn-loading mt-2">For more information, please contact us.</router-link></div></div>
          </div>



          <div v-show="toggle2" class="col-md-6 offset-md-2">
            <p class="theme-blue semi-bold">Pre-shipment Inspection on Scrap Materials Shipping to China as Raw Materials</p>
            <div class="row"><div class="col-md-12 col-12">
              <a class="text-left" @click="downloadWithAxios(url[0])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.4-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and Scrap of paper or paperboard</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[1])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.4-2017 进口可用作原料的固体废物环境保护控制标准—废纸或纸板</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.6-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and scrap of iron and steel</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.6-2017 进口可用作原料的固体废物环境保护控制准—废钢铁</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.7-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and scrap of nonferrous metal scraps</a>
            </div></div>
            <br>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.7-2017 进口可用作原料的固体废物环境保护控制标准—废有色金属</a>
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