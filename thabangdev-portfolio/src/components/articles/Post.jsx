import React from 'react'
import postImage from '../../assets/images/blog.jpg'

function Post() {
  return (
    <div>
      <img src={postImage} alt='post image' style={{ height: '150px', width: '150px'}} />
      <div>
          <h3>Blog Title</h3>
          <p>Summary/snippet of the blog post</p>
          <button>Read more</button>
      </div>
    </div>
  )
}

export default Post