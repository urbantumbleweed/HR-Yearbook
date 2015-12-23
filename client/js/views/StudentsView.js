var StudentsView = Backbone.View.extend({

  el: '#page-content-container',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.handleSync);
  },

  handleSync: function(){
    console.log('StudentsView sync triggered with ', this.collection);
    this.render();
  },

  render: function() {
    console.log('In the render function');
    var children = this.collection.map(function(student){
      return new StudentEntryView({ model: student });
    });

    this.$el.append(children);
    debugger;
    return this.$el.html();
  }

});
