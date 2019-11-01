<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  let fontSize = document.documentElement.clientWidth / 10;
  fontSize = fontSize > 55 ? 55 : fontSize;
  document.querySelector("html").style.fontSize = fontSize + "px";
});

export default {};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
}
</style>
