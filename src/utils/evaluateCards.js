const evaluateCards = (cards) => {
  // Sort cards by ASC so aces are evaluated last
  return [...cards]
    .sort((a, b) => b.value - a.value)
    .reduce((sum, { value }) => {
      // If card is not an ace, and value as normal
      if (value !== 1) {
        return sum + value;
      }

      // Determine if ace can be added as 11
      const canAddEleven = sum + 11 <= 21;

      return canAddEleven ? sum + 11 : sum + 1;
    }, 0);
};

export default evaluateCards;
