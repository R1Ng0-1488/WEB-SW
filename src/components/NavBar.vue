<template>
  <div>
    <nav class="blue-grey darken-2">
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo amber-text">WEB-SW</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Planets</router-link></li>
          <li><router-link to="/statistics">Statistics</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
