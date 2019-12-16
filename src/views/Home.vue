<template>
  <div class="home">
    <start></start>
    <categories></categories>
    <sptb></sptb>
    <sptb_white></sptb_white>
    <sptb_pattern></sptb_pattern>
    <total_sellers></total_sellers>
    <testimonial></testimonial>
    <recent_post></recent_post>
  </div>
</template>

<script>
require("../assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
require("../assets/css/style.css");
require("../assets/css/icons.css");
require("../assets/plugins/horizontal-menu/horizontal.css");
require("../assets/plugins/select2/select2.min.css");
require("../assets/plugins/cookie/cookie.css");
require("../assets/plugins/owl-carousel/owl.carousel.css");
require("../assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
require("../assets/skins/color-skins/color15.css");
require("../assets/css/flaticon24d2c.css");
require("../assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick.css");
require("../assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick-theme.css");
require("../assets/carspot-css/wp-content/themes/carspot/footerSpecial.css");


import start from "@/components/home/Start";
import categories from "@/components/home/Categories";
import sptb from "@/components/home/SPTB";
import sptb_white from "@/components/home/SPTB-White";
import sptb_pattern from "@/components/home/SPTB-Pattern";
import total_sellers from "@/components/home/TotalSellers";
import testimonial from "@/components/home/Testimonial";
import recent_post from "@/components/home/RecentPost";
export default {
  name: "home",
  components: {
    start,
    categories,
    sptb,
    sptb_white,
    sptb_pattern,
    total_sellers,
    testimonial,
    recent_post
  },
  methods: {
    sync() {
      console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
    this.$forceUpdate();
  },
  beforeCreate() {
    console.log("this is before created");
  },
  beforeMount() {
    console.log("this is before mounted");
  },
  mounted() {
    if (localStorage.getItem("reloader") === 1) {
      // localStorage.removeItem("reloader")
      location.reload();
    } else if (localStorage.getItem("reloader") === 0) {
      // localStorage.setItem("reloader", "0")
      // location.reload();
    }
  }
};
</script>
