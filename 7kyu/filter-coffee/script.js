// my solution
function search(budget, prices) {
    return prices.filter(price => price <= budget).sort((a, b) => b < a).join(',');
}

// best practice
let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')