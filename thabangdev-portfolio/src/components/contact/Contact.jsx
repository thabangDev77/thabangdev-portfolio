import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col justify-center items-center gap-2 my-20 px-4'>

      <h2 className='text-4xl font-bold'>Contact Me</h2>
      <p>Have a project you would like to discuss? Reach out and lets build something great together</p>
      
      <form className='flex flex-col justify-center items-center gap-2 px-4 w-full'>
          <label className='font-bold' htmlFor="username">Name:</label>
          <input className='border-2 rounded-lg w-lg p-2' type="text" id="username" name="username" required />
          
          <label className='font-bold' htmlFor="email">Email:</label>
          <input className='border-2 rounded-lg w-lg p-2' type="email" id="email" name="email" required />

          <label className='font-bold' htmlFor="number">Phone Number</label>
          <input className='border-2 rounded-lg w-lg p-2' type="tel" id="number" name="number" required /> 

          <label className='font-bold' htmlFor="subject">Subject</label>
          <input className='border-2 rounded-lg w-lg p-2' type="text" id="subject" name="subject" required />

          <label className='font-bold' htmlFor="message">Message:</label>
          <textarea className='border-2 rounded-lg w-lg p-2' id="message" name="message" rows="6" required></textarea>

          <button className='font-bold border-2 rounded-3xl p-2 mt-2' type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact