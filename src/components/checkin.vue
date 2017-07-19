<template>
  <div class="checkin"> 
    <navbar></navbar> 
 
    <div class="content">
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './navbar'

// import toastr from 'toastr'

export default {
  components: {
    Navbar
  },
  name: 'checkin',
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

