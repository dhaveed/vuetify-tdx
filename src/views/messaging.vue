<template>
  <div class="messaging">
    <div id="wrapper" style="height: 100vh;">
      <!-- LEFT SIDEBAR -->

      <div id="sidebar-nav" class="sidebar">
        <div
          class="slimScrollDiv"
          style="position: relative; overflow: hidden; width: auto; height: 95%;"
        >
          <div
            class="sidebar-scroll"
            style="overflow: hidden; width: auto; height: 95%;"
          >
            <nav>
              <ul class="nav">
                <li class="welcome-text">
                  <img
                    src="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/6.png"
                    class="img-responsive"
                    alt="Profile Picture"
                  />
                  <div class="text-box">
                    Welcome back: <span>testuser </span>
                  </div>
                </li>
                <li>
                  <a href="../tempview/dashboard-carspot.html" class=""
                    ><i class="la la-home"></i> <span>Dashboard</span></a
                  >
                </li>
                <li>
                  <a href="../tempview/edit-profile-carspot.html" class=""
                    ><i class="la la-pencil"></i> <span>Edit Profile</span></a
                  >
                </li>
                <!-- <li><a href="https://carspot.scriptsbundle.com/individual/oyink7/ "><i class="la la-user"></i> <span>My Profile</span></a></li> -->
                <li>
                  <a href="../tempview/messaging.html" class="active"
                    ><i class="la la-envelope"></i> <span>My Messages</span></a
                  >
                </li>
                <li>
                  <a href="#subPages" class="collapsed" data-toggle="collapse"
                    ><i class="la la-tasks"></i> <span>My Inventory</span>
                    <i class="icon-submenu la la-chevron-left"></i
                  ></a>
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
                          <span class="badge"> 0 </span>
                        </a>
                      </li>
                      <li>
                        <a href="../tempview/published-inventory.html" class="">
                          Sold
                          <span class="badge"> 0 </span>
                        </a>
                      </li>
                      <li>
                        <a href="../tempview/published-inventory.html" class="">
                          Pending
                          <span class="badge"> 0 </span>
                        </a>
                      </li>
                      <li>
                        <a href="../tempview/published-inventory.html" class="">
                          Saved
                          <span class="badge"> 0 </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" class=""
                    ><i class="la la-users"></i> <span>Referral</span
                    ><span class="badge referral">0</span>
                  </a>
                </li>
                <li>
                  <a href="../tempview/ratings-inventory.html" class=""
                    ><i class="la la-star"></i> <span>My Ratings </span></a
                  >
                </li>
                <li>
                  <a href="../tempview/orders-inventory.html"
                    ><i class="la la-check-circle-o"></i>
                    <span> My Orders</span></a
                  >
                </li>
                <li>
                  <a href="../tempview/settings-carspot.html"
                    ><i class="la la-cog"></i> <span> Settings</span></a
                  >
                </li>
                <li>
                  <a href="#" class=""
                    ><i class="fa fa-sign-out"></i> <span>Logout</span></a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div
            class="slimScrollBar"
            style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 643px;"
          ></div>
          <div
            class="slimScrollRail"
            style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"
          ></div>
        </div>
      </div>
      <!-- END LEFT SIDEBAR -->

      <!-- MAIN -->
      <div class="main dashboard-main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="container-fluid">
            <!-- OVERVIEW -->
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="panel  panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Messaging Panel</h3>
                    <!-- <a href="#" data-target="#myModal" data-toggle="modal">Change Password</a> -->
                    <p class="panel-subtitle">Online</p>
                  </div>
                  <div
                    class="panel-body panel-body-settings panel-body-settings-messaging"
                  >
                    <div class="row">
                      <div class="col-md-12 col-xs-12 col-sm-12 ">
                        <div class="message-body">
                          <div class="col-md-4 col-sm-5 col-xs-12">
                            <div class="message-inbox">
                              <div class="message-header">
                                <h4>Inbox</h4>
                                <span
                                  ><a href="#"
                                    ><small>Recevied Offers</small></a
                                  ></span
                                >
                                <span
                                  ><a href="#" class="active"
                                    ><small>Sent Offers </small></a
                                  ></span
                                >
                              </div>
                              <div class="list-wrap ps-container ps-active-y">
                                <ul class="message-history">
                                  <!-- LIST ITEM -->
                                  <li class="message-grid">
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>John Doe</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>Honda Civic 2017 Sports Edition</p>
                                        <div class="time">
                                          <span
                                            ><i class="icon-envelope"></i
                                          ></span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                  <!-- LIST ITEM -->
                                  <li class="message-grid">
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>Alex Curt</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>Ford Focus 1.6 TDCi Edge 5dr</p>
                                        <div class="time">
                                          <span>2 days ago</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                  <!-- LIST ITEM -->
                                  <li class="message-grid">
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>Sonu Monu</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>2015 Lamborghini Huracan</p>
                                        <div class="time">
                                          <span
                                            ><i class="icon-envelope"></i
                                          ></span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                  <!-- LIST ITEM -->
                                  <li class="active">
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>Arslan Tariq</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>BMW I8 1.5 Auto 4X4 2dr</p>
                                        <div class="time">
                                          <span
                                            ><i class="icon-envelope"></i
                                          ></span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                  <!-- LIST ITEM -->
                                  <li class="message-grid">
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>Alexa Grey</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>Ferrari 458 Italia Convertibleo</p>
                                        <div class="time">
                                          <span>1 days ago</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                  <!-- LIST ITEM -->
                                  <li>
                                    <a href="#">
                                      <div class="image img-square">
                                        <img
                                          src="../assets/images/profile-product-details.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="user-name">
                                        <div class="author">
                                          <span>Humayun</span>
                                          <div class="user-status"></div>
                                        </div>
                                        <p>Lcd for sale</p>
                                        <div class="time">
                                          <span>5 days ago</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <!-- END / LIST ITEM -->
                                </ul>
                                <!-- <div class="ps-scrollbar-x-rail" style="width: 346px; display: none; left: 0px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div>
                                                 <div class="ps-scrollbar-y-rail" style="top: 0px; height: 590px; display: inherit; right: 0px;">
                                                    <div class="ps-scrollbar-y" style="top: 0px; height: 150px;"></div>
                                                </div> -->
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-md-8 clearfix col-sm-5 col-xs-12 message-content"
                          >
                            <div class="message-details">
                              <div class="author">
                                <div class="image">
                                  <img
                                    src="../assets/images/profile-product-details.jpg"
                                    alt=""
                                  />
                                </div>
                                <span class="author-name">Muhammad Umair</span>
                                <em>5 days ago</em>
                              </div>
                              <h2>
                                <a href="single-page-listing.html"
                                  >2017 Audi A4 sport Auto MY17 For Sale</a
                                >
                              </h2>
                              <div class="list-wraps ps-container ps-active-y">
                                <ul class="messages">
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Morning! How are you doing today?
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 8:53
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Hey! I am doing good! What about you?
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 8:55
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Doing great!
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 8:56
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      We just received a new project.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 8:56
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Sweet! What is it about?
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:00
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      An Android and IOS app for client X.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:03
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Is it a complex project? What is the
                                      deadline?
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:07
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Nah! Rather simple for the team. We have 3
                                      months to deliver the final product.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:08
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      The client has a budget of $5000 btw.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:09
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      That is awesome!
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:12
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      With that budget we can make something
                                      pretty powerful. As soon as I get to the
                                      office we can start the team briefing!
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:12
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Absolutely! Can't wait to get started!
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:14
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      I am just grabbing the coffee and
                                      doughnuts. I will be at the office ASAP.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:17
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="friend-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Sure. We are wrapping up the previous
                                      project, you have some time.
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:18
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                  <li class="my-message clearfix">
                                    <figure class="profile-picture">
                                      <img
                                        src="../assets/images/profile-product-details.jpg"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      Alrighty, cool!
                                      <div class="time">
                                        <i class="fa fa-clock-o"></i> Today 9:17
                                        AM
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  class="ps-scrollbar-x-rail"
                                  style="width: 672px; display: none; left: 0px;"
                                >
                                  <div
                                    class="ps-scrollbar-x"
                                    style="left: 0px; width: 0px;"
                                  ></div>
                                </div>
                                <div
                                  class="ps-scrollbar-y-rail"
                                  style="top: 0px; height: 590px; display: inherit; right: 0px;"
                                >
                                  <div
                                    class="ps-scrollbar-y"
                                    style="top: 0px; height: 150px;"
                                  ></div>
                                </div>
                              </div>
                              <div class="chat-form ">
                                <form role="form" class="form-inline">
                                  <div class="form-group">
                                    <input
                                      style="width: 100%"
                                      placeholder="Type a message here..."
                                      class="form-control"
                                      type="text"
                                    />
                                  </div>
                                  <button class="btn btn-theme" type="submit">
                                    <i class="fa fa-paper-plane-o"></i>
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="myModal" class="modal fade change-psw" role="dialog">
            <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header rte">
                  <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true"> ✕ </span>
                  </button>
                  <h2 class="modal-title">Password Change</h2>
                </div>
                <form id="sb-change-password">
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Current Password</label>
                      <input
                        placeholder="Current Password"
                        class="form-control"
                        type="password"
                        name="current_pass"
                        id="current_pass"
                      />
                    </div>
                    <div class="form-group">
                      <label>New Password</label>
                      <input
                        placeholder="New Password"
                        class="form-control"
                        type="password"
                        name="new_pass"
                        id="new_pass"
                      />
                    </div>
                    <div class="form-group">
                      <label>Confirm New Password</label>
                      <input
                        placeholder="Confirm Password"
                        class="form-control"
                        type="password"
                        name="con_new_pass"
                        id="con_new_pass"
                      />
                    </div>

                    <div class="form-group">
                      <span
                        class="tooltip-disabled pull-left"
                        data-toggle="tooltip"
                        title="Disabled in demo"
                      >
                        <button
                          class="btn btn-theme btn-block"
                          type="button"
                          disabled=""
                        >
                          Reset My Password
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- END MAIN CONTENT -->
      </div>
      <!-- END MAIN -->
      <div class="clearfix"></div>
    </div>

    <!--Sticky header logic-->
    <input type="hidden" id="header_style" value="transparent" />
    <input type="hidden" id="is_sticky_header" value="0" />
    <input
      type="hidden"
      id="sticky_sb_logo_url"
      value="https://carspot.scriptsbundle.com/wp-content/uploads/2017/06/logo-2.png"
    />
    <input
      type="hidden"
      id="static_sb_logo_url"
      value="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/logo-1.png"
    />
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
  name: "messaging"
};
</script>
