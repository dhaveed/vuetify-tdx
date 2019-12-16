<template>
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
              <div class="text-box">Welcome back: <span>testuser </span></div>
            </li>
            <li>
              <router-link to="/maindashboard">
                <i class="la la-home"></i> <span>Dashboard</span>
              </router-link>
             
            </li>
            <li>
               <router-link to="/editProfile">
                <i class="la la-pencil"></i> <span>Edit Profile</span>
              </router-link>
             
            </li>

            <li>
              <router-link to="/messaging">
                <i class="la la-envelope"></i> <span>My Messages</span><span class="badge referral">0</span>
              </router-link>
             
            </li>
            <li>
              <a href="#subPages" class="collapsed" data-toggle="collapse"
                ><i class="la la-tasks"></i> <span>My Inventory</span>
                <i class="icon-submenu la la-chevron-left"></i
              ></a>
              <div id="subPages" class="collapse ">
                <ul class="nav">
                  <li>
                    <router-link to="/publishedInventory">
                      <span>Published</span><span class="badge">0</span>
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link to="/ordersInventory">
                      <span>Expired</span><span class="badge">0</span>
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link to="/messaging">
                      <span>Sold</span><span class="badge">0</span>
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link to="/messaging">
                      <span>Pending</span><span class="badge">0</span>
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link to="/messaging">
                      <span>Saved</span><span class="badge">0</span>
                    </router-link>
                    
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../tempview/refferals.html" class=""
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
                ><i class="la la-check-circle-o"></i> <span> My Orders</span></a
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
</template>

<script>
export default {};
</script>

<style></style>
