footer<template>
  <!--Footer Section-->
  <section>
    <footer class="footer-bg">
      <div class="footer-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-12">
              <router-link to="/Home">
                <img
                  src="../assets/images/brand/logosmall.png"
                  class="img-responsive footer-logo"
                  alt="Site logo"
                  style="margin-bottom: 1rem, width: 120px"
                />
              </router-link>
              <hr
                class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ul class="apps-donwloads">
                <li style="display: inline-block; margin: 0 4px 4px 0;">
                  <a href="#"
                    ><img src="../assets/images/appstore.png" alt="Android App"
                  /></a>
                </li>
                <li style="display: inline-block; margin: 0 4px 4px 0;">
                  <a href="#"
                    ><img src="../assets/images/googleplay.png" alt="IOS App"
                  /></a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-12">
              <h6>Follow Us</h6>
              <hr
                class="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <ul class="list-unstyled mb-0">
                <li class="contact-us-tx">
                  <a
                    class="Facebook btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"
                    href="#"
                  >
                    <i class="fa fa-facebook bg-facebook"></i> </a
                  ><span><a href="#">Facebook</a></span>
                </li>
                <li class="contact-us-tx">
                  <a
                    class="Twitter btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"
                    href="#"
                  >
                    <i class="fa fa-twitter bg-info"></i> </a
                  ><span><a href="#">Twitter</a></span>
                </li>
                <li class="contact-us-tx">
                  <a
                    class="Linkedin btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"
                    href="#"
                  >
                    <i class="fa fa-linkedin bg-linkedin"></i> </a
                  ><span><a href="#">Linkedin</a></span>
                </li>
                <li class="contact-us-tx">
                  <a
                    class="Google btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"
                    href="#"
                  >
                    <i class="fa fa-instagram bg-instagram-tx"></i> </a
                  ><span><a href="#">Instagram</a></span>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-12">
              <h6>Quick Links</h6>
              <hr
                class="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <ul class="list-unstyled mb-0">
                <li><a href="javascript:;">Home</a></li>
                <li><a href="javascript:;">About Us</a></li>
                <li><a href="javascript:;">Contant Us</a></li>
                <li><a href="javascript:;">FAQ</a></li>
                <li><a href="javascript:;">Regions</a></li>
                <li><a href="javascript:;">Terms</a></li>
              </ul>
            </div>
            <div class="col-lg-5 col-md-12">
              <h6>Subscribe</h6>
              <hr
                class="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <p>
                We may send you information about related events, webinars,
                products and services which we believe.
              </p>
              <div class="clearfix"></div>
              <div class="input-group w-100">
                <input
                  type="text"
                  class="form-control form-control-tx br-tl-3  br-bl-3 footer-input"
                  placeholder="Email"
                />
                <div class="input-group-append ">
                  <button
                    type="button"
                    class="btn btn-primary br-tr-3  br-br-3 footer-subscribe"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div>
                <ul class="footer-payments" style="margin-top: 27px;">
                  <li class="pl-0" style=" width: 105px;">
                    <a href="javascript:;"
                      ><img src="../assets/images/Interswitch Logo.svg"
                    /></a>
                  </li>
                  <li style=" width: 120px;">
                    <a href="javascript:;"
                      ><img src="../assets/images/paystack-02.jpg"
                    /></a>
                  </li>
                  <li style=" width: 80px!important;">
                    <a href="javascript:; "
                      ><img src="../assets/images/varve-logo-2.png"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-tx"
                        src="../assets/images/visa_card.png"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-tx"
                        src="../assets/images/master_card.png"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="text-center payment-card-spacing-tx">
            <div class="mt-0">
              Copyright © 2019
              <a
                href="#"
                class="fs-14 text-primary-tx"
                style="color: #4CAF50 !important;"
                >Tradexplora</a
              >. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  <!--/Footer Section-->
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
