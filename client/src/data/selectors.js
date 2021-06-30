import { selector } from 'recoil';
import { pos1Atom, pos2Atom, neut1Atom, neut2Atom, neg1Atom, neg2Atom, neg3Atom, neg4Atom, neg5Atom, neg6Atom, neg7Atom } from './atoms';
import { getTotalResponsesOfType, getResponsePercent, getNPSScore, getTotalResponses } from './repository';

export const getPositiveTotal = selector({
  key: 'getPosTot',
  get: async ({ get }) => {
    const responses = [{ ...get(pos1Atom) }, { ...get(pos2Atom) }];
    const total = await getTotalResponses(responses);
    return total;
  },
});

export const getNegativeTotal = selector({
  key: 'getNegTot',
  get: async ({ get }) => {
    const responses = [
      { ...get(neg1Atom) },
      { ...get(neg2Atom) },
      { ...get(neg3Atom) },
      { ...get(neg4Atom) },
      { ...get(neg5Atom) },
      { ...get(neg6Atom) },
      { ...get(neg7Atom) },
    ];
    const total = await getTotalResponses(responses);
    return total;
  },
});

export const getNeutralTotal = selector({
  key: 'getNeutTot',
  get: async ({ get }) => {
    const responses = [{ ...get(neut1Atom) }, { ...get(neut2Atom) }];
    const total = await getTotalResponsesOfType(responses, 'neutral');
    return total;
  },
});

export const getPositivePercent = selector({
  key: 'getPosPer',
  get: async ({ get }) => {
    const responses = [
      { ...get(pos1Atom) },
      { ...get(pos2Atom) },
      { ...get(neut1Atom) },
      { ...get(neut2Atom) },
      { ...get(neg1Atom) },
      { ...get(neg2Atom) },
      { ...get(neg3Atom) },
      { ...get(neg4Atom) },
      { ...get(neg5Atom) },
      { ...get(neg6Atom) },
      { ...get(neg7Atom) },
    ];
    const posPercent = await getResponsePercent(responses, 'positive');
    return posPercent;
  },
});

export const getNegativePercent = selector({
  key: 'getNegPer',
  get: async ({ get }) => {
    const responses = [
      { ...get(pos1Atom) },
      { ...get(pos2Atom) },
      { ...get(neut1Atom) },
      { ...get(neut2Atom) },
      { ...get(neg1Atom) },
      { ...get(neg2Atom) },
      { ...get(neg3Atom) },
      { ...get(neg4Atom) },
      { ...get(neg5Atom) },
      { ...get(neg6Atom) },
      { ...get(neg7Atom) },
    ];
    const negPercent = await getResponsePercent(responses, 'negative');
    return negPercent;
  },
});

export const getTotalScore = selector({
  key: 'getNegPercent',
  get: async ({ get }) => {
    const responses = [
      { ...get(pos1Atom) },
      { ...get(pos2Atom) },
      { ...get(neut1Atom) },
      { ...get(neut2Atom) },
      { ...get(neg1Atom) },
      { ...get(neg2Atom) },
      { ...get(neg3Atom) },
      { ...get(neg4Atom) },
      { ...get(neg5Atom) },
      { ...get(neg6Atom) },
      { ...get(neg7Atom) },
    ];
    const negPercent = await getNPSScore(responses, 'negative');
    return negPercent;
  },
});
