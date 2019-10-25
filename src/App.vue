<template>
  <div id="app">
    test
  </div>
</template>

<script>

document.addEventListener("DOMContentLoaded", function() {
  let fontSize = document.documentElement.clientWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  document.querySelector("html").style.fontSize = fontSize + "px";
});

export default {
}
</script>

<style lang="scss">
</style>
