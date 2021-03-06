'use strict';
var React = require('react');
var PureRender= require('react-purerender');

module.exports = PureRender(function mini(comp, initialState) {
	return React.createClass({
		getInitialState: function() {
			return initialState || null;
		},
		render: function() {
			this.setState = this.setState.bind(this);
			return comp(this.props, this);
		}
	});
});
