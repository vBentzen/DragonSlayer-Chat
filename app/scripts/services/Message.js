(function() {
  function Message($firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }
    };

  }

  angular
    .module('dragonSlayerChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
