<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
<<<<<<< HEAD
      <div class="row">
        <div class="detail">
          <h4>*訂單資料</h4>
          <button class="btn-sm btn-warning pull-right"  v-on:click="list_order()">重新整理</button>
          <div class="detail-white">
            <table class="table table-condensed" v-if="Data.length > 0">
              <tr>
                <th></th> 
                <th>order_id</th>
                <th>name</th>
                <th>room_type</th>
                <th>room_id</th>
                <th>start_date</th>
                <th>duration</th>
                <th>paid</th>
                <th></th>
              </tr>
              <tr v-for="(data, index) in Data">
                <td>{{ index+1 }}</td>
                <td>{{ data.fields.order_id }}</td>
                <td>{{ data.fields.name }}</td>
                <td>{{ data.fields.room_id[0] }}</td>
                <td>{{ data.fields.room_id }}</td>
                <td>{{ data.fields.start_date }}</td>
                <td>{{ data.fields.duration }}</td>
                <td>{{ data.fields.paid }}</td>
                <td>
                  <button class="btn-sm btn-primary"  v-on:click="get_update_data(data)">更新訂單</button>
                </td>
                <td>
                  <click-confirm placement="right">
                    <button class="btn-sm btn-danger"  v-on:click="delete_order(data)">刪除訂單</button>
                  </click-confirm>
                </td>
              </tr>
            </table>

=======
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
>>>>>>> c5c82af7bf17a10215d9852bc08e3fd246ef176e
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div class="row">
        <div class="detail">
          <h4>*更新訂單</h4>
          <div class="detail-white">
            <table class="table table-condensed">
              <tr>
                <th>order_id</th>
                <th>name</th>
                <th>room_type</th>
                <th>room_id</th>
                <th>start_date</th>
                <th>duration</th>
                <th>paid</th>
              </tr>
              <tr v-if="update_data !== null">
                <td>
                  {{ update_data.fields.order_id }}
                </td>
                <td>
                  {{ update_data.fields.name }}
                </td>
                <td>
                  {{ update_data.fields.room_id[0] }}
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.fields.room_id">
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.fields.start_date">
                </td>
                <td>
                  {{ update_data.fields.duration }}
                </td>
                <td>
                  <input type="checkbox" value="203" v-model="update_data.fields.paid">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="update_order()" v-if="update_data !== null">更新訂單</button>
            <div> {{ response }} </div>

          </div>
        </div>
      </div>

=======
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
>>>>>>> c5c82af7bf17a10215d9852bc08e3fd246ef176e
    </div>
  </div>
</template>

<script>

import Navbar from './navbar'

import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'

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
<<<<<<< HEAD
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/update/',
      delete_url: 'http://localhost:8000/ethereum/booking_contract/orders/delete/',
      Data: [],
      update_data: null,
      response: null,
      old_key: null
=======
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/update',
      search: [],
      Data: [],
      order: [],
      single_price: 1000,
      double_price: 2000,
      disable: true
>>>>>>> c5c82af7bf17a10215d9852bc08e3fd246ef176e
    }
  },
  methods: {
    list_order: function () {
      this.$http.get(this.get_url)
          .then((response) => {
            this.Data = response.data
            toastr.success('目前有' + this.Data.length + '筆訂單', '已載入最新資料')
            console.log(response.data)
          })
          .catch(function (response) {
            console.log(response)
          })
    },
    get_update_data: function (data) {
      toastr.info('請在下方填寫更新資料')
      this.update_data = data
      this.old_key = data.fields.order_id + data.fields.start_date
    },
    update_order: function () {
      var updateData = {
        'old_key': this.old_key,
        'order_id': this.update_data.fields.order_id,
        'user_id': this.update_data.fields.name,
        'room_id': this.update_data.fields.room_id,
        'checkin_date': this.update_data.fields.start_date
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
        'order_id': data.fields.order_id,
        'checkin_date': data.fields.start_date
      }
      this.response = deleteData

      this.$http.post(this.delete_url, deleteData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.list_order()
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
