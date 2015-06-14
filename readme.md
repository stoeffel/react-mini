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
```

### with props and state

```js

var Counter = mini( (me, props = { step = 1 } , state) => { 
	var incCounter = () => me.setState({ count : me.state.count + props.step });

  return <span>Counter: {state.count}<button onClick={incCounter}>+1</button></span> 
}, { count: 10 });

React.render(
  <Counter step={10}/>,
  document.body
)
```



## License

MIT © [Christoph Hermann](http://schtoeffel.ch)
