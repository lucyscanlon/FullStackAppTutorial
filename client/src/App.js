import './App.css';
import axios from "axios";
import {useEffect, useState } from 'react';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Posts").then((response) => {
      setListOfPosts(response.data)
    })
  }, [])

  return (
    <div className="App">
      <div className="apptitle">
        <h1>Blog Post App</h1>
      </div>
      <div className="wholeListOfPosts">
      {listOfPosts.map((value, key) => { 
        return (
            <div className="post">
              <div className="title"><h2>{value.title}</h2></div>
              <div className="body">{value.postText}</div>
              <div className="footer">Posted by user: {value.username}</div>
            </div>)
      })}
      </div>
    </div>
  );
}

export default App;
