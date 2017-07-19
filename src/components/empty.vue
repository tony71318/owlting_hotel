<template>
    <div class="empty">

      <navbar></navbar>

      <div class="content">

        <div class="detail">
          <h4>*查詢空房</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">查詢目前已有預定的日期</label>
              <div class="col-md-4">  
                <datepicker placeholder="Select Date" :format="date_format" v-model="search.empty_date"></datepicker>
              </div>  
            </div>

            <button class="btn btn-primary"  v-on:click="search_date">點擊查詢</button>
            <div v-for="item of Data">{{ item }}</div>

            <!-- <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">訂房人姓名*</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-md" type="text"  v-model="order.name">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">聯絡電話</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-md" type="text"  v-model="order.phone">
              </div>
            </div>  -->           
          </div>
        </div>

    <!--     <div class="room">
          <h4>*選擇欲入住之房間</h4>
          <div class="room-white">
            <div class="form-group">
              <h5 class="pull-right">{{single_price}}元</h5>
              <label class="col-md-4 control-label" for="textinput">單人房</label>  
              <div class="col-md-4">
                <label class="checkbox-inline"><input type="checkbox" value="101" v-model="order.room_id">101</label>
                <label class="checkbox-inline"><input type="checkbox" value="102" v-model="order.room_id">102</label>
                <label class="checkbox-inline"><input type="checkbox" value="103" v-model="order.room_id">103</label>
              </div>
            </div>
          </div>

          <div class="room-white">
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">雙人房</label>
              <h5 class="pull-right">{{double_price}}元</h5>  
              <div class="col-md-4">
                <label class="checkbox-inline"><input type="checkbox" value="201" v-model="order.room_id">201</label>
                <label class="checkbox-inline"><input type="checkbox" value="202" v-model="order.room_id">202</label>
                <label class="checkbox-inline"><input type="checkbox" value="203" v-model="order.room_id">203</label>
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-primary"  v-on:click="send_order">送出訂單</button> -->
      </div>
      

    </div>
</template>

<script>

import Navbar from './navbar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'empty',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8000/ethereum/booking_contract/orders/order_id/',
      search: [],
      Data: [],
      single_price: 1000,
      double_price: 2000,
      disable: true
    }
  },
  methods: {
    search_date: function () {
      this.$http.get(this.get_url)
          .then((response) => {
            this.Data = response.data
          })
          .catch(function (response) {
            console.log(response)
          })
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
</style>
