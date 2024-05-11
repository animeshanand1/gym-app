import React from 'react'
import MembershipCard from '../components/MembershipCard'

const SubsciptionInfo = () => {
    return (
        <div className='subscriptionContainer' style={{ backgroundColor: '#814141', padding:'10px' }}>
            <h2 style={{ color: '#fff', fontWeight: '700' }}>Explore Our Membership Plans</h2>
            <div className='membership-subsciption-grid'>
                <MembershipCard
                    tier="Premium"
                    price={49}
                    benefits={[
                        "Unlimited access to all classes",
                        "Personal training sessions",
                        "Nutrition consultations"
                    ]}
                    featured={true}/>
                     <MembershipCard
                    tier="Basic"
                    price={19}
                    benefits={[
                        "Unlimited access to all classes",
                        "Personal training sessions",
                        "Nutrition consultations"
                    ]}
                    featured={false}/>
                     <MembershipCard
                    tier="Premium"
                    price={49}
                    benefits={[
                        "Unlimited access to all classes",
                        "Personal training sessions",
                        "Nutrition consultations"
                    ]}
                    featured={true}/>
                     <MembershipCard
                    tier="Premium"
                    price={49}
                    benefits={[
                        "Unlimited access to all classes",
                        "Personal training sessions",
                        "Nutrition consultations"
                    ]}
                    featured={true}/>
                    

            </div>
        </div>
    )
}

export default SubsciptionInfo