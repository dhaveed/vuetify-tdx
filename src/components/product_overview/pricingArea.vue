<template>
  <div class="pricing-area">
    <div class="col-md-8 col-xs-12 col-sm-8">
      <div class="heading-zone">
        <h1>2017 Maserati Ghibli SQ4 Blue</h1>
        <div class="short-history">
          <nav
            aria-label="breadcrumb"
            class="d-none d-sm-none d-md-none d-lg-block d-xl-block"
          >
            <ol class="breadcrumb breadcrumb-tx arrowed mt-2 mb-2">
              <li class="breadcrumb-item">
                <a href="https://buy.cars45.com/">Home</a>
              </li>

              <li class="breadcrumb-item">
                <a href="https://buy.cars45.com/ford">Ford</a>
              </li>

              <li class="breadcrumb-item">
                <a href="https://buy.cars45.com/ford-edge">Edge</a>
              </li>

              <li class="breadcrumb-item active">
                2017 Maserati Ghibli SQ4 Blue
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-4 detail_price col-xs-12">
      <div class="singleprice-tag">
        NGN 64,500<span class="">(Negotiable)</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "pricingArea",
  methods: {
    sync() {
      $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
          items: 5,
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 5,
              nav: true
            }
          }
        });
      });
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style></style>
