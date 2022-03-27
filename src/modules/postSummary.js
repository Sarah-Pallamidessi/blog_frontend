import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";




const PostSummary = (props) => {
const {title, body, id} = props.post
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/blog/${id}`}>Read Post</Link>
        </div>
        )
  };
  
  export default PostSummary;