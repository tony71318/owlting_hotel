<template>
  <div class="manage"> 
    <navbar></navbar> 
 
    <div class="content">
      <div class="row">
        <div class="detail">
          <h4>*訂單資料</h4>
          <div class="detail-white">
            <button class="btn btn-primary"  v-on:click="search_data">列出全部</button>

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

            <!-- <div class="pagination">
              <ul>
                <li v-bind:class="{'disabled': (currPage === 1)}" 
                    @click.prevent="setPage(currPage-1)"><a href="#">Prev</a></li>
                <li v-for="n in totalPage"
                    v-bind:class="{'active': (currPage === (n+1))}" 
                    @click.prevent="setPage(n+1)"><a href="#">{{n+1}}</a></li>
                <li v-bind:class="{'disabled': (currPage === totalPage)}" 
                    @click.prevent="setPage(currPage+1)"><a href="#">Next</a></li>
              </ul>
            </div>
    
            <div>Filter: <input type="text" v-model="filter_name"></div> -->

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
