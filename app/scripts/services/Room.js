(function() {
  function Room($firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);



    vm.addNewRoom = function (newRoomName) {
      rooms.$add(newRoomName).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id); // returns location in the array
      });
};

    return {
      all: rooms
    };


  }


  angular
    .module('dragonSlayerChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
