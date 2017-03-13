(function() {
  function sendMessageCtrl (Message) {

    var vm = this;

    vm.sendIt = function (newMessage) {
      sender(newMessage);
    };
}

  angular
  .module('dragonSlayerChat')
  .controller('sendMessageCtrl', ['Message', sendMessageCtrl]);
})();
