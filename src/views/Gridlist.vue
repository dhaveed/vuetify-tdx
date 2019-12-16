<template>
  <div class="gridlist">
    <div class="main-content-area clearfix">
      <section
        class="section-padding  gray page-search"
        style="padding: 8px 0px!important;"
      >
        <div class="container">
          <div class="row value-added-services-row">
            <div class="col-md-2" style="padding-left: 0px;">
              <a href="#">
                <div class="d-flex value-added">
                  <div class="outline1">
                    <div class="outline2">
                      <div class="icon-bg-service">
                        <span class=" icon-service1 text-primary">
                          <i
                            class="fa fa-mobile fa-5x"
                            style="color: #fff !important; font-size: 35px;"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Airtime / Data
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-2 " style="padding-left: 0px;">
              <a href="#">
                <div class="d-flex value-added">
                  <div class="icon-bg-service">
                    <span class=" icon-service1 text-warning">
                      <i
                        class="fa fa-television"
                        style="color: #fff !important; font-size: 25px; margin-left: 3px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Cable TV
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-2 " style="padding-left: 0px;">
              <a href="#">
                <div class="d-flex value-added">
                  <div class="icon-bg-service">
                    <span class=" icon-service1 text-secondary">
                      <i
                        class="fa fa-bolt"
                        style="color: #fff !important; font-size: 25px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Electricity
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-2" style="padding-left: 0px;">
              <a href="#">
                <div class="d-flex value-added">
                  <div class="icon-bg-service">
                    <span class=" icon-service1 text-primary">
                      <i
                        class="fa fa-plane fa-3x"
                        style="color: #fff !important; font-size: 21px;"
                      ></i>
                    </span>
                  </div>
                  <div class=" mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Flight
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-2" style="padding-left: 0px;">
              <a href="#">
                <div class="d-flex value-added">
                  <div class="icon-bg-service">
                    <span class=" icon-service1 text-warning">
                      <i
                        class="fa fa-bed"
                        style="color: #fff !important; font-size: 21px;"
                      ></i>
                    </span>
                  </div>
                  <div class=" mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Hotel
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div
              class="col-md-2"
              style="padding-left: 0px; padding-right: 0px;"
            >
              <a href="#">
                <div class="d-flex value-added">
                  <div class="icon-bg-service">
                    <span class=" icon-service1 text-warning">
                      <i
                        class="fa fa-ellipsis-h"
                        style="color: #fff !important; font-size: 28px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      More Services
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- <hr /> -->
          <hotsellers></hotsellers>
          <!-- Row -->
          <div class="row">
            <div class="col-md-3 col-sm-12 col-xs-12">
              <div class="sidebar">
                <div
                  class="panel-group"
                  id="accordion1"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="panel panel-default" id="red-title">
                    <!-- Heading -->
                    <div
                      class="panel-heading red-title"
                      role="tab"
                      id="headingMain"
                    >
                      <h4 class="panel-title">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#collapseMain"
                          aria-expanded="false"
                          aria-controls="collapseMain"
                        >
                          <i class="more-less glyphicon glyphicon-plus"></i>
                          Search Filter
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseMain"
                      class="panel-collapse collapse "
                      role="tabpanel"
                      aria-labelledby="headingMain"
                      style="height: auto!important;"
                    >
                      <div class="panel-body">
                        <div
                          class="panel-group"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div class="panel panel-default" id="red-title">
                            <!-- Heading    -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingFive"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseFive"
                                  aria-expanded="true"
                                  aria-controls="collapseFive"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Search By Keyword
                                </a>
                              </h4>
                            </div>
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-title"
                            >
                              <!-- Content -->
                              <div
                                id="collapseFive"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingFive"
                              >
                                <div class="panel-body">
                                  <div class="search-widget">
                                    <input
                                      id="autocomplete-dynamic"
                                      autocomplete="off"
                                      class="form-control"
                                      placeholder="search"
                                      type="text"
                                      name="ad_title"
                                      value=""
                                    />
                                    <button type="submit">
                                      <i class="fa fa-search"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-category">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingOne"
                            >
                              <!-- Title -->
                              <h4 class="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Select Category
                                </a>
                              </h4>
                              <!-- Title End -->
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              id="make_search"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-category"
                            >
                              <div
                                id="collapseOne"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingOne"
                              >
                                <div class="panel-body">
                                  <label class="control-label">
                                    Select Category
                                  </label>
                                  <select
                                    class="search-select form-control"
                                    id="make_id"
                                  >
                                    <option value="">
                                      Select Any Category
                                    </option>
                                    <option value="50">Alfa Romeo </option>
                                    <option value="60">Aston Martin </option>
                                    <option value="62">Audi </option>
                                    <option value="65">Austin </option>
                                    <option value="66">Austin Healey </option>
                                    <option value="297">Aveo </option>
                                    <option value="68">Bentley </option>
                                    <option value="71">BMW </option>
                                    <option value="302">Bolt </option>
                                    <option value="307">Brothers </option>
                                    <option value="314">Camaro </option>
                                    <option value="325">Charger </option>
                                    <option value="84">Corvette </option>
                                    <option value="339">Dart </option>
                                    <option value="103">Ferrari </option>
                                    <option value="106">Ford </option>
                                    <option value="119">Honda </option>
                                    <option value="123">Hummer </option>
                                    <option value="132">Jaguar </option>
                                    <option value="134">Joy </option>
                                    <option value="135">Lamborghini </option>
                                    <option value="137">Land Rover </option>
                                    <option value="156">McLaren </option>
                                    <option value="157">Mercedes </option>
                                    <option value="161">Mitsubishi </option>
                                    <option value="167">Nissan </option>
                                    <option value="169">Nitro </option>
                                    <option value="172">Optra </option>
                                    <option value="177">Porsche </option>
                                    <option value="194">Renault </option>
                                    <option value="198">Rolls-Royce </option>
                                    <option value="210">Sonic </option>
                                    <option value="211">Spark </option>
                                    <option value="218">Stealth </option>
                                    <option value="222">Suzuki </option>
                                    <option value="239">Viper </option>
                                    <option value="242">Volt </option>
                                  </select>
                                  <div
                                    id="select_modal"
                                    class="margin-top-10"
                                  ></div>
                                  <div
                                    id="select_modals"
                                    class="margin-top-10"
                                  ></div>
                                  <div
                                    id="select_forth_div"
                                    class="margin-top-10"
                                  ></div>
                                  <input
                                    type="submit"
                                    class="btn btn-theme btn-sm margin-top-10 margin-bottom-10"
                                    id="search_make"
                                    value="Search"
                                  />
                                </div>
                              </div>
                              <input
                                type="hidden"
                                name="cat_id"
                                id="cat_id"
                                value=""
                              />
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-country">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="location_heading"
                            >
                              <!-- Title -->
                              <h4 class="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#ad-location"
                                  aria-expanded="true"
                                  aria-controls="ad-location"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Ads By Location
                                </a>
                              </h4>
                              <!-- Title End -->
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              id="search_countries"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-country"
                            >
                              <div
                                id="ad-location"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="location_heading"
                              >
                                <div class="panel-body countries">
                                  <ul>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-country-id="230"
                                      >
                                        United States

                                        <span>(12)</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <input
                                type="hidden"
                                name="country_id"
                                id="country_id"
                                value=""
                              />
                            </form>
                            <div
                              class="search-modal modal fade states_model"
                              id="states_model"
                              tabindex="-1"
                              role="dialog"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                    >
                                      <span aria-hidden="true">&#10005;</span>
                                      <span class="sr-only">Close</span>
                                    </button>
                                    <h3 class="modal-title text-center">
                                      <i class="icon-gears"></i>
                                      Select Your Location
                                    </h3>
                                  </div>
                                  <div class="modal-body">
                                    <!-- content goes here -->
                                    <div class="search-block">
                                      <div class="row">
                                        <div
                                          class="col-md-12 col-xs-12 col-sm-12 popular-search"
                                          id="countries_response"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="submit"
                                      id="country-btn"
                                      class="btn btn-lg btn-block"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="panel panel-default" id="red-price">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingfour"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapsefour"
                                  aria-expanded="false"
                                  aria-controls="collapsefour"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Price
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-price"
                              class="carspot-price-form"
                            >
                              <div
                                id="collapsefour"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingfour"
                              >
                                <div class="panel-body">
                                  <span class="price-slider-value"
                                    >Price ($ )

                                    <span id="price-min"></span> -
                                    <span id="price-max"></span>
                                  </span>
                                  <div id="price-slider"></div>
                                  <div class="input-group margin-top-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="min_price"
                                      id="min_selected"
                                      value="500"
                                    />
                                    <span class="input-group-addon">-</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="max_price"
                                      id="max_selected"
                                      value="100000"
                                    />
                                  </div>
                                  <input
                                    type="hidden"
                                    id="min_price"
                                    value="500"
                                  />
                                  <input
                                    type="hidden"
                                    id="max_price"
                                    value="100000"
                                  />
                                  <input
                                    type="submit"
                                    class="btn btn-theme btn-sm margin-top-10"
                                    value="Search"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-milage">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="ad-mileage"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#mileage"
                                  aria-expanded="true"
                                  aria-controls="ad-mileage"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Ad Mileage (Km)
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              id="get_mileage"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-milage"
                            >
                              <div
                                id="mileage"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="ad-mileage"
                              >
                                <div class="panel-body">
                                  <div class="input-group margin-top-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="mileage_from"
                                      data-parsley-type="digits"
                                      data-parsley-required="true"
                                      data-parsley-error-message="Value should be numeric"
                                      placeholder="From"
                                      id="mileage_from"
                                      value=""
                                    />
                                    <span class="input-group-addon">-</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      data-parsley-required="true"
                                      data-parsley-type="digits"
                                      data-parsley-error-message="Value should be numeric"
                                      placeholder="To"
                                      name="mileage_to"
                                      id="mileage_to"
                                      value=""
                                    />
                                  </div>
                                  <input
                                    type="submit"
                                    class="btn btn-theme btn-sm margin-top-10"
                                    value="Search"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-years">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingYear"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#Yearcollapse"
                                  aria-expanded="true"
                                  aria-controls="Yearcollapse"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Year
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-years"
                            >
                              <div
                                id="Yearcollapse"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingYear"
                              >
                                <div class="panel-body">
                                  <div class="input-group  margin-top-10">
                                    <span class="input-group-addon">From</span>
                                    <select
                                      id="year_from"
                                      name="year_from"
                                      class="form-control"
                                    >
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2014">2014</option>
                                      <option value="2015">2015</option>
                                      <option value="2016">2016</option>
                                      <option value="2017">2017</option>
                                    </select>
                                  </div>
                                  <div class="input-group">
                                    <span class="input-group-addon">To</span>
                                    <select
                                      id="year_to"
                                      name="year_to"
                                      class="form-control"
                                    >
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2014">2014</option>
                                      <option value="2015">2015</option>
                                      <option value="2016">2016</option>
                                      <option value="2017">2017</option>
                                    </select>
                                  </div>
                                  <input
                                    type="submit"
                                    id="ad_year"
                                    class="btn btn-theme btn-sm margin-top-10"
                                    value="Search"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            class="panel panel-default"
                            id="red-transmission"
                          >
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="body_transmission"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#transmission"
                                  aria-expanded="true"
                                  aria-controls="body_transmission"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Transmission
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-transmission"
                            >
                              <div
                                id="transmission"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="body_transmission"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="transmission-type-67"
                                          value="Automatic"
                                          name="transmission[]"
                                        />
                                        <label for="transmission-type-67"
                                          >Automatic</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="transmission-type-151"
                                          value="Manual"
                                          name="transmission[]"
                                        />
                                        <label for="transmission-type-151"
                                          >Manual</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-engine-type">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="ad_body_type"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#body_type"
                                  aria-expanded="true"
                                  aria-controls="ad_body_type"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Engine Type
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-engine-type"
                            >
                              <div
                                id="body_type"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="ad_body_type"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-type-81"
                                          value="CNG"
                                          name="engine_type[]"
                                        />
                                        <label for="engine-type-81">CNG</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-type-96"
                                          value="Diesel"
                                          name="engine_type[]"
                                        />
                                        <label for="engine-type-96"
                                          >Diesel</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-type-126"
                                          value="Hybrid"
                                          name="engine_type[]"
                                        />
                                        <label for="engine-type-126"
                                          >Hybrid</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-type-176"
                                          value="Petrol"
                                          name="engine_type[]"
                                        />
                                        <label for="engine-type-176"
                                          >Petrol</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            class="panel panel-default"
                            id="red-engine-capacity"
                          >
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="engince-capacity"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#engine_capacity"
                                  aria-expanded="true"
                                  aria-controls="engince-capacity"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Engine Capacity (CC)
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-engine-capacity"
                            >
                              <div
                                id="engine_capacity"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="engince-capacity"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-29"
                                          value="1000"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-29"
                                          >1000 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-30"
                                          value="1200"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-30"
                                          >1200 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-31"
                                          value="1500"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-31"
                                          >1500 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-32"
                                          value="2000"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-32"
                                          >2000 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-42"
                                          value="2500"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-42"
                                          >2500 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-43"
                                          value="3000"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-43"
                                          >3000 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-44"
                                          value="3500"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-44"
                                          >3500 cc</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="engine-capacity-45"
                                          value="800"
                                          name="engine_capacity[]"
                                        />
                                        <label for="engine-capacity-45"
                                          >800 cc</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-body-type">
                            <!-- Heading -->
                            <div class="panel-heading" role="tab" id="bodytype">
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#ad_bodytype"
                                  aria-expanded="true"
                                  aria-controls="body_type"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Body Type
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-body-type"
                            >
                              <div
                                id="ad_bodytype"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="bodytype"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-82"
                                          value="Convertible"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-82"
                                          >Convertible</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-85"
                                          value="Coupe"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-85">Coupe</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-87"
                                          value="Crossover"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-87"
                                          >Crossover</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-100"
                                          value="Electric"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-100"
                                          >Electric</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-118"
                                          value="Hatchback"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-118"
                                          >Hatchback</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-127"
                                          value="Hybrid"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-127"
                                          >Hybrid</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-140"
                                          value="Luxury"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-140"
                                          >Luxury</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-203"
                                          value="Sedan"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-203">Sedan</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-220"
                                          value="SUV"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-220">SUV</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-226"
                                          value="Truck"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-226">Truck</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-234"
                                          value="Van/Minivan"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-234"
                                          >Van/Minivan</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="body-type-243"
                                          value="Wagon"
                                          name="body_type[]"
                                        />
                                        <label for="body-type-243">Wagon</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            class="panel panel-default"
                            id="red-color-family"
                          >
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="ad-color-family"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#ad-color"
                                  aria-expanded="true"
                                  aria-controls="ad-color-family"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Color Family
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-color-family"
                            >
                              <div
                                id="ad-color"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="ad-color-family"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-69"
                                          value="Black"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-69">Black</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-70"
                                          value="Blue"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-70">Blue</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-75"
                                          value="Bronze"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-75">Bronze</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-113"
                                          value="Gold"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-113">Gold</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-114"
                                          value="Green"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-114">Green</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-115"
                                          value="Grey"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-115">Grey</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-192"
                                          value="Red"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-192">Red</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-206"
                                          value="Silver"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-206">Silver</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-245"
                                          value="White"
                                          name="color_family[]"
                                        />
                                        <label for="ad_color-245">White</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-ad-type">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingSeven"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseSeven"
                                  aria-expanded="true"
                                  aria-controls="collapseSeven"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Car Type
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-ad-type"
                            >
                              <div
                                id="collapseSeven"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingSeven"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          tabindex="7"
                                          type="checkbox"
                                          id="minimal-radio-76"
                                          name="ad_type[]"
                                          value="Buy"
                                        />
                                        <label for="minimal-radio-76"
                                          >Buy</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          tabindex="7"
                                          type="checkbox"
                                          id="minimal-radio-204"
                                          name="ad_type[]"
                                          value="Sell"
                                        />
                                        <label for="minimal-radio-204"
                                          >Sell</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-isurance">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="ad-insurance"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#insurance"
                                  aria-expanded="true"
                                  aria-controls="ad-insurance"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Car Insurance
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-isurance"
                            >
                              <div
                                id="insurance"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="ad-insurance"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-170"
                                          value="No"
                                          name="insurance[]"
                                        />
                                        <label for="ad_color-170">No</label>
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad_color-247"
                                          value="Yes"
                                          name="insurance[]"
                                        />
                                        <label for="ad_color-247">Yes</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-assembly">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="ad-assembly-type"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#ad-assembly"
                                  aria-expanded="true"
                                  aria-controls="ad-assembly-type"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Car Assembly
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-assembly"
                            >
                              <div
                                id="ad-assembly"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="ad-assembly-type"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad-assembly-131"
                                          value="Imported"
                                          name="assembly[]"
                                        />
                                        <label for="ad-assembly-131"
                                          >Imported</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          type="checkbox"
                                          id="ad-assembly-139"
                                          value="Local"
                                          name="assembly[]"
                                        />
                                        <label for="ad-assembly-139"
                                          >Local</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="panel panel-default" id="red-condition">
                            <!-- Heading -->
                            <div
                              class="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <i
                                    class="more-less glyphicon glyphicon-plus"
                                  ></i>
                                  Condition
                                </a>
                              </h4>
                            </div>
                            <!-- Content -->
                            <form
                              method="get"
                              action="https://carspot.scriptsbundle.com/search-cars/#red-condition"
                            >
                              <div
                                id="collapseThree"
                                class="panel-collapse collapse "
                                role="tabpanel"
                                aria-labelledby="headingThree"
                              >
                                <div class="panel-body">
                                  <div class="skin-minimal">
                                    <ul class="list">
                                      <li>
                                        <input
                                          tabindex="7"
                                          type="checkbox"
                                          id="minimal-radio-166"
                                          name="condition[]"
                                          value="New"
                                        />
                                        <label for="minimal-radio-166"
                                          >New</label
                                        >
                                      </li>
                                      <li>
                                        <input
                                          tabindex="7"
                                          type="checkbox"
                                          id="minimal-radio-231"
                                          name="condition[]"
                                          value="Used"
                                        />
                                        <label for="minimal-radio-231"
                                          >Used</label
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </form> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9 col-lg-9 col-xs-12">
              <!-- Row -->
              <div class="row">
                <div
                  class="col-md-12 col-xs-12 col-md-search-tx col-sm-12 col-lg-12"
                >
                  <div class="clearfix"></div>
                  <div class="listingTopFilterBar">
                    <div class="col-md-7 col-xs-12 col-sm-6 no-padding">
                      <ul class="filterAdType">
                        <li class="active">
                          <a
                            href="javascript:void(0)"
                            style="background-color: #e0e0e0; color: #232323;"
                            >Found Ads

                            <small>(12)</small>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-5 col-xs-12 col-sm-6 no-padding">
                      <div class="header-listing">
                        <h6>Sort by:</h6>
                        <div class="custom-select-box">
                          <form method="get">
                            <select
                              name="sort"
                              id="order_by"
                              class="custom-select"
                            >
                              <option value="id-desc">Newest To Oldest</option>
                              <option value="id-asc">Oldest To New</option>
                              <option value="title-asc"
                                >Alphabetically [a-z]</option
                              >
                              <option value="title-desc"
                                >Alphabetically [z-a]</option
                              >
                              <option value="price-desc">Highest price</option>
                              <option value="price-asc">Lowest price</option>
                            </select>
                          </form>
                        </div>
                        <div class="grid-list">
                          <i class="fa fa-th product-arrangement-icon"></i>
                          <i class="fa fa-list product-arrangement-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="clearfix"></div>
                <!-- Ads Archive -->
                <!-- Ads Archive End -->
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-grid-tx">
              <div class="grid-style-2">
                <div class="posts-masonry">
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-1375"
                  >
                    <div class="category-grid-box-1">
                      <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                      <div class="image">
                        <div class="hot-ribbon">
                          <img src="../assets/images/hot-deals.svg" />
                        </div>
                        <a
                          href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                        >
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                            alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles"
                            class="img-responsive"
                          />
                        </a>
                        <!-- <a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><img src="../wp-content/uploads/2017/12/IMG_5006-268x166.jpg" alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles" class="img-responsive"></a>  -->
                        <!-- <div class="play-video"><i class="fa fa-camera price-tag-tx camera-icon"></i></div> -->
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 64,500

                              <span class="">(Negotiable)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/audi/index.html">Audi</a>
                          </span>
                          <span class="padding_cats">
                            <a href="../ad_category/a3/index.html">A3</a>
                          </span>
                        </div>
                        <h3>
                          <a
                            href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                            >2017 Maserati Ghibli...</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/california/index.html"
                            >California</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>1,694 Km</li>
                          <li><i class="flaticon-engine-2"></i>3,000 cc</li>
                          <li><i class="flaticon-car-2"></i>Sedan</li>
                          <li><i class="flaticon-cogwheel-outline"></i>Blue</li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>January 24, 2019</span>
                        </p>
                        <!-- <ul class="pull-right "><li><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Save Ad" href="javascript:void(0);" class="save-ad" data-adid="1375"><i class="flaticon-like-1"></i></a></li><li><a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><i class="flaticon-message"></i></a></li></ul> -->
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                          >
                            Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-1366"
                  >
                    <div class="category-grid-box-1">
                      <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                      <div class="image">
                        <div class="hot-ribbon">
                          <img src="../assets/images/hot-deals.svg" />
                        </div>
                        <a
                          href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                        >
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150901428-268x166.jpg"
                            alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                            class="img-responsive"
                          />
                        </a>
                        <!-- <a href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"><img src="../wp-content/uploads/2017/12/KakaoTalk_20170912_150901428-268x166.jpg" alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017" class="img-responsive"></a>  -->
                        <!-- <div class="play-video"><i class="fa fa-camera price-tag-tx camera-icon"></i></div> -->
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 20,000

                              <span class="">(Fixed)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/audi/index.html">Audi</a>
                          </span>
                          <span class="padding_cats">
                            <a href="../ad_category/a4/index.html">A4</a>
                          </span>
                        </div>
                        <h3>
                          <a
                            href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                            >Maserati Ghibli SQ4 ...</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/california/index.html"
                            >California</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>1,695 Km</li>
                          <li><i class="flaticon-engine-2"></i>2,000 cc</li>
                          <li><i class="flaticon-car-2"></i>Sedan</li>
                          <li>
                            <i class="flaticon-cogwheel-outline"></i>Black
                          </li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>January 24, 2019</span>
                        </p>
                        <!-- <ul class="pull-right "><li><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Save Ad" href="javascript:void(0);" class="save-ad" data-adid="1366"><i class="flaticon-like-1"></i></a></li><li><a href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"><i class="flaticon-message"></i></a></li></ul> -->
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                            >Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-1362"
                  >
                    <div class="category-grid-box-1">
                      <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                      <div class="image">
                        <div class="arrow-ribbon bg-primary bg-tag-tx">
                          Premium
                        </div>
                        <a
                          href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                          class="play-video"
                        >
                          <i
                            class="fa fa-play-circle"
                            style="font-size: 24px; color: #fff;"
                          ></i>
                        </a>
                        <a
                          href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                        >
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20171221_162520395-268x166.jpg"
                            alt="2017 Maserati Ghibli SQ4 Blue 1,694 Miles"
                            class="img-responsive"
                          />
                        </a>
                        <!-- <a href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"><img src="../wp-content/uploads/2017/12/KakaoTalk_20171221_162520395-268x166.jpg" alt="2017 Maserati Ghibli SQ4 Blue 1,694 Miles" class="img-responsive"></a>  -->
                        <!-- <div class="play-video"><i class="fa fa-camera price-tag-tx camera-icon"></i><i class="fa fa-video-camera price-tag-tx camera-icon"></i></div> -->
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 64,500

                              <span class="">(Negotiable)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/austin/index.html"
                              >Austin</a
                            >
                          </span>
                          <span class="padding_cats">
                            <a href="../ad_category/mini/index.html">Mini</a>
                          </span>
                        </div>
                        <h3>
                          <a
                            href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                            >2017 Maserati Ghibli...</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/california/index.html"
                            >California</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>1,694 Km</li>
                          <li><i class="flaticon-engine-2"></i>3,500 cc</li>
                          <li><i class="flaticon-car-2"></i>Sedan</li>
                          <li><i class="flaticon-cogwheel-outline"></i>Blue</li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>January 24, 2019</span>
                        </p>
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                            >Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-1554"
                  >
                    <div class="category-grid-box-1">
                      <div class="image">
                        <div class="arrow-ribbon bg-primary bg-tag-tx">
                          Premium
                        </div>
                        <a href="../ad/2017-ford-mustang-2/index.html">
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2019/01/3-268x166.jpeg"
                            alt="2017 Ford Mustang"
                            class="img-responsive"
                          />
                        </a>
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 37,455

                              <span class="">(Fixed)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/ford/index.html">Ford</a>
                          </span>
                          <span class="padding_cats">
                            <a href="../ad_category/mustang/index.html"
                              >Mustang</a
                            >
                          </span>
                        </div>
                        <h3>
                          <a href="../ad/2017-ford-mustang-2/index.html"
                            >2017 Ford Mustang</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/fort-lauderdale/index.html"
                            >Fort Lauderdale</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>12,454 Km</li>
                          <li><i class="flaticon-engine-2"></i>2,000 cc</li>
                          <li><i class="flaticon-car-2"></i>Coupe</li>
                          <li>
                            <i class="flaticon-cogwheel-outline"></i>White
                          </li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>January 24, 2019</span>
                        </p>
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                            >Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <!-- <div class="row"> -->
                  <div class="col-md-12 biggest-ad-product-page">
                    <img
                      src="../assets/images/roam123.jpg"
                      style="width: 100%; object-fit: cover; height: 212px;"
                    />
                  </div>
                  <!-- </div> -->
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-1552"
                  >
                    <div class="category-grid-box-1">
                      <div class="image">
                        <div class="arrow-ribbon bg-tag-gold-tx">Gold</div>
                        <a href="../ad/2010-chevrolet-camaro/index.html">
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2019/01/6-268x166.jpg"
                            alt="2010 Chevrolet Camaro"
                            class="img-responsive"
                          />
                        </a>
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 37,345

                              <span class="">(Negotiable)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/corvette/index.html"
                              >Corvette</a
                            >
                          </span>
                        </div>
                        <h3>
                          <a href="../ad/2010-chevrolet-camaro/index.html"
                            >2010 Chevrolet Camaro</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/fort-lauderdale/index.html"
                            >Fort Lauderdale</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>23 Km</li>
                          <li><i class="flaticon-engine-2"></i>1,500 cc</li>
                          <li><i class="flaticon-car-2"></i>Coupe</li>
                          <li>
                            <i class="flaticon-cogwheel-outline"></i>White
                          </li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>January 24, 2019</span>
                        </p>
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                          >
                            Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-960"
                  >
                    <div class="category-grid-box-1">
                      <div class="image">
                        <div class="arrow-ribbon bg-tag-gold-tx">Gold</div>
                        <a href="../ad/audi-a5-for-sale/index.html">
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-268x166.jpg"
                            alt="Audi A5 For Sale"
                            class="img-responsive"
                          />
                        </a>
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx"
                              >&#8358; 95,000

                              <span class="">(Fixed)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/audi/index.html">Audi</a>
                          </span>
                          <span class="padding_cats">
                            <a href="../ad_category/a5/index.html">A5</a>
                          </span>
                        </div>
                        <h3>
                          <a href="../ad/audi-a5-for-sale/index.html"
                            >Audi A5 For Sale</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/lake-havasu-city/index.html"
                            >Lake Havasu City</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                          <li><i class="flaticon-dashboard"></i>50,000 Km</li>
                          <li><i class="flaticon-engine-2"></i>1,500 cc</li>
                          <li><i class="flaticon-car-2"></i>Convertible</li>
                          <!-- <li> -->
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>July 21, 2017</span>
                        </p>
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                            >Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-877"
                  >
                    <div class="category-grid-box-1">
                      <div class="image">
                        <div class="arrow-ribbon bg-tag-gold-tx">Gold</div>
                        <a
                          href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                          class="play-video"
                        >
                          <i
                            class="fa fa-play-circle"
                            style="font-size: 24px; color: #fff;"
                          ></i>
                        </a>
                        <!-- <a href="https://www.youtube.com/watch?v=lr7mPzjTgC0" class="play-video"><img src="../wp-content/uploads/2017/08/playbutton-u693-r.png" alt="Icon"></a> -->
                        <a href="../ad/renault-duster-2017/index.html">
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/07/1-1-268x166.jpg"
                            alt="Renault Duster 2017"
                            class="img-responsive"
                          />
                        </a>
                        <!-- <a href="../ad/renault-duster-2017/index.html"><img src="../wp-content/uploads/2017/07/1-1-268x166.jpg" alt="Renault Duster 2017" class="img-responsive"></a>  -->
                        <div class="price-tag">
                          <div class="price">
                            <span class="price-tag-tx">&#8358; 45,200</span>
                          </div>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                        <div class="category-title">
                          <span class="padding_cats">
                            <a href="../ad_category/renault/index.html"
                              >Renault</a
                            >
                          </span>
                        </div>
                        <h3>
                          <a href="../ad/renault-duster-2017/index.html"
                            >Renault Duster 2017</a
                          >
                        </h3>
                        <p class="location">
                          <i class="fa fa-map-marker"></i>
                          <a href="../ad_country/long-beach/index.html"
                            >Long Beach</a
                          >,
                          <a href="../ad_country/united-states/index.html"
                            >United States</a
                          >
                        </p>
                        <ul class="list-unstyled">
                          <li><i class="flaticon-gas-station-1"></i>Diesel</li>
                          <li><i class="flaticon-dashboard"></i>17,000 Km</li>
                          <li><i class="flaticon-engine-2"></i>3,500 cc</li>
                          <li><i class="flaticon-car-2"></i>SUV</li>
                          <li><i class="flaticon-cogwheel-outline"></i>Blue</li>
                        </ul>
                      </div>
                      <div class="ad-info-1">
                        <p>
                          <i class="flaticon-calendar"></i> &nbsp;
                          <span>July 13, 2017</span>
                        </p>
                        <div class="icon-reveal">
                          <a class="btn icon-reveal-btn">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div class="button-reveal">
                          <a
                            class="btn btn-block button-reveal-btn"
                            href="productdetail.html"
                            >Contact Seller</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Listing Ad Grid -->
                  </div>
                  <div
                    class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                    id=".holder-873"
                  >
                    <div class="category-grid-box-1">
                      <div class="image">
                        <a
                          href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                          class="play-video"
                        >
                          <i
                            class="fa fa-play-circle"
                            style="font-size: 24px; color: #fff;"
                          ></i>
                        </a>
                        <a href="../ad/rolls-royce-phantom/index.html">
                          <img
                            src="../assets/carspot-css/wp-content/uploads/2017/07/5-268x166.jpg"
                            alt="Rolls Royce Phantom"
                            class="img-responsive"
                          />
                        </a>
                        <div class="price">
                          <span class="price-tag-tx">&#8358; 77,900</span>
                        </div>
                      </div>
                      <div class="short-description-1 clearfix">
                      <div class="category-title">
                        <span class="padding_cats">
                          <a href="../ad_category/rolls-royce/index.html"
                            >Rolls-Royce</a
                          >
                        </span>
                      </div>
                      <h3>
                        <a href="../ad/rolls-royce-phantom/index.html"
                          >Rolls Royce Phantom</a
                        >
                      </h3>
                      <p class="location">
                        <i class="fa fa-map-marker"></i>
                        <a href="../ad_country/dalton/index.html">Dalton</a>,
                        <a href="../ad_country/georgia/index.html">Georgia</a>,
                        <a href="../ad_country/united-states/index.html"
                          >United States</a
                        >
                      </p>
                      <ul class="list-unstyled">
                        <li><i class="flaticon-gas-station-1"></i>Diesel</li>
                        <li><i class="flaticon-dashboard"></i>70,000 Km</li>
                        <li><i class="flaticon-engine-2"></i>3,500 cc</li>
                        <li><i class="flaticon-car-2"></i>Sedan</li>
                        <li><i class="flaticon-cogwheel-outline"></i>Red</li>
                      </ul>
                    </div>
                    <div class="ad-info-1">
                      <p>
                        <i class="flaticon-calendar"></i> &nbsp;
                        <span>July 13, 2017</span>
                      </p>
                      <!-- <ul class="pull-right "><li><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Save Ad" href="javascript:void(0);" class="save-ad" data-adid="873"><i class="flaticon-like-1"></i></a></li><li><a href="../ad/rolls-royce-phantom/index.html"><i class="flaticon-message"></i></a></li></ul> -->
                      <div class="icon-reveal">
                        <a class="btn icon-reveal-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                      <div class="button-reveal">
                        <a
                          class="btn btn-block button-reveal-btn"
                          href="productdetail.html"
                          >Contact Seller</a
                        >
                      </div>
                    </div>
                    </div>
                    
                  </div>
                  <!-- Listing Ad Grid -->
                </div>
                <div
                  class="col-md-3  col-lg-3 col-sm-6 col-xs-12"
                  id=".holder-89"
                >
                  <div class="category-grid-box-1">
                    <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                    <div class="image">
                      <a
                        href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                        class="play-video"
                      >
                        <i
                          class="fa fa-play-circle"
                          style="font-size: 24px; color: #fff;"
                        ></i>
                      </a>
                      <!-- <a href="https://www.youtube.com/watch?v=lr7mPzjTgC0" class="play-video"><img src="../wp-content/uploads/2017/08/playbutton-u693-r.png" alt="Icon"></a> -->
                      <a href="../ad/land-rover-freelander-2-se/index.html">
                        <img
                          src="../assets/carspot-css/wp-content/uploads/2017/06/1-13-268x166.jpg"
                          alt="Land Rover Freelander 2 Se"
                          class="img-responsive"
                        />
                      </a>
                      <div class="price-tag">
                        <div class="price">
                          <span class="price-tag-tx">Price On Call</span>
                        </div>
                      </div>
                    </div>
                    <div class="short-description-1 clearfix">
                      <div class="category-title">
                        <span class="padding_cats">
                          <a href="../ad_category/land-rover/index.html"
                            >Land Rover</a
                          >
                        </span>
                      </div>
                      <h3>
                        <a href="../ad/land-rover-freelander-2-se/index.html"
                          >Land Rover Freelande...</a
                        >
                      </h3>
                      <p class="location">
                        <i class="fa fa-map-marker"></i>
                        <a href="../ad_country/district-of-columbia/index.html"
                          >District of Columbia</a
                        >,
                        <a href="../ad_country/united-states/index.html"
                          >United States</a
                        >
                      </p>
                      <ul class="list-unstyled">
                        <li><i class="flaticon-gas-station-1"></i>Diesel</li>
                        <li><i class="flaticon-dashboard"></i>1,300 Km</li>
                        <li><i class="flaticon-engine-2"></i>1,500 cc</li>
                        <li><i class="flaticon-car-2"></i>Luxury</li>
                        <li><i class="flaticon-cogwheel-outline"></i>Blue</li>
                      </ul>
                    </div>
                    <div class="ad-info-1">
                      <p>
                        <i class="flaticon-calendar"></i> &nbsp;
                        <span>June 20, 2017</span>
                      </p>
                      <div class="icon-reveal">
                        <a class="btn icon-reveal-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                      <div class="button-reveal">
                        <a
                          class="btn btn-block button-reveal-btn"
                          href="productdetail.html"
                          >Contact Seller</a
                        >
                      </div>
                    </div>
                  </div>
                  <!-- Listing Ad Grid -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
import hotsellers from "@/components/product_overview/hotsellers";
export default {
  name: "gridlist",
  components: {
    hotsellers
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
