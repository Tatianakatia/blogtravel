import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import './Post.css';

const Post = (props) => {
  return (
    <>
{/* {require(`../assets/${props.post.post_img}.jpg`)} */}
    <Card className="post" style={{ width: '18rem' }}>
      <Card.Title >{props.post.title}</Card.Title>
      <Card.Img style={{ borderRadius: '50rem' }} variant="top" src={require(`../../assets/2.jpg`)} />
      <Button  variant="primary" as={NavLink} to={'/post/'+props.post.post_id}>Reading more</Button>
      <Card.Body> 
        
        {/* <Card.Text className="Post-Content">{props.post.summary}</Card.Text> */}
        
      </Card.Body>
    </Card>

    </>
  )
}

export default Post

{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../assets/1.jpg`)} />
      <Card.Body>  
        <Card.Title>{props.dept.dep_name}</Card.Title>
          <Card.Text>
          This is team {props.dept.team_id}.
          </Card.Text>
          <Button variant="primary" as={NavLink} to={'/department/'+props.dept.dep_id}>Go somewhere</Button>
       </Card.Body>
    </Card> */}
