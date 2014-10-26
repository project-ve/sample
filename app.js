(function(){
  var app = angular.module('store', ['store-products']);
  
  app.controller('storeController', [ '$http', function($http){
    var store = this;
    var products = [];
    $http.get('./src/json/products.json').success(function(data){
        store.products = data;
    });
  }]);

  app.controller('reviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
}());