DribbleApp.Collections.Shots = Backbone.Collection.extend({

  initialize: function(options) {
    if (options.username) {
      this.username = options.username;
    }
  },

  /** Set up OAuth header with access_token and call GET request for user's shots. */
  url: function() {
    $.ajaxSetup ({
      headers: {
        "Authorization": "Bearer 1283398e464a3f0b286c3fd11611ca4f261c6b7d74c1dedc7c3fb10c58f08e32"
      },
      processData: true
    });

    return "https://api.dribbble.com/v1/users/"+this.username+"/shots";
  },

  /** Return the response from the Dribbble API. */
  parse: function(response) {
    return response;
  }

});
