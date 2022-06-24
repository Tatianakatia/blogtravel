import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import './Post.css';

const Post = (props) => {
  return (
    <>
{/* 
{require(`../assets/${props.post.post_img}.jpg`)} */}
    <Card className="posts">
    <Card.Title >{props.post.title}</Card.Title>
      <Card.Body> 
      
      <Card.Img 
        variant="top" 
        src={require(`../../assets/image1.jpg`)} 
        className="image"
        /> 
        
          {/* <Card.Text className="Post-Summary">
           {props.post.summary} 
          </Card.Text> */}
          <Button 
            variant="primary" 
            as={NavLink} 
            to={'/post/'+props.post.post_id}>
              Reading more
          </Button>
       </Card.Body>
    </Card>
    {/* <h1>{props.post.title}</h1>  */}
     {/* <h4>{props.post.summary}</h4> */}
    </>
  )
}

export default Post