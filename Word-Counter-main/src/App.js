import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return 0;
    }
    return trimmedText.split(/\s+/).length;
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Responsive Paragraph Word Counter</h1>
      <textarea
        className='form-control my-3 d-flex justify-content-center align-items-center border border-dark'
        rows={10}
        cols={50}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default App;

