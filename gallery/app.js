angular.module("gallery", [])
.controller("firstCtrl", function($scope){

	$scope.arrImg = [
	{ name: "foto 1", url: "img/foto01.jpg", favorite: false },
	{ name: "foto 2", url: "img/foto02.jpg", favorite: false },
	{ name: "foto 3", url: "img/foto03.jpg", favorite: false },
	{ name: "foto 4", url: "img/foto04.jpg", favorite: false },
	{ name: "foto 5", url: "img/foto05.jpg", favorite: false },
	{ name: "foto 6", url: "img/foto06.jpg", favorite: false },
	{ name: "foto 7", url: "img/foto07.jpg", favorite: false },
	{ name: "foto 8", url: "img/foto08.jpg", favorite: false },
	{ name: "foto 9", url: "img/foto09.jpg", favorite: false },
	{ name: "foto 10", url: "img/foto10.jpg", favorite: false },
	];

	$scope.imageIndex = -1;
	$scope.gallery = true;
	$scope.favorites = false;

	$scope.openItem = function(idx) {
		$scope.imageIndex = idx;
	};

	$scope.closeItem = function() {
		$scope.imageIndex = -1;
	};

	$scope.openGallery = function() {
		$scope.gallery = true;
		$scope.favorites = false;
	};

	$scope.openFavorites = function() {
		$scope.gallery = false;
		$scope.favorites = true;
	};

	$scope.change = function(idx) {
		$scope.arrImg[idx].favorite = !$scope.arrImg[idx].favorite;
	};

});