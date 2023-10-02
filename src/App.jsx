import { useState, useEffect } from 'react'
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
    <div className='flex flex-col gap-7 justify-center items-center p-5 bg-gray-100'>
      <h1 className='font-title text-4xl'>Blog posts</h1>
      <button 
        onClick={handleSwitchlanguage}
        className='py-2 px-4 bg-transparent font-semibold border border--600 rounded hover:bg-slate-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
      >
        Switch language
      </button>

      {blogs.map((blog, index) => (
        <Blog 
          key={index}
          title={blog.title}
          content={blog.content}
          img={blog.image.fields.file.url}
          author={blog.author}
          date={blog.image.sys.createdAt}
        />
      ))}
    </div>
  )
}

export default App
