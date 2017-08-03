<template>
    <div class="empty">

      <navbar></navbar>

      <div class="content">

        <div class="detail">
          <h4>*查詢空房</h4>

            
            <calendar 
              class="event-calendar" 
              :value="value"
              :disabled-days-of-week="disabled"
              :format="format"
              :clear-button="clear"
              :placeholder="placeholder"
              :hasInput="false"
              :pane="2"
              :change-pane="changePane"
              >
                <div  
                  v-bind:class="{ event_blue: evt.color_orange , event_pink:evt.color_blue }" 
                  v-for="evt in events" :slot="evt.date">
                    {{evt.content}}
                </div>
              </calendar>    


        </div>
      </div>
    </div>
</template>

<script>

import Navbar from '../components/navbar'
import Calendar from '../components/Calendar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
    Navbar,
    Calendar
  },
  name: 'empty',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8070/get/all_order',
      search: [],
      Data: [],
      disable: true,
      // calendar
      disabled: [],
      value: '2017-08-01',
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty',
      events: []
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
    },
    // calendar
    filled (v) {
      return String(v).replace(/^(\d)$/, '0$1')
    },
    isDate (v) {
      if (v instanceof Date) {
        return true
      }
      return false
    },
    stringify (v) {
      if (!this.isDate(v)) return null
      return v.getFullYear() + '-' + this.filled(v.getMonth() * 1 + 1) + '-' + this.filled(v.getDate())
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
      }
      return dict[month]
    },
    random (min, max) {
      if (max == null) {
        max = min
        min = 0
      }
      return min + Math.floor(Math.random() * (max - min + 1))
    },
    changePane (year, month, pane) {
      // ajax data or ...
      setTimeout(() => {
        this.events = this.getEventContent(year, month, pane)
      }, 0)
    },
    getEventContent (year, month, pane) {
      const data = []
      for (let p = 0; p < pane; p++) {
        let date = new Date(year, month + p)
        let monthCounts = this.getDayCount(date.getFullYear(), date.getMonth())
        for (let i = 1; i <= monthCounts; i++) {
          var tempData = {
            date: this.stringify(new Date(year, month + p, i)),
            content: '4間空房',
            color_orange: true,
            color_blue: false
          }
          var counter = 0
          for (let i = 0; i < this.Data.length; i++) {
            if (this.Data[i].start_date === tempData.date) {
              counter++
            }
          }

          counter = 4 - counter
          if (counter !== 4) {
            tempData.color_orange = false
            tempData.color_blue = true
          }
          tempData.content = counter + '間空房'

          data.push(tempData)
        }
      }
      return data
    }
  },
  mounted () {
    this.search_date()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
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

  .detail-white,
  .room-white {
    color: #768399;
    background-color: white;
    padding: 10px;
    //padding-left: 100px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    padding: 40px;
    background-color: #edf0f5;
    overflow-y: scroll;
    h4{
      color: #6a6c6f;
    }
  }

  /*right side*/

  /*calendar*/
  .event-calendar {
  .datepicker-inner{
    width: 600px;
  }
  .datepicker-body{
    span{
      width: 80px;
      height: 80px;
      vertical-align: top;
    }
    .event_blue{
      color: #7389c4;
    }
    .event_pink{
      color: #c473b1;
    }
    .low{
      color: red;
      font-weight: bold;
    }
    .datepicker-monthRange span{
      width: 100px;
      height: 100px;
      vertical-align: middle;
      line-height: 100px;
      // font-weight: 600;
    }
  }
  .datepicker-dateRange-item-active:hover, .datepicker-dateRange-item-active {
    background: #a9cfdb !important;
    color: white !important;
  }
}
</style>
