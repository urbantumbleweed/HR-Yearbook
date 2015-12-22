// The root model of the application
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // this.on('students:sync', function())
    this.get('infoPane', new Student());
  }
});
