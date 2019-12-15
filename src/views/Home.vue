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
