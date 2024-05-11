import React, { useEffect, useState } from 'react'

const Carousel = ({imgsData}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === imgsData.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => {
            clearInterval(intervalId);
        };
    }, [])

   
    const prevButton = () => {
        if (activeIndex === 0) {
            setActiveIndex(imgsData.length - 1)
        }
        else {
            setActiveIndex(activeIndex - 1);
        }
    }
    const nextButton = () => {
        setActiveIndex(activeIndex === imgsData.length - 1 ? 0 : activeIndex + 1);
    };
    return (
        <carousel>
            <div className="carousel">
                <div className='carousel-item'>
                    {imgsData.map((imgUrl, index) => (
                        <img
                            key={index}
                            src={imgUrl}
                            alt={`Image ${index}`}
                            className={index === activeIndex ? 'active' : ''}
                            style={{ display: index === activeIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>

                <div className='carousel-control'>
                    <div className='prev-btn'>
                        <button onClick={prevButton}>Previous</button>
                    </div>
                    <div className='next-btn'>
                        <button onClick={nextButton}>Next</button>
                    </div>
                </div>
            </div>
        </carousel>
    )
}

export default Carousel