import React, {useState} from "react";

const InputURL =({onSubmit})=>{
    const [url, setUrl] = useState('');
    // value for URL: https://example.com
    return(
        <>
           <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)}></input>
           <button onClick={()=> onSubmit(url)}>Page Load</button>
        </>
    );
}
export default InputURL;