jest.dontMock('../');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { equal } from 'assert';

const mini = require('../');

describe('React-Mini', () => {
  it('should render the props', () => {
		const Hello = mini(({greeting = 'Hi', name}) => (
			<h1>{greeting} {name}</h1>));

		const component = TestUtils.renderIntoDocument( <Hello name='Stoeffel'/>);
		const val = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    equal(val.textContent, 'Hi Stoeffel');

		const component2 = TestUtils.renderIntoDocument( <Hello greeting='Hello' name='Stoeffel'/>);
		const val2 = TestUtils.findRenderedDOMComponentWithTag(component2, 'h1');
    equal(val2.textContent, 'Hello Stoeffel');
	});

  it('should update the state', () => {
		const Counter = mini(({ step = 3 }, { setState, state: {count} }) => {
			const incCounter = () => setState({ count : count + step });

				return (
					<div>
					  Counter: <span>{count}</span>
						<button onClick={incCounter}>+1</button>
					</div>);
		}, { count: 10 })

		const component = TestUtils.renderIntoDocument( <Counter step={10}/>);
		const countValue = TestUtils.findRenderedDOMComponentWithTag(component, 'span');
		const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

    equal(countValue.textContent, '10');
		TestUtils.Simulate.click(button);
		equal(countValue.textContent, '20');
	});
});
