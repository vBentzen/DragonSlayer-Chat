(function() {
  function sendMessageCtrl (Message) {

    var vm = this;

    vm.sendIt = function (newMessage, roomId) {
      Message.send(newMessage, roomId);
      vm.newRoomMessage = "";
    };

    vm.checkKey = function (roomId, event) {
      if (event.keyCode === 13) {
        vm.sendIt(vm.newRoomMessage, roomId);
      }
    };
}

  angular
  .module('dragonSlayerChat')
  .controller('sendMessageCtrl', ['Message', sendMessageCtrl]);
})();
