export const getUniqueElements = (someArray, key) => {
  var uniqueElemSet = new Set(
    someArray.map((someArrayElem) => someArrayElem[key])
  );
  return [...uniqueElemSet];
};

