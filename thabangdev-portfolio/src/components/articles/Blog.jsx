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
        <section id='blog' className='blog'>
        <h2 className='blog-heading'>My Blog</h2>
        <p>Please check out some of the articles I have published, give me feedback and suggestions</p>
        
        <div className='blog-posts'>
            {dataElements.slice(0, 3)}
        </div>
        
        <button className='more-blogs-btn italic'><Link to="/blogs">Other featured blogs</Link></button>
        </section>
  )
}

export default Blog