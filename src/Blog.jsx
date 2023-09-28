import React from "react";

function Blog({title, content, img, author}) {
  return(
    <div className='blog__wrapper'>
      <h3>{title}</h3>
      {/* <img src=''/> */}
      <p>{content}</p>
      <small>{author}</small>
    </div>
  )
}

export default Blog;
