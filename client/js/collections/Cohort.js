var Cohort = Students.extend({

  initialize: function(params){
    this.url = this.url + 'cohort/' + params.cohort;
    this.on('highlight', this.handleHighlight, this);
    return this.populateCohort();
  },

  populateCohort: function(){
    return this.fetch()
      .then(function() {
        return  new StudentsView({collection: this}).render();
      }.bind(this));
  },
  handleHighlight: function(student){
    console.log('got the event in the collection');
  }
});
