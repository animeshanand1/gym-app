import React, { useEffect, useState } from 'react'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
    const testimonials = [
        { name: 'Alice', image: 'Images/alice.jpg', testimonial: 'Great product!' },
        { name: 'Bob', image: 'Images/bob.jpg', testimonial: 'Awesome service.' },
        { name: 'Charlie', image: 'Images/charlie.jpg', testimonial: 'Highly recommended.' },
        { name: 'Mar', image: 'Images/charlie.jpg', testimonial: 'Highly recommended.' },
        { name: 'Mar', image: 'Images/charlie.jpg', testimonial: 'Highly recommended.' },
    ];
    const testimonialsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const visibleTestimonials = testimonials.slice(
        currentPage * testimonialsPerPage,
        (currentPage + 1) * testimonialsPerPage
    );

    const nextSlide = () => {
        const nextPage = (currentPage + 1) % totalPages;
        setCurrentPage(nextPage);
    };

    const prevSlide = () => {
        const prevPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
        setCurrentPage(prevPage);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId); 
    }, [currentPage]); 

    return (
        <div className="testimonialsContainer" style={{ position: 'relative' }}>
            <h2>What people has to say about our products</h2>
            <div className='testimonials-grid'>
                {visibleTestimonials.map((testimonial,index)=>{
                    return(
                        <TestimonialCard key={index} name={testimonial.name} image={testimonial.image} testimonial={testimonial.testimonial}/>
                    )
                })}
            </div>
            <div className="testimonial-buttons">
                <button className='testimonials-prev-btn' onClick={prevSlide}>Prev</button>
                <button onClick={nextSlide} className='testimonials-next-btn'>Next</button>
            </div>
        </div>
    )
}

export default Testimonials