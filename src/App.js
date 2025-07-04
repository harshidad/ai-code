import logo from './logo.svg';
import './App.css';
import InputURL from './InputURL';
import React, {useState} from 'react';
import PagePreview from './PagePreview';
function App() {
    const [html, setHtml] = useState('');
  const handleLoadPage=(url)=>{
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
     .then(res => res.json())
     .then(res=> setHtml(res.contents))
  }
  // const handleLoadPage = async (url) => {
  //   const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
  //   const data = await res.json();
  //   setHtml(data.contents);
  // };

  return (
    <div className="App">
      <InputURL onSubmit={handleLoadPage}></InputURL>
      <PagePreview html={html}></PagePreview>
    </div>
  );
}

export default App;
