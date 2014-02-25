## Problem testing a route with a loading state

This repository (probably) recreates a problem I've run into testing a route that passes through the loading sub-route, before completing its transition.

I have taken ember app kit and modified `routes/index.js` so that the model hook returns a promise, that resolves after 100ms:

```javascript
export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {

      setTimeout(function(){
        resolve(['red', 'yellow', 'blue']);
      }, 100);
    });
  }
});
```
This causes the tests to hang on the index acceptance test. Why is this?

