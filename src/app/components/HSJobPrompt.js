import React, { useEffect } from "react";
import "./next_stage_style.css";

function HSJobPrompt({ closeModal, onSelect, prompts }) {
  const handleJobSelection = (dataObject) => {
    onSelect(dataObject);
    closeModal();
  };

  return (
    <div className="modal">
      <h2 className="title">New Decision</h2>
      <div className="promptListing">
        {prompts.map((dataObject) => (
          <button
            className="prompt"
            onClick={() => handleJobSelection(dataObject)}
          >
            <li key={dataObject.id}>
              {Object.entries(dataObject).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </li>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HSJobPrompt;
