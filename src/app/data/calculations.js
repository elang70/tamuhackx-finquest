function increaseSalary() {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Check if the salary should increase (33% chance)
    if (random < 0.33) {
        // Calculate the increased salary (10% increase)
        salary *= 1.1;
    }
}




function babyBudgetDecision() {
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
  }



  

















  
