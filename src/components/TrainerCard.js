import React from 'react';

const TrainerCard = ({ name, photo, specialties, bio }) => {
  return (
    <div className="trainerCard">
      <img src={photo} alt={`${name} - Trainer`} className="trainerPhoto" />
      <div className="trainerInfo">
        <h3>{name}</h3>
        <p className="specialties" style={{color:'red'}}>Specialties: {specialties}</p>
        <p className="bio">{bio}</p>
        <button className="trainerContactBtn">Contact</button> 
      </div>
    </div>
  );
};

export default TrainerCard;
