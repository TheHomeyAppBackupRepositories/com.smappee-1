'use strict';

const GeniusDriver = require('../genius/driver');

class ConnectDriver extends GeniusDriver {

  /*
  | Pairing functions
  */

  // Return devices while pairing
  async getPairDevices({ oAuth2Client }) {
    return oAuth2Client.discoverConnectDevices();
  }

  // Return device ID while pairing
  getPairDeviceId(device) {
    return `CO-${device.serviceLocationId}`;
  }

}

module.exports = ConnectDriver;
