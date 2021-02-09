const compose = (...func) => (comp) => {
  return func.reduceRight(
    (wrapped, func) => func(wrapped), comp);
};

export default compose;
