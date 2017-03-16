(function() {
  var vm = this;
    var result = new Date();
    var t = result.getHours() + ':' + result.getMinutes();
    console.log(result)
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);



    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage, roomId) {
        var currentUser = $cookies.get('dsChatCurrentUser');
        messages.$add({roomId: roomId, username: currentUser, content: newMessage, sentAt: t}).then(function(ref) {
          var id = ref.key;
          console.log("added Message with id " + id + 'messageIs: ' + newMessage);
          messages.$indexFor(id); // returns location in the array
        });
      }
    };

  }

  angular
    .module('dragonSlayerChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
