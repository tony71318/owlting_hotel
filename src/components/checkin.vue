<template>
  <div class="booked"> 
    <div class="nav-side-menu">
      <div class="brand">奧丁丁旅館</div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    
          <div class="menu-list">
    
              <ul id="menu-content" class="menu-content collapse out">
                  <li class="active">
                    <a href="#/home">
                    <i class="fa fa-home" style="font-size:19px"></i> 櫃檯接待
                    </a>
                  </li>

                  <li  data-toggle="collapse" data-target="#products" class="collapsed">
                    <a href="#"><i class="fa fa-address-book-o" style="font-size:17px"></i> 房號安排 <span class="arrow"></span></a>
                  </li>
                  <ul class="sub-menu collapse" id="products">
                      <li><a href="#">CSS3 Animation</a></li>
                      <li><a href="#">General</a></li>
                      <li><a href="#">Buttons</a></li>
                      <li><a href="#">Tabs & Accordions</a></li>
                      <li><a href="#">Typography</a></li>
                      <li><a href="#">FontAwesome</a></li>
                      <li><a href="#">Slider</a></li>
                      <li><a href="#">Panels</a></li>
                      <li><a href="#">Widgets</a></li>
                      <li><a href="#">Bootstrap Model</a></li>
                  </ul>


                  <li data-toggle="collapse" data-target="#service" class="collapsed">
                    <a href="#"><i class="fa fa-gift" style="font-size:20px"></i> 空房查詢 <span class="arrow"></span></a>
                  </li>  
                  <ul class="sub-menu collapse" id="service">
                    <li>New Service 1</li>
                    <li>New Service 2</li>
                    <li>New Service 3</li>
                  </ul>


                  <li data-toggle="collapse" data-target="#new" class="collapsed">
                    <a href="#"><i class="fa fa-address-card" style="font-size:17px"></i> 訂單管理 <span class="arrow"></span></a>
                  </li>
                  <ul class="sub-menu collapse" id="new">
                    <li>New New 1</li>
                    <li>New New 2</li>
                    <li>New New 3</li>
                  </ul>


                   <li>
                    <a href="#">
                    <i class="fa fa-user-circle-o" style="font-size:17px"></i> 房務管理
                    </a>
                    </li>

                   <li>
                    <a href="#">
                    <i class="fa fa-hotel" style="font-size:17px"></i> 房務清潔
                    </a>
                  </li>
              </ul>
       </div>
    </div>
    <div class="content">
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>

// import toastr from 'toastr'

export default {
  name: 'checkin',
  data () {
    return {
      // msg: 'Welcome to Home Page'
    }
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/

  .room-top{
    margin-bottom: 20px;
  }

  .room{
    margin-bottom: 20px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    position: fixed;
    padding: 20px;
  }

  /*right side*/


/*side menu*/
  .nav-side-menu {
    overflow: auto;
    font-family: verdana;
    font-size: 18px;
    font-weight: 200;
    background-color: #73B1C4;
    position: fixed;
    top: 0px;
    width: 15%;
    height: 100%;
    color: #e1ffff;
  }
  .nav-side-menu .brand {
    background-color: #73B1C4;
    line-height: 170px;
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    border-bottom: 1px none #33425B;
  }
  .nav-side-menu .toggle-btn {
    display: none;
  }
  .nav-side-menu ul,
  .nav-side-menu li {
    list-style: none;
    padding: 0px;
    margin: 0px;
    line-height: 60px;
    cursor: pointer;
    /*    
      .collapsed{
         .arrow:before{
                   font-family: FontAwesome;
                   content: "\f053";
                   display: inline-block;
                   padding-left:10px;
                   padding-right: 10px;
                   vertical-align: middle;
                   float:right;
              }
       }
  */
  }
  .nav-side-menu ul :not(collapsed) .arrow:before,
  .nav-side-menu li :not(collapsed) .arrow:before {
    font-family: FontAwesome;
    content: "\f078";
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
    float: right;
  }
  .nav-side-menu ul .active,
  .nav-side-menu li .active, {
    border-left: 3px solid #73B1C4;
    background-color: #73B1C4;
  }
  .nav-side-menu ul .sub-menu li.active,
  .nav-side-menu li .sub-menu li.active {
    color: #73B1C4;
    border-left: 3px solid #73B1C4;
  }
  .nav-side-menu ul .sub-menu li.active a,
  .nav-side-menu li .sub-menu li.active a,
  .nav-side-menu ul .sub-menu li:hover a,
  .nav-side-menu li .sub-menu li:hover a{
    color: #73B1C4;
  }
  .nav-side-menu ul .sub-menu li,
  .nav-side-menu li .sub-menu li {
    background-color: #33425B;
    border: none;
    line-height: 28px;
    border-bottom: 1px dashed #33425B;
    margin-left: 3px;
  }
  .nav-side-menu ul .sub-menu li:hover,
  .nav-side-menu li .sub-menu li:hover {
    color: #73B1C4;
    border-left: 1px none #73B1C4;
  }
  .nav-side-menu ul .sub-menu li:before,
  .nav-side-menu li .sub-menu li:before {
    font-family: FontAwesome;
    content: "\f105";
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .nav-side-menu li {
    padding-left: 0px;
    border-left: 3px solid #33425B;
    border-bottom: 1px none #33425B;
  }
  .nav-side-menu li a {
    text-decoration: none;
    color: #e1ffff;
    padding-left:7px;
  }
  .nav-side-menu li a i {
    padding-left: 10px;
    width: 20px;
    padding-right: 20px;
  }
  .nav-side-menu li:hover {
    border-left: 3px solid #73B1C4;
    background-color: #33425B;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  @media (max-width: 767px) {
    .nav-side-menu {
      position: relative;
      width: 100%;
      margin-bottom: 10px;
    }
    .nav-side-menu .toggle-btn {
      display: block;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 10 !important;
      padding: 3px;
      background-color: #b7dde9;
      color: #000;
      width: 40px;
      text-align: center;
    }
    .brand {
      text-align: left !important;
      font-size: 22px;
      padding-left: 20px;
      line-height: 50px !important;
    }
  }
  @media (min-width: 767px) {
    .nav-side-menu .menu-list .menu-content {
      display: block;
    }
  }
  body {
    margin: 0px;
    padding: 0px;
  }

</style>

