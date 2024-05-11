import React from 'react'

const MembershipCard = ({ tier, price, benefits, featured }) => {
    return (
        <div className={`subscriptionCard ${featured ? 'featuredCard' : ''}`}>
            <h3>{tier}</h3>
            <div className="price">
                <span className="currency">$</span>
                {price}
                <span className="period">/month</span>
            </div>
            <ul className="benefitsList">
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
    )
}
export default MembershipCard