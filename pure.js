'use strict';
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

module.exports = function mini(comp, initialState) {
	return React.createClass({
		mixins: [PureRenderMixin],

		getInitialState: function() {
			return initialState || null;
		},
		render: function() {
			this.setState = this.setState.bind(this);
			return comp(this.props, this);
		}
	});
};
