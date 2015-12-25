var Cohort = Students.extend({

  initialize: function(params){
    this.url = this.url + 'cohort/' + params.cohort;
    this.on('highlight', this.handleHighlight, this);
    return this.populate();
  },

  populate: function(){
    return this.fetch()
      .then(function(data){
        // return cb(this, data);
        return  new StudentsView({collection: this}).render();
      }.bind(this))
      .catch(console.log.bind(this, 'There was an error fetching'))
      // .then(function() {
      // }.bind(this));
  },
  handleHighlight: function(student){
    console.log('got the event in the collection');
  }
});
