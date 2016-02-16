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
    settings.notificationSounds = 1;
    User.saveSettings(this.userData.uid, settings, function(err, data) {
      console.log(data);
      console.log(err);
    });
  }

  module.exports = Fix;
}(module));