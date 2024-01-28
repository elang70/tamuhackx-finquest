



export function increaseSalary(salary) {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Check if the salary should increase (33% chance)
    if (random < 0.33) {
        // Calculate the increased salary (10% increase)
        salary *= 1.1;
    }
    return [salary, ""];
}




export function babyBudgetDecision(bankAccountBalance) {
    // Possible outcomes
    const outcomes = [
      "Receive Generous Gift",
      "Baby Shower Savings",
      "Unexpected Medical Expenses",
      "Budgeting Success",
    ];
  
    // Randomly select an outcome
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
    // Initialize explanation variable
    let explanation = "";
  
    // Determine the effect on bank account balance based on the outcome and provide an explanation
    switch (randomOutcome) {
      case "Receive Generous Gift":
        bankAccountBalance -= 1000;
        explanation = "You received an unexpected and heartwarming generous gift from a family member or friend. Their kindness provided a significant financial boost, allowing you to better prepare for the arrival of your child.";
        break;
      case "Baby Shower Savings":
        bankAccountBalance -= 2000;
        explanation = "Your baby shower was a great success! You received thoughtful gifts and financial contributions from your loved ones. These savings helped alleviate some of the financial stress associated with having a child.";
        break;
      case "Unexpected Medical Expenses":
        bankAccountBalance -= 5000;
        explanation = "Unfortunately, unexpected medical expenses arose, requiring you to dip into your savings to cover the costs. While it's a setback, your child's health is a top priority, and you had to make this necessary expense.";
        break;
      case "Budgeting Success":
        bankAccountBalance -= 3000;
        // No change to balance
        explanation = "Your careful budgeting and financial planning paid off. You managed your expenses efficiently, avoiding any significant financial impacts related to your child's arrival. Your dedication to financial responsibility ensured a smooth transition into parenthood.";
        break;
      default:
        break;
    }
    
    console.log(`Outcome: ${randomOutcome}`);
    console.log(`Bank Account Balance: $${bankAccountBalance}`);
    console.log(`${explanation}`);
  
    // Return the updated bank account balance
    return [bankAccountBalance, explanation];
  }



  export function carPurchaseDecision(bankAccountBalance) {
    // Initialize explanation variable
    let explanation = "";
  
    // Simulate a car purchase decision without player input
    if (bankAccountBalance >= 250000) {
      // If the bank account balance is sufficient, opt for a luxury car
      bankAccountBalance -= 80000;
      explanation = "With a healthy bank account balance, you decided to splurge on a luxurious car, enjoying the prestige and comfort it offers.";
    } else if (bankAccountBalance >= 100000) {
      // If the bank account balance is enough for an affordable used car
      bankAccountBalance -= 30000;
      explanation = "You made a practical choice by purchasing an affordable used car, ensuring reliable transportation without straining your finances.";
    } else {
      // If the bank account balance is too low, consider low-interest financing
      bankAccountBalance -= 10000;
      explanation = "With limited savings, you opted for low-interest financing, allowing you to get a car while preserving most of your funds.";
    }
  
    // Print the outcome, updated bank account balance, and explanation
    console.log(`Outcome: ${explanation}`);
    console.log(`Bank Account Balance: $${bankAccountBalance}`);
    return [bankAccountBalance, explanation];
  }

  
  

  export function vacationPlanning(liabilities, bankAccountBalance) {
    // Initialize explanation variable
    let explanation = "";
  
    // Simulate vacation planning without player input
    if (liabilities <= 5000) {
      // If the bank account balance is sufficient, plan a luxurious vacation
      bankAccountBalance -= 5000;
      explanation = "With a healthy bank account balance, you decided to plan a luxurious vacation, staying at a top-notch resort and exploring exotic destinations.";
    } else if (liabilities <= 20000) {
      // If the bank account balance allows, plan a budget-friendly getaway
      bankAccountBalance -= 2000;
      explanation = "You opted for a budget-friendly getaway, choosing affordable accommodations and exploring nearby attractions to make the most of your funds.";
    } else {
      // If the bank account balance is too low, consider a staycation
      explanation = "With limited savings, you decided to have a staycation, enjoying leisure activities and relaxation at home without the expense of traveling.";
      bankAccountBalance -= 250
    }
  
    // Print the outcome, updated bank account balance, and explanation
    console.log(`Outcome: ${explanation}`);
    console.log(`Bank Account Balance: $${bankAccountBalance}`);
    return [bankAccountBalance, explanation];
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


















  
