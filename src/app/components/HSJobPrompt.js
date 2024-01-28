import React, { useEffect } from 'react';


function HSJobPrompt( {closeModal, onSelect, prompts} ) {

    const handleJobSelection = (dataObject) => {
        onSelect(dataObject);
        closeModal();
    };


return (
    <div>
      <h2>List of Objects</h2>
        {prompts.map((dataObject) => (
          <button onClick={() => handleJobSelection(dataObject)}>
          <li key={dataObject.id}>

            {Object.entries(dataObject).map(([key, value]) => (
              <span key={key}>
                <strong>{key}:</strong> {value},{' '}
              </span>
            ))}
          </li>
          </button>

        ))}
    </div>
  );
    
};

export default HSJobPrompt;