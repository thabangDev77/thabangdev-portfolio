import React from 'react'
import postImage from '../../assets/images/blog.jpg'

function Post() {
  return (
    <div className='grid grid-cols-4 m-4 border-2 rounded-xl p-2'>
      <img className='col-span-1' src={postImage} alt='post image' style={{ height: '150px', width: '150px', border: '1px solid black', borderRadius: '10px'}} />
      <div className='col-span-3'>
          <h3 className='text-xl font-bold'>Blog Title</h3>
          <p className='text-sm italic'>Summary/snippet of the blog post</p>
          <button className='font-bold border-2 mt-15 ml-96 rounded-3xl p-2'>Read more</button>
      </div>
    </div>
  )
}

export default Post