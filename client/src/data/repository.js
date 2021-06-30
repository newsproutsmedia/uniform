import { addResponses, percentOfResponses, score } from '../utils/utils';

export const getTotalResponses = (responses) => (
  addResponses(responses)
);

export const getTotalResponsesOfType = (responses, type) => {
  const responsesByType = responses.filter((response) => response.type === type);
  return getTotalResponses(responsesByType);
};

export const getResponsePercent = (responses, type) => {
  let percent = 0;
  const totalResponses = getTotalResponses(responses);
  const totalByType = getTotalResponsesOfType(responses, type);
  percent = percentOfResponses(totalResponses, totalByType);
  if (!percent) percent = 0;
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;
  return percent;
};

export const getNPSScore = (responses) => {
  let totalScore = 0;
  const totalResponses = getTotalResponses(responses);
  const totalPos = getTotalResponsesOfType(responses, 'positive');
  const totalNeg = getTotalResponsesOfType(responses, 'negative');
  const posPercent = percentOfResponses(totalResponses, totalPos);
  const negPercent = percentOfResponses(totalResponses, totalNeg);
  totalScore = score(posPercent, negPercent);
  if (!totalScore) totalScore = 0;
  if (totalScore > 100) totalScore = 100;
  if (totalScore < -100) totalScore = -100;
  return totalScore;
};
