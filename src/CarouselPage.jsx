import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>New York</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="learn-more-button">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Japan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="learn-more-button">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Paris</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="learn-more-button">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselPage;
