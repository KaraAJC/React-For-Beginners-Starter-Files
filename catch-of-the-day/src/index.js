// this is an ES6 module!
import React from 'react'; // uses package.json to pull in 'react' from dependencies to 'React'  variable

// this is where the render method comes from
import { render } from 'react-dom';
// you always import your components to the main.js file like:

// import ComponentName from './components/ComponentName'
import StorePicker from './components/StorePicker'








render(<StorePicker/>, document.querySelector('#main') )
// render(TagName, element selector)

