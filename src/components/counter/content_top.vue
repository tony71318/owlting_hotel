<template>

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
    
</template>

<script>

export default {
  name: 'contentTop',
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .room-top{
    margin-bottom: 20px;
  }

</style>
