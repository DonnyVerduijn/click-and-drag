// requires all tests in `/test/`
const tests = require.context('./', true, /.js$/);

tests.keys().forEach(tests);

// requires all components in `/src/`
const components = require.context('./../src/', true, /\.js$/);

components.keys().forEach(components);
