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

var Router = Backbone.Router.extend({
	routes: {
		'': 'search',
		'search': 'search',
		'people': 'kindPeople'
	},
	search: function() {
		new SearchView();
	},
	kindPeople: function() {
		new KindPeopleView();
	}
});

var router = new Router();
Backbone.history.start();