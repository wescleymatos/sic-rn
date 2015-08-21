var InfoView = Backbone.View.extend({
    el: $('#container'),
    template: _.template($('#template-info').html(), {}),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    }
});
