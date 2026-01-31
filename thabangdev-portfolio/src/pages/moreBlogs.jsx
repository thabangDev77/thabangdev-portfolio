import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Post from '../components/blogs/Post'
import Footer from '../components/footer/Footer'
import blogData from '../data/blogsData'

function moreBlogs() {

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
        <>
            <Navbar />  
            <main>
                <section>
                    <h2>My Blog</h2>
                    <p>Please check out my write ups, give me feedback and suggestions</p>
                    <div>
                        {dataElements}
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default moreBlogs