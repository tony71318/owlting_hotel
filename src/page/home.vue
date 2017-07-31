<template>
    <div class="home">
      
      <navbar></navbar>

      <div class="content">
        
        <div class="row">
          
          <div class="col-sm-4">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">退房進度</h3>
                <p class="card-text">尚有 2 間未退房</p>
                <a href="#/checkout" class="btn btn-primary">辦理退房</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">預約入住</h3>
                <p class="card-text">尚有 2 間未入住</p>
                <a href="#/checkin" class="btn btn-primary">辦理入住</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">今日空房</h3>
                <p class="card-text">尚有 12 間空房</p>
                <a href="#/sell" class="btn btn-primary">現場銷售</a>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-md-6">
            <div class="card text-center room">
              <div class="card-header">
                單人房
              </div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <p class="card-text">內容</p>
                <a href="#" class="btn btn-primary">查看房型</a>
              </div>
              <div class="card-footer text-muted">
                還有 3 間空房
              </div>
            </div>

            <div class="card text-center room">
              <div class="card-header">
                雙人房
              </div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <p class="card-text">內容</p>
                <a href="#" class="btn btn-primary">查看房型</a>
              </div>
              <div class="card-footer text-muted">
                還有 3 間空房
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card text-center room">
              <div class="card-header">
                三人房
              </div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <p class="card-text">內容</p>
                <a href="#" class="btn btn-primary">查看房型</a>
              </div>
              <div class="card-footer text-muted">
                還有 3 間空房
              </div>
            </div>
          

            <div class="card text-center room">
              <div class="card-header">
                四人房
              </div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <p class="card-text">內容</p>
                <a href="#" class="btn btn-primary">查看房型</a>
              </div>
              <div class="card-footer text-muted">
                還有 3 間空房
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>

import Navbar from '../components/navbar'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data () {
    return {
      // msg: 'Welcome to Home Page'
    }
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/

  .room-top{
    margin-bottom: 20px;
  }

  .room{
    margin-bottom: 20px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    position: fixed;
    padding: 20px;
  }

  /*right side*/

</style>
