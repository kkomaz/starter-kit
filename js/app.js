var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.route('about');
  this.resource('products');
});
App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
App.AboutController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function(){
    return App.PRODUCTS;
  }
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is...',
    isOnSale: true,
    image: 'images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 49,
    description: 'Kindling is...',
    isOnSale: false,
    image: 'images/products/kindling.png'    
  }
];

