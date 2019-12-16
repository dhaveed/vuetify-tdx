<template>
  <!--Section-->
  <section class="sptb">
    <div class="container" style="padding-top: 70px;">
      <div class="row ">
        <div class="col-lg-8 col-md-12 col-md-12">
          <div class="card ">
            <div class="card-header ">
              <h3 class="card-title">Post An Ad</h3>
            </div>
            <div class="card-body panel-body-settings">
              <div class="ad-details">
                <div class="row ad-information ">
                  <div class="col-md-12 ad-section-title">Ad Details</div>
                </div>
                <div class="form-group">
                  <label class="form-label text-dark">Ad Title</label>
                  <input
                    type="text"
                    class="form-control post-ad-input"
                    placeholder="Ad title"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label text-dark">Category</label>
                      <select class="form-control custom-select">
                        <option value="0">-- Select Option --</option>
                        <option value="1">RealEstate</option>
                        <option value="2">Apartments</option>
                        <option value="3">Offices & Fitness</option>
                        <option value="4">2BHK Flats</option>
                        <option value="5">Apartments</option>
                        <option value="6">Laxury Rooms</option>
                        <option value="7">Homes</option>
                        <option value="8">Laxury Homes</option>
                        <option value="9">Modren Houses</option>
                        <option value="10">Home & Furinture</option>
                        <option value="11"> Homes</option>
                        <option value="12">Duplex House</option>
                        <option value="13">Laxury Rooms</option>
                        <option value="14">3BHK Flatss</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label text-dark"> Sub Category</label>
                      <select class="form-control custom-select">
                        <option value="0">-- Select Option --</option>
                        <option value="1">RealEstate</option>
                        <option value="2">Apartments</option>
                        <option value="3">Offices & Fitness</option>
                        <option value="4">2BHK Flats</option>
                        <option value="5">Apartments</option>
                        <option value="6">Laxury Rooms</option>
                        <option value="7">Homes</option>
                        <option value="8">Laxury Homes</option>
                        <option value="9">Modren Houses</option>
                        <option value="10">Home & Furinture</option>
                        <option value="11"> Homes</option>
                        <option value="12">Duplex House</option>
                        <option value="13">Laxury Rooms</option>
                        <option value="14">3BHK Flatss</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                </div>

                <div class="form-group">
                  <label class="form-label text-dark">Description</label>
                  <textarea
                    class="form-control"
                    name="example-textarea-input"
                    rows="4"
                    placeholder="text here.."
                    style="padding-top: 10px"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="form-label">Price</label>
                      <input
                        type="number"
                        class="form-control post-ad-input"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div
                      class="checkbox checkbox-info"
                      style="margin-top: 51px;"
                    >
                      <label class="custom-control mt-4 custom-checkbox">
                        <input type="checkbox" class="custom-control-input" />
                        <span
                          class="custom-control-label text-dark pl-2"
                          style="margin-left: -10px;"
                          >Negotiable.</span
                        >
                      </label>
                    </div>
                  </div>
                </div>

                <div class="p-2 border mb-4 form-group">
                  <form>
                    <label style="font-weight: 600;"> Upload Images</label>
                    <p>
                      Ads with photo attracts more customers. Formats accepted
                      are .jpg, .png and .gif. Maximum size for uploading files
                      is 5 MB. Add 1 photo or more for this category.
                    </p>
                    <input
                      id="demo"
                      type="file"
                      name="files"
                      accept=".jpg, .png, image/jpeg, image/png, html, zip, css,js"
                      multiple
                    />
                    <p style="margin-top: 16px;">
                      <b>Note:</b> The first photo is used as the main photo
                      that the customers see.
                    </p>
                  </form>
                </div>
              </div>
              <div class="personal-details">
                <div class="row ad-information">
                  <div class="col-md-12 ad-section-title">
                    Personal Information
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control post-ad-input"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control post-ad-input"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group mb-0">
                      <label class="form-label">Phone Number</label>
                      <input
                        type="text"
                        class="form-control post-ad-input"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group mb-0">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control post-ad-input"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="post-package">
                <div class="row package-information">
                  <div class="col-md-12 ad-section-title">
                    <img src="../../assets/images/ad-post.svg" style="width: 32px;" /> 
                    Ad Post Package
                  </div>
                </div>
              </div>
              <div class="">
                <div class="control-group form-group mb-0">
                  <!-- <label class="form-label text-dark"> <b>Ad Post Package</b> </label> -->
                  <p class="explanatory-text">
                    Boosted ads help sellers promote their product or service by
                    getting their ads more visibility with more buyers and sell
                    what they want faster.
                  </p>
                  <div class="row regular-ad-bg">
                    <div
                      class="col-md-12"
                      style="padding-right: 0px; padding-left: 0px;"
                    >
                      <ul class="ad-post-details">
                        <li
                          class="list-ad-package"
                          style="padding-right: 0.75rem; padding-left: 0.75rem;"
                        >
                          <label class="custom-control custom-radio mb-2 mr-4">
                            <input
                              type="radio"
                              class="custom-control-input"
                              name="radios1"
                              value="option7"
                              checked=""
                            />
                            <span class="custom-control-label">
                              <b>Regular List</b>
                              <span
                                class=""
                                style="float: right; font-size: 18px;"
                              >
                                <span style="font-size: 14px;">(Free) </span>
                                &#8358; 0.00</span
                              ></span
                            >
                          </label>
                        </li>
                        <li
                          class="list-ad-package"
                          style="padding-right: 0.75rem; padding-left: 0.75rem;"
                        >
                          <label class="custom-control custom-radio  mb-2 mr-4">
                            <input
                              type="radio"
                              class="custom-control-input"
                              name="radios1"
                              value="option8"
                            />
                            <span class="custom-control-label">
                              <b>Urgent Ad</b>
                              <span
                                class=""
                                style="float: right; font-size: 18px;"
                                >&#8358; 500</span
                              ></span
                            >
                          </label>
                        </li>
                        <li
                          class="list-ad-package"
                          style="padding-right: 0.75rem; padding-left: 0.75rem;"
                        >
                          <label class="custom-control custom-radio  mb-2 mr-4">
                            <input
                              type="radio"
                              class="custom-control-input"
                              name="radios1"
                              value="option9"
                            />
                            <span class="custom-control-label">
                              <b>Top Ad</b>
                              <span
                                class=""
                                style="float: right; font-size: 18px;"
                                >&#8358; 1000</span
                              ></span
                            >
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="link-to-senior-ads">
                  <span class="explanatory-text">Make you ad PREMIUM </span>
                  <a
                    href=""
                    style="color: #000; margin: 12px 0px; border-bottom: 1px solid #000;"
                  >
                    Click here</a
                  >
                </div>

                <!-- Should display on selection of above link -->
                <div class="row" style="margin-top: 20px;">
                  <div class="col-md-4">
                    <div class="senior-ads form-group">
                      <div
                        class="senior-ads-header gold"
                        style="background-color:  #f0ad4e;"
                      >
                        <img src="../../assets/images/ad-premium.svg" width="24px">
                        <div class="post-package-title gold">
                          <span>Gold</span>
                        </div>
                        <span>&#8358;</span>
                        <h4
                          style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                        >
                          3000
                        </h4>
                        <div class="package-value">
                          <span> <i></i> </span>
                        </div>
                      </div>
                      <div class="senior-ads-body">
                        <ul class="package-details-list">
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                        </ul>
                      </div>
                      <div class="select-senior-ad">
                        <button
                          class="btn btn-block btn-primary"
                          style="background-color: #F6C98A; border-color: #F6C98A; color: #D37E04;"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="senior-ads">
                      <div
                        class="senior-ads-header premium"
                        style="background-color: #27c781;"
                      >
                        <img src="../../assets/images/ad-premium.svg" width="24px">
                        <div class="post-package-title">
                          <span>Premium</span>
                        </div>
                        <span>&#8358;</span>
                        <h4
                          style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                        >
                          5000
                        </h4>
                        <div class="package-value">
                          <span> <i>Most Popular</i> </span>
                        </div>
                      </div>
                      <div class="senior-ads-body">
                        <ul class="package-details-list">
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                        </ul>
                      </div>

                      <div class="select-senior-ad">
                        <button
                          class="btn btn-block btn-primary"
                          style="background-color: #d6ead7; border-color: #d6ead7; color: #4CAF50;"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="senior-ads">
                      <div
                        class="senior-ads-header hot"
                        style="background-color: #4CAF50;"
                      >
                        <img src="../../assets/images/ad-premium.svg" width="24px">
                        <div class="post-package-title hot">
                          <span>Hot Sellers</span>
                        </div>
                        <span>&#8358;</span>
                        <h4
                          style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                        >
                          9000
                        </h4>
                        <div class="package-value">
                          <span> <i>Best Value</i> </span>
                        </div>
                      </div>
                      <div class="senior-ads-body">
                        <ul class="package-details-list">
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                          <li>
                            <i class="fa fa-check-circle-o"></i>
                            30 days ad boost
                          </li>
                        </ul>
                      </div>
                      <div class="select-senior-ad">
                        <button
                          class="btn btn-block btn-primary"
                          style="background-color: #d6ead7; border-color: #d6ead7; color: #4CAF50;"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Should display on selection of above link end -->

                <div class="row total-pricing">
                  <div class="total-pricing-sub-div">
                    <p><i> Total: &#8358; 0.00</i></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="card-footer ">
								<a href="#" class="btn btn-success">Submit Now</a>
							</div> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Benefits Of Premium Ad</h3>
            </div>
            <div class="card-body pb-2">
              <ul class="list-unstyled widget-spec vertical-scroll mb-0">
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Terms And Conditions</h3>
            </div>
            <div class="card-body">
              <ul class="list-unstyled widget-spec  mb-0">
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Money Not Refundable
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i>You
                  can renew your Premium ad after experted.
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are active for depend on package.
                </li>
                <li class="ml-5 mb-0">
                  <a href="tips.html"> View more..</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card mb-0">
            <div class="card-header">
              <h3 class="card-title">Ads</h3>
            </div>
            <div class="card-body">
              <div class="ads">
                <img src="../../assets/images/gloads.jpg" alt="" srcset="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-xl-0">
            <div class="card-header">
              <h3 class="card-title">Payments</h3>
            </div>
            <div class="card-body">
              <div class="tab-content card-body border mb-0 b-0">
                <div class="panel panel-primary">
                  <div class=" tab-menu-heading border-0 pl-0 pr-0 pt-0">
                    <div class="tabs-menu1 ">
                      <!-- Tabs -->
                      <ul class="nav panel-tabs">
                        <li>
                          <a href="#tab5" class="active" data-toggle="tab"
                            >Wallet</a
                          >
                        </li>
                        <li>
                          <a href="#tab6" data-toggle="tab"
                            >Credit/ Debit Card</a
                          >
                        </li>
                        <li><a href="#tab7" data-toggle="tab">Cash</a></li>
                        <!-- <li><a href="#tab8" data-toggle="tab">Gift Voucher</a></li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="panel-body tabs-menu-body pl-0 pr-0 border-0">
                    <div class="tab-content">
                      <div class="tab-pane active " id="tab5">
                        <div class="form-group">
                          <label class="form-label">Wallet ID</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control post-ad-input"
                              placeholder="Wallet ID"
                            />
                            <!-- <span class="input-group-append">
																<button class="btn btn-info" type="button"><i class="fa fa-cc-visa"></i> &nbsp; <i class="fa fa-cc-amex"></i> &nbsp;
																<i class="fa fa-cc-mastercard"></i></button>
															</span> -->
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="form-label">Wallet PIN</label>
                          <input
                            type="number"
                            class="form-control post-ad-input"
                            id="name1"
                            placeholder="PIN"
                          />
                        </div>
                        <div
                          class="col-lg-12"
                          style="padding-left: 0px!important;"
                        >
                          <div class="checkbox checkbox-info">
                            <label class="custom-control mt-4 custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <span class="custom-control-label text-dark pl-2"
                                >I agree with the Terms and Conditions.</span
                              >
                            </label>
                          </div>
                        </div>
                        <ul class=" mb-b-4 ">
                          <li>
                            <a
                              href="#"
                              class="btn btn-primary  mb-0 mr-2"
                              style="padding: 8px 48px!important; font-weight: 500; font-size: 14px;"
                              >Pay</a
                            >
                          </li>
                        </ul>
                        <!-- <div class="row">
														<div class="col-sm-8">
															<div class="form-group mb-sm-0">
																<label class="form-label">Expiration</label>
																<div class="input-group">
																	<input type="number" class="form-control" placeholder="MM" name="expiremonth">
																	<input type="number" class="form-control" placeholder="YY" name="expireyear">
																</div>
															</div>
														</div>
														<div class="col-sm-4 ">
															<div class="form-group mb-0">
																<label class="form-label">CVV <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title="Please Enter last 3 digits"></i></label>
																<input type="number" class="form-control" required="">
															</div>
														</div>
													</div> -->
                      </div>
                      <div class="tab-pane " id="tab6">
                        <div class="form-group">
                          <label class="form-label">CardHolder Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="name1"
                            placeholder="First Name"
                          />
                        </div>
                        <div class="form-group">
                          <label class="form-label">Card number</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search for..."
                            />
                            <span class="input-group-append">
                              <button class="btn btn-info" type="button">
                                <i class="fa fa-cc-visa"></i> &nbsp;
                                <i class="fa fa-cc-amex"></i> &nbsp;
                                <i class="fa fa-cc-mastercard"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-group mb-sm-0">
                              <label class="form-label">Expiration</label>
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="MM"
                                  name="expiremonth"
                                />
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="YY"
                                  name="expireyear"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4 ">
                            <div class="form-group mb-0">
                              <label class="form-label"
                                >CVV
                                <i
                                  class="fa fa-question-circle"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Please Enter last 3 digits"
                                ></i
                              ></label>
                              <input
                                type="number"
                                class="form-control"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-lg-12"
                          style="padding-left: 0px!important;"
                        >
                          <div class="checkbox checkbox-info">
                            <label class="custom-control mt-4 custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <span class="custom-control-label text-dark pl-2"
                                >I agree with the Terms and Conditions.</span
                              >
                            </label>
                          </div>
                        </div>
                        <ul class=" mb-b-4 ">
                          <li>
                            <a
                              href="#"
                              class="btn btn-primary  mb-0 mr-2"
                              style="padding: 8px 48px!important; font-weight: 500; font-size: 14px;"
                              >Pay</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane " id="tab7">
                        <div class="cash-info">
                          <h4>Cash payment procedure:</h4>

                          <p>
                            Go to any bank teller and provide the following
                            information:
                          </p>
                          <ul>
                            <li>Bank: <b>Zenith</b></li>
                            <li>Merchant: <b>Tradexplora</b></li>
                            <li>Invoice: <b>42101992863</b></li>
                            <li>Amount: <b>&#8358;9,000</b></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4"></div>
        <div class="col-xl-8">
          <div class="post-ad-submit-button">
            <button class="btn btn-primary bt-block">Post Your Ad</button>
          </div>
        </div>
        <div class="col-xl-4"></div>
      </div>
    </div>
  </section>
  <!--/Section-->
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: "postad",
  methods: {
    sync() {
      (function($) {
        $("#demo").FancyFileUpload({
          params: {
            action: "fileuploader"
          },
          maxfilesize: 1000000
        });
      })(jQuery);
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

<style></style>
