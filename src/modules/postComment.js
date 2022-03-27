import React from 'react';
import {useState} from "react";

const PostComment = (props) => {
    const [postData, setPostData] = useState('')
    
    const send = async ()=>{
        console.log('something')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                body: postData,
                author: "Who?"
    })
        };
        await fetch(`localhost:3000/api/comment/${props.id}`,requestOptions)
    }
    
    return (
        <div>
            <input type="text" onChange={e => setPostData(e.target.value)}></input>
            <button onClick={send} >send</button>
        </div>
        )
  };
  
  export default PostComment;