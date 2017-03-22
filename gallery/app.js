angular.module("gallery", [])
.controller("firstCtrl", function($scope){

	$scope.overlay = false;
	$scope.imgZoom = false;
	$scope.gallery = true;
	$scope.favorites = false;
	
	$scope.data = {visible : false};

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

<<<<<<< HEAD
	$scope.openGallery = function() {
		$scope.gallery = true;
		$scope.favorites = false;
	};

	$scope.openFavorites = function() {
		$scope.gallery = false;
		$scope.favorites = true;
	};

	$scope.openItem = function(item) {
		$scope.overlay = true;
		$scope.imgZoom = true;
		$scope.item = item;

=======
	/*$scope.openItem = function(item) {
		overlay.style.display = 'block';
		imgZoom.style.display = 'block';
		imgZoom.src = item;
>>>>>>> origin/master

	};

	$scope.closeItem = function() {
<<<<<<< HEAD
		$scope.overlay = false;
		$scope.imgZoom = false;
=======
		imgZoom.src = '';
		overlay.style.display = 'none';
		imgZoom.style.display = 'none';
	}*/

	$scope.imageIndex = -1;

	$scope.openItem = function(idx) {
		$scope.imageIndex = idx;
	};

	$scope.closeItem = function() {
		$scope.imageIndex = -1;
>>>>>>> origin/master
	};

});