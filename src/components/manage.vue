<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
      <div class="detail">
        <h4>*訂單資料</h4>
        <div class="detail-white">
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput"> </label>  
            <div class="col-md-4">
              <button class="btn btn-primary"  v-on:click="search_data">列出全部</button>
              <br>
              <table class="table table-condensed">
                <tr>
                  <th>order_id</th>
                  <th>name</th>
                  <th>room_id</th>
                  <th>people</th>
                  <th>price</th>
                  <th>date</th>
                  <th>time</th>
                </tr>
                <tr v-for="r in Data">
                  <td>{{ r.order_id }}</td>
                  <td>{{ r.name }}</td>
                  <td>{{ r.room_id }}</td>
                  <td>{{ r.number_of_people }}</td>
                  <td>{{ r.price }}</td>
                  <td>{{ r.date }}</td>
                  <td>{{ r.time }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

        <div class="detail">
          <h4>*修改訂單</h4>
          <div class="detail-white">
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">order_id*</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.order_id">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">name</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.name">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">room_id</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.room_id">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">people</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.number_of_people">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">price</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.price">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">date</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.date">                  
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-2 control-label" for="textinput">time</label>  
              <div class="col-md-8">
                <input id="textinput" name="textinput" class="form-control input-md" type="text"  v-model="order.time">                  
              </div>
            </div>

            <button class="btn btn-primary"  v-on:click="search_data">確認送出</button>   
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import Navbar from './navbar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
// var $ = window.jQuery = require('../../node_modules/jquery')

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'manage',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8000/ethereum/booking_contract/orders/list_all/',
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/update',
      search: [],
      Data: [],
      order: [],
      single_price: 1000,
      double_price: 2000,
      disable: true
    }
  },
  methods: {
    search_data: function () {
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
