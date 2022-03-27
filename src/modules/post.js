import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import PostComment from "./postComment"

const Post = (props) => {
    const { id } = useParams()
    console.log(id)
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);

    const fetchData = async (id) => {

        const response = await fetch(`http://localhost:3000/api/blog/${id}`);
        const posts = await response.json();
        
        setPost(posts);
        const response2 = await fetch(`http://localhost:3000/api/comment/${id}`);
        const comments = await response2.json();
        setComment(comments.comments);
        console.log(comments)
    }

    useEffect(async () => {
        await fetchData(id);
    }, [id]);

        
    const {title, body} = post

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/blog/${id}`}>Read Post</Link>
            {
            
            comment.map((com)=>{
                console.log(com)
                return <p>{com.body}</p>
            })}
            <PostComment id={id}></PostComment>
        </div>
        )
    };
  
  export default Post;