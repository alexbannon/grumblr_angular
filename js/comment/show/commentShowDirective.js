(function(){
  angular
    .module('grumblr')
    .directive('commentShow', [
      "Comments",
      commentShow
    ]);

  function commentShow(Comment){
    return {
      templateUrl: "js/comment/show/commentShowView.html",
      replace: true,
      link: function(scope, element, attributes){
        scope.comment = Comment.for(scope.grumble, scope.comment);
      }
    }
  }
})();