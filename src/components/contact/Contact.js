import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.143852742522!2d73.92857457468341!3d18.548236899571553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16301618ab3%3A0xddd98f4aaff22760!2sTukaram%20Nagar%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1681909849123!5m2!1sen!2sin1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Tukaram Nagar, Kharadi, Pune</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> abcd@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 8790567845</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact