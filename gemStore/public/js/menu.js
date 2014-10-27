// Good practise to enclose all your code in an closure
(function(){
  // Create store-menu module
  var app = angular.module('store-menu', []);

  // product info "Element" directive
  // replaces the element <menu-bar></menu-bar> with template specified
  app.directive("menuBar", function(){
    return {
      restrict: "E",
      templateUrl: "/static/templates/menu-bar.html",
      controller: function(){
          this.tab = 1;
          this.selectTab = function(tabVal){
              this.tab = tabVal;
          };
          this.isActive = function(tabVal){
              return this.tab === tabVal;
          };
      },
      controllerAs: 'menuTab'
    };
  }); 
}());