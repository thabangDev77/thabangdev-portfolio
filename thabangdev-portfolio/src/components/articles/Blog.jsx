import React from 'react'
import Post from './Post';
import { Link } from 'react-router-dom';
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
        <h2 className='blog-heading'>My Blog</h2>
        <p>Please check out some of the articles I have published, give me feedback and suggestions</p>
        
        <div className='grid grid-cols-3 m-2 gap-2'>
            {dataElements.slice(0, 3)}
        </div>
        
        <button className='more-blogs-btn italic'><Link to="/blogs">Other featured blogs</Link></button>
        </section>
  )
}

export default Blog