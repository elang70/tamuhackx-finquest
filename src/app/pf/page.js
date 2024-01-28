"use client";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import InitialPrompt from "../components/initial_prompt";
import HSJobPrompt from "../components/HSJobPrompt.js";
import BankingPrompt from "../components/BankingPrompt.js";
import hs_job from "../data/hs_main.json";
import collegeChoices from "../data/colleges.json";
import Summary from "../summary_content/summary_page.js"
import collegeLoan from "../data/colleges_loan.json";
import disaster from "../data/disaster.json";
import house from "../data/house.json";
import jobOptions from "../data/job_options.json";
import retirement from "../data/retirement.json";
import SideQuestsNav from "../components/side_quests_nav.js";
// import Summary from "../summary_content/summary_page.js";
import styles from './page.module.css';

import Lottie from "lottie-react";
import animationData4 from "../assets/animation4.json";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promptCounter, setPromptCounter] = useState(0);
  const [choices, setChoices] = useState([]);
  const [done, setDone] = useState(false);

  const [salary, setSalary] = useState(0);
  const [bankAccountBalance, setBankAccountBalance] = useState(500);
  const [assets, setAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);

  const hs_main = hs_job.choices;
  const data_raw =    [hs_job, collegeChoices, collegeLoan, jobOptions, retirement, disaster, house];
  const listPrompts = [hs_main, collegeChoices.colleges, collegeLoan["Financial Options"], jobOptions.jobOffers, retirement.choices, disaster.choices, house.choices];
  const ages =        [15,      18,                      18,                            22,                    26,                 35,               42];
  const status =      ["High School","College",          "College",                     "Working",             "Working",          "Working",        "Working"];

  function increasePromptCounter() {
    if (promptCounter + 1 >= listPrompts.length) {
      setDone(true);
      document.getElementsByClassName("advancebtn")[0].disabled = true;
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

    selection["Lesson"] = data_raw[promptCounter].lesson;

    console.log("Selected: ", selection);
    setChoices([...choices, selection]);

    let newBalance = bankAccountBalance;

    if ("Balance Change" in selection) {
        console.log("Balance Change: ", selection["Balance Change"]);
        newBalance += selection["Balance Change"];
    }
    if ("Salary Number" in selection) {
        setSalary(selection["Salary Number"]);
    }
    if ("Assets Change" in selection) {
        if (assets + selection["Assets Change"] < 0) {
            setAssets(0);
        } else {
            setAssets(assets + selection["Assets Change"]);
        }
    }
    if ("Liabilities Change" in selection) {
        if (liabilities + selection["Liabilities Change"] < 0) {
            setLiabilities(0);
        } else {
            setLiabilities(liabilities + selection["Liabilities Change"]);
        }
    }
    newBalance += salary;
    setBankAccountBalance(newBalance);

    increasePromptCounter();
};

const handleSideQuest = (effect, value, quest) => {
    switch (effect) {
        case 's':
            setSalary(value[0]);
            break;
        case 'b':
            setBankAccountBalance(value[0]);
            break;
        default:
            break;
    }
    
    setChoices([...choices, {side_quest:quest, effect:value[1]}]);
};

const mystyle = {
  color: "blue",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

  return (
    <div className={styles.page}>
      <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
        <InitialPrompt />
        <button className="bigButton" onClick={closeModal}>
          Click to open your first bank account and start your financial journey!
        </button>
      </Popup>

      <div className="container">
        <Lottie animationData={animationData4} className={styles.dollar}></Lottie>
      </div>
      <div>
        <div className={styles.container2} style={{margin:'auto'}}>
          <h1 className={styles.spacing}>FinQuest</h1>
          <h2 className={styles.spacing}>Stage {promptCounter+1}</h2>
          <h3 className={styles.spacing}>Journey: Personal Finance</h3>
          <h4 className={styles.spacing}>Name: Bob</h4>
          <h4 className={styles.spacing}>Age: {ages[promptCounter]}</h4>
          <h4 className={styles.spacing}>Status: {status[promptCounter]}</h4>
        </div>
      </div>
      
      <div>
        <Popup trigger={<button className="bigButton" style={{marginRight:10, marginBottom:10, marginTop:10}}> Side Quests </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">{""}</div>
              <div>
                  <SideQuestsNav handleSideQuest={handleSideQuest} salary={salary} liabilities={liabilities} balance={bankAccountBalance} />
              </div>
              <div className={styles.center}>
                <button className="bigButton" onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
        <Popup trigger={<button className="bigButton"> Banking </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <BankingPrompt assets={assets} liabilities={liabilities} bankAccountBalance={bankAccountBalance} salary={salary} />
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>

        {done ? <Summary></Summary> : <div></div>}
      </div>
      <div className={styles.advancedbtn}>
        <Popup trigger={<button className="bigButton" style={{marginBottom:10}}> Advance to next stage </button>} modal nested>
            {(close) => (
              <div className="modal">
                <div className="content">
                  <HSJobPrompt
                    closeModal={close}
                    onSelect={handleSelection}
                    prompts={listPrompts[promptCounter]}
                    promptDesc={data_raw[promptCounter].prompt}
                  />
                </div>
              </div>
            )}
        </Popup>
      </div>
      {choices.map((dataObject) => (
          <div>
            <li key={dataObject.id} className={styles.choices}>
              {Object.entries(dataObject).map(([key, value]) => (
                <span key={key}>
                  <strong>{key}:</strong> {value},{" "}
                </span>
              ))}
            </li>
          </div>
        ))}
    </div>
  );
};

export default Page;
