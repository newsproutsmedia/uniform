export const addResponses = (responses) => {
  let total = 0;
  responses.forEach((response) => {
    total += response.value;
  });
  return total;
};

export const percentOfResponses = (totalResponses, totalOfType) => (
  Math.ceil((totalOfType / totalResponses) * 100)
);

export const score = (pos, neg) => (
  pos - neg
);
