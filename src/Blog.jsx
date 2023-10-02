import React from "react";

function Blog({title, content, img, author}) {
  return(
    <div className='w-3/4 max-w-md font-body flex flex-col justify-center gap-3 bg-white p-5 rounded-md'>
      <h3 className='font-title text-xl'>{title}</h3>
      <img src={img} className='max-h-96 object-cover'/>
      <p>{content}</p>
      <p className='text-xs'>{author}</p>
    </div>
  )
}

export default Blog;
