const scss = require('rollup-plugin-scss');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      scss()
    )
    return config; // always return a config.
  },
};
