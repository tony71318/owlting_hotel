<template>
    <div class="counter">
      
      <navbar></navbar>

      <div class="content">
        
        <contentTop></contentTop>

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
import ContentTop from '../components/counter/content_top'

export default {
  name: 'counter',
  components: {
    Navbar,
    ContentTop
  },
  data () {
    return {
      // msg: 'Welcome to Home Page'
      modal: {
        title: 'I am modal title',
        visible: true,
        text: ''
      }
    }
  },
  methods: {
    onShowModal () {
      this.modal.visible = !this.modal.visible
    }
  },
  mounted () {
    $('#myModal').modal('show')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/

  .room{
    margin-bottom: 20px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    position: fixed;
    padding: 20px;
    overflow-y: scroll;
  }

  /*right side*/

</style>
