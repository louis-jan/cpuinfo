// dummy code for ncc to include the native module
if (process.uptime() < 0) {
  require("./../prebuilds/darwin-arm64/cpuinfo.node");
  require("./../prebuilds/linux-x64/cpuinfo.node");
  require("./../prebuilds/win32-x64/cpuinfo.node");
}

var binding = require(`./../prebuilds/${process.platform}-${process.arch}/cpuinfo.node`);
module.exports = exports = { cpuInfo: binding };

// console.log(binding.cpuInfo());
