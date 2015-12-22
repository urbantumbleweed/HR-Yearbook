var Cohort = Students.extend({

  initialize: function(params){
    this.url = this.url + 'cohort/' + params.cohort;
    this.populateCohort();
  },

  populateCohort: function(){
    this.fetch().then(function(data){
      console.log('Cohort fetched this data: ', data);
    });
  }
});
