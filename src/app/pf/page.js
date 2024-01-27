"use client";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Page = () => {
    return (
        <>
            <div> 
                <button>Advance to next stage</button>    
                <p>Money: $0</p>    
            </div>
            <div>
                <h1>FinQuest</h1>
                <h2>Stage 1</h2>
                <h3>Journey: Personal Finance</h3>
                <h4>Name: Bob</h4>
                <h4>Age: 16</h4>
                <h4>Status HS</h4>
                
            </div>
            
            <div>
            <Popup trigger=
                {<button> Assets </button>} 
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
