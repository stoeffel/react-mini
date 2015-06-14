'use strict';
var React, ReactAddons, assert, mini, TestUtils;

describe('React-Mini', function() {
	before(() => {
    React = require('react');
    ReactAddons = require('react/addons');
    assert = require('assert');
    mini = require('../../');
    TestUtils = React.addons.TestUtils;
	});

  it('should render the props', function() {
		var Hello = mini((me, props) => (
			<h1>Hi {props.name}</h1>));

		var component = React.render( <Hello name='Stoeffel'/>, document.body);
		var val = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    assert.equal(val.getDOMNode().textContent, 'Hi Stoeffel');
	});

  it('should update the state', function() {
		var Counter = mini((me, props = { step : 3 } , state) => {
			var incCounter = () => me.setState({ count : state.count + props.step });

				return (
					<div>
					  Counter: <span>{state.count}</span>
						<button onClick={incCounter}>+1</button>
					</div>);
		}, { count: 10 })

		var component = React.render( <Counter step={10}/>, document.body);
		var countValue = TestUtils.findRenderedDOMComponentWithTag(component, 'span');
		var button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

    assert.equal(countValue.getDOMNode().textContent, '10');
		TestUtils.Simulate.click(button);
		assert.equal(countValue.getDOMNode().textContent, '20');
	});
});
