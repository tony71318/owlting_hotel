<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
      <div class="row">
        <div class="detail">
          <h4>*訂單資料</h4>
          <div class="detail-white">
            <button class="btn btn-primary"  v-on:click="search_date">列出全部</button>
            <div v-for="item of Data">{{ item }}</div>      
          </div>
        </div>

        <!-- <div class="detail">
          <h4>*搜尋訂單</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">輸入訂單資料以利查詢</label>
            </div>

            <button class="btn btn-primary"  v-on:click="search_date">點擊查詢</button>
            <div v-for="item of Data">{{ item }}</div>      
          </div>
        </div> -->
      </div>
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
  name: 'manage',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8000/ethereum/booking_contract/orders/list_all/',
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
