<template>
  <div class="sell">
      <navbar></navbar>

      <div class="content">

        <div class="detail">
          <h4>*填寫訂房資訊</h4>
          <div class="detail-white">
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">訂房人姓名(暫時改為帳戶）*</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-md" type="text"  v-model="order.user_id">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">聯絡電話</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-md" type="text"  v-model="order.phone">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">入住日期 *</label>
              <div class="col-md-8">  
                <datepicker placeholder="Select Date" :format="date_format" v-model="order.checkin_date"></datepicker>
              </div>  
            </div>
            <div class="form-group row ">
              <label class="col-md-2 control-label" for="textinput">退房日期</label>
              <div class="col-md-8">  
                <datepicker placeholder="Select Date" :format="date_format" :disabled-picker="disable" v-model="order.checkout_date"></datepicker>
              </div>  
            </div>
          </div>
        </div>

      <div class="room">
        <h4>*選擇欲入住之房間</h4>
        <div class="room-white">
          <div class="form-group">
            <h5 class="pull-right">{{single_price}}元</h5>
            <label class="col-md-4 control-label" for="textinput">單人房</label>  
            <div class="col-md-4">
              <label class="checkbox-inline"><input type="checkbox" value="101" v-model="room_id">101</label>
              <label class="checkbox-inline"><input type="checkbox" value="102" v-model="room_id">102</label>
              <label class="checkbox-inline"><input type="checkbox" value="103" v-model="room_id">103</label>
            </div>
          </div>
        </div>

        <div class="room-white">
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">雙人房</label>
            <h5 class="pull-right">{{double_price}}元</h5>  
            <div class="col-md-4">
              <label class="checkbox-inline"><input type="checkbox" value="201" v-model="room_id">201</label>
              <label class="checkbox-inline"><input type="checkbox" value="202" v-model="room_id">202</label>
              <label class="checkbox-inline"><input type="checkbox" value="203" v-model="room_id">203</label>
            </div>
          </div>
        </div>

        <button class="btn btn-primary"  v-on:click="send_order">送出訂單</button>
        <div> {{ response }} </div>
      </div>
    </div>
  </div>
</template>

<script>

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
import Navbar from './navbar'

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'sell',
  data () {
    return {
      date_format: 'yyyy-MM-dd',
      post_url: 'http://localhost:8000/ethereum/booking_contract/orders/post/',
      order: [],
      room_id: [],
      single_price: 1000,
      double_price: 2000,
      disable: true,
      response: null
    }
  },
  methods: {
    send_order: function () {
      var postdata = {
        'user_id': this.order.user_id,
        'room_id': this.room_id[0],
        'checkin_date': this.order.checkin_date.toISOString().substring(0, 10)
      }
      console.log(postdata.checkin_date)
      this.$http.post(this.post_url, postdata)
          .then((response) => {
            console.log(response.data + '!')
            this.response = response
          })
      this.show = false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/
  .radio-inline,
  .checkbox-inline{
    margin-right: 10px;
  }

  .detail,
  .room {
    padding: 5px;
    margin-bottom: 10px;
  }

  .content h4{
    color: #6a6c6f;
  }

  .detail-white,
  .room-white {
    color: #768399;
    background-color: white;
    padding: 10px;
    padding-left: 100px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    padding: 40px;
    background-color: #edf0f5;
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
