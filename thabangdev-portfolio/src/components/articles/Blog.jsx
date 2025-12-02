import React from 'react'
import Post from './Post';

function Blog() {
  return (
    <section id='blog' className='flex flex-col justify-center items-center my-20'>
      <h2 className='text-4xl font-bold mb-4'>My Blog</h2>
      <p>Please check out some of the articles I have published, give me feedback and suggestions</p>
      <Post />
      <Post />
      <Post />
      <p className='font-bold italic border-x border-b p-2 rounded-2xl'>Other featured blogs</p>
    </section>
  )
}

export default Blog