DribbleApp.Views.Search = Backbone.View.extend({

  events: {
    'click button': 'getspots'
  },

  template: "<input type='text' placeholder='search'> \
             <button>search</button> \
             <ul id='shot-list'></ul>",

  initialize: function(options) {},

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  getspots: function() {
    var account = this.$el.find('input').val();
    var shots = new DribbleApp.Collections.Shots({account: account});

    shots.fetch({success: this.rendershots.bind(this)});
  },

  rendershots: function(shots) {
    var shotview;

    for (var n in shots.models) {
      console.log('rendering shot ' + shots.models[n].attributes.title);
      shotview = new DribbleApp.Views.Shot({model: shots.models[n]});
      this.$el.find('#shot-list').append(shotview.render().el);
    }
  }
});
