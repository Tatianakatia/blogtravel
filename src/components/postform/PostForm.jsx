import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
    const [postTitle, setPostTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [content, setContent]= useState('');
    const [postImg, setPostImg] = useState('');

    const addPost = (e) =>{
        e.preventDefault();
        let post = {

            "title" : postTitle,
            "content": content,
            "user_id" : userId,
            "post_img": postImg
        }
        console.log(post);
        // setPostTitle(''),
        // setSummary(''),
        // setPostImg(''),
        // setUserId(''),
      
        props.submitForm(post);
    }

  return (
    <Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formTitle">
      <Form.Label>Post Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" value={postTitle}
       onChange ={event=>setPostTitle(event.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formContent">
      <Form.Label>Content</Form.Label>
      <Form.Control type="text" placeholder="Enter text" value={content}
      onChange ={event=>setContent(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formImg">
      <Form.Label>Image Number</Form.Label>
      <Form.Control type="text" placeholder="Enter image number" value={postImg}
      onChange ={event=>setPostImg(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formUser">
      <Form.Label>user Number</Form.Label>
      <Form.Control type="text" placeholder="Enter user number" value={userId}
      onChange ={event=>setUserId(event.target.value)}/>
    </Form.Group>
    <Button 
        variant="primary" 
        type="submit"
        >
      Submit
    </Button>
  </Form>
  )
}

export default PostForm 