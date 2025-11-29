import React from 'react'
import Post from './Post';

function Blog() {
  return (
    <section>
      <h2>My Blog</h2>
      <p>Please check out some of the articles I have published, give me feedback and suggestions</p>
      
      <Post />
      <p><a href="#">Other featured blogs</a></p>
    </section>
  )
}

export default Blog