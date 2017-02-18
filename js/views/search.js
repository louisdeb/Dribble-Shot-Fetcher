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

  /** Create a new collection and fetch shots for given username. */
  getspots: function() {
    var username = this.$el.find('input').val();
    var shots = new DribbleApp.Collections.Shots({username: username});

    shots.fetch({success: this.rendershots.bind(this)});
  },

  /** Print <= 5 shots returned by the Dribbble API. */
  rendershots: function(shots) {
    var shotview;
    var shotList = this.$el.find('#shot-list');
    var shotCount = Math.min(5, shots.models.length);

    shotList.html(''); // Clear previous list elements.
    for (i = 0; i < shotCount; i++) {
      shotview = new DribbleApp.Views.Shot({model: shots.models[i]});
      shotList.append(shotview.render().el); // Render shots in list.
    }

    if (shotCount == 0) // Display 'No shots' if none were returned.
      shotList.html('No shots');

    shots.reset(); // Reset our collection so we can re-use it next time.
  }
});
