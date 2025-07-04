import React, {useState} from 'react';
import './App.css';

import InputURL from './URLLoad/InputURL';
import PagePreview from './URLLoad/PagePreview';

function App() {
  const [html, setHtml] = useState('');
  
  const handleLoadURL=(url)=>{
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
     .then(res => res.json())
     .then(res=> setHtml(res.contents))
  }

  return (
    <div className="App">
      <InputURL onSubmit={handleLoadURL}></InputURL>
      <PagePreview html={html}></PagePreview>
    </div>
  );
}

export default App;
