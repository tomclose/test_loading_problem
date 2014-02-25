export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {

      setTimeout(function(){
        resolve(['red', 'yellow', 'blue']);
      }, 100);
    });
  }
});
