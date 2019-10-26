<template> 
  <div id="contact"> 
    <NavigationBarBlack/>
      <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :loop="true" class="pt-7">
        <slide style="background-image:url(static/img/contact-topbanner.jpg)" class="jarallax-img opacity-100 example-slide">
          <description title="Contact Us"></description>
        </slide>
      </carousel> 
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h2 class="h1 theme-blue">Reaching CCICNA</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h5 class="h5 theme-blue">Headquarters of CCICNA</h5>
              <p>8835 Haven Ave., Rancho Cucamonga, CA 91730, USA</p>
              <p>T +1-909-989-8802</p>
              <p>F +1-909-989-6903</p>
              <p>ccicna@ccicna.com</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h5 class="h5 theme-blue">Office Hour</h5>
              <p>9:00am to 5:00pm U.S Pacific Time</p>
              <h5 class="h5 theme-blue">Main Line</h5>
              <p>T +1909-989-8802</p>
              <h5 class="h5 theme-blue">Customer Service</h5>
              <p>Inspection on Used-Equipment<br>or Other Services:</p>
              <p>Inspection on Scraps:</p>
              <h5 class="h5 theme-blue">Inspection Department</h5>
              <h5 class="h5 theme-blue">Certificate Department</h5>
              <h5 class="h5 theme-blue">Accounting Department</h5>
              <h5 class="h5 theme-blue">Quality Suoervision and Management Department</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h5 class="h5 theme-blue">Eastern Office of CCICNA</h5>
              <p>33-38 Farrington Street, Suite 3D, Flusing, NY 11354</p>
              <p>T +1-718-886-8003</p>
              <p>F +1-718-886-8004</p>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h5 class="h5 theme-blue">CCIC Chicago Inc.</h5>
              <p>1280 Iroquois Ave., Suite 208, Naperville, IL 60563</p>
              <p>T +1-630-718-1229</p>
              <p>F +1-630-718-1259</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-left mb-4">
              <h5 class="h5 theme-blue">Mexico Office of CCICNA</h5>
              <p>Adolfo Prieto #215-A, Col. Del Valle, Delg. Benito Juarez, CDMX 03100</p>
              <p>T +52-55-5682-5662</p>
              <p>F +52-55-5536-4287</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div style="background-color:#f5f5f5">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-left mb-4">
              <h2 class="h1 theme-blue text-center">Contact Us</h2>
            </div>
            <form action="https://formspree.io/xogzjrkx" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input name="contact-name" type="text" class="form-control" required>
                    <div class="invalid-feedback">
                      Please type your name.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email Address *</label>
                    <input name="contact-email" type="email" placeholder="you@yoursite.com" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Company Name</label>
                    <input name="contact-company" type="text" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Contact Number</label>
                    <input name="contact-phone" type="tel" class="form-control" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Message:</label>
                    <textarea class="form-control" name="contact-message" rows="10" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE"></div>
                </div>
                <div class="col">
                  <div class="d-none alert alert-success" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div class="d-none alert alert-danger" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                  <button type="submit" class="pl-3 pr-3 mx-auto btn btn-primary btn-loading" data-loading-text="Sending" style="display:block;">
                    <img class="icon" src="static/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
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
    name: 'contact',
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