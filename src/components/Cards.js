import React from 'react'
import CardItems from './CardItems'
import "./Card.css"


function Cards() {
  return (
    <div className='cards'>
      <h1>Bringing Information Technology to your door step</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={require('../images/img3.jpg')}
                // src="./images/teach.jpg"
              text="Explore the opportunities in Galitech Integrated systems"
              label="IT Training"
              path="/services"
              />
            <CardItems
              src={require('../images/img5.jpg')}
                // src="./images/img5.jpg"
              text="Explore the opportunities in Galitech Integrated systems"
              label="Cloud Services deployment and management"
              path="/services"
                />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src={require('../images/img8.jpg')}
                // src="./images/img8.jpg"
              text="Explore the opportunities in Galitech Integrated systems"
              label="IT Professional Services"
              path="/services"
              />
            <CardItems
              src={require('../images/img7.jpg')}
                // src="./images/img7.jpg"
              text="Explore the opportunities in Galitech Integrated systems"
              label="IT Consultancy"
              path="/services"
              />
            {/* <CardItems
              src={require('../images/city.jpg')}
                // src="./images/city.jpg"
              text="Explore the opportunities in Galitech Integrated systems"
              label="adventure"
              path="/services"
               /> */}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
