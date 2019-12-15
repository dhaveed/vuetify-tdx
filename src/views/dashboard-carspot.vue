<template>
<div class="dashboard-carspot">
    <!--Topbar-->
<div class="header-main">
        <div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-sm-4 col-6">
                        <div class="top-bar-left d-flex">
                            <div class="clearfix">
                            </div>
                            <div class="clearfix">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
                        <div class="top-bar-right">
                            <ul class="custom">
                                <li>
                                    <a routerLink="/register" href="register.html" class="text-dark text-white"><i class="fa fa-user mr-1"></i> <span>Register</span></a>
                                </li>
                                <li>
                                    <a routerLink="/login" href="login.html" class="text-dark text-white"><i class="fa fa-sign-in mr-1"></i> <span>Login</span></a>
                                </li>
                                <li>
                                    <a routerLink="/login" href="#" class="btn btn-tx btn-theme text-dark post-ad-header-tx"> POST AN AD</a>
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
                <span class="smllogo"><img src="../assets/images/brand/tx-logo.png" alt=""/></span>
                <!-- <i href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a> -->
                
            </div>
            
        </div>
        <!--/Header -->
    
        <!--Start Horizontal-main -->
        <div class="navbar navbar-default navbar-fixed-top horizontal-main dashboard bg-dark-transparent clearfix">
            <div class="horizontal-mainwrapper container clearfix">
                
                <!-- <div class="desktoplogo-1" >
                    <a href="index.html"><img src="../assets/images/brand/tradexplora-main.svg" alt=""></a>
                </div> -->
                <!--Nav-->
                <nav class="horizontalMenu clearfix d-md-flex">
                    <!-- <div class="desktoplogo" >
                        <a href="index.html"><img src="../assets/images/brand/tradexplora-main.svg" alt=""></a>
                    </div> -->
                    <ul class="horizontalMenu-list">
                        <li aria-haspopup="true"><a href="about.html" > ABOUT US </a>
                        </li>
                        <li aria-haspopup="true"><a href="#"> FAQ </a></li>
                        <!-- <li aria-haspopup="true"><a href="widgets.html">WIDGETS</a></li>                            -->
                        <!-- <li aria-haspopup="true"><a href="#">CATEGORIES <span class="fa fa-caret-down m-0" style="color: #232323;"></span></a>
                            <ul class="sub-menu">
                                <li aria-haspopup="true"><a href="col-left.html">Vehicles</a></li>
                                <li aria-haspopup="true"><a href="col-right.html">RealEstate</a></li>
                                <li aria-haspopup="true"><a href="col-right.html">Mobile Phones</a></li>
                            </ul>
                        </li> -->
                        <li aria-haspopup="true"><a href="contact.html"> CONTACT US <span class="hmarrow"></span></a></li>
                        <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0">
                            <!-- <span><a class="btn tx-btn-color" href="ad-posts.html">Post Property Ad</a></span> -->
                        </li>
                    </ul>
                    <!-- <ul class="mb-0">
                        <li aria-haspopup="true" class="mt-3 d-none d-lg-block top-postbtn">
                            <span><a class="btn tx-btn-color ad-post " href="ad-posts.html">Post Property Ad</a></span>
                        </li>
                    </ul> -->
                    <!-- <div class="call-us-now">
                        <div class="contact-in-header">
                            <i class="flaticon-customer-service"></i>
                            <span style="color: #999; float: right; line-height: 25px; margin-left: 10px; font-size: 16px;">
                                Call Us Now
                                <br>
                                <strong style="font-size: 20px; color: #4CAF50; font-weight: 600!important;">(+234) 811-111-1808</strong>
                            </spans>
                        </div>
                    </div> -->
                </nav>
                <!--Nav-->
                
                
            </div>
        </div>
    </div>
    <!--/Horizontal-main -->

    <div id="wrapper">
        <!-- LEFT SIDEBAR -->
    
    <div id="sidebar-nav" class="sidebar">
      <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 95%;"><div class="sidebar-scroll" style="overflow: hidden; width: auto; height: 95%;">
        <nav>
          <ul class="nav">
            <li class="welcome-text"> <img src="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/6.png" class="img-responsive" alt="Profile Picture">
              <div class="text-box">
                Welcome back:            <span>testuser </span> </div>
            </li>
            <li><a href="../tempview/dashboard-carspot.html" class="active"><i class="la la-home"></i> <span>Dashboard</span></a></li>
            <li><a href="../tempview/edit-profile-carspot.html" class=""><i class="la la-pencil"></i> <span>Edit Profile</span></a></li>
            
                    <!-- <li><a href="https://carspot.scriptsbundle.com/individual/oyink7/ "><i class="la la-user"></i> <span>My Profile</span></a></li> -->
            <li><a href="../tempview/messaging.html" class=""><i class="la la-envelope"></i> <span>My Messages</span></a></li>
            <li> <a href="#subPages" class="collapsed" data-toggle="collapse"><i class="la la-tasks"></i> <span>My Inventory</span> <i class="icon-submenu la la-chevron-left"></i></a>
              <div id="subPages" class="collapse ">
                <ul class="nav">
                  <li>
                      <a href="../tempview/published-inventory.html" class=""> 
                        Published 
                        <span class="badge"> 
                            0 
                        </span> 
                    </a>
                  </li>
                  <li>
                      <a href="../tempview/published-inventory.html" class="">
                        Expired 
                        <span class="badge">
                            0                    </span>
                    </a>
                  </li>
                  <li>
                      <a href="../tempview/published-inventory.html" class="">
                          Sold 
                        <span class="badge">
                            0                    </span>
                      </a>
                  </li>
                  <li>
                      <a href="../tempview/published-inventory.html" class="">
                          Pending 
                        <span class="badge">
                            0                    </span>
                      </a>
                  </li>
                  <li>
                      <a href="../tempview/published-inventory.html" class=""> 
                        Saved 
                        <span class="badge">
                            0                    </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="../tempview/refferals.html" class=""><i class="la la-users"></i> <span>Referral</span><span class="badge referral">0</span> </a></li>
            <li><a href="../tempview/ratings-inventory.html" class=""><i class="la la-star"></i> <span>My Ratings </span></a></li>
            <li><a href="../tempview/orders-inventory.html" ><i class="la la-check-circle-o"></i> <span> My Orders</span></a></li>
            <li><a href="../tempview/settings-carspot.html" ><i class="la la-cog"></i> <span> Settings</span></a></li>
            <li><a href="#" class=""><i class="fa fa-sign-out"></i> <span>Logout</span></a></li>
          </ul>
        </nav>
      </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 643px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
    </div>
    <!-- END LEFT SIDEBAR -->
            
            <!-- MAIN -->
            <div class="main dashboard-main">
                <!-- MAIN CONTENT -->
                <div class="main-content">
                    
    <div class="container-fluid">
        <!-- OVERVIEW -->
        <div class="row">
            <div class="col-md-12">
                    <div class="panel panel-headline">
            <div class="panel-heading">
                <h3 class="panel-title">Dashboard Overview </h3>
                <p class="panel-subtitle">Last logged in 40 mins Ago</p>
            </div>
            <div class="panel-body ">
                <div class="row">
                    <div class="col-md-3">
                        <div class="metric">
                            <span class="icon"><i class="fa fa-star"></i></span>
                            <p>
                                <span class="title">Featured Posts</span>
                                <span class="number">0</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="metric">
                            <span class="icon"><i class="fa fa-tasks"></i></span>
                            <p>
                                <span class="title">Active</span>
                                <span class="number">0</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="metric">
                            <span class="icon"><i class="fa fa-warning"></i></span>
                            <p>
                                <span class="title">Expired</span>
                                <span class="number">0</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="metric">
                            <span class="icon"><i class="fa fa-shopping-bag"></i></span>
                            <p>
                                <span class="title">Sold</span>
                                <span class="number">0</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="panel  panel-headline">
                    <div class="panel-heading">
                        <h3 class="panel-title">Most Viewed Posts</h3>
                        <a href="https://carspot.scriptsbundle.com/user-dashboard/?page-type=published-ads" class=""> View All Posts</a>
                    </div>
                    <div class="panel-body table-responsive">
                        <table class="table dashboard-table table-fit table-striped">
                            <!--<thead>
                                <tr>
                                    <th></th>
                                    <th> detail</th>
                                    <th> Views</th>
                                </tr>
                            </thead>-->
                            <tbody>
                                 
                                        <tr> <td colspan="5"><h4> No Inventory Found</h4></td> </tr>
                                                      
                            </tbody>
                        </table>
                    </div>
                </div>
                                    <div class="panel  panel-headline">
                            <div class="panel-heading">
                                <h3 class="panel-title">Most Recent Reviews</h3>
                                <a href="https://carspot.scriptsbundle.com/user-dashboard/?page-type=my_ratings" class=""> View All Reviews</a>
            
                            </div>
                            <div class="panel-body">
                                    <div class="alert custom-alert custom-alert-info" role="alert">
                                        <div class="custom-alert_top-side">
                                        <span class="alert-icon custom-alert_icon la la-info-circle"></span>
                                        <div class="custom-alert_body">
                                            <h6 class="custom-alert_heading">
                                            No Review Available.                                           </h6>
                                            <div class="custom-alert_content">
                                            Your reviews will be visible here.                                           </div>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>
            <div class="col-md-4">
                <div class="panel  panel-headline">
                                    <div class="panel-body">
                                <div class="alert custom-alert custom-alert-info" role="alert">
                                  <div class="custom-alert_top-side">
                                    <span class="alert-icon custom-alert_icon la la-info-circle"></span>
                                    <div class="custom-alert_body">
                                      <h6 class="custom-alert_heading">
                                        No Notification Available.                                   </h6>
                                      <div class="custom-alert_content">
                                      Notifications from admin will be visible here.                                   </div>
                                    </div>
                                  </div>
                                </div>
                                                </div>
                </div>
                            <div class="panel  panel-headline colored-panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">Package Details</h3>
                    </div>
                    <div class="panel-body">
                        <ul class="profile-details">
                            <li>
                                <i class="la la-plus"></i>
                                <div class="profile-meta">
                                    <h6>Simple Ads</h6>
                                    <span>5</span>
                                </div>
                            </li>
                            <li>
                                <i class="la la-star"></i>
                                <div class="profile-meta">
                                    <h6> Featured Ads</h6>
                                    <span>3</span>
                                </div>
                            </li>
                            <li>
                                <i class="la la-retweet"></i>
                                <div class="profile-meta">
                                    <h6>Bump up Ads</h6>
                                    <span>2</span>
                                </div>
                            </li>
                            <li>
                                <i class="la la-calendar"></i>
                                <div class="profile-meta">
                                    <h6>Package Expiry date</h6>
                                    <span>
                                        Never Expire                                </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
                </div>
                <!-- END MAIN CONTENT -->
            </div>
            <!-- END MAIN -->
            <div class="clearfix"></div>
        </div>
<!-- <div class="text-center margin-top-30 margin-bottom-20">
        <ul class="pagination pagination-lg">
<li class="active"><a href="index.html">1</a></li>
<li><a href="page/2/index.html">2</a></li>
<li><a href="page/2/index.html" >Next Page &raquo;</a></li>
</ul>
    </div> -->

 


    <!--Sticky header logic-->
    <input type="hidden" id="header_style" value="transparent" />
    <input type="hidden" id="is_sticky_header" value="0" />
    <input type="hidden" id="sticky_sb_logo_url" value="https://carspot.scriptsbundle.com/wp-content/uploads/2017/06/logo-2.png" />
    <input type="hidden" id="static_sb_logo_url" value="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/logo-1.png" />
        <input type="hidden" id="msg_notification_on" value="1" />
    <input type="hidden" id="msg_notification_time" value="1000000000" />
    <input type="hidden" id="is_unread_msgs" value="0" />
    <a href="#0" class="cd-top">Top</a>
<!-- Email verification and reset password -->

</div>
</template>
<script>
require("../assets/skins/color-skins/color15.css");
require("../assets/plugins/horizontal-menu/horizontal.css");
require("../assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css");
require("../assets/css/user-dashboard/protip.css");

require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../assets/skins/color-skins/color15.css");
require("../assets/plugins/horizontal-menu/horizontal.css");
require("../assets/css/components.css");
    export default {
        name: "productDetails"
    };
</script>