<template>
  <div id="app">
    <!--Loader-->
    <div id="global-loader">
      <img src="./assets/images/loader.svg" class="loader-img" alt="" />
    </div>
    <div v-if="$route.meta.header === 1"><topbar></topbar></div>
    <div v-else-if="$route.meta.header === 3"><topbar2></topbar2></div>
    <div v-else-if="$route.meta.header === 4"><topbar2></topbar2></div>
    <!-- <topbar></topbar> -->
    <router-view />
    <div v-if="$route.meta.header === 1"><Footer></Footer></div>
    <div v-if="$route.meta.header === 3"><Footer></Footer></div>
    <div v-if="$route.meta.header === 4"><Footer></Footer></div>
    <!-- <div v-else-if="$route.meta.header === 3">I'm visible on home page two</div> -->
    <!-- <Footer></Footer> -->
    <!-- Back to top -->
    <a href="#top" id="back-to-top"><i class="fa fa-rocket"></i></a>
  </div>
</template>

<style></style>
<script>
/* eslint-disable no-undef*/
import topbar from "@/components/Topbar";
import topbar2 from "@/components/Topbar2";
import Footer from "@/components/Footer";
export default {
  components: {
    topbar,
    topbar2,
    Footer
  },
  methods: {
    sync() {
      $(document).ready(() => {
        // ______________ Global Loader
        $(window).on("load", function() {
          $("#global-loader").fadeOut("slow");
        });
        // ______________ Back to Top
        $(window).on("scroll", function() {
          if ($(this).scrollTop() > 0) {
            $("#back-to-top").fadeIn("slow");
          } else {
            $("#back-to-top").fadeOut("slow");
          }
        });
        $("#back-to-top").on("click", function() {
          $("html, body").animate(
            {
              scrollTop: 0
            },
            600
          );
          return false;
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
  // mounted(){
  //   localStorage.setItem("reloader", "0");
  // }
};
</script>
