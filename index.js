'use strict';
var React = require('react');

module.exports = function mini(comp, initialState=null) {
	return React.createClass({
		getInitialState: function() {
			return initialState;
		},
		render: function() {
			return comp(this, this.props, this.state, this.props.children);
		}
	});
};
