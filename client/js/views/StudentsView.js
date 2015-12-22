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
    });

    debugger;
    return this.$el.html(children);
    // in the line above, you don't need to call html(children)
    // just return this.$el.html();
  }

});
