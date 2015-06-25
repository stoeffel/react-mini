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
		var Hello = mini((me, {greeting = 'Hi', name}) => (
			<h1>{greeting} {name}</h1>));

		var component = React.render( <Hello name='Stoeffel'/>, document.body);
		var val = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    assert.equal(val.getDOMNode().textContent, 'Hi Stoeffel');

		var component2 = React.render( <Hello greeting='Hello' name='Stoeffel'/>, document.body);
		var val = TestUtils.findRenderedDOMComponentWithTag(component2, 'h1');
    assert.equal(val.getDOMNode().textContent, 'Hello Stoeffel');
	});

  it('should update the state', function() {
		var Counter = mini((me, { step = 3 } , {count}) => {
			var incCounter = () => me.setState({ count : count + step });

				return (
					<div>
					  Counter: <span>{count}</span>
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
