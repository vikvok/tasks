angular.module("gallery", [])
.controller("firstCtrl", function($scope){

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

	$scope.zoom = function() {

		overlay.style.display = 'block';
		imgZoom.style.display = 'block';

	};

});