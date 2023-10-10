import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subcription-heading'>
            join the leading tech company to receive our newsletter information
        </p>
        <p className='footer-subcription-text'>
            you can unsubcribe at anytime
        </p>
        <div className='input-area'>
            <form>
                <input 
                    type='email'
                    name='email'
                    placeholder='your Email'
                    className='footer-input'
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> About Us</h2>
            <Link to='/sign-up'> How it works</Link>
            <Link to='/'> Testimonial</Link>
            <Link to='/'> Careers</Link>
            <Link to='/'> Investors</Link>
            <Link to='/'> Terms of Service</Link>  
          </div>
          <div className='footer-link-items'>
            <h2> Contact Us</h2>
            <Link to='/'> Contact</Link>
            <Link to='/'> Support</Link>
            <Link to='/'> Destination</Link>
            <Link to='/'> Sponsorship</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> Videos</h2>
            <Link to='/'> Submit Videos</Link>
            <Link to='/'> Ambassadors </Link>
            <Link to='/'> Agency</Link>
            <Link to='/'> Influencers</Link>
          </div>
          <div className='footer-link-items'>
            <h2> Social Media</h2>
            <Link to='/'> Instagram</Link>
            <Link to='/'> Facebook</Link>
            <Link to='/'> Twitter</Link>
            <Link to='/'> Youtube</Link>
              
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={require('../images/gali.png')} alt="" width="200px" className='img-logo' />
            </Link>
          </div>
          <small className='website-rights'> Galitech &copy; 2022</small>
          <div className='social-icons'>
            <Link
             className='social-icon-link facebook'
              to='/'
              target='_blank'
               aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
             className='social-icon-link instagram'
              to='/'
              target='_blank'
               aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
             className='social-icon-link youtube'
              to='/'
              target='_blank'
               aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
             className='social-icon-link twitter'
              to='/'
              target='_blank'
               aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
             className='social-icon-link linkedin'
              to='/'
              target='_blank'
               aria-label='Linkedin'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer

