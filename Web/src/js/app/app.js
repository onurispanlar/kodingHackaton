var app = angular.module('app', ['ngRoute', 'ui.router', 'article', 'book', 'author']);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app', {
      url: "/",
      controller: 'appController',
      templateUrl: 'templates/app/app.html'
    })
    .state('login', {
      url: "/login",
      controller: 'loginController',
      templateUrl: 'templates/login/login.html'
    })
    .state('signup', {
      url: "/signup",
      controller: "signupController",
      templateUrl: "templates/signup/signup.html"
    })
    .state('articlePreview', {
      url: "/article/:id",
      controller: "articleController",
      templateUrl: "templates/article/articlePreview.html"
    })
    .state('bookPreview', {
      url: "/book/:id",
      controller: "bookController",
      templateUrl: "templates/book/bookPreview.html"
    })
    .state('authorPreview', {
      url: "/author/:id",
      controller: "authorController",
      templateUrl: "templates/author/authorPreview.html"
    })
    .state('app.articleList', {
      url: "articleList",
      controller: "articleListController",
      templateUrl: "templates/article/articleList.html"
    })
    .state('app.bookList', {
      url: "bookList",
      controller: "bookListController",
      templateUrl: "templates/book/bookList.html"
    })
    .state('app.authorList', {
      url: "authorList",
      controller: "authorListController",
      templateUrl: "templates/author/authorList.html"
    })
    .state('authorPreview.articleList', {
      url: "/articleList",
      controller: "articleListController",
      templateUrl: "templates/article/articleList.html"
    })
    .state('authorPreview.bookList', {
      url: "/bookList",
      controller: "bookListController",
      templateUrl: "templates/book/bookList.html"
    });
}]).run(["$state",
  function($state) {
    $state.go('app.articleList');
  }
]);
