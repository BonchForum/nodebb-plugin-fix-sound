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
    console.log(err);
    console.log(settings);
    console.log(this.userData.uid);

    settings.notificationSounds = true;
    User.saveSettings(thus.userData.uid, settings, function(err, data) {
      console.log(data);
    });
  }

  module.exports = Fix;
}(module));