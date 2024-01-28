import React, { useEffect } from 'react';


function HSJobPrompt( {closeModal, onSelect, prompts} ) {

    const handleJobSelection = (choice) => {
        onSelect(choice);
        closeModal();
    };

    useEffect(() => {
      // Update the document title using the browser API
      // document.title = `You clicked ${count} times`;
      if (prompts == null) {
        prompts = [];
      }
    });

return (
    <div>
      <h2>List of Objects</h2>
        {prompts.map((dataObject) => (
          <button onClick={handleJobSelection}>
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