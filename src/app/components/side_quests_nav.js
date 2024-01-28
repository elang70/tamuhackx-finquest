import React from 'react';
import { increaseSalary } from '../data/calculations.js';
import { babyBudgetDecision } from '../data/calculations.js';
import { carPurchaseDecision } from '../data/calculations.js';
import { vacationPlanning } from '../data/calculations.js';

function SideQuestsNav({ handleSideQuest, salary, liabilities, balance }) {
    const handleButtonClick = (quest) => {
        // Call the desired function based on the quest
        switch (quest) {
            case 'Salary Negotiation':
                // Call function for Salary Negotiation
                handleSideQuest("s", increaseSalary(salary), quest);
                break;
            case 'Have a Baby':
                // Call function for Have a Baby
                handleSideQuest("b", babyBudgetDecision(balance), quest);
                break;
            case 'Buy a Car':
                // Call function for Buy a Car
                handleSideQuest("b", carPurchaseDecision(balance), quest);
                break;
            case 'Go on vacation':
                // Call function for Go on vacation
                handleSideQuest("b", vacationPlanning(liabilities, balance), quest);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ marginRight: '10px' }} onClick={() => handleButtonClick('Salary Negotiation')}>Salary Negotiation</button>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Have a Baby')}>Have a Baby</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{ marginRight: '10px' }} onClick={() => handleButtonClick('Buy a Car')}>Buy a Car</button>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Go on vacation')}>Go on vacation</button>
            </div>
        </div>
    );
}

export default SideQuestsNav;
