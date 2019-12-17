<template>
  <!--Section-->
  <section class="categories">
    <div class="container">
      <div class="card  mb-0 box-shadow-0">
        <div class="card-body">
          <!-- <div class="row"> -->
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 d-catmb mb-4 mb-lg-0">
              <a href="#">
                <div class="d-flex">
                  <div>
                    <span class=" icon-service1 text-primary">
                      <i
                        class="fa fa-mobile fa-5x"
                        style="color: #4CAF50 !important; font-size: 42px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3
                      class=" mb-0 mt-3 font-weight-bold value-added-tx"
                      style="font-weight: 600; font-size: 42px;"
                    >
                      Buy Airtime / Data
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 d-catmb mb-4 mb-lg-0">
              <a href="#">
                <div class="d-flex">
                  <div>
                    <span class=" icon-service1 text-warning">
                      <i
                        class="fa fa-television"
                        style="color: #4CAF50 !important; font-size: 32px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Subscribe Cable TV
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 d-catmb mb-4 mb-sm-0">
              <a href="#">
                <div class="d-flex">
                  <div>
                    <span class=" icon-service1 text-secondary">
                      <i
                        class="fa fa-bolt"
                        style="color: #4CAF50 !important; font-size: 32px;"
                      ></i>
                    </span>
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                      Buy Electricity
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 d-catmb mb-4 mb-sm-0">
              <a href="#">
                <div class="d-flex">
                  <div>
                    <span class=" icon-service1 text-warning">
                      <i
                        class="fa fa-ellipsis-h"
                        style="color: #4CAF50 !important; font-size: 32px;"
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
            </div> -->
            <div class="form row no-gutters ">
                  <!-- <div class="col-xl-1 col-lg-2"></div> -->
                  <div class="form-group  col-xl-4 col-lg-4 col-md-12 mb-0  ">
                    <input
                      type="text"
                      class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
                      id="text4"
                      placeholder="What are you looking for?"
                    />
                    <span
                      ><i class="fa fa-bullhorn location-gps mr-1"></i
                    ></span>
                  </div>
                  <div class="vl-1"></div>
                  <div class="form-group  col-xl-4 col-lg-4 col-md-12 mb-0  ">
                    <input
                      type="text"
                      class="form-control input-lg br-tr-md-0 br-br-md-0 main-location"
                      id="text4"
                      placeholder="Location"
                    />
                    <span
                      ><i class="fa fa-map-marker location-gps mr-1"></i
                    ></span>
                  </div>
                  <div class="vl-2"></div>
                  <div
                    class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg  mb-0 "
                  >
                    <select
                      class="form-control select2-show-search  border-bottom-0 select-home-page main-category"
                      data-placeholder="Property Type"
                    >
                      <optgroup label="Categories">
                        <option>Category</option>
                        <option value="1">Phones & Tablets</option>
                        <option value="2">Real Estate</option>
                        <option value="3">Electronics</option>
                        <option value="4">Fashion</option>
                        <option value="5">Jobs</option>
                        <option value="6">Health</option>
                        <option value="7">Agriculture</option>
                      </optgroup>
                    </select>
                    <!-- <span
                      ><i class="fa fa-map-marker location-gps mr-1"></i
                    ></span> -->
                  </div>

                  <div class="col-xl-2 col-lg-2 col-md-2 mb-0 main-search-button-container">
                    <a
                      href="#"
                      class="btn btn-lg tx-btn-color br-tl-md-0 br-bl-md-0 main-search-button"
                      ><i class="fa fa-search"></i
                    >   Search</a>
                  </div>
                </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </section>
  <!--/Section-->
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style></style>
