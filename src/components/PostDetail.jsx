import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PostDetails.css'

const PostDetail = () => {
    const [post, setPost] = useState({});

    let { post_id } = useParams()

    useEffect(() => {
        getPostById(post_id)
    }, [])

    function getPostById(post_id) {
        axios.get(`http://localhost:8080/post/${post_id}`)
            .then(response => {
                setPost(response.data)
                console.log(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetail
