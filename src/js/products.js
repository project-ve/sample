(function(){
  var app = angular.module('store-products', []);
  app.directive("productInfo", function(){
    return {
      restrict: "E",
      templateUrl: "./src/templates/product-info.html"
    };
  });
  
  app.directive("productPanels", function(){
    return {
      restrict: "E",
      templateUrl: "./src/templates/product-panels.html",
      controller: function(){
          this.tab = 1;
          this.selectTab = function(tabVal){
              this.tab = tabVal;
          };
          this.isActive = function(tabVal){
              return this.tab === tabVal;
          };
      },
      controllerAs: 'panel'
    };
  });
  
}());