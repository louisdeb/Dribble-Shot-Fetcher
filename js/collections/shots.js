DribbleApp.Collections.Shots = Backbone.Collection.extend({

  initialize: function(options) {
    if (options.account) {
      console.log("account added: " + options.account);
      this.account = options.account;
    }
  },

  url: function() {
    console.log("made api call");

    $.ajaxSetup ({
      data: { access_token: '1283398e464a3f0b286c3fd11611ca4f261c6b7d74c1dedc7c3fb10c58f08e32' }
    });

    return "https://api.dribbble.com/v1/shots";
  },

  parse: function(response) {
    console.log("got response");
    console.log(response);
    return response.Search;
  }

});
