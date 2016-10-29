<template>
  {{hideSelf}}
  <div
    id="splash-screen"
    class="splash-wrap fader"
    v-if="display">
    <div class="splash-logo top">
      Hallo
    </div>
    <div class="splash-logo bottom">
      Tinder
    </div>
    <div class="splash-slogan">
      trick your treats boy
    </div>
  </div>
</template>
<style scoped>

  .splash-wrap {
    height: 145px;
    margin: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 180px;
  }

  .splash-logo {
    font-family: 'Chewy', cursive;
    font-size: 55px;
    color: #fdbd39;
  }

  .splash-slogan {
    font-family: Georgia;
    font-size: 19px;
    color: #fff;
    margin-top: -7px;
  }

  .bottom {
    margin-top: -30px;
    margin-left: 30px;
  }

  .fader {
    -webkit-animation: fadeinout 3s linear forwards;
    animation: fadeinout 3s linear forwards;
  }

  @-webkit-keyframes fadeinout {
    0%,100% { opacity: 0; display: none;}
    50% { opacity: 1; }
  }

  @keyframes fadeinout {
    0%,100% { opacity: 0; display: none; }
    50% { opacity: 1; }
  }

</style>
<script>

  export default{
    data(){
      return{
        display: true
      }
    }
  }

</script>
