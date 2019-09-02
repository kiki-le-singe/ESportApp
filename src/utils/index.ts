export const gramsToKilograms = (grams: number): number => {
  return grams / 1000;
};

export const total = (data: number[], count: number): number => {
  const _newData = data.filter((_data) => {
    return _data === count;
  });

  return _newData.length;
};
