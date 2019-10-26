<template>
  <div id="service">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="row"><button type="button" class="btn btn-primary" v-on:click="toggle=true,toggle2=false,toggle3=false,toggle4=false">
          {{title-1}}</button></div><br>
          <div class="row"><button type="button" class="btn btn-primary" v-on:click="toggle2=true,toggle=false,toggle3=false,toggle4=false">{{title-2}}</button></div><br>
          <div class="row"><button type="button" class="btn btn-primary" v-on:click="toggle3=true,toggle=false,toggle2=false,toggle4=false">{{title-3}}</button></div><br>
          <div class="row"><button type="button" class="btn btn-primary" v-on:click="toggle4=true,toggle3=false,toggle2=false,toggle=false">{{title-4}}</button></div>
        </div>


        <div class="col-8" v-show="toggle">
          <h5 class="h5 theme-blue">Qualification</h5>
          <p>The application should have the AQSIQ license(LICENCE of REGISTRATION FOR OVERSEAS SUPPLIER ENTERPRISE OF IMPORTED SOLID WASTES AS RAW MATERIALS), and set up a local customer account with CCIC NA.</p>
          <h5 class="h5 theme-blue">Region</h5>
          <p>USA, Mexico, and Central America</p>
          <h5 class="h5 theme-blue">Commodities and Types</h5>
          <p>Ferrous Scrap<span class="pl-6">+</span></p>
          <hr>
          <p>Noferrous Scrap</p>
          <hr>
          <p>Plastic Scrap</p>
          <hr>
          <p>Mixed Metal Scrap</p>
          <hr>
          <p>Recovered Paper</p>
          <hr>
          <p>TEXTILE Waste</p>
          <hr>
          <p>Slag from Manufacture of Iron and Steel</p>
          <hr>
        </div>


        <div class="col-8" v-show="toggle2">
        <h5 class="h5 theme-blue">Inspection standard</h5>
  
            <div class="row"><div class="col-md-12 col-12">
              <a class="text-left" @click="downloadWithAxios(url[0])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.4-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and Scrap of paper or paperboard</a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[1])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.4-2017 进口可用作原料的固体废物环境保护控制标准—废纸或纸板</a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.6-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and scrap of iron and steel</a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.6-2017 进口可用作原料的固体废物环境保护控制准—废钢铁</a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.7-2005 Environmental protection control standard for imported solid wastes as raw materials-Waste and scrap of nonferrous metal scraps</a>
            </div></div>
            <div class="row"><div class="col-md-12 col-12">
              <a @click="downloadWithAxios(url[2])"><i class="fa fa-file" style="font-size:20px;"></i>  GB16487.7-2017 进口可用作原料的固体废物环境保护控制标准—废有色金属</a>
            </div></div>
          <br>
        </div>

        <div class="col-8" v-show="toggle3">
         <h5 class="h5 theme-blue">Basic Inspection Rate</h5>
        <p>Commodity Minimum charge (US $ / Certificate) Basic Inspection Rate (US $ / Container)
        Metal Scrap 151.50  111.50
        Waste Paper 151.50  71.50</p>


        <h5>A.  Basic Inspection Rate: </h5>

        <p>The above rates will be charged on the actual quantity (No. of containers) issued on each certificate (abstracted by a notice from China Certification & Inspection (Group)Co., ltd. Dated Oct 10, 2006)</p>
        <h5>B.  Extra charges below will be applied:</h5>
        <p>1) Inspection conducted as per request on weekdays (Monday-Friday) other than the normal business hours (9:00 a.m. – 5:00 p.m.) will be by appointment, customer needs to make his/her appointment in advance.  If supervision ofloading is required, normal supervision of loading charge of $60/hr. will be applied.</p>
        <p>2) The labor charge of inspection conducted as per request on Saturday & Sunday will be 1.5 times of the hourly inspection rates ($60/hr X 1.5 = $90/hr); 2 times hourly inspection rates ($60/hr X 2 = $120/hr.) will be applied if inspection is conducted on official holidays.</p>
        <p>3) If inspector arrives at the inspection site on a prior agreed time with applicant or supplier, cost of waiting will be charged at $60 per waiting hour. A whole hour waiting time will be charged for a fraction of a waiting hour.</p>
        <p>4)  Due to incorrect information provided by applicant (e.g.time, inspection site, etc.) that causes to have a second inspection, the applicant will be charged the standard mileage rate of  $0.58/mile (in 2019) which is subject to adjustment according to the Standard Mileage Rate for Business announced by the Internal Revenue Service Annually plus the labor cost ($60/hour) for the initial inspection.</p>
        <p>5)  If the inspector arrives at the inspection site as agreed with the applicant/supplier but no inspection is done due to incorrect information (e.g. inspection site, materials not ready, etc.), applicant will be charged half of the inspection fees based on the declared quantity of the application.</p>
        <p>6) If the applicant fails with the inspection with no CCIC certificate issued, applicant will be charged half of the inspection fees based on the declared quantity of the application.</p>
        <p>7) When on-site inspection is applied and passed, the applicant shall load the materials within 30 days.  If for any reason the applicant does not request for issuing of a certificate within this 30-day period, the inspection will be considered as void and no certificate will be issued. Applicant will be charged half of the inspection fees based on the declared quantity of the application.</p>
        <p>8) If applicant fails with the initial inspection and second inspection needs to be re-arranged, re-inspection will be treated as a new application.</p>
        <p>9) When inspection cannot be completed by just visual inspection method and samples have to be sorted and delivered to the laboratory for testing, all the costs incurred will be borne by the applicant.</p>
        <p>10) During the inspection, any charges requested by supplier, e.g. transportation of materials, opening of bales and re-baling, etc. will be borne by the applicant.</p>
        <p>11) If the inspection method of Loading Supervision is used, the applicant will be responsible for all expenses incurred for the inspection, including but not limited to business travel expenses (according to actual expenses) or mileage fee (in 2015, the rate is $0.575/mile and the rate is subject to adjustment according to the Standard Mileage Rate for Business announced by the Internal Revenue Service Annually, overtime and/or waiting time expense ($60/hour) and inspection fee (basic inspection rate).</p>

        <h5>C. Other processing fees:</h5>

        <p>1) The labor charge of inspection conducted as per request on Saturday, Sunday and hours other than the normal business hours (9:00 a.m. - 5:00 p.m.) will be 1.5 times of the hourly inspection rates ($60/hr X 1.5 = $90/hr); 2 times hourly inspection rates ($60/hr X 2 = $120/hr) will be applied if inspection is conducted on official holidays</p>
        <p>2) If the applicant needs to have reasonable change in the charge of other reasonable revisions on already confirmed certificate draft is $20.</p>
        <p>3) Normally, when an application is accepted by CCIC North America Inc, actual inspection will be performed at an agreed appointed working date within 45 days. If the inspection is not able to be performed within 45 days due to reasons of the applicant/supplier, the application will be cancelled automatically without notice and the applicant will be charged $20 per application for the processing or cancellation fee. In the case that the applicant wishes to resume the inspection, a new application for inspection has to be resubmitted.</p>
        <h5>D. Fees for Inputting Application into E-PSI System (effective Dec. 1, 2006)</h5>
        <p>4) A $20 processing fee per application will be charged for inputting application data into E-PSI system on behalf of applicants who are still sending their applications by fax.
        </p>
        </div>



        <div class="col-8" v-show="toggle4">
          <h5 class="h5 theme-blue">Inspection Rate</h5>
          <p>PSI system for applying inspections:</p>
          <p>1.  http://psi.cnca.cn/CCICProjectWeb/</p>
          <p>2.  http://psi1.cnca.cn/CCICProjectWeb/</p>
          <p>3.  http://psi2.cnca.cn/CCICProjectWeb/</p>
          </p>
        </div>



      </div>
    </div>
    <Form contactA="Sarah T +1-909-989-8802 ext.124" contactB="Ed T +1-909-989-8802 ext.160 M ed@ccicna.com" contactC="Monica T +1-909-989-8802 ext.116 M ed@ccicna.com" contactD="Fion T +1-909-989-8802 ext.129 M fion@ccicna.com"></Form>
</div>
</template>


<script>
  import Form from './Form.vue';
  import { Carousel, Slide } from 'vue-carousel';
  import NavigationBarBlack from './NavigationBarBlack.vue';
  import description from './description.vue';
  import CustomerSay from './CustomerSay.vue';
  import { butter } from '@/buttercms';
  export default {

  components: {
    Carousel,
    Slide,
    NavigationBarBlack,
    description,
    Form,
    CustomerSay,
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
  name: 'services',
    data() {
      return {  
        toggle: true,
        toggle2: false,
        toggle3: false,
        url:['https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png','https://66.media.tumblr.com/tumblr_m9fywvqJO11rf1r44o1_1280.jpg'],
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
  .example-slide {
    width:100%;
    align-items: center;
    font-size: 1.25rem;
    justify-content: center;
    background-size: cover;/* Resize the background image to cover the entire container */
  }
  .btn-primary{
    background-color:#1e3f66;
    border:#1e3f66;
    width:200px;
}
</style>