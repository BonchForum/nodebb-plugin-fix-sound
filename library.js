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
    User.saveSettings(thus.userData.uid, settings, function() {});
  }

  module.exports = Fix;
}(module));