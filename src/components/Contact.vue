<template> 
  <div id="contact"> 
    <section class="bg-dark text-light header-inner p-0 jarallax position-relative" data-jarallax data-speed="0.2" data-overlay>
      <img src="static/img/contact-topbanner.jpg" alt="Image" class="jarallax-img opacity-100">
      <div class="container py-0">
        <div class="row my-4 my-md-6" data-aos="fade-up">
          <div class="col-lg-9 col-xl-8">
            <h1 class="display-4">Get In Touch</h1>
            <p class="lead mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </div>
        </div>
      </div>
      <div class="divider">
        <img src="static/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h1">Reaching CCICNA</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h4 class="h4">Headquarters of CCICNA</h4>
              <p>8835 Haven Ave., Rancho Cucamonga, CA 91730, USA</p>
              <p>T +1-909-989-8802</p>
              <p>F +1-909-989-6903</p>
              <p>ccicna@ccicna.com</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h4 class="h4">Office Hour</h4>
              <p>9:00am to 5:00pm U.S Pacific Time</p>
              <h4 class="h4">Main Line</h4>
              <p>T +1909-989-8802</p>
              <h4 class="h4">Customer Service</h4>
              <p>Inspection on Used-Equipment</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h4 class="h4">Eastern Office of CCICNA</h4>
              <p>833-38 Haven Ave., Rancho Cucamonga, CA 91730, USA</p>
              <p>T +1-909-989-8802</p>
              <p>F +1-909-989-6903</p>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h4 class="h4">Eastern Office of CCICNA</h4>
              <p>833-38 Haven Ave., Rancho Cucamonga, CA 91730, USA</p>
              <p>T +1-909-989-8802</p>
              <p>F +1-909-989-6903</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="text-center mb-4">
              <h4 class="h4">Eastern Office of CCICNA</h4>
              <p>833-38 Haven Ave., Rancho Cucamonga, CA 91730, USA</p>
              <p>T +1-909-989-8802</p>
              <p>F +1-909-989-6903</p>
              <p>ccicna@ccicna.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h1">Send Us message</h2>
            </div>
            <form action="/forms/smtp.php" data-form-email novalidate>
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
                  <button type="submit" class="btn btn-primary btn-loading" data-loading-text="Sending">
                    <img class="icon" src="static/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                    <span>Send Enquiry</span>
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
  import { butter } from '@/buttercms'
  export default {
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

</style>