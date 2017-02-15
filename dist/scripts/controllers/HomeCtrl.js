(function() {
  function HomeCtrl(Room) {
    this.room = Room.all;
  }

  angular
  .module('dragonSlayerChat')
  .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
