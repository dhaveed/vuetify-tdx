<template>
  <div class="settings">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <dsidebar></dsidebar>
      <!-- END LEFT SIDEBAR -->

      <!-- MAIN -->
      <div class="main dashboard-main" style="min-height: 713px;">
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="container-fluid">
            <!-- OVERVIEW -->
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="panel  panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Settings</h3>
                    <!-- <a href="#" data-target="#myModal" data-toggle="modal">Change Password</a> -->
                    <!-- <p class="panel-subtitle">Last logged in 2 hours Ago</p> -->
                  </div>
                  <div class="panel-body panel-body-settings">
                    <div class="row">
                      <div class="settings-tab">
                        <ul class="tabs-menu nav settings-nav">
                          <li class="active">
                            <a href="#tab1" data-toggle="pill"
                              ><i class="icon icon-speedometer"></i> General</a
                            >
                          </li>
                          <li>
                            <a href="#tab2" data-toggle="pill" class=""
                              ><i class="fa fa-comment"></i> Chat</a
                            >
                          </li>
                          <li>
                            <a href="#tab3" data-toggle="pill"
                              ><i class="fa fa-cog"></i> Advanced</a
                            >
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div class="tab-pane fade in active" id="tab1">
                            <form class="form-horizontal">
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      id="examplenameInputname2"
                                      >Currency</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      data-placeholder="Choose a Currentcy..."
                                      class="form-control select2-show-search custom-select languages select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="0" data-select2-id="3"
                                        >-- Choose currency --</option
                                      >
                                      <option value="1" data-select2-id="7"
                                        >USD</option
                                      >
                                      <option value="2" data-select2-id="8"
                                        >NGN</option
                                      >
                                      <option value="3" data-select2-id="9"
                                        >EUR</option
                                      >
                                      <option value="4" data-select2-id="10"
                                        >GBP</option
                                      > </select
                                    ><span
                                      class="select2 select2-container select2-container--default"
                                      dir="ltr"
                                      data-select2-id="11"
                                      style="width: 100%;"
                                      ><span class="selection"
                                        ><span
                                          class="select2-selection select2-selection--single"
                                          role="combobox"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          tabindex="0"
                                          aria-labelledby="select2-r988-container"
                                          ><span
                                            class="select2-selection__rendered"
                                            id="select2-r988-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="Choose currency"
                                            >-- Choose currency --</span
                                          ><span
                                            class="select2-selection__arrow"
                                            role="presentation"
                                            ><b role="presentation"></b></span
                                        ></span> </span
                                      ><span
                                        class="dropdown-wrapper"
                                        aria-hidden="true"
                                      ></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      id="examplenameInputname3"
                                      >Langague:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      data-placeholder="Choose a Language..."
                                      class="form-control select2-show-search custom-select languages select2-hidden-accessible"
                                      data-select2-id="4"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="0" data-select2-id="6"
                                        >-- Choose Language --</option
                                      >
                                      <option value="AF" data-select2-id="12"
                                        >Afrikanns</option
                                      >
                                      <option value="SQ" data-select2-id="13"
                                        >Albanian</option
                                      >
                                      <option value="AR" data-select2-id="14"
                                        >Arabic</option
                                      >
                                      <option value="HY" data-select2-id="15"
                                        >Armenian</option
                                      >
                                      <option value="EU" data-select2-id="16"
                                        >Basque</option
                                      >
                                      <option value="BN" data-select2-id="17"
                                        >Bengali</option
                                      >
                                      <option value="BG" data-select2-id="18"
                                        >Bulgarian</option
                                      >
                                      <option value="CA" data-select2-id="19"
                                        >Catalan</option
                                      >
                                      <option value="KM" data-select2-id="20"
                                        >Cambodian</option
                                      >
                                      <option value="ZH" data-select2-id="21"
                                        >Chinese (Mandarin)</option
                                      >
                                      <option value="HR" data-select2-id="22"
                                        >Croation</option
                                      >
                                      <option value="CS" data-select2-id="23"
                                        >Czech</option
                                      >
                                      <option value="DA" data-select2-id="24"
                                        >Danish</option
                                      >
                                      <option value="NL" data-select2-id="25"
                                        >Dutch</option
                                      >
                                      <option value="EN" data-select2-id="26"
                                        >English</option
                                      >
                                      <option value="ET" data-select2-id="27"
                                        >Estonian</option
                                      >
                                      <option value="FJ" data-select2-id="28"
                                        >Fiji</option
                                      >
                                      <option value="FI" data-select2-id="29"
                                        >Finnish</option
                                      >
                                      <option value="FR" data-select2-id="30"
                                        >French</option
                                      >
                                      <option value="KA" data-select2-id="31"
                                        >Georgian</option
                                      >
                                      <option value="DE" data-select2-id="32"
                                        >German</option
                                      >
                                      <option value="EL" data-select2-id="33"
                                        >Greek</option
                                      >
                                      <option value="GU" data-select2-id="34"
                                        >Gujarati</option
                                      >
                                      <option value="HE" data-select2-id="35"
                                        >Hebrew</option
                                      >
                                      <option value="HI" data-select2-id="36"
                                        >Hindi</option
                                      >
                                      <option value="HU" data-select2-id="37"
                                        >Hungarian</option
                                      >
                                      <option value="IS" data-select2-id="38"
                                        >Icelandic</option
                                      >
                                      <option value="ID" data-select2-id="39"
                                        >Indonesian</option
                                      >
                                      <option value="GA" data-select2-id="40"
                                        >Irish</option
                                      >
                                      <option value="IT" data-select2-id="41"
                                        >Italian</option
                                      >
                                      <option value="JA" data-select2-id="42"
                                        >Japanese</option
                                      >
                                      <option value="JW" data-select2-id="43"
                                        >Javanese</option
                                      >
                                      <option value="KO" data-select2-id="44"
                                        >Korean</option
                                      >
                                      <option value="LA" data-select2-id="45"
                                        >Latin</option
                                      >
                                      <option value="LV" data-select2-id="46"
                                        >Latvian</option
                                      >
                                      <option value="LT" data-select2-id="47"
                                        >Lithuanian</option
                                      >
                                      <option value="MK" data-select2-id="48"
                                        >Macedonian</option
                                      >
                                      <option value="MS" data-select2-id="49"
                                        >Malay</option
                                      >
                                      <option value="ML" data-select2-id="50"
                                        >Malayalam</option
                                      >
                                      <option value="MT" data-select2-id="51"
                                        >Maltese</option
                                      >
                                      <option value="MI" data-select2-id="52"
                                        >Maori</option
                                      >
                                      <option value="MR" data-select2-id="53"
                                        >Marathi</option
                                      >
                                      <option value="MN" data-select2-id="54"
                                        >Mongolian</option
                                      >
                                      <option value="NE" data-select2-id="55"
                                        >Nepali</option
                                      >
                                      <option value="NO" data-select2-id="56"
                                        >Norwegian</option
                                      >
                                      <option value="FA" data-select2-id="57"
                                        >Persian</option
                                      >
                                      <option value="PL" data-select2-id="58"
                                        >Polish</option
                                      >
                                      <option value="PT" data-select2-id="59"
                                        >Portuguese</option
                                      >
                                      <option value="PA" data-select2-id="60"
                                        >Punjabi</option
                                      >
                                      <option value="QU" data-select2-id="61"
                                        >Quechua</option
                                      >
                                      <option value="RO" data-select2-id="62"
                                        >Romanian</option
                                      >
                                      <option value="RU" data-select2-id="63"
                                        >Russian</option
                                      >
                                      <option value="SM" data-select2-id="64"
                                        >Samoan</option
                                      >
                                      <option value="SR" data-select2-id="65"
                                        >Serbian</option
                                      >
                                      <option value="SK" data-select2-id="66"
                                        >Slovak</option
                                      >
                                      <option value="SL" data-select2-id="67"
                                        >Slovenian</option
                                      >
                                      <option value="ES" data-select2-id="68"
                                        >Japanese</option
                                      >
                                      <option value="SW" data-select2-id="69"
                                        >Swahili</option
                                      >
                                      <option value="SV" data-select2-id="70"
                                        >Swedish
                                      </option>
                                      <option value="TA" data-select2-id="71"
                                        >Tamil</option
                                      >
                                      <option value="TT" data-select2-id="72"
                                        >Tatar</option
                                      >
                                      <option value="TE" data-select2-id="73"
                                        >Telugu</option
                                      >
                                      <option value="TH" data-select2-id="74"
                                        >Thai</option
                                      >
                                      <option value="BO" data-select2-id="75"
                                        >Tibetan</option
                                      >
                                      <option value="TO" data-select2-id="76"
                                        >Tonga</option
                                      >
                                      <option value="TR" data-select2-id="77"
                                        >Turkish</option
                                      >
                                      <option value="UK" data-select2-id="78"
                                        >Ukranian</option
                                      >
                                      <option value="UR" data-select2-id="79"
                                        >Urdu</option
                                      >
                                      <option value="UZ" data-select2-id="80"
                                        >Uzbek</option
                                      >
                                      <option value="VI" data-select2-id="81"
                                        >Vietnamese</option
                                      >
                                      <option value="CY" data-select2-id="82"
                                        >Welsh</option
                                      >
                                      <option value="XH" data-select2-id="83"
                                        >Xhosa</option
                                      >
                                    </select>
                                    <span
                                      class="select2 select2-container select2-container--default"
                                      dir="ltr"
                                      data-select2-id="84"
                                      style="width: 100%;"
                                      ><span class="selection"
                                        ><span
                                          class="select2-selection select2-selection--single"
                                          role="combobox"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          tabindex="0"
                                          aria-labelledby="select2-kso9-container"
                                          ><span
                                            class="select2-selection__rendered"
                                            id="select2-kso9-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="Choose Language"
                                            >-- Choose Language --</span
                                          ><span
                                            class="select2-selection__arrow"
                                            role="presentation"
                                            ><b role="presentation"></b></span
                                        ></span> </span
                                      ><span
                                        class="dropdown-wrapper"
                                        aria-hidden="true"
                                      ></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      style="margin-top: 6px;"
                                      >Change Password:</label
                                    >
                                  </div>
                                  <div
                                    class="col-md-9"
                                    style="padding-left: 6px; padding-right: 20px;"
                                  >
                                    <div class=" col-xs-12 col-sm-12">
                                      <div class="form-group">
                                        <!-- <label class="control-label">Current Password</!-->
                                        <input
                                          class="form-control form-control-dashboard"
                                          type="password"
                                          name="first_name"
                                          placeholder="Current Password"
                                          value=""
                                          required=""
                                        />
                                      </div>
                                    </div>
                                    <div class=" col-xs-12 col-sm-12">
                                      <div class="form-group">
                                        <!-- <label class="control-label protip">New Password</label> -->
                                        <input
                                          class="protip form-control form-control-dashboard"
                                          type="password"
                                          name="last_name"
                                          placeholder="New Password"
                                          value=""
                                          readonly=""
                                          data-pt-title=" You can not edit email address"
                                          data-pt-position="top"
                                          data-pt-scheme="dark-transparent"
                                          data-pt-size="small"
                                        />
                                      </div>
                                    </div>
                                    <div class=" col-xs-12 col-sm-12">
                                      <div class="form-group">
                                        <!-- <label class="control-label protip">Confirm Password</label> -->
                                        <input
                                          class="protip form-control form-control-dashboard"
                                          type="password"
                                          name="last_name"
                                          placeholder="Confirm Password"
                                          value=""
                                          readonly=""
                                          data-pt-title=" You can not edit email address"
                                          data-pt-position="top"
                                          data-pt-scheme="dark-transparent"
                                          data-pt-size="small"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >Phone Number:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <div
                                      class="custom-controls-stacked d-md-flex"
                                    >
                                      <label
                                        class="custom-control custom-radio mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios3"
                                          value="option1"
                                          checked=""
                                        />
                                        <span class="custom-control-label"
                                          >Visible to everyone</span
                                        >
                                      </label>
                                      <label
                                        class="custom-control custom-radio"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios3"
                                          value="option2"
                                        />
                                        <span class="custom-control-label"
                                          >Visible to only my Customers</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      id="inputPassword5"
                                      >Profile:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <div
                                      class="custom-controls-stacked d-md-flex"
                                    >
                                      <label
                                        class="custom-control custom-radio mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios4"
                                          value="option1"
                                          checked=""
                                        />
                                        <span class="custom-control-label"
                                          >Visible to everyone</span
                                        >
                                      </label>
                                      <label
                                        class="custom-control custom-radio"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios4"
                                          value="option2"
                                        />
                                        <span class="custom-control-label"
                                          >Visible to only my Customers</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="tab-pane fade" id="tab2">
                            <div class="form-group ">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Font-size:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <div
                                    class="custom-controls-stacked d-sm-flex"
                                  >
                                    <label
                                      class="custom-control custom-radio mr-4"
                                    >
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios3"
                                        value="option1"
                                        checked
                                      />
                                      <span class="custom-control-label"
                                        >Small</span
                                      >
                                    </label>
                                    <label
                                      class="custom-control custom-radio mr-4"
                                    >
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios3"
                                        value="option2"
                                      />
                                      <span class="custom-control-label"
                                        >Medium</span
                                      >
                                    </label>
                                    <label class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios3"
                                        value="option2"
                                      />
                                      <span class="custom-control-label"
                                        >Large</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group ">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Chat:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <label class="custom-switch pl-0">
                                    <input
                                      type="checkbox"
                                      name="custom-switch-checkbox"
                                      class="custom-switch-input"
                                    />
                                    <span
                                      class="custom-switch-indicator"
                                    ></span>
                                    <span class="custom-switch-description"
                                      >On/Off</span
                                    >
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group ">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Chat Type:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <div
                                    class="custom-controls-stacked d-md-flex"
                                  >
                                    <label
                                      class="custom-control custom-radio mr-4"
                                    >
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios4"
                                        value="option1"
                                        checked
                                      />
                                      <span class="custom-control-label"
                                        >Public Chat</span
                                      >
                                    </label>
                                    <label class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios4"
                                        value="option2"
                                      />
                                      <span class="custom-control-label"
                                        >Private Chat</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group ">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Enable Email Notifications:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <label class="custom-switch pl-0">
                                    <input
                                      type="checkbox"
                                      name="custom-switch-checkbox"
                                      class="custom-switch-input"
                                    />
                                    <span
                                      class="custom-switch-indicator"
                                    ></span>
                                    <span class="custom-switch-description"
                                      >On/Off</span
                                    >
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group ">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Back Up Chat:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <label class="custom-switchs pl-0">
                                    <input
                                      type="checkbox"
                                      name="custom-switch-checkbox"
                                      class="custom-switch-input"
                                    />
                                    <span
                                      class="custom-switch-indicator"
                                    ></span>
                                    <span class="custom-switch-description"
                                      >On/Off</span
                                    >
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group mb-0">
                              <div class="row">
                                <div class="col-md-3">
                                  <label class="form-label form-label-settings"
                                    >Delete Chat:</label
                                  >
                                </div>
                                <div class="col-md-9">
                                  <div
                                    class="custom-controls-stacked d-md-flex"
                                  >
                                    <label
                                      class="custom-control custom-radio mr-4"
                                    >
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios5"
                                        value="option1"
                                        checked
                                      />
                                      <span class="custom-control-label"
                                        >Delete Read Chat</span
                                      >
                                    </label>
                                    <label class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        name="example-radios5"
                                        value="option2"
                                      />
                                      <span class="custom-control-label"
                                        >Delete All</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="tab3">
                            <form class="form-horizontal">
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >Auto-Advance:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <label class="custom-switch pl-0">
                                      <input
                                        type="checkbox"
                                        name="custom-switch-checkbox"
                                        class="custom-switch-input"
                                      />
                                      <span
                                        class="custom-switch-indicator"
                                      ></span>
                                      <span class="custom-switch-description"
                                        >Enable/Disable</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      id="inputEmail5"
                                      >Posted ADs:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <div
                                      class="custom-controls-stacked d-md-flex"
                                    >
                                      <label
                                        class="custom-control custom-radio mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios1"
                                          value="option1"
                                          checked=""
                                        />
                                        <span class="custom-control-label"
                                          >Directly</span
                                        >
                                      </label>
                                      <label
                                        class="custom-control custom-radio"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios1"
                                          value="option2"
                                        />
                                        <span class="custom-control-label"
                                          >By Admin Conformation</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >Comments Visible:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <div
                                      class="custom-controls-stacked d-md-flex"
                                    >
                                      <label
                                        class="custom-control custom-radio mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios2"
                                          value="option1"
                                          checked=""
                                        />
                                        <span class="custom-control-label"
                                          >Directly</span
                                        >
                                      </label>
                                      <label
                                        class="custom-control custom-radio"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example-radios2"
                                          value="option2"
                                        />
                                        <span class="custom-control-label"
                                          >By Admin Conformation</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >System Notification:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <label
                                      class="custom-switch d-inline-block mr-5 pl-0"
                                    >
                                      <input
                                        type="checkbox"
                                        name="custom-switch-checkbox"
                                        class="custom-switch-input"
                                      />
                                      <span
                                        class="custom-switch-indicator"
                                      ></span>
                                      <span class="custom-switch-description"
                                        >On/Off</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group ">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >Mail Notification:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <label
                                      class="custom-switch d-inline-block mr-5 pl-0"
                                    >
                                      <input
                                        type="checkbox"
                                        name="custom-switch-checkbox"
                                        class="custom-switch-input"
                                      />
                                      <span
                                        class="custom-switch-indicator"
                                      ></span>
                                      <span class="custom-switch-description"
                                        >On/Off</span
                                      >
                                    </label>
                                    <!-- <label class="custom-switch d-inline-block"><a href="#" class="btn-link">Add Another Settings</a></label> -->
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      class="form-label form-label-settings"
                                      >Auto Watch Comments:</label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <label
                                      class="custom-switch d-inline-block mr-5 pl-0"
                                    >
                                      <input
                                        type="checkbox"
                                        name="custom-switch-checkbox"
                                        class="custom-switch-input"
                                      />
                                      <span
                                        class="custom-switch-indicator"
                                      ></span>
                                      <span class="custom-switch-description"
                                        >On/Off</span
                                      >
                                    </label>
                                  </div>
                                </div>
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
  name: "settings_carspot",
  components: {
    dsidebar
  }
};
</script>
