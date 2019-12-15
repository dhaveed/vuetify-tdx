<template>
  <div class="editprofilecarspot">
    <!--/Horizontal-main -->
    <div id="wrapper" style="height: 100vh;">
      <!-- LEFT SIDEBAR -->
      <dsidebar></dsidebar>
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
                    <h3 class="panel-title">Edit Profile</h3>
                    <!-- <a href="#" data-target="#myModal" data-toggle="modal">Change Password</a> -->
                    <p class="panel-subtitle">Last logged in 2 hours Ago</p>
                  </div>
                  <div class="panel-body panel-body-settings">
                    <div class="row">
                      <div
                        class="col-md-12 col-lg-12 col-sm-12 col-xs-12 profile-summary-dashboard"
                      >
                        <div class="col-md-6">
                          <div
                            class="panel panel-dashbaord-edit panel-headline"
                          >
                            <div class="profile-card">
                              <div class="profile-card-body">
                                <div class="contact-box">
                                  <div
                                    class="contact-box-bg"
                                    id="store-image"
                                  ></div>
                                  <div class="contact-img">
                                    <a
                                      href="https://carspot.scriptsbundle.com/individual/oyink7/"
                                      ><img
                                        src="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/6.png"
                                        class="img-responsive"
                                        id="profile-image"
                                        alt="Profile Picture"
                                    /></a>
                                  </div>
                                  <div class="contact-caption">
                                    <h4>testuser</h4>

                                    <div class="clearfix"></div>
                                    <div class="upload-btn-wrapper">
                                      <span
                                        class="tooltip-disabled"
                                        data-toggle="tooltip"
                                        title="Disabled in demo"
                                      >
                                        <button class="btn-profile">
                                          Upload Photo
                                        </button>
                                        <input
                                          type="file"
                                          id="imgInp"
                                          name="my_file_upload"
                                          accept="image/*"
                                          disabled=""
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            class="panel panel-dashbaord-edit panel-headline"
                            style="margin-bottom: 0px;"
                          >
                            <div class="panel-heading">
                              <h3 class="panel-title">Profile Details</h3>
                            </div>
                            <div
                              class="panel-body"
                              style="padding-bottom: 0px;"
                            >
                              <ul class="profile-details">
                                <li>
                                  <i class="la la-user"></i>
                                  <div class="profile-meta">
                                    <h6>Full Name</h6>
                                    <span>testuser</span>
                                  </div>
                                </li>
                                <li>
                                  <i class="la la-envelope"></i>
                                  <div class="profile-meta">
                                    <h6>Email</h6>
                                    <span>oyink7@gmail.com</span>
                                  </div>
                                </li>
                                <li>
                                  <i class="la la-mobile-phone"></i>
                                  <div class="profile-meta">
                                    <h6>Phone number</h6>
                                    <span>0123456789</span>
                                  </div>
                                </li>
                                <li>
                                  <i class="la la-users"></i>
                                  <div class="profile-meta">
                                    <h6>Account Type</h6>
                                    <span> individual </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                        style="margin-top: 24px;"
                      >
                        <div class="edit-profile-form">
                          <form
                            id="sb_update_profile"
                            class="sb_update_profile"
                            data-parsley-validate=""
                            novalidate=""
                          >
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >First Name</label
                                  >
                                  <input
                                    class="form-control form-control-dashboard"
                                    type="text"
                                    name="first_name"
                                    value="testuser"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard protip"
                                    >Last Name</label
                                  >
                                  <input
                                    class="protip form-control form-control-dashboard"
                                    type="email"
                                    name="last_name"
                                    value="username"
                                    readonly=""
                                    data-pt-title=" You can not edit email address"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard protip"
                                    >Email Address</label
                                  >
                                  <input
                                    class="protip form-control form-control-dashboard"
                                    type="email"
                                    name="user_email"
                                    value="oyink7@gmail.com"
                                    readonly=""
                                    data-pt-title=" You can not edit email address"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                  />
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >Mobile No</label
                                  >
                                  <input
                                    class="form-control form-control-dashboard"
                                    data-parsley-type="number"
                                    type="text"
                                    name="sb_user_contact"
                                    value="0123456789"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div
                                class="col-md-12 col-lg-12 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >About Yourself</label
                                  >
                                  <textarea
                                    class="form-control dashboard"
                                    name="sb_user_about"
                                    required=""
                                    rows="5"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >City</label
                                  >
                                  <select
                                    class="form-control form-control-dashboard select2-show-search border-bottom-0 w-100 select2-show-search"
                                    data-placeholder="Select"
                                  >
                                    <optgroup label="Categories">
                                      <option>-- Select City --</option>
                                      <option value="1">Germany</option>
                                      <option value="2">USA</option>
                                      <option value="3">Canada</option>
                                      <option value="4">Usa</option>
                                      <option value="5">Afghanistan</option>
                                      <option value="6">Albania</option>
                                      <option value="7">China</option>
                                      <option value="8">Denmark</option>
                                      <option value="9">Finland</option>
                                      <option value="10">India</option>
                                      <option value="11">Kiribati</option>
                                      <option value="12">Kuwait</option>
                                      <option value="13">Mexico</option>
                                      <option value="14">Pakistan</option>
                                    </optgroup>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard protip"
                                    >Country</label
                                  >
                                  <select
                                    class="form-control form-control-dashboard select2-show-search border-bottom-0 w-100 select2-show-search"
                                    data-placeholder="Select"
                                  >
                                    <optgroup label="Categories">
                                      <option>-- Select Country --</option>
                                      <option value="1">Germany</option>
                                      <option value="2">USA</option>
                                      <option value="3">Canada</option>
                                      <option value="4">Usa</option>
                                      <option value="5">Afghanistan</option>
                                      <option value="6">Albania</option>
                                      <option value="7">China</option>
                                      <option value="8">Denmark</option>
                                      <option value="9">Finland</option>
                                      <option value="10">India</option>
                                      <option value="11">Kiribati</option>
                                      <option value="12">Kuwait</option>
                                      <option value="13">Mexico</option>
                                      <option value="14">Pakistan</option>
                                    </optgroup>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >Facebook</label
                                  >
                                  <input
                                    class="form-control form-control-dashboard"
                                    type="text"
                                    name="sb_user_name"
                                    value="https://www.facebook.com/"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard protip"
                                    >Twitter</label
                                  >
                                  <input
                                    class="protip form-control form-control-dashboard"
                                    type="email"
                                    name="user_email"
                                    value="https://www.twitter.com/"
                                    readonly=""
                                    data-pt-title=" You can not edit email address"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >Whatsapp</label
                                  >
                                  <input
                                    class="form-control form-control-dashboard"
                                    type="text"
                                    name="sb_user_name"
                                    value="https://www.whatsapp.com/"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard protip"
                                    >Google</label
                                  >
                                  <input
                                    class="protip form-control form-control-dashboard"
                                    type="email"
                                    name="user_email"
                                    value="https://www.google.com/"
                                    readonly=""
                                    data-pt-title=" You can not edit email address"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"
                              >
                                <div class="form-group">
                                  <span
                                    class="tooltip-disabled pull-right"
                                    data-toggle="tooltip"
                                    title="Disabled in demo"
                                  >
                                    <input
                                      class="btn btn-theme pull-right"
                                      type="submit"
                                      value="Update profile"
                                      style="border-radius: 8px;"
                                      disabled=""
                                    />
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-md-6 col-lg-6 col-xs-12 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6"
                              ></div>
                            </div>
                          </form>
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

import dsidebar from "@/components/Dsidebar";
// import dheader from "@/components/Dheader";
export default {
  name: "editProf",
  components: {
    dsidebar
  }
};
</script>
