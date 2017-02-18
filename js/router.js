DribbleApp.Router = Backbone.Router.extend({

  routes: {
    'search': 'search',
    '*path': 'search'
  },

  search: function() {
    var view = new DribbleApp.Views.Search();
    $('#main').html(view.render().el);
  }
});
