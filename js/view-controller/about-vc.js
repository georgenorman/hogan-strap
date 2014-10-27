/*!
 ~
 ~ HoganStrap - About Application View Controller
 ~
 */

/**
 * View Controller for the about page (about.html).
 */
var aboutViewController = (function(contentService) {
  "use strict";

  var simulatedData = null;

  return {
    render: function() {
      hsCommonModule.injectNamedTemplate("components/header.hogan", "#header", {aboutActive:true});
      hsCommonModule.injectNamedTemplate("components/carousel.hogan", "#carousel");
      hsCommonModule.injectNamedTemplate("components/footer.hogan", "footer");
    }
  }

}(contentServiceModule));
