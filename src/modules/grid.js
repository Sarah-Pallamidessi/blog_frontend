import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import PostSummary from './postSummary.js';


const Grid = () => {
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        
        const response = await fetch('http://localhost:3000/api/blog');
        const posts = await response.json();
        
        let activeCol = 0;
        let columns = [[],[],[]];

        posts.posts.forEach((post) => {

            activeCol++;
            columns[activeCol%3].push(post)
        })
        
        setData(columns);
    }

    useEffect(async () => {
        await fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {data.map((column)=>{
                    console.log(column)
                    
                    return (
                    
                    <Col>{column.map((post)=>{
                        console.log(post)
                        return (<Row>
                            <PostSummary post={post.outputPost} ></PostSummary>
                        </Row>)
                    })}</Col>
                    
                    )
                })}
            </Row>
        </Container>
        )
  };
  
  export default Grid;