// Good practise to enclose all your code in an closure
(function(){
  // Create store-products module
  var app = angular.module('store-products', []);

  // product info "Element" directive
  // replaces the element <product-info></product-info> with template specified
  app.directive("productInfo", function(){
    return {
      restrict: "E",  // element('E') or attribute ('A')
      templateUrl: "/static/templates/product-info.html"
    };
  });

  // product panels "Element" directive
  // replaces the element <product-panels></product-panels> with template specified
  // Add controller for the element thru config object
  app.directive("productPanels", function(){
    return {
      restrict: "E",
      templateUrl: "/static/templates/product-panels.html",
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