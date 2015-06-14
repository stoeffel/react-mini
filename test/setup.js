var jsdom = require('jsdom');

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
var dom = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = dom;
global.window = dom.defaultView;
global.navigator = window.navigator;
