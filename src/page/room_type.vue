<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
      <div class="row">
        <div class="detail">
          <h4>*房型資料</h4>
          <button class="btn-sm btn-warning pull-right"  v-on:click="list_order()">重新整理</button>
          <div class="detail-white">
            <table class="table table-condensed" v-if="Data.length > 0">
              <tr>
                <th></th> 
                <th>name</th>
                <th>total_room</th>
                <th></th>
              </tr>
              <tr v-for="(data, index) in Data">
                <td>{{ index+1 }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.total_room }}</td>

                <td><button class="btn-sm btn-primary"  v-on:click="get_update_data(data)">更新房型</button></td>
                <td><button class="btn-sm btn-danger"  v-on:click="delete_order(data)">刪除房型</button></td>
              </tr>
            </table>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="detail">
          <h4>*更新房型</h4>
          <div class="detail-white">
            <table class="table table-condensed">
              <tr>
                <th>name</th>
                <th>total_room</th>
              </tr>
              <tr v-if="update_data !== null">
                <td>
                  {{ update_data.name }}
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.total_room">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="update_order()" v-if="update_data !== null">更新房型</button>
            <div> {{ response }} </div>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="detail">
          <h4>*新增房型</h4>
          <div class="detail-white">
            <table class="table table-condensed">
              <tr>
                <th>name</th>
                <th>total_room</th>
              </tr>
              <tr>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="post_data.name">
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="post_data.total_room">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="update_order()" v-if="update_data !== null">新增房型</button>
            <div> {{ response }} </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Navbar from '../components/navbar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
// var $ = window.jQuery = require('../../node_modules/jquery')

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'room_type',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8070/get/all_room',
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/update/',
      delete_url: 'http://localhost:8000/ethereum/booking_contract/orders/delete/',
      Data: [],
      post_data: [],
      update_data: null,
      response: null,
      old_key: null
    }
  },
  methods: {
    list_order: function () {
      this.$http.get(this.get_url)
          .then((response) => {
            this.Data = response.data
            console.log(response.data)
          })
          .catch(function (response) {
            console.log(response)
          })
    },
    get_update_data: function (data) {
      this.update_data = data
      this.old_key = data.order_id + data.start_date
    },
    update_order: function () {
      var updateData = {
        'old_key': this.old_key,
        'order_id': this.update_data.order_id,
        'user_id': this.update_data.name,
        'room_id': this.update_data.room_id,
        'checkin_date': this.update_data.start_date
      }
      this.response = updateData

      this.$http.post(this.update_url, updateData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.response = response
          })
      this.show = false
    },
    delete_order: function (data) {
      var deleteData = {
        'order_id': data.order_id,
        'checkin_date': data.start_date
      }
      this.response = deleteData

      this.$http.post(this.delete_url, deleteData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.response = response
          })
      this.show = false
    }
  },
  mounted () {
    this.list_order()
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
    /*padding-left: 100px;*/
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    padding: 40px;
    background-color: #edf0f5;
  }

  /*right side*/
</style>
