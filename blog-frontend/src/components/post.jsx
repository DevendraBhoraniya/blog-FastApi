import React, { useState, useEffect } from 'react'
import '../css/post.css'

const BASE_URL = 'http://localhost:8000/'

function Post({ post }) {

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(BASE_URL + post.image_url)
    console.log(imageUrl)
  }, [])

  const handleDelete = (event) => {
    event?.preventDefault()

    const requestOptions = {
      method: 'DELETE'
    }

    fetch(BASE_URL + 'posts/delete/' + post.id, requestOptions)
      .then(response => {
        if (response.ok) {
          window.location.reload()
        }
        throw response
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='post'>
      <img className='post_image' src={imageUrl} />
      <div className='post_content'>
        <div className='post_title'>{post.title}</div>
        <div className='post_creator'>by {post.creator}</div>
        <div className='post_text'>{post.content}</div>
        <div>
          <button className='post_delete' onClick={handleDelete}>
            Delete post
          </button>
        </div>
      </div>
    </div>
  )

}

export default Post