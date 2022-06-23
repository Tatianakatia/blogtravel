import logo from './assets/logoversion1.jpg';
import './App.css';
import Welcome from './components/Welcome';
import AllPosts from './components/allposts/AllPosts';
import Post from './components/Post';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PostDetail from './components/PostDetail';

function App() {
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
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Posts</Nav.Link>
              <Nav.Link as={NavLink} to="/Welcome">Welcome</Nav.Link> 
              <Nav.Link as={NavLink} to="/PostDetail">Write</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Post/:post_id" element={<PostDetail />} />
        <Route path="/" exact element={<AllPosts />} />
      </Routes>
    </BrowserRouter>
    </>
)}
export default App;



