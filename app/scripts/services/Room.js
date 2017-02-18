(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    return {
      all: rooms
    };

Room.addRoom = function() {
  rooms.$add({ /*Want our model.input here*/ }).then(function(ref) {
  let id = ref.key;
  console.log("added record with id " + id);
  rooms.$indexFor(id); // returns location in the array
})
};
  }

  angular
    .module('dragonSlayerChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
