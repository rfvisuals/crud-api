console.log("you connected?");
const app = angular.module('MoviesApp', []);

app.controller('MoviesController', ["$http", function($http) {
    $http({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/550?api_key=061fedfef8ce353a68d5e4c131350183"
    }).then((response)=>{
        console.log(response.data);
        this.movies = response.data
    })



}]); // app.controller closing
