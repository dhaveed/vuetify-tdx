<template>
  <div class="referal">
    referal page from imm
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

export default {
  name: "referal",
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
  },
  beforeCreate() {
    console.log("this is before created");
  },
  beforeMount() {
    console.log("this is before mounted");
  }
};
</script>
