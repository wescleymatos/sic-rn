var Router = Backbone.Router.extend({
    routes: {
        '': 'search',
        'search': 'search',
        'people': 'kindPeople',
        'info': 'info'
    },
    search: function() {
        new SearchView();
    },
    kindPeople: function() {
        new KindPeopleView();
    },
    info: function() {
        new InfoView();
        $('.button-collapse').click();
    }
});
