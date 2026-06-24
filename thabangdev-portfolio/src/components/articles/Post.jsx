import React from 'react'


function Post(props) {
    return (
        <div className='post'>
            <img className='' src={props.img} alt='post image'/>
            <div className=''>
                <div className='post-heading-date-container'>
                    <h3 className='post-heading text-xl font-bold'>{props.title}</h3>
                    <span className='date'>{props.date}</span>
                </div>
                <p className='text-sm italic'>{props.description}</p>
                <button className='read-blog'><a href={props.link}>Read more</a></button>
            </div>
        </div>
  )
}

export default Post