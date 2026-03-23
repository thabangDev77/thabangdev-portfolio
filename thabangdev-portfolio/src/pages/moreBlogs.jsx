import React from 'react'
import Post from '../components/articles/Post'
import blogData from '../data/blogsData'

function MoreBlogs() {

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
            <main>
                <section>
                    <h2>My Blog</h2>
                    <p>Please check out my write ups, give me feedback and suggestions</p>
                    <div>
                        {dataElements}
                    </div>

                </section>
            </main>
        </>
    )
}

export default MoreBlogs