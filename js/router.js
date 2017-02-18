DribbleApp.Router = Backbone.Router.extend({

  routes: {
    'home': 'home',
    'search': 'search',
    '*path': 'home'
  },

  home: function() {
    var view = new DribbleApp.Views.Home();
    $('#main').html(view.render().el);
  },

  search: function() {
    var view = new DribbleApp.Views.Search();
    $('#main').html(view.render().el);
  }
});
