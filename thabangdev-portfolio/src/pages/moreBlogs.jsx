import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Post from '../components/blogs/Post'
import Footer from '../components/footer/Footer'

function moreBlogs() {
    return (
        <>
            <Navbar />  
            <main>
                <section>
                    <h2>My Blog</h2>
                    <p>Please check out my write ups, give me feedback and suggestions</p>
                    <div>
                        <Post />
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default moreBlogs