<template>
  <div id="customer-page">
  <NavigationBarWhite/>
 <!--banner carousel -->
    <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true">
      <slide style="background-image:url(static/img/slide1.jpg)" class="jarallax-img opacity-100 example-slide">
        <description title="Pre-shipment Inspection" subtitle="Carry out pre-shipment inspection and supervision of loading services on recycling scraps in North America since 1995."></description>
      </slide>
      <slide style="background-image:url(static/img/slide2.jpg)" class="jarallax-img opacity-100 example-slide">
        <description title="Food Production Enterprises HACCP Certification and “Registration” Service" subtitle="Provide related services of food production enterprises “Food Safety Management System (ISO22000/HACCP) Certification"></description>
      </slide>
      <slide style="background-image:url(static/img/slide1.jpg)" class="jarallax-img opacity-100 example-slide"></slide>
      <slide><img v-for="image in page.fields.banner" :src="image.image_carousel" class="jarallax-img opacity-100"></slide>
      <slide><img v-for="image in page.fields.banner" :src="image.image_carousel" class="jarallax-img opacity-100"></slide>
    </carousel>
 <!--end of banner carousel -->
     <div class="container">
      <br>
      <div class="row"> <!--what we do -->
        <div class="cols-6 col-xl-6">
            <img src="static/img/what-we-do.png">
        </div>
        <div class="cols-6 col-xl-6">
          <p>{{ page.fields.long_text1 }}</p>
          <router-link to="/about" class="btn btn-lg border">{{ page.fields.call_to_action1 }}</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
           <h1{{ page.fields.headline2 }}</h1>
        </div>
      </div> <!--end of what we do -->
    <section>
        <div class="container pb-2">
          <div class="row justify-content-center">
            <div class="col text-center">
              <h2 class="theme-blue">Services We Offer</h2>
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5 d-flex">
                  <div class="card card-body bg-primary text-light">
                    <div class="icon-round mb-3 mb-md-4 mx-auto icon bg-white">
                      <img class="icon bg-primary" src="static/img/icons/theme/design/crop.svg" alt="icon" data-inject-svg />
                    </div>
                    <h4>Inspection & Survey</h4>
                    <div class="row">
                      <div class="col-6 text-left"><p class="card-text">Commodity Inspect</p></div>
                      <div class="col-6 text-right"><p class="card-text">Surveying Services</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 text-left"><p class="card-text">Used Equipment</p></div>
                      <div class="col-6 text-right"><p class="card-text">Scrap Materials</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 text-left"><p class="card-text">Pre-shipment Inspect</p></div>
                      <div class="col-6"><p class="card-text">Pre-shipment Inspect</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 text-left"><p class="card-text">Consulting Services</p></div>
                    </div>
                    <router-link to="/preship" class="border ml-7 mr-7 mt-4">View More</router-link>
                  </div>
                </div>
                <!--<div class="ml-5"></div>-->
                <div class="col-md-6 col-lg-5 d-flex">
                  <div class="card card-body bg-primary text-light">
                    <div class="icon-round mb-3 mb-md-4 mx-auto icon bg-white">
                      <img class="icon bg-white" src="assets/img/icons/theme/devices/homepod.svg" alt="icon" data-inject-svg />
                    </div>
                    <h4>Certification Services</h4>
                    <p class="card-text">
                      China Quality Certification Centre(CQC) send delegates long term stationed in CCIC NorthAmerica Inc
                      (CCICNA) to provide convenient local and swift servicesto our customers that include consultation, training
                      and certification.
                    </p>
                    <router-link to="/" class="border ml-7 mr-7">View More</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!--service we offer-->
    </section> <!--end of service we offer-->
      <div class="container pb-5">
        <div class="row justify-content-center"> <!--Feature Services-->
          <h2 class="theme-blue">Feature Services</h2>
        </div>
      </div>
        <!-- row1 -->
        <div class="row ml-4 mr-4 justify-content-center">
          <div class="col theme-blue semi-bold">
            <p>Recycling Scraps</p>
          </div>
          <div class="col theme-blue semi-bold">
            Used Mechanical & Electrical Products
          </div>  
          <div class="col theme-blue semi-bold">
            Metal and Mineral Products Sector
          </div>
        </div>
        <div class="row  ml-4 mr-4 pt-1">
          <router-link to="/preship" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
        </div>
        <div class="row ml-4 mr-4 pt-5">
          <div class="col theme-blue semi-bold">
            Food Production Enterprises HACCP Certification and “Registration” Service
          </div>
          <div class="col theme-blue semi-bold">
            ISO9001 QUALITY MANAGEMENT SYSTEM CERTIFICATION
          </div>  
          <div class="col theme-blue semi-bold">
            Chinese Label Consulting & Certification
          </div>
        </div>
        <div class="row ml-4 mr-4 pt-1">
          <router-link to="/" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
        </div>

        <div class="row ml-4 mr-4 pt-5" v-show="toggle">
          <div class="col theme-blue semi-bold">
            Gafta and FOSFA Superintendent Services
          </div>
          <div class="col theme-blue semi-bold">
            Return Goods Inspection
          </div>  
          <div class="col theme-blue semi-bold">
            Other Services
          </div>
        </div>
        <div class="row ml-4 mr-4 pt-1" v-show="toggle">
          <router-link to="/" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
          <router-link to="/" class="col light-blue">View More</router-link>
        </div>


        <div class="row pt-5 justify-content-center">
        <button type="button" class="btn btn-lg border" @click="toggle=!toggle">View More</button>
        </div>

      </div>

    <div class="p-5 text-secondary" style="background-image:url(static/img/home-world-bk.jpg);"> <!--world-->
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="theme-blue"> For A More Reliable World</h2>
        </div>
        <div class="row justify-content-center">
          <h5 class="light-blue semi-bold-italic">Over 10,000 Satisfied Clients.</h5>
        </div>
        <div class="row justify-content-center">
          <h5 class="semi-bold-italic">We provide impartial, accurate & swift professional services for our customers world wide.</h5>
          <div class="row pt-5 pb-10">
            <div class="col-5" >
              <p class="card-text">Provide the professional services</p>
              <p>Iso/IEC 17020 certificate</p>
              <p>Strong Technical Force</p>
            </div>
            <div class="col-7">
              <p class="card-text">Impartial, accurate & swift professional</p>
              <p>Rich Social Resources</p>
              <p>Members of Gafta and FOSFA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-4 bg-light text-secondary"> <!--Client-->
      <div class="container">
        <div class="row justify-content-center pt-3">
          <h2 class="theme-blue">Clients Speak</h2>
        </div>
        <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true">
          <slide><CustomerSay :des1="customers[0].des1" :name="customers[0].name" :company="customers[0].company"></CustomerSay></slide>
          <slide><CustomerSay :des1="customers[0].des1" :name="customers[0].name" :company="customers[0].company"></CustomerSay></slide>
          <slide><CustomerSay :des1="customers[0].des1" :name="customers[0].name" :company="customers[0].company"></CustomerSay></slide>
        </carousel>
      </div>
    </div>
  </div>
</template>


<script>
  import { Carousel, Slide } from 'vue-carousel';
  import NavigationBarWhite from './NavigationBarWhite.vue';
  import description from './description.vue';
  import CustomerSay from './CustomerSay.vue';
  import { butter } from '@/buttercms';
  export default {
  components: {
    Carousel,
    Slide,
    NavigationBarWhite,
    description,
    CustomerSay
  },
  props: {
    numSlides: {
      type: Number,
      default: 5
    },
    itemsPerPageCssStyle: {
      type: String,
      default: "slider5buckets"
    }
  },
  name: 'home',
    data() {
      return { 
        toggle: false,     
        page: {
          fields: {}
        }, 
        customers:[{des1:"All the communications and interactions with CCIC North Amercia Inc. The process was very smooth and timely. Thank you.", name: 'Terry Chambers',company:'The Timken Co'},{des1: 2, name: 'Terry Chambers',company:'The Timken Co'},{des1: 3, name: 'erry Chambers',company:'The Timken Co'}]
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
  .example-slide {
    position:relative;
    width:100%;
    align-items: center;
    font-size: 1.25rem;
    justify-content: center;
    background-size: cover;/* Resize the background image to cover the entire container */
  }


</style>