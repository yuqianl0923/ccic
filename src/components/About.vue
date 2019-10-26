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
    <div class="row">
      <div class="col-12">
        <h5 class="theme-blue h5">About CCIC North American Inc.</h5>
        <p>As China Certification and Inspection Group celebrates its establishment since 1980, CCIC North America Inc. also celebrates its entrance into their excellent services since 1990. Throughout these past years, CCIC North America Inc. has grown to become the biggest overseas branch office of China Certification and Inspection Group. Since its establishment, CCIC North America Inc. has been focusing its efforts on developing a regional service network, establishing its company’s recognition in the certification and inspection business, and providing impartial, accurate and swift local services to its global customers.
        <p>The United States is the most influential country in the world in regards to economics and trading. On the other hand, while being the most populated country in the world, China is also the leading economic force among the developing countries. Therefore, international trading between the U.S. and China is rapidly developing, while at the same time the economic growth of China is also constantly expanding. Los Angeles is one of the gateway cities to this expansion. It is one of the vital cities in the U.S. for international trading due to its geographical advantage of being right across the ocean from China’s coastal cities. California is also the world’s eighth largest economic entity. With these factors Los Angeles establishes itself as the center of U.S. and China trade along with its convenient international airport and busy coastal port along the west coast.</p>
        <p>These are the primary factors that led to CCIC North America Inc.’s decision to choose Los Angeles as its headquarters. This decision was also made in contingent with the business requirements of the group companies. After years of operations, CCIC North America has established an important strategic position for Los Angeles in the global marketing strategy of the CCIC Group Company. In addition to its headquarters in Los Angeles, CCIC North America Inc. has also opened its Eastern Office in the City of New York. This decision was made as New York is the largest city in the U.S as well as the nation’s biggest business and finance hub. It is located in the heart of the most important metropolitan area in northeastern United States. Being in New York, the Eastern Office also serves as a direct support to the businesses located along the East Coast of the United States. Our North American companies also work closely with CCIC Chicago, located in the North Central United States, to implement integrated operational and service standards which enable our North American companies to achieve consistent standards of implementation in the heart of the United States at two core areas thereby creating complementary and interactive businesses.  CCIC North America Inc. also started an office in Mexico City of Mexico, mainly focusing on the new arising import and export needs of the local clients. Looking at the potential that Mexico's dynamic and emerging market has, whether it is import or export, we can determine that there are many business opportunities that cannot be underestimated there.</p>
        <p>During the past 29 years, CCIC North America Inc. has made its striving footprints: from a five-person into a team of 102 staff members. Its business volume has steadily grown annually along with a rapid gain of US-Sino trade. CCIC North America Inc. provides its clients with professional inspection services on goods being transported to China and other countries.</p>
        <h5 class="theme-blue h5">The services include:</h5>
        <p class="semi-bold">1. Authorized Pre-shipment Inspection Services:</p>
         <p>Recyclable scrap commodity pre-shipment inspection services authorized by Chinese and Indonesian governments, used electrical and mechanical equipment pre-shipment inspection services authorized by Chinese government.</p>

        <p class="semi-bold">2. Traditional Bulk Commodity Inspection and Appraisal Services:</p>
        <p>Commodityzhemical products by vessel such as fertilizer; minerals such as iron ore, copper concentrate; agricultural products such as soybeans, wheat, and seafood and aqua products.</p>

        <p class="semi-bold">3. Damage Evaluation and Cargo Damage Survey:</p>
        <p>Including mixed metal, building material, packing material, seasonal merchandise like Christmas gifts, and we also provide cargo damage surveys for large retailers such as Wal-Mart.</p>
        <p class="semi-bold">4. Evaluation and Appraisal Services:</p>
        <p>Evaluate and appraise used electrical or mechanical equipment.</p>
        <p class="semi-bold">5. Counseling Services:</p>
        <p>CCC Accreditation and Counseling or Agency for application; ISO-9000 Quality Assurance System accreditation and counseling.<br>
        Compliance, efficiency, quality, accountability, professional integrity and ethics are at the heart of CCIC North America, Inc. We fully utilize electronic management systems to monitor the entire flow of our inspection process: Electronic Management System for Pre-shipment inspection (EPSI) of scrap recycling commodities to China. EPSI enables our customers to apply for inspections worldwide, and makes it very convenient for our clients to check the status of their inspection order with CCIC. When clearing customs at ports of China, customs officials could see our electronic certifications via the electronic management system; it streamlines the customs clearance process.  Impartiality, accuracy and swiftness are the principles and guidelines of CCIC North America, Inc. In the past 29 years we have established a complete and sophisticated quality control system. We have been awarded a global ISO-17020 Certification of Quality Assurance System in 2006. All of our inspectors have obtained certification of inspection in the respective field to ensure the advanced scientific techniques being carried out in inspection and management “Our company focuses on job training, often holding seminars and case studies to train our employees and provide them with opportunities to communicate with one another to learn from each other’s job-site experiences. To increase customer satisfaction with our work, the management team often goes to job sites to supervise operations, discuss with clients face-to-face, understand their needs, provide solutions to issues during the whole process, and make every effort to establish ongoing business relation with them.</p>
        <p>There will be continual growth in business between China and the United States in the future and we hope to work together with you to create a great future for all of us.</p>
</p>
        </div>
      </div> 
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