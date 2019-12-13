<template>
  <div id="app">
    <!--Loader-->
    <div id="global-loader">
      <img src="./assets/images/loader.svg" class="loader-img" alt="" />
    </div>
    <topbar></topbar>
    <router-view />
    <Footer></Footer>
    <!-- Back to top -->
		<a href="#top" id="back-to-top" ><i class="fa fa-rocket"></i></a>
  </div>
</template>

<style></style>
<script>
/* eslint-disable no-undef*/
import topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
export default {
  components: {
    topbar,
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
};
</script>
