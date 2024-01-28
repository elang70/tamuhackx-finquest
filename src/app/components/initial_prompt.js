// Import necessary dependencies
import React from 'react';
import './initial_prompt.css'; // Import the CSS file
// Define the Profile function component
function Initial() {
    return (
      <>
        <h1>The start of your personal finance journey!</h1>
        <h2 className='smallHeader'>Here's the basics:</h2>
        <ul>
            <li> 
                In this game, you will advance through 5 main stages of 
                life ranging from high school to retirement
            </li>
            <li>
                When you advance to each stage, a prompt will appear
                with decisions you can make regarding your personal 
                finance
            </li>
            <li>
                Within each stage, you can also make choices based 
                on your current financial situation such as buying a 
                house or a car
            </li>
            <li>
                As you go, you will learn more about the basics of 
                personal finance and good practices to follow
            </li>
              
        </ul>
        <h2 className='smallHeader'>First Task:</h2>
        <p>
            You are 15! You have just started high school and you 
            want to learn more about personal finance. You decide to
            open up a bank account but you realize since you're not
            18, you need a parent to help you. Your mom takes you to
            a bank and together, you open up your first bank account!
        </p>
      </>
    );
};

export default Initial;