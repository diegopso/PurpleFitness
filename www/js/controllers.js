angular.module('starter.controllers', [])

.controller('ItemAddCtrl', function($scope, Item, $location, toaster, GRACE_PERIOD) {
  $scope.item = {};

  $scope.save = function (item) {
    if (Item.isValid(item)) {
      Item.create(item);
      $location.path("/itens");
      toaster.pop('success', "Concluído!", "Item criado com sucesso", GRACE_PERIOD);
    } else {
      toaster.pop('error', "Erro!", "Alguns campos estão com erros", GRACE_PERIOD);
    }
  };
})

.controller('ItemEditCtrl', function($scope, Item, $location, $stateParams, toaster, $location, GRACE_PERIOD) {
  $scope.item = Item.get($stateParams.id);
  //item.$bindTo($scope, "item");

  $scope.save = function (item) {
    if (Item.isValid(item)) {
      $location.path("/itens");
      toaster.pop('success', "Concluído!", "Item salvo com sucesso", GRACE_PERIOD);

      Item.save(item.$id, {
        nome: item.nome,
        preco: item.preco,
        unidade: item.unidade,
      });
    } else {
      toaster.pop('error', "Erro!", "Alguns campos estão com erros", GRACE_PERIOD);
    }
  };
})

.controller('ItensCtrl', function($scope, Item, toaster, $timeout, GRACE_PERIOD) {
  $scope.itens = Item.all();
  $scope.remove = function (item) {
    toaster.pop('success', "Concluído!", "Item excluído com sucesso", GRACE_PERIOD);
    $scope.itens.$remove(item);
  };
});