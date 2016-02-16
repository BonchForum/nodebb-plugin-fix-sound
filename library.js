(function(module) {
  "use strict";

  var Fix = {},
    User = require.main.require('./src/user');

  Fix.userCreate = function(userData) {
    User.getSettings(userData.uid, endGetSettings.bind({
      userData: userData
    }));
  }

  function endGetSettings(err, settings) {
    settings.notificationSounds = true;
    User.saveSettings(this.userData.uid, settings, function(err, data) {});
  }

  module.exports = Fix;
}(module));