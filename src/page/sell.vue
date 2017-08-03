<template>
  <div class="sell">
      <navbar></navbar>

      <div class="content">

        <circleLoading class="loading" v-show="loading"></circleLoading>

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
              <label class="checkbox-inline"><input type="radio" value="101" v-model="room_id">101</label>
              <label class="checkbox-inline"><input type="radio" value="102" v-model="room_id">102</label>
              <label class="checkbox-inline"><input type="radio" value="103" v-model="room_id">103</label>
            </div>
          </div>
        </div>

        <div class="room-white">
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">雙人房</label>
            <h5 class="pull-right">{{double_price}}元</h5>  
            <div class="col-md-4">
              <label class="checkbox-inline"><input type="radio" value="201" v-model="room_id">201</label>
              <label class="checkbox-inline"><input type="radio" value="202" v-model="room_id">202</label>
              <label class="checkbox-inline"><input type="radio" value="203" v-model="room_id">203</label>
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

import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
import Navbar from '../components/navbar'

import circleLoading from 'vue-loading-spinner/src/components/Circle.vue'

export default {
  components: {
    Datepicker,
    Navbar,
    circleLoading
  },
  name: 'sell',
  data () {
    return {
      date_format: 'yyyy-MM-dd',
      post_url: 'http://localhost:8070/post/order',
      order: [],
      room_id: [],
      single_price: 1000,
      double_price: 2000,
      disable: true,
      response: null,
      loading: false
    }
  },
  methods: {
    send_order: function () {
      toastr.warning('新增訂單中...')
      this.loading = true
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
            this.loading = false
          })
      this.show = false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .loading{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: transformX(-50%);
    margin-left: transformY(-50%);
    z-index: 1001;
  }

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
    overflow-y: scroll;
  }

  /*right side*/

</style>
