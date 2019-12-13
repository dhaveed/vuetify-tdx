<template>
<!--Start Section-->
<!-- <section class="owl-carousel" id="banner"> -->
<section>
  <div class="banner-1 cover-image sptb-2 sptb-tab bg-background2" data-image-src="../assets/images/banners/buyairtime.jpg">
    <div class="header-text mb-0">
      <div class="container">
        <div class="text-center text-white mb-7">
          <!-- <h1 class="mb-1">All you want in one place</h1>
          <p>Join the strong Tradexplora community and never worry about ad search anymore.</p> -->
        </div>
        <div class="row">
          <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
            <div class="search-background bg-transparent">
              <div class="form row no-gutters ">
                <!-- <div class="col-xl-1 col-lg-2"></div> -->
                <div class="form-group  col-xl-5 col-lg-5 col-md-12 mb-0  ">
                  <input type="text" class="form-control input-lg br-tr-md-0 br-br-md-0 main-search" id="text4" placeholder="What are you looking for?">
                  <span><i class="fa fa-bullhorn location-gps mr-1"></i></span>
                </div>
                <div class="form-group  col-xl-4 col-lg-4 col-md-12 mb-0  ">
                    <input type="text" class="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="Location">
                    <span><i class="fa fa-map-marker location-gps mr-1"></i></span>
                  </div>
                <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg  mb-0 ">
                  <select class="form-control select2-show-search  border-bottom-0 select-home-page" data-placeholder="Property Type" >
                    <optgroup label="Categories">
                      <option >Category</option>
                      <option value="1">Phones & Tablets</option>
                      <option value="2">Real Estate</option>
                      <option value="3">Electronics</option>
                      <option value="4">Fashion</option>
                      <option value="5">Jobs</option>
                      <option value="6">Health</option>
                      <option value="7">Agriculture</option>
                    </optgroup>
                  </select>
                </div>
                
                
                <div class="col-xl-1 col-lg-1 col-md-1 mb-0">
                  <a href="#" class="btn btn-lg tx-btn-color br-tl-md-0 br-bl-md-0 main-search-button"><i class="fa fa-search"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- /header-text -->
  </div>
 <!--  <div class="banner-1 cover-image sptb-2 sptb-tab bg-background2" data-image-src="../assets/images/banners/getthebest.jpg">
    <div class="header-text mb-0">
      <div class="container">
        <div class="text-center text-white mb-7">
        </div>
        <div class="row">
          <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
            <div class="search-background bg-transparent">
              <div class="form row no-gutters ">
                <div class="form-group  col-xl-5 col-lg-5 col-md-12 mb-0  ">
                  <input type="text" class="form-control input-lg br-tr-md-0 br-br-md-0 main-search" id="text4" placeholder="What are you looking for?">
                  <span><i class="fa fa-bullhorn location-gps mr-1"></i></span>
                </div>
                <div class="form-group  col-xl-4 col-lg-4 col-md-12 mb-0  ">
                    <input type="text" class="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="Location">
                    <span><i class="fa fa-map-marker location-gps mr-1"></i></span>
                  </div>
                <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg  mb-0 ">
                  <select class="form-control select2-show-search  border-bottom-0 select-home-page" data-placeholder="Property Type" >
                    <optgroup label="Categories">
                      <option >Category</option>
                      <option value="1">Phones & Tablets</option>
                      <option value="2">Real Estate</option>
                      <option value="3">Electronics</option>
                      <option value="4">Fashion</option>
                      <option value="5">Jobs</option>
                      <option value="6">Health</option>
                      <option value="7">Agriculture</option>
                    </optgroup>
                  </select>
                </div>
                
                
                <div class="col-xl-1 col-lg-1 col-md-1 mb-0">
                  <a href="#" class="btn btn-lg tx-btn-color br-tl-md-0 br-bl-md-0 main-search-button"><i class="fa fa-search"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</section>
<!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "start",
  methods: {
    sync() {
      $(document).ready(() => {
        // ______________ Cover-image
        $(".cover-image").each(function() {
          var attr = $(this).attr("data-image-src");
          if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background", "url(" + attr + ") center center");
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
