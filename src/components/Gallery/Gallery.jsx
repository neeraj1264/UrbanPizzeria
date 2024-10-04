import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css'
import { Link } from 'react-router-dom';

const items = [
  { id: 1,  imageUrl: '/img/burger.jpg'            },
  { id: 2,  imageUrl: '/img/pizza.jpg'             },
  { id: 3, videoUrl: '/img/urban/Gallery/reel1.mp4'},
  { id: 4,  imageUrl: '/img/cornsand.jpg'          },
  { id: 5,  imageUrl: '/img/makhnipasta.jpg'       },
  { id: 6,  imageUrl: '/img/dalmakhani.jpeg'       },
  { id: 7,  imageUrl: '/img/butternaan.jpeg'       },
  { id: 9,  imageUrl: '/img/chaap1.jpg'            },
  { id: 10, imageUrl: '/img/shakes.jpg'            },
  { id: 11, imageUrl: '/img/gb.jpg'                },
  { id: 12, imageUrl: '/img/momo.jpg'              },
  { id: 13, imageUrl: '/img/cakes/choco.jpg'       },
  { id: 14, imageUrl: '/img/bhalle.jpeg'           },
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
                  <video
                    className="d-block"
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    controls // Allows user to play/pause and control audio
                    playsInline
                  />
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
