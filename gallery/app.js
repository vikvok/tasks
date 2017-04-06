angular.module("gallery", [])
.controller("firstCtrl", function($scope){

	$scope.overlay = false;
	$scope.favorites = false;
	$scope.item;
	
	$scope.arrImg = [
	{ name: "foto 1", url: "img/foto01.jpg" },
	{ name: "foto 2", url: "img/foto02.jpg" },
	{ name: "foto 3", url: "img/foto03.jpg" },
	{ name: "foto 4", url: "img/foto04.jpg" },
	{ name: "foto 5", url: "img/foto05.jpg" },
	{ name: "foto 6", url: "img/foto06.jpg" },
	{ name: "foto 7", url: "img/foto07.jpg" },
	{ name: "foto 8", url: "img/foto08.jpg" },
	{ name: "foto 9", url: "img/foto09.jpg" },
	{ name: "foto 10", url: "img/foto10.jpg" },
	];

	$scope.openGallery = function() {
		$scope.favorites = false;
	};

	$scope.openFavorites = function() {
		$scope.favorites = true;
	};

	$scope.openItem = function(item, index) {
		$scope.overlay = true;
		$scope.item = item;
		$scope.index = index;
	};

	$scope.closeItem = function() {
		$scope.overlay = false;
	};

	$scope.next = function() {
		if ($scope.index < ($scope.arrImg.length -1)) {
		$scope.item = $scope.arrImg[++$scope.index].url;
		} else {
			console.log('Последнее изображение');
		};
	};

	$scope.prew = function() {
		if ($scope.index < $scope.arrImg.length && $scope.index > 0) {
		$scope.item = $scope.arrImg[--$scope.index].url;
		} else {
			console.log('Последнее изображение');
		};
	};


});