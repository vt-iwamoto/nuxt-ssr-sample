<template>
  <div>
    <h1>SSR Page</h1>
    <p>
      <strong>{{ message }}</strong>
    </p>
    <ul>
      <li><nuxt-link to="/">Go to Top Page</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    let baseUrl = ''
    if (process.server) {
      baseUrl = req.protocol + '://' + req.headers.host
    }
    return axios.get(baseUrl + '/bff').then(res => {
      return {
        message: res.data.message
      }
    })
  }
}
</script>

<style>
body {
  padding: 20px;
}

h1 {
  margin-bottom: 1em;
}

p {
  margin: 1em 0;
}
</style>
