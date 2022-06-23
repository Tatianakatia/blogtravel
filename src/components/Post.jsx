import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Post = (props) => {
  return (
    <>
    <Card >
      <Card.Img variant="top" src="" />
      <Card.Body>  
        <Card.Title className="Post-Title">{props.post.title}</Card.Title>
          <Card.Text className="Post-Summary">
          {props.post.summary}
          </Card.Text>
          <Button variant="primary" onClick={props.post.summary}>Reading more</Button>
       </Card.Body>
    </Card>
    <h1>{props.post.title}</h1>s
    <h4>{props.post.summary}</h4>
    </>
  )
}

export default Post