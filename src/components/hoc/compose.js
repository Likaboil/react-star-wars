// funcs array of functions

const compose = (...func) => (component) => {

  return func.reduceRight(
    (wrapped, func) => func(wrapped),
    component
  );
};

export default compose;
