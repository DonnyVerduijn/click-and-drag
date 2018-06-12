module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
    mocha: true
  },
  plugins: ["mocha", "chai-friendly"],
  rules: {
    "mocha/no-exclusive-tests": "error"
  }
};
