var SearchView = Backbone.View.extend({
	el: $('#container'),
	template: _.template($('#template-search').html(), {}),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template);
	}
});
