<template>
  <!--Topbar-->
  <!--Topbar-->
  <div class="header-main">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-sm-4 col-6">
            <div class="top-bar-left d-flex">
              <div class="clearfix"></div>
              <div class="clearfix">
                <ul class="contact">
                  <li class="mr-5 d-lg-none">
                    <a href="#" class="callnumber text-dark"
                      ><span
                        ><i class="fa fa-phone mr-1"></i>: +425 345 8765</span
                      ></a
                    >
                  </li>
                  <li class="select-country mr-5">
                    <select
                      class="form-control select2-flag-search"
                      data-placeholder="Select Country"
                      style="color: #fff!important;"
                    >
                      <option value="NG">Nigeria</option>
                      <option value="UM">United States of America</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="AD">Andorra</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AU">Australia</option>
                      <option value="AM">Armenia</option>
                      <option value="AO">Angola</option>
                      <option value="AR">Argentina</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BB">Barbados</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BE">Belgium</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BH">Bahrain</option>
                      <option value="BJ">Benin</option>
                      <option value="BN">Brunei</option>
                      <option value="BO">Bolivia</option>
                      <option value="BT">Bhutan</option>
                      <option value="BY">Belarus</option>
                      <option value="CD">Congo</option>
                      <option value="CA">Canada</option>
                      <option value="CF">Central African Republic</option>
                      <option value="CI">Cote d'Ivoire</option>
                      <option value="CL">Chile</option>
                      <option value="CM">Cameroon</option>
                      <option value="CN">China</option>
                      <option value="CO">Colombia</option>
                      <option value="CU">Cuba</option>
                      <option value="CV">Cabo Verde</option>
                      <option value="CY">Cyprus</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DK">Denmark</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EE">Estonia</option>
                      <option value="ER">Eritrea</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FI">Finland</option>
                      <option value="FJ">Fiji</option>
                      <option value="FR">France</option>
                      <option value="GA">Gabon</option>
                      <option value="GD">Grenada</option>
                      <option value="GE">Georgia</option>
                      <option value="GH">Ghana</option>
                      <option value="GH">Ghana</option>
                      <option value="HN">Honduras</option>
                      <option value="HT">Haiti</option>
                      <option value="HU">Hungary</option>
                      <option value="ID">Indonesia</option>
                      <option value="IE">Ireland</option>
                      <option value="IL">Israel</option>
                      <option value="IN">India</option>
                      <option value="IQ">Iraq</option>
                      <option value="IR">Iran</option>
                      <option value="IS">Iceland</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JO">Jordan</option>
                      <option value="JP">Japan</option>
                      <option value="KE">Kenya</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="KI">Kiribati</option>
                      <option value="KW">Kuwait</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="LA">Laos</option>
                      <option value="LB">Lebanons</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LR">Liberia</option>
                      <option value="LS">Lesotho</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="LV">Latvia</option>
                      <option value="LY">Libya</option>
                      <option value="MA">Morocco</option>
                      <option value="MC">Monaco</option>
                      <option value="MD">Moldova</option>
                      <option value="ME">Montenegro</option>
                      <option value="MG">Madagascar</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MK">Macedonia (FYROM)</option>
                      <option value="ML">Mali</option>
                      <option value="MM">Myanmar (formerly Burma)</option>
                      <option value="MN">Mongolia</option>
                      <option value="MR">Mauritania</option>
                      <option value="MT">Malta</option>
                      <option value="MV">Maldives</option>
                      <option value="MW">Malawi</option>
                      <option value="MX">Mexico</option>
                      <option value="MZ">Mozambique</option>
                      <option value="NA">Namibia</option>
                      <option value="NG">Nigeria</option>
                      <option value="NO">Norway</option>
                      <option value="NP">Nepal</option>
                      <option value="NR">Nauru</option>
                      <option value="NZ">New Zealand</option>
                      <option value="OM">Oman</option>
                      <option value="PA">Panama</option>
                      <option value="PF">Paraguay</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PH">Philippines</option>
                      <option value="PK">Pakistan</option>
                      <option value="PL">Poland</option>
                      <option value="QA">Qatar</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SC">Seychelles</option>
                      <option value="SD">Sudan</option>
                      <option value="SE">Sweden</option>
                      <option value="SG">Singapore</option>
                      <option value="TG">Togo</option>
                      <option value="TH">Thailand</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TN">Tunisia</option>
                      <option value="TO">Tonga</option>
                      <option value="TR">Turkey</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TW">Taiwan</option>
                      <option value="UA">Ukraine</option>
                      <option value="UG">Uganda</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VA">Vatican City (Holy See)</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="VU">Vanuatu</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </li>
                  <li class="dropdown mr-5">
                    <a
                      href="#"
                      class="text-dark dropdown-head"
                      data-toggle="dropdown"
                      ><span>
                        Language <i class="fa fa-caret-down text-muted"></i
                      ></span>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <a href="#" class="dropdown-item">
                        English
                      </a>
                      <a class="dropdown-item" href="#">
                        Arabic
                      </a>
                      <a class="dropdown-item" href="#">
                        German
                      </a>
                      <a href="#" class="dropdown-item">
                        Greek
                      </a>
                      <a href="#" class="dropdown-item">
                        Japanese
                      </a>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a
                      href="#"
                      class="text-dark dropdown-head"
                      data-toggle="dropdown"
                      ><span
                        >Currency
                        <i class="fa fa-caret-down text-muted"></i></span
                    ></a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <a href="#" class="dropdown-item">
                        USD
                      </a>
                      <a class="dropdown-item" href="#">
                        EUR
                      </a>
                      <a class="dropdown-item" href="#">
                        INR
                      </a>
                      <a href="#" class="dropdown-item">
                        GBP
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
            <div class="top-bar-right">
              <!-- <ul class="custom">
							<li>
								<router-link to="/register" class="text-dark text-white"><i class="fa fa-user mr-1"></i> <span>Register</span></router-link>
							</li>
							<li>
								<router-link to="/login" class="text-dark text-white"><i class="fa fa-sign-in mr-1"></i> <span>Login</span></router-link>
							</li>
							<li>
								<router-link to="/login" class="btn btn-tx btn-theme text-dark post-ad-header-tx"> POST AN AD</router-link>
							</li>
						</ul> -->
              <ul class="listnone custom">
                <li>
                  <a
                    class="shopping_bag_btn"
                    href="https://carspot.scriptsbundle.com/transparent-1/cart/"
                    ><i class="fa fa-shopping-cart"></i><span>0</span></a
                  >
                </li>
                <li>
                  <a
                    class="shopping_bag_btn"
                    href="https://carspot.scriptsbundle.com/transparent-1/cart/"
                    ><i class="fa fa-bell"></i><span>0</span></a
                  >
                </li>

                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle dropdown-head"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      class="img-circle resize"
                      alt="Avatar"
                      src="../assets/images/boss.jpg"/>
                    <span class="caret" style="color: #fff!important"></span
                  ></a>
                  <ul class="dropdown-menu">
                    <li class="wallet-balance">
                      <img
                        src="../assets/images/wallet.svg"
                        height="18px"
                        style="margin-top: -4px; margin-right: 5px;"
                        alt=""
                        srcset=""
                      />

                      Balance

                      <span> 00.00</span>
                    </li>
                    <li class="profile-dropdown-list">
                      <router-link
                        to="/Dashboard"
                        class="profile-dropdown-link"
                      >
                        <i class="fa fa-dashboard profile-dropdown-icon"></i>
                        Dashboard
                      </router-link>
                    </li>
                    <li class="profile-dropdown-list">
                      <router-link to="/Login" class="profile-dropdown-link">
                        <i class="fa fa-sign-out profile-dropdown-icon"></i>
                        Logout
                      </router-link>
                    </li>
                  </ul>
                </li>

                <li>
                  <router-link
                    to="/login"
                    class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                  >
                    POST AN AD</router-link
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
          ><img src="../assets/images/brand/tradexplora-01.png" alt=""
        /></span>
        <!-- <i href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a> -->
      </div>
    </div>
    <!--/Header -->

    <!--Start Horizontal-main -->
    <div class="main-nav ">
      <div class="container">
        <div class="row home-header-custom">
          <div class="col-md-2">
            <div class="desktoplogo-tdx">
              <a href="index.html"
                ><img src="../assets/images/brand/TRADEXPLORAV3.1.png" alt=""
              /></a>
            </div>
          </div>
          <div class="col-md-2">
            <div class="all-categories header-search">
              <button class="btn ">
                <i class="fa fa-bars" style="color: #4CAF50"></i> All Categories
              </button>
            </div>
          </div>
          <div class="col-md-5">
            <div class="header-search row">
              <div class="form-group col-xl-12 col-lg-12 col-md-12 mb-0  ">
                <input
                  type="text"
                  class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
                  id="text4"
                  placeholder="Search products, brands and categories"
                />
                <span><i class="fa fa-search location-gps mr-1"></i></span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="call-us-now">
              <div class="contact-in-header">
                <i class="flaticon-customer-service"></i>
                <p
                  style="color: #999; float: right; line-height: 25px; margin-left: 10px; margin-top: 10px; font-size: 16px;"
                >
                  Call Us Now
                  <br />
                  <strong
                    style="font-size: 20px; color: #4CAF50; font-weight: 600!important;"
                    >(+234) 811-111-1808</strong
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="horizontal-main bg-dark-transparent clearfix">
      <div class="horizontal-mainwrapper container clearfix">
        Nav
        <nav class="horizontalMenu clearfix d-md-flex">
          <div class="desktoplogo">
            <a href="index.html"
              ><img src="../assets/images/brand/TRADEXPLORAV3.1.png" alt=""
            /></a>
          </div>
          <div class="desktoplogo-1">
            <a href="index.html"
              ><img src="../assets/images/brand/TRADEXPLORAV3.1.png" alt=""
            /></a>
          </div>
          <ul class="horizontalMenu-list" style="margin-top: 12px;">
            <li aria-haspopup="true"><a href="about.html"> <i class="fa fa-bars" style="color: #4CAF50; margin-bottom: -3px;"></i> All Categories </a></li>
            <li aria-haspopup="true"><a href="#"> Data </a></li>
            <li aria-haspopup="true"><a href="#"> TV </a></li>
            <li aria-haspopup="true">
              <a href="contact.html">
                Electricity <span class="hmarrow"></span
              ></a>
            </li>
            <li aria-haspopup="true"><a href="#"> More Services </a></li>
            <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"></li>
          </ul>
          <div class="all-categories">
            <button class="btn "> <i class="fa fa-bars" style="color: #4CAF50"></i> All Categories </button>
          </div>
          <div class="header-search row">
            <div class="form-group  col-xl-12 col-lg-12 col-md-12 mb-0  ">
                    <input
                      type="text"
                      class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
                      id="text4"
                      placeholder="Search products, brands and categories"
                    />
                    <span
                      ><i class="fa fa-search location-gps mr-1"></i
                    ></span>
                  </div>
          </div>
          <div class="call-us-now">
            <div class="contact-in-header">
              <i class="flaticon-customer-service"></i>
              <p
                style="color: #999; float: right; line-height: 25px; margin-left: 10px; margin-top: 10px; font-size: 16px;"
              >
                Call Us Now
                <br />
                <strong
                  style="font-size: 20px; color: #4CAF50; font-weight: 600!important;"
                  >(+234) 811-111-1808</strong
                >
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div> -->
  </div>
  <!--/Horizontal-main -->
</template>

<script>
export default {
  name: "topbar"
};
</script>

<style>
.main-nav {
  overflow: hidden;
  background-color: #fff;
}

/*.main-nav {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}*/

.main-nav .desktoplogo-tdx {
  width: 10rem;
  padding: 1.5rem 1.5rem;
}
</style>
