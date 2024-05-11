import React, { useEffect, useState } from 'react'

const TestimonialCard = ({testimonial,name,image}) => {
    return (
        <testimonials>
            <div className="testimonial-card">
                <img src={image} alt={name} className="testimonial-image" />
                <p className="testimonial-text">{testimonial}</p>
                <h3 className="testimonial-name">{name}</h3>
            </div>
        </testimonials>
    )
}

export default TestimonialCard