import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBjuHvgG4lzD3p3Ky7RZH4951IshC9ajAQ';

// Create a new component. This component should produce 
// some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTMl and put it 
// on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector(".container"));