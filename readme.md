# react-mini [![Build Status](https://travis-ci.org/stoeffel/react-mini.svg?branch=master)](https://travis-ci.org/stoeffel/react-mini)

> Create minimalistic react components

Allows you to create **thisless** react components. With react `>= 0.14` [stateless function components](http://facebook.github.io/react/blog/#stateless-function-components) are supported by react itself. But with `react-mini` you can create **statefull function components**.

## Install

```
$ npm install --save react-mini
```


## Usage

```js
var React = require('react');
var mini = require('react-mini');


module.exports = mini( props => <h1>Title: {props.title}</h1> );
module.exports = mini( ({ title }) => <h1>Title: {title}</h1> );
module.exports = mini( ({ hidden = false, title }) => !hidden?<h1>Title: {title}</h1>:null );
module.exports = mini( ({ greet = 'Hi', name }) => <h1>{greet} {name}</h1> );
```

### Pure components

Create pure components using [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html)

```js
var React = require('react');
var pure = require('react-mini/pure');

module.exports = pure( ({ title }) => <h1>Title: {title}</h1> );
```

### with props and state *thisless*

```js
var Counter = mini( ({ step = 1 } , { setState, state: { count } }) => { 
	var incCounter = () => setState({ count : count + step });

  return <span>Counter: {count}<button onClick={incCounter}>+1</button></span> 
}, { count: 10 }); // <= initialState

React.render(
  <Counter step={10}/>,
  document.body
)
```

## API

`mini(render:Function(props, component), [initialState:Object])`

* `render` : This is the actual render function.
  * `props:Object` : The props of the component
  * `component:Object` : The component (`this`)
* `initialState` : The initial state of the component.

## Related

* [react-mini-this][rmt] - `function HelloWorld({name}) { return <h1> Hello {name} </h1>; }::pure();`

## License

MIT © [Christoph Hermann](http://stoeffel.github.io)

[rmt]: https://github.com/stoeffel/react-mini-this
