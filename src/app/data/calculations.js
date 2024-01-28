function increaseSalary(salary) {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Check if the salary should increase (33% chance)
    if (random < 0.33) {
        // Calculate the increased salary (10% increase)
        const increasedSalary = salary * 1.1;
        return increasedSalary;
    }

    // Return the original salary if it doesn't increase
    return salary;
}
