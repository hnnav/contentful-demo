import { useState, useEffect } from 'react'
import './App.css'
import { client } from './client'
import Blog from './blog';

function App() {
  const [blogs, setBlogs] = useState([])
  const [language, setLanguage] = useState('en-US')

  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries({locale: language})
      const entries = response.items.map(item => item.fields)
      setBlogs(entries)
    }
    fetchData()
  }, [language])

  const handleSwitchlanguage = () => {
    language === 'en-US' ? setLanguage('fi-FI') : setLanguage('en-US')
  }

  return (
    <>
      <h1>Blog posts</h1>
      <button onClick={handleSwitchlanguage}>Switch language</button>

      {blogs.map((blog, index) => (
        <Blog 
          key={index}
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
