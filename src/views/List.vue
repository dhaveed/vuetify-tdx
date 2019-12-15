<template>
  <div class="list">
    <div class="main-content-area clearfix">
      <section class="section-padding  gray page-search">
        <div class="container">
          <!-- Row -->
          <div class="row">
            <div class="col-md-3 col-sm-12 col-xs-12">
              <div class="sidebar">
                <div
                  class="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="panel panel-default" id="red-title">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="headingFive">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-category">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="headingOne">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
                          Select Make
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
                          <label class="control-label"> Select Make </label>
                          <select
                            class="search-select form-control"
                            id="make_id"
                          >
                            <option value=""> Select Any Category </option>
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
                          <div id="select_modal" class="margin-top-10"></div>

                          <div id="select_modals" class="margin-top-10"></div>

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
                      <input type="hidden" name="cat_id" id="cat_id" value="" />

                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>
                  <div class="panel panel-default" id="red-country">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="location_heading">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
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
                              <span aria-hidden="true">&#10005;</span
                              ><span class="sr-only">Close</span>
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
                    <div class="panel-heading" role="tab" id="headingfour">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                            >Price (&#8358;) <span id="price-min"></span> -
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

                          <input type="hidden" id="min_price" value="500" />
                          <input type="hidden" id="max_price" value="100000" />
                          <input
                            type="submit"
                            class="btn btn-theme btn-sm margin-top-10"
                            value="Search"
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>
                  <div class="panel panel-default" id="red-milage">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="ad-mileage">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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

                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-years">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="headingYear">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                              <option value="2010">2010 </option>
                              <option value="2011">2011 </option>
                              <option value="2012">2012 </option>
                              <option value="2013">2013 </option>
                              <option value="2014">2014 </option>
                              <option value="2015">2015 </option>
                              <option value="2016">2016 </option>
                              <option value="2017">2017 </option>
                            </select>
                          </div>
                          <div class="input-group">
                            <span class="input-group-addon">To</span>
                            <select
                              id="year_to"
                              name="year_to"
                              class="form-control"
                            >
                              <option value="2010">2010 </option>
                              <option value="2011">2011 </option>
                              <option value="2012">2012 </option>
                              <option value="2013">2013 </option>
                              <option value="2014">2014 </option>
                              <option value="2015">2015 </option>
                              <option value="2016">2016 </option>
                              <option value="2017">2017 </option>
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
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-transmission">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                  >Automatic
                                </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="transmission-type-151"
                                  value="Manual"
                                  name="transmission[]"
                                />
                                <label for="transmission-type-151"
                                  >Manual
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-engine-type">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="ad_body_type">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                <label for="engine-type-81">CNG </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-type-96"
                                  value="Diesel"
                                  name="engine_type[]"
                                />
                                <label for="engine-type-96">Diesel </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-type-126"
                                  value="Hybrid"
                                  name="engine_type[]"
                                />
                                <label for="engine-type-126">Hybrid </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-type-176"
                                  value="Petrol"
                                  name="engine_type[]"
                                />
                                <label for="engine-type-176">Petrol </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-engine-capacity">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="engince-capacity">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                <label for="engine-capacity-29">1000 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-30"
                                  value="1200"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-30">1200 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-31"
                                  value="1500"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-31">1500 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-32"
                                  value="2000"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-32">2000 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-42"
                                  value="2500"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-42">2500 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-43"
                                  value="3000"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-43">3000 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-44"
                                  value="3500"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-44">3500 cc</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="engine-capacity-45"
                                  value="800"
                                  name="engine_capacity[]"
                                />
                                <label for="engine-capacity-45">800 cc</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                <label for="body-type-82">Convertible </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-85"
                                  value="Coupe"
                                  name="body_type[]"
                                />
                                <label for="body-type-85">Coupe </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-87"
                                  value="Crossover"
                                  name="body_type[]"
                                />
                                <label for="body-type-87">Crossover </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-100"
                                  value="Electric"
                                  name="body_type[]"
                                />
                                <label for="body-type-100">Electric </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-118"
                                  value="Hatchback"
                                  name="body_type[]"
                                />
                                <label for="body-type-118">Hatchback </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-127"
                                  value="Hybrid"
                                  name="body_type[]"
                                />
                                <label for="body-type-127">Hybrid </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-140"
                                  value="Luxury"
                                  name="body_type[]"
                                />
                                <label for="body-type-140">Luxury </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-203"
                                  value="Sedan"
                                  name="body_type[]"
                                />
                                <label for="body-type-203">Sedan </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-220"
                                  value="SUV"
                                  name="body_type[]"
                                />
                                <label for="body-type-220">SUV </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-226"
                                  value="Truck"
                                  name="body_type[]"
                                />
                                <label for="body-type-226">Truck </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-234"
                                  value="Van/Minivan"
                                  name="body_type[]"
                                />
                                <label for="body-type-234">Van/Minivan </label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="body-type-243"
                                  value="Wagon"
                                  name="body_type[]"
                                />
                                <label for="body-type-243">Wagon </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-color-family">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="ad-color-family">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-ad-type">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="headingSeven">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                <label for="minimal-radio-76">Buy</label>
                              </li>
                              <li>
                                <input
                                  tabindex="7"
                                  type="checkbox"
                                  id="minimal-radio-204"
                                  name="ad_type[]"
                                  value="Sell"
                                />
                                <label for="minimal-radio-204">Sell</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-isurance">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="ad-insurance">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-assembly">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="ad-assembly-type">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
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
                                <label for="ad-assembly-131">Imported</label>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id="ad-assembly-139"
                                  value="Local"
                                  name="assembly[]"
                                />
                                <label for="ad-assembly-139">Local</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
                    </form>
                  </div>

                  <div class="panel panel-default" id="red-condition">
                    <!-- Heading -->
                    <div class="panel-heading" role="tab" id="headingThree">
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
                          <i class="more-less glyphicon glyphicon-plus"></i>
                          Condition
                        </a>
                      </h4>
                    </div>
                    <!-- Content -->
                    <form
                      method="get"
                      action="https://carspot.scriptsbundle.com/search-cars/#red-condition"
                    >
                      <input
                        type="hidden"
                        name="carspot_layout_type"
                        value="1"
                      />
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
                                <label for="minimal-radio-166">New</label>
                              </li>
                              <li>
                                <input
                                  tabindex="7"
                                  type="checkbox"
                                  id="minimal-radio-231"
                                  name="condition[]"
                                  value="Used"
                                />
                                <label for="minimal-radio-231">Used</label>
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
            <div class="col-md-9 col-lg-9 col-xs-12">
              <!-- Row -->
              <div class="row">
                <div class="clearfix"></div>
                <div class="list-style-1">
                  <div class="panel with-nav-tabs panel-default">
                    <div class="panel-heading">
                      <ul class="nav nav-tabs">
                        <li class="active">
                          <a href="#tab1default" data-toggle="tab"
                            >Latest Ads</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="panel-body">
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="tab1default">
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a
                                  href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                                >
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-360x270.jpg"
                                    alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="arrow-ribbon bg-primary bg-tag-tx">
                                  Premium
                                </div>
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
                                  &#8358; 64,500<span class=""
                                    >(Negotiable)</span
                                  >
                                </div>
                                <!-- Title -->
                                <h3>
                                  <a
                                    href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                                    >2017 Maserati Ghibli SQ4 Blue 1,695
                                    Miles</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a href="../ad_category/audi/index.html"
                                      >Audi</a
                                    ></span
                                  ><span class="padding_cats"
                                    ><a href="../ad_category/a3/index.html"
                                      >A3</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  If you have any questions, please feel free to
                                  contact us at 813-246-3673! And be sure to
                                  check out this vehic...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-110x60.jpg"
                                        alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : January 24, 2019
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="1375"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- Ad Desc End -->
                            </div>
                            <!-- Content Block End -->
                          </div>
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a
                                  href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                >
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150901428-360x270.jpg"
                                    alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="arrow-ribbon bg-primary bg-tag-tx">
                                  Premium
                                </div>
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
                                  &#8358; 20,000<span class="">(Fixed)</span>
                                </div>
                                <!-- Title -->
                                <h3>
                                  <a
                                    href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                    >Maserati Ghibli SQ4 Blue 1,695 Miles
                                    2017</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a href="../ad_category/audi/index.html"
                                      >Audi</a
                                    ></span
                                  ><span class="padding_cats"
                                    ><a href="../ad_category/a4/index.html"
                                      >A4</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  If you have any questions, please feel free to
                                  contact us at 813-246-3673! And be sure to
                                  check out this vehic...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150901428-110x60.jpg"
                                        alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150915848-110x60.jpg"
                                        alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150915666-110x60.jpg"
                                        alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150859281-110x60.jpg"
                                        alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20170912_150859367-110x60.jpg"
                                        alt="Maserati Ghibli SQ4 Blue 1,695 Miles 2017"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : January 24, 2019
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="1366"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/maserati-ghibli-sq4-blue-1695-miles-2017/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- Ad Desc End -->
                            </div>
                            <!-- Content Block End -->
                          </div>
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a
                                  href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                                >
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20171221_162520395-360x270.jpg"
                                    alt="2017 Maserati Ghibli SQ4 Blue 1,694 Miles"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="arrow-ribbon bg-primary bg-tag-tx">
                                  Premium
                                </div>
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
                                  &#8358; 64,500<span class=""
                                    >(Negotiable)</span
                                  >
                                </div>
                                <!-- Title -->
                                <h3>
                                  <a
                                    href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                                    >2017 Maserati Ghibli SQ4 Blue 1,694
                                    Miles</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a href="../ad_category/austin/index.html"
                                      >Austin</a
                                    ></span
                                  ><span class="padding_cats"
                                    ><a href="../ad_category/mini/index.html"
                                      >Mini</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  1 Owner, Factory Warranty, Fully Loaded
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20171221_162520395-110x60.jpg"
                                        alt="2017 Maserati Ghibli SQ4 Blue 1,694 Miles"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/12/KakaoTalk_20171221_162528445-110x60.jpg"
                                        alt="2017 Maserati Ghibli SQ4 Blue 1,694 Miles"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : January 24, 2019
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="1362"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/2017-maserati-ghibli-sq4-blue-1694-miles/index.html"
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
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a href="../ad/2017-ford-mustang-2/index.html">
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2019/01/3-360x270.jpg"
                                    alt="2017 Ford Mustang"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="arrow-ribbon bg-primary bg-tag-tx">
                                  Premium
                                </div>
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
                                  &#8358; 37,455<span class="">(Fixed)</span>
                                </div>
                                <!-- Title -->
                                <h3>
                                  <a href="../ad/2017-ford-mustang-2/index.html"
                                    >2017 Ford Mustang</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a href="../ad_category/ford/index.html"
                                      >Ford</a
                                    ></span
                                  ><span class="padding_cats"
                                    ><a href="../ad_category/mustang/index.html"
                                      >Mustang</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  **** Only 5,200 Miles *** &#8211; Ford
                                  Executive Vehicle &#8211; Convertible &#8211;
                                  Navigation &#8211; Shaker...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/2017-ford-mustang-2/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/3-110x60.jpg"
                                        alt="2017 Ford Mustang"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2017-ford-mustang-2/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/3-110x60-2.jpg"
                                        alt="2017 Ford Mustang"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2017-ford-mustang-2/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/wwww-110x60.jpg"
                                        alt="2017 Ford Mustang"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : January 24, 2019
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="1554"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/2017-ford-mustang-2/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- Ad Desc End -->
                            </div>
                            <!-- Content Block End -->
                          </div>
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a
                                  href="../ad/2010-chevrolet-camaro/index.html"
                                >
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2019/01/6-360x270.jpg"
                                    alt="2010 Chevrolet Camaro"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="featured-ribbon">
                                  <span>Featured</span>
                                </div>
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
                                  &#8358; 37,345<span class=""
                                    >(Negotiable)</span
                                  >
                                </div>
                                <!-- Title -->
                                <h3>
                                  <a
                                    href="../ad/2010-chevrolet-camaro/index.html"
                                    >2010 Chevrolet Camaro</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a
                                      href="../ad_category/corvette/index.html"
                                      >Corvette</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  **** Only 5,200 Miles *** &#8211; Ford
                                  Executive Vehicle &#8211; Convertible &#8211;
                                  Navigation &#8211; Shaker...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/6-110x60.jpg"
                                        alt="2010 Chevrolet Camaro"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/3-1-110x60.jpg"
                                        alt="2010 Chevrolet Camaro"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/4-110x60.jpg"
                                        alt="2010 Chevrolet Camaro"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/5-110x60.jpg"
                                        alt="2010 Chevrolet Camaro"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2019/01/1-110x60.jpg"
                                        alt="2010 Chevrolet Camaro"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : January 24, 2019
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="1552"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/2010-chevrolet-camaro/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
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
                                  Shape. The Miles are Super Low. If Your a
                                  Ranger Fan, This is ...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a href="../ad/audi-a5-for-sale/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/1-3-110x60.jpg"
                                        alt="Audi A5 For Sale"
                                    /></a>
                                  </li>
                                  <li>
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
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/audi-a5-for-sale/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
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
                                <a
                                  href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                                  class="play-video"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/08/playbutton-u693-r.png"
                                    alt="Icon"
                                /></a>
                                <a href="../ad/renault-duster-2017/index.html">
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/1-1-360x270.jpg"
                                    alt="Renault Duster 2017"
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
                                <div class="ad-price">&#8358; 45,200</div>
                                <!-- Title -->
                                <h3>
                                  <a href="../ad/renault-duster-2017/index.html"
                                    >Renault Duster 2017</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a href="../ad_category/renault/index.html"
                                      >Renault</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  If you’re looking for a great pre-owned
                                  convertible, look no further. This exceptional
                                  car has all the featu...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/renault-duster-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/1-1-110x60.jpg"
                                        alt="Renault Duster 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/renault-duster-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/2-1-110x60.jpg"
                                        alt="Renault Duster 2017"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/renault-duster-2017/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/3-1-110x60.jpg"
                                        alt="Renault Duster 2017"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : July 13, 2017
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="877"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/renault-duster-2017/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
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
                                <a
                                  href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                                  class="play-video"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/08/playbutton-u693-r.png"
                                    alt="Icon"
                                /></a>
                                <a href="../ad/rolls-royce-phantom/index.html">
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/07/5-360x270.jpg"
                                    alt="Rolls Royce Phantom"
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
                                <div class="ad-price">&#8358; 77,900</div>
                                <!-- Title -->
                                <h3>
                                  <a href="../ad/rolls-royce-phantom/index.html"
                                    >Rolls Royce Phantom</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a
                                      href="../ad_category/rolls-royce/index.html"
                                      >Rolls-Royce</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  Alfa romeo GT 1.9 jtd, 6 speed manual, full
                                  leather interior. Car is in great condition,
                                  engine running perfec...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/rolls-royce-phantom/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/5-110x60.jpg"
                                        alt="Rolls Royce Phantom"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/rolls-royce-phantom/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/6-1-110x60.jpg"
                                        alt="Rolls Royce Phantom"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/rolls-royce-phantom/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/07/7-110x60.jpg"
                                        alt="Rolls Royce Phantom"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : July 13, 2017
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="873"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/rolls-royce-phantom/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- Ad Desc End -->
                            </div>
                            <!-- Content Block End -->
                          </div>
                          <div class="ads-list-archive featured_ads">
                            <!-- Image Block -->
                            <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                              <!-- Img Block -->
                              <div class="ad-archive-img">
                                <a
                                  href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
                                  class="play-video"
                                  ><img
                                    src="../assets/carspot-css/wp-content/uploads/2017/08/playbutton-u693-r.png"
                                    alt="Icon"
                                /></a>
                                <a
                                  href="../ad/land-rover-freelander-2-se/index.html"
                                >
                                  <img
                                    src="../assets/carspot-css/wp-content/uploads/2017/06/1-13-360x270.jpg"
                                    alt="Land Rover Freelander 2 Se"
                                    class="img-responsive"
                                  />
                                </a>
                                <div class="featured-ribbon">
                                  <span>Featured</span>
                                </div>
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
                                <div class="ad-price">Price On Call</div>
                                <!-- Title -->
                                <h3>
                                  <a
                                    href="../ad/land-rover-freelander-2-se/index.html"
                                    >Land Rover Freelander 2 Se</a
                                  >
                                </h3>
                                <!-- Category -->
                                <div class="category-title">
                                  <span class="padding_cats"
                                    ><a
                                      href="../ad_category/land-rover/index.html"
                                      >Land Rover</a
                                    ></span
                                  >
                                </div>
                                <!-- Short Description -->
                                <div class="clearfix visible-xs-block"></div>
                                <p class="hidden-sm">
                                  Full service history, bluetooth connectivity,
                                  auto lights/ wipers, air conditioning, 17 inch
                                  alloys, mp3/cd/au...
                                </p>
                                <!-- Ad Features -->
                                <ul class="add_info">
                                  <li>
                                    <a
                                      href="../ad/land-rover-freelander-2-se/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/06/1-13-110x60.jpg"
                                        alt="Land Rover Freelander 2 Se"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/land-rover-freelander-2-se/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/06/2-12-110x60.jpg"
                                        alt="Land Rover Freelander 2 Se"
                                    /></a>
                                  </li>
                                  <li>
                                    <a
                                      href="../ad/land-rover-freelander-2-se/index.html"
                                      ><img
                                        src="../assets/carspot-css/wp-content/uploads/2017/06/3-12-110x60.jpg"
                                        alt="Land Rover Freelander 2 Se"
                                    /></a>
                                  </li>
                                </ul>
                                <!-- Ad History -->
                                <div class="clearfix archive-history">
                                  <div class="last-updated">
                                    Posted : June 20, 2017
                                  </div>
                                  <div class="ad-meta">
                                    <a
                                      href="javascript:void(0);"
                                      data-adid="89"
                                      class="btn save-ad"
                                      ><i class="fa fa-heart-o"></i>
                                      Favourite</a
                                    >
                                    <a
                                      href="../ad/land-rover-freelander-2-se/index.html"
                                      class="btn btn-success"
                                      ><i class="fa fa-phone"></i> View
                                      Details</a
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
                </div>

                <div class="clearfix"></div>
                <div class="text-center margin-top-30 margin-bottom-20">
                  <ul class="pagination pagination-lg">
                    <li class="active">
                      <a href="index23c2.html?carspot_layout_type=1">1</a>
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >2</a
                      >
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >Next Page &raquo;</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--Footer Section-->
    <section>
      <footer class="footer-bg">
        <div class="footer-main">
          <div class="container">
            <div class="row row-tx">
              <div class="col-lg-3 col-footer-lg-3-tx col-md-12">
                <a href="../index.html">
                  <img
                    src="../assets/images/footer-logo.png"
                    class="img-responsive"
                    alt="Site logo"
                    style="margin-bottom: 16px"
                  />
                </a>
                <hr
                  class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
                />
                <p class="p-footer-tx">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                <ul class="apps-donwloads">
                  <li style="display: inline-block; margin: 0 4px 4px 0;">
                    <a href="#"
                      ><img
                        src="../assets/images/appstore.png"
                        alt="Android App"
                    /></a>
                  </li>
                  <li style="display: inline-block; margin: 0 4px 4px 0;">
                    <a href="#"
                      ><img src="../assets/images/googleplay.png" alt="IOS App"
                    /></a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-footer-lg-2-tx col-md-12">
                <h6>Follow Us</h6>
                <hr
                  class="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
                />
                <ul class="list-unstyled mb-0">
                  <li class="contact-us-tx">
                    <a
                      class="Facebook btn-floating btn-sm btn-sm-tx rgba-white-slight mx-1 waves-effect waves-light"
                      href="#"
                    >
                      <i class="fa fa-facebook bg-facebook"></i> </a
                    ><span><a href="#">Facebook</a></span>
                  </li>
                  <li class="contact-us-tx">
                    <a
                      class="Twitter btn-floating btn-sm btn-sm-tx rgba-white-slight mx-1 waves-effect waves-light"
                      href="#"
                    >
                      <i class="fa fa-twitter bg-info"></i> </a
                    ><span><a href="#">Twitter</a></span>
                  </li>
                  <li class="contact-us-tx">
                    <a
                      class="Linkedin btn-floating btn-sm btn-sm-tx rgba-white-slight mx-1 waves-effect waves-light"
                      href="#"
                    >
                      <i class="fa fa-linkedin bg-linkedin"></i> </a
                    ><span><a href="#">Linkedin</a></span>
                  </li>
                  <li class="contact-us-tx">
                    <a
                      class="Google btn-floating btn-sm btn-sm-tx rgba-white-slight mx-1 waves-effect waves-light"
                      href="#"
                    >
                      <i class="fa fa-google-plus bg-danger-tx"></i> </a
                    ><span><a href="#">Google</a></span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-footer-lg-2-tx col-md-12">
                <h6>Quick Links</h6>
                <hr
                  class="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
                />
                <ul class="list-unstyled mb-0">
                  <li><a href="javascript:;">Home</a></li>
                  <li><a href="javascript:;">About Us</a></li>
                  <li><a href="javascript:;">Contant Us</a></li>
                  <li><a href="javascript:;">FAQ</a></li>
                  <li><a href="javascript:;">Regions</a></li>
                  <li><a href="javascript:;">Terms</a></li>
                </ul>
              </div>
              <div class="col-lg-5 col-footer-lg-5-tx col-md-12">
                <h6>Subscribe</h6>
                <hr
                  class="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"
                />
                <p class="p-footer-tx">
                  We may send you information about related events, webinars,
                  products and services which we believe.
                </p>
                <div class="clearfix"></div>
                <div class="input-group input-group-footer-tx w-100">
                  <input
                    type="text"
                    class="form-control form-control-tx br-tl-3  br-bl-3 "
                    placeholder="Email"
                  />
                  <div class="input-group-append ">
                    <button
                      type="button"
                      class="btn btn-primary btn-footer-subscribe-tx br-tr-3  br-br-3"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <!-- <div class="mt-5">Copyright © 2019 <a href="#" class="fs-14 text-primary-tx" style="color: #00BF8F !important;">Tradexplora</a>.</div> -->
                <div>
                  <ul class="footer-payments" style="margin-top: 27px;">
                    <li class="pl-0" style=" width: 105px;">
                      <a href="javascript:;"
                        ><img src="../assets/images/Interswitch Logo.svg"
                      /></a>
                    </li>
                    <li style=" width: 120px;">
                      <a href="javascript:;"
                        ><img src="../assets/images/paystack-02.jpg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:;"
                        ><img
                          class="payment-card-icon-footer-tx"
                          src="../assets/images/visa_card.png"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:;"
                        ><img
                          class="payment-card-icon-footer-tx"
                          src="../assets/images/master_card.png"
                      /></a>
                    </li>
                    <li style=" width: 88px!important;">
                      <a href="javascript:; "
                        ><img src="../assets/images/varve-logo-2.png"
                      /></a>
                    </li>
                  </ul>
                  <!-- <div class="mt-0">Copyright © 2019 <a href="#" class="fs-14 text-primary-tx" style="color: #00BF8F !important;">Tradexplora</a>.</div> -->
                </div>
              </div>
            </div>

            <div class="text-center payment-card-spacing-footer-tx">
              <div class="mt-0" style="color: #070510">
                Copyright © 2019
                <a
                  href="#"
                  class="fs-14 text-primary-tx"
                  style="color: #4CAF50 !important;"
                  >Tradexplora</a
                >. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    <!--/Footer Section-->

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

export default {
  name: "list"
};
</script>
