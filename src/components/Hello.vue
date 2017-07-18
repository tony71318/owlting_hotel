<template>
  <div>
    <div class="hello">
      <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>

      <br>
        <h1>Page For Testing</h1>
      <br>

      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
      <button type="button" class="btn btn-primary" @click="showToastr">Show Toastr</button>

      <!-- Secondary, outline button -->
      <button type="button" class="btn btn-warning" @click="hideToastr">Hide Toastr</button>

      <router-link to="/home">Go to Home</router-link>
    </div>
  </div>
</template>

<script>

import toastr from 'toastr'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Vue 2 App'
    }
  },
  methods: {
    showToastr: function () {
      // Display a warning toast, with no title
      toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

      // Display a success toast, with a title
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')

      // Display an error toast, with a title
      toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

      // Override global options
      toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {
        timeOut: 5000
      })
    },
    hideToastr: function () {
      // Remove current toasts using animation
      toastr.clear()

      // Immediately remove current toasts without using animation
      // toastr.remove()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
