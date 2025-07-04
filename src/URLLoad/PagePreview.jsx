import React from "react";

const PagePreview =({html})=>{
    return(
        <>
         <div
             className="page-content"
             dangerouslySetInnerHTML={{ __html: html }}/>
        
        </>
    );
}
export default PagePreview;