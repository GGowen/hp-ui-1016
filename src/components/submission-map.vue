<template>
  <div class="submission-map">
    <h4>Submission Map</h4>
  </div>
</template>
<style>
  .submission-map {
    border: 1px solid #666;
    margin: 10px;
  }
</style>
<script>
  const gmApiKey = 'AIzaSyC0J8UNndfRHIgEQNmDIxc-cgiSd_-9wgY';
  const gmCallback = 'initMap';
  const gmUrl = `https://maps.googleapis.com/maps/api/js?key=${gmApiKey}&callback=${gmCallback}`;

  class SubmissionMap {
    static attachScript() {
      console.log('Inserting Google Maps API JavaScript...')
      let el = document.createElement('script')
      el.setAttribute('type', 'text/javascript')
      el.setAttribute('src', gmUrl)
      document.getElementsByTagName('head')[0].appendChild(el)
    }
  }

  SubmissionMap.attachScript()

  export default{
    data() {
      return {
        gmUrl: gmUrl
      }
    }
  }
</script>
