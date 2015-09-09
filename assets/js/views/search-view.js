var SearchView = Backbone.View.extend({
	
	el: $('#container'),
	
	template: _.template($('#template-search').html(), {user: 'wescley'}),
	
	events: {
		'click #search-protocol' : 'teste'
	},
	
	initialize: function () {
		this.render();
	},
	
	render: function () {
		this.$el.html(_.template($('#template-search').html(), {user: 'wescley'}));
	},

	teste: function (e) {
		alert($('#protocol').val());
	}

});
