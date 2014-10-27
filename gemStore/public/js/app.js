// Good practise to enclose all your code in an closure
(function(){
  // Create store module and specify the dependencies
  var app = angular.module('store', ['store-products']);

  // Store controller fetches products info
  // This controller is used in index.html to bind json to template expression..
  app.controller('storeController', [ '$http', function($http){
    var store = this;
    var products = [];
    $http.get('/static/json/products.json').success(function(data){
        store.products = data;
    });
  }]);

  // Review controller; handles add reviews
  app.controller('reviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
}());