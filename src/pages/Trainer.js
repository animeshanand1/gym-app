import React from 'react'
import TrainerCard from '../components/TrainerCard';

const Trainer = () => {
  return (
    <div className="trainers-container">
      <h2>Meet Our Trainers</h2>
      <div className="trainer-grid"> 
          <TrainerCard 
            name='Miranda Cohen'
            photo='../Images/Trainer1.png'
            specialties='Cardio'
            bio='Miranda Cohen is a certified personal trainer with a passion for cardio. She has been training clients for over 10 years and has helped many people reach their fitness goals. She believes that cardio is the key to a healthy lifestyle and loves to help her clients achieve their goals.' 
          />
           <TrainerCard 
            name='Shilpa Sharma'
            photo='../Images/yoga-trainer.png'
            specialties='Yoga Instructor and rehebilitation'
            bio='Miranda Cohen is a certified personal trainer with a passion for cardio. She has been training clients for over 10 years and has helped many people reach their fitness goals. She believes that cardio is the key to a healthy lifestyle and loves to help her clients achieve their goals.' 
          />
          <TrainerCard 
            name='Miranda Cohen'
            photo='../Images/yoga-trainer.png'
            specialties='Cardio'
            bio='Miranda Cohen is a certified personal trainer with a passion for cardio. She has been training clients for over 10 years and has helped many people reach their fitness goals. She believes that cardio is the key to a healthy lifestyle and loves to help her clients achieve their goals.' 
          />
          <TrainerCard 
            name='Miranda Cohen'
            photo='../Images/yoga-trainer.png'
            specialties='Cardio'
            bio='Miranda Cohen is a certified personal trainer with a passion for cardio. She has been training clients for over 10 years and has helped many people reach their fitness goals. She believes that cardio is the key to a healthy lifestyle and loves to help her clients achieve their goals.' 
          />
     
      </div>
    </div>
  );
};

export default Trainer