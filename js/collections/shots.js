DribbleApp.Collections.Shots = Backbone.Collection.extend({

  initialize: function(options) {
    if (options.username) {
      this.username = options.username;
    }
    this.page = 1;
    this.perpage = 100;
  },

  /** Returns
        1 if "b" has more likes than "a" or "a" has no likes_count,
        0 iff "a" and "b" have the same number of likes,
        -1 if "a" has more likes than "b" or "b" has no likes_count.
      Used to sort the collection into descending order by likes count.
      */
  comparator: function(a,b) {
    if (!a.attributes.likes_count) return 1;
    if (!b.attributes.likes_count) return -1;
    return b.attributes.likes_count - a.attributes.likes_count;
  },

  /** Set up OAuth header with access_token and call GET request for user's shots. */
  url: function() {
    $.ajaxSetup ({
      headers: {
        "Authorization": "Bearer 1283398e464a3f0b286c3fd11611ca4f261c6b7d74c1dedc7c3fb10c58f08e32"
      },
      processData: true
    });

    return "https://api.dribbble.com/v1/users/"+this.username
            +"/shots?page="+this.page+"&per_page="+this.perpage;
  },

  /** Return the response from the Dribbble API. */
  parse: function(response) {
    return response;
  }

});
