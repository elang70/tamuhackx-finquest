"use client";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import InitialPrompt from "../components/initial_prompt";
import HSJobPrompt from "../components/HSJobPrompt.js";
import hs_job from "../data/hs_main.json";
import collegeChoices from "../data/colleges.json";
import Summary from "../summary_content/summary_page.js"
import collegeLoan from "../data/colleges_loan.json";
import disaster from "../data/disaster.json";
import house from "../data/house.json";
import jobOptions from "../data/job_options.json";
import retirement from "../data/retirement.json";
import SideQuestsNav from "../components/side_quests_nav.js";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promptCounter, setPromptCounter] = useState(0);
  const [choices, setChoices] = useState([]);
  const [done, setDone] = useState(false);

  const hs_main = hs_job.choices;

  const listPrompts = [hs_main, collegeChoices.colleges, collegeLoan.financial_options, jobOptions.job_offers, retirement.choices, disaster.choices, house.choices];

  function increasePromptCounter() {
    console.log("Prompt Counter: ", promptCounter);
    console.log("List Prompts Length: ", listPrompts.length);
    if (promptCounter + 1 >= listPrompts.length) {
      setDone(true);
      document.getElementById("advancebtn").disabled = true;
    } else {
      setPromptCounter(promptCounter + 1);
    }
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelection = (selection) => {
    console.log("Selected: ", selection);
    setChoices([...choices, selection]);
    // setPromptCounter(promptCounter + 1);
    increasePromptCounter();
};

  return (
    <>
      <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
        <InitialPrompt />
        <button onClick={closeModal}>
          Click to open your first bank account and start your financial
          journey!
        </button>
      </Popup>

      <div>
        <Popup trigger={<button id="advancebtn"> Advance to next stage </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <HSJobPrompt
                  closeModal={close}
                  onSelect={handleSelection}
                  prompts={listPrompts[promptCounter]}
                />
              </div>
            </div>
          )}
        </Popup>
        <p>Money: $20</p>
      </div>
      <div>
        <h1>FinQuest</h1>
        <h2>Stage 1</h2>
        <h3>Journey: Personal Finance</h3>
        <h4>Name: Bob</h4>
        <h4>Age: 15</h4>
        <h4>Status HS</h4>

        {choices.map((dataObject) => (
          <button>
            <li key={dataObject.id}>
              {Object.entries(dataObject).map(([key, value]) => (
                <span key={key}>
                  <strong>{key}:</strong> {value},{" "}
                </span>
              ))}
            </li>
          </button>
        ))}
      </div>

      <div>
        <Popup trigger={<button> Side Quests </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">{""}</div>
              <div>
                <button onClick={() => close()}>
                  <SideQuestsNav />
                </button>
              </div>
            </div>
          )}
        </Popup>
        <Popup trigger={<button> Banking </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                {"Content of the popup (to be replaced with a popup component)"}
              </div>
              <div>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>

        {done ? <Summary></Summary> : <div></div>}
      </div>
    </>
  );
};

export default Page;
