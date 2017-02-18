var DribbleApp = {
  Views: {},
  Models: {},
  Collections: {},
  Router: {}
}

$(document).ready(function() {
  DribbleApp.Router.Instance = new DribbleApp.Router();
  Backbone.history.start();
});
