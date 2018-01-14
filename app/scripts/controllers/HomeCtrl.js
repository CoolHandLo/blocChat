(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all
    }

    angular
        .module('coolHandChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
