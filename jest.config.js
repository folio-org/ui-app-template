const path = require('path');
const { config } = require('@folio/jest-config-stripes');

console.log({  config })

module.exports = {
  ...config,
  setupFiles: [
    ...config.setupFiles,
    path.join(__dirname, './test/jest/setupFiles.js'),
  ],
};

