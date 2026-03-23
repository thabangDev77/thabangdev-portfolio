import React from 'react'


function Post(props) {
    return (
        <div className='grid grid-cols-4 m-4 border-2 rounded-xl p-2'>
            <img className='col-span-1' src={props.img} alt='post image' style={{ height: '150px', width: '150px', border: '1px solid black', borderRadius: '10px'}} />
            <div className='col-span-3'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-bold'>{props.title}</h3>
                    <span>{props.date}</span>
                </div>
                <p className='text-sm italic'>{props.description}</p>
                <button className='read-blog'><a href={props.link}>Read more</a></button>
            </div>
        </div>
  )
}

export default Post