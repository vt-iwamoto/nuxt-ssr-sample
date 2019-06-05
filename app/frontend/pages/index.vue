<template>
  <div>
    <h1>Top Page</h1>
    <ul>
      <li>
        <nuxt-link to="/ssr">Go to SSR Page with &lt;nuxt-link&gt;</nuxt-link>
      </li>
      <li><a href="/ssr">Go to SSR page with &lt;a&gt;</a></li>
    </ul>
  </div>
</template>

<style>
body {
  padding: 20px;
}

h1 {
  margin-bottom: 1em;
}
</style>
