const prototype = {};

const immutableDescriptor = () => ({
  enumberable: true,
  configurable: false,
  writable: false,
});

const ImmutableObject = properties =>
  Object.create(
    prototype,
    Object.keys(properties).reduce((accumulator, key) => {
      const isObject = typeof properties[key] === 'object';
      return {
        ...accumulator,
        [key]: Object.assign({}, immutableDescriptor, {
          value: isObject ? ImmutableObject(properties[key]) : properties[key],
        }),
      };
    }, {}),
  );

export default ImmutableObject;
