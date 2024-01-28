"use client";
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InitialPrompt from '../components/initial_prompt';
import HSJobPrompt from '../components/HSJobPrompt.js';
import hs_job from '../data/hs_main.json';
import collegeChoices from '../data/colleges.json';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [promptCounter, setPromptCounter] = useState(0);
    const [choices, setChoices] = useState([]);

    const hs_main = hs_job.choices;

    const listPrompts = [hs_main, collegeChoices.colleges]

    function increasePromptCounter() {
        if (promptCounter >= choices.length) {
            setPromptCounter(promptCounter);
        }
        else {
            setPromptCounter(promptCounter + 1);

        }

    }

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    }


    const [selectedJob, setSelectedJob] = useState(null);

    const handleSelection = (selection) => {
        setPromptCounter(promptCounter + 1);
        console.log("Selected: ", selection);
        setChoices(...choices, selection);
    };

    return (
        <>
            <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
                <InitialPrompt />
                <button onClick={closeModal}>
                    Click to open your first bank account and start your financial journey!
                </button>
            </Popup>


            <div> 
                <Popup trigger=
                {<button> Advance to next stage </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <HSJobPrompt closeModal={close} onSelect={handleSelection}  prompts={listPrompts[promptCounter]} />
                            </div>
                        </div>
                    )
                }
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
                
            </div>
            
            <div>
            <Popup trigger=
                {<button> Side Quests </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                {""}
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        <InitialPrompt />
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <Popup trigger=
                {<button> Banking </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                {"Content of the popup (to be replaced with a popup component)"}
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            </div>
            
            
        </>
    );
};

export default Page;
