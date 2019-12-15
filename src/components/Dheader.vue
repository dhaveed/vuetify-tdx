<template>
  <div class="header-main">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-sm-4 col-6">
            <div class="top-bar-left d-flex">
              <div class="clearfix"></div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
            <div class="top-bar-right">
              <ul class="custom">
                <li>
                  <a
                    routerLink="/register"
                    href="register.html"
                    class="text-dark text-white"
                    ><i class="fa fa-user mr-1"></i> <span>Register</span></a
                  >
                </li>
                <li>
                  <a
                    routerLink="/login"
                    href="login.html"
                    class="text-dark text-white"
                    ><i class="fa fa-sign-in mr-1"></i> <span>Login</span></a
                  >
                </li>
                <li>
                  <a
                    routerLink="/login"
                    href="#"
                    class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                  >
                    POST AN AD</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Topbar-->

    <!-- Header -->
    <div class="horizontal-header clearfix ">
      <div class="container">
        <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
        <span class="smllogo"
          ><img src="../assets/images/brand/tx-logo.png" alt=""
        /></span>
      </div>
    </div>
    <!--/Header -->

    <!--Start Horizontal-main -->
    <div
      class="navbar navbar-default navbar-fixed-top horizontal-main dashboard bg-dark-transparent clearfix"
    >
      <div class="horizontal-mainwrapper container clearfix">
        <nav class="horizontalMenu clearfix d-md-flex">
          <ul class="horizontalMenu-list">
            <li aria-haspopup="true"><a href="about.html"> ABOUT US </a></li>
            <li aria-haspopup="true"><a href="#"> FAQ </a></li>
            <li aria-haspopup="true">
              <a href="contact.html">
                CONTACT US <span class="hmarrow"></span
              ></a>
            </li>
            <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0">
              <!-- <span><a class="btn tx-btn-color" href="ad-posts.html">Post Property Ad</a></span> -->
            </li>
          </ul>
        </nav>
        <!--Nav-->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
