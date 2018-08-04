import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBjuHvgG4lzD3p3Ky7RZH4951IshC9ajAQ';

// Create a new component. This component should produce 
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTMl and put it 
// on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector(".container"));