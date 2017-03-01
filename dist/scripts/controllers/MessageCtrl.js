(function() {
  function MessageCtrl(Message) {
    this.message = Message.getByRoomId;
  }

  angular
  .module('dragonSlayerChat')
  .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
