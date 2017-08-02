<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">

      <circleLoading class="loading" v-show="loading"></circleLoading>

      <div class="row">
        <div class="detail">
          <h4>*訂單資料</h4>
          <button class="btn-sm btn-warning pull-right"  v-on:click="list_order()" v-if="Data.length > 0">重新整理</button>
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
                <td>{{ data.order_id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.room_id[0] }}</td>
                <td>{{ data.room_id }}</td>
                <td>{{ data.start_date }}</td>
                <td>{{ data.duration }}</td>
                <td>{{ data.paid }}</td>
                <td>
                  <button class="btn-sm btn-primary"  v-on:click="get_update_data(data)">更新訂單</button>
                </td>
                <td>
                  <button class="btn-sm btn-danger"  v-on:click="delete_confirm(data)">刪除訂單</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="row" v-if="update_data !== null">
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
              <tr>
                <td>
                  {{ update_data.order_id }}
                </td>
                <td>
                  {{ update_data.name }}
                </td>
                <td>
                  {{ update_data.room_id[0] }}
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.room_id">
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.start_date">
                </td>
                <td>
                  {{ update_data.duration }}
                </td>
                <td>
                  <input type="checkbox" value="203" v-model="update_data.paid">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="update_order()" v-if="update_data !== null">更新訂單</button>
            <div> {{ response }} </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '../components/navbar'

import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'

import circleLoading from 'vue-loading-spinner/src/components/Circle.vue'

export default {
  components: {
    Datepicker,
    Navbar,
    circleLoading
  },
  name: 'manage',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8070/get/all_order',
      update_url: 'http://localhost:8070/update/order',
      delete_url: 'http://localhost:8070/delete/order',
      Data: [],
      update_data: null,
      response: null,
      old_key: null,
      loading: false
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
      this.old_key = data.order_id + data.start_date
    },
    update_order: function () {
      toastr.warning('更新訂單中...')
      this.change_loading_state()

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

            this.change_loading_state()
          })
      this.show = false
    },
    delete_order: function (data) {
      toastr.warning('刪除訂單中...')
      this.change_loading_state()

      var deleteData = {
        'order_id': data.order_id,
        'checkin_date': data.start_date
      }
      this.response = deleteData

      this.$http.post(this.delete_url, deleteData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.list_order()
            this.response = response

            this.change_loading_state()
          })
      this.show = false
    },
    delete_confirm: function (data) {
      var _this = this
      this.$swal({
        title: '確定要刪除嗎？',
        text: '即將刪除訂單： ' + data.order_id,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '快給我刪除！！！',
        cancelButtonText: '我後悔了ＱＱ'
      }).then(function () {
        _this.delete_order(data)

        _this.$swal(
          '哈哈，刪除了!',
          '訂單編號： ' + data.order_id + ' 被刪除了',
          'success'
        )
      }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
          _this.$swal(
            '取消了',
            '放心，訂單還在 :)',
            'error'
          )
        }
      })
    },
    change_loading_state: function () {
      this.loading = !this.loading
    }
  },
  mounted () {
    this.list_order()
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
    overflow-y: scroll;
  }

  /*right side*/
</style>
