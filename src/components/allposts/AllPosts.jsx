import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from '../post/Post'
import PostForm from '../PostForm'
import './AllPosts.css';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
  }, [])

  function getAllPosts() {
    axios.get('http://localhost:8080/posts')
      .then(response => {
        setPosts(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  let postList = posts.map(post =>
    <div key={post.post_id}>
      <Post post={post} />
    </div>)

  
  return (
      <Container className="All-Posts">
        <Row>
          {/*List All Posts */}
          <Col>{postList}</Col>
          {/* Form to insert new post  */}
          <Col></Col>
        </Row>
      </Container>

  )
}
export default AllPosts