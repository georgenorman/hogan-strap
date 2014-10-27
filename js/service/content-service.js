/*!
 ~
 ~ HoganStrap - Content Service
 ~
 */

/**
 * Service that provides content to all pages (typically provided by a web service
 * that reads content from a data store).
 */
var contentServiceModule = (function() {
  "use strict";

  var simulatedData = null;

  return {
    fetch: function(id) {
      if (simulatedData === null) {
        // initialize data (which would normally be read from a web service).
        simulatedData = {

          "carouselMessage1": {
            "panelClass": "col-lg-4",
            "imageSrc": "http://dummyimage.com/200x200/080/fff",
            "heading": "Donec Sed",
            "content": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
            "detailHref": "#"
          },

          "marketingMessage1": {
            "panelClass": "col-lg-4",
            "imageSrc": "http://dummyimage.com/200x200/080/fff",
            "heading": "Donec Sed",
            "content": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
            "detailHref": "#"
          },

          "marketingMessage2": {
            "panelClass": "col-lg-4",
            "imageSrc": "http://dummyimage.com/200x200/008/fff",
            "heading": "Duis Mollis",
            "content": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            "detailHref": "#"
          },

          "marketingMessage3": {
            "panelClass": "col-lg-4",
            "imageSrc": "http://dummyimage.com/200x200/800/fff",
            "heading": "Odio Dui",
            "content": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            "detailHref": "#"
          },

          "marketingFeaturette1": {
            "heading": "First featurette heading.",
            "headingMuted": "It'll blow your mind.",
            "imageSrc": "http://lorempixel.com/400/400/nature",
            "content": "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          },

          "marketingFeaturette2": {
            "heading": "Oh yeah, it's that good.",
            "headingMuted": "See for yourself.",
            "imageSrc": "http://lorempixel.com/400/400/food",
            "content": "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          },

          "marketingFeaturette3": {
            "heading": "And lastly, this one.",
            "headingMuted": "Checkmate.",
            "imageSrc": "http://lorempixel.com/400/400/cats",
            "content": "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          }
        };
      }

      return simulatedData[id];
    }
  }

}());
