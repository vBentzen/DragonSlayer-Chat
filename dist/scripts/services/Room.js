(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    return {
      all: rooms
    };

var addRoom = function() {
  rooms.$add({ foo: "bar" }).then(function(ref) {
  var id = ref.key;
  console.log("added record with id " + id);
  rooms.$indexFor(id); // returns location in the array
})
};
  }

  angular
    .module('dragonSlayerChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
