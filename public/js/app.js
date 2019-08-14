console.log("you connected?");

const app = angular.module('MoviesApp', []);

app.controller('MoviesController', ["$http", function($http) {

    console.log(this.title)
    this.getMovies = () => {
        $http({
            method: "GET",
            query: this.title,
            end: "&page=1&include_adult=false",
            url: "https://api.themoviedb.org/3/search/movie?api_key=061fedfef8ce353a68d5e4c131350183&language=en-US&query=" + query + end
        }).then((response)=>{
            console.log(response.data);
            console.log(response.data.overview);
            this.movies = response.data;
        });
    };
    this.getMovies();

}]); // app.controller closing
