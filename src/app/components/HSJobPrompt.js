import React, { useEffect } from "react";
import "./next_stage_style.css";

function HSJobPrompt({ closeModal, onSelect, prompts, promptDesc }) {
  const handleJobSelection = (dataObject) => {
    onSelect(dataObject);
    closeModal();
  };

  // return (
  //   <div className="modal">
  //     <h2 className="title">New Decision</h2>
  //     <div className="promptListing">
  //       {prompts.map((dataObject) => (
  //         <button
  //           className="prompt"
  //           onClick={() => handleJobSelection(dataObject)}
  //         >
  //           <li key={dataObject.id}>
  //             {Object.entries(dataObject).map(([key, value]) => (
  //               <div key={key}>
  //                 <strong>{key}:</strong> {value}
  //               </div>
  //             ))}
  //           </li>
  //         </button>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="modal" style={getStyles().modal}>
      <h2 className="title" style={getStyles().title}>{promptDesc}</h2>
      <div className="promptListing" style={getStyles().promptListing}>
        {prompts.map((dataObject) => (
          <button
            className="prompt"
            style={getStyles().prompt}
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


function getStyles() {

  return {
    modal: {
      backgroundColor: '#f9f9f9',
      width: '90%',
      maxHeight: '90vh', // Set a maximum height
      overflowY: 'auto', // Enable vertical scrolling
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
    },
    title: {
      fontSize: '24px',
      color: '#333'
    },
    promptListing: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    prompt: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      margin: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };
}


export default HSJobPrompt;
