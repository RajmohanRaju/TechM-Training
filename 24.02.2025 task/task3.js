import React from 'react';
import ReactDOM from 'react-dom/client';

class Course extends React.Component {
  render() {
    return <h2>{this.props.model} Information technology !!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Course  model="my stream is "/>);