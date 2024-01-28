import React from "react";

function BankingPrompt({ assets, liabilities, bankAccountBalance, salary }) {
  return (
    <div>
      <h1>Financial Information</h1>
        <h2>Money: ${bankAccountBalance}</h2>
        <h2>Assets: ${assets}</h2>
        <h2>Liabilities: ${liabilities}</h2>
        <h2>Salary: ${salary}</h2>
    </div>
  );
}

export default BankingPrompt;