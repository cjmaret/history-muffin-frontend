
//for returned amounts
export function formatCentsToDollars(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  // check if its a clean dollar amount

  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}

// for created amounts
export function formatDollarsToCents(amount = 0) {
    return (amount * 100);
}