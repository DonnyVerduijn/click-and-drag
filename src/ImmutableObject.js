const prototype = {};

const immutableDescriptor = () => ({
  enumberable: true,
  configurable: false,
  writable: false,
});

const ImmutableObject = options =>
  Object.create(
    prototype,
    Object.keys(options).reduce((accumulator, key) => {
      const isObject = typeof options[key] === 'object';
      return {
        ...accumulator,
        [key]: Object.assign({}, immutableDescriptor, {
          value: isObject ? ImmutableObject(options[key]) : options[key],
        }),
      };
    }, {}),
  );

export default ImmutableObject;
