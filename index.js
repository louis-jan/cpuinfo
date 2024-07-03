var binding = require("node-gyp-build")(__dirname);
module.exports = exports = { cpuInfo: binding };

// console.log(binding.cpuInfo());
