import React from "react";

function Blog({title, content, img, author, date}) {

  const formatDate = (inputDate) => {
    const date = new Date(inputDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
  
    return `${day}.${month}.${year}`
  }

  return(
    <div className='w-3/4 max-w-md font-body flex flex-col justify-center gap-3 bg-white p-5 rounded-md'>
      <h3 className='font-title text-xl'>{title}</h3>
      <img src={img} className='max-h-96 object-cover'/>
      <p>{content}</p>
      <p className='text-xs'>{author}</p>
      <p className='text-xs'>{formatDate(date)}</p>
    </div>
  )
}

export default Blog;
