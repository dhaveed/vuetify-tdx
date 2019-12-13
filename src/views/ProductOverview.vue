<template>
  <div class="product_overview">
    <ap></ap>
    <breadcrumb></breadcrumb>
    <offer></offer>
    <newsletter></newsletter>
    <contactmodal></contactmodal>
    <commentmodal></commentmodal>
    <reportmodal></reportmodal>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import ap from "@/components/product_overview/AP";
import breadcrumb from "@/components/product_overview/Breadcrumb";
import offer from "@/components/product_overview/Offer";
import newsletter from "@/components/product_overview/Newsletter";
import contactmodal from "@/components/product_overview/ContactModal";
import commentmodal from "@/components/product_overview/CommentModal";
import reportmodal from "@/components/product_overview/ReportModal";
export default {
  name: "ProductOverview",
  components: {
    ap,
    breadcrumb,
    offer,
    newsletter,
    contactmodal,
    commentmodal,
    reportmodal
  },
  methods: {
    sync() {
      console.log("Jquery mounted")
    }
  },
  watch: {
    '$route': 'sync'
  },
  created() {
    this.sync()
  }
};
</script>

<style></style>
