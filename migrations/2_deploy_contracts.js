
  
const Factiiv = artifacts.require('Factiiv');


module.exports = async function (deployer) {
  const root = '0xc2454e87592cf54C5F0b20B89eD6C6e12897F7e9';
  const forwarder = require('../build/gsn/Forwarder.json').address;
  await deployer.deploy(Factiiv, root, forwarder)

  
}