DribbleApp.Views.Shot = Backbone.View.extend({

  tagName: 'li',

  initialize: function(options) {
    if (options.model)
      this.model = options.model;
  },

  render: function() {
    this.$el.html(this.model.attributes.title);
    return this;
  }

});


/*
DribbleApp.Views.Shots = Backbone.View.extend({
  initialize: function(options) {}
});
*/
