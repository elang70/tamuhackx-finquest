"use client";
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InitialPrompt from '../components/initial_prompt';
import HSJobPrompt from '../components/HSJobPrompt.js';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    }

    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobSelection = (job) => {
        console.log("Job selected: ", job);
        setSelectedJob(job);
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
                <button>Advance to next stage</button>    
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
            <Popup trigger=
                {<button> Occupation </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <HSJobPrompt closeModal={close} onJobSelect={handleJobSelection} />
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
