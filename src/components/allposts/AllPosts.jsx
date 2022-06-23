import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from '../Post'
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


  const addPost = (post) => {
    axios.post("http://localhost:8080/post", post)
      .then(response => {
        getAllPosts();
        console.log(addPost)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
      <Container className="All-Posts">
        <Row>
          {/*List All Posts */}
          <Col>{postList}</Col>
          {/* Form to insert new post  */}
          <Col><PostForm submitForm={addPost} /></Col>
        </Row>
      </Container>

  )
}
export default AllPosts