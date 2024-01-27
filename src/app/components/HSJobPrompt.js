import React from 'react';
import hs_main from '../data/hs_main.json';

function HSJobPrompt( {closeModal, onJobSelect} ) {

    const handleJobSelection = (choice) => {
        onJobSelect(choice);
        closeModal();
    };

    return (
      <>
        <h2>{hs_main.prompt}</h2>
        { hs_main.choices.map((choice) => (
          <div key={choice.job}>
            <button onClick={() => handleJobSelection(choice)}>
                <h3>{choice.job}</h3>
                <p>Hourly Rate: ${choice.hourly_rate}</p>
            </button>
          </div>
        ))}
      </>
    );
};

export default HSJobPrompt;