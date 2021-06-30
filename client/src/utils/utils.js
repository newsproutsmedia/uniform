export const addResponses = (responses) => {
  console.log(`Add responses ${responses.length} responses of type ${responses[0].type}`);
  let total = 0;
  responses.forEach((response) => {
    total += response.value;
  });
  console.log(`Add responses ${total}`);
  return total;
};

export const percentOfResponses = (totalResponses, totalOfType) => (
  Math.ceil((totalOfType / totalResponses) * 100)
);

export const score = (pos, neg) => (
  pos - neg
);
