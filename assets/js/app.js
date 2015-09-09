(function ($, Backbone, Router) {

    $(".button-collapse").sideNav();
    FastClick.attach(document.body);

    var router = new Router();
    Backbone.history.start();

}(jQuery, Backbone, Router));

