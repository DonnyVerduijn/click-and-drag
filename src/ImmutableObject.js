const prototype = {};

const immutableDescriptor = () => ({
  enumberable: true,
  configurable: false,
  writable: false
});

const ImmutableObject = options => {
  return Object.create(
    prototype,
    Object.keys(options).reduce((previous, key) => {
      const isObject = typeof options[key] === "object";
      previous[key] = Object.assign({}, immutableDescriptor, {
        value: isObject ? ImmutableObject(options[key]) : options[key]
      });
      return previous;
    }, {})
  );
};

export default ImmutableObject;
