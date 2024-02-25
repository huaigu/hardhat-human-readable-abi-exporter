const { HardhatPluginError } = require('hardhat/plugins');
const { name: PLUGIN_NAME } = require('./package.json');

function main() {
    throw new HardhatPluginError(PLUGIN_NAME, `Under development`);
}

module.export = main;