import React from 'react'
import Post from './Post';
import blogData from '../../data/blogsData';

function Blog() {

    const dataElements = blogData.map((post) => <Post 
            key={post.id}
            img={post.image} 
            title={post.title}
            date={post.date} 
            description={post.description}
            link={post.link}
            />
        )

    return (
        <section id='blog' className='flex flex-col justify-center items-center my-20'>
        <h2 className='text-4xl font-bold mb-4'>My Blog</h2>
        <p>Please check out some of the articles I have published, give me feedback and suggestions</p>
        
        <div className='grid grid-cols-3 m-2 gap-2'>
            {dataElements.slice(0, 3)}
        </div>
        
        <p className='font-bold italic border-x border-b p-2 rounded-2xl'>Other featured blogs</p>
        </section>
  )
}

export default Blog