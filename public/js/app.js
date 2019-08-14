console.log("you connected?");

const app = angular.module('MoviesApp', []);

app.controller('MoviesController', ["$http",
function($http) {
    this.getMovies = () => {
        // GET request to search for desire to movie
        $http({
            method: "GET",
            url: "http://www.omdbapi.com/?t="+ this.title + "&apikey=da868025"
        }).then((response)=>{
            console.log(response.data);
            this.movies = response.data.Search;

        });
    };


}]); // app.controller closing
