import React, { useState, useEffect } from 'react'
import '../css/post.css'

const BASE_URL = 'http://localhost:8000/'

function Post({post}) {

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(BASE_URL + post.image_url)
    console.log(imageUrl)
  }, [])


  return (
    <div className='post'>
      <img className='post_image' src={imageUrl}/>
      <div className='post_content'>
        <div className='post_title'>{post.title}</div>
        <div className='post_creator'>by {post.creator}</div>
        <div className='post_text'>{post.content}</div>
        <div className='post_delete'>
          <button>Delete post</button>
        </div>
      </div>
    </div>
  )

}

export default Post