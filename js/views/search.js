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
    var username = this.$el.find('input').val();
    var shots = new DribbleApp.Collections.Shots({username: username});

    shots.fetch({success: this.rendershots.bind(this)});
  },

  rendershots: function(shots) {
    console.log('rendershots got '+shots);
    var shotview;

    var shotsCount = Math.min(5, shots.models.length);
    for (i = 0; i < shotsCount; i++) {
      shotview = new DribbleApp.Views.Shot({model: shots.models[i]});
      this.$el.find('#shot-list').append(shotview.render().el);
    }
    shots.reset();
  }
});
