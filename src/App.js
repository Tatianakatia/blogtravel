import logo from './assets/logoversion1.jpg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import AllPosts from './components/allposts/AllPosts';
import Post from './components/post/Post';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PostDetail from './components/PostDetail';
import axios from 'axios';
import PostForm from './components/PostForm';

function App() {
  const addPost = (post) => {
    axios.post("http://localhost:8080/post", post)
      .then(response => {
        console.log(addPost)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Travel Blog</h1>
      </header>
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="post-menu">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/Welcome">About us</Nav.Link> 
              <Nav.Link as={NavLink} to="/write">Write</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes >
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Post/:post_id" element={<PostDetail />} />
        <Route path ="/write" element={<PostForm submitForm={addPost} />}/>
        <Route path="/" exact element={<AllPosts />} />
      </Routes>
    </BrowserRouter>
    </>
)}
export default App;



