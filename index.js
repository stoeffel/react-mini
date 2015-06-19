'use strict';
var React = require('react');

module.exports = function mini(comp, initialState) {
	return React.createClass({
		getInitialState: function() {
			return initialState || null;
		},
		render: function() {
			return comp(this, this.props, this.state, this.props.children);
		}
	});
};
