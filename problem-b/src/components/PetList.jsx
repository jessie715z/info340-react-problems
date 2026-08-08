import React from 'react';

function PetCard({ petData, adoptCallback }) {
  return (
    <div className="card" onClick={() => adoptCallback(petData.name)}>
      <img className="card-img-top" src={petData.img} alt={petData.name} />
      <div className="card-body">
        <h3 className="card-title">{petData.name}{petData.adopted ? ' (Adopted)' : ''}</h3>
        <p className="card-text">{petData.sex} {petData.breed}</p>
      </div>
    </div>
  );
}
export function PetList({ pets, adoptCallback }) {
  return (
    <div id="petList">
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {pets.map((pet) => (
          <PetCard key={pet.name} petData={pet} adoptCallback={adoptCallback} />
        ))}
      </div>
    </div>
  );
}