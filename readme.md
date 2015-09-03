# react-mini [![Build Status](https://travis-ci.org/stoeffel/react-mini.svg?branch=master)](https://travis-ci.org/stoeffel/react-mini)

> Create minimalistic react components

For inline components or if you are really lazy.

## Install

```
$ npm install --save react-mini
```


## Usage

```js
var React = require('react');
var mini = require('react-mini');


module.exports = mini( (me, props) => <h1>Title: {props.title}</h1> );
module.exports = mini( (me, { title }) => <h1>Title: {title}</h1> );
module.exports = mini( ({props: { title }}) => <h1>Title: {title}</h1> );
module.exports = mini( (me, { hidden = false, title }) => !hidden?<h1>Title: {title}</h1>:null );
module.exports = mini( (me, { greet = 'Hi', name }) => <h1>{greet} {name}</h1> );
```

### with props and state

```js

var Counter = mini( (me, { step = 1 } , { count }) => { 
	var incCounter = () => me.setState({ count : count + step });

  return <span>Counter: {count}<button onClick={incCounter}>+1</button></span> 
}, { count: 10 }); // <= initialState

React.render(
  <Counter step={10}/>,
  document.body
)
```

## API

`mini(render:Function(context, props, state, children), [initialState:Object])`

* `render` : This is the actual render function.
  * `context:Object` : The context of the component (`this`)
  * `props:Object` : The props of the component
  * `state:Object` : The current state of the component
  * `children:Object` : The components children
* `initialState` : The initial state of the component.



## License

MIT © [Christoph Hermann](http://stoeffel.github.io)
