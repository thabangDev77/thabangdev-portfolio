import React from 'react'

function Contact() {
  return (
    <section >

      <h2>Contact Me</h2>
      <p>Have a project you would like to discuss? Reach out and lets build something great together</p>
      
      <form>
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="number">Phone Number</label>
          <input type="tel" id="number" name="number" required /> 

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact