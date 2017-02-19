DribbleApp.Views.Search = Backbone.View.extend({

  events: {
    'click button': 'getshots'
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
  getshots: function() {
    var username = this.$el.find('input').val();
    if(!this.shots)
      this.shots = new DribbleApp.Collections.Shots({username: username});
    this.shots.fetch({success: this.getallshots.bind(this), add: true});
  },

  getallshots: function(shots) {
    if (shots.models.length / shots.page >= 100) {
      shots.page += 1;
      this.getshots();
      return;
    }

    shots.page = 1;
    shots.sort(); // Sort the shots into descending order by likes count.
    this.rendershots(shots);
  },

  /** Print <= 5 shots returned by the Dribbble API. */
  rendershots: function(shots) {
    var shotview;
    var shotList = this.$el.find('#shot-list');
    var shotCount = Math.min(5, shots.length);

    shotList.html(''); // Clear previous list elements.
    for (i = 0; i < shotCount; i++) {
      shotview = new DribbleApp.Views.Shot({model: shots.models[i]});
      shotList.append(shotview.render().el); // Render shots in list.
    }

    if (shotCount)
      shotList.append("<div id='user-tag'><h1>username: "+shots.username+"</h1></div>");

    if (shotCount == 0) // Display 'No shots' if none were returned.
      shotList.html('No shots');

    shots.reset(); // Reset our collection so we can re-use it next time.
  }
});
