var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about', {path: '/aboutus'});
});

// App.ApplicationController = Ember.Controller.extender({

// });

// App.ApplicationView = Ember.view.extend({
//   templateName : 'application',
//   name: 'outlet'
// });