angular.module('starter.services', [])

.factory('FirebaseRef', function () {
  return new Firebase('https://purplefitness.firebaseIO.com');
})

.factory('Resource', function (FirebaseRef, $firebaseArray, $firebaseObject) {
  return {
    factory: function (resource, extra) {
      return angular.extend({
        create: function (item) {
          FirebaseRef.child(resource).push(item);
        },
        get: function (id) {
          return $firebaseObject(FirebaseRef.child(resource).child(id));
        },
        remove: function (id) {
          $firebaseObject(FirebaseRef.child(resource).child(id)).$remove();
        },
        all: function () {
          return $firebaseArray(FirebaseRef.child(resource));
        },
        save: function (id, item) {
          FirebaseRef.child(resource).child(id).set(item);
        }
      }, extra);
    }
  };
})

.factory('Item', function (Resource) {
  return Resource.factory('itens', {
    isValid: function (item) {
      return /(.{1,512})/.test(item.nome)
        && /(.{1,16})/.test(item.unidade)
        && /([0-9\.\,]+)/.test(item.preco);
    }
  });
});
