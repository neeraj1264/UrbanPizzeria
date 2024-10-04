import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css'
import { Link } from 'react-router-dom';

const items = [
  { id: 1, videoUrl: '/img/urban/Gallery/reel1.mp4'},
  { id: 2, videoUrl: '/img/urban/Gallery/reel2.mp4'},
  { id: 3, imageUrl: '/img/urban/Gallery/img7.jpg'},
  { id: 4, videoUrl: '/img/urban/Gallery/reel3.mp4'},
  { id: 5, imageUrl: '/img/urban/Gallery/img8.jpg'},
  { id: 6, videoUrl: '/img/urban/Gallery/reel4.mp4'},
  { id: 7, videoUrl: '/img/urban/Gallery/reel5.mp4'},
  { id: 8, videoUrl: '/img/urban/Gallery/reel6.mp4'},
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <h2 className='gallery-heading'>Our Gallery</h2>
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="carousel-inner">
            {item.videoUrl ? (
             <div class="video-container">
  <div class="video-background"></div>
                <video
                  className="video"
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              </div>
            ) : (
              <img className="d-block" src={item.imageUrl} alt={item.title} />
            )}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </>
  );
};

export default Gallery;
