<template>
  <div class="product_details">
    <div class="main-content-area clearfix">
      <section
        class="section-padding .margin-top-30 gray"
        style="padding-bottom: 50px; padding-top: 60px;"
      >
        <!-- Main Container -->
        <div class="container">
          <!-- Row -->
          <pricingArea></pricingArea>
          <!-- Middle Content Area -->
          <div class="col-md-8 col-xs-12 col-sm-12">
            <!-- Single Ad -->
            <productSlider></productSlider>
            <div class="clearfix"></div>
            <div class="ad-share text-center">
              <div
                data-toggle="modal"
                data-target=".share-ad"
                class="small-box col-md-3 col-sm-3 col-xs-12"
              >
                <i class="fa fa-share-alt"></i>
                <span class="hidetext">Share</span>
              </div>
              <div
                class="modal fade share-ad"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content text-left">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&#10005;</span
                        ><span class="sr-only">Close</span>
                      </button>
                      <h3 class="modal-title">Share</h3>
                    </div>
                    <div class="modal-body text-left">
                      <div class="recent-ads">
                        <div class="recent-ads-list">
                          <div class="recent-ads-container">
                            <div class="recent-ads-list-image">
                              <a
                                href="javascript:void(0);"
                                class="recent-ads-list-image-inner"
                              >
                                <img
                                  src="../assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006-360x270.jpg"
                                  alt="2017 Maserati Ghibli SQ4 Blue"
                                />
                              </a>
                            </div>
                            <div class="recent-ads-list-content">
                              <h3 class="recent-ads-list-title">
                                <a href="javascript:void(0);"
                                  >2017 Maserati Ghibli SQ4 Blue</a
                                >
                              </h3>
                              <div class="recent-ads-list-price">
                                USD64,500<span class="">(Negotiable)</span>
                              </div>
                              <p>
                                Looking to sell the car urgently. Engine is good
                                condition. Complete service history available.
                                Original return file is available. After Market
                                Alloy rims. As good as a brand new car. Lady
                                Driven Car in Immaculate Condition. No Work
                                Required in Car. ...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Link</h3>
                      <p>
                        <a href="javascript:void(0);"
                          >https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/</a
                        >
                      </p>
                    </div>
                    <div class="modal-footer">
                      <ul class="list-inline">
                        <li>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Facebook,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://plus.google.com/share?url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Google+,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pinterest.com/pin/create/button/?url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/&amp;media=&amp;description=2017%20Maserati%20Ghibli%20SQ4%20Blue"
                            >Pinterest,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/intent/tweet?text=2017%20Maserati%20Ghibli%20SQ4%20Blue&amp;url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Twitter</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="small-box col-md-3 col-sm-3 col-xs-12"
                style="padding-left: 25px; padding-right: 25px;"
                href="javascript:void(0);"
                id="ad_to_fav"
                data-adid="1375"
              >
                <i class="fa fa-heart-o active"></i>
                <span class="hidetext"> Add to Wishlist </span>
              </a>
              <a
                class="small-box col-md-3 col-sm-3 col-xs-12"
                href="../tempview/comparison.html"
                id="ad_to_fav"
                data-adid="1375"
              >
                <img
                  src="../assets/images/compare.svg"
                  style="height: 20px; color: #777; padding-right: 5px;"
                />
                <span class="hidetext"> Compare </span>
              </a>
              <div
                data-target=".report-quote"
                data-toggle="modal"
                class="small-box col-md-3 col-sm-3 col-xs-12"
              >
                <i class="fa fa-warning" style="color: red!important;"></i>
                <span class="hidetext" style="color: red!important;"
                  >Report</span
                >
              </div>
            </div>
            <div
              class="modal fade report-quote"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">&#10005;</span
                      ><span class="sr-only">Close</span>
                    </button>
                    <h3 class="modal-title">
                      Why are you reporting this ad?
                    </h3>
                  </div>
                  <div class="modal-body">
                    <!-- content goes here -->
                    <form>
                      <div class="skin-minimal">
                        <div class="form-group col-md-12 col-sm-12">
                          <ul class="list">
                            <li>
                              <select class="alerts" id="report_option">
                                <option value="Spam">Spam</option>
                                <option value="Offensive">Offensive</option>
                                <option value="Duplicated">Duplicated</option>
                                <option value="Fake">Fake</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="form-group  col-md-12 col-sm-12">
                        <label></label>
                        <textarea
                          placeholder="Write your comments."
                          rows="3"
                          class="form-control"
                          id="report_comments"
                        ></textarea>
                      </div>
                      <div class="clearfix"></div>
                      <div
                        class="col-md-12 col-sm-12 margin-bottom-20 margin-top-20"
                      >
                        <input type="hidden" id="ad_id" value="1375" />
                        <button
                          type="button"
                          class="btn btn-theme btn-block"
                          id="sb_mark_it"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="list-style-1 margin-top-20">
              <div class="panel with-nav-tabs panel-default">
                <div class="panel-heading">
                  <ul class="nav nav-tabs"></ul>
                </div>
                <div class="panel-body">
                  <div class="tab-content">
                    <div class="tab-pane  in active  fade" id="tab1default">
                      <h3 class="tab-title">Similar Ads</h3>
                      <div class="ads-list-archive ">
                        <!-- Image Block -->
                        <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                          <!-- Img Block -->
                          <div class="ad-archive-img">
                            <a href="../ad/audi-a5-for-sale/index.html">
                              <img
                                src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-360x270.jpg"
                                alt="Audi A5 For Sale"
                                class="img-responsive"
                              />
                            </a>
                          </div>
                          <!-- Img Block -->
                        </div>
                        <!-- Ads Listing -->
                        <div class="clearfix visible-xs-block"></div>
                        <!-- Content Block -->
                        <div class="col-lg-8 col-md-8 col-sm-8 no-padding">
                          <!-- Ad Desc -->
                          <div class="ad-archive-desc">
                            <!-- Price -->
                            <div class="ad-price">
                              &#8358; 95,000<span class="">(Fixed)</span>
                            </div>
                            <!-- Title -->
                            <h3>
                              <a href="../ad/audi-a5-for-sale/index.html"
                                >Audi A5 For Sale</a
                              >
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                ><a href="../ad_category/audi/index.html"
                                  >Audi</a
                                ></span
                              ><span class="padding_cats"
                                ><a href="../ad_category/a5/index.html"
                                  >A5</a
                                ></span
                              >
                            </div>
                            <!-- Short Description -->
                            <div class="clearfix visible-xs-block"></div>
                            <p class="hidden-sm">
                              Not Many of These Around! This One’s in Primo
                              Shape. The Miles are Super Low. If Your a Ranger
                              Fan, This is ...
                            </p>
                            <!-- Ad Features -->
                            <ul class="add_info">
                              <li class="similar-ads-picture-thumbnails active">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                              <li class="similar-ads-picture-thumbnails ">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/3-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                            </ul>
                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div class="last-updated">
                                Posted : July 21, 2017
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> Favourite</a
                                >
                                <a
                                  href="../ad/audi-a5-for-sale/index.html"
                                  class="btn btn-success"
                                >
                                  View Details</a
                                >
                              </div>
                            </div>
                          </div>
                          <!-- Ad Desc End -->
                        </div>
                        <!-- Content Block End -->
                      </div>
                      <div class="ads-list-archive ">
                        <!-- Image Block -->
                        <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                          <!-- Img Block -->
                          <div class="ad-archive-img">
                            <a href="../ad/audi-a5-for-sale/index.html">
                              <img
                                src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-360x270.jpg"
                                alt="Audi A5 For Sale"
                                class="img-responsive"
                              />
                            </a>
                          </div>
                          <!-- Img Block -->
                        </div>
                        <!-- Ads Listing -->
                        <div class="clearfix visible-xs-block"></div>
                        <!-- Content Block -->
                        <div class="col-lg-8 col-md-8 col-sm-8 no-padding">
                          <!-- Ad Desc -->
                          <div class="ad-archive-desc">
                            <!-- Price -->
                            <div class="ad-price">
                              &#8358; 95,000<span class="">(Fixed)</span>
                            </div>
                            <!-- Title -->
                            <h3>
                              <a href="../ad/audi-a5-for-sale/index.html"
                                >Audi A5 For Sale</a
                              >
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                ><a href="../ad_category/audi/index.html"
                                  >Audi</a
                                ></span
                              ><span class="padding_cats"
                                ><a href="../ad_category/a5/index.html"
                                  >A5</a
                                ></span
                              >
                            </div>
                            <!-- Short Description -->
                            <div class="clearfix visible-xs-block"></div>
                            <p class="hidden-sm">
                              Not Many of These Around! This One’s in Primo
                              Shape. The Miles are Super Low. If Your a Ranger
                              Fan, This is ...
                            </p>
                            <!-- Ad Features -->
                            <ul class="add_info">
                              <li class="similar-ads-picture-thumbnails active">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                              <li class="similar-ads-picture-thumbnails">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/3-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                            </ul>
                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div class="last-updated">
                                Posted : July 21, 2017
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> Favourite</a
                                >
                                <a
                                  href="../ad/audi-a5-for-sale/index.html"
                                  class="btn btn-success"
                                >
                                  View Details</a
                                >
                              </div>
                            </div>
                          </div>
                          <!-- Ad Desc End -->
                        </div>
                        <!-- Content Block End -->
                      </div>
                      <div class="ads-list-archive ">
                        <!-- Image Block -->
                        <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                          <!-- Img Block -->
                          <div class="ad-archive-img">
                            <a href="../ad/audi-a5-for-sale/index.html">
                              <img
                                src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-360x270.jpg"
                                alt="Audi A5 For Sale"
                                class="img-responsive"
                              />
                            </a>
                          </div>
                          <!-- Img Block -->
                        </div>
                        <!-- Ads Listing -->
                        <div class="clearfix visible-xs-block"></div>
                        <!-- Content Block -->
                        <div class="col-lg-8 col-md-8 col-sm-8 no-padding">
                          <!-- Ad Desc -->
                          <div class="ad-archive-desc">
                            <!-- Price -->
                            <div class="ad-price">
                              &#8358; 95,000<span class="">(Fixed)</span>
                            </div>
                            <!-- Title -->
                            <h3>
                              <a href="../ad/audi-a5-for-sale/index.html"
                                >Audi A5 For Sale</a
                              >
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                ><a href="../ad_category/audi/index.html"
                                  >Audi</a
                                ></span
                              ><span class="padding_cats"
                                ><a href="../ad_category/a5/index.html"
                                  >A5</a
                                ></span
                              >
                            </div>
                            <!-- Short Description -->
                            <div class="clearfix visible-xs-block"></div>
                            <p class="hidden-sm">
                              Not Many of These Around! This One’s in Primo
                              Shape. The Miles are Super Low. If Your a Ranger
                              Fan, This is ...
                            </p>
                            <!-- Ad Features -->
                            <ul class="add_info">
                              <li class="similar-ads-picture-thumbnails active">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                              <li class="similar-ads-picture-thumbnails">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/3-3-110x60.jpg"
                                    alt="Audi A5 For Sale"
                                /></a>
                              </li>
                            </ul>
                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div class="last-updated">
                                Posted : July 21, 2017
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> Favourite</a
                                >
                                <a
                                  href="../ad/audi-a5-for-sale/index.html"
                                  class="btn btn-success"
                                >
                                  View Details</a
                                >
                              </div>
                            </div>
                          </div>
                          <!-- Ad Desc End -->
                        </div>
                        <!-- Content Block End -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="margin-top: 36px;">
                <div class="col-md-5"></div>
                <div class="col-md-2">
                  <div class="viewall-similar">
                    <a href="">Show More</a>
                  </div>
                </div>
                <div class="col-md-5"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="col-md-4 col-xs-12 col-sm-12">
            <div class="sidebar">
              <div class="white-bg user-contact-info">
                <div class="user-info-card">
                  <div class="user-photo col-md-4 col-sm-3  col-xs-4">
                    <a href="../../dealer/gavien72/index.html" class="link">
                      <!-- <img class="img-circle" src="../assets/carspot-css/wp-content/themes/carspot/images/"  alt="Profile Pic"> -->
                      <img
                        class="img-circle"
                        src="../assets/images/profile-product-details.jpg"
                        alt="Profile Pic"
                      />
                    </a>
                    <!-- <div class="seller-online"></div> -->
                    <div class="seller-offline"></div>
                  </div>
                  <div class="user-information  col-md-8 col-sm-9 col-xs-8">
                    <span class="user-name">
                      <a
                        class="hover-color"
                        href="../../dealer/gavien72/index.html"
                      >
                        DANIEL
                      </a>
                    </span>
                    <div class="item-date">
                      <span class="ad-pub">
                        <b>Last Logged in:</b> 4 months Ago</span
                      >
                      <p
                        class="ad-pub"
                        style="font-size: 14px; margin-top: 4px;"
                      >
                        <b>Registered:</b> 10 Oct 2019
                      </p>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="singlemap-location">
                <div class="template-icons" style="margin-bottom: 5px;">
                  <div class="icon-box-icon flaticon-location"></div>
                  <div class="class-name">
                    3225 West Olympic Boulevard, Los Angeles, CA, United States
                  </div>
                </div>
              </div>
              <div class="category-list-icon">
                <i class="purple flaticon-smartphone"></i>
                <div class="category-list-title">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      class="number"
                      data-last="2221111999"
                      ><span>Click to View</span></a
                    >
                  </h5>
                </div>
              </div>
              <div class="additional-btns">
                <ul>
                  <li>
                    <a
                      href="#"
                      class=""
                      data-toggle="modal"
                      data-target="#make-offer-modal"
                    >
                      <i class="la la-money"></i>
                      <span>Make an Offer Price</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="category-list-icon" style="">
                <!-- <i class="green flaticon-mail-1"></i>             -->
                <div class="category-list-title" style="padding: 0;">
                  <!-- Email Button trigger modal -->
                  <h5>
                    <a
                      class="btn btn-block btn-warning"
                      style="color: #fff; padding: 16px;"
                      href="../../sign-in-to-your-account/index.html"
                      >Follow Seller
                    </a>
                  </h5>
                </div>
              </div>
              <div
                class="category-list-title"
                style="padding: 0;box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4)"
              >
                <!-- Email Button trigger modal -->
                <h5>
                  <a
                    class="btn btn-block btn-primary contact-seller"
                    href="../../sign-in-to-your-account/index.html"
                  >
                    <i class="fa fa-commenting-o"></i> Chat With Seller</a
                  >
                </h5>
              </div>
              <div class="social-and-product-highlight">
                <div class="fule-economy">
                  <h4>Product Highlight</h4>
                  <ul class="list-inline">
                    <li>
                      <h5>30</h5>
                      <p>Views</p>
                    </li>
                    <li>
                      <h5 style="color: #FFF500;">4.5</h5>
                      <p>Rating</p>
                    </li>
                  </ul>
                </div>

                <ul
                  class="footer-payments"
                  style="margin-top: 27px; display: flex; justify-content: space-between; padding-left: 8px;"
                >
                  <li class="pl-0">
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../assets/images/socials/facebook.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../assets/images/socials/twitter.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:; "
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%; "
                        src="../assets/images/socials/whatsapp.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../assets/images/socials/linkedin.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../assets/images/socials/google plus.svg"
                    /></a>
                  </li>
                </ul>
              </div>

              <!-- Saftey Tips  -->
              <div class="widget" style="margin-top: 5px;">
                <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-weight: 600;"
                  >
                    <span>Safety tips for buyers</span>
                  </h4>
                </div>
                <div class="widget-content saftey">
                  <ol style="list-style-type: circle;">
                    <li>Use a safe location to meet seller</li>
                    <li>Avoid cash transactions</li>
                    <li>Beware of unrealistic offers</li>
                    <li>Check item and be satisfied before payment</li>
                  </ol>
                </div>
              </div>
              <div class="widget">
                <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-weight: 600;"
                  >
                    <span> Ads</span>
                  </h4>
                </div>
                <div class="widget-content ">
                  <div class="ads">
                    <img src="../assets/images/gloads.jpg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </section>

      <div class="floating-elements"></div>
    </div>
    <!--Footer Section-->
    <!--/Footer Section-->

    <!--Sticky header logic-->
    <input type="hidden" id="header_style" value="white" />
    <input type="hidden" id="is_sticky_header" value="1" />
    <input
      type="hidden"
      id="sticky_sb_logo_url"
      value="../wp-content/uploads/sites/28/2018/04/logo-2.png"
    />
    <input
      type="hidden"
      id="static_sb_logo_url"
      value="../assets/carspot-css/wp-content/uploads/sites/28/2018/04/logo-2.png"
    />
    <input type="hidden" id="msg_notification_on" value="" />
    <input type="hidden" id="msg_notification_time" value="100000" />
    <input type="hidden" id="is_unread_msgs" value="0" />
    <a href="#0" class="cd-top">Top</a>
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
import productSlider from "@/components/product_overview/productSlider";
import pricingArea from "@/components/product_overview/pricingArea";
export default {
  name: "productDetails",
  components: {
    productSlider,
    pricingArea
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
    // this.$forceUpdate();
  },
  beforeCreate() {
    console.log("this is before created");
  },
  beforeMount() {
    console.log("this is before mounted");
  },
  mounted() {
    console.log("this route just got mounted");
  },
  beforeRouteLeave: function(to, from, next) {
    console.log("this route is about to leave ");
    next();
  }
};
</script>
