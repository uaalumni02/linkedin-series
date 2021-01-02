const isValidColor = (color) => {
  const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i;
  return regExp.test(color);
};

export { isValidColor };
