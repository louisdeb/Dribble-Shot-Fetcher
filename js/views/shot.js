DribbleApp.Views.Shot = Backbone.View.extend({

  tagName: 'li',

  template: "<img src='<%= src %>'>",

  initialize: function(options) {
    if (options.model)
      this.model = options.model;
  },

  render: function() {
    var compiled = _.template(this.template, {src: this.model.attributes.images.hidpi});
    this.$el.html(compiled);
    return this;
  }

});
