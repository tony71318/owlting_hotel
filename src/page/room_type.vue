<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
  
      <circleLoading class="loading" v-show="loading"></circleLoading>

      <div class="row">
        <div class="detail">
          <h4>*房型資料</h4>
          <button class="btn-sm btn-warning pull-right"  v-on:click="list_room()">重新整理</button>
          <div class="detail-white">
            <table class="table table-condensed" v-if="Data.length > 0">
              <tr>
                <th></th> 
                <th>name</th>
                <th>room_type</th>
                <th>total_room</th>
                <th></th>
              </tr>
              <tr v-for="(data, index) in Data">
                <td>{{ index+1 }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.room_type }}</td>
                <td>{{ data.total_room }}</td>

                <td><button class="btn-sm btn-primary"  v-on:click="get_update_data(data)">更新房型</button></td>
                <td><button class="btn-sm btn-danger"  v-on:click="delete_confirm(data)">刪除房型</button></td>
              </tr>
            </table>

          </div>
        </div>
      </div>

      <div class="row" v-if="update_data !== null">
        <div class="detail">
          <h4>*更新房型</h4>
          <div class="detail-white">
            <table class="table table-condensed">
              <tr>
                <th>name</th>
                <th>room_type</th>
                <th>total_room</th>
              </tr>
              <tr>
                <td>
                  {{ update_data.name }}
                </td>
                <td>
                  {{ update_data.room_type }}
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="update_data.total_room">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="update_room()" v-if="update_data !== null">更新房型</button>

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
                <th>room_type</th>
                <th>total_room</th>
              </tr>
              <tr>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="text"  v-model="post_data.name">
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="number"  v-model="post_data.room_type">
                </td>
                <td>
                  <input id="textinput" name="textinput" placeholder="placeholder" class="form-control input-sm" type="number"  v-model="post_data.total_room">
                </td>
              </tr>
            </table>
            <button class="btn btn-primary"  v-on:click="new_room()">新增房型</button>
            <div> {{ response }} </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Navbar from '../components/navbar'

import Datepicker from 'vuejs-datepicker'
import toastr from 'toastr'

import circleLoading from 'vue-loading-spinner/src/components/Circle.vue'

export default {
  components: {
    Datepicker,
    Navbar,
    circleLoading
  },
  name: 'room_type',
  data () {
    return {
      date_format: 'yyyyMMdd',
      new_url: 'http://localhost:8070/post/room',
      get_url: 'http://localhost:8070/get/all_room',
      update_url: 'http://localhost:8070/update/room',
      delete_url: 'http://localhost:8070/delete/room',
      Data: [],
      post_data: [],
      update_data: null,
      response: null,
      old_key: null,
      loading: false
    }
  },
  methods: {
    list_room: function () {
      this.$http.get(this.get_url)
        .then((response) => {
          this.Data = response.data
          console.log(response.data)

          toastr.success('目前有' + this.Data.length + '種房型', '已載入最新資料')
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    new_room: function () {
      toastr.warning('新增房型中...')
      this.change_loading_state()

      var postData = {
        'name': this.post_data.name,
        'room_type': this.post_data.room_type,
        'total_room': this.post_data.total_room
      }
      this.response = postData

      this.$http.post(this.new_url, postData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.response = response

            this.list_room()
            this.change_loading_state()
          })
      this.show = false
    },
    get_update_data: function (data) {
      toastr.info('請在下方填寫更新資料')
      this.update_data = data
    },
    update_room: function () {
      toastr.warning('更新房型中...')
      this.change_loading_state()

      var updateData = {
        'name': this.update_data.name,
        'room_type': this.update_data.room_type,
        'total_room': this.update_data.total_room
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
    delete_room: function (data) {
      toastr.warning('刪除房型中...')
      this.change_loading_state()

      var deleteData = {
        'room_type': data.room_type
      }
      this.response = deleteData

      this.$http.post(this.delete_url, deleteData)
          .then((response) => {
            console.log(response.bodyText + '!')
            this.response = response

            this.list_room()
            this.change_loading_state()
          })
      this.show = false
    },
    delete_confirm: function (data) {
      var _this = this
      this.$swal({
        title: '確定要刪除嗎？',
        text: '即將刪除房型： ' + data.name,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '快給我刪除！！！',
        cancelButtonText: '我後悔了ＱＱ'
      }).then(function () {
        _this.delete_room(data)

        _this.$swal(
          '哈哈，刪除了!',
          '房型名稱： ' + data.name + ' 被刪除了',
          'success'
        )
      }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
          _this.$swal(
            '取消了',
            '放心，房型還在 :)',
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
    this.list_room()
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
  }

  /*right side*/
</style>
