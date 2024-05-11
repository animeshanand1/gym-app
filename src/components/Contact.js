import React from 'react'

const Contact = () => {
    return (
        <contact>
            <h3 className='headlineClass'>Contact Us</h3>
            <div className='contactContainerGrid'>
            <div className='contactContainer'>
                <div className='contactInfo'>
                    <h3>Address</h3>
                    <p>1234 Gym Street, Fitness City, 12345</p>
                </div>
                <div className='contactInfo'>
                    <h3>Phone</h3>
                    <p>123-456-7890</p>
                </div>
                <div className='contactInfo'>
                    <h3>Email:<span style={{marginLeft:'10px', fontWeight:'400',fontStyle:'italic'}}>gymfitness@gmail.com</span></h3>
                </div>
            </div>
            
            <form className='contactForm'>
                <div className='nameDetails'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" />
                </div>  
                <div className='emailDetails'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" />
                </div>
                <div className='subjectDetails'>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </contact>
    )
}

export default Contact