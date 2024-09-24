import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <Router>
      <div className="navigation-bar">
        <ul>
          <Link to="/createPost">
            <li className="createpost-link">Create a Post</li>
          </Link>
          <Link to="/">
            <li className="createpost-link">Homepage</li>
          </Link>
        </ul>
        
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
