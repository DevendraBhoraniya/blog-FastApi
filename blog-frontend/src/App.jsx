import { useState, useEffect } from 'react'
import './App.css'
import Post from './components/post'

const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + 'posts/get-all')
      .then(response => {
        const json = response.json()
        console.log(json);
        if (response.ok) {
          return json
        }
        throw response
      })
      .then(data => {
        return data.reverse()
      })
      .then(data => {
        setPosts(data)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  }, [])

  return (
    <>
      <div className="App">
        <div className='blog_title'>Blog-FastApi</div>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </div>
    </>
  )
}

export default App
