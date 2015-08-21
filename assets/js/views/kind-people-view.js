var KindPeopleView = Backbone.View.extend({
    el: $('#container'),
    template: _.template($('#template-kind-people').html(), {}),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    }
});
