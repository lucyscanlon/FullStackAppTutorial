import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/Posts/byID/${id}`).then((response) => {
          setPostObject(response.data);
        })
      })
  return (
    <div>
        <div className='singlepost-container'>
            <div className='singlepost-title-container'>
                <h2>{postObject.title}</h2>
            </div>
            <div className='singlepost-post-container'>
                <p>{postObject.postText}</p>
            </div>
            <div className='singlepost-username-container'>
                <p>{postObject.username}</p>
            </div>
        </div>
    </div>
  )
}

export default Post
