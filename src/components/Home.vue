<template>
  <div id="customer-page">
 <!--banner carousel -->
 <img v-for="image in page.fields.banner" :src="image.image_carousel" class="jarallax-img opacity-40">

  <img src="static/img/inner-6.jpg" alt="Image" class="jarallax-img opacity-40">

 <!--end of banner carousel -->
     <div class="container">
      <br>
      <div class="row"> <!--what we do -->
        <div class="cols-12 col-xl-6">
          <figure>
            <img :src="page.fields.image1">
          </figure>
        </div>
        <div class="col">
          <p>{{ page.fields.long_text1 }}</p>
          <button type="button" class="btn btn-lg btn-primary-3">{{ page.fields.call_to_action1 }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
           <h1{{ page.fields.headline2 }}</h1>
        </div>
      </div> <!--end of what we do -->
    <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              <h2>Services We Offer</h2>
              <div class="row">
                <div class="col-md-6 col-lg-4 d-flex">
                  <div class="card card-body">
                    <div class="icon-round mb-3 mb-md-4 bg-primary">
                      <img class="icon bg-primary" src="assets/img/icons/theme/design/crop.svg" alt="icon" data-inject-svg />
                    </div>
                    <h4>Inspection Survey</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <a href="#">View More</a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 d-flex">
                  <div class="card card-body bg-primary text-light">
                    <div class="icon-round mb-3 mb-md-4 icon bg-white">
                      <img class="icon bg-white" src="assets/img/icons/theme/devices/homepod.svg" alt="icon" data-inject-svg />
                    </div>
                    <h4>Certification Services</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <a href="#">View More</a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 d-flex">
                  <div class="card card-body bg-primary text-light">
                    <div class="icon-round mb-3 mb-md-4 icon bg-white">
                      <img class="icon bg-white" src="static/assets/img/icons/theme/devices/homepod.svg" alt="icon" data-inject-svg />
                    </div>
                    <h4>CCC Mark Services</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <a href="#">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!--service we offer-->
    </section> <!--end of service we offer-->
      <div class="container">
        <div class="row justify-content-center"> <!--Feature Services-->
          <h2>Feature Services</h2>
        </div>
        <!-- row1 -->
        <div class="row" style="padding-top:30px;">
          <div class="col">
            Recycling Scraps Inspection
          </div>
          <div class="col">
            Used Mechanical & Electrical products
          </div>  
          <div class="col">
            Metal and Mineral Products Sector
          </div>
        </div>
        <div class="row" style="padding-top:10px;">
          <div class="col"><a href="#">View More</a></div>
          <div class="col"><a href="#">View More</a></div>
          <div class="col"><a href="#">View More</a></div>
        </div>
        <!-- row2 -->
        <div class="row" style="padding-top:60px;">
          <div class="col">
            Import & Export Commodities
          </div>
          <div class="col">
            Animal & Plant Inspection and Quarantine
          </div>  
          <div class="col">
            Chinese Label Consulting & Certification
          </div>
        </div>
        <div class="row" style="padding-top:10px;">
          <div class="col"><a href="#">View More</a></div>
          <div class="col"><a href="#">View More</a></div>
          <div class="col"><a href="#">View More</a></div>
        </div>
      </div>
    </div>
    <div class="pb-4 bg-light text-secondary"> <!--world-->
      <div class="container">
        <div class="row justify-content-center" style="padding-top:30px;">
          <h2> For A More Reliable World</h2>
        </div>
        <div class="row justify-content-center">
          <p>Over 10,000 Satisfied Clients.</p>
        </div>
        <div class="row justify-content-center">
          <p>We provide impartial, accurate & swift professional services for our customers world wide.</p>
        </div>
      </div>
    </div>
    <div class="pb-4 bg-light text-secondary"> <!--Client-->
      <div class="container">
      <div class="row justify-content-center" style="padding-top:30px;">
        <h2>Clients Speak</h2>
      </div>
      <div class="row justify-content-center">
        <p>All the communications and interactions with CCIC North America Inc. were very professional.</p>
      </div>
      <div class="row justify-content-center">
        <p>The process was very smooth and timely. Thank you.</p>
      </div>
      <br>
      <div class="row justify-content-center">
        <p>Terry Chambers</p>
      </div>
      <div class="row justify-content-center">
        <p>The Timken Co</p>
      </div>
      </div>
    </div>
    </div>
</template>


<script>
  import { butter } from '@/buttercms';
  export default {
    name: 'customer-page',
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
  div#world{
    background-image:url(`"`+{{page.fields.image1}}+`"`)
  }
</style>