import React from 'react'
import postImage from '../../assets/images/blog.jpg'

function Post() {
  return (
    <div className='grid grid-cols-3 m-4 border-2 rounded-xl'>
      <img className='col-span-1' src={postImage} alt='post image' style={{ height: '150px', width: '150px'}} />
      <div className='col-span-2'>
          <h3>Blog Title</h3>
          <p>Summary/snippet of the blog post</p>
          <button>Read more</button>
      </div>
    </div>
  )
}

export default Post