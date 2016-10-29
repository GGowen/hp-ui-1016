<template>
  <div id="map-container" class="submission-map">
    <div id="map"></div>
    <button
      class="rate-your-treat"
      v-on:click="rateYourTreat()">Rate your treat!</button>
  </div>
</template>
<style scoped>
  .submission-map {
    border: 1px solid #666;
    display: none;
    margin: 10px;
  }

  .rate-your-treat {
    background-color: #feb904;
    color: #051c24;
    display: block;
    font-family: Chewy, cursive;
    font-size: 23px;
    letter-spacing: -0.2px;
    padding: 15px;
    text-align: center;
    width: 100%;
  }

  #map {
    height: 400px;
    width: 100%;
  }
</style>
<script>
  import LocationLib from '../libraries/location.js';
  import HouseholdsService from '../services/households.js';

  const gmApiKey = 'AIzaSyC0J8UNndfRHIgEQNmDIxc-cgiSd_-9wgY';
  const gmCallback = 'initMap';
  const gmId = 'GoogleMapsApi';
  const gmMapId = 'map';
  const gmUrl = `https://maps.googleapis.com/maps/api/js?key=${gmApiKey}&callback=${gmCallback}`;
  const gmZoomLevel = 16;

  class SubmissionMap {
    static attachScript() {
      const elementExists = !!document.getElementById(gmId);

      // Do not insert multiple times
      if (elementExists) {
        return;
      }

      window.initMap = SubmissionMap.initMap;

      console.log('Inserting Google Maps API JavaScript...');
      let el = document.createElement('script');
      el.setAttribute('id', gmId);
      el.setAttribute('type', 'text/javascript');
      el.setAttribute('src', gmUrl);
      document.getElementsByTagName('head')[0].appendChild(el);
    }

    static initMap() {
      LocationLib.get(function (location) {
        const gmLocation = {
          lat: location.lat,
          lng: location.long
        };
        var map = new google.maps.Map(
          document.getElementById(gmMapId),
          {
            zoom: gmZoomLevel,
            center: gmLocation,
            styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":-30}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#353535"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#656565"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#808080"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#454545"}]}]
          }
        );
        var marker = new google.maps.Marker({
          map: map,
          position: gmLocation
        });

        HouseholdsService.fetchAll(function (data) {
          console.log('Fetched households: ', data);
        });
      });
    }

    static rateYourTreat() {
      const imageData = '';
      HouseholdsService.create(imageData, function (data) {
        console.log('Created household: ', data);
      });
    }
  }

  SubmissionMap.attachScript()

  export default {
    data() {
      return {
        gmUrl: gmUrl
      };
    },
    methods: {
      rateYourTreat: SubmissionMap.rateYourTreat
    }
  };
</script>
