/*!
 ~
 ~ HoganStrap - Common Module
 ~
 */


/**
 * Common functions available to all modules.
 */
var hsCommonModule = (function() {
  "use strict";

  var baseUrl = "http://localhost:8080/";

  return {
    /**
     * load the template with the given name and render it with the given data and then inject it
     * into the dom object retrieved with the given query.
     */
    injectNamedTemplate: function(name, query, data) {
      var self = this;

      // see https://github.com/requirejs/text
      require(['js/lib/text!templates/'+name], function(templateText) {
        var compiledTemplate = Hogan.compile(templateText);

        self.injectWithCompiledTemplate(compiledTemplate, query, data);
      });
    },

    /**
     * load the template with the given name and render it with the given data and then inject it
     * into the dom object retrieved with the given query.
     */
    injectWithCompiledTemplate: function(compiledTemplate, query, data) {
      var renderedTemplate = compiledTemplate.render(data);

      $(query).html(renderedTemplate);
    }
  }

}());
