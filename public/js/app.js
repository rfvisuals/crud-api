console.log("you connected?");

const app = angular.module('MoviesApp', []);

app.controller('MoviesController', ["$http",function($http) {
    this.indexOfEditFormToShow = null;

    this.getMovies = () => {

        // GET request to search for desire to movie
        $http({
            method: "GET",
            url: "http://www.omdbapi.com/?s="+ this.title + "&apikey=da868025"
        }).then((response)=>{
            console.log(response.data);
            this.movies = response.data.Search;

        });
    };

    this.getInfo = (imdbID) => {
        $http({
            method: "GET",
            url: "http://www.omdbapi.com/?i="+ imdbID + "&apikey=da868025"
        }).then((response)=>{
            // console.log(imdbID);
            console.log(response.data, response.data.Year);
        });
    };

    this.showInfo = (imdbID) => {
        console.log(this.Comment);
        console.log(imdbID);
        $http({
            method: "POST",
            url: "/movies/",
            data: {
                Comment: this.Comment,
                Watched: this.Watched
            }
        }).then((response)=>{
            console.log(response);
        })

    };

    this.deleteComment = (imdbID) => {
        $http({
            method: "DELETE",
            url: "/" + imdbID
        }).then((response)=>{
            console.log(response);

        })
    }


}]); // app.controller closing
