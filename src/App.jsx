import { useState, useEffect } from 'react'
import './App.css'
import { client } from './client'
import Blog from './blog';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries()
      const entries = response.items.map(item => item.fields)
      setBlogs(entries)
    }
    fetchData()
  }, [])

  console.log(blogs)
  
  return (
    <>
      <h1>Blog posts</h1>

      {blogs.map(blog => (
        <Blog 
          title={blog.title} 
          content={blog.content} 
          img={blog.image.fields.file.url}
          author={blog.author}
        />
      ))}
    </>
  )
}

export default App
