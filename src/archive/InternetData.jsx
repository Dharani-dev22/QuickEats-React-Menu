import { useState, useEffect } from "react";

const InternetData=()=>{
    const[postTitle, setPostTitle]=useState("Loading from internet...");



useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{

        return response.json();
    })
    .then((data)=>{
        setPostTitle(data.title);
    });

},[]);

return(
    <div style={{padding:'20px',border:'2px dashed blue'}}>
        <h3>Live Database Title:</h3>
        <p>{postTitle}</p>
    </div>
    );
};

export default InternetData;