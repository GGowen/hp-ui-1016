<template>
  <div id="main" class="main container">
    <splash></splash>
    <submission-map></submission-map>
  </div>
</template>
<style>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import { dropdown } from 'vue-strap/dist/vue-strap.js'
  import submissionMap from './components/submission-map.vue'
  import splash from './components/splash.vue'

  setTimeout(function () {
    console.log('Removing splash screen..');
    let mainElm = document.getElementById("main");
    let splashScreenElm = document.getElementById("splash-screen");
    let garbage = mainElm.removeChild(splashScreenElm);

    let mapContainerElm = document.getElementById("map-container");
    mapContainerElm.style.display = 'block';
  }, 3000);

  export default {
    replace: false,
  	data() {
      return {
        text: 'vue'
      }
    },
    components: {
      dropdown,
      splash,
      'submission-map': submissionMap
    },
  }
</script>
