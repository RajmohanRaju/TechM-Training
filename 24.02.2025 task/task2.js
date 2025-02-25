
import React from 'react';
import ReactDOM from 'react-dom/client';

function Flower(prop) {
  return <h2>{prop . model} is red in colour </h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Flower  model="rose"/>);