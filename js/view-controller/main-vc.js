/*!
 ~
 ~ HoganStrap - Main View Controller
 ~
 */


/**
 * View Controller for the main page (index.html).
 */
var mainViewController = (function(contentService) {
  "use strict";

  var simulatedData = null;

  return {
    render: function() {
      hsCommonModule.injectNamedTemplate("components/header.hogan", "#header", {homeActive:true});
      hsCommonModule.injectNamedTemplate("components/carousel.hogan", "#carousel");
      hsCommonModule.injectNamedTemplate("components/footer.hogan", "footer");

      // see https://github.com/requirejs/text
      require(['js/lib/text!templates/components/marketingMessage.hogan'], function(templateText) {
        var compiledMarketingMessageTemplate = Hogan.compile(templateText);

        require(['js/lib/text!templates/components/marketingFeaturetteRight.hogan'], function(templateText) {
          var compiledMarketingFeaturetteRightTemplate = Hogan.compile(templateText);

          require(['js/lib/text!templates/components/marketingFeaturetteLeft.hogan'], function(templateText) {
            var compiledMarketingFeaturetteLeftTemplate = Hogan.compile(templateText);

            require(['js/lib/text!templates/pages/main.hogan'], function(templateText) {
              var compiledTemplate = Hogan.compile(templateText);

              hsCommonModule.injectWithCompiledTemplate(compiledTemplate, "main", {
                "marketingMessage1": compiledMarketingMessageTemplate.render(contentService.fetch("marketingMessage1")),
                "marketingMessage2": compiledMarketingMessageTemplate.render(contentService.fetch("marketingMessage2")),
                "marketingMessage3": compiledMarketingMessageTemplate.render(contentService.fetch("marketingMessage3")),

                "marketingFeaturette1":compiledMarketingFeaturetteLeftTemplate.render(contentService.fetch("marketingFeaturette1")),
                "marketingFeaturette2":compiledMarketingFeaturetteRightTemplate.render(contentService.fetch("marketingFeaturette2")),
                "marketingFeaturette3":compiledMarketingFeaturetteLeftTemplate.render(contentService.fetch("marketingFeaturette3"))
              });
            });
          });
        });
      });
    }
  }

}(contentServiceModule));

