import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const [post, setPost] = useState({});

    let { post_id } = useParams()

    useEffect(() => {
        getPostById(post_id)
    }, [])

    function getPostById(post_id) {
        axios.get(`http://localhost:8080/posts/${post_id}`)
            .then(response => {
                setPost(response.data)
                console.log(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <div>Post id is {post_id}</div>
            <h1>{post.title}</h1>
            <h2>{post.summary}</h2>
            <h2>{post.content}</h2>
        </>
    )
}

export default PostDetail
