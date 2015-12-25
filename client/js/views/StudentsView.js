var StudentsView = Backbone.View.extend({

  el: '#page-content-container',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.handleSync);
  },

  handleSync: function(){
    this.render();
  },

  render: function() {
    var children = this.collection.map(function(student){
      return new StudentEntryView({ model: student }).render();
    });
    return this.$el.html('').append(children);
  }

});
