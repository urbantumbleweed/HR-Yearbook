var StudentsView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.handleSync);
    this.render();
  },

  handleSync: function(){
    console.log('this is the sync event');
    this.render();
  },

  render: function() {
    var children = this.collection.map(function(student){
      return new StudentEntryView({ model: student });
      // new StudentEntryView doesn't return anything. You need to update the studentEntryView
    });

    debugger;
    return this.$el.html(children);
  }

});
